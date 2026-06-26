/* ── Project Gallery ── */
import { useState } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

/* ── Project covers (cycle infinitely across the grid) ── */
const PROJECTS = [
  { id: 'kinta',            title: 'Kinta',            tag: 'Branding Consulting · Spatial Branding',  cover: '/covers/kinta.png'            },
  { id: 'cafe-don-salazar', title: 'Café Don Salazar', tag: 'Service Design · Spatial Branding',       cover: '/covers/don-salazar.png'      },
  { id: 'sole',             title: 'SOLE',             tag: 'Service Design · Spatial Branding',       cover: '/covers/sole.png'             },
  { id: 'modulor',          title: 'Modulor',          tag: 'Product Designer · Branding',             cover: '/covers/modulor.png'          },
  { id: 'kuna',             title: 'Kuna',             tag: 'Spatial Branding · Product Design',       cover: '/covers/kuna.png'             },
  { id: 'marea',            title: 'Marea',            tag: 'Product Designer · UX/UI',                cover: '/covers/marea.png'            },
  { id: 's-collection',     title: 'S. Collection',    tag: 'Branding Consulting',                     cover: '/covers/s-collection.png'     },
  { id: 'yuyito',           title: 'Yuyito',           tag: 'Branding Consulting · Spatial Branding',  cover: '/covers/yuyito.png'           },
  { id: 'enter-the-beyond', title: 'Enter The Beyond', tag: 'Product Designer · UX/UI',                cover: '/covers/enter-the-beyond.png' },
  { id: 'root',             title: 'Root',             tag: 'UX Research · Service Design',            cover: '/covers/root.png'             },
]



export default function Gallery() {
  const isMobile  = useIsMobile()
  const [active, setActive] = useState(0)

  const prev = (e) => { e.stopPropagation(); setActive(i => (i - 1 + PROJECTS.length) % PROJECTS.length) }
  const next = (e) => { e.stopPropagation(); setActive(i => (i + 1) % PROJECTS.length) }

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

  const ap = PROJECTS[active]

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
        .acc-track {
          display: flex;
          flex: 1;
          min-height: 0;
        }
        .acc-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: flex 0.65s cubic-bezier(0.16,1,0.3,1);
          flex-shrink: 0;
        }
        .acc-card img.acc-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          pointer-events: none; user-select: none;
          transition: opacity 0.45s ease, transform 0.65s cubic-bezier(0.16,1,0.3,1);
        }
        .acc-card.collapsed img.acc-img { opacity: 0.55; }
        .acc-card.active img.acc-img { transform: scale(1.03); opacity: 1; }

        /* Vertical title on collapsed cards */
        .acc-vtitle {
          position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%) rotate(-90deg);
          white-space: nowrap;
          font-family: 'Poppins', sans-serif; font-weight: 300;
          font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .acc-card.active .acc-vtitle { opacity: 0; }

        /* Active card overlay — info panel at top */
        .acc-info {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          background: linear-gradient(to bottom,
            rgba(245,244,240,0.97) 0%,
            rgba(245,244,240,0.92) 36%,
            transparent 70%
          );
          padding: clamp(1.5rem,3vw,2.5rem) clamp(1.5rem,3vw,2.5rem) 0;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .acc-card.active .acc-info { opacity: 1; pointer-events: auto; }

        .acc-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: clamp(0.75rem,1.5vw,1.25rem); }
        .acc-tag {
          font-family: 'Poppins', sans-serif; font-weight: 400;
          font-size: clamp(0.52rem, 0.65vw, 0.65rem); letter-spacing: 0.1em; text-transform: uppercase;
          color: #1A1815; border: 0.5px solid rgba(26,24,21,0.35);
          padding: 0.25rem 0.7rem; border-radius: 100px;
        }
        .acc-title {
          font-family: 'Gilda Display', serif; font-weight: 400;
          font-size: clamp(1.4rem, 3.2vw, 4rem); letter-spacing: -0.02em; line-height: 1.1;
          color: #B9111C; margin: 0;
          max-width: 20ch;
        }
        .acc-arrows {
          display: flex; gap: 0.5rem;
          position: absolute; top: clamp(1.5rem,3vw,2.5rem); right: clamp(1.5rem,3vw,2.5rem);
          pointer-events: auto;
        }
        .acc-arrow {
          width: clamp(2rem,3vw,3rem); height: clamp(2rem,3vw,3rem);
          border-radius: 100px; border: 0.5px solid rgba(26,24,21,0.3);
          background: rgba(245,244,240,0.7); backdrop-filter: blur(8px);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.85rem; color: #1A1815; cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
        }
        .acc-arrow:hover { background: rgba(245,244,240,0.95); border-color: rgba(26,24,21,0.6); }
      `}</style>

      <div className="acc-track">
        {PROJECTS.map((p, i) => {
          const isActive = i === active
          return (
            <div
              key={p.id}
              className={`acc-card ${isActive ? 'active' : 'collapsed'}`}
              style={{ flex: isActive ? 5 : 1 }}
              onMouseEnter={() => setActive(i)}
              onClick={() => window.location.href = `/project/${p.id}`}
            >
              <img className="acc-img" src={p.cover} alt={p.title} loading={i < 3 ? 'eager' : 'lazy'} />

              {/* Collapsed: vertical title */}
              <span className="acc-vtitle">{p.title}</span>

              {/* Active: info overlay */}
              <div className="acc-info">
                {/* Arrows */}
                <div className="acc-arrows">
                  <button className="acc-arrow" onClick={prev}>←</button>
                  <button className="acc-arrow" onClick={next}>→</button>
                </div>

                {/* Tags */}
                <div className="acc-tags">
                  {p.tag.split('·').map(t => (
                    <span key={t} className="acc-tag">{t.trim()}</span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="acc-title">{p.title}</h2>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
