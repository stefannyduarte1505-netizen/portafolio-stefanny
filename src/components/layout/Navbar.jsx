export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 sticky top-0 z-50 bg-[var(--color-bg)]">
      {/* Avatar / Logo */}
      <a href="/" aria-label="Inicio">
        <div
          className="w-[79px] h-[79px] rounded-full overflow-hidden border border-[var(--color-border)]"
          style={{ boxShadow: 'var(--shadow-avatar)' }}
        >
          <img
            src="/avatar.png"
            alt="Stefanny Duarte"
            className="w-full h-full object-cover"
          />
        </div>
      </a>

      {/* Links */}
      <ul className="flex items-center gap-8 list-none m-0 p-0">
        {[
          { label: 'Home', href: '/' },
          { label: 'About', href: '#about' },
          { label: 'Projects', href: '#projects' },
        ].map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="font-[var(--font-body)] text-[var(--text-body)] text-[var(--color-ink)] no-underline hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
