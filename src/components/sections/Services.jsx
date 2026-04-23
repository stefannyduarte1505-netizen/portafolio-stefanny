/* ── Services accordion-style list ──────────────────────────────────── */

const SERVICES = [
  {
    title: 'Experience Design',
    description:
      'Diseño de interfaces y experiencias de usuario centradas en las personas — desde research hasta prototipos de alta fidelidad.',
  },
  {
    title: 'Art Direction',
    description:
      'Dirección visual de marca: identidad, sistemas de diseño, campañas y comunicación visual coherente con el propósito de la marca.',
  },
  {
    title: 'Motion Design',
    description:
      'Animación UI, micro-interacciones y piezas audiovisuales que dan vida a la identidad y mejoran la experiencia del usuario.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: '#F5F4F0',
        borderTop: '1px solid #D8D5CE',
      }}
    >
      <style>{`
        .svc-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2.2rem 2.5rem;
          border-bottom: 1px solid #D8D5CE;
          cursor: default;
          transition: background 0.25s ease, color 0.25s ease;
          overflow: hidden;
          position: relative;
        }
        .svc-row:hover {
          background: #B9111C;
        }
        .svc-title {
          font-family: var(--font-display);
          font-weight: 300;
          font-size: clamp(2.4rem, 6vw, 6rem);
          letter-spacing: -0.02em;
          text-transform: uppercase;
          line-height: 1;
          color: #B9111C;
          transition: color 0.25s ease;
          white-space: nowrap;
        }
        .svc-row:hover .svc-title {
          color: #F5F4F0;
        }
        .svc-plus {
          font-family: var(--font-display);
          font-weight: 300;
          font-size: clamp(2rem, 4vw, 4rem);
          line-height: 1;
          color: #B9111C;
          transition: color 0.25s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1);
          flex-shrink: 0;
          margin-left: 1.5rem;
          user-select: none;
        }
        .svc-row:hover .svc-plus {
          color: #F5F4F0;
          transform: rotate(45deg);
        }
        .svc-desc {
          max-height: 0;
          overflow: hidden;
          font-family: var(--font-body);
          font-weight: 300;
          font-size: clamp(0.9rem, 1.2vw, 1.05rem);
          line-height: 1.65;
          color: rgba(245,244,240,0.85);
          transition: max-height 0.4s cubic-bezier(0.16,1,0.3,1),
                      padding 0.4s cubic-bezier(0.16,1,0.3,1),
                      opacity 0.3s ease;
          opacity: 0;
        }
        .svc-row:hover .svc-desc {
          max-height: 10rem;
          padding-top: 1rem;
          opacity: 1;
        }
        .svc-inner {
          flex: 1;
        }
      `}</style>

      {SERVICES.map((svc) => (
        <div key={svc.title} className="svc-row">
          <div className="svc-inner">
            <div className="svc-title">{svc.title}</div>
            <div className="svc-desc">{svc.description}</div>
          </div>
          <div className="svc-plus">+</div>
        </div>
      ))}
    </section>
  )
}
