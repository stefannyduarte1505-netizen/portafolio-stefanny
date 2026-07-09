import { useEffect } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import ScrollSection from '../components/sections/ScrollSection'

const GILDA   = "'Gilda Display', serif"
const POPPINS = "'Poppins', sans-serif"

function FullBleed({ src }) {
  return (
    <div style={{ width: '100%', backgroundColor: '#fff' }}>
      <img src={src} alt="" draggable={false}
        style={{ width: '100%', height: 'auto', display: 'block', pointerEvents: 'none', userSelect: 'none' }}
      />
    </div>
  )
}

function MetaRow({ label, value }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'clamp(4rem,6vw,6rem) 1fr', gap: '0 1rem', paddingBottom: '0.65rem', borderBottom: '0.5px solid rgba(26,24,21,0.08)' }}>
      <span style={{ fontFamily: POPPINS, fontWeight: 300, fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(26,24,21,0.32)', paddingTop: '0.12em' }}>
        {label}
      </span>
      <span style={{ fontFamily: POPPINS, fontWeight: 300, fontSize: '15px', color: 'rgba(26,24,21,0.65)', lineHeight: 1.6 }}>
        {value}
      </span>
    </div>
  )
}

const SECTIONS = [
  {
    label: 'Research & Strategy',
    heading: 'Research & Strategy',
    body: 'Two distinct user profiles, a practical family buyer and an aspirational design-driven buyer, revealed the same underlying tension: strong emotional motivation to visit the store, undermined by a physical and digital experience that doesn\'t yet support it. From these insights, three strategic pillars emerged to close that gap: Experience, Recall, and Reward.',
    images: [
      '/projects/sole/research-1.png',
      '/projects/sole/research-2.png',
      '/projects/sole/research-3.png',
      '/projects/sole/research-4.png',
      '/projects/sole/research-5.png',
    ],
  },
  {
    label: 'Digital Strategy',
    heading: 'Digital Strategy',
    body: 'One digital product, two experiences. The Virtual Catalog MVP extends the in-store inventory through interactive touch screens, adapting its interface to each audience: a Light Mode for the practical Sole buyer, offering autonomous browsing, product specs, and first-party data capture, and a Dark Mode for the aspirational S•Collection buyer, where users combine and apply finishes at real size before purchasing. Same catalog, two experiences designed for two very different moments of decision.',
    images: [
      '/projects/sole/digital-1.png',
      '/projects/sole/digital-2.png',
      '/projects/sole/digital-3.png',
    ],
  },
  {
    label: 'Spatial Branding & Signage System',
    heading: 'Spatial Branding & Signage System',
    body: 'Color sets the positioning before a single word is read: warm wood for Sole\'s everyday family life, matte black and marble for S•Collection\'s ritual and exclusivity.\n\nQR signage is embedded directly into furniture, countertops, cabinets, displays, turning every surface into an entry point to the digital catalog without breaking the spatial narrative.\n\nA minimal icon system (touch, recipe, temperature) extends that logic into wordless, functional signage, consistent across both lines, rendered in each brand\'s own color language.',
    images: [
      '/projects/sole/spatial-1.png',
      '/projects/sole/spatial-2.png',
      '/projects/sole/spatial-3.png',
      '/projects/sole/spatial-4.png',
      '/projects/sole/spatial-5.png',
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

      <button
        onClick={() => { sessionStorage.setItem('scrollToGallery', '1'); window.location.href = '/' }}
        style={{
          position: 'fixed', top: '1.5rem', right: isMobile ? '1rem' : '2rem', zIndex: 200,
          padding: '0.55rem 1.75rem', borderRadius: '100px',
          backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
          backgroundColor: 'rgba(255,255,255,0.75)',
          boxShadow: '0 2px 20px rgba(0,0,0,0.07)',
          border: '0.5px solid rgba(26,24,21,0.12)', cursor: 'pointer',
          fontFamily: POPPINS, fontWeight: 300,
          fontSize: '0.78rem', letterSpacing: '0.06em', color: '#1A1815',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#B9111C'}
        onMouseLeave={e => e.currentTarget.style.color = '#1A1815'}
      >
        Close
      </button>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '2.5rem' : 'clamp(2rem,6vw,6rem)',
        padding: `clamp(5rem,10vw,9rem) ${PAD} clamp(3rem,5vw,5rem)`,
        alignItems: 'start',
      }}>
        <h1 style={{
          fontFamily: GILDA, fontWeight: 400,
          fontSize: 'clamp(1.5rem,3vw,3.2rem)',
          letterSpacing: '-0.01em', lineHeight: 1.25,
          color: '#B9111C', margin: 0,
        }}>
          A service design and product strategy project that turned a saturated showroom into a guided, omnichannel experience — where technology builds confidence at every decision point.
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingTop: isMobile ? 0 : '0.4rem' }}>
          <MetaRow label="Cliente"  value="Sole & S•Collection, appliance retail,GrupoModulor,2024" />
          <MetaRow label="Proyecto" value="Sole: Phygital Experience" />
          <MetaRow label="Rol"      value="Service Design Lead — directed UX/UI strategy, co-creation methodology, and cross-functional alignment between brand, product, and operations at GrupoModulor." />
          <MetaRow label="Equipo"   value="Ximena Pizarro, Daniela Raez, Nicole Closa, Grace Huayanca, Giancarlo Grande." />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: '0.5rem' }}>
            {['Product Design', 'UX/UI', 'Service Design', 'Spatial Branding'].map(tag => (
              <span key={tag} style={{
                fontFamily: POPPINS, fontWeight: 300,
                fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(26,24,21,0.5)', border: '0.5px solid rgba(26,24,21,0.25)',
                padding: '0.25rem 0.65rem', borderRadius: '100px',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <FullBleed src="/projects/sole/cover-hero.png" />
      <ScrollSection {...SECTIONS[0]} />
      <FullBleed src="/projects/sole/cover-after-research.png" />
      <ScrollSection {...SECTIONS[1]} reverse />
      <FullBleed src="/projects/sole/cover-after-digital.png" />
      <ScrollSection {...SECTIONS[2]} />

      <div style={{ padding: `clamp(4rem,8vw,7rem) ${PAD}`, backgroundColor: '#fff', borderTop: '0.5px solid rgba(26,24,21,0.08)' }}>
        <h2 style={{ fontFamily: GILDA, fontWeight: 400, fontSize: 'clamp(1.5rem,2.2vw,2.2rem)', letterSpacing: '-0.01em', color: '#B9111C', margin: `0 0 clamp(1.5rem,3vw,2.5rem)` }}>
          Outcomes
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4,1fr)', gap: isMobile ? '1.5rem' : 'clamp(1rem,2vw,2rem)' }}>
          {OUTCOMES.map((text, i) => (
            <p key={i} style={{ fontFamily: POPPINS, fontWeight: 300, fontSize: '15px', lineHeight: 1.85, color: 'rgba(26,24,21,0.6)', margin: 0, paddingTop: '1rem', borderTop: '0.5px solid rgba(26,24,21,0.15)' }}>
              {text}
            </p>
          ))}
        </div>
      </div>

    </div>
  )
}
