import { useEffect, useRef, useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const GILDA   = "'Gilda Display', serif"
const POPPINS = "'Poppins', sans-serif"

function ScrollSection({ label, heading, body, images }) {
  const wrapRef = useRef(null)
  const [active, setActive] = useState(0)
  const N = images.length

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const targetCard = { current: 0 }
    let locked = false
    let lockTimer = null
    const scrolledIn = () => -wrap.getBoundingClientRect().top
    const sectionTop = () =>  wrap.getBoundingClientRect().top + window.scrollY
    const goTo = (card) => {
      targetCard.current = card
      setActive(card)
      window.scrollTo({ top: sectionTop() + card * window.innerHeight, behavior: 'instant' })
      locked = true
      clearTimeout(lockTimer)
      lockTimer = setTimeout(() => { locked = false }, 580)
    }
    const onScroll = () => {
      const s = scrolledIn()
      if (s < 0) { setActive(0); if (!locked) targetCard.current = 0; return }
      const card = Math.min(N - 1, Math.floor(s / window.innerHeight))
      setActive(card)
      if (!locked) targetCard.current = card
    }
    const onWheel = (e) => {
      const s = scrolledIn()
      if (s < 0 || s >= N * window.innerHeight) return
      const dir = e.deltaY > 0 ? 1 : -1
      if (dir > 0) {
        e.preventDefault()
        if (locked) return
        const next = targetCard.current + 1
        if (next >= N) {
          goTo(N - 1)
          locked = true
          clearTimeout(lockTimer)
          lockTimer = setTimeout(() => {
            window.scrollTo({ top: sectionTop() + N * window.innerHeight, behavior: 'instant' })
            locked = false
          }, 400)
          return
        }
        goTo(next)
      } else {
        if (targetCard.current === 0) return
        e.preventDefault()
        if (locked) return
        goTo(0)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('wheel',  onWheel,  { passive: false, capture: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('wheel',  onWheel, { capture: true })
      clearTimeout(lockTimer)
    }
  }, [N])

  return (
    <div ref={wrapRef} style={{ height: `${(N + 1) * 100}vh`, position: 'relative' }}>
      <div style={{ position:'sticky', top:0, height:'100vh', display:'flex', overflow:'hidden', backgroundColor:'#fff' }}>
        <div style={{
          width:'40%', flexShrink:0,
          display:'flex', flexDirection:'column',
          padding:'clamp(2.5rem,4vw,5rem) clamp(2rem,3.5vw,4rem)',
          gap:'clamp(1rem,1.5vw,1.8rem)',
          borderRight:'0.5px solid rgba(26,24,21,0.08)',
          overflowY:'auto',
        }}>
          <p style={{ fontFamily:POPPINS, fontWeight:300, fontSize:'0.58rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(26,24,21,0.3)', margin:0 }}>
            {label}
          </p>
          <h2 style={{ fontFamily:GILDA, fontWeight:400, fontSize:'clamp(1.5rem,2.6vw,3rem)', letterSpacing:'-0.01em', lineHeight:1.15, color:'#B9111C', margin:0 }}>
            {heading}
          </h2>
          <div style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            {body.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontFamily:POPPINS, fontWeight:300, fontSize:'15px', lineHeight:1.85, color:'rgba(26,24,21,0.65)', margin:0 }}>
                {para}
              </p>
            ))}
          </div>
          <p style={{ fontFamily:POPPINS, fontWeight:300, fontSize:'0.55rem', letterSpacing:'0.18em', color:'rgba(26,24,21,0.22)', margin:'auto 0 0' }}>
            {String(active + 1).padStart(2,'0')} / {String(N).padStart(2,'0')}
          </p>
        </div>
        <div style={{ flex:1, overflow:'hidden' }}>
          <div style={{
            display:'flex', flexDirection:'column',
            height:`${N * 100}vh`,
            transform:`translateY(-${active * 100}vh)`,
            transition:'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)',
            willChange:'transform',
          }}>
            {images.map((src, i) => (
              <div key={src} style={{ height:'100vh', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', padding:'clamp(2rem,4vw,5rem)', backgroundColor:'#fff' }}>
                <img src={src} alt="" loading={i===0?'eager':'lazy'}
                  style={{ maxWidth:'100%', maxHeight:'100%', width:'auto', height:'auto', objectFit:'contain', display:'block' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FullBleed({ src }) {
  return (
    <div style={{ width:'100%', backgroundColor:'#fff' }}>
      <img src={src} alt="" draggable={false}
        style={{ width:'100%', height:'auto', display:'block', pointerEvents:'none', userSelect:'none' }}
      />
    </div>
  )
}

function MetaRow({ label, value }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'clamp(4rem,6vw,6rem) 1fr', gap:'0 1rem', paddingBottom:'0.65rem', borderBottom:'0.5px solid rgba(26,24,21,0.08)' }}>
      <span style={{ fontFamily:POPPINS, fontWeight:300, fontSize:'0.58rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(26,24,21,0.32)', paddingTop:'0.12em' }}>
        {label}
      </span>
      <span style={{ fontFamily:POPPINS, fontWeight:300, fontSize:'15px', color:'rgba(26,24,21,0.65)', lineHeight:1.6 }}>
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
      '/projects/modulor/research-1.png',
      '/projects/modulor/research-2.png',
      '/projects/modulor/research-3.png',
    ],
  },
  {
    label: 'Digital Strategy',
    heading: 'Digital Strategy',
    body: 'Texto por agregar.',
    images: [
      '/projects/modulor/digital-1.png',
      '/projects/modulor/digital-2.png',
      '/projects/modulor/digital-3.png',
      '/projects/modulor/digital-4.png',
      '/projects/modulor/digital-5.png',
      '/projects/modulor/digital-6.png',
    ],
  },
]

export default function ModulorPage() {
  const isMobile = useIsMobile()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.style.scrollBehavior = 'auto'
    return () => { document.documentElement.style.scrollBehavior = '' }
  }, [])

  const PAD = 'clamp(1.5rem,5vw,5rem)'

  return (
    <div style={{ backgroundColor:'#fff', minHeight:'100vh' }}>

      <button
        onClick={() => { sessionStorage.setItem('scrollToGallery','1'); window.location.href='/' }}
        style={{
          position:'fixed', top:'1.5rem', right: isMobile ? '1rem' : '2rem', zIndex:200,
          padding:'0.55rem 1.75rem', borderRadius:'100px',
          backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)',
          backgroundColor:'rgba(255,255,255,0.75)',
          boxShadow:'0 2px 20px rgba(0,0,0,0.07)',
          border:'0.5px solid rgba(26,24,21,0.12)', cursor:'pointer',
          fontFamily:POPPINS, fontWeight:300,
          fontSize:'0.78rem', letterSpacing:'0.06em', color:'#1A1815',
          transition:'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color='#B9111C'}
        onMouseLeave={e => e.currentTarget.style.color='#1A1815'}
      >
        Close
      </button>

      <div style={{
        display:'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '2.5rem' : 'clamp(2rem,6vw,6rem)',
        padding:`clamp(5rem,10vw,9rem) ${PAD} clamp(3rem,5vw,5rem)`,
        alignItems:'start',
      }}>
        <h1 style={{
          fontFamily:GILDA, fontWeight:400,
          fontSize:'clamp(1.5rem,3vw,3.2rem)',
          letterSpacing:'-0.01em', lineHeight:1.25,
          color:'#B9111C', margin:0,
        }}>
          Tagline del proyecto por agregar.
        </h1>
        <div style={{ display:'flex', flexDirection:'column', gap:'0.65rem', paddingTop: isMobile ? 0 : '0.4rem' }}>
          <MetaRow label="Cliente"  value="Por agregar" />
          <MetaRow label="Proyecto" value="Modulor" />
          <MetaRow label="Rol"      value="Por agregar" />
          <MetaRow label="Equipo"   value="Por agregar" />
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.35rem', paddingTop:'0.5rem' }}>
            {['Product Designer', 'Branding'].map(tag => (
              <span key={tag} style={{
                fontFamily:POPPINS, fontWeight:300,
                fontSize:'0.58rem', letterSpacing:'0.1em', textTransform:'uppercase',
                color:'rgba(26,24,21,0.5)', border:'0.5px solid rgba(26,24,21,0.25)',
                padding:'0.25rem 0.65rem', borderRadius:'100px',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <FullBleed src="/projects/modulor/cover-hero.png" />

      <ScrollSection {...SECTIONS[0]} />

      <ScrollSection {...SECTIONS[1]} />

    </div>
  )
}
