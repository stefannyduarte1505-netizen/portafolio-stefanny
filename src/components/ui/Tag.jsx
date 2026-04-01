/**
 * Tag — pill de skill/tecnología
 *
 * variant: 'light' (default) | 'dark'
 */
export default function Tag({ label, variant = 'light' }) {
  const isDark = variant === 'dark'

  return (
    <span
      className="inline-flex items-center px-3 py-1 text-[var(--text-label)] font-[var(--font-ui)] leading-none transition-colors duration-150"
      style={{
        borderRadius: 'var(--radius-tag)',
        border: `0.4px solid ${isDark ? 'rgba(230,225,121,0.4)' : 'var(--color-ink)'}`,
        color: isDark ? 'var(--color-white)' : 'var(--color-ink)',
        backgroundColor: isDark ? 'transparent' : 'transparent',
      }}
    >
      {label}
    </span>
  )
}
