import { useEffect, useRef, useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

/* ── Same scroll-driven vertical slide as home gallery ── */
function ScrollSection({ label, heading, body, images }) {
  const wrapRef = useRef(null)
  const [active, setActive] = useState(0)
  const N = images.length

  useEffect(() => {
    const onScroll = () => {
      const wrap = wrapRef.current
      if (!wrap) return
      const scrolled = -wrap.getBoundingClientRect().top
      if (scrolled < 0) { setActive(0); return }
      const idx = Math.min(N - 1, Math.floor(scrolled / window.innerHeight))
      setActive(idx)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [N])

  return (
    <div ref={wrapRef} style={{ height: `${N * 100}vh`, position: 'relative' }}>
      <div style={{
        position: 'sticky', top: 0,
        height: '100vh',
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: '#fff',
      }}>
        {/* LEFT: text */}
        <div style={{
          width: '38%', flexShrink: 0,
          display: 'flex', flexDirection: 'column',
          padding: 'clamp(2.5rem,4vw,4rem) clamp(2rem,3.5vw,3.5rem)',
          gap: 'clamp(1rem,1.5vw,1.5rem)',
          overflow: 'hidden',
        }}>
          <p style={{ fontFamily:"'Poppins',sans-serif", fontWeight:300, fontSize:'0.6rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(26,24,21,0.32)', margin:0 }}>
            {label}
          </p>
          <h2 style={{ fontFamily:"'Gilda Display',serif", fontWeight:400, fontSize:'clamp(1.6rem,2.8vw,3.2rem)', letterSpacing:'-0.01em', lineHeight:1.1, color:'#B9111C', margin:0 }}>
            {heading}
          </h2>
          <p style={{ fontFamily:"'Poppins',sans-serif", fontWeight:300, fontSize:'clamp(0.72rem,0.82vw,0.82rem)', lineHeight:1.85, color:'rgba(26,24,21,0.6)', margin:0, maxWidth:'420px' }}>
            {body}
          </p>
          <p style={{ fontFamily:"'Poppins',sans-serif", fontWeight:300, fontSize:'0.58rem', letterSpacing:'0.15em', color:'rgba(26,24,21,0.28)', margin:'auto 0 0' }}>
            {String(active + 1).padStart(2,'0')} / {String(N).padStart(2,'0')}
          </p>
        </div>

        {/* RIGHT: vertical image strip */}
        <div style={{ flex:1, overflow:'hidden', position:'relative' }}>
          <div style={{
            display:'flex', flexDirection:'column',
            height:`${N * 100}vh`,
            transform:`translateY(-${active * 100}vh)`,
            transition:'transform 0.85s cubic-bezier(0.16,1,0.3,1)',
            willChange:'transform',
          }}>
            {images.map((src, i) => (
              <div key={src} style={{
                height:'100vh', flexShrink:0,
                display:'flex', alignItems:'center', justifyContent:'center',
                padding:'clamp(2rem,4vw,4rem)',
                backgroundColor:'#fff',
              }}>
                <img src={src} alt="" loading={i === 0 ? 'eager' : 'lazy'}
                  style={{ maxWidth:'100%', maxHeight:'100%', width:'auto', height:'auto', display:'block', objectFit:'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, value }) {
  return (
    <div style={{ display:'flex', gap:'clamp(1rem,3vw,2.5rem)', paddingBottom:'0.75rem', borderBottom:'0.5px solid rgba(26,24,21,0.1)' }}>
      <span style={{ fontFamily:"'Poppins',sans-serif", fontWeight:300, fontSize:'clamp(0.58rem,0.7vw,0.68rem)', letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(26,24,21,0.35)', minWidth:'clamp(3.5rem,5vw,5rem)', paddingTop:'0.1em' }}>
        {label}
      </span>
      <span style={{ fontFamily:"'Poppins',sans-serif", fontWeight:300, fontSize:'clamp(0.65rem,0.8vw,0.78rem)', color:'rgba(26,24,21,0.65)', lineHeight:1.6 }}>
        {value}
      </span>
    </div>
  )
}

const TAGS = ['Spatial Branding', 'Product Design', 'Service Design']

const SECTIONS = [
  {
    label: 'Research & Strategy',
    heading: 'El reto',
    body: 'Más allá del diagnóstico general de la tienda física, identifiqué tres fricciones específicas: el espacio no alcanza para mostrar todo el inventario sin saturar el local; el consumidor no logra proyectar cómo se verán los acabados de un electrodoméstico premium en su propia cocina; y la atención humana se convierte en cuello de botella mientras la cartelería estática eleva la carga cognitiva del cliente.',
    images: [
      '/projects/sole/frame-1.png',
      '/projects/sole/frame-2.png',
      '/projects/sole/frame-3.png',
      '/projects/sole/frame-4.png',
    ],
  },
  {
    label: 'Digital Strategy',
    heading: 'Sole: Phygital Experience',
    body: 'Mediante un enfoque de Service Design, transformamos la exhibición de retail en un ecosistema interactivo y omnicanal. Un sistema de señalética inteligente articula una ruta de eficiencia transaccional y otra de exploración profunda, permitiendo al usuario navegar el espacio según su perfil de compra.',
    images: [
      '/projects/sole/frame-5.png',
      '/projects/sole/frame-6.png',
      '/projects/sole/frame-7.png',
      '/projects/sole/frame-8.png',
    ],
  },
  {
    label: 'Spatial Branding',
    heading: 'Signage System',
    body: 'Una auditoría de UX retail identificó tres fricciones concretas: contaminación visual por saturación de producto expuesto, fachadas cerradas que actuaban como barrera psicológica de ingreso, y una distribución espacial donde el punto focal era el mostrador de pago en vez de la experiencia con el producto.',
    images: [
      '/projects/sole/strategic-1.png',
      '/projects/sole/strategic-2.png',
      '/projects/sole/strategic-3.png',
      '/projects/sole/strategic-4.png',
      '/projects/sole/strategic-6.png',
      '/projects/sole/strategic-7.png',
      '/projects/sole/strategic-8.png',
      '/projects/sole/strategic-9.png',
    ],
  },
]

const OUTCOMES = [
  'Sistema de señalética inteligente que articula rutas de eficiencia transaccional y exploración profunda.',
  'Plataforma de visualización de materiales en tiempo real integrada con catálogo digital de SKUs.',
  'Manual de Spatial Branding para replicabilidad en nuevas tiendas Sole a escala nacional.',
  'Reducción de carga cognitiva mediante jerarquía visual clara y herramientas de personalización digital.',
]

export default function SolePage() {
  const isMobile = useIsMobile()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const PAD = 'clamp(1.5rem,5vw,5rem)'

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>

      {/* ── Close ── */}
      <button
        onClick={() => { sessionStorage.setItem('scrollToGallery','1'); window.location.href = '/' }}
        style={{
          position:'fixed', top:'1.5rem', right: isMobile ? '1rem' : '2rem', zIndex:200,
          padding:'0.6rem 2rem', borderRadius:'100px',
          backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)',
          backgroundColor:'rgba(255,255,255,0.7)',
          boxShadow:'0 2px 24px rgba(0,0,0,0.07)',
          border:'0.5px solid rgba(26,24,21,0.12)', cursor:'pointer',
          fontFamily:"'Poppins',sans-serif", fontWeight:400,
          fontSize:'0.85rem', letterSpacing:'0.04em', color:'#1A1815',
          transition:'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color='#B9111C'}
        onMouseLeave={e => e.currentTarget.style.color='#1A1815'}
      >
        Close
      </button>

      {/* ── Hero cover ── */}
      <div style={{ width:'100%', height: isMobile ? '60vh' : '100vh', overflow:'hidden', backgroundColor:'#0e0e0e', position:'relative' }}>
        <img src="/covers/sole.png" alt="SOLE" draggable={false}
          style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', pointerEvents:'none', userSelect:'none' }}
        />
        <div style={{ position:'absolute', bottom: isMobile ? '2rem' : '3.5rem', left: isMobile ? '1.5rem' : '3.5rem' }}>
          <p style={{ fontFamily:"'Poppins',sans-serif", fontWeight:300, fontSize:'clamp(0.58rem,0.7vw,0.68rem)', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.5)', margin:'0 0 0.5rem' }}>
            Service Design · Spatial Branding
          </p>
          <h1 style={{ fontFamily:"'Gilda Display',serif", fontWeight:400, fontSize:'clamp(2rem,5vw,5.5rem)', letterSpacing:'-0.02em', lineHeight:1, color:'#fff', margin:0 }}>
            SOLE
          </h1>
        </div>
      </div>

      {/* ── Project info ── */}
      <div style={{
        paddingTop:'clamp(3rem,6vw,6rem)',
        paddingLeft:PAD, paddingRight:PAD,
        paddingBottom:'clamp(2.5rem,5vw,4rem)',
        display:'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '2rem' : 'clamp(2rem,6vw,6rem)',
        alignItems:'start',
        borderBottom:'0.5px solid rgba(26,24,21,0.1)',
      }}>
        <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
          <InfoRow label="Cliente"  value="Sole S.Collection, retail de electrodomésticos." />
          <InfoRow label="Proyecto" value="Sole: Phygital Experience" />
          <InfoRow label="Rol"      value="Liderazgo de Strategic Design, GAD y Branding Espacial." />
          <InfoRow label="Equipo"   value="Ximena Palma, Daniella Raes, Nicola, Giancarlo" />
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem', alignItems:'flex-start', paddingTop: isMobile ? 0 : '0.1rem' }}>
          {TAGS.map(tag => (
            <span key={tag} style={{
              fontFamily:"'Poppins',sans-serif", fontWeight:400,
              fontSize:'clamp(0.58rem,0.68vw,0.68rem)', letterSpacing:'0.1em', textTransform:'uppercase',
              color:'#1A1815', border:'0.5px solid rgba(26,24,21,0.4)',
              padding:'0.3rem 0.75rem', borderRadius:'100px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Scroll sections ── */}
      {SECTIONS.map(s => <ScrollSection key={s.label} {...s} />)}

      {/* ── Outcomes ── */}
      <div style={{ paddingLeft:PAD, paddingRight:PAD, paddingTop:'clamp(4rem,8vw,7rem)', paddingBottom:'clamp(4rem,8vw,7rem)', backgroundColor:'#fff' }}>
        <h2 style={{ fontFamily:"'Gilda Display',serif", fontWeight:400, fontSize:'clamp(1.1rem,1.8vw,1.7rem)', letterSpacing:'-0.01em', color:'#B9111C', margin:'0 0 clamp(1.5rem,3vw,2.5rem)' }}>
          Outcomes
        </h2>
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4,1fr)', gap: isMobile ? '1.5rem' : 'clamp(1rem,2vw,2rem)' }}>
          {OUTCOMES.map((text, i) => (
            <p key={i} style={{ fontFamily:"'Poppins',sans-serif", fontWeight:300, fontSize:'clamp(0.68rem,0.78vw,0.78rem)', lineHeight:1.8, color:'rgba(26,24,21,0.6)', margin:0, paddingTop:'1rem', borderTop:'0.5px solid rgba(26,24,21,0.18)' }}>
              {text}
            </p>
          ))}
        </div>
      </div>

    </div>
  )
}
