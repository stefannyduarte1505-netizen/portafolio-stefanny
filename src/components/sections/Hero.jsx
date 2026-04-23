import { useEffect, useRef } from 'react'
import logoSvg from '../../assets/logo-stefduart.svg'
import { useIsMobile } from '../../hooks/useIsMobile'

export default function Hero() {
  const sectionRef = useRef(null)
  const isMobile   = useIsMobile()

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const onScroll = () => {
      const progress = Math.min(1, window.scrollY / window.innerHeight)
      section.style.opacity   = Math.max(0, 1 - progress * 1.6)
      section.style.transform = `translateY(${-progress * 80}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#fff',
        height:          '100svh',
        position:        'relative',
        overflow:        'hidden',
        willChange:      'transform, opacity',
      }}
    >
      {/* ── Logo — top left ── */}
      <div style={{ position: 'absolute', top: '1.5rem', left: isMobile ? '1.25rem' : '2.5rem', zIndex: 3 }}>
        <img
          src={logoSvg}
          alt="stef du art"
          style={{ width: isMobile ? '70px' : 'clamp(90px, 10vw, 130px)', height: 'auto', display: 'block' }}
        />
      </div>

      {isMobile ? (
        /* ── MOBILE: photo top 60%, tagline bottom ── */
        <>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '62%', overflow: 'hidden', zIndex: 1 }}>
            <img
              src="/hero-main.png"
              alt=""
              draggable={false}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', pointerEvents: 'none', userSelect: 'none' }}
            />
          </div>
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '38%', zIndex: 2, display: 'flex', alignItems: 'center', padding: '0 1.25rem 2rem' }}>
            <p style={{ fontFamily: "'Gilda Display', serif", fontWeight: 400, fontSize: 'clamp(0.9rem, 3.5vw, 1.1rem)', color: 'rgba(26,24,21,0.5)', lineHeight: 1.6, margin: 0 }}>
              Spatial Branding & Experience Design: conectando marcas, espacios y personas.
            </p>
          </div>
        </>
      ) : (
        /* ── DESKTOP: text left, photo right ── */
        <>
          <div style={{ position: 'absolute', left: '2.5rem', top: '38%', zIndex: 3, maxWidth: '320px' }}>
            <p style={{ fontFamily: "'Gilda Display', serif", fontWeight: 400, fontSize: 'clamp(0.85rem, 1.1vw, 1rem)', color: 'rgba(26,24,21,0.45)', lineHeight: 1.55, margin: 0 }}>
              Spatial Branding & Experience Design: conectando marcas, espacios y personas.
            </p>
          </div>
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', right: 0, zIndex: 2, overflow: 'hidden' }}>
            <img
              src="/hero-main.png"
              alt=""
              draggable={false}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', userSelect: 'none', pointerEvents: 'none' }}
            />
          </div>
        </>
      )}
    </section>
  )
}
