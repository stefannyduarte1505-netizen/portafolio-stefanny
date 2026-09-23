import { useEffect, useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useLanguage } from '../../contexts/LanguageContext'

const POPPINS = "'Poppins', sans-serif"
const RED     = '#B9111C'
const DARK    = '#1A1815'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Work',  href: '/work'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const location  = useLocation()
  const navigate  = useNavigate()
  const isMobile  = useIsMobile()
  const { lang, setLang } = useLanguage()

  const isActive = (href) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const close = () => setOpen(false)
    window.addEventListener('scroll', close, { passive: true })
    return () => window.removeEventListener('scroll', close)
  }, [open])

  const linkStyle = (href) => ({
    fontFamily:    POPPINS,
    fontWeight:    400,
    fontSize:      '0.7rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color:         isActive(href) ? RED : DARK,
    textDecoration: 'none',
    transition:    'color 0.2s',
  })

  /* ── Desktop pill nav ── */
  if (!isMobile) {
    return (
      <nav
        style={{
          position:              'fixed',
          top:                   '1.5rem',
          left:                  0,
          right:                 0,
          zIndex:                100,
          display:               'flex',
          alignItems:            'center',
          justifyContent:        'space-between',
          padding:               '0 clamp(1.5rem,4vw,4rem)',
          pointerEvents:         'none',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily:    POPPINS,
            fontWeight:    400,
            fontSize:      '0.95rem',
            letterSpacing: '0.04em',
            color:         RED,
            textDecoration: 'none',
            lineHeight:    1.15,
            pointerEvents: 'auto',
          }}
        >
          stef<br />du<br />art
        </Link>

        {/* Center pill */}
        <div
          style={{
            display:              'flex',
            alignItems:           'center',
            gap:                  '2.5rem',
            padding:              '0.6rem 2rem',
            borderRadius:         '100px',
            backdropFilter:       'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            backgroundColor:      scrolled ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.45)',
            boxShadow:            scrolled ? '0 2px 24px rgba(0,0,0,0.07)' : '0 1px 12px rgba(0,0,0,0.04)',
            transition:           'background-color 0.3s, box-shadow 0.3s',
            pointerEvents:        'auto',
          }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              style={linkStyle(href)}
              onMouseEnter={e => { if (!isActive(href)) e.currentTarget.style.color = '#820606' }}
              onMouseLeave={e => { if (!isActive(href)) e.currentTarget.style.color = DARK }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Lang toggle */}
        <button
          onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
          style={{
            fontFamily:    POPPINS,
            fontWeight:    300,
            fontSize:      '0.7rem',
            letterSpacing: '0.1em',
            color:         'rgba(26,24,21,0.55)',
            background:    'none',
            border:        'none',
            cursor:        'pointer',
            pointerEvents: 'auto',
            padding:       0,
          }}
        >
          {lang === 'en' ? 'Español' : 'English'}
        </button>
      </nav>
    )
  }

  /* ── Mobile burger ── */
  return (
    <>
      {/* Logo top-left */}
      <Link
        to="/"
        style={{
          position:      'fixed',
          top:           '1.25rem',
          left:          '1.25rem',
          zIndex:        200,
          fontFamily:    POPPINS,
          fontWeight:    400,
          fontSize:      '0.85rem',
          letterSpacing: '0.04em',
          color:         RED,
          textDecoration: 'none',
          lineHeight:    1.15,
        }}
      >
        stef<br />du<br />art
      </Link>

      {/* Burger button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        style={{
          position:             'fixed',
          top:                  '1.25rem',
          right:                '1.25rem',
          zIndex:               200,
          width:                '42px',
          height:               '42px',
          borderRadius:         '100px',
          backdropFilter:       'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          backgroundColor:      scrolled || open ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.55)',
          boxShadow:            '0 2px 16px rgba(0,0,0,0.08)',
          border:               'none',
          cursor:               'pointer',
          display:              'flex',
          flexDirection:        'column',
          alignItems:           'center',
          justifyContent:       'center',
          gap:                  '5px',
          transition:           'background-color 0.3s',
          padding:              0,
        }}
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display:         'block',
            width:           '18px',
            height:          '1.5px',
            backgroundColor: DARK,
            borderRadius:    '2px',
            transition:      'transform 0.3s ease, opacity 0.3s ease',
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
        position:      'fixed',
        inset:         0,
        zIndex:        150,
        backgroundColor: '#ffffff',
        display:       'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:    'flex-start',
        padding:       '0 2.5rem',
        opacity:       open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition:    'opacity 0.35s ease',
      }}>
        {NAV_LINKS.map(({ label, href }, i) => (
          <Link
            key={label}
            to={href}
            onClick={() => setOpen(false)}
            style={{
              fontFamily:    "'Gilda Display', serif",
              fontWeight:    400,
              fontSize:      'clamp(2.2rem, 10vw, 3rem)',
              letterSpacing: '-0.02em',
              color:         isActive(href) ? RED : DARK,
              textDecoration: 'none',
              lineHeight:    1.3,
              display:       'block',
              transform:     open ? 'translateY(0)' : 'translateY(20px)',
              opacity:       open ? 1 : 0,
              transition:    `transform 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s, opacity 0.4s ease ${i * 0.08}s`,
            }}
          >
            {label}
          </Link>
        ))}

        {/* Lang toggle */}
        <button
          onClick={() => { setLang(lang === 'en' ? 'es' : 'en'); setOpen(false) }}
          style={{
            fontFamily:    POPPINS,
            fontWeight:    300,
            fontSize:      '0.7rem',
            letterSpacing: '0.12em',
            color:         'rgba(26,24,21,0.45)',
            background:    'none',
            border:        'none',
            cursor:        'pointer',
            padding:       '2rem 0 0',
          }}
        >
          {lang === 'en' ? 'Español' : 'English'}
        </button>

        <p style={{
          position:      'absolute',
          bottom:        '2.5rem',
          left:          '2.5rem',
          fontFamily:    POPPINS,
          fontWeight:    300,
          fontSize:      '0.6rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color:         'rgba(26,24,21,0.35)',
          margin:        0,
        }}>
          Stefanny Duarte © 2025
        </p>
      </div>
    </>
  )
}
