import { useEffect, useRef, useState } from 'react'
import { useIsMobile } from '../../hooks/useIsMobile'

const GILDA   = "'Gilda Display', serif"
const POPPINS = "'Poppins', sans-serif"

export default function ScrollSection({ label, heading, body, images, reverse = false }) {
  const isMobile = useIsMobile()
  const [active, setActive] = useState(0)
  const N = images.length
  const imageRefs = useRef([])

  useEffect(() => {
    imageRefs.current = imageRefs.current.slice(0, N)
    const observers = imageRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i) },
        { threshold: 0.5 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [N])

  /* ── Mobile: title then images stacked ── */
  if (isMobile) {
    return (
      <div style={{ backgroundColor: '#fff', padding: '2rem 1.25rem' }}>
        <h2 style={{
          fontFamily: GILDA, fontWeight: 400,
          fontSize: 'clamp(1.6rem,7vw,2.4rem)',
          letterSpacing: '-0.01em', lineHeight: 1.15,
          color: '#B9111C', margin: '0 0 1.25rem',
        }}>
          {heading}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
          {body.split('\n\n').map((para, i) => (
            <p key={i} style={{
              fontFamily: POPPINS, fontWeight: 300, fontSize: '0.9rem',
              lineHeight: 1.8, color: 'rgba(26,24,21,0.65)', margin: 0,
            }}>
              {para}
            </p>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              loading={i === 0 ? 'eager' : 'lazy'}
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
            />
          ))}
        </div>
      </div>
    )
  }

  /* ── Desktop: sticky panel + image strip ── */
  const infoPanel = (
    <div style={{
      width: '40%',
      flexShrink: 0,
      position: 'sticky',
      top: 0,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: 'clamp(2.5rem,4vw,5rem) clamp(2rem,3.5vw,4rem)',
      gap: 'clamp(1rem,1.5vw,1.8rem)',
      overflowY: 'auto',
      backgroundColor: '#fff',
      boxSizing: 'border-box',
    }}>
      <p style={{
        fontFamily: POPPINS, fontWeight: 300, fontSize: '0.58rem',
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'rgba(26,24,21,0.3)', margin: 0,
      }}>
        {label}
      </p>

      <h2 style={{
        fontFamily: GILDA, fontWeight: 400,
        fontSize: 'clamp(1.5rem,2.6vw,3rem)',
        letterSpacing: '-0.01em', lineHeight: 1.15,
        color: '#B9111C', margin: 0,
      }}>
        {heading}
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {body.split('\n\n').map((para, i) => (
          <p key={i} style={{
            fontFamily: POPPINS, fontWeight: 300, fontSize: '15px',
            lineHeight: 1.85, color: 'rgba(26,24,21,0.65)', margin: 0,
          }}>
            {para}
          </p>
        ))}
      </div>

      <p style={{
        fontFamily: POPPINS, fontWeight: 300, fontSize: '0.55rem',
        letterSpacing: '0.18em', color: 'rgba(26,24,21,0.22)',
        margin: 'auto 0 0',
      }}>
        {String(active + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
      </p>
    </div>
  )

  const imageStrip = (
    <div style={{ flex: 1, backgroundColor: '#fff' }}>
      {images.map((src, i) => (
        <div
          key={src}
          ref={el => { imageRefs.current[i] = el }}
          style={{ padding: 'clamp(0.75rem,1.5vw,1.5rem)' }}
        >
          <img
            src={src}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      ))}
    </div>
  )

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', backgroundColor: '#fff' }}>
      {reverse ? imageStrip : infoPanel}
      {reverse ? infoPanel : imageStrip}
    </div>
  )
}
