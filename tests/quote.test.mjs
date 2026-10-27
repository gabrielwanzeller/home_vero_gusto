import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'

function load(file, globals = {}) {
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText
  const exports = {}
  vm.runInNewContext(code, { exports, ...globals })
  return exports
}
const { quoteIssue, quoteMessage, minimumAdultsForDate, menuCategories } = load('src/lib/business.ts')
const valid = { date: '2027-01-22', guests: 30, minimumConfirmed: true, location: 'Águas Claras, Brasília', style: 'Aniversário' }
const today = '2026-10-27'
const issue = overrides => quoteIssue({ ...valid, ...overrides }, today)

test('data obrigatória, real e não passada', () => {
  for (const date of ['', '2026-10-26', '2027-02-30', '2027-13-01', '22/01/2027']) assert.equal(issue({ date }).field, 'date')
  assert.equal(issue({ date: today }), null)
})
test('mínimos por dia preservados, sem redefinir adultos pagantes', () => {
  assert.equal(minimumAdultsForDate('2027-01-22'), 20)
  assert.equal(minimumAdultsForDate('2027-01-23'), 25)
  assert.equal(minimumAdultsForDate('2027-01-24'), 25)
  assert.equal(issue({ guests: 20 }), null)
  assert.equal(issue({ guests: 19 }).field, 'quantity')
  assert.equal(issue({ date: '2027-01-23', guests: 24 }).field, 'quantity')
  assert.equal(issue({ date: '2027-01-23', guests: 25 }), null)
})
test('total não substitui confirmação independente do mínimo comercial', () => {
  for (const guests of [25, 100, 110]) assert.equal(issue({ guests, minimumConfirmed: false }).field, 'minimumConfirmed')
})
test('capacidade padrão e faixa sob consulta não são rejeitadas', () => {
  for (const guests of [100, 101, 105, 110]) assert.equal(issue({ guests }), null)
})
test('fora da capacidade, vazio e números fracionários são rejeitados', () => {
  for (const guests of [0, -1, 111, 1000, 20.5, NaN, Infinity]) assert.equal(issue({ guests }).field, 'quantity')
})
test('local e tipo obrigatórios e com limite de tamanho', () => {
  for (const field of ['location', 'style']) {
    assert.equal(issue({ [field]: '   ' }).field, field)
    assert.equal(issue({ [field]: 'a'.repeat(121) }).field, field)
  }
})
test('mensagem aprovada continua com exatamente quatro dados', () => {
  assert.equal(quoteMessage(valid), 'Olá! Quero fazer um orçamento para meu evento.\n\n- Data: 22/01/2027\n- Pessoas: 30\n- Local do evento: Águas Claras, Brasília\n- Tipo de evento: Aniversário')
})
test('catálogo mantém 24 itens, sem banana-da-terra com carne seca', () => {
  assert.equal(menuCategories.flatMap(category => category.items).length, 24)
  assert.equal(JSON.stringify(menuCategories).includes('Banana-da-terra'), false)
})
test('eventos têm lista permitida de parâmetros, sem dados pessoais ou sobreposição de campos protegidos', () => {
  const window = { location: { pathname: '/orcamento' } }
  const { trackEvent } = load('src/lib/measurement.ts', { window, document: { documentElement: { dataset: { measurementMode: 'test' } } } })
  trackEvent('vg_quote_valid', { form_name: 'event_quote', capacity_consultation: 'yes', location: 'dado privado', email: 'dado privado', event: 'Lead', measurement_mode: 'live' })
  const event = JSON.parse(JSON.stringify(window.dataLayer[0]))
  assert.deepEqual(event, { form_name: 'event_quote', capacity_consultation: 'yes', event: 'vg_quote_valid', page_path: '/orcamento', measurement_mode: 'test' })
})
