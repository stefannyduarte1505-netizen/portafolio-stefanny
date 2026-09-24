import { projectsData } from '../data/projectsData'
import ProjectCard from '../components/project/ProjectCard'

const PAD = 'clamp(1.5rem,5vw,8rem)'

export default function WorkPage() {
  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', paddingTop: '4.5rem' }}>

      {/* ── Project grid ── */}
      <section
        style={{
          padding:  `clamp(2.5rem,5vw,4rem) ${PAD} clamp(5rem,10vw,8rem)`,
          maxWidth: '1600px',
          margin:   '0 auto',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

    </div>
  )
}
