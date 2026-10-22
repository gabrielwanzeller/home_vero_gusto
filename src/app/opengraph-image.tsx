import { ImageResponse } from 'next/og'

export const alt = 'Vero Gusto — rodízio de pizza para eventos em Brasília'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#DC2626', color: '#fff', padding: '70px', fontFamily: 'sans-serif', borderBottom: '24px solid #00601F' }}>
      <div style={{ display: 'flex', fontSize: 34, fontWeight: 700, marginBottom: 35 }}>VERO GUSTO</div>
      <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 1050 }}>Rodízio de pizza para eventos em Brasília</div>
      <div style={{ display: 'flex', fontSize: 30, marginTop: 38 }}>Estilo napolitano · Distrito Federal e Entorno</div>
      <div style={{ display: 'flex', fontSize: 24, marginTop: 25 }}>www.verogusto.com.br</div>
    </div>, size,
  )
}
