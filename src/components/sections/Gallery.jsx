/* ── Project Gallery — horizontal slide, scroll-driven ── */
import { useState, useEffect, useRef } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

const PROJECTS = [
  { id: 'sole',             title: 'SOLE',             tags: ['Service Design', 'Spatial Branding'],  cover: '/covers/sole.png'        },
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

  /* ── Mobile: horizontal swipe cards ── */
  if (isMobile) {
    return (
      <section id="gallery" style={{ backgroundColor: '#F5F4F0', height: '100svh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <style>{`
          .mob-label {
            font-family: 'Poppins', sans-serif; font-weight: 300;
            font-size: 0.6rem; letter-spacing: 0.2em; text-transform: uppercase;
            color: #B9111C; padding: 0 1.25rem 0.75rem; flex-shrink: 0;
          }
          .mob-track {
            display: flex; flex-direction: row;
            overflow-x: auto; overflow-y: hidden;
            gap: 0.75rem; padding: 0.5rem 1.25rem 1rem;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .mob-track::-webkit-scrollbar { display: none; }
          .mob-card {
            position: relative; overflow: hidden;
            flex-shrink: 0; width: 78vw; aspect-ratio: 3/4;
            border-radius: 6px; cursor: pointer; scroll-snap-align: start;
          }
          .mob-card img { width: 100%; height: 100%; object-fit: cover; display: block; }
          .mob-card:active img { opacity: 0.75; }
          .mob-gradient {
            position: absolute; inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%);
            pointer-events: none;
          }
          .mob-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 1rem; pointer-events: none; }
          .mob-title {
            font-family: 'Poppins', sans-serif; font-weight: 600;
            font-size: 1.05rem; color: #fff; margin: 0 0 0.45rem;
          }
          .mob-tags { display: flex; flex-wrap: wrap; gap: 0.25rem; }
          .mob-tag {
            font-family: 'Poppins', sans-serif; font-weight: 300;
            font-size: 0.5rem; letter-spacing: 0.08em; text-transform: uppercase;
            color: rgba(255,255,255,0.9); border: 0.5px solid rgba(255,255,255,0.55);
            padding: 0.15rem 0.5rem; border-radius: 100px;
          }
        `}</style>
        <p className="mob-label">Proyectos · swipe to explore</p>
        <div className="mob-track">
          {PROJECTS.map(p => (
            <div key={p.id} className="mob-card" onClick={() => { window.location.href = `/project/${p.id}` }}>
              <img src={p.cover} alt={p.title} loading="lazy" />
              <div className="mob-gradient" />
              <div className="mob-info">
                <p className="mob-title">{p.title}</p>
                <div className="mob-tags">
                  {p.tags.map(t => <span key={t} className="mob-tag">#{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  /* ── Desktop: scroll-driven horizontal slide ── */
  return (
    <div ref={wrapRef} id="gallery" style={{ height: `${N * 100}vh`, position: 'relative' }}>
      <style>{`
        .gal-strip {
          display: flex;
          width: ${N * 100}vw;
          height: 100%;
          will-change: transform;
          transition: transform 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gal-slide {
          width: 100vw;
          height: 100%;
          flex-shrink: 0;
          display: flex;
        }
        .gal-left {
          width: 38%;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(2.5rem, 4vw, 4rem) clamp(2rem, 3.5vw, 3.5rem);
          border-right: 0.5px solid rgba(26,24,21,0.1);
          background: #F5F4F0;
        }
        .gal-right {
          flex: 1;
          background: #F5F4F0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          overflow: hidden;
          padding: clamp(1.5rem, 3vw, 3rem);
        }
        .gal-right img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          display: block;
          object-fit: contain;
        }
        .gal-dot {
          width: 5px; height: 5px; border-radius: 50%;
          transition: background-color 0.35s, transform 0.35s;
          flex-shrink: 0;
        }
        .gal-view-link {
          font-family: 'Poppins', sans-serif; font-weight: 300;
          font-size: 0.58rem; letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(26,24,21,0.32); background: none; border: none; cursor: pointer;
          padding: 0; transition: color 0.2s; display: block; margin-top: clamp(1rem, 1.5vw, 1.5rem);
        }
        .gal-view-link:hover { color: #B9111C; }
      `}</style>

      {/* Sticky frame */}
      <div style={{
        position: 'sticky', top: 0,
        height: '100vh', zIndex: 2,
        overflow: 'hidden',
      }}>
        {/* Horizontal strip */}
        <div
          className="gal-strip"
          style={{ transform: `translateX(-${active * 100}vw)` }}
        >
          {PROJECTS.map((p, i) => (
            <div key={p.id} className="gal-slide">

              {/* LEFT: project info */}
              <div className="gal-left">
                {/* Top: label + counter */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif", fontWeight: 300,
                    fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase',
                    color: 'rgba(26,24,21,0.32)', margin: 0,
                  }}>
                    Projects
                  </p>
                  <p style={{
                    fontFamily: "'Poppins', sans-serif", fontWeight: 300,
                    fontSize: '0.6rem', letterSpacing: '0.12em',
                    color: 'rgba(26,24,21,0.28)', margin: 0,
                  }}>
                    {String(i + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
                  </p>
                </div>

                {/* Middle: tags */}
                <div>
                  {p.tags.map(tag => (
                    <p key={tag} style={{
                      fontFamily: "'Poppins', sans-serif", fontWeight: 300,
                      fontSize: 'clamp(0.62rem, 0.78vw, 0.75rem)',
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: 'rgba(26,24,21,0.45)', margin: '0 0 0.45rem',
                    }}>
                      {tag}
                    </p>
                  ))}
                </div>

                {/* Bottom: title + dots */}
                <div>
                  <h2 style={{
                    fontFamily: "'Gilda Display', serif", fontWeight: 400,
                    fontSize: 'clamp(2.8rem, 5.5vw, 6.5rem)',
                    letterSpacing: '-0.02em', lineHeight: 0.95,
                    color: '#B9111C', margin: '0 0 clamp(1.5rem, 2.5vw, 2.5rem)',
                  }}>
                    {p.title}
                  </h2>

                  {/* Progress dots */}
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                    {PROJECTS.map((_, j) => (
                      <div key={j} className="gal-dot" style={{
                        backgroundColor: j === active ? '#B9111C' : 'rgba(26,24,21,0.18)',
                        transform: j === active ? 'scale(1.4)' : 'scale(1)',
                      }} />
                    ))}
                  </div>

                  <p style={{
                    fontFamily: "'Poppins', sans-serif", fontWeight: 300,
                    fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                    color: 'rgba(26,24,21,0.25)', margin: 0,
                  }}>
                    scroll to explore
                  </p>
                </div>
              </div>

              {/* RIGHT: full image, no crop */}
              <div
                className="gal-right"
                onClick={() => { window.location.href = `/project/${p.id}` }}
              >
                <img src={p.cover} alt={p.title} loading={i === 0 ? 'eager' : 'lazy'} />
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
