export const business = {
  name: 'Vero Gusto',
  url: 'https://www.verogusto.com.br',
  phone: '(61) 98320-2467',
  whatsapp: '5561983202467',
  cnpj: '55.461.568/0001-00',
  instagram: 'https://www.instagram.com/verogusto.eventos/',
  // Perfil identificado pelo mapa já utilizado no site. Substituir pelo link
  // oficial de avaliação quando disponibilizado pelo responsável pelo perfil.
  googleProfile: 'https://www.google.com/maps?cid=3917356030940904562',
  minWeekday: 20,
  minWeekend: 25,
  capacity: 100,
  capacityOnRequest: 110,
  durationHours: 3,
  arrivalHours: 2,
  minimumText: 'Mínimo de 20 adultos pagantes em dias úteis e 25 adultos pagantes nos finais de semana.',
  capacityText: 'Atendimento para até 100 pessoas, com possibilidade de até 110 sob consulta.',
  timingText: 'Serviço padrão de 3 horas; 4 horas sob consulta. A equipe chega 2 horas antes do início.',
  menuText: 'O cardápio contratado pode variar conforme a quantidade de pessoas e será definido na proposta. A proposta informa quais entradas e sabores do catálogo serão servidos no seu evento.',
  paymentText: 'Após a assinatura do contrato, a entrada é de 50% para eventos de até 50 pessoas e 35% acima de 50. O saldo é pago no evento. Há possibilidade de Pix parcelado, quitado antes do evento, e cartão em até 12 vezes, com taxas.',
  childrenText: 'Crianças até 5 anos não pagam. De 6 a 10 anos, o valor depende da proposta. A partir de 11 anos, pagam integral.',
  includedText: 'Pratos para pizza, talheres, copos descartáveis e garçons para servir as pizzas estão incluídos.',
  extrasText: 'Bebidas e garçom exclusivo para bebidas são adicionais. Pratos e talheres para bolo e taças ficam por conta do cliente.',
  setupText: 'Precisamos de uma pia e levamos mesa de apoio. Quando utilizado o forno elétrico, é necessária alimentação 220 V e tomada dedicada de 20 A, sem adaptador.',
  serviceText: 'Rodízio de pizza preparado no local do evento, com estrutura e equipe.',
  coverageText: 'Atendemos todas as regiões do Distrito Federal e Entorno, sem taxa de deslocamento.',
  productionBaseText: 'Nossa base serve somente para produção e saída para eventos. Não recebe clientes.',
  doughText: 'Massa de longa fermentação, preparada com biga, com fermentação de até 48 horas.',
} as const

export const menuCategories = [
  { title: 'Entradas', items: [
    'Cestinha de Pastel com Patê', 'Rotolino de Calabresa',
    'Rotolino de Calabresa com Geleia de Pimenta', 'Rotolino de Queijo com Pesto',
    'Rotolino de Queijo com Geleia de Pimenta', 'Rotolino Banana Caramelizada',
    'Rotolino de Frango com Catupiry',
  ] },
  { title: 'Pizzas salgadas', items: [
    'Calabresa Tradicional', 'Marguerita', 'Frango com Catupiry', 'Calabresa Tentação',
    'Bacon', 'Portuguesa', 'Diavoletta', 'Quatro Queijos',
    'Milho com gorgonzola e catupiry', 'Milho com bacon e catupiry',
    'Carne Seca com catupiry', 'Abobrinha com gorgonzola e catupiry',
  ] },
  { title: 'Pizzas doces', items: [
    'Banana com Canela', 'Banana com chocolate', 'Chocolate com Morango',
    'Romeu e julieta', 'Banana com Doce de Leite',
  ] },
] as const

export const faqs = [
  { question: 'Qual o número mínimo de pessoas?', answer: business.minimumText },
  { question: 'Qual é a capacidade de atendimento?', answer: business.capacityText },
  { question: 'O que preciso fornecer de estrutura?', answer: business.setupText },
  { question: 'Vocês atendem em apartamento?', answer: 'Sim, atendemos em apartamentos, áreas gourmet e salões de festas. Confirme com o condomínio as regras de uso do espaço e informe nossa equipe para planejarmos o forno e a montagem.' },
  { question: 'Quanto tempo dura o rodízio?', answer: business.timingText },
  { question: 'Vocês fornecem pratos, talheres e garçons?', answer: `${business.includedText} ${business.extrasText}` },
  { question: 'Crianças pagam?', answer: business.childrenText },
  { question: 'Quais são os sabores inclusos?', answer: business.menuText },
  { question: 'Vocês lavam a louça?', answer: 'Não lavamos pratos ou copos do local. Nossa equipe organiza a própria estação de trabalho e os utensílios da operação; não realizamos serviço de copa ou limpeza do local.' },
  { question: 'Qual a forma de pagamento?', answer: business.paymentText },
  { question: 'Quais regiões do DF e Entorno vocês atendem?', answer: `${business.coverageText} Para consultar a disponibilidade, envie a data, a quantidade de convidados, o local do evento (com bairro e cidade) e o tipo de evento. A equipe confirma a agenda e as condições de montagem no espaço informado.` },
] as const

export function whatsappUrl(message: string) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`
}

export function minimumAdultsForDate(date: string) {
  const weekday = new Date(`${date}T12:00:00-03:00`).getUTCDay()
  return weekday === 0 || weekday === 6 ? business.minWeekend : business.minWeekday
}

export interface EventQuote {
  date: string
  guests: number
  location: string
  style: string
  minimumConfirmed: boolean
}

export const quoteGreeting = 'Olá! Quero fazer um orçamento para meu evento.'
export const quoteTemplate = [quoteGreeting, '', '- Data: ', '- Pessoas: ', '- Local do evento: ', '- Tipo de evento: '].join('\n')

export function quoteIssue(quote: EventQuote, today: string): { field: string; message: string } | null {
  const parsed = new Date(`${quote.date}T12:00:00Z`)
  if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(quote.date) || Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== quote.date || quote.date < today) {
    return { field: 'date', message: 'Escolha uma data válida de hoje em diante.' }
  }
  const minimum = minimumAdultsForDate(quote.date)
  if (!Number.isInteger(quote.guests) || quote.guests < minimum || quote.guests > business.capacityOnRequest) {
    return { field: 'quantity', message: `Informe um número inteiro entre ${minimum} e ${business.capacityOnRequest} convidados para essa data. O total inclui todas as pessoas presentes.` }
  }
  if (!quote.minimumConfirmed) {
    return { field: 'minimumConfirmed', message: `Confirme se o evento terá pelo menos ${minimum} adultos pagantes. Se precisar esclarecer a contagem, converse com a equipe pelo WhatsApp.` }
  }
  if (!quote.location.trim()) return { field: 'location', message: 'Informe o local do evento.' }
  if (!quote.style.trim()) return { field: 'style', message: 'Informe o tipo de evento.' }
  if (quote.location.trim().length > 120) return { field: 'location', message: 'Use até 120 caracteres para informar o local.' }
  if (quote.style.trim().length > 120) return { field: 'style', message: 'Use até 120 caracteres para informar o tipo de evento.' }
  return null
}

export function quoteError(quote: EventQuote, today: string): string | null {
  return quoteIssue(quote, today)?.message || null
}

export function quoteMessage(quote: EventQuote) {
  const date = quote.date.split('-').reverse().join('/')
  return [
    quoteGreeting, '',
    `- Data: ${date}`, `- Pessoas: ${quote.guests}`,
    `- Local do evento: ${quote.location.trim()}`,
    `- Tipo de evento: ${quote.style.trim()}`,
  ].join('\n')
}
