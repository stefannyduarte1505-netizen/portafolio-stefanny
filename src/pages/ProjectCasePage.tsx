import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import type { InsightItem, DigitalProduct, GalleryItem } from '../data/projectsData'
import ProjectHeroHeader from '../components/project/ProjectHeroHeader'
import PersonaCard       from '../components/project/PersonaCard'
import InsightCard       from '../components/project/InsightCard'

const PAD     = 'clamp(1.5rem,5vw,5rem)'
const POPPINS = "'Poppins', sans-serif"
const GILDA   = "'Gilda Display', serif"

/* ── Shared section wrapper ── */
function CaseSection({
  number,
  title,
  description,
  children,
}: {
  number: string
  title: string
  description?: string
  children?: React.ReactNode
}) {
  return (
    <section style={{ padding: `clamp(3rem,6vw,6rem) ${PAD} 0` }}>
      {/* Number + Title */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '1.25rem',
          marginBottom: description ? 'clamp(1rem,2vw,1.5rem)' : 'clamp(2rem,3vw,3rem)',
          borderTop: '0.5px solid rgba(26,24,21,0.08)',
          paddingTop: 'clamp(1.5rem,2.5vw,2rem)',
        }}
      >
        <span
          style={{
            fontFamily: POPPINS,
            fontWeight: 300,
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            color: 'rgba(26,24,21,0.25)',
            flexShrink: 0,
          }}
        >
          {number}
        </span>
        <h2
          style={{
            fontFamily: GILDA,
            fontWeight: 400,
            fontSize: 'clamp(1.4rem,2.5vw,2.5rem)',
            letterSpacing: '-0.01em',
            lineHeight: 1.1,
            color: '#1A1815',
            margin: 0,
          }}
        >
          {title}
        </h2>
      </div>

      {/* Optional description */}
      {description && (
        <p
          style={{
            fontFamily: POPPINS,
            fontWeight: 300,
            fontSize: 'clamp(0.9rem,1.1vw,1.1rem)',
            lineHeight: 1.85,
            color: 'rgba(26,24,21,0.6)',
            maxWidth: '680px',
            marginBottom: 'clamp(2rem,3vw,3rem)',
          }}
        >
          {description}
        </p>
      )}

      {children}
    </section>
  )
}

/* ── Phone frame ── */
function PhoneFrame({ src, title }: { src: string; title: string }) {
  return (
    <div
      style={{
        width: 'clamp(130px,30vw,200px)',
        borderRadius: '2.5rem',
        border: '6px solid #1A1815',
        boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
        backgroundColor: '#1A1815',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {/* Notch */}
      <div
        style={{
          margin: '0 auto',
          width: '28%',
          height: '18px',
          backgroundColor: '#1A1815',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
        }}
      />
      <img
        src={src}
        alt={title}
        draggable={false}
        style={{ display: 'block', width: '100%', height: 'auto', pointerEvents: 'none', userSelect: 'none' }}
      />
    </div>
  )
}

/* ── Laptop frame ── */
function LaptopFrame({ src, title }: { src: string; title: string }) {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '720px', margin: '0 auto' }}>
      <div
        style={{
          borderRadius: '12px 12px 0 0',
          border: '8px solid #1A1815',
          borderBottom: 'none',
          backgroundColor: '#1A1815',
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0', backgroundColor: '#1A1815' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#444' }} />
        </div>
        <div style={{ backgroundColor: '#fff' }}>
          <img
            src={src}
            alt={title}
            draggable={false}
            style={{ display: 'block', width: '100%', height: 'auto', pointerEvents: 'none', userSelect: 'none' }}
          />
        </div>
      </div>
      <div style={{ height: '14px', backgroundColor: '#2a2a2a', borderRadius: '0 0 4px 4px' }} />
      <div style={{ width: '40%', height: '8px', backgroundColor: '#222', borderRadius: '0 0 8px 8px', margin: '0 auto' }} />
    </div>
  )
}

/* ── Digital products grid ── */
function DigitalSection({ products }: { products: DigitalProduct[] }) {
  const isDesktop = products.length === 1

  if (isDesktop) {
    return (
      <div
        style={{
          backgroundColor: '#F5F4F1',
          padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,5rem)',
          marginTop: 'clamp(2rem,3vw,3rem)',
        }}
      >
        <div style={{ marginBottom: 'clamp(1.5rem,3vw,2.5rem)', maxWidth: '520px' }}>
          <h3
            style={{
              fontFamily: GILDA,
              fontWeight: 400,
              fontSize: 'clamp(1.2rem,1.8vw,1.8rem)',
              color: '#1A1815',
              margin: '0 0 0.5rem',
            }}
          >
            {products[0].title}
          </h3>
          <p style={{ fontFamily: POPPINS, fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.7, color: 'rgba(26,24,21,0.55)', margin: 0 }}>
            {products[0].description}
          </p>
        </div>
        <LaptopFrame src={products[0].image} title={products[0].title} />
      </div>
    )
  }

  return (
    <div
      style={{
        backgroundColor: '#F5F4F1',
        padding: 'clamp(3rem,6vw,5rem) clamp(1.5rem,5vw,5rem)',
        marginTop: 'clamp(2rem,3vw,3rem)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
          gap: 'clamp(1.5rem,3vw,2.5rem)',
          justifyItems: 'center',
        }}
      >
        {products.map((product, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <PhoneFrame src={product.image} title={product.title} />
            <div style={{ textAlign: 'center', maxWidth: '180px' }}>
              <p style={{ fontFamily: POPPINS, fontWeight: 400, fontSize: '0.65rem', letterSpacing: '0.1em', color: '#1A1815', margin: '0 0 0.3rem', textTransform: 'uppercase' }}>
                {product.title}
              </p>
              <p style={{ fontFamily: POPPINS, fontWeight: 300, fontSize: '0.75rem', lineHeight: 1.6, color: 'rgba(26,24,21,0.5)', margin: 0 }}>
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Insights list ── */
function InsightsList({ insights }: { insights: InsightItem[] }) {
  return (
    <div style={{ maxWidth: '680px', marginTop: 'clamp(2rem,3vw,3rem)' }}>
      {insights.map((item, i) => (
        <InsightCard key={i} item={item} index={i} />
      ))}
    </div>
  )
}

/* ── Spatial gallery ── */
function SpatialGallery({ gallery }: { gallery: GalleryItem[] }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
        gap: 'clamp(1rem,2vw,1.5rem)',
        marginTop: 'clamp(2rem,3vw,3rem)',
      }}
    >
      {gallery.map((item, i) => (
        <figure key={i} style={{ margin: 0 }}>
          <div
            style={{
              aspectRatio: '4/3',
              backgroundColor: '#f5f4f2',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <img
              src={item.image}
              alt={item.caption}
              draggable={false}
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            />
          </div>
          <figcaption
            style={{
              fontFamily: POPPINS,
              fontWeight: 300,
              fontSize: '0.6rem',
              letterSpacing: '0.1em',
              color: 'rgba(26,24,21,0.35)',
              marginTop: '0.5rem',
              textTransform: 'uppercase',
            }}
          >
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export default function ProjectCasePage() {
  const { slug } = useParams<{ slug: string }>()
  const project  = projectsData.find(p => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!project) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}
      >
        <p style={{ fontFamily: GILDA, fontSize: '1.5rem', color: '#1A1815' }}>
          Proyecto no encontrado.
        </p>
      </div>
    )
  }

  const { research, customerJourney, digitalStrategy, spatialBranding } = project.sections

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* ── Hero header ── */}
      <ProjectHeroHeader
        title={project.title}
        description={research.description}
        tags={project.tags}
        meta={project.meta}
        heroImage={project.heroImage}
      />

      {/* ── Sections ── */}
      <main style={{ display: 'flex', flexDirection: 'column', paddingBottom: 'clamp(5rem,10vw,8rem)' }}>

        {/* 01 Research */}
        <CaseSection number={research.sectionNumber} title={research.title}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(1rem,2vw,1.5rem)',
              marginBottom: 'clamp(2rem,4vw,4rem)',
            }}
          >
            {research.personas.map((persona, i) => (
              <PersonaCard key={i} item={persona} />
            ))}
          </div>
        </CaseSection>

        {/* 02 Customer Journey */}
        <CaseSection
          number={customerJourney.sectionNumber}
          title={customerJourney.title}
          description={customerJourney.subtitle}
        >
          {/* Journey image */}
          <div
            style={{
              width: '100%',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#f5f4f2',
              marginBottom: 'clamp(2rem,3vw,3rem)',
            }}
          >
            <img
              src={customerJourney.image}
              alt={customerJourney.title}
              draggable={false}
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            />
          </div>

          {/* Insights */}
          <InsightsList insights={customerJourney.insights} />
        </CaseSection>

        {/* 03 Digital Strategy */}
        <CaseSection
          number={digitalStrategy.sectionNumber}
          title={digitalStrategy.title}
          description={digitalStrategy.description}
        >
          <DigitalSection products={digitalStrategy.products} />
          <InsightsList insights={digitalStrategy.insights} />
        </CaseSection>

        {/* 04 Spatial Branding */}
        <CaseSection
          number={spatialBranding.sectionNumber}
          title={spatialBranding.title}
          description={spatialBranding.description}
        >
          <SpatialGallery gallery={spatialBranding.gallery} />
        </CaseSection>

      </main>

      {/* ── Footer strip ── */}
      <footer
        style={{
          padding: `clamp(4rem,8vw,8rem) ${PAD}`,
          borderTop: '0.5px solid rgba(26,24,21,0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p
          style={{
            fontFamily: POPPINS,
            fontWeight: 300,
            fontSize: '0.6rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(26,24,21,0.3)',
          }}
        >
          sduart.com — {project.title}
        </p>
        <button
          onClick={() => {
            sessionStorage.setItem('scrollToGallery', '1')
            window.location.href = '/'
          }}
          style={{
            fontFamily: POPPINS,
            fontWeight: 400,
            fontSize: '0.6rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#B9111C',
            border: '0.5px solid #B9111C',
            padding: '0.6rem 1.4rem',
            borderRadius: '100px',
            background: 'none',
            cursor: 'pointer',
          }}
        >
          ← Back to projects
        </button>
      </footer>
    </div>
  )
}
