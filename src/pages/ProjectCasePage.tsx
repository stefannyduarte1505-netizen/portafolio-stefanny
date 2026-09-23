import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { projectsData } from '../data/projectsData'
import type { ProjectSection } from '../data/projectsData'
import ProjectHeroHeader from '../components/project/ProjectHeroHeader'
import SectionHeader     from '../components/project/SectionHeader'
import PersonaCard       from '../components/project/PersonaCard'
import InsightCard       from '../components/project/InsightCard'
import DigitalProductCard from '../components/project/DigitalProductCard'
import ImageSection      from '../components/project/ImageSection'

const PAD = 'clamp(1.5rem,5vw,5rem)'

function renderSection(section: ProjectSection, index: number) {
  switch (section.type) {
    case 'section-header':
      return (
        <SectionHeader
          key={index}
          title={section.title}
          paragraphs={section.paragraphs}
        />
      )

    case 'personas-grid':
      return (
        <div
          key={index}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(1rem,2vw,1.5rem)',
            padding: `0 ${PAD} clamp(2rem,4vw,4rem)`,
          }}
        >
          {section.items.map((item, i) => (
            <PersonaCard key={i} item={item} />
          ))}
        </div>
      )

    case 'insights-grid':
      return (
        <div
          key={index}
          style={{ padding: `0 ${PAD} clamp(2rem,4vw,4rem)`, maxWidth: '780px' }}
        >
          {section.items.map((item, i) => (
            <InsightCard key={i} item={item} index={i} />
          ))}
        </div>
      )

    case 'digital-card':
      return (
        <DigitalProductCard
          key={index}
          title={section.title}
          description={section.description}
          variant={section.variant}
          images={section.images}
        />
      )

    case 'image-section':
      return (
        <ImageSection
          key={index}
          images={section.images}
          title={section.title}
          caption={section.caption}
        />
      )
  }
}

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
        <p
          style={{
            fontFamily: "'Gilda Display', serif",
            fontSize: '1.5rem',
            color: '#1A1815',
          }}
        >
          Proyecto no encontrado.
        </p>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh' }}>
      <ProjectHeroHeader
        title={project.title}
        description={project.description}
        tags={project.tags}
        meta={project.meta}
        coverImage={project.coverImage}
      />

      {/* ── Section blocks ── */}
      <main style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem,6vw,6rem)' }}>
        {project.sections.map((section, i) => renderSection(section, i))}
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
            fontFamily: "'Poppins', sans-serif",
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
            fontFamily: "'Poppins', sans-serif",
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
