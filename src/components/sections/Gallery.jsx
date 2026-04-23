/* ── Project Gallery — infinite drag canvas + parallax CREATIVE DESIGNER ── */
import { useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

/* ── Project covers (cycle infinitely across the grid) ── */
const PROJECTS = [
  { id: 'kinta',            title: 'Kinta',            subtitle: 'Spatial Branding & Art Direction', cover: '/covers/kinta.png'            },
  { id: 'cafe-don-salazar', title: 'Café Don Salazar', subtitle: 'Service Design',                   cover: '/covers/don-salazar.png'      },
  { id: 'sole',             title: 'SOLE',             subtitle: 'CX y Omnicanalidad',               cover: '/covers/sole.png'             },
  { id: 'modulor',          title: 'Modulor',          subtitle: 'Web End to End',                   cover: '/covers/modulor.png'          },
  { id: 'kuna',             title: 'Kuna',             subtitle: 'Branding',                         cover: '/covers/kuna.png'             },
  { id: 'marea',            title: 'Marea',            subtitle: 'Experience Design',                cover: '/covers/marea.png'            },
  { id: 's-collection',     title: 'S. Collection',    subtitle: 'Art Direction',                    cover: '/covers/s-collection.png'     },
  { id: 'yuyito',           title: 'Yuyito',           subtitle: 'Branding & Espacial',              cover: '/covers/yuyito.png'           },
  { id: 'enter-the-beyond', title: 'Enter The Beyond', subtitle: 'Motion & Art Direction',           cover: '/covers/enter-the-beyond.png' },
]

/* ── Card size — 16:9 ── */
const CARD_W = 780
const CARD_H = Math.round(CARD_W * 9 / 16)  // 439px

/* ── Scattered positions within one patch (top-left of each card) ── */
/* Lots of breathing room — no rows, no columns                       */
const PATCH_W = 3400
const PATCH_H = 2400
const BASE_POS = [
  { idx: 0, x:    0, y:  200 },
  { idx: 1, x: 1300, y:    0 },
  { idx: 2, x: 2500, y:  380 },
  { idx: 3, x:  500, y:  950 },
  { idx: 4, x: 1700, y:  780 },
  { idx: 5, x: 2700, y: 1100 },
  { idx: 6, x:  160, y: 1620 },
  { idx: 7, x: 1450, y: 1500 },
  { idx: 8, x: 2600, y: 1820 },
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
        .pin-card img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          pointer-events: none; user-select: none;
          -webkit-user-drag: none;
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .pin-card:hover img { transform: scale(1.04); }
        .pin-info {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%);
          opacity: 0; transition: opacity 0.3s ease;
          display: flex; flex-direction: column;
          justify-content: flex-end; padding: 1.5rem;
        }
        .pin-card:hover .pin-info { opacity: 1; }
        .pin-title {
          font-family: var(--font-display); font-weight: 700;
          font-size: clamp(1.1rem, 1.8vw, 1.6rem);
          letter-spacing: -0.03em; color: #fff; margin: 0 0 0.2rem; line-height: 1.1;
        }
        .pin-sub {
          font-family: var(--font-display); font-weight: 300;
          font-size: clamp(0.6rem, 0.9vw, 0.75rem);
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.7); margin: 0;
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
            onPointerUp={() => {
              if (!didDrag.current) navigate(`/project/${item.id}`)
            }}
          >
            <img src={item.cover} alt={item.title} loading="lazy" />
            <div className="pin-info">
              <p className="pin-title">{item.title}</p>
              <p className="pin-sub">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
