import { useNavigate } from 'react-router-dom'
import type { Project } from '../../data/projectsData'

const POPPINS = "'Poppins', sans-serif"
const GILDA   = "'Gilda Display', serif"

type Props = { project: Project; index?: number }

export default function ProjectCard({ project, index = 0 }: Props) {
  const navigate = useNavigate()

  return (
    <article
      onClick={() => navigate(`/case/${project.slug}`)}
      style={{
        cursor:          'pointer',
        backgroundColor: '#fff',
        border:          '0.5px solid rgba(26,24,21,0.08)',
        borderRadius:    '10px',
        overflow:        'hidden',
        display:         'flex',
        flexDirection:   'column',
        transition:      'box-shadow 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.10)'
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'none'
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
      }}
    >
      {/* Cover image */}
      <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <img
          src={project.coverImage}
          alt={project.title}
          loading={index < 2 ? 'eager' : 'lazy'}
          draggable={false}
          style={{
            display:        'block',
            width:          '100%',
            height:         'auto',
            aspectRatio:    '16/10',
            objectFit:      'cover',
            pointerEvents:  'none',
            userSelect:     'none',
            transition:     'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)' }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding:       'clamp(1.2rem,2.5vw,2rem)',
          display:       'flex',
          flexDirection: 'column',
          gap:           '0.75rem',
          flex:          1,
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontFamily:    GILDA,
            fontWeight:    400,
            fontSize:      'clamp(1.3rem,2.2vw,2rem)',
            letterSpacing: '-0.01em',
            lineHeight:    1.1,
            color:         '#1A1815',
            margin:        0,
          }}
        >
          {project.title}
        </h2>

        {/* Description */}
        <p
          style={{
            fontFamily: POPPINS,
            fontWeight: 300,
            fontSize:   'clamp(0.82rem,0.9vw,0.9rem)',
            lineHeight: 1.75,
            color:      'rgba(26,24,21,0.55)',
            margin:     0,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.25rem' }}>
          {project.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontFamily:    POPPINS,
                fontWeight:    300,
                fontSize:      '0.6rem',
                letterSpacing: '0.08em',
                color:         'rgba(26,24,21,0.5)',
                border:        '0.5px solid rgba(26,24,21,0.2)',
                padding:       '0.22rem 0.65rem',
                borderRadius:  '100px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
