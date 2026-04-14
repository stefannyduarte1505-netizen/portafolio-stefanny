import { useState, useEffect } from 'react'

const AVATAR =
  'https://portafoliostefduarte.figma.site/_assets/v11/6bd60f16ef6da3cc25671f4ad02961d76aa18ec7.png'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/#projects' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close mobile menu on any navigation
  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('hashchange', close)
    window.addEventListener('popstate', close)
    return () => {
      window.removeEventListener('hashchange', close)
      window.removeEventListener('popstate', close)
    }
  }, [])

  return (
    <>
      <nav
        className="flex items-center justify-between px-6 md:px-10 py-5 sticky top-0 z-50"
        style={{ backgroundColor: 'var(--color-bg)' }}
      >
        {/* Avatar / Logo */}
        <a href="/" aria-label="Inicio" className="flex items-center gap-3 no-underline">
          <div
            className="w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0"
            style={{ boxShadow: 'var(--shadow-avatar)' }}
          >
            <img
              src={AVATAR}
              alt="Stefanny Duarte"
              className="w-full h-full object-cover"
            />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: '20px',
              letterSpacing: '-0.045em',
              color: 'var(--color-ink)',
            }}
          >
            Stefanny Duarte
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="no-underline transition-opacity duration-200 hover:opacity-50"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 'var(--text-body)',
                  letterSpacing: '-0.03em',
                  color: 'var(--color-ink)',
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile — hamburger / X */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                borderRadius: '2px',
                backgroundColor: 'var(--color-ink)',
                transformOrigin: 'center',
                transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.2s',
                transform:
                  open && i === 0
                    ? 'translateY(6.5px) rotate(45deg)'
                    : open && i === 2
                    ? 'translateY(-6.5px) rotate(-45deg)'
                    : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className="md:hidden fixed left-0 right-0 z-40 overflow-hidden"
        style={{
          top: '89px',
          backgroundColor: 'var(--color-bg)',
          borderBottom: open ? '0.5px solid var(--color-border)' : 'none',
          maxHeight: open ? '240px' : '0',
          transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <ul className="list-none m-0 flex flex-col px-6 py-6 gap-5 p-0">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 'var(--text-heading-md)',
                  letterSpacing: '-0.045em',
                  color: 'var(--color-ink)',
                  textDecoration: 'none',
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
