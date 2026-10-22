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
  coverageText: 'Atendemos todas as regiões do Distrito Federal e Entorno, sem taxa de deslocamento.',
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
  { question: 'Atendem fora de Brasília?', answer: business.coverageText },
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
  adults: number
  guests: number
  location: string
  style: string
}

export function quoteError(quote: EventQuote, today: string): string | null {
  const parsed = new Date(`${quote.date}T12:00:00Z`)
  if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(quote.date) || Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== quote.date || quote.date < today) {
    return 'Escolha uma data de hoje em diante.'
  }
  const minimum = minimumAdultsForDate(quote.date)
  if (!Number.isInteger(quote.adults) || quote.adults < minimum || quote.adults > business.capacityOnRequest) {
    return `Para essa data, o mínimo é de ${minimum} adultos pagantes. A capacidade máxima sob consulta é de ${business.capacityOnRequest} pessoas.`
  }
  if (!Number.isInteger(quote.guests) || quote.guests < quote.adults || quote.guests > business.capacityOnRequest) {
    return 'O total de convidados deve incluir os adultos informados e não pode ultrapassar 110 pessoas.'
  }
  if (!quote.location.trim() || !quote.style.trim()) {
    return 'Informe o bairro/cidade e o tipo de evento.'
  }
  return null
}

export function quoteMessage(quote: EventQuote) {
  const date = quote.date.split('-').reverse().join('/')
  const lines = [
    'Olá! Quero consultar um orçamento para meu evento.', '',
    `- Data: ${date}`, `- Adultos pagantes: ${quote.adults}`,
    `- Total de convidados: ${quote.guests}`, `- Bairro/cidade: ${quote.location.trim()}`,
    `- Tipo de evento: ${quote.style.trim()}`,
  ]
  if (quote.guests > business.capacity) lines.push('- Solicito avaliação de capacidade para evento acima de 100 pessoas.')
  return lines.join('\n')
}
