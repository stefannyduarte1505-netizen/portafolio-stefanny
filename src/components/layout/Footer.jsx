export default function Footer() {
  return (
    <footer
      className="flex items-center justify-between px-10"
      style={{ backgroundColor: 'var(--color-accent)', height: '99px' }}
    >
      <p
        className="text-[var(--color-white)] text-[var(--text-body)] font-[var(--font-body)]"
      >
        © {new Date().getFullYear()} Stefanny Duarte
      </p>

      <div className="flex items-center gap-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-white)] hover:opacity-75 transition-opacity duration-200 text-[var(--text-label)] font-[var(--font-ui)]"
        >
          LinkedIn
        </a>
        <a
          href="https://behance.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-white)] hover:opacity-75 transition-opacity duration-200 text-[var(--text-label)] font-[var(--font-ui)]"
        >
          Behance
        </a>
        <a
          href="mailto:hola@stefannyduarte.com"
          className="text-[var(--color-white)] hover:opacity-75 transition-opacity duration-200 text-[var(--text-label)] font-[var(--font-ui)]"
        >
          Email
        </a>
      </div>
    </footer>
  )
}
