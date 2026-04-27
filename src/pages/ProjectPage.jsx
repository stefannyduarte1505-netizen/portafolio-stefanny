import { useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import { getProject } from '../data/projects'
import { useIsMobile } from '../hooks/useIsMobile'

export default function ProjectPage() {
  const { slug }   = useParams()
  const navigate   = useNavigate()
  const project    = getProject(slug)
  const isMobile   = useIsMobile()

  const IMG_H  = isMobile ? 42 : 58   // vh
  const INFO_H = isMobile ? 58 : 42   // vh

  const wrapperRef  = useRef(null)
  const stripRef    = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  useEffect(() => {
    const onScroll = () => {
      const wrapper = wrapperRef.current
      const strip   = stripRef.current
      const bar     = progressRef.current
      if (!wrapper || !strip) return

      const stickyH   = window.innerHeight          // full vh sticky container
      const scrollMax = wrapper.offsetHeight - stickyH
      const scrolled  = Math.max(0, Math.min(scrollMax, -wrapper.getBoundingClientRect().top))
      const progress  = scrollMax > 0 ? scrolled / scrollMax : 0

      const totalW = strip.scrollWidth - window.innerWidth
      strip.style.transform = `translateX(${-progress * totalW}px)`
      if (bar) bar.style.transform = `scaleX(${progress})`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [project])

  if (!project) {
    return (
      <div style={{ backgroundColor: '#F5F4F0', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: "'Gilda Display', serif", fontSize: '1.5rem', color: '#1A1815' }}>
          Proyecto no encontrado.
        </p>
      </div>
    )
  }

  const gallery = project.gallery || []
  // 1 scroll-screen per image → enough travel to move the full strip
  const scrollH = `${Math.max(1, gallery.length) * 100}vh`

  return (
    <div style={{ backgroundColor: '#F5F4F0' }}>

      {/* ── Close — fixed top right ── */}
      <button
        onClick={() => {
          sessionStorage.setItem('scrollToGallery', '1')
          window.location.href = '/'
        }}
        style={{
          position: 'fixed', top: '1.5rem', right: isMobile ? '1rem' : '2rem', zIndex: 200,
          display: 'flex', alignItems: 'center',
          padding: '0.6rem 2rem',
          borderRadius: '100px',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          backgroundColor: 'rgba(245,244,240,0.55)',
          boxShadow: '0 2px 24px rgba(0,0,0,0.07)',
          border: 'none',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 400,
          fontSize: '0.95rem',
          letterSpacing: '0.04em',
          color: '#000000',
          transition: 'color 0.2s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#820606'}
        onMouseLeave={e => e.currentTarget.style.color = '#000000'}
      >
        Close
      </button>

      {/* ── Scroll wrapper — creates vertical scroll space ── */}
      <div ref={wrapperRef} style={{ height: scrollH }}>

        {/* Sticky full-viewport container */}
        <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

          {/* TOP — image strip */}
          <div style={{ position: 'relative', height: `${IMG_H}vh`, overflow: 'hidden', backgroundColor: '#0e0e0e', flexShrink: 0 }}>
            <div
              ref={stripRef}
              style={{ display: 'flex', height: '100%', willChange: 'transform' }}
            >
              {gallery.map((img, i) => (
                <div key={i} style={{ flexShrink: 0, height: '100%', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <img
                    src={img.src}
                    alt={img.caption || ''}
                    draggable={false}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    style={{ height: '100%', width: 'auto', display: 'block', pointerEvents: 'none', userSelect: 'none' }}
                  />
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }}>
              <div ref={progressRef} style={{ height: '100%', backgroundColor: 'rgba(255,255,255,0.5)', transformOrigin: 'left', transform: 'scaleX(0)', willChange: 'transform' }} />
            </div>

            {/* scroll hint */}
            <span style={{ position: 'absolute', bottom: '1.4rem', right: '2rem', fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', pointerEvents: 'none' }}>
              scroll
            </span>
          </div>

          {/* BOTTOM — info panel */}
          <div style={{ height: `${INFO_H}vh`, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', backgroundColor: '#F5F4F0', flexShrink: 0, overflowY: 'auto' }}>

            {/* Left — subtitle + title + year + tags */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: isMobile ? '1.5rem 1.5rem 0.5rem' : '2.5rem 2rem 2.5rem 3rem', overflowY: 'auto' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300, fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B9111C', margin: '0 0 0.6rem' }}>
                {project.subtitle}
              </p>
              <h1 style={{ fontFamily: "'Gilda Display', serif", fontWeight: 400, fontSize: 'clamp(1.8rem, 3.5vw, 4rem)', letterSpacing: '-0.02em', lineHeight: 1.05, color: '#1A1815', margin: '0 0 1.5rem' }}>
                {project.title}
              </h1>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '0.6rem', letterSpacing: '0.12em', color: '#1A1815', marginRight: '0.4rem' }}>
                  {project.year}
                </span>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A1815', border: '0.5px solid rgba(26,24,21,0.4)', padding: '0.2rem 0.6rem', borderRadius: '100px' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1A1815', margin: 0 }}>
                ← scroll to explore
              </p>
            </div>

            {/* Right — description */}
            <div style={{ display: 'flex', alignItems: 'center', padding: isMobile ? '0 1.5rem 1.5rem' : '2.5rem 3rem 2.5rem 1.5rem', overflowY: 'auto' }}>
              {project.description && (
                <p style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: 'clamp(0.75rem, 0.85vw, 0.85rem)', lineHeight: 1.8, color: '#1A1815', margin: 0 }}>
                  {project.description}
                </p>
              )}
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
