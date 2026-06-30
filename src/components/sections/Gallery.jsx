/* ── Project Gallery ── */
import { useState } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

const PROJECTS = [
  { id: 'sole',             title: 'SOLE',             tag: 'Service Design · Spatial Branding',  cover: '/covers/sole.png'        },
  { id: 'root',             title: 'Root',             tag: 'UX Research · Service Design',       cover: '/covers/root.png'        },
  { id: 'kuna',             title: 'Kuna',             tag: 'Spatial Branding · Product Design',  cover: '/covers/kuna.png'        },
  { id: 'modulor',          title: 'Modulor',          tag: 'Product Designer · Branding',        cover: '/covers/modulor.png'     },
  { id: 'cafe-don-salazar', title: 'Café Don Salazar', tag: 'Service Design · Spatial Branding',  cover: '/covers/don-salazar.png' },
]

const N = PROJECTS.length



export default function Gallery() {
  const isMobile  = useIsMobile()
  const [active, setActive]     = useState(0)   // window start (arrows only)
  const [expanded, setExpanded] = useState(0)   // which of the 3 is big (0,1,2)

  const prev = (e) => { e.stopPropagation(); setActive(i => (i - 1 + N) % N) }
  const next = (e) => { e.stopPropagation(); setActive(i => (i + 1) % N) }

  // 3 visible cards: fixed window, only changes with arrows
  const visible = [0, 1, 2].map(offset => PROJECTS[(active + offset) % N])
  const ap = visible[expanded]

  /* ── Mobile: horizontal scroll list ── */
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
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            overflow-y: hidden;
            gap: 0.75rem;
            padding: 0.5rem 1.25rem 1rem;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .mob-track::-webkit-scrollbar { display: none; }
          .mob-card {
            position: relative; overflow: hidden;
            flex-shrink: 0;
            width: 78vw;
            aspect-ratio: 3/4;
            border-radius: 6px;
            cursor: pointer;
            scroll-snap-align: start;
          }
          .mob-card img {
            width: 100%; height: 100%; object-fit: cover; display: block;
            transition: opacity 0.3s ease;
          }
          .mob-card:active img { opacity: 0.75; }
          .mob-gradient {
            position: absolute; inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%);
            pointer-events: none;
          }
          .mob-info {
            position: absolute; bottom: 0; left: 0; right: 0;
            padding: 1rem 1rem 1rem;
            pointer-events: none;
          }
          .mob-title {
            font-family: 'Poppins', sans-serif; font-weight: 600;
            font-size: 1.05rem; color: #fff; margin: 0 0 0.45rem;
            text-shadow: 0 1px 6px rgba(0,0,0,0.4);
          }
          .mob-tags { display: flex; flex-wrap: wrap; gap: 0.25rem; }
          .mob-tag {
            font-family: 'Poppins', sans-serif; font-weight: 300;
            font-size: 0.5rem; letter-spacing: 0.08em; text-transform: uppercase;
            color: rgba(255,255,255,0.9);
            border: 0.5px solid rgba(255,255,255,0.55);
            padding: 0.15rem 0.5rem; border-radius: 100px;
            background: rgba(0,0,0,0.15);
          }
        `}</style>
        <p className="mob-label">Proyectos · swipe to explore</p>
        <div className="mob-track">
          {PROJECTS.map(p => (
            <div
              key={p.id}
              className="mob-card"
              onClick={() => { window.location.href = `/project/${p.id}` }}
            >
              <img src={p.cover} alt={p.title} loading="lazy" />
              <div className="mob-gradient" />
              <div className="mob-info">
                <p className="mob-title">{p.title}</p>
                <div className="mob-tags">
                  {p.tag.split('·').map(t => (
                    <span key={t} className="mob-tag">#{t.trim()}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section
      id="gallery"
      style={{
        width: '100%', height: '100svh',
        backgroundColor: '#F5F4F0',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .acc-info-bar {
          flex-shrink: 0;
          padding: clamp(1.5rem,3vw,2.5rem) clamp(1.5rem,4vw,3.5rem);
          display: flex;
          flex-direction: column;
          gap: clamp(0.5rem,1vw,0.85rem);
          position: relative;
        }
        .acc-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .acc-tag {
          font-family: 'Poppins', sans-serif; font-weight: 400;
          font-size: clamp(0.52rem, 0.62vw, 0.65rem); letter-spacing: 0.1em; text-transform: uppercase;
          color: #1A1815; border: 0.5px solid rgba(26,24,21,0.35);
          padding: 0.28rem 0.75rem; border-radius: 100px;
        }
        .acc-title {
          font-family: 'Gilda Display', serif; font-weight: 400;
          font-size: clamp(1.6rem, 3.8vw, 5rem); letter-spacing: -0.02em; line-height: 1.05;
          color: #B9111C; margin: 0;
        }
        .acc-arrows {
          display: flex; gap: 0.5rem;
          position: absolute;
          bottom: clamp(1.5rem,3vw,2.5rem);
          right: clamp(1.5rem,4vw,3.5rem);
        }
        .acc-arrow {
          height: clamp(2rem,2.8vw,3rem); padding: 0 clamp(1rem,1.8vw,1.8rem);
          border-radius: 100px; border: 0.5px solid rgba(26,24,21,0.3);
          background: transparent;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.9rem; color: #1A1815; cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .acc-arrow:hover { background: rgba(26,24,21,0.06); border-color: rgba(26,24,21,0.55); }

        .acc-track {
          display: flex;
          flex: 1;
          min-height: 0;
          gap: 1px;
        }
        .acc-panel {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: flex 0.65s cubic-bezier(0.16,1,0.3,1);
          flex-shrink: 0;
        }
        .acc-panel {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-color: #F5F4F0;
        }
        .acc-panel.collapsed { opacity: 0.6; filter: blur(2px); }
        .acc-panel.active    { opacity: 1; filter: blur(0px); }
        .acc-vtitle {
          position: absolute; bottom: 1.5rem; left: 50%;
          transform: translateX(-50%) rotate(-90deg);
          white-space: nowrap;
          font-family: 'Poppins', sans-serif; font-weight: 300;
          font-size: 0.55rem; letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.75); pointer-events: none;
        }
      `}</style>

      {/* ── Top info bar — always white, shows active project ── */}
      <div className="acc-info-bar">
        <div className="acc-tags">
          {ap.tag.split('·').map(t => (
            <span key={t} className="acc-tag">{t.trim()}</span>
          ))}
        </div>
        <h2 className="acc-title">{ap.title}</h2>
        <div className="acc-arrows">
          <button className="acc-arrow" onClick={prev}>←</button>
          <button className="acc-arrow" onClick={next}>→</button>
        </div>
      </div>

      {/* ── Image strip — 3 panels ── */}
      <div className="acc-track">
        {visible.map((p, i) => {
          const isExpanded = i === expanded
          return (
            <div
              key={p.id}
              className={`acc-panel ${isExpanded ? 'active' : 'collapsed'}`}
              style={{ flex: isExpanded ? 5 : 1, backgroundImage: `url(${p.cover})` }}
              onClick={() => window.location.href = `/project/${p.id}`}
            >
              {!isExpanded && <span className="acc-vtitle">{p.title}</span>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
