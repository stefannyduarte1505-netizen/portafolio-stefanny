/* ── Project Gallery — infinite drag canvas + parallax CREATIVE DESIGNER ── */
import { useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

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

/* ── Card size — 16:9 ── */
const CARD_W = 780
const CARD_H = Math.round(CARD_W * 9 / 16)  // 439px

/* ── Scattered positions within one patch (top-left of each card) ── */
/* Lots of breathing room — no rows, no columns                       */
const PATCH_W = 3800
const PATCH_H = 2800
const BASE_POS = [
  { idx: 0, x:    0, y:  200 },
  { idx: 1, x: 1300, y:    0 },
  { idx: 2, x: 2700, y:  380 },
  { idx: 3, x:  500, y:  950 },
  { idx: 4, x: 1800, y:  780 },
  { idx: 5, x: 2900, y: 1100 },
  { idx: 6, x:  160, y: 1650 },
  { idx: 7, x: 1500, y: 1500 },
  { idx: 8, x: 2700, y: 1900 },
  { idx: 9, x:  900, y: 2300 },
]

/* ── Tile 3×3 patches for "infinite" feel ── */
const TILES_X = 3
const TILES_Y = 3
const GRID = (() => {
  const items = []
  for (let tx = 0; tx < TILES_X; tx++) {
    for (let ty = 0; ty < TILES_Y; ty++) {
      for (const pos of BASE_POS) {
        const p = PROJECTS[pos.idx]
        items.push({
          key:      `${tx}-${ty}-${pos.idx}`,
          id:       p.id,
          title:    p.title,
          subtitle: p.subtitle,
          cover:    p.cover,
          x:        (tx - TILES_X / 2) * PATCH_W + pos.x - CARD_W / 2,
          y:        (ty - TILES_Y / 2) * PATCH_H + pos.y - CARD_H / 2,
        })
      }
    }
  }
  return items
})()

export default function Gallery() {
  const navigate   = useNavigate()
  const sectionRef = useRef(null)
  const canvasRef  = useRef(null)

  const posRef   = useRef({ x: 0, y: 0 })
  const velRef   = useRef({ x: 0, y: 0 })
  const dragRef  = useRef(false)
  const rafRef   = useRef(null)
  const lastPos  = useRef({ x: 0, y: 0 })
  const lastT    = useRef(0)
  const startPos = useRef({ x: 0, y: 0 })
  const startPtr = useRef({ x: 0, y: 0 })
  const didDrag  = useRef(false)

  const commit = useCallback(() => {
    if (canvasRef.current)
      canvasRef.current.style.transform =
        `translate3d(calc(-50% + ${posRef.current.x}px), calc(-50% + ${posRef.current.y}px), 0)`
  }, [])

  const stopMomentum = () => cancelAnimationFrame(rafRef.current)

  const startMomentum = useCallback(() => {
    const tick = () => {
      velRef.current.x *= 0.92
      velRef.current.y *= 0.92
      posRef.current.x += velRef.current.x
      posRef.current.y += velRef.current.y
      commit()
      if (Math.abs(velRef.current.x) > 0.05 || Math.abs(velRef.current.y) > 0.05)
        rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [commit])

  /* ── Drag interaction ── */
  useEffect(() => {
    commit()
    const el = sectionRef.current
    if (!el) return

    /* Use window-level move/up so drag works outside the section
       AND avoids setPointerCapture which hijacks click events       */
    const onMove = (e) => {
      if (!dragRef.current) return
      const now = performance.now()
      const dt  = Math.max(now - lastT.current, 1)
      velRef.current.x = velRef.current.x * 0.5 + ((e.clientX - lastPos.current.x) / dt) * 16 * 0.5
      velRef.current.y = velRef.current.y * 0.5 + ((e.clientY - lastPos.current.y) / dt) * 16 * 0.5
      lastPos.current  = { x: e.clientX, y: e.clientY }
      lastT.current    = now
      posRef.current.x = startPos.current.x + (e.clientX - startPtr.current.x)
      posRef.current.y = startPos.current.y + (e.clientY - startPtr.current.y)
      commit()
      if (Math.abs(e.clientX - startPtr.current.x) > 8 || Math.abs(e.clientY - startPtr.current.y) > 8)
        didDrag.current = true
    }

    const onUp = () => {
      if (!dragRef.current) return
      dragRef.current = false
      el.style.cursor = 'grab'
      startMomentum()
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup',   onUp)
      window.removeEventListener('pointercancel', onUp)
    }

    const onDown = (e) => {
      stopMomentum()
      startPos.current = { ...posRef.current }
      startPtr.current = { x: e.clientX, y: e.clientY }
      lastPos.current  = { x: e.clientX, y: e.clientY }
      lastT.current    = performance.now()
      dragRef.current  = true
      didDrag.current  = false
      el.style.cursor  = 'grabbing'
      /* Attach move/up to window so drag continues outside the element */
      window.addEventListener('pointermove', onMove, { passive: true })
      window.addEventListener('pointerup',   onUp)
      window.addEventListener('pointercancel', onUp)
    }

    el.addEventListener('pointerdown', onDown, { passive: true })

    return () => {
      stopMomentum()
      el.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup',   onUp)
      window.removeEventListener('pointercancel', onUp)
    }
  }, [commit, startMomentum])


  return (
    <section
      ref={sectionRef}
      className="gallery-section"
      style={{
        position:        'relative',
        width:           '100%',
        height:          '100svh',
        overflow:        'hidden',
        backgroundColor: '#F5F4F0',
        cursor:          'grab',
        userSelect:      'none',
        touchAction:     'none',
      }}
    >
      <style>{`
        .pin-card {
          position: absolute;
          overflow: hidden;
        }
        /* Cover image wrapper */
        .pin-cover {
          position: absolute; inset: 0;
          pointer-events: none;
        }
        .pin-cover img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          pointer-events: none; user-select: none;
          -webkit-user-drag: none;
          transition: transform 0.55s cubic-bezier(0.16,1,0.3,1),
                      opacity 0.4s ease;
        }
        .pin-card:hover .pin-cover img {
          transform: scale(1.06);
          opacity: 0.55;
        }

        /* Permanent corner label — bottom left, always visible */
        .pin-label {
          position: absolute;
          bottom: 1.25rem;
          left: 1.4rem;
          pointer-events: none;
          z-index: 4;
          opacity: 0.92;
          transition: opacity 0.3s ease;
        }
        .pin-card:hover .pin-label { opacity: 0; }
        .pin-title {
          font-family: "'Gilda Display', serif";
          font-family: var(--font-display); font-weight: 600;
          font-size: clamp(0.95rem, 1.5vw, 1.35rem);
          letter-spacing: -0.02em; color: #fff;
          margin: 0 0 0.3rem; line-height: 1.1;
          text-shadow: 0 1px 8px rgba(0,0,0,0.5);
        }
        .pin-tag {
          font-family: "'Poppins', sans-serif";
          font-weight: 300;
          font-size: clamp(0.52rem, 0.75vw, 0.65rem);
          letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.75); margin: 0;
          text-shadow: 0 1px 6px rgba(0,0,0,0.5);
        }

        /* Gradient base so text is always readable */
        .pin-gradient {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.52) 0%, transparent 55%);
          pointer-events: none;
          z-index: 2;
          transition: opacity 0.3s ease;
        }
        .pin-card:hover .pin-gradient { opacity: 0; }

        /* Preview images — each covers the full card, stacked, fade in on hover */
        .pin-preview {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.45s ease;
          z-index: 3;
        }
        .pin-preview img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          pointer-events: none; user-select: none;
          -webkit-user-drag: none;
        }

        .pin-card:hover .pin-preview-a {
          opacity: 1;
        }
      `}</style>

      {/* ── Label ── */}
      <div
        className="gallery-label"
        style={{
          position: 'absolute', top: '1.75rem', left: '2rem', zIndex: 10,
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(0.6rem, 0.9vw, 0.72rem)', letterSpacing: '0.2em',
          textTransform: 'uppercase', color: '#B9111C',
        }}
      >
        Proyectos · drag to explore
      </div>

      {/* ── Infinite drag canvas — z-index: 2 encima del texto ── */}
      <div
        ref={canvasRef}
        draggable={false}
        style={{
          position:   'absolute',
          top:        '50%',
          left:       '50%',
          willChange: 'transform',
          zIndex:     2,
        }}
      >
        {GRID.map((item) => (
          <div
            key={item.key}
            draggable={false}
            className="pin-card"
            style={{
              width:  `${CARD_W}px`,
              height: `${CARD_H}px`,
              left:   `${item.x}px`,
              top:    `${item.y}px`,
              cursor: 'grab',
            }}
            onClick={() => {
              if (didDrag.current) return
              window.location.href = `/project/${item.id}`
            }}
          >
            {/* Cover image */}
            <div className="pin-cover">
              <img src={item.cover} alt={item.title} loading="lazy" />
            </div>

            {/* Permanent gradient base so text is readable */}
            <div className="pin-gradient" />

            {/* Corner label — title + tags, always visible, hides on hover */}
            <div className="pin-label">
              <p className="pin-title">{item.title}</p>
              <p className="pin-tag">{item.tag}</p>
            </div>

            {/* Preview image — fades in on hover */}
            <div className="pin-preview pin-preview-a">
              <img src={`/projects/${item.id}/1.png`} alt="" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
