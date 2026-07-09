/* ── Project Gallery — sticky left + natural scroll right (same as ScrollSection) ── */
import { useState, useEffect, useRef } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

const PROJECTS = [
  { id: 'sole',             title: 'Sole',             tags: ['Service Design', 'Spatial Branding'],  cover: '/covers/sole.png'        },
  { id: 'root',             title: 'Root',             tags: ['UX Research', 'Service Design'],       cover: '/covers/root.png'        },
  { id: 'kuna',             title: 'Kuna',             tags: ['Spatial Branding', 'Product Design'],  cover: '/covers/kuna.png'        },
  { id: 'modulor',          title: 'Modulor',          tags: ['Product Designer', 'Branding'],        cover: '/covers/modulor.png'     },
  { id: 'cafe-don-salazar', title: 'Café Don Salazar', tags: ['Service Design', 'Spatial Branding'],  cover: '/covers/don-salazar.png' },
]
const N = PROJECTS.length

export default function Gallery() {
  const isMobile   = useIsMobile()
  const [active, setActive] = useState(0)
  const cardRefs   = useRef([])

  useEffect(() => {
    if (isMobile) return
    cardRefs.current = cardRefs.current.slice(0, N)
    const observers = cardRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i) },
        { threshold: 0.5 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
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
    <div id="gallery" style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'flex-start', backgroundColor: '#ffffff' }}>
      <style>{`
        @keyframes gal-in {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .gal-text { animation: gal-in 0.4s cubic-bezier(0.25,0.46,0.45,0.94) both; }

        .gal-card { position:relative; overflow:hidden; width:100%; }
        .gal-card img { display:block; width:100%; height:auto; transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94); will-change:transform; }
        .gal-card:hover img { transform: scale(1.03); }
        .gal-card-overlay {
          position:absolute; inset:0;
          display:flex; align-items:flex-end; justify-content:flex-end;
          padding: clamp(1rem,2vw,1.5rem);
          opacity:0;
          transition: opacity 0.3s ease;
          pointer-events:none;
        }
        .gal-card:hover .gal-card-overlay { opacity:1; }
        .gal-card-arrow {
          width:44px; height:44px; border-radius:50%;
          background:#1A1815;
          display:flex; align-items:center; justify-content:center;
          transform: translateY(6px);
          transition: transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .gal-card:hover .gal-card-arrow { transform: translateY(0); }
      `}</style>

      {/* LEFT — sticky info panel */}
      <div style={{
        width: '38%',
        flexShrink: 0,
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(2.5rem,4vw,4rem) clamp(2rem,3.5vw,3.5rem)',
        gap: 'clamp(1rem,1.5vw,1.5rem)',
        backgroundColor: '#ffffff',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}>
        <p style={{
          fontFamily: "'Poppins', sans-serif", fontWeight: 300,
          fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'rgba(26,24,21,0.32)', margin: 0,
        }}>
          Projects
        </p>

        <div key={`title-${active}`} className="gal-text">
          <h2 style={{
            fontFamily: "'Gilda Display', serif", fontWeight: 400,
            fontSize: 'clamp(2.8rem,5.5vw,6.5rem)',
            letterSpacing: '-0.02em', lineHeight: 0.95,
            color: '#1A1815', margin: 0,
          }}>
            {p.title}
          </h2>
        </div>

        <div key={`tags-${active}`} className="gal-text" style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
          {p.tags.map(tag => (
            <p key={tag} style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 300,
              fontSize: 'clamp(0.62rem,0.78vw,0.75rem)',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'rgba(26,24,21,0.45)', margin: 0,
            }}>
              {tag}
            </p>
          ))}
        </div>

        <p style={{
          fontFamily: "'Poppins', sans-serif", fontWeight: 300,
          fontSize: '0.55rem', letterSpacing: '0.18em',
          color: 'rgba(26,24,21,0.22)', margin: 'auto 0 0',
        }}>
          {String(active + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
        </p>
      </div>

      {/* RIGHT — project covers scroll naturally */}
      <div style={{ flex: 1, backgroundColor: '#ffffff' }}>
        {PROJECTS.map((proj, i) => (
          <a
            key={proj.id}
            href={`/project/${proj.id}`}
            ref={el => { cardRefs.current[i] = el }}
            data-cursor="gallery"
            style={{ display: 'block', padding: 'clamp(0.75rem,1.5vw,1.5rem)', textDecoration: 'none' }}
          >
            <div className="gal-card">
              <img
                src={proj.cover}
                alt={proj.title}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
              <div className="gal-card-overlay">
                <div className="gal-card-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 13L13 3M13 3H6M13 3V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

    </div>
  )
}
