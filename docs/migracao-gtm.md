# Migração de medição — rascunho, não publicado

Versão do código: branch `codex/otimizacao-aprovacao-2026-10-27`, base `3a37a6b`. O container público `GTM-WMKB8GZZ` foi inspecionado em 27/10/2026. Não há acesso administrativo ao GTM/GA4/Ads nesta sessão; nenhuma configuração externa foi alterada.

## Evidência e dependência de publicação coordenada

O container examinado usa seletores de cliques `[data-gtm="send_form_whatsapp"]`, `[data-gtm="generate_form"]` e `[data-gtm="click_contact"]`. O primeiro acionava GA4 `send_form_whatsapp`, Meta Lead e duas conversões Ads; navegação/contato também acionavam tags de lead. O código anterior emitia eventos personalizados, mas os gatilhos publicados examinados eram de clique. A versão proposta remove os seletores antigos e usa eventos `vg_*`, separados por significado. Isso interrompe os falsos acionamentos antigos, mas exige migrar os gatilhos antes de concluir a medição em produção. Não publicar apenas um lado e declarar a integração pronta.

Tags Ads encontradas: ID `AW-17749979652`, labels `OaQ8CKvL8c4bEITk7I9C` e `z42FCMvyrZ0cEITk7I9C`. O fato de compartilharem gatilhos não comprova duplicidade nos lances. Conferir nas contas a categoria, origem, contagem, atribuição, condição principal/secundária, metas personalizadas, importações GA4 e campanhas que usam cada meta. Não excluir ou promover uma delas automaticamente.

## Contrato de eventos

| Evento | Momento | Parâmetros próprios | Uso proposto |
|---|---|---|---|
| `vg_quote_navigate` | Clique num link para /orcamento, incluindo âncora | form_name, placement | Navegação; nunca lead |
| `vg_quote_view` | Formulário visível, uma vez por montagem | form_name | Diagnóstico; nunca lead |
| `vg_quote_start` | Primeira alteração de campo | form_name | Diagnóstico; nunca lead |
| `vg_quote_valid` | Dados válidos; mensagem preparada e tentativa de abrir WhatsApp | form_name, capacity_consultation=yes/no | Microconversão; não comprova envio nem contrato |
| `vg_whatsapp_click` | Clique direto ou alternativa de WhatsApp | contact_method, placement | Contato iniciado; não comprova mensagem |

Todos incluem `page_path` (sem query), `measurement_mode=live|test`. Não enviar data, local, tipo de evento, quantidade exata, mensagem, telefone do visitante, URL completa do WhatsApp, e-mail ou qualquer dado pessoal como parâmetro comum. A função do código permite apenas os parâmetros listados. O formulário válido não recebe atributo antigo de conversão e tem deduplicação de submissões idênticas até edição de um campo. Navegar de novo é uma nova interação; os eventos de etapas não devem ser somados como leads.

## Passo a passo no GTM, em workspace de rascunho

1. Exportar a versão publicada e registrar o ID para reversão. Criar workspace separado. Não publicar.
2. Criar variáveis Data Layer v2 para `measurement_mode`, `page_path`, `form_name`, `placement`, `capacity_consultation`, `contact_method`. Usar nomes de evento exatos, sem regex ampla.
3. Criar os cinco gatilhos Custom Event da tabela. Para tags de produção, exigir `measurement_mode` igual a `live` e hostname igual a `www.verogusto.com.br`. Previews/localhost não podem alimentar conversões reais.
4. Desvincular os gatilhos antigos das tags de lead/conversão e aposentar esses gatilhos de clique. Conferir também configurações Meta automáticas e eventuais triggers de submit genéricos. Não manter simultaneamente dois caminhos para a mesma ação.
5. Mapear navegação, visualização e início para GA4 como diagnóstico, sem conversões Ads/Meta Lead. Preparar o mapeamento de `vg_quote_valid` como microconversão, condicionado à decisão sobre metas. Nomear de forma que não implique mensagem recebida ou venda. Clique direto no WhatsApp deve continuar separado.
6. Preservar Google tag, conversion linker, identificadores de campanha e atribuição. Não atrasar todo GTM até interação. Clarity/Meta geram tarefas longas: avaliar em rascunho a necessidade, consentimento, frequência e eventual carregamento após load da ferramenta de sessões. Não remover tags para melhorar uma nota. Reavaliar o desempenho com o container aprovado.
7. Validar em destino de teste/contêiner de teste, com filtros de hostname. A prévia atual não carrega o container publicado: seus eventos locais podem ser conferidos no dataLayer sem disparar tags reais. Para Tag Assistant, usar container/destinos de teste; não injetar cegamente o container de produção na prévia.
8. Testar vazio, erros, confirmação de mínimo, válido, clique repetido, texto/ícone, cabeçalho desktop/mobile, CTA, rodapé e botão flutuante. Inválido deve gerar zero `vg_quote_valid`; válido repetido sem edição deve gerar um. Inspecionar payloads sem dados pessoais.
9. Somente após aprovação da versão e do rascunho, publicar código e container de forma coordenada, conferir DebugView/destinos apropriados e registrar o instante da mudança. Metas de campanhas precisam de aprovação específica.

## Comparação e limites

Corrigir eventos falsos pode reduzir números reportados sem reduzir contatos reais. Marcar a mudança de definição na série histórica e não comparar diretamente os antigos cliques contados como lead com consultas válidas. Mensagem recebida, proposta enviada, contrato e receita dependem de registro operacional/CRM e, se pertinente, integração offline consentida e deduplicada. Não existe essa comprovação no código atual. Não há promessa de aumento de vendas.
