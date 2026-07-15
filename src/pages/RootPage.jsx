import { useEffect } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import ScrollSection from '../components/sections/ScrollSection'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../translations'

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

const IMAGES = {
  research: ['/projects/root/research-1.png','/projects/root/research-2.png','/projects/root/research-3.png','/projects/root/research-4.png','/projects/root/research-5.png','/projects/root/research-6.png'],
  digital:  ['/projects/root/digital-1.png','/projects/root/digital-2.png','/projects/root/digital-3.png','/projects/root/digital-4.png','/projects/root/digital-5.png'],
}

export default function RootPage() {
  const isMobile = useIsMobile()
  const { lang } = useLanguage()
  const tr = t[lang]
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const SECTIONS = [
    { label: 'Research & Strategy', heading: 'Research & Strategy', body: tr.root.research, images: IMAGES.research },
    { label: 'Digital Strategy',    heading: 'Digital Strategy',    body: tr.root.digital,  images: IMAGES.digital  },
  ]

  const PAD = 'clamp(1.5rem,5vw,5rem)'

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>

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
          {tr.root.hero}
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingTop: isMobile ? 0 : '0.4rem' }}>
          <MetaRow label="Cliente"  value="Digital Product Design · Master's Project, BAU Barcelona · 2026" />
          <MetaRow label="Proyecto" value="ROOT: Learning Self-Management Platform" />
          <MetaRow label="Rol"      value="UX/UI Designer & Researcher · co-leading research, product strategy, and interface design." />
          <MetaRow label="Equipo"   value="Mora Celaya, Alfredo Duarte, Stefanny Duarte, Alexandra Hilaire, Sara Prats." />
          <MetaRow label="Advisors" value="Cesar Úbeda, Jordi Hernandez, Sarah Romero, Jorge Agundez, Jose Saura." />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: '0.5rem' }}>
            {['Product Design', 'UX/UI', 'UX Research'].map(tag => (
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
