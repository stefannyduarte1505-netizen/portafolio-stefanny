import { useEffect, useRef, useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const PAD = 'clamp(1.5rem, 5vw, 5rem)'

const INFO = {
  cliente: 'Sole S.Collection, retail de electrodomésticos.',
  proyecto: 'Sole: Phygital Experience',
  rol: 'Liderazgo de Strategic Design, GAD y Branding Espacial, dirigiendo la metodología de co-creación en GrupoModulor.',
  equipo: 'Ximena Palma, Daniella Raes, Nicola, Giancarlo',
  tags: ['Spatial Branding', 'Product Design', 'Service Design', 'Spatial Branding'],
}

const SECTIONS = [
  {
    heading: 'El reto',
    body: 'Más allá del diagnóstico general de la tienda física, identifiqué tres fricciones específicas de producto al espacio: el espacio físico no alcanza para mostrar todo el inventario de SKUs sin saturar el local; el consumidor no logra proyectar cómo se verán los acabados de un electrodoméstico premium en su propia cocina antes de comprar; y la atención humana se cuela de botella mientras la cartelería estática con información técnica densa eleva la carga cognitiva al cliente.',
    images: ['/projects/sole/1.png', '/projects/sole/2.png', '/projects/sole/3.png'],
  },
  {
    cols: [
      {
        heading: 'Estrategia',
        body: 'Una auditoría de UX retail sobre las tiendas físicas de Sole identificó tres fricciones concretas: contaminación visual por saturación de producto expuesto, fachadas cerradas que actuaban como barrera psicológica de ingreso, y una distribución espacial mal resuelta donde el punto focal era el mostrador de pago en vez de la experiencia con el producto.',
      },
      {
        heading: 'Sole: Phygital Experience',
        body: 'Mediante un enfoque de Service Design, transformamos la exhibición de retail en un ecosistema interactivo y omnicanal que optimiza el proceso de compra según el perfil del usuario. El núcleo del proyecto es un sistema de señalética inteligente que articula una ruta de eficiencia transaccional y otra de exploración profunda.',
      },
    ],
    images: ['/projects/sole/4.png', '/projects/sole/5.png', '/projects/sole/6.png'],
  },
  {
    heading: 'Spatial Branding',
    body: 'Una auditoría de UX retail sobre las tiendas físicas de Sole identificó tres fricciones concretas: contaminación visual por saturación de producto expuesto, fachadas cerradas que actuaban como barrera psicológica de ingreso, y una distribución espacial mal resuelta donde el punto focal era el mostrador de pago en vez de la experiencia con el producto.',
    images: ['/projects/sole/7.png', '/projects/sole/8.png', '/covers/sole.png'],
  },
]

const OUTCOMES = [
  'Sistema de señalética inteligente que articula rutas de eficiencia transaccional y exploración profunda en el punto de venta.',
  'Plataforma de visualización de materiales en tiempo real integrada con catálogo digital de SKUs.',
  'Manual de Spatial Branding para replicabilidad en nuevas tiendas Sole a escala nacional.',
  'Reducción de carga cognitiva al cliente mediante jerarquía visual clara y herramientas de personalización digital.',
]

/* ── Image accordion — same animation as gallery ── */
function ImageAccordion({ images }) {
  const [active, setActive] = useState(0)
  const N = images.length
  const prev = () => setActive(i => (i - 1 + N) % N)
  const next = () => setActive(i => (i + 1) % N)
  const visible = [0, 1, 2].map(o => images[(active + o) % N])

  return (
    <div style={{ width: '100%' }}>
      <style>{`
        .sp-acc { display: flex; height: clamp(220px, 38vw, 480px); gap: 1px; }
        .sp-panel {
          overflow: hidden; cursor: pointer;
          background-size: cover; background-position: center; background-repeat: no-repeat;
          background-color: #e0ddd8;
          transition: flex 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease;
        }
        .sp-panel.sp-active    { opacity: 1; }
        .sp-panel.sp-collapsed { opacity: 0.65; }
        .sp-arrow {
          height: clamp(2rem,2.8vw,3rem); padding: 0 clamp(1rem,1.8vw,1.8rem);
          border-radius: 100px; border: 0.5px solid rgba(26,24,21,0.3);
          background: transparent; display: flex; align-items: center;
          justify-content: center; font-size: 0.9rem; color: #1A1815;
          cursor: pointer; white-space: nowrap;
          transition: background 0.2s, border-color 0.2s;
          font-family: 'Poppins', sans-serif;
        }
        .sp-arrow:hover { background: rgba(26,24,21,0.06); border-color: rgba(26,24,21,0.55); }
      `}</style>
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <button className="sp-arrow" onClick={prev}>←</button>
        <button className="sp-arrow" onClick={next}>→</button>
      </div>
      <div className="sp-acc">
        {visible.map((src, i) => (
          <div
            key={src}
            className={`sp-panel ${i === 0 ? 'sp-active' : 'sp-collapsed'}`}
            style={{ flex: i === 0 ? 5 : 1, backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </div>
  )
}

const arrowStyle = {
  fontFamily: "'Poppins', sans-serif",
  fontWeight: 300,
  fontSize: '0.85rem',
  color: 'rgba(26,24,21,0.5)',
  background: 'none',
  border: '0.5px solid rgba(26,24,21,0.25)',
  borderRadius: '100px',
  padding: '0.3rem 0.85rem',
  cursor: 'pointer',
  letterSpacing: '0.05em',
  transition: 'color 0.2s, border-color 0.2s',
}

/* ── Label–value row ── */
function InfoRow({ label, value }) {
  return (
    <div style={{ display: 'flex', gap: 'clamp(1rem, 3vw, 2.5rem)', paddingBottom: '0.75rem', borderBottom: '0.5px solid rgba(26,24,21,0.12)' }}>
      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 'clamp(0.58rem, 0.7vw, 0.68rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,24,21,0.38)', minWidth: 'clamp(3.5rem, 5vw, 5rem)', paddingTop: '0.1em' }}>
        {label}
      </span>
      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: 'clamp(0.65rem, 0.8vw, 0.78rem)', color: 'rgba(26,24,21,0.7)', lineHeight: 1.6 }}>
        {value}
      </span>
    </div>
  )
}

export default function SolePage() {
  const isMobile = useIsMobile()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ backgroundColor: '#F5F4F0', minHeight: '100vh' }}>

      {/* ── Close button ── */}
      <button
        onClick={() => {
          sessionStorage.setItem('scrollToGallery', '1')
          window.location.href = '/'
        }}
        style={{
          position: 'fixed', top: '1.5rem', right: isMobile ? '1rem' : '2rem', zIndex: 200,
          display: 'flex', alignItems: 'center',
          padding: '0.6rem 2rem', borderRadius: '100px',
          backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
          backgroundColor: 'rgba(245,244,240,0.55)',
          boxShadow: '0 2px 24px rgba(0,0,0,0.07)',
          border: 'none', cursor: 'pointer',
          fontFamily: "'Poppins', sans-serif", fontWeight: 400,
          fontSize: '0.95rem', letterSpacing: '0.04em',
          color: '#000', transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#820606'}
        onMouseLeave={e => e.currentTarget.style.color = '#000'}
      >
        Close
      </button>

      {/* ── Cover image ── */}
      <div style={{ width: '100%', aspectRatio: isMobile ? '4/3' : '16/7', overflow: 'hidden', backgroundColor: '#0e0e0e' }}>
        <img
          src="/covers/sole.png"
          alt="SOLE"
          draggable={false}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none', userSelect: 'none' }}
        />
      </div>

      {/* ── Info header ── */}
      <div style={{
        paddingTop: 'clamp(5rem, 10vw, 8rem)',
        paddingLeft: PAD, paddingRight: PAD,
        paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '2rem' : 'clamp(2rem, 6vw, 6rem)',
        alignItems: 'start',
        borderBottom: '0.5px solid rgba(26,24,21,0.15)',
        marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
      }}>
        {/* Left — label/value pairs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <InfoRow label="Cliente" value={INFO.cliente} />
          <InfoRow label="Proyecto" value={INFO.proyecto} />
          <InfoRow label="Rol" value={INFO.rol} />
          <InfoRow label="Equipo" value={INFO.equipo} />
        </div>

        {/* Right — tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'flex-start', paddingTop: isMobile ? 0 : '0.1rem' }}>
          {INFO.tags.map((tag, i) => (
            <span key={i} style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 400,
              fontSize: 'clamp(0.58rem, 0.68vw, 0.68rem)', letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#1A1815',
              border: '0.5px solid rgba(26,24,21,0.4)',
              padding: '0.3rem 0.75rem', borderRadius: '100px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Content sections ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}>

        {/* Section 1 — El reto */}
        <div style={{ paddingLeft: PAD, paddingRight: PAD }}>
          <h2 style={{
            fontFamily: "'Gilda Display', serif", fontWeight: 400,
            fontSize: 'clamp(1.1rem, 1.8vw, 1.7rem)', letterSpacing: '-0.01em',
            color: '#B9111C', margin: '0 0 clamp(1rem, 2vw, 1.5rem)',
          }}>
            {SECTIONS[0].heading}
          </h2>
          <p style={{
            fontFamily: "'Poppins', sans-serif", fontWeight: 300,
            fontSize: 'clamp(0.72rem, 0.85vw, 0.84rem)', lineHeight: 1.85,
            color: 'rgba(26,24,21,0.7)', margin: '0 0 clamp(2rem, 4vw, 3rem)',
            maxWidth: '680px',
          }}>
            {SECTIONS[0].body}
          </p>
          <ImageAccordion images={SECTIONS[0].images} />
        </div>

        {/* Section 2 — Estrategia (2-col) + images */}
        <div style={{ paddingLeft: PAD, paddingRight: PAD }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '2rem' : 'clamp(2rem, 5vw, 5rem)',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
          }}>
            {SECTIONS[1].cols.map(({ heading, body }) => (
              <div key={heading}>
                <h2 style={{
                  fontFamily: "'Gilda Display', serif", fontWeight: 400,
                  fontSize: 'clamp(1.1rem, 1.8vw, 1.7rem)', letterSpacing: '-0.01em',
                  color: '#B9111C', margin: '0 0 clamp(0.75rem, 1.5vw, 1.2rem)',
                }}>
                  {heading}
                </h2>
                <p style={{
                  fontFamily: "'Poppins', sans-serif", fontWeight: 300,
                  fontSize: 'clamp(0.72rem, 0.85vw, 0.84rem)', lineHeight: 1.85,
                  color: 'rgba(26,24,21,0.7)', margin: 0,
                }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
          <ImageAccordion images={SECTIONS[1].images} />
        </div>

        {/* Section 3 — Spatial Branding */}
        <div style={{ paddingLeft: PAD, paddingRight: PAD }}>
          <h2 style={{
            fontFamily: "'Gilda Display', serif", fontWeight: 400,
            fontSize: 'clamp(1.1rem, 1.8vw, 1.7rem)', letterSpacing: '-0.01em',
            color: '#B9111C', margin: '0 0 clamp(1rem, 2vw, 1.5rem)',
          }}>
            {SECTIONS[2].heading}
          </h2>
          <p style={{
            fontFamily: "'Poppins', sans-serif", fontWeight: 300,
            fontSize: 'clamp(0.72rem, 0.85vw, 0.84rem)', lineHeight: 1.85,
            color: 'rgba(26,24,21,0.7)', margin: '0 0 clamp(2rem, 4vw, 3rem)',
            maxWidth: '680px',
          }}>
            {SECTIONS[2].body}
          </p>
          <ImageAccordion images={SECTIONS[2].images} />
        </div>

        {/* Outcomes */}
        <div style={{ paddingLeft: PAD, paddingRight: PAD }}>
          <h2 style={{
            fontFamily: "'Gilda Display', serif", fontWeight: 400,
            fontSize: 'clamp(1.1rem, 1.8vw, 1.7rem)', letterSpacing: '-0.01em',
            color: '#B9111C', margin: '0 0 clamp(1.5rem, 3vw, 2.5rem)',
          }}>
            Outcomes
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: isMobile ? '1.5rem' : 'clamp(1rem, 2vw, 2rem)',
          }}>
            {OUTCOMES.map((text, i) => (
              <p key={i} style={{
                fontFamily: "'Poppins', sans-serif", fontWeight: 300,
                fontSize: 'clamp(0.68rem, 0.78vw, 0.78rem)', lineHeight: 1.8,
                color: 'rgba(26,24,21,0.65)', margin: 0,
                paddingTop: '1rem',
                borderTop: '0.5px solid rgba(26,24,21,0.2)',
              }}>
                {text}
              </p>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
