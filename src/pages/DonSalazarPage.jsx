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
    body: 'As the third generation of coffee growers from Villa Rica, Don Salazar\'s responsibility is to make Peru\'s finest specialty coffee accessible, without losing the craft behind it. Located next to a university campus inside a mall, the pop-up surfaced a clear business problem: students default to cappuccino and americano, never daring to try specialty coffee, even though they have the time and curiosity to do so.',
    images: [
      '/projects/don-salazar/1.png',
      '/projects/don-salazar/2.png',
    ],
  },
  {
    label: 'Digital Strategy',
    heading: 'Digital Strategy',
    body: 'Built around the concept "Discover Your Ideal Coffee," the digital layer transforms a sensory first impression into an informed purchase decision. A self-discovery kiosk guides the user through a personalized flow, from category and coffee type to brewing method, revealing real specs at every step: ratio, temperature, caffeine level, and brew time, until the system generates their ideal result. From there, users can save their recipe and pay directly from the screen.\n\nEvery interaction is also a data point, capturing what users explore, where they hesitate, and what they ultimately choose. A Community Panel completes the experience, letting visitors trace the full value chain from farm to cup and share their impressions, turning a single visit into a lasting connection with the brand.',
    images: [
      '/projects/don-salazar/3.png',
    ],
  },
  {
    label: 'Spatial Branding & Signage System',
    heading: 'Spatial Branding & Signage System',
    body: 'The physical space translates the "Discover Your Ideal Coffee" concept into a sensory journey. An interactive mural and dispensing furniture invite users to smell, touch, and observe, identifying preferences before ever placing an order.\n\nSignage follows a warm, natural palette,green, ochre, and orange,paired with mixed serif and script typography that nods to Villa Rica\'s heritage without resorting to folklore. QR-enabled panels extend the in-store ritual into a virtual catalog, while community pegboards display the brand\'s production journey, turning transparency itself into a piece of spatial storytelling.',
    images: [
      '/projects/don-salazar/4.png',
      '/projects/don-salazar/5.png',
    ],
  },
]

export default function DonSalazarPage() {
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
          A sensory and digital pop-up experience that turns coffee discovery into a guided ritual,built to convert university students from "just a coffee" into specialty coffee believers.
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingTop: isMobile ? 0 : '0.4rem' }}>
          <MetaRow label="Cliente"  value="Don Salazar, specialty coffee retail (Villa Rica, 1942),GrupoModulor,2024" />
          <MetaRow label="Proyecto" value="Café Don Salazar: Phygital Pop-Up Experience" />
          <MetaRow label="Rol"      value="Service Design Lead,directed the spatial concept, digital flow, and co-creation strategy at GrupoModulor." />
          <MetaRow label="Equipo"   value="Ximena Pizarro, Daniela Raez, Nicole Closa, Grace Huayanca, Giancarlo Grande." />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: '0.5rem' }}>
            {['Service Design', 'Spatial Branding', 'Product Design'].map(tag => (
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

      <FullBleed src="/projects/don-salazar/cover-hero.png" />
      <ScrollSection {...SECTIONS[0]} />
      <FullBleed src="/projects/don-salazar/cover-after-research.png" />
      <ScrollSection {...SECTIONS[1]} reverse />
      <FullBleed src="/projects/don-salazar/cover-after-digital.png" />
      <ScrollSection {...SECTIONS[2]} />

    </div>
  )
}
