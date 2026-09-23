import type { InsightItem } from '../../data/projectsData'

type Props = { item: InsightItem; index?: number }

export default function InsightCard({ item, index = 0 }: Props) {
  return (
    <article
      className="flex flex-col gap-3 py-7"
      style={{ borderTop: '0.5px solid rgba(26,24,21,0.1)' }}
    >
      {/* Counter */}
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 300,
          fontSize: '0.55rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(26,24,21,0.25)',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Title */}
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: '0.6rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#B9111C',
        }}
      >
        {item.title}
      </p>

      {/* Body */}
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 300,
          fontSize: 'clamp(0.9rem, 1.05vw, 1.05rem)',
          lineHeight: 1.75,
          color: 'rgba(26,24,21,0.65)',
          maxWidth: '520px',
        }}
      >
        {item.text}
      </p>
    </article>
  )
}
