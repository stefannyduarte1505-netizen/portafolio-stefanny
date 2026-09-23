const POPPINS = "'Poppins', sans-serif"
const GILDA   = "'Gilda Display', serif"
const PAD     = 'clamp(1.5rem,5vw,5rem)'

export default function AboutHero() {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
        gap: 'clamp(3rem,5vw,5rem)',
        padding: `clamp(6rem,10vw,8rem) ${PAD} clamp(3rem,5vw,5rem)`,
        backgroundColor: '#fff',
        alignItems: 'start',
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
          Hola, soy Stefanny Duarte
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
            Diseñadora de Brand &amp; Digital Experience con más de 6 años de
            experiencia en proyectos de retail y corporativos, diseñando identidades
            de marca y los productos digitales que las sostienen.
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
            Mi trabajo se sitúa en la intersección de Branding, Product Design y
            CX &amp; Service Design, traduciendo investigación en sistemas coherentes
            y funcionales alineados con los objetivos del negocio — desde espacios
            físicos de retail hasta experiencias completamente digitales.
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
            Get in touch :)
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
            Conectémonos por{' '}
            <a
              href="https://www.instagram.com/stefanny.duarte"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1A1815', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              Instagram
            </a>
            {' '}o{' '}
            <a
              href="https://www.linkedin.com/in/stefanny-duarte"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1A1815', textDecoration: 'underline', textUnderlineOffset: '3px' }}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
