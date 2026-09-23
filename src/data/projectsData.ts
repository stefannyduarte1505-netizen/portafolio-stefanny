// src/data/projectsData.ts

export interface ProjectMeta {
  role: string;
  timeline: string;
  team: string;
}

export interface PersonaItem {
  tag: string;
  title: string;
  avatar: string;
  description: string;
}

export interface InsightItem {
  title: string;
  text: string;
}

export interface DigitalProduct {
  title: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  caption: string;
  image: string;
}

export interface ResearchSection {
  sectionNumber: string;
  title: string;
  description: string;
  personas: PersonaItem[];
}

export interface CustomerJourneySection {
  sectionNumber: string;
  title: string;
  subtitle: string;
  image: string;
  insights: InsightItem[];
}

export interface DigitalStrategySection {
  sectionNumber: string;
  title: string;
  description: string;
  products: DigitalProduct[];
  insights: InsightItem[];
}

export interface SpatialBrandingSection {
  sectionNumber: string;
  title: string;
  description: string;
  gallery: GalleryItem[];
}

export interface ProjectSections {
  research: ResearchSection;
  customerJourney: CustomerJourneySection;
  digitalStrategy: DigitalStrategySection;
  spatialBranding: SpatialBrandingSection;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string[];
  tags: string[];
  meta: ProjectMeta;
  heroImage: string;
  sections: ProjectSections;
}

export const projectsData: Project[] = [
  // ─────────────────────────────────────────
  // SOLE
  // ─────────────────────────────────────────
  {
    id: "sole",
    slug: "sole",
    title: "Sole",
    category: ["Service Design", "Digital Strategy", "Spatial Branding", "Phygital"],
    tags: ["Phygital Retail", "Service Design", "CX Strategy"],
    meta: {
      role: "Service Design Lead",
      timeline: "2024",
      team: "Ximena Pizarro, Daniela Raez, Nicole Closa, Grace Huayanca, Giancarlo Grande",
    },
    heroImage: "/projects/sole/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description:
          "El proyecto comenzó con una sesión de co-creación con stakeholders clave desde distintas perspectivas. Profundizamos en la investigación del público objetivo para mapear sus principales necesidades y puntos de fricción, usando una metodología de storytelling por escenario-persona para definir los insights conceptualmente.",
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Padre de Familia Práctico",
            avatar: "/projects/sole/persona-1.webp",
            description:
              "Un padre de familia práctico y detallista que investiga meticulosamente cada precio y especificación técnica en internet antes de visitar la tienda, asegurando una compra inteligente y duradera que simplifique el día a día de los suyos.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Profesional Sofisticada",
            avatar: "/projects/sole/persona-2.webp",
            description:
              "Una profesional con un estilo de vida sofisticado y altas expectativas estéticas, apasionada por las tendencias globales de interiorismo y gastronomía. Quiere que su cocina se convierta en un ritual social e inmersivo.",
          },
        ],
      },
      customerJourney: {
        sectionNumber: "02",
        title: "Customer Journey Map",
        subtitle: "Estado actual y de futuro deseado",
        image: "/projects/sole/customer-journey-current.webp",
        insights: [
          {
            title: "Insight 1",
            text: "La promesa central de Sole no se traduce en el entorno. La tienda comunica volumen de producto, no significado de marca.",
          },
          {
            title: "Insight 2",
            text: "Sole y S•Collection coexisten sin diferenciación visual ni experiencial, diluyendo el valor percibido de ambas líneas.",
          },
          {
            title: "Insight 3",
            text: "En los momentos de mayor carga cognitiva al comparar modelos, los usuarios se quedan sin apoyo, aumentando la fricción en el punto de conversión.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "03",
        title: "Digital Strategy",
        description:
          "Diseñé un catálogo virtual con dos experiencias distintas para dos públicos completamente diferentes. El journey de Sole se centra en especificaciones, ahorro y beneficios técnicos. El de S•Collection se centra en exploración y visualización aumentada.",
        products: [
          {
            title: "Catálogo Sole",
            description: "Especificaciones, comparación de precios y beneficios técnicos para el comprador práctico.",
            image: "/projects/sole/digital-1.png",
          },
          {
            title: "Catálogo S•Collection",
            description: "Visualización aumentada para combinar materiales, colores y texturas antes de comprometerse.",
            image: "/projects/sole/digital-2.png",
          },
        ],
        insights: [
          {
            title: "Insight 1",
            text: "Journeys diferenciados para audiencias con motivaciones de compra completamente distintas.",
          },
          {
            title: "Insight 2",
            text: "Códigos QR activados por producto habilitan trazabilidad de conversión y datos propios.",
          },
          {
            title: "Insight 3",
            text: "El sistema iconográfico fue diseñado para ser visualmente distinto entre ambas marcas.",
          },
        ],
      },
      spatialBranding: {
        sectionNumber: "04",
        title: "Spatial Branding & Signage",
        description:
          "Reposicioné el azul corporativo de Sole como una decisión de diseño deliberada: visible, elegante y consistente en todos los puntos de contacto. S•Collection sostiene su propio territorio visual a través de grises y negros.",
        gallery: [
          {
            caption: "Sistema de señalética Sole",
            image: "/projects/sole/spatial-1.webp",
          },
          {
            caption: "Diferenciación visual S•Collection",
            image: "/projects/sole/spatial-2.webp",
          },
          {
            caption: "Puntos de activación QR",
            image: "/projects/sole/spatial-3.webp",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────
  // ROOT
  // ─────────────────────────────────────────
  {
    id: "root",
    slug: "root",
    title: "ROOT",
    category: ["Digital Product Design", "EdTech", "UX Research", "Self-Management"],
    tags: ["EdTech", "UX Design", "Digital Product"],
    meta: {
      role: "UX/UI Designer & Researcher",
      timeline: "2026",
      team: "Mora Celaya, Alfredo Duarte, Stefanny Duarte, Alexandra Hilaire, Sara Prats",
    },
    heroImage: "/projects/root/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description:
          "Empezamos mirando quiénes tenían más motivación para aprender y más obstáculos para hacerlo. Los adultos entre 25 y 44 años aparecían siempre: alta disposición, altas barreras. El pivote llegó cuando dejamos de preguntar por qué la gente no aprende más y empezamos a preguntar por qué la gente no puede gestionar su propio aprendizaje.",
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Profesional en Reconversión",
            avatar: "/projects/root/persona-1.webp",
            description:
              "Ex traductora buscando reconversión profesional rápida frente al avance de la IA. Alta motivación, bloqueada por la falta de una ruta clara.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Diseñadora UX Activa",
            avatar: "/projects/root/persona-2.webp",
            description:
              "Diseñadora UX en activo que necesita mantenerse al día con estándares globales pero no encuentra un curso que encaje con su agenda real.",
          },
        ],
      },
      customerJourney: {
        sectionNumber: "02",
        title: "Customer Journey Map",
        subtitle: "Estado actual del aprendizaje autogestionado",
        image: "/projects/root/customer-journey-current.webp",
        insights: [
          {
            title: "Insight 1",
            text: "La ansiedad de no saber si se aprende lo correcto, en el orden correcto, lo suficientemente rápido, es la barrera principal.",
          },
          {
            title: "Insight 2",
            text: "Los adultos entre 25 y 44 años tienen alta disposición al aprendizaje pero barreras estructurales de tiempo y orientación.",
          },
          {
            title: "Insight 3",
            text: "El momento Aha que diseñamos: los usuarios ven su ruta generada por primera vez y dicen 'esto tiene sentido para mí'.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "03",
        title: "Digital Strategy",
        description:
          "ROOT está construido alrededor de una sola imagen: un jardín de conocimiento donde las lecciones crecen a tu propio ritmo. Cada decisión de diseño volvía a tres cosas: motivación, organización y entretenimiento.",
        products: [
          {
            title: "Jardín de Conocimiento",
            description: "Plataforma interactiva para autogestión del aprendizaje adaptativo.",
            image: "/projects/root/digital-1.png",
          },
        ],
        insights: [
          {
            title: "Insight 1",
            text: "Sin presión, solo progreso — la motivación requiere eliminar la ansiedad, no añadir gamificación.",
          },
          {
            title: "Insight 2",
            text: "Un camino claro, no un campo abierto — la organización define el valor del producto.",
          },
          {
            title: "Insight 3",
            text: "El aprendizaje que se siente como deberes se abandona — el entretenimiento es estrategia, no decoración.",
          },
        ],
      },
      spatialBranding: {
        sectionNumber: "04",
        title: "Brand System & Visual Identity",
        description:
          "El sistema visual de ROOT articula la metáfora del jardín de conocimiento a través de una paleta orgánica, tipografía clara y componentes que comunican crecimiento sin presión.",
        gallery: [
          {
            caption: "Sistema de componentes ROOT",
            image: "/projects/root/spatial-1.webp",
          },
          {
            caption: "Paleta y tipografía",
            image: "/projects/root/spatial-2.webp",
          },
          {
            caption: "Aplicaciones de marca",
            image: "/projects/root/spatial-3.webp",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────
  // KUNA
  // ─────────────────────────────────────────
  {
    id: "kuna",
    slug: "kuna",
    title: "KUNA 360°",
    category: ["Service Design", "Digital Strategy", "Spatial Branding", "Phygital"],
    tags: ["Phygital Retail", "Luxury Retail", "CX Strategy"],
    meta: {
      role: "Lead CX & Service Designer",
      timeline: "6 Meses",
      team: "Design Strategy, Tech & Retail Teams",
    },
    heroImage: "/projects/kuna/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description:
          "Investigación profunda enfocada en comprender el comportamiento del cliente de lujo global y sus puntos de dolor en el journey físico y digital.",
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Internacional Sub-35",
            avatar: "/projects/kuna/persona-1.webp",
            description:
              "Viajero o residente joven sofisticado que busca autenticidad textil, sostenibilidad y una experiencia de compra omnicanal fluida.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Internacional Senior 50+",
            avatar: "/projects/kuna/persona-2.webp",
            description:
              "Turista de alta gama que valora el trato personalizado en tienda física, la historia de la marca y la calidad superior de las fibras.",
          },
        ],
      },
      customerJourney: {
        sectionNumber: "02",
        title: "Customer Journey Map",
        subtitle: "Estado actual y de futuro deseado",
        image: "/projects/kuna/customer-journey-current.webp",
        insights: [
          {
            title: "Insight 1",
            text: "La desconexión entre la tienda física y el e-commerce genera fricción en la decisión de compra del cliente turístico.",
          },
          {
            title: "Insight 2",
            text: "Falta de storytelling sobre el origen de la fibra de alpaca durante el proceso de atención presencial.",
          },
          {
            title: "Insight 3",
            text: "Oportunidad de digitalizar la asesoría de prendas mediante soluciones phygital en showroom.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "03",
        title: "Digital Strategy",
        description:
          "Diseño del ecosistema digital interactivo optimizado para mobile, priorizando el auto-descubrimiento de productos y el cuidado de prendas.",
        products: [
          {
            title: "Catálogo de productos",
            description: "Experiencia móvil interactiva para explorar colecciones exclusivas.",
            image: "/projects/kuna/digital-1-a.webp",
          },
          {
            title: "Guía de la fibra & historia",
            description: "Contenido educativo sobre el origen de la vicuña y la alpaca.",
            image: "/projects/kuna/digital-1-b.webp",
          },
          {
            title: "Cuidado de prendas",
            description: "Módulo de post-compra para mantenimiento de piezas de lujo.",
            image: "/projects/kuna/digital-2-a.webp",
          },
          {
            title: "Servicios exclusivos",
            description: "Reserva de citas personalizadas en tienda física.",
            image: "/projects/kuna/digital-2-b.webp",
          },
        ],
        insights: [
          {
            title: "Insight 1",
            text: "Interacciones móviles simplificadas para decisiones de compra rápidas.",
          },
          {
            title: "Insight 2",
            text: "Reducción del tiempo de consulta de stock mediante flujos directos.",
          },
          {
            title: "Insight 3",
            text: "Aumento del engagement con el contenido educativo sobre fibras finas.",
          },
        ],
      },
      spatialBranding: {
        sectionNumber: "04",
        title: "Spatial Branding & Signage",
        description:
          "Implementación del concepto phygital en la arquitectura de la tienda física para conectar la experiencia sensorial con el canal digital.",
        gallery: [
          {
            caption: "Mobiliario y señalética phygital",
            image: "/projects/kuna/spatial-1.webp",
          },
          {
            caption: "Exhibición de materiales y texturas",
            image: "/projects/kuna/spatial-2.webp",
          },
          {
            caption: "Puntos de interacción digital en tienda",
            image: "/projects/kuna/spatial-3.webp",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────
  // MODULOR
  // ─────────────────────────────────────────
  {
    id: "modulor",
    slug: "modulor",
    title: "GrupoModulor",
    category: ["Rebranding", "Digital Platform", "Strategic Design", "B2B Positioning"],
    tags: ["Rebranding", "B2B", "Strategic Design"],
    meta: {
      role: "Project Manager & Design Experience Lead",
      timeline: "2023",
      team: "GrupoModulor Internal Team",
    },
    heroImage: "/projects/modulor/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description:
          "Modulor necesitaba evolucionar de una consultora local consolidada a una firma de diseño estratégico con posicionamiento global. La brecha era narrativa: la firma tenía el expertise pero le faltaba un ecosistema digital capaz de hablar con tres audiencias distintas al mismo tiempo sin perder coherencia.",
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Executive Buyer",
            avatar: "/projects/modulor/persona-1.webp",
            description:
              "Directores corporativos buscando innovación espacial y estrategia omnicanal para su empresa.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Talento Creativo",
            avatar: "/projects/modulor/persona-2.webp",
            description:
              "Diseñadores y consultores de alto nivel buscando sumarse a una firma con pensamiento de diseño global.",
          },
        ],
      },
      customerJourney: {
        sectionNumber: "02",
        title: "Customer Journey Map",
        subtitle: "Funnel de conversión B2B y captación de talento",
        image: "/projects/modulor/customer-journey-current.webp",
        insights: [
          {
            title: "Insight 1",
            text: "La firma tenía el expertise; lo que le faltaba era una presencia digital coherente para tres audiencias distintas.",
          },
          {
            title: "Insight 2",
            text: "El canal de Insights construye una audiencia calificada de tomadores de decisión mediante contenido.",
          },
          {
            title: "Insight 3",
            text: "El flujo de contacto dirige a cada audiencia hacia el servicio correcto antes de que se realice una sola llamada.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "03",
        title: "Digital Strategy & Brand",
        description:
          "La estrategia digital opera a través de dos capas de conversión. El rebranding usa un morado intenso que distingue a Modulor del estético gris corporativo de las consultoras regionales.",
        products: [
          {
            title: "Plataforma Web Modulor",
            description: "Rediseño completo de la experiencia web y sistema de conversión.",
            image: "/projects/modulor/digital-1.png",
          },
        ],
        insights: [
          {
            title: "Insight 1",
            text: "Dos capas de conversión: canal de Insights para audiencia calificada y flujo de contacto por servicio.",
          },
          {
            title: "Insight 2",
            text: "El morado intenso posiciona a Modulor como distinto al estético corporativo de consultoras regionales.",
          },
          {
            title: "Insight 3",
            text: "Un logotipo geométrico limpio refuerza el posicionamiento de firma global de diseño estratégico.",
          },
        ],
      },
      spatialBranding: {
        sectionNumber: "04",
        title: "Brand System & Identity",
        description:
          "El sistema de identidad de GrupoModulor traduce 16 años de expertise en un lenguaje visual coherente, riguroso y capaz de operar en contextos B2B de alta complejidad.",
        gallery: [
          {
            caption: "Sistema de identidad visual",
            image: "/projects/modulor/spatial-1.webp",
          },
          {
            caption: "Aplicaciones de marca",
            image: "/projects/modulor/spatial-2.webp",
          },
          {
            caption: "Componentes digitales",
            image: "/projects/modulor/spatial-3.webp",
          },
        ],
      },
    },
  },

  // ─────────────────────────────────────────
  // S•COLLECTION
  // ─────────────────────────────────────────
  {
    id: "scollection",
    slug: "scollection",
    title: "S•Collection",
    category: ["Luxury Retail", "Brand Guidelines", "Art Direction", "Design Systems"],
    tags: ["Art Direction", "Brand System", "Luxury"],
    meta: {
      role: "Art Direction Lead",
      timeline: "2024",
      team: "GrupoModulor Design Team",
    },
    heroImage: "/projects/scollection/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description:
          "La estrategia se construyó alrededor de tres ejes: Identidad Visual, Audiencia y Producto, evaluados desde las perspectivas de Experiencia de Marca, Diseño e Innovación. El sistema visual comunica elegancia a través de la contención.",
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Consumidor Premium",
            avatar: "/projects/scollection/persona-1.webp",
            description:
              "Consumidor exigente enfocado en electrodomésticos de alta gama con estética arquitectónica. Busca piezas donde la tecnología sea invisible y el diseño sea el verdadero protagonista.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Arquitecto / Interiorista",
            avatar: "/projects/scollection/persona-2.webp",
            description:
              "Arquitectos e interioristas buscando especificar productos premium en sus proyectos residenciales de alta gama.",
          },
        ],
      },
      customerJourney: {
        sectionNumber: "02",
        title: "Customer Journey Map",
        subtitle: "Experiencia de marca luxury en puntos de contacto físicos y digitales",
        image: "/projects/scollection/customer-journey-current.webp",
        insights: [
          {
            title: "Insight 1",
            text: "El sistema visual comunica elegancia a través de la contención: cada elemento tiene una razón de ser.",
          },
          {
            title: "Insight 2",
            text: "La conexión con la audiencia requería un ecosistema omnicanal anclado en resonancia emocional.",
          },
          {
            title: "Insight 3",
            text: "La tecnología y la artesanía deben mostrarse a través de iconografía y fotografía sensorial que vende la experiencia.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "03",
        title: "Art Direction & Brand",
        description:
          "Cada gráfica debía sentirse tan premium como el producto mismo. Construí el sistema de diseño primero — estados de botón en cuatro variantes, jerarquía tipográfica en Gilroy, lógica de componentes — para que la consistencia visual no dependiera de decisiones caso por caso.",
        products: [
          {
            title: "SCo° App",
            description: "Formatos verticales cortos para mobile donde el storytelling lidera sobre las especificaciones.",
            image: "/projects/scollection/digital-1.png",
          },
          {
            title: "Brand System",
            description: "Sistema de componentes y señalética para el ecosistema omnicanal S•Collection.",
            image: "/projects/scollection/digital-2.png",
          },
        ],
        insights: [
          {
            title: "Insight 1",
            text: "La consistencia visual requiere un sistema de diseño, no decisiones caso por caso.",
          },
          {
            title: "Insight 2",
            text: "Formatos mobile verticales donde el storytelling lidera y la interfaz se aparta.",
          },
          {
            title: "Insight 3",
            text: "La fotografía vende la experiencia y el producto queda siempre en primer plano.",
          },
        ],
      },
      spatialBranding: {
        sectionNumber: "04",
        title: "Spatial Branding & Signage",
        description:
          "El sistema de branding espacial fue construido alrededor del detalle: versiones simplificadas del logo integradas en mobiliario y espejos, un sistema de señalética de estilo editorial.",
        gallery: [
          {
            caption: "Señalética y mobiliario S•Collection",
            image: "/projects/scollection/spatial-1.webp",
          },
          {
            caption: "Sistema de comunicación en tienda",
            image: "/projects/scollection/spatial-2.webp",
          },
          {
            caption: "Puntos de activación digital",
            image: "/projects/scollection/spatial-3.webp",
          },
        ],
      },
    },
  },
];
