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

const IMAGES_EN = {
  research: [
    '/projects/s-collection/research-1.png',
    '/projects/s-collection/research-2.png',
    '/projects/s-collection/research-3.png',
  ],
  digital: [
    '/projects/s-collection/digital-1.png',
    '/projects/s-collection/digital-2.png',
    '/projects/s-collection/digital-3.png',
    '/projects/s-collection/digital-4.png',
    '/projects/s-collection/digital-5.png',
    '/projects/s-collection/digital-6.png',
  ],
}
const IMAGES_ES = {
  research: [
    '/projects/s-collection/es/research-1.png',
    '/projects/s-collection/es/research-2.png',
  ],
  digital: [
    '/projects/s-collection/es/digital-1.png',
    '/projects/s-collection/es/digital-2.png',
    '/projects/s-collection/es/digital-3.png',
    '/projects/s-collection/es/digital-4.png',
    '/projects/s-collection/es/digital-5.png',
    '/projects/s-collection/es/digital-6.png',
  ],
}

export default function SCollectionPage() {
  const isMobile = useIsMobile()
  const { lang } = useLanguage()
  const tr = t[lang]
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const imgs = lang === 'es' ? IMAGES_ES : IMAGES_EN

  const SECTIONS = [
    { label: 'Research & Strategy',   heading: 'Research & Strategy',   body: tr.sCollection.research, images: imgs.research },
    { label: 'Art Direction & Brand', heading: 'Art Direction & Brand', body: tr.sCollection.digital,  images: imgs.digital  },
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
          {tr.sCollection.hero}
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingTop: isMobile ? 0 : '0.4rem' }}>
          <MetaRow label="Cliente"  value="S•Collection, luxury retail · GrupoModulor · 2024" />
          <MetaRow label="Proyecto" value="S•Collection: Brand Guidelines & Spatial Branding System" />
          <MetaRow label="Rol"      value="Art Direction Lead · brand guidelines, spatial branding, and omnichannel signage system at GrupoModulor." />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: '0.5rem' }}>
            {['Art Direction', 'Spatial Branding', 'Fashion'].map(tag => (
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

      <FullBleed src={`/projects/s-collection/${lang === 'es' ? 'es/' : ''}cover-hero.png`} />
      <ScrollSection {...SECTIONS[0]} />
      <ScrollSection {...SECTIONS[1]} reverse />

    </div>
  )
}
