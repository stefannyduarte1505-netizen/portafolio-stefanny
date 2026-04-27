import { useEffect, useRef } from 'react'
import Footer from '../components/layout/Footer'
import Hero   from '../components/sections/Hero'
import Gallery from '../components/sections/Gallery'
import AboutUs from '../components/sections/AboutUs'
import { useHeroGallerySnap } from '../hooks/useHeroGallerySnap'

function Sticky({ children, zIndex }) {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex, height: '100svh', overflow: 'hidden' }}>
      {children}
    </div>
  )
}

/* ── Global fixed label — opacidad controlada directo en DOM (sin state) ── */
function SectionLabel({ contactWrapRef, aboutRef }) {
  const heroLayerRef    = useRef(null)
  const galleryLayerRef = useRef(null)
  const aboutLayerRef   = useRef(null)
  const contactLayerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const sy  = window.scrollY
      const vh  = window.innerHeight
      const hl  = heroLayerRef.current
      const gl  = galleryLayerRef.current
      const al  = aboutLayerRef.current
      const cl  = contactLayerRef.current
      if (!hl || !gl || !al || !cl) return

      /* ── Hero: desaparece en el primer 35% del scroll ── */
      const heroP = Math.min(1, sy / (vh * 0.35))
      hl.style.opacity = String(Math.max(0, 1 - heroP))

      /* ── Posiciones de About y Contact ── */
      let aboutEnter = 0, contactO = 0
      if (aboutRef.current) {
        const aRect = aboutRef.current.getBoundingClientRect()
        // Solo aparece cuando About ocupa más del 40% de pantalla desde arriba
        aboutEnter = Math.max(0, Math.min(1, (vh * 0.4 - aRect.top) / (vh * 0.2)))
        const exit = Math.max(0, Math.min(1, -aRect.bottom / (vh * 0.15)))
        aboutEnter = aboutEnter * (1 - exit)
      }
      if (contactWrapRef.current) {
        const cRect = contactWrapRef.current.getBoundingClientRect()
        contactO = Math.max(0, Math.min(0.45, (vh * 0.55 - cRect.top) / (vh * 0.25) * 0.45))
      }

      // Mutually exclusive — contact wins over about
      al.style.opacity = String(0.1 * aboutEnter * (1 - contactO / 0.45))
      cl.style.opacity = String(contactO)

      /* ── Gallery: entre hero y about (sin solapamiento) ── */
      const fadeIn  = Math.max(0, Math.min(1, (heroP - 0.9) / 0.1))
      const fadeOut = Math.max(0, Math.min(1, aboutEnter * 3)) // sale rápido cuando About entra
      gl.style.opacity = String(0.1 * fadeIn * (1 - fadeOut))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [contactWrapRef, aboutRef])

  const base = {
    position: 'fixed', bottom: '2%', left: 0, right: 0,
    zIndex: 50, pointerEvents: 'none', userSelect: 'none', lineHeight: 0.88,
  }
  const fontShared = {
    fontFamily: "'Poppins', sans-serif", fontWeight: 300,
    letterSpacing: '-0.02em', whiteSpace: 'nowrap', display: 'block',
  }

  return (
    <>
      {/* Hero */}
      <div ref={heroLayerRef} aria-hidden="true" style={{ ...base }}>
        <span style={{ ...fontShared, fontSize: 'clamp(2.2rem,8.5vw,9.5rem)', color: '#B9111C', paddingLeft: '1rem' }}>Creative</span>
        <span style={{ ...fontShared, fontSize: 'clamp(2.2rem,8.5vw,9.5rem)', color: '#B9111C', paddingLeft: 'clamp(1.5rem,9vw,10rem)' }}>Designer</span>
      </div>

      {/* Gallery */}
      <div ref={galleryLayerRef} aria-hidden="true" style={{ ...base }}>
        <span style={{ ...fontShared, fontSize: 'clamp(2.5rem,11vw,12rem)', color: '#1A1815', paddingLeft: '1rem' }}>Projects</span>
      </div>

      {/* About */}
      <div ref={aboutLayerRef} aria-hidden="true" style={{ ...base }}>
        <span style={{ ...fontShared, fontSize: 'clamp(2.5rem,11vw,12rem)', color: '#1A1815', paddingLeft: '1rem' }}>About me</span>
      </div>

      {/* Contact */}
      <div ref={contactLayerRef} aria-hidden="true" style={{ ...base }}>
        <span style={{ ...fontShared, fontSize: 'clamp(2.5rem,11vw,12rem)', color: '#ffffff', paddingLeft: '1rem' }}>Contact</span>
      </div>
    </>
  )
}

export default function Home() {
  const contactWrapRef = useRef(null)
  const aboutRef       = useRef(null)
  useHeroGallerySnap()

  // If returning from a project page, jump straight to gallery section
  useEffect(() => {
    if (sessionStorage.getItem('scrollToGallery')) {
      sessionStorage.removeItem('scrollToGallery')
      // Gallery starts exactly at 1 viewport height in the sticky layout
      requestAnimationFrame(() => {
        window.scrollTo({ top: window.innerHeight, behavior: 'instant' })
      })
    }
  }, [])

  return (
    <div id="top" style={{ backgroundColor: '#F5F4F0' }}>
      <SectionLabel contactWrapRef={contactWrapRef} aboutRef={aboutRef} />

      <main>
        <Sticky zIndex={1}><Hero /></Sticky>
        <div id="gallery"><Sticky zIndex={2}><Gallery /></Sticky></div>

        <div style={{ position: 'relative', zIndex: 3, backgroundColor: '#F5F4F0' }}>
          <div ref={aboutRef}>
            <AboutUs />
          </div>
          <div ref={contactWrapRef}>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}
