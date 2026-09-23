import type { Person } from '../../data/projectsData'

type Props = { item: Person }

export default function PersonaCard({ item }: Props) {
  return (
    <article
      className="flex flex-col gap-5 p-8 rounded-2xl"
      style={{ border: '0.5px solid rgba(26,24,21,0.1)', backgroundColor: '#fafafa' }}
    >
      {/* Tag chip */}
      <span
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 400,
          fontSize: '0.55rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#B9111C',
        }}
      >
        {item.tag}
      </span>

      {/* Avatar + title */}
      <div className="flex items-center gap-4">
        <div
          className="shrink-0 w-16 h-16 rounded-full overflow-hidden"
          style={{ border: '1px solid rgba(26,24,21,0.08)' }}
        >
          <img
            src={item.avatar}
            alt={item.title ?? item.tag}
            draggable={false}
            className="w-full h-full object-cover"
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          />
        </div>

        {item.title && (
          <p
            style={{
              fontFamily: "'Gilda Display', serif",
              fontWeight: 400,
              fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
              lineHeight: 1.2,
              color: '#1A1815',
            }}
          >
            {item.title}
          </p>
        )}
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 300,
          fontSize: 'clamp(0.85rem, 1vw, 1rem)',
          lineHeight: 1.8,
          color: 'rgba(26,24,21,0.65)',
        }}
      >
        {item.description}
      </p>
    </article>
  )
}
