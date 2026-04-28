import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useIsMobile } from '../../hooks/useIsMobile'

const links = [
  { label: 'Home',     href: '#top' },
  { label: 'Projects', href: '#gallery' },
  { label: 'About me', href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()
  const isMobile  = useIsMobile()

  // Hide navbar on project pages
  if (location.pathname.startsWith('/project/')) return null

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on scroll
  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    window.addEventListener('scroll', close, { passive: true })
    return () => window.removeEventListener('scroll', close)
  }, [open])

  const handleClick = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const scrollTo = (id) => {
      if (id === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    const id = href.slice(1)
    if (location.pathname === '/') {
      scrollTo(id)
    } else {
      navigate('/')
      setTimeout(() => scrollTo(id), 300)
    }
  }

  /* ── Desktop pill nav ── */
  if (!isMobile) {
    return (
      <nav style={{
        position: 'fixed', top: '1.5rem', left: '50%',
        transform: 'translateX(-50%)', zIndex: 100,
        display: 'flex', alignItems: 'center', gap: '2.5rem',
        padding: '0.6rem 2rem', borderRadius: '100px',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        backgroundColor: scrolled ? 'rgba(245,244,240,0.55)' : 'rgba(245,244,240,0.35)',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.07)' : '0 1px 12px rgba(0,0,0,0.04)',
        transition: 'background-color 0.3s, box-shadow 0.3s',
        whiteSpace: 'nowrap',
      }}>
        {links.map(({ label, href }) => (
          <a key={label} href={href} onClick={(e) => handleClick(e, href)}
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400, fontSize: '0.95rem',
              letterSpacing: '0.04em', color: '#1A1815', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#820606'}
            onMouseLeave={e => e.currentTarget.style.color = '#1A1815'}
          >{label}</a>
        ))}
      </nav>
    )
  }

  /* ── Mobile burger ── */
  return (
    <>
      {/* Burger button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        style={{
          position: 'fixed', top: '1.25rem', right: '1.25rem', zIndex: 200,
          width: '42px', height: '42px',
          borderRadius: '100px',
          backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
          backgroundColor: scrolled || open ? 'rgba(245,244,240,0.85)' : 'rgba(245,244,240,0.55)',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '5px',
          transition: 'background-color 0.3s',
          padding: 0,
        }}
      >
        {/* Three lines → X animation */}
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block',
            width: '18px', height: '1.5px',
            backgroundColor: '#1A1815',
            borderRadius: '2px',
            transition: 'transform 0.3s ease, opacity 0.3s ease',
            transform: open
              ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
              : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
              : 'scaleX(0)'
              : 'none',
            opacity: open && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* Full-screen overlay menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 150,
        backgroundColor: '#F5F4F0',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'flex-start',
        padding: '0 2.5rem',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity 0.35s ease',
      }}>
        {links.map(({ label, href }, i) => (
          <a
            key={label}
            href={href}
            onClick={(e) => handleClick(e, href)}
            style={{
              fontFamily: "'Gilda Display', serif",
              fontWeight: 400,
              fontSize: 'clamp(2.2rem, 10vw, 3rem)',
              letterSpacing: '-0.02em',
              color: '#1A1815',
              textDecoration: 'none',
              lineHeight: 1.3,
              display: 'block',
              transform: open ? 'translateY(0)' : 'translateY(20px)',
              opacity: open ? 1 : 0,
              transition: `transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s, opacity 0.4s ease ${i * 0.06}s`,
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#820606'}
            onMouseLeave={e => e.currentTarget.style.color = '#1A1815'}
          >
            {label}
          </a>
        ))}

        {/* Bottom bar */}
        <p style={{
          position: 'absolute', bottom: '2.5rem', left: '2.5rem',
          fontFamily: "'Poppins', sans-serif", fontWeight: 300,
          fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'rgba(26,24,21,0.35)', margin: 0,
        }}>
          Stefanny Duarte © 2025
        </p>
      </div>
    </>
  )
}
