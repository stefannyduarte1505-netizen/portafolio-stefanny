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

  const handleClick = (e, href) => {
    e.preventDefault()
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

  return (
    <nav
      style={{
        position: 'fixed',
        top: '1.5rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '1.25rem' : '2.5rem',
        padding: isMobile ? '0.5rem 1.25rem' : '0.6rem 2rem',
        borderRadius: '100px',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        backgroundColor: scrolled
          ? 'rgba(245, 244, 240, 0.55)'
          : 'rgba(245, 244, 240, 0.35)',
        boxShadow: scrolled
          ? '0 2px 24px rgba(0,0,0,0.07)'
          : '0 1px 12px rgba(0,0,0,0.04)',
        transition: 'background-color 0.3s, box-shadow 0.3s',
        whiteSpace: 'nowrap',
      }}
    >
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          onClick={(e) => handleClick(e, href)}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: isMobile ? '0.78rem' : '0.95rem',
            letterSpacing: '0.04em',
            color: '#1A1815',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#820606'}
          onMouseLeave={e => e.currentTarget.style.color = '#1A1815'}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}
