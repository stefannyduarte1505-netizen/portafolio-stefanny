import { useState, useMemo } from 'react'
import { projectsData } from '../data/projectsData'
import ProjectCard from '../components/project/ProjectCard'

const PAD     = 'clamp(1.5rem,5vw,5rem)'
const POPPINS = "'Poppins', sans-serif"

const CATEGORIES = [
  { label: 'All',                tag: null               },
  { label: 'Service Design',     tag: 'Service Design'   },
  { label: 'CX',                 tag: 'CX'               },
  { label: 'Strategic Branding', tag: 'Strategic Branding' },
  { label: '360 Campaigns',      tag: '360 Campaigns'    },
  { label: 'Art Direction',      tag: 'Art Direction'    },
]

function CategoryPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display:       'inline-flex',
        alignItems:    'center',
        gap:           '0.4rem',
        fontFamily:    POPPINS,
        fontWeight:    active ? 400 : 300,
        fontSize:      'clamp(0.6rem,0.75vw,0.72rem)',
        letterSpacing: '0.06em',
        whiteSpace:    'nowrap',
        padding:       '0.45rem 0.9rem',
        borderRadius:  '100px',
        border:        'none',
        cursor:        'pointer',
        transition:    'background 0.2s, color 0.2s, box-shadow 0.2s',
        backgroundColor: active ? '#B9111C' : 'rgba(26,24,21,0.07)',
        color:           active ? '#ffffff' : 'rgba(26,24,21,0.65)',
        boxShadow:       active ? '0 2px 12px rgba(185,17,28,0.25)' : 'none',
      }}
    >
      {label}
      {/* Arrow — only show on inactive pills, matches Figma "+" icon */}
      {!active && (
        <span style={{ opacity: 0.45, fontSize: '0.65rem' }}>+</span>
      )}
    </button>
  )
}

export default function WorkPage() {
  const [active, setActive] = useState(null) // null = "All"

  const filtered = useMemo(() => {
    if (!active) return projectsData
    return projectsData.filter(p =>
      p.tags.some(t => t.toLowerCase() === active.toLowerCase())
    )
  }, [active])

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>

      {/* ── Page header ── */}
      <section
        style={{
          padding:      `clamp(8rem,14vw,10rem) ${PAD} clamp(2rem,4vw,3rem)`,
          borderBottom: '0.5px solid rgba(26,24,21,0.07)',
        }}
      >
        <p
          style={{
            fontFamily:    POPPINS,
            fontWeight:    300,
            fontSize:      '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color:         'rgba(26,24,21,0.35)',
            margin:        '0 0 0.75rem',
          }}
        >
          Selected work
        </p>
        <h1
          style={{
            fontFamily:    "'Gilda Display', serif",
            fontWeight:    400,
            fontSize:      'clamp(2.2rem,5vw,5rem)',
            letterSpacing: '-0.02em',
            lineHeight:    1.0,
            color:         '#1A1815',
            margin:        0,
          }}
        >
          Projects
        </h1>
      </section>

      {/* ── Category filter bar ── */}
      <div
        style={{
          padding:        `clamp(1.2rem,2vw,1.8rem) ${PAD}`,
          display:        'flex',
          alignItems:     'center',
          gap:            'clamp(0.75rem,1.5vw,1rem)',
          flexWrap:       'wrap',
          borderBottom:   '0.5px solid rgba(26,24,21,0.07)',
          position:       'sticky',
          top:            '68px',
          backgroundColor: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          zIndex:         10,
        }}
      >
        {/* Label */}
        <span
          style={{
            fontFamily:    POPPINS,
            fontWeight:    300,
            fontSize:      '0.6rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color:         'rgba(26,24,21,0.35)',
            flexShrink:    0,
            marginRight:   '0.25rem',
          }}
        >
          Categorías
        </span>

        {/* Pills */}
        {CATEGORIES.map(({ label, tag }) => (
          <CategoryPill
            key={label}
            label={label}
            active={active === tag}
            onClick={() => setActive(tag)}
          />
        ))}
      </div>

      {/* ── Project grid ── */}
      <section
        style={{
          padding: `clamp(2.5rem,5vw,4rem) ${PAD} clamp(5rem,10vw,8rem)`,
        }}
      >
        {filtered.length === 0 ? (
          <p
            style={{
              fontFamily: POPPINS,
              fontWeight: 300,
              fontSize:   '0.9rem',
              color:      'rgba(26,24,21,0.4)',
              textAlign:  'center',
              padding:    '4rem 0',
            }}
          >
            No projects found for this category.
          </p>
        ) : (
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 420px), 1fr))',
              gap:                 'clamp(1.5rem,3vw,2.5rem)',
            }}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </section>

    </div>
  )
}
