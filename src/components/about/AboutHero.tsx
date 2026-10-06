import { useLanguage } from '../../contexts/LanguageContext'

const POPPINS = "'Poppins', sans-serif"
const GILDA   = "'Gilda Display', serif"
const PAD     = 'clamp(1.5rem,5vw,8rem)'

const copy = {
  en: {
    heading:  "Hi, I'm Stefanny Duarte",
    p1: 'Brand & Digital Experience Designer with over 6 years of experience in retail and corporate projects, crafting brand identities and the digital products that sustain them.',
    p2: 'My work sits at the intersection of Branding, Product Design, and CX & Service Design — translating research into coherent, functional systems aligned with business goals, from physical retail spaces to fully digital experiences.',
    connect: "Let's connect on",
    or: 'or',
    watch: 'Watch my',
    reel: '2023 Reel',
    on: 'on Behance',
    getInTouch: 'Get in touch :)',
  },
  es: {
    heading:  'Hola, soy Stefanny Duarte',
    p1: 'Diseñadora de Brand & Digital Experience con más de 6 años de experiencia en proyectos de retail y corporativos, diseñando identidades de marca y los productos digitales que las sostienen.',
    p2: 'Mi trabajo se sitúa en la intersección de Branding, Product Design y CX & Service Design, traduciendo investigación en sistemas coherentes y funcionales alineados con los objetivos del negocio — desde espacios físicos de retail hasta experiencias completamente digitales.',
    connect: 'Conectémonos por',
    or: 'o',
    watch: 'Mira mi',
    reel: 'Reel 2023',
    on: 'en Behance',
    getInTouch: 'Contáctame :)',
  },
}

export default function AboutHero() {
  const { lang } = useLanguage() as { lang: 'en' | 'es' }
  const tr = copy[lang] ?? copy.en
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
        gap: 'clamp(3rem,5vw,5rem)',
        padding: `clamp(3rem,5vw,5rem) ${PAD} clamp(3rem,5vw,5rem)`,
        backgroundColor: '#fff',
        alignItems: 'start',
        maxWidth: '1600px',
        margin: '0 auto',
      }}
    >
      {/* LEFT — portrait */}
      <div
        style={{
          width: '100%',
          borderRadius: '6px',
          overflow: 'hidden',
          lineHeight: 0,
        }}
      >
        <img
          src="/hero-portrait.png"
          alt="Stefanny Duarte"
          draggable={false}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />
      </div>

      {/* RIGHT — bio */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(1.5rem,2.5vw,2rem)',
          paddingTop: 'clamp(0rem,2vw,1.5rem)',
        }}
      >
        <h1
          style={{
            fontFamily:    GILDA,
            fontWeight:    400,
            fontSize:      'clamp(1.4rem,2.2vw,2.2rem)',
            letterSpacing: '-0.01em',
            lineHeight:    1.2,
            color:         '#1A1815',
            margin:        0,
          }}
        >
          {tr.heading}
        </h1>

        <div
          style={{
            display:       'flex',
            flexDirection: 'column',
            gap:           '1rem',
          }}
        >
          <p
            style={{
              fontFamily: POPPINS,
              fontWeight: 300,
              fontSize:   'clamp(0.9rem,1.05vw,1.05rem)',
              lineHeight: 1.8,
              color:      'rgba(26,24,21,0.65)',
              margin:     0,
            }}
          >
            {tr.p1}
          </p>
          <p
            style={{
              fontFamily: POPPINS,
              fontWeight: 300,
              fontSize:   'clamp(0.9rem,1.05vw,1.05rem)',
              lineHeight: 1.8,
              color:      'rgba(26,24,21,0.65)',
              margin:     0,
            }}
          >
            {tr.p2}
          </p>
        </div>

        {/* Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.5rem' }}>
          <p
            style={{
              fontFamily: POPPINS,
              fontWeight: 300,
              fontSize:   'clamp(0.9rem,1.05vw,1.05rem)',
              color:      'rgba(26,24,21,0.65)',
              margin:     0,
            }}
          >
            {tr.getInTouch}
          </p>
          <a
            href="mailto:stef.duarte1505@gmail.com"
            style={{
              fontFamily:     POPPINS,
              fontWeight:     300,
              fontSize:       'clamp(0.9rem,1.05vw,1.05rem)',
              color:          '#1A1815',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
          >
            stef.duarte1505@gmail.com
          </a>
          <p
            style={{
              fontFamily: POPPINS,
              fontWeight: 300,
              fontSize:   'clamp(0.9rem,1.05vw,1.05rem)',
              color:      'rgba(26,24,21,0.65)',
              margin:     0,
            }}
          >
            {tr.connect}{' '}
            <a
              href="https://www.instagram.com/stefanny_dl/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1A1815', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Instagram
            </a>
            {' '}{tr.or}{' '}
            <a
              href="https://www.linkedin.com/in/stefannyduarte/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1A1815', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              LinkedIn
            </a>
          </p>
          <p
            style={{
              fontFamily: POPPINS,
              fontWeight: 300,
              fontSize:   'clamp(0.9rem,1.05vw,1.05rem)',
              color:      'rgba(26,24,21,0.65)',
              margin:     0,
            }}
          >
            {tr.watch}{' '}
            <a
              href="https://www.behance.net/gallery/167572395/REEL-2023"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1A1815', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              {tr.reel}
            </a>
            {' '}{tr.on}
          </p>
        </div>
      </div>
    </section>
  )
}
