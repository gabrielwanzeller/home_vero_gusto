# Aprovação e publicação — Vero Gusto

Preparado em 27/10/2026. Repositório `gabrielwanzeller/home_vero_gusto`, projeto existente Vercel `vero-gusto`. Branch isolada `codex/otimizacao-aprovacao-2026-10-27`, base de produção `3a37a6b71dd716e93fc7cf6e4b14c96ef3a6834b`. Não houve merge, deploy de produção, alteração de DNS, publicação de GTM nem alteração de campanhas/metas.

## Grupos para decisão do responsável

1. Visual, conteúdo, acessibilidade e desempenho: CTA antes do vídeo, composição lado a lado no desktop, formulário próximo das condições, contraste/foco, mídia versionada, fontes locais idênticas, conteúdo de eventos e Entorno, breadcrumbs visíveis. No celular, o contato fica no cabeçalho fixo para evitar a sobreposição observada no botão flutuante; este continua no desktop, oculto perto do formulário.
2. Formulário e medição: manter um campo de total e adicionar confirmação do mínimo de adultos pagantes. Essa é uma autodeclaração, sem redefinir quem conta como adulto pagante. O total abaixo do mínimo é incoerente e é rejeitado; não existe um segundo campo numérico que possa ser maior que o total. A equipe confirma a composição ao atender. Mensagem do WhatsApp permanece com data, pessoas, local e tipo. Novos eventos exigem migração coordenada do GTM conforme `migracao-gtm.md`.
3. Opcionais não ativados: “data a definir”, quantidade aproximada, produção de artigos e política definitiva de privacidade. A revisão visual está em `/revisao`, somente no ambiente de prévia. Não há artigos publicados nem novas URLs comerciais/por região.
4. Externos: revisar rascunho GTM, metas Ads e atribuição; aprovar redirecionamento permanente; confirmar privacidade/consentimento; configurar ou validar contas de busca. Não são consequências automáticas da aprovação do layout.

A aprovação deve identificar a versão apresentada e os grupos. Publicar somente o que for aprovado. Não promover o deployment de prévia diretamente: ele foi compilado com bloqueio de indexação e scripts de teste. Gerar um novo build para produção e verificar o ambiente.

## Ambientes e proteção

- Produção normal: `VERCEL_ENV=production`; não definir `VERO_GUSTO_PREVIEW=1`. Páginas comerciais indexáveis, GTM publicado carregado com a estratégia existente, robots e sitemap preservados.
- Prévia: `VERCEL_ENV=preview` (Vercel) ou `VERO_GUSTO_PREVIEW=1` (teste local). Cabeçalho `X-Robots-Tag: noindex, nofollow`, meta robots, robots com `Disallow: /`, sitemap vazio. Formulário em simulação e GTM de produção ausente. A proteção de acesso já existente na Vercel é preservada.
- Rotas internas de estilo continuam noindex. `/avalie` e `/linktree` preservam a política de produção anterior. `/revisao` responde 404 fora da prévia.
- Medições comparáveis de desempenho usam builds normais locais, com o mesmo container GTM e tags iniciais antes/depois. A ausência de terceiros na prévia é uma proteção para testes e não é apresentada como ganho de desempenho.

## Redirecionamento preparado, ainda não aplicado

Em 27/10/2026 o host `https://verogusto.com.br/` respondeu 307 para `https://www.verogusto.com.br/`. A preferência por www está coerente com canonical e metadados. Após aprovação, no projeto Vercel existente alterar apenas o status do redirecionamento do domínio sem www para permanente (308), mantendo destino www. Não criar um redirecionamento inverso ou uma segunda regra que forme cadeia/loop. Testar raiz e rota interna com query, HTTP e HTTPS; destino deve preservar caminho e parâmetros. Não mudar DNS. Reverter o status anterior se houver comportamento inesperado.

## Dependências externas e materiais

| Dependência | O que falta | O que o código não comprova |
|---|---|---|
| GTM / GA4 / Ads / Meta | Workspace e destinos de teste; revisão dos dois labels Ads, metas primárias/secundárias, importações, consentimento e automações de eventos | Integração de ponta a ponta ou duplicidade efetiva nos lances |
| Search Console | Inspeção de URLs, sitemap, indexação, consultas, CTR e Core Web Vitals com amostra suficiente | Ganho de posição ou aprovação dos CWV reais |
| Perfil da Empresa | Conferir área de serviço, base sem atendimento, dados e link oficial de avaliação com responsável autorizado | Endereço público, filiais ou elegibilidade de informações não examinadas na conta |
| Bing Webmaster / Places | Conferir descoberta e dados; métricas de IA quando disponíveis | Citações/visibilidade em IA ou indexação garantida |
| CRM / atendimento | Registrar mensagem recebida, proposta, contrato, receita e origem de forma consentida | Venda ou contato qualificado a partir de um clique |
| Materiais | Ingredientes/composição confirmados, fotos por sabor, transcrição fiel de falas, autorização de uso, contexto comprovável dos casos | Restrições alimentares atendidas, convidados/datas/resultados ou falas inventadas |
| Privacidade | Confirmar responsável, base legal, retenção, fornecedores, consentimento, mascaramento e atendimento aos titulares | Conformidade jurídica automática |

Sem novas integrações pagas, campanhas, orçamento de mídia ou automações nesta entrega. O blog depende de produção e revisão editorial autorizadas. O rascunho de privacidade e as pautas estão na área de revisão; não foi acrescentado e-mail.

## Conferência imediatamente após eventual publicação aprovada

1. Registrar commit, deployment, versão GTM e horário de corte. Conferir os domínios apontando para a versão aprovada.
2. Validar `/`, `/orcamento`, `/cardapio`, `/tipos-de-evento`, `/avalie`, `/linktree`, 404 real, menu, âncora `#solicitar`, conteúdo no HTML, canonical, Open Graph, fontes, mídia e links.
3. Garantir que `VERCEL_ENV=production`, que a flag local de teste está ausente e que as páginas públicas não herdaram noindex/X-Robots-Tag ou robots bloqueado; manter noindex interno. Sitemap deve conter somente as seis URLs públicas atuais. `/revisao` deve responder 404.
4. Testar o formulário e o caminho de abertura do WhatsApp com destinos de teste e filtros adequados, sem mensagens reais ou conversões fictícias. Verificar inválido, válido, duplicação, saída/retorno e alternativa quando a abertura for bloqueada.
5. Validar o container aprovado em conjunto com o código. Confirmar payloads sem dados pessoais, atribuição e linker; conferir que cliques de navegação e erro não sejam leads. Não escolher unilateralmente metas Ads.
6. Repetir Lighthouse/PageSpeed em produção com o perfil de tags aprovado e documentar diferenças de hospedagem, ferramenta e terceiros. TBT é laboratório e não substitui INP.

## Acompanhamento após publicação

- Primeiro período: acompanhar erros de formulário, tentativas válidas, cliques de continuidade, mensagens efetivamente recebidas e discrepâncias de contagem. Anotar a quebra de definição das conversões.
- Comparar consultas qualificadas, propostas e contratos com a origem quando houver dados operacionais confiáveis. Considerar agenda, sazonalidade e mudanças de mídia; não atribuir toda variação ao site.
- Usar Search Console/PageSpeed com dados de campo suficientes: no percentil 75, separar celular e desktop, buscar LCP ≤ 2,5 s, INP ≤ 200 ms e CLS ≤ 0,1. Sem amostra, registrar ausência e continuar com laboratório e testes funcionais. Não instalar medição adicional sem decisão sobre privacidade e ferramentas.
- Observar consultas regionais e páginas existentes, indexação, impressões e CTR. GEO depende de rastreabilidade e referências reais; não inventar notas, posições ou citações.
- Checar Chrome/Android, Safari/iPhone e navegador interno do Instagram em aparelhos reais. Emulação de viewport não equivale a esses testes.

## Reversão

Antes da publicação, basta manter a prévia isolada; a produção permanece no ponto de partida. Após publicação aprovada, reverter o commit aprovado ou selecionar o deployment anterior `dpl_4h1ReDuU2u1PxK3zYXBoNSFXB8zw`, conforme o cenário. Reverter a versão GTM de forma coordenada se o código antigo voltar: os nomes e gatilhos antigos têm definições diferentes. Não misturar código novo com container antigo e considerar a medição concluída. Arquivos originais de vídeo e poster foram preservados, e novos recursos têm nomes versionados para evitar cache incorreto.
