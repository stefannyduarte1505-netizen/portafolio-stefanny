const AVATAR = 'https://portafoliostefduarte.figma.site/_assets/v11/6bd60f16ef6da3cc25671f4ad02961d76aa18ec7.png'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-accent)' }}>
      {/* Top row */}
      <div
        className="flex items-center justify-between px-10"
        style={{ height: '99px' }}
      >
        {/* Avatar + nombre */}
        <div className="flex items-center gap-4">
          <div
            className="w-[50px] h-[50px] rounded-full overflow-hidden flex-shrink-0"
            style={{ boxShadow: '0px 4px 4px rgba(0,0,0,0.25)' }}
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
              fontSize: 'var(--text-heading-lg)',
              color: 'var(--color-white)',
              letterSpacing: '-0.045em',
              lineHeight: 1.03,
            }}
          >
            Stefanny Duarte
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-12">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Projects', href: '/#projects' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'var(--text-heading-lg)',
                color: 'var(--color-accent)',
                textDecoration: 'underline',
                textUnderlinePosition: 'from-font',
                letterSpacing: '-0.045em',
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom row */}
      <div
        className="flex items-end justify-between px-10 py-10"
        style={{ borderTop: '0.5px solid rgba(255,255,255,0.2)' }}
      >
        {/* Left — contact info */}
        <div className="flex flex-col gap-1">
          <div
            className="flex gap-3"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--text-body)',
              color: 'var(--color-white)',
              lineHeight: 1.23,
            }}
          >
            <span>Lima</span>
            <span>·</span>
            <span>Barcelona</span>
          </div>
          <a
            href="mailto:stefanny.duarte@gmail.com"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--text-body)',
              color: 'var(--color-white)',
              textDecoration: 'none',
            }}
          >
            stefanny.duarte@gmail.com
          </a>
        </div>

        {/* Right — social + copyright */}
        <div className="flex flex-col items-end gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/stefannyduarte/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: 'var(--text-body)',
                color: 'var(--color-white)',
                textDecoration: 'none',
              }}
            >
              LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: 'var(--text-body)',
                color: 'var(--color-white)',
                textDecoration: 'none',
              }}
            >
              Behance
            </a>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'var(--text-caption)',
              color: 'var(--color-white)',
              letterSpacing: '-0.03em',
              margin: 0,
            }}
          >
            © 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
