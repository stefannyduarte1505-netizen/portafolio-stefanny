import { useEffect, useRef } from 'react'

/*
  States:
  'default'  → small black dot
  'link'     → ring (28px transparent circle)
  'drag'     → pill "drag"  (white bg) — gallery label
  'explore'  → pill "Explore" (black bg) — pin-card
*/

export default function Cursor() {
  const dotRef     = useRef(null)
  const pillRef    = useRef(null)
  const pillTextRef= useRef(null)
  const posRef     = useRef({ x: -100, y: -100 })
  const rafRef     = useRef(null)
  const stateRef   = useRef('default')

  useEffect(() => {
    const dot      = dotRef.current
    const pill     = pillRef.current
    const pillText = pillTextRef.current
    if (!dot || !pill) return

    document.documentElement.style.cursor = 'none'

    const onMove = (e) => { posRef.current = { x: e.clientX, y: e.clientY } }

    const tick = () => {
      const { x, y } = posRef.current
      dot.style.transform  = `translate(${x}px, ${y}px)`
      pill.style.transform = `translate(${x}px, ${y}px)`
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    const setState = (next) => {
      if (stateRef.current === next) return
      stateRef.current = next

      // dot visibility
      dot.style.opacity = (next === 'explore' || next === 'drag') ? '0' : '1'

      // dot size / style
      if (next === 'link') {
        dot.style.width = '28px'; dot.style.height = '28px'
        dot.style.marginLeft = '-14px'; dot.style.marginTop = '-14px'
        dot.style.backgroundColor = 'transparent'
        dot.style.border = '1.5px solid #1A1815'
      } else {
        dot.style.width = '16px'; dot.style.height = '16px'
        dot.style.marginLeft = '-8px'; dot.style.marginTop = '-8px'
        dot.style.backgroundColor = '#1A1815'
        dot.style.border = 'none'
      }

      // pill
      if (next === 'explore') {
        pill.style.opacity         = '1'
        pill.style.backgroundColor = '#1A1815'
        pill.style.boxShadow       = 'none'
        if (pillText) { pillText.style.color = '#fff' ; pillText.textContent = 'Explore' }
      } else if (next === 'drag') {
        pill.style.opacity         = '1'
        pill.style.backgroundColor = '#fff'
        pill.style.boxShadow       = '0 2px 16px rgba(0,0,0,0.12)'
        if (pillText) { pillText.style.color = '#1A1815' ; pillText.textContent = 'drag' }
      } else {
        pill.style.opacity = '0'
      }
    }

    const EXPLORE_SEL = '.pin-card'
    const DRAG_SEL    = '.gallery-section'
    const LINK_SEL    = 'a, button, [role="button"]'

    const resolve = (el) => {
      if (!el) return 'default'
      if (el.closest(EXPLORE_SEL)) return 'explore'
      if (el.closest(DRAG_SEL))    return 'drag'
      if (el.closest(LINK_SEL))    return 'link'
      return 'default'
    }

    const onOver = (e) => setState(resolve(e.target))
    const onOut  = (e) => setState(resolve(e.relatedTarget))

    const onLeaveWin = () => { dot.style.opacity = '0'; pill.style.opacity = '0' }
    const onEnterWin = () => { if (stateRef.current === 'default' || stateRef.current === 'link') dot.style.opacity = '1' }

    document.addEventListener('mousemove',  onMove,    { passive: true })
    document.addEventListener('mouseover',  onOver,    { passive: true })
    document.addEventListener('mouseout',   onOut,     { passive: true })
    document.addEventListener('mouseleave', onLeaveWin)
    document.addEventListener('mouseenter', onEnterWin)

    return () => {
      document.documentElement.style.cursor = ''
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
      document.removeEventListener('mouseleave', onLeaveWin)
      document.removeEventListener('mouseenter', onEnterWin)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const fixed = { position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999, willChange: 'transform' }

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          ...fixed,
          width: '16px', height: '16px',
          marginLeft: '-8px', marginTop: '-8px',
          borderRadius: '50%',
          backgroundColor: '#1A1815',
          opacity: 1,
          transition: 'width 0.15s ease, height 0.15s ease, background-color 0.15s ease, border 0.15s ease, margin 0.15s ease, opacity 0.15s ease',
        }}
      />

      {/* Pill — shared for both "Explore" and "drag" */}
      <div
        ref={pillRef}
        style={{
          ...fixed,
          opacity: 0,
          marginLeft: '-55px',
          marginTop:  '-20px',
          borderRadius: '100px',
          padding: '9px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'opacity 0.18s ease, background-color 0.18s ease',
          whiteSpace: 'nowrap',
          minWidth: '90px',
        }}
      >
        <span
          ref={pillTextRef}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: '0.8rem',
            letterSpacing: '0.01em',
            color: '#1A1815',
            transition: 'color 0.18s ease',
          }}
        >
          Explore
        </span>
      </div>
    </>
  )
}
