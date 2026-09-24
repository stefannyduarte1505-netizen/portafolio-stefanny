import type { CSSProperties } from 'react'

const POPPINS = "'Poppins', sans-serif"
const GILDA   = "'Gilda Display', serif"
const PAD     = 'clamp(1.5rem,5vw,8rem)'

interface ExperienceEntry {
  year:    string
  city:    string
  role:    string
  company: string
}

interface AwardEntry {
  year:        string
  city:        string
  category:    string
  award:       string
}

const EXPERIENCE: ExperienceEntry[] = [
  { year: '2026',        city: 'Barcelona', role: 'Strategic Creative Designer',              company: 'AkzoNobel'           },
  { year: '2023 / 2026', city: 'Lima',      role: 'Project Manager & Design Experience Lead', company: 'Modulor Arquitectura' },
  { year: '2021 / 2023', city: 'Lima',      role: 'Strategic Creative Designer',              company: 'Fahrenheit DDB'      },
]

const AWARDS: AwardEntry[] = [
  {
    year:     '2026',
    city:     'Barcelona',
    category: 'Categoría "Hospitality"\nCasa Garbo, Retail Design',
    award:    'EuroShop RetailDesign Award 2026',
  },
]

const cell = (dim?: boolean): CSSProperties => ({
  fontFamily: POPPINS,
  fontWeight: dim ? 300 : 400,
  fontSize:   'clamp(0.82rem,1vw,0.95rem)',
  lineHeight: 1.55,
  color:      dim ? 'rgba(26,24,21,0.42)' : '#1A1815',
})

const yearCell: CSSProperties = {
  display:       'flex',
  flexDirection: 'column',
  gap:           '0.1rem',
}

const divider: CSSProperties = { borderTop: '1px solid rgba(26,24,21,0.1)' }

const COLS_EXP   = '120px 1fr 200px'
const COLS_AWARD = '120px 1fr 240px'

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily:    POPPINS,
        fontWeight:    400,
        fontSize:      'clamp(1.1rem,1.5vw,1.3rem)',
        letterSpacing: '0',
        lineHeight:    1.2,
        color:         '#1A1815',
        margin:        0,
        marginBottom:  'clamp(1.5rem,2.5vw,2rem)',
      }}
    >
      {children}
    </h2>
  )
}

export default function TimelineSection() {
  return (
    <section
      style={{
        backgroundColor: '#fff',
        padding: `0 ${PAD} clamp(5rem,8vw,8rem)`,
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(4rem,6vw,6rem)',
        maxWidth: '1600px',
        margin: '0 auto',
      }}
    >
      {/* ── Experience ── */}
      <div>
        <SectionHeading>Experience</SectionHeading>

        <div style={{ ...divider }} />

        {EXPERIENCE.map((e) => (
          <div
            key={e.role + e.year}
            style={{
              display: 'grid',
              gridTemplateColumns: COLS_EXP,
              gap: '0 2rem',
              padding: 'clamp(1.1rem,1.8vw,1.5rem) 0',
              ...divider,
            }}
          >
            {/* Col 1 — year stacked over city */}
            <div style={yearCell}>
              <span style={{ ...cell(), fontWeight: 300, color: '#1A1815' }}>{e.year}</span>
              <span style={{ ...cell(true), fontSize: '0.78rem' }}>{e.city}</span>
            </div>

            {/* Col 2 — role */}
            <span style={cell()}>{e.role}</span>

            {/* Col 3 — company */}
            <span style={cell(true)}>{e.company}</span>
          </div>
        ))}
      </div>

      {/* ── Awards ── */}
      <div>
        <SectionHeading>Awards</SectionHeading>

        <div style={{ ...divider }} />

        {AWARDS.map((a) => (
          <div
            key={a.award}
            style={{
              display: 'grid',
              gridTemplateColumns: COLS_AWARD,
              gap: '0 2rem',
              padding: 'clamp(1.1rem,1.8vw,1.5rem) 0',
              ...divider,
            }}
          >
            {/* Col 1 — year + city */}
            <div style={yearCell}>
              <span style={{ ...cell(), fontWeight: 300, color: '#1A1815' }}>{a.year}</span>
              <span style={{ ...cell(true), fontSize: '0.78rem' }}>{a.city}</span>
            </div>

            {/* Col 2 — category (multiline) */}
            <span style={{ ...cell(true), whiteSpace: 'pre-line' }}>{a.category}</span>

            {/* Col 3 — award name */}
            <span style={cell()}>{a.award}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
