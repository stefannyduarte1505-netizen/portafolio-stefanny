/* ── Project Gallery — vertical slide, scroll-driven ── */
import { useState, useEffect, useRef } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'
import { getLenis } from '../../hooks/useLenis'

const PROJECTS = [
  { id: 'sole',             title: 'Sole',             tags: ['Service Design', 'Spatial Branding'],  cover: '/covers/sole.png'        },
  { id: 'root',             title: 'Root',             tags: ['UX Research', 'Service Design'],       cover: '/covers/root.png'        },
  { id: 'kuna',             title: 'Kuna',             tags: ['Spatial Branding', 'Product Design'],  cover: '/covers/kuna.png'        },
  { id: 'modulor',          title: 'Modulor',          tags: ['Product Designer', 'Branding'],        cover: '/covers/modulor.png'     },
  { id: 'cafe-don-salazar', title: 'Café Don Salazar', tags: ['Service Design', 'Spatial Branding'],  cover: '/covers/don-salazar.png' },
]
const N = PROJECTS.length

export default function Gallery() {
  const isMobile = useIsMobile()
  const wrapRef  = useRef(null)
  const [active, setActive] = useState(0)
  const activeRef = useRef(0)

  useEffect(() => { activeRef.current = active }, [active])

  // Sync active index from scroll position (fallback / mobile)
  useEffect(() => {
    if (isMobile) return
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
  }, [isMobile])

  // One wheel event = one card advance
  useEffect(() => {
    if (isMobile) return
    let locked = false
    const onWheel = (e) => {
      const wrap = wrapRef.current
      if (!wrap) return
      const rect = wrap.getBoundingClientRect()
      const inSection = rect.top <= 0 && rect.bottom >= window.innerHeight
      if (!inSection) return

      const dir = e.deltaY > 0 ? 1 : -1
      const next = activeRef.current + dir
      if (next < 0 || next > N - 1) return

      e.preventDefault()
      if (locked) return
      locked = true

      const target = rect.top + window.scrollY + next * window.innerHeight
      const lenis = getLenis()
      if (lenis) {
        lenis.scrollTo(target, { duration: 1.0, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
      } else {
        window.scrollTo({ top: target, behavior: 'smooth' })
      }
      setTimeout(() => { locked = false }, 950)
    }
    window.addEventListener('wheel', onWheel, { passive: false, capture: true })
    return () => window.removeEventListener('wheel', onWheel, { capture: true })
  }, [isMobile])

  /* ── Mobile ── */
  if (isMobile) {
    return (
      <section id="gallery" style={{ backgroundColor: '#ffffff', height: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <style>{`
          .mob-label { font-family:'Poppins',sans-serif; font-weight:300; font-size:0.6rem; letter-spacing:0.2em; text-transform:uppercase; color:#B9111C; padding:0 1.25rem 0.75rem; flex-shrink:0; }
          .mob-track { display:flex; overflow-x:auto; overflow-y:hidden; gap:0.75rem; padding:0.5rem 1.25rem 1rem; scroll-snap-type:x mandatory; -webkit-overflow-scrolling:touch; scrollbar-width:none; }
          .mob-track::-webkit-scrollbar { display:none; }
          .mob-card { position:relative; overflow:hidden; flex-shrink:0; width:78vw; aspect-ratio:3/4; border-radius:6px; cursor:pointer; scroll-snap-align:start; }
          .mob-card img { width:100%; height:100%; object-fit:cover; display:block; }
          .mob-card:active img { opacity:0.75; }
          .mob-gradient { position:absolute; inset:0; background:linear-gradient(to top,rgba(0,0,0,0.6) 0%,transparent 55%); pointer-events:none; }
          .mob-info { position:absolute; bottom:0; left:0; right:0; padding:1rem; pointer-events:none; }
          .mob-title { font-family:'Poppins',sans-serif; font-weight:600; font-size:1.05rem; color:#fff; margin:0 0 0.45rem; }
          .mob-tags { display:flex; flex-wrap:wrap; gap:0.25rem; }
          .mob-tag { font-family:'Poppins',sans-serif; font-weight:300; font-size:0.5rem; letter-spacing:0.08em; text-transform:uppercase; color:rgba(255,255,255,0.9); border:0.5px solid rgba(255,255,255,0.55); padding:0.15rem 0.5rem; border-radius:100px; }
        `}</style>
        <p className="mob-label">Proyectos · swipe to explore</p>
        <div className="mob-track">
          {PROJECTS.map(p => (
            <div key={p.id} className="mob-card" onClick={() => { window.location.href = `/project/${p.id}` }}>
              <img src={p.cover} alt={p.title} loading="lazy" />
              <div className="mob-gradient" />
              <div className="mob-info">
                <p className="mob-title">{p.title}</p>
                <div className="mob-tags">{p.tags.map(t => <span key={t} className="mob-tag">#{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  /* ── Desktop ── */
  const p = PROJECTS[active]

  return (
    <div ref={wrapRef} id="gallery" style={{ height: `${(N + 1) * 100}vh`, position: 'relative' }}>
      <style>{`
        @keyframes gal-in {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .gal-text { animation: gal-in 0.5s cubic-bezier(0.16,1,0.3,1) both; }

        .gal-card { position:relative; overflow:hidden; width:100%; height:100%; display:flex; align-items:center; justify-content:center; }
        .gal-card img { transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94); will-change:transform; }
        .gal-card:hover img { transform: scale(1.04); }
        .gal-card-overlay {
          position:absolute; inset:0;
          display:flex; align-items:flex-end; justify-content:flex-end;
          padding: clamp(1.5rem,3vw,2.5rem);
          opacity:0;
          transition: opacity 0.35s ease;
          pointer-events:none;
        }
        .gal-card:hover .gal-card-overlay { opacity:1; }
        .gal-card-arrow {
          width:48px; height:48px; border-radius:50%;
          background:#1A1815;
          display:flex; align-items:center; justify-content:center;
          transform: translateY(8px);
          transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .gal-card:hover .gal-card-arrow { transform: translateY(0); }
        .gal-card-arrow svg { width:16px; height:16px; }
      `}</style>

      {/* Sticky frame */}
      <div style={{
        position: 'sticky', top: 0,
        height: '100vh', zIndex: 2,
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
      }}>

        {/* ── LEFT: info panel ── */}
        <div style={{
          width: '38%',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          padding: 'clamp(2.5rem, 4vw, 4rem) clamp(2rem, 3.5vw, 3.5rem)',
          gap: 'clamp(1rem, 1.5vw, 1.5rem)',
          overflow: 'hidden',
        }}>
          {/* Label */}
          <p style={{
            fontFamily: "'Poppins', sans-serif", fontWeight: 300,
            fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'rgba(26,24,21,0.32)', margin: 0,
          }}>
            Projects
          </p>

          {/* Title — top-aligned, animated */}
          <div key={`title-${active}`} className="gal-text">
            <h2 style={{
              fontFamily: "'Gilda Display', serif", fontWeight: 400,
              fontSize: 'clamp(2.8rem, 5.5vw, 6.5rem)',
              letterSpacing: '-0.02em', lineHeight: 0.95,
              color: '#1A1815', margin: 0,
            }}>
              {p.title}
            </h2>
          </div>

          {/* Tags — animated */}
          <div key={`tags-${active}`} className="gal-text" style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {p.tags.map(tag => (
              <p key={tag} style={{
                fontFamily: "'Poppins', sans-serif", fontWeight: 300,
                fontSize: 'clamp(0.62rem, 0.78vw, 0.75rem)',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'rgba(26,24,21,0.45)', margin: 0,
              }}>
                {tag}
              </p>
            ))}
          </div>
        </div>

        {/* ── RIGHT: vertical image strip ── */}
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: `${N * 100}vh`,
            transform: `translateY(-${active * 100}vh)`,
            transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)',
            willChange: 'transform',
          }}>
            {PROJECTS.map((proj, i) => (
              <div
                key={proj.id}
                onClick={() => { window.location.href = `/project/${proj.id}` }}
                style={{
                  height: '100vh',
                  flexShrink: 0,
                  padding: 'clamp(2rem, 4vw, 4rem)',
                  backgroundColor: '#ffffff',
                  cursor: 'pointer',
                }}
              >
                <div className="gal-card">
                  <img
                    src={proj.cover}
                    alt={proj.title}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', display: 'block', objectFit: 'contain' }}
                  />
                  <div className="gal-card-overlay">
                    <div className="gal-card-arrow">
                      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 13L13 3M13 3H6M13 3V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
