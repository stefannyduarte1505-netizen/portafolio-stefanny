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
    body: 'Texto por agregar.',
    images: [
      '/projects/root/research-1.png',
      '/projects/root/research-2.png',
      '/projects/root/research-3.png',
      '/projects/root/research-4.png',
      '/projects/root/research-5.png',
      '/projects/root/research-6.png',
    ],
  },
  {
    label: 'Digital Strategy',
    heading: 'Digital Strategy',
    body: 'Texto por agregar.',
    images: [
      '/projects/root/digital-1.png',
      '/projects/root/digital-2.png',
    ],
  },
]

export default function RootPage() {
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
          Tagline del proyecto por agregar.
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingTop: isMobile ? 0 : '0.4rem' }}>
          <MetaRow label="Cliente"  value="Por agregar" />
          <MetaRow label="Proyecto" value="Root" />
          <MetaRow label="Rol"      value="Por agregar" />
          <MetaRow label="Equipo"   value="Por agregar" />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: '0.5rem' }}>
            {['UX Research', 'Service Design'].map(tag => (
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

      <FullBleed src="/projects/root/cover-hero.png" />
      <ScrollSection {...SECTIONS[0]} />
      <FullBleed src="/projects/root/cover-after-research.png" />
      <ScrollSection {...SECTIONS[1]} reverse />

    </div>
  )
}
