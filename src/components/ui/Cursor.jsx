import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef       = useRef(null)
  const ringRef      = useRef(null)   // link hover ring
  const xplOutRef    = useRef(null)   // explore circle outer (translate only, no transition)
  const xplInRef     = useRef(null)   // explore circle inner (scale transition)

  const posRef   = useRef({ x: -200, y: -200 })
  const rafRef   = useRef(null)
  const stateRef = useRef('default')

  useEffect(() => {
    const dot    = dotRef.current
    const ring   = ringRef.current
    const xplOut = xplOutRef.current
    const xplIn  = xplInRef.current
    if (!dot || !ring) return   // minimum required

    document.documentElement.style.cursor = 'none'

    /* ── selectors ── */
    const GALLERY = '[data-cursor="gallery"]'
    const LINK    = 'a, button, [role="button"]'

    const resolve = (el) => {
      if (!el) return 'default'
      if (el.closest(GALLERY)) return 'gallery'
      if (el.closest(LINK))    return 'link'
      return 'default'
    }

    /* ── state machine ── */
    const setState = (next) => {
      if (stateRef.current === next) return
      stateRef.current = next

      if (next === 'default') {
        dot.style.opacity  = '1'
        ring.style.opacity = '0'
        ring.style.width = '0px'; ring.style.height = '0px'
      } else if (next === 'link') {
        dot.style.opacity  = '0'
        ring.style.opacity = '1'
        ring.style.width = '36px'; ring.style.height = '36px'
      } else if (next === 'gallery') {
        dot.style.opacity  = '0'
        ring.style.opacity = '0'
        ring.style.width = '0px'; ring.style.height = '0px'
      }

      if (xplIn) {
        xplIn.style.transform = next === 'gallery' ? 'scale(1)' : 'scale(0)'
        xplIn.style.opacity   = next === 'gallery' ? '1'        : '0'
      }
    }

    /* ── position + state loop (elementFromPoint = always correct) ── */
    const onMove = (e) => { posRef.current = { x: e.clientX, y: e.clientY } }

    const tick = () => {
      const { x, y } = posRef.current
      const t = `translate(${x}px,${y}px)`
      dot.style.transform  = t
      ring.style.transform = t
      if (xplOut) xplOut.style.transform = t

      const el = document.elementFromPoint(x, y)
      setState(resolve(el))

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    const onLeave = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
      if (xplIn) { xplIn.style.transform = 'scale(0)'; xplIn.style.opacity = '0' }
    }
    const onEnter = () => { if (stateRef.current === 'default') dot.style.opacity = '1' }

    document.addEventListener('mousemove',  onMove,  { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      document.documentElement.style.cursor = ''
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  const base = {
    position: 'fixed', top: 0, left: 0,
    pointerEvents: 'none', zIndex: 9999,
    willChange: 'transform',
  }

  return (
    <>
      {/* Small dot — default state */}
      <div ref={dotRef} style={{
        ...base,
        width: 12, height: 12,
        marginLeft: -6, marginTop: -6,
        borderRadius: '50%',
        backgroundColor: '#1A1815',
        opacity: 1,
        transition: 'opacity 0.15s ease',
      }} />

      {/* Ring — link / button hover */}
      <div ref={ringRef} style={{
        ...base,
        width: 0, height: 0,
        marginLeft: -18, marginTop: -18,
        borderRadius: '50%',
        border: '1.5px solid #1A1815',
        opacity: 0,
        transition: 'opacity 0.18s ease, width 0.22s ease, height 0.22s ease, margin 0.22s ease',
      }} />

      {/* EXPLORE circle — gallery hover */}
      {/* outer: position only (no CSS transition so it follows instantly) */}
      <div ref={xplOutRef} style={{ ...base }}>
        {/* inner: scale + opacity with transition */}
        <div ref={xplInRef} style={{
          width: 118, height: 118,
          marginLeft: -59, marginTop: -59,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          mixBlendMode: 'difference',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'scale(0)',
          opacity: 0,
          transition: 'transform 0.42s cubic-bezier(0.34,1.56,0.64,1), opacity 0.22s ease',
        }}>
          <span style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: '0.58rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: '#1A1815',
            userSelect: 'none',
          }}>
            EXPLORE
          </span>
        </div>
      </div>
    </>
  )
}
