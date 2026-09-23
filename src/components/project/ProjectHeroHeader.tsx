import type { ProjectMeta } from '../../data/projectsData'
import ProtectedImg from '../ui/ProtectedImg'

const POPPINS = "'Poppins', sans-serif"
const GILDA   = "'Gilda Display', serif"

type Props = {
  title: string
  description: string
  tags: string[]
  meta: ProjectMeta
  heroImage: string
}

export default function ProjectHeroHeader({ title, description, tags, meta, heroImage }: Props) {
  const PAD = 'clamp(1.5rem,5vw,5rem)'

  return (
    <header style={{ backgroundColor: '#fff' }}>
      {/* ── Top grid: title left / meta right ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 'clamp(2rem,6vw,6rem)',
          padding: `clamp(6rem,12vw,10rem) ${PAD} clamp(2.5rem,4vw,4rem)`,
          alignItems: 'start',
        }}
      >
        {/* Left — title + description + tags */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.2rem,2vw,1.8rem)' }}>
          <h1
            style={{
              fontFamily: GILDA,
              fontWeight: 400,
              fontSize: 'clamp(2rem,4.5vw,5rem)',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: '#B9111C',
              margin: 0,
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontFamily: POPPINS,
              fontWeight: 300,
              fontSize: 'clamp(0.95rem,1.2vw,1.2rem)',
              lineHeight: 1.8,
              color: 'rgba(26,24,21,0.65)',
              margin: 0,
              maxWidth: '520px',
            }}
          >
            {description}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {tags.map(tag => (
              <span
                key={tag}
                style={{
                  fontFamily: POPPINS,
                  fontWeight: 300,
                  fontSize: '0.58rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(26,24,21,0.5)',
                  border: '0.5px solid rgba(26,24,21,0.25)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '100px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — meta ficha técnica */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            paddingTop: 'clamp(0rem,1vw,0.5rem)',
          }}
        >
          {(
            [
              { label: 'Rol',      value: meta.role     },
              { label: 'Timeline', value: meta.timeline },
              { label: 'Equipo',   value: meta.team     },
            ] as const
          ).map(({ label, value }) => (
            <div
              key={label}
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(4.5rem,7vw,7rem) 1fr',
                gap: '0 0.75rem',
                padding: '0.65rem 0',
                borderBottom: '0.5px solid rgba(26,24,21,0.08)',
              }}
            >
              <span
                style={{
                  fontFamily: POPPINS,
                  fontWeight: 300,
                  fontSize: '0.58rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(26,24,21,0.32)',
                  paddingTop: '0.12em',
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: POPPINS,
                  fontWeight: 300,
                  fontSize: '0.88rem',
                  lineHeight: 1.6,
                  color: 'rgba(26,24,21,0.65)',
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Cover image full-bleed ── */}
      <ProtectedImg src={heroImage} loading="eager" />
    </header>
  )
}
