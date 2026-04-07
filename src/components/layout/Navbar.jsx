const AVATAR = 'https://portafoliostefduarte.figma.site/_assets/v11/6bd60f16ef6da3cc25671f4ad02961d76aa18ec7.png'

export default function Navbar() {
  return (
    <nav
      className="flex items-center justify-between px-10 py-5 sticky top-0 z-50"
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

      {/* Nav links */}
      <ul className="flex items-center gap-12 list-none m-0 p-0">
        {[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Projects', href: '/#projects' },
        ].map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="no-underline transition-colors duration-200 hover:text-[var(--color-accent)]"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'var(--text-heading-lg)',
                letterSpacing: '-0.045em',
                color: 'var(--color-accent)',
                textDecoration: 'underline',
                textUnderlinePosition: 'from-font',
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
