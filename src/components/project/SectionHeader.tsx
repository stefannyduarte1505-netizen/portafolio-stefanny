type Props = { title: string; paragraphs: string[] }

export default function SectionHeader({ title, paragraphs }: Props) {
  return (
    <div className="px-[clamp(1.5rem,5vw,5rem)] py-[clamp(3rem,6vw,6rem)] max-w-[860px]">
      <h2
        style={{
          fontFamily: "'Gilda Display', serif",
          fontSize: 'clamp(1.8rem, 3.2vw, 3.4rem)',
          lineHeight: 1.15,
          letterSpacing: '-0.01em',
          color: '#B9111C',
          marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)',
          fontWeight: 400,
        }}
      >
        {title}
      </h2>

      <div className="flex flex-col gap-5">
        {paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(1rem, 1.25vw, 1.25rem)',
              lineHeight: 1.85,
              color: 'rgba(26,24,21,0.65)',
            }}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  )
}
