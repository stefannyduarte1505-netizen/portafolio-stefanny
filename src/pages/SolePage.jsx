import { useEffect, useRef, useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'

const GILDA  = "'Gilda Display', serif"
const POPPINS = "'Poppins', sans-serif"

/* ── Scroll-driven vertical slide (same as home gallery) ── */
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
      setActive(Math.min(N - 1, Math.floor(scrolled / window.innerHeight)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [N])

  return (
    <div ref={wrapRef} style={{ height: `${N * 100}vh`, position: 'relative' }}>
      <div style={{ position:'sticky', top:0, height:'100vh', display:'flex', overflow:'hidden', backgroundColor:'#fff' }}>

        {/* LEFT */}
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

        {/* RIGHT: slide strip */}
        <div style={{ flex:1, overflow:'hidden' }}>
          <div style={{
            display:'flex', flexDirection:'column',
            height:`${N * 100}vh`,
            transform:`translateY(-${active * 100}vh)`,
            transition:'transform 0.85s cubic-bezier(0.16,1,0.3,1)',
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

/* ── Full-bleed photo divider ── */
function FullBleed({ src, height = '80vh' }) {
  return (
    <div style={{ width:'100%', height, overflow:'hidden', backgroundColor:'#111' }}>
      <img src={src} alt="" draggable={false}
        style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', pointerEvents:'none', userSelect:'none' }}
      />
    </div>
  )
}

/* ── Metadata row ── */
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
    body: 'Two distinct user profiles, a practical family buyer and an aspirational design-driven buyer, revealed the same underlying tension: strong emotional motivation to visit the store, undermined by a physical and digital experience that doesn\'t yet support it. From these insights, three strategic pillars emerged to close that gap: Experience, Recall, and Reward.',
    images: [
      '/projects/sole/frame-1.png',
      '/projects/sole/frame-2.png',
      '/projects/sole/frame-3.png',
      '/projects/sole/frame-4.png',
    ],
  },
  {
    label: 'Digital Strategy',
    heading: 'Digital Strategy',
    body: 'To extend the in store experience beyond what physical space allows, I designed an interactive kiosk that functions as a virtual catalog, giving users full access to the product range, while adapting the experience to each brand\'s identity.\n\nSole: Informational Catalog — A clear, browsable catalog experience: product categories, specs, and technical sheets, built for quick decision-making and trust.\n\nS•Collection: Real Time Visualizer — A premium, immersive mode where users customize materials, colors, and finishes directly onto a real kitchen render, closing the gap between imagination and purchase.',
    images: [
      '/projects/sole/frame-5.png',
      '/projects/sole/frame-6.png',
      '/projects/sole/frame-7.png',
      '/projects/sole/frame-8.png',
    ],
  },
  {
    label: 'Spatial Branding & Signage System',
    heading: 'Spatial Branding & Signage System',
    body: 'Color sets the positioning before a single word is read: warm wood for Sole\'s everyday family life, matte black and marble for S•Collection\'s ritual and exclusivity.\n\nQR signage is embedded directly into furniture, countertops, cabinets, displays, turning every surface into an entry point to the digital catalog without breaking the spatial narrative.\n\nA minimal icon system (touch, recipe, temperature) extends that logic into wordless, functional signage, consistent across both lines, rendered in each brand\'s own color language.',
    images: [
      '/projects/sole/strategic-1.png',
      '/projects/sole/strategic-2.png',
      '/projects/sole/strategic-3.png',
      '/projects/sole/strategic-4.png',
      '/projects/sole/solution-6.png',
      '/projects/sole/solution-7.png',
      '/projects/sole/solution-8.png',
      '/projects/sole/solution-9.png',
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
    <div style={{ backgroundColor:'#fff', minHeight:'100vh' }}>

      {/* ── Close ── */}
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

      {/* ── Editorial header ── */}
      <div style={{
        display:'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '2.5rem' : 'clamp(2rem,6vw,6rem)',
        padding:`clamp(5rem,10vw,9rem) ${PAD} clamp(3rem,5vw,5rem)`,
        alignItems:'start',
      }}>
        {/* Left: tagline */}
        <h1 style={{
          fontFamily:GILDA, fontWeight:400,
          fontSize:'clamp(1.5rem,3vw,3.2rem)',
          letterSpacing:'-0.01em', lineHeight:1.25,
          color:'#B9111C', margin:0,
        }}>
          A service design and product strategy project that turned a saturated showroom into a guided, omnichannel experience — where technology builds confidence at every decision point.
        </h1>

        {/* Right: metadata */}
        <div style={{ display:'flex', flexDirection:'column', gap:'0.65rem', paddingTop: isMobile ? 0 : '0.4rem' }}>
          <MetaRow label="Cliente"  value="Sole & S•Collection, appliance retail." />
          <MetaRow label="Proyecto" value="Sole: Phygital Experience" />
          <MetaRow label="Rol"      value="Service Design Lead — directed UX/UI strategy, the co-creation methodology, and cross-functional alignment between brand, product, and operations at GrupoModulor." />
          <MetaRow label="Equipo"   value="Ximena Pizarro, Daniela Raez, Nicole Closa, Grace Huayanca, Giancarlo Grande." />
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.35rem', paddingTop:'0.5rem' }}>
            {['Spatial Branding','Product Design','Service Design'].map(tag => (
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

      {/* ── Hero full-bleed photo ── */}
      <FullBleed src="/projects/sole/1.png" height={isMobile ? '55vw' : '75vh'} />

      {/* ── Research & Strategy ── */}
      <ScrollSection {...SECTIONS[0]} />

      {/* ── Environment full-bleed ── */}
      <FullBleed src="/projects/sole/2.png" height={isMobile ? '60vw' : '70vh'} />

      {/* ── Digital Strategy ── */}
      <ScrollSection {...SECTIONS[1]} />

      {/* ── Spatial full-bleed ── */}
      <FullBleed src="/projects/sole/3.png" height={isMobile ? '60vw' : '70vh'} />

      {/* ── Spatial Branding ── */}
      <ScrollSection {...SECTIONS[2]} />

      {/* ── Outcomes ── */}
      <div style={{ padding:`clamp(4rem,8vw,7rem) ${PAD}`, backgroundColor:'#fff', borderTop:'0.5px solid rgba(26,24,21,0.08)' }}>
        <h2 style={{ fontFamily:GILDA, fontWeight:400, fontSize:'clamp(1.5rem,2.2vw,2.2rem)', letterSpacing:'-0.01em', color:'#B9111C', margin:`0 0 clamp(1.5rem,3vw,2.5rem)` }}>
          Outcomes
        </h2>
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4,1fr)', gap: isMobile ? '1.5rem' : 'clamp(1rem,2vw,2rem)' }}>
          {OUTCOMES.map((text, i) => (
            <p key={i} style={{ fontFamily:POPPINS, fontWeight:300, fontSize:'15px', lineHeight:1.85, color:'rgba(26,24,21,0.6)', margin:0, paddingTop:'1rem', borderTop:'0.5px solid rgba(26,24,21,0.15)' }}>
              {text}
            </p>
          ))}
        </div>
      </div>

    </div>
  )
}
