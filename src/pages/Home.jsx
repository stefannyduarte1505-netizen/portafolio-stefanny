import { useEffect, useRef } from 'react'
import Footer from '../components/layout/Footer'
import Hero   from '../components/sections/Hero'
import Gallery from '../components/sections/Gallery'
import AboutUs from '../components/sections/AboutUs'
import CreativeDirection from '../components/sections/CreativeDirection'
import { useHeroGallerySnap } from '../hooks/useHeroGallerySnap'

function Sticky({ children, zIndex }) {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex, height: '100svh', overflow: 'hidden', pointerEvents: 'none' }}>
      {children}
    </div>
  )
}

/* ── Global fixed label — opacidad controlada directo en DOM (sin state) ── */
function SectionLabel({ contactWrapRef }) {
  const heroLayerRef    = useRef(null)
  const contactLayerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY
      const vh = window.innerHeight
      const hl = heroLayerRef.current
      const cl = contactLayerRef.current
      if (!hl || !cl) return

      /* Hero: fades out over first 40% of first viewport */
      const heroP = Math.min(1, sy / (vh * 0.4))
      hl.style.opacity = String(Math.max(0, 1 - heroP))

      /* Contact: fades in as footer enters */
      let contactO = 0
      if (contactWrapRef.current) {
        const cRect = contactWrapRef.current.getBoundingClientRect()
        contactO = Math.max(0, Math.min(0.45, (vh * 0.55 - cRect.top) / (vh * 0.25) * 0.45))
      }
      cl.style.opacity = String(contactO)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [contactWrapRef])

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
        <span style={{ ...fontShared, fontSize: 'clamp(2.2rem,8.5vw,9.5rem)', color: '#B9111C', paddingLeft: '1rem' }}>Brand &amp;</span>
        <span style={{ ...fontShared, fontSize: 'clamp(2.2rem,8.5vw,9.5rem)', color: '#B9111C', paddingLeft: 'clamp(1.5rem,9vw,10rem)' }}>Experience</span>
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
    <div id="top" style={{ backgroundColor: '#ffffff' }}>
      <SectionLabel contactWrapRef={contactWrapRef} />

      <main>
        <Sticky zIndex={1}><Hero /></Sticky>

        <div style={{ position: 'relative', zIndex: 3, backgroundColor: '#ffffff' }}>
          <AboutUs />
        </div>

        <Gallery />

        <div style={{ position: 'relative', zIndex: 3, backgroundColor: '#ffffff' }}>
          <CreativeDirection />
          <div ref={contactWrapRef}>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}
