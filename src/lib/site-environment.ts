// Sinalizadores públicos de ambiente; não contêm credenciais.
export const isPreview = process.env.VERCEL_ENV === 'preview' || process.env.VERO_GUSTO_PREVIEW === '1'
