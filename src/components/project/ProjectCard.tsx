import { useNavigate } from 'react-router-dom'
import type { Project } from '../../data/projectsData'

type Props = { project: Project; index?: number }

export default function ProjectCard({ project, index = 0 }: Props) {
  const navigate = useNavigate()

  return (
    <article
      onClick={() => navigate(`/case/${project.slug}`)}
      className="
        max-w-[816px] w-full
        pt-[25px] pr-[24px] pb-[46px] pl-[18px]
        rounded-[8px] bg-[#F4F5F4]
        flex flex-col items-start gap-[10px]
        cursor-pointer
        transition-[box-shadow,transform] duration-300
        hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(0,0,0,0.10)]
      "
    >
      {/* Cover image — crece para llenar el espacio proporcional */}
      <div className="w-full flex-1 overflow-hidden rounded-[6px] bg-neutral-200 min-h-[240px]">
        <img
          src={project.heroImage}
          alt={project.title}
          loading={index < 2 ? 'eager' : 'lazy'}
          onError={(e) => console.error('[ProjectCard] 404 →', (e.currentTarget as HTMLImageElement).src)}
          draggable={false}
          className="
            w-full h-full object-cover select-none pointer-events-none
            transition-transform duration-[550ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
            hover:scale-[1.03]
          "
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 w-full pt-2 shrink-0">
        {/* Title */}
        <h2 className="font-poppins font-light text-[clamp(1.3rem,2.2vw,2rem)] leading-[1.1] text-[#1A1815] m-0">
          {project.title}
        </h2>

        {/* Description */}
        <p className="font-poppins font-light text-[clamp(0.82rem,0.9vw,0.9rem)] leading-[1.75] text-[rgba(26,24,21,0.55)] m-0">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="
                font-poppins font-light text-[0.6rem] tracking-[0.08em]
                text-[rgba(26,24,21,0.5)] border border-[rgba(26,24,21,0.2)]
                px-[0.65rem] py-[0.22rem] rounded-full
              "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
