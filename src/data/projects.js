const BASE = 'https://portafoliostefduarte.figma.site'
const A = (hash) => `${BASE}/_assets/v11/${hash}`
const V = (hash) => `${BASE}/_videos/v1/${hash}`

const g = (cover, folder, n) => [
  { src: cover, caption: '' },
  ...Array.from({ length: n }, (_, i) => ({ src: `/projects/${folder}/${i + 1}.png`, caption: '' })),
]

export const projects = [
  {
    id: 'kinta',
    title: 'Kinta',
    subtitle: 'Spatial Branding & Art Direction',
    year: '2024',
    tags: ['Branding', 'Spatial Branding'],
    description:
      'Este proyecto de branding integral reinterpreta la identidad cultural de Barranco a través de un sistema gráfico vibrante e iconografía local aplicada con rigor en entornos físicos, digitales y editoriales. La estrategia de Spatial Branding actúa como un facilitador de la experiencia de usuario, equilibrando una comunicación ágil hacia la calle con una atmósfera de permanencia sofisticada en el interior, garantizando una consistencia visual que trasciende lo convencional para generar una conexión cultural profunda.',
    cover: '/covers/kinta.png',
    image: A('a4c0394cb84cc035bec1a4a814f268400f0f7ceb.png'),
    gallery: g('/covers/kinta.png', 'kinta', 4),
  },
  {
    id: 'cafe-don-salazar',
    title: 'Café Don Salazar',
    subtitle: 'Service Design',
    year: '2024',
    tags: ['Service Design', 'Spatial Branding', 'Product Design'],
    description:
      'Diseñamos una experiencia pop-up de alto impacto donde el Spatial Branding y el diseño de servicios convierten el espacio físico en un canal de comunicación bidireccional y autodescubrimiento sensorial. A través de un recorrido que integra capas digitales y paneles comunitarios, el proyecto no solo facilita el aprendizaje sobre el café, sino que recolecta datos de preferencia para fomentar la recurrencia y construir un vínculo emocional duradero entre la comunidad y los valores de la marca.',
    cover: '/covers/don-salazar.png',
    image: A('bd3da450f72a2adc8c7d9a4185a000c0a6bb7d12.png'),
    gallery: g('/covers/don-salazar.png', 'cafe-don-salazar', 9),
  },
  {
    id: 'sole',
    title: 'SOLE',
    subtitle: 'CX y Omnicanalidad',
    year: '2024',
    tags: ['Service Design', 'Product Design', 'Spatial Branding'],
    description:
      'Mediante un enfoque de Service Design, transformamos la exhibición de retail en un ecosistema interactivo y omnicanal que optimiza el proceso de compra según el perfil del usuario. El núcleo del proyecto es un sistema de señalética inteligente que articula una ruta de eficiencia transaccional y otra de exploración profunda, integrando herramientas de personalización digital y visualización de materiales en tiempo real para reducir la carga cognitiva y fortalecer la narrativa de marca en el espacio físico.',
    cover: '/covers/sole.png',
    image: A('7134ded3236332d772a732d32ed0bae73877311c.png'),
    gallery: g('/covers/sole.png', 'sole', 8),
  },
  {
    id: 'modulor',
    title: 'Modulor',
    subtitle: 'Web End to End',
    year: '2023',
    tags: ['Product Design', 'Branding', 'Project Manager'],
    description:
      'Lideré la transformación estratégica de Modulor, gestionando desde el rebranding de identidad visual hasta el despliegue de una plataforma web de alto rendimiento bajo una visión de diseño de producto de extremo a extremo. Al unificar la narrativa de marca en un ecosistema digital coherente y eficiente, logramos potenciar el posicionamiento global de la firma, asegurando una transición técnica impecable que prioriza la usabilidad y el cumplimiento de los objetivos de negocio de los stakeholders.',
    cover: '/covers/modulor.png',
    video: V('bb27fad4b9d586bb62d8dc9440261faaf965d935'),
    image: A('1245f94e5a40c7ef21810cbd4273674df06d0a44.png'),
    gallery: g('/covers/modulor.png', 'modulor', 6),
  },
  {
    id: 'kuna',
    title: 'Kuna',
    subtitle: 'Branding',
    year: '2024',
    tags: ['Branding', 'Art Direction'],
    description:
      'A través de una metodología de Service Design, sistematizamos la experiencia en tienda de KUNA para elevar su propuesta de "lujo consciente" mediante una coreografía perfecta entre diseño, cultura y eficiencia operativa. La estrategia abarca desde la manualización arquitectónica de formatos Heritage y Express hasta la creación de servicios de fidelización, utilizando el branding espacial como un soporte narrativo que guía al usuario de forma orgánica y garantiza la replicabilidad técnica de la marca a gran escala.',
    cover: '/covers/kuna.png',
    image: '/covers/kuna.png',
    gallery: g('/covers/kuna.png', 'kuna', 4),
  },
  {
    id: 'marea',
    title: 'Marea',
    subtitle: 'Experience Design',
    year: '2023',
    tags: ['Experience Design', 'Spatial Branding'],
    description:
      'Lideré la estrategia de UX para Marea, una solución de Product Design que revoluciona la productividad al sincronizar la planificación diaria con los ritmos biológicos del usuario. El sistema sustituye la organización rígida por un flujo dinámico basado en niveles de energía real, implementando herramientas visuales como mapas de calor de saturación y reorganización automática de agenda para mitigar el agotamiento y promover un equilibrio sostenible entre el rendimiento profesional y el bienestar personal.',
    cover: '/covers/marea.png',
    image: '/covers/marea.png',
    gallery: g('/covers/marea.png', 'marea', 7),
  },
  {
    id: 's-collection',
    title: 'S. Collection',
    subtitle: 'Art Direction',
    year: '2024',
    tags: ['Art Direction', 'Fashion'],
    description:
      'Dirigí la creación de las Brand Guidelines de S•Collection, extendiendo una identidad de lujo hacia un sistema de Spatial Branding y señalética omnicanal diseñado para entornos de retail sofisticados. El proyecto normatiza cada punto de contacto, desde la tipografía hasta la integración de activos digitales, asegurando que la herencia y artesanía de la marca se comuniquen de forma consistente y funcional, optimizando el recorrido del cliente y reforzando su posicionamiento en el mercado global.',
    cover: '/covers/s-collection.png',
    image: '/covers/s-collection.png',
    gallery: g('/covers/s-collection.png', 's-collection', 9),
  },
  {
    id: 'yuyito',
    title: 'Yuyito',
    subtitle: 'Branding & Espacial',
    year: '2023',
    tags: ['Branding', 'Spatial Branding'],
    description:
      'Basado en un análisis de Brand Intelligence, lideré el desarrollo integral de Yuyito para posicionarla como un referente de estilo de vida en el mercado peruano mediante un diseño funcional y accesible. La ejecución del Spatial Branding transformó la identidad visual en una herramienta operativa dentro de la tienda, creando un sistema de señalización que organiza el tráfico y refuerza la narrativa de marca, permitiendo que la transición entre canales sea percibida como una unidad eficiente y competitiva.',
    cover: '/covers/yuyito.png',
    image: '/covers/yuyito.png',
    gallery: g('/covers/yuyito.png', 'yuyito', 3),
  },
  {
    id: 'enter-the-beyond',
    title: 'Enter The Beyond',
    subtitle: 'Motion & Art Direction',
    year: '2024',
    tags: ['Motion', 'Art Direction'],
    description:
      'Bajo la dirección de UX/UI, desarrollamos un ecosistema digital inmersivo que traduce datos astrológicos complejos en una herramienta de exploración personal y autodescubrimiento planetario. La propuesta visual expande los límites del diseño tradicional mediante microinteracciones y una jerarquía visual sofisticada, permitiendo que usuarios con altas expectativas estéticas naveguen por una narrativa planetaria personalizada que equilibra la ciencia, el arte y la introspección personal.',
    cover: '/covers/enter-the-beyond.png',
    image: '/covers/enter-the-beyond.png',
    gallery: g('/covers/enter-the-beyond.png', 'enter-the-beyond', 4),
  },
  {
    id: 'root',
    title: 'Root',
    subtitle: 'UX Research & Service Design',
    year: '2024',
    tags: ['UX Research', 'Service Design', 'Product Design'],
    description:
      'Este proyecto investiga la autogestión del aprendizaje en adultos de 25 a 44 años con alto nivel educativo, centrándose en la fricción entre una alta motivación interna impulsada por la curiosidad (4.3/5) y el miedo a la obsolescencia tecnológica, frente a barreras críticas de gestión personal como la falta de tiempo, energía y disciplina. Los hallazgos revelan un cambio de paradigma hacia el Lifelong Learning, donde el aprendizaje se percibe como una actividad solitaria e intensa que ocurre "a pesar del trabajo".',
    cover: '/covers/root.png',
    image: '/covers/root.png',
    gallery: g('/covers/root.png', 'root', 6),
  },
]

export function getProject(id) {
  return projects.find((p) => p.id === id) ?? null
}
