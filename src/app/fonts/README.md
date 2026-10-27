# Fontes preservadas

Os arquivos WOFF2 são cópias sem alteração das fontes Inter (Latin, variável 100–900) e Oswald (Latin, pesos 600–700) já servidas pela versão base `3a37a6b` com `next/font/google`. Passaram a ser carregados com `next/font/local`, mantendo `display: swap`, preload, variáveis CSS e tipografia. Incluem os caracteres latinos usados pelo conteúdo em português.

Isso evita a falha de build do parser de URLs de fonte do Next 16.1.6 quando o Google retorna endpoints sem extensão com parâmetros de query. Referência: https://github.com/vercel/next.js/issues/99114. Não houve atualização ampla de framework.

Licenças SIL OFL 1.1 preservadas ao lado dos binários, obtidas do repositório oficial Google Fonts em 27/10/2026:

- https://github.com/google/fonts/blob/main/ofl/inter/OFL.txt
- https://github.com/google/fonts/blob/main/ofl/oswald/OFL.txt

Uso de fonte local: https://nextjs.org/docs/app/api-reference/components/font#local-fonts
