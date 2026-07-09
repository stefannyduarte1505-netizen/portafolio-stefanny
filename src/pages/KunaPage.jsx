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
    body: 'KUNA recently repositioned itself to lead with cultural depth over product volume,"each thread carries 5,000 years of history." The challenge: translate that repositioning into a physical store experience where two very different profiles arrive with the same expectation: an experience that justifies the price before they even touch the product.',
    images: [
      '/projects/kuna/research-1.png',
      '/projects/kuna/research-2.png',
      '/projects/kuna/research-3.png',
      '/projects/kuna/research-4.png',
    ],
  },
  {
    label: 'Digital Strategy',
    heading: 'Digital Strategy',
    body: 'The digital layer is intentionally invisible,technology as a quiet support tool, never as the protagonist. Four digital initiatives extend the KUNA experience beyond the physical transaction, each addressing a distinct moment in the customer relationship.\n\nThe KUNA Lifestyle Club transforms purchase into a continuous, personalized relationship, rewarding loyalty through dedicated spaces and exclusive benefits. The Artistic Experience KUNA bridges Peruvian ancestral craft and the modern traveler\'s need for immediacy, turning brief moments of consideration into confident, memorable purchase decisions. Express KUNA Service positions the store as a platform for cultural visibility, giving national and international exposure to ancestral techniques and contemporary Peruvian artists. Finally, Garment Care extends the brand\'s promise beyond the sale, educating users on how to preserve each garment according to its materials.\n\nTogether, these four initiatives move the user from first purchase to lasting brand loyalty, turning every touchpoint into an opportunity to deepen the relationship.',
    images: [
      '/projects/kuna/digital-1.png',
      '/projects/kuna/digital-2.png',
      '/projects/kuna/digital-3.png',
      '/projects/kuna/digital-4.png',
    ],
  },
  {
    label: 'Spatial Branding & Signage System',
    heading: 'Spatial Branding & Signage System',
    body: 'The store is conceived as a sophisticated, cultured home,one that integrates Andean origin into contemporary life without compromise. True elegance comes from essence.\n\nSpatial branding functions as a strategic orientation tool: it structures the user\'s journey, reinforces brand identity, and narrates KUNA\'s values through architectural gestures, material choices, and visual codes. Less is more,every element earns its place.',
    images: [
      '/projects/kuna/spatial-1.png',
      '/projects/kuna/spatial-2.png',
      '/projects/kuna/spatial-3.png',
      '/projects/kuna/spatial-4.png',
    ],
  },
]

export default function KunaPage() {
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
          A spatial and service design strategy that transforms a rebranded luxury textile store into a sophisticated home,where 5,000 years of Andean heritage become a lived, sensory experience that converts curiosity into lasting brand loyalty.
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingTop: isMobile ? 0 : '0.4rem' }}>
          <MetaRow label="Cliente"  value="KUNA, luxury Andean textile brand,GrupoModulor,2024" />
          <MetaRow label="Proyecto" value="KUNA: Heritage Experience & Retail Design Strategy" />
          <MetaRow label="Rol"      value="Service Design Lead,directed spatial strategy, touchpoint design, and co-creation methodology at GrupoModulor." />
          <MetaRow label="Equipo"   value="Ximena Pizarro, Daniela Raez, Nicole Closa, Paola Abal, Giancarlo Grande." />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: '0.5rem' }}>
            {['Service Design', 'Spatial Branding', 'Brand Strategy'].map(tag => (
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

      <FullBleed src="/projects/kuna/cover-hero.png" />
      <ScrollSection {...SECTIONS[0]} />
      <FullBleed src="/projects/kuna/cover-after-research.png" />
      <ScrollSection {...SECTIONS[1]} reverse />
      <ScrollSection {...SECTIONS[2]} />

    </div>
  )
}
