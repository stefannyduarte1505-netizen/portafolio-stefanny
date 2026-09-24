// src/data/projectsData.ts

export interface Person {
  tag: string;
  title?: string;
  avatar: string;
  description: string;
  quote?: string;
}

export interface Insight {
  title: string;
  text: string;
}

export interface DigitalProduct {
  title: string;
  description?: string;
  image: string;
  images?: [string, string]; // 2-screen layout: overlapping phones
}

export interface GalleryItem {
  caption?: string;
  image: string;
}

export interface ProjectSections {
  research?: {
    sectionNumber: string;
    title: string;
    description: string;
    personas?: Person[];
    insights?: Insight[];
  };
  customerJourney?: {
    sectionNumber: string;
    title: string;
    subtitle?: string;
    image: string;
    insights?: Insight[];
  };
  digitalStrategy?: {
    sectionNumber: string;
    title: string;
    description: string;
    products?: DigitalProduct[];
    insights?: Insight[];
  };
  spatialBranding?: {
    sectionNumber: string;
    title: string;
    description: string;
    gallery?: GalleryItem[];
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  subtitle: string;
  category: string[];
  tags: string[];
  meta: {
    role: string;
    timeline: string;
    team: string;
    advisors?: string;
  };
  description: string;
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
    title: "Sole: Phygital Experience",
    client: "Sole & S•Collection, appliance retail · GrupoModulor · 2024",
    subtitle: "Phygital Experience",
    category: ["Service Design", "Phygital Retail", "CX Strategy"],
    tags: ["PHYGITAL RETAIL", "SERVICE DESIGN", "CX STRATEGY"],
    meta: {
      role: "Service Design Lead · UX/UI strategy, co-creation methodology, cross-functional alignment at GrupoModulor.",
      timeline: "2024",
      team: "Ximena Pizarro, Daniela Raez, Nicole Closa, Grace Huayanca, Giancarlo Grande.",
    },
    description:
      "Sole, marca peruana de electrodomésticos, necesitaba reposicionarse en el espacio físico. Lideré la transformación de un showroom saturado en una experiencia omnicanal.",
    heroImage: "/projects/sole/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description:
          "El proyecto comenzó con una sesión de co-creación con stakeholders clave del negocio desde distintas perspectivas. Profundizamos en la investigación del público objetivo para mapear sus principales necesidades y puntos de fricción, usando una metodología de storytelling por escenario-persona para definir los insights conceptualmente. El reto central era claro: dos marcas, Sole y S•Collection, necesitaban coexistir en el mismo espacio físico, cada una con un usuario distinto y necesidades distintas, pero las dos compartiendo la misma ilusión: la cocina de sus sueños.",
        personas: [
          {
            tag: "USER PERSONA 1",
            avatar: "/projects/sole/persona-1.webp",
            description:
              "Un padre de familia práctico y detallista que comparte su hogar con su esposa, sus hijos y un familiar mayor. Un usuario omnicanal que investiga meticulosamente cada precio y especificación técnica en internet antes de visitar la tienda, asegurando una compra inteligente y duradera que simplifique el día a día de los suyos.",
            quote:
              "Quiero soluciones eficientes para mi hogar. Investigo mucho en internet porque la confianza y la seguridad de mi familia no son negociables.",
          },
          {
            tag: "USER PERSONA 2",
            avatar: "/projects/sole/persona-2.webp",
            description:
              "Una profesional con un estilo de vida sofisticado y altas expectativas estéticas, apasionada por las tendencias globales de interiorismo y gastronomía. Quiere que su cocina deje de ser un espacio meramente funcional para convertirse en un ritual social e inmersivo.",
            quote:
              "Para mí, la cocina es el corazón social del hogar. Busco un entorno donde la tecnología premium sea invisible y el diseño sea el protagonista.",
          },
        ],
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
            text: "En los momentos de mayor carga cognitiva, al comparar modelos e imaginar los acabados en su propio hogar, los usuarios se quedan sin apoyo, aumentando la fricción en el punto de conversión.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Digital Strategy",
        description:
          "Diseñé un catálogo virtual con dos experiencias distintas para dos públicos completamente diferentes. Sole y S•Collection coexisten digitalmente pero con journeys diferenciados: el de Sole se centra en especificaciones, ahorro y beneficios técnicos, guiando al comprador práctico hacia una decisión confiada. El de S•Collection se centra en exploración y visualización aumentada, permitiendo al usuario combinar materiales, colores y texturas para imaginar su cocina ideal antes de comprometerse.",
        products: [
          { title: "Catálogo Técnico Sole", description: "Especificaciones, ahorro y beneficios técnicos para el comprador práctico.", image: "/projects/sole/digital-1.webp" },
          { title: "Explorador S•Collection", description: "Visualización aumentada: combina materiales, colores y texturas antes de decidir.", image: "/projects/sole/digital-2-a.webp", images: ["/projects/sole/digital-2-a.webp", "/projects/sole/digital-2-b.webp"] },
          { title: "Comparador de Modelos", description: "Comparación técnica lado a lado para decisiones confiadas en tienda.", image: "/projects/sole/digital-3-a.webp", images: ["/projects/sole/digital-3-a.webp", "/projects/sole/digital-3-b.webp"] },
          { title: "Activación QR", description: "Código QR por producto activa flujos específicos y habilita datos de conversión.", image: "/projects/sole/digital-4.webp" },
        ],
      },
      spatialBranding: {
        sectionNumber: "03",
        title: "Spatial Branding & Signage",
        description:
          "Durante la auditoría, identifiqué que el azul corporativo de Sole no tenía presencia estratégica en el espacio físico. Lo reposicioné como una decisión de diseño deliberada: visible, elegante y consistente en todos los puntos de contacto. S•Collection sostiene su propio territorio visual a través de grises y negros. El sistema de storytelling se complementó con códigos QR que activan flujos específicos por producto, habilitando trazabilidad de conversión y datos propios para decisiones de colocación más inteligentes. El sistema iconográfico fue diseñado para ser visualmente distinto entre ambas marcas, comunicando elegancia a través del minimalismo y la jerarquía de información.",
        gallery: [
          { image: "/projects/sole/spatial-1.png" },
          { image: "/projects/sole/spatial-2.png" },
          { image: "/projects/sole/spatial-3.png" },
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
    title: "ROOT: Learning Self-Management Platform",
    client: "Digital Product Design · Master's Project, BAU Barcelona · 2026",
    subtitle: "Self-Management Platform",
    category: ["Digital Product Design", "UX/UI Strategy", "Product Design"],
    tags: ["PRODUCT DESIGN", "EDTECH", "UX RESEARCH"],
    meta: {
      role: "UX/UI Designer & Researcher · co-leading research, product strategy, and interface design.",
      timeline: "2026",
      team: "Mora Celaya, Alfredo Duarte, Stefanny Duarte, Alexandra Hilaire, Sara Prats.",
      advisors: "Cesar Úbeda, Jordi Hernandez, Sarah Romero, Jorge Agundez, Jose Saura.",
    },
    description:
      "El problema nunca fue la falta de contenido. Fue la ansiedad de no saber si estás aprendiendo lo correcto, en el orden correcto, lo suficientemente rápido.",
    heroImage: "/projects/root/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description:
          "Empezamos mirando quiénes tenían más motivación para aprender y más obstáculos para hacerlo. Los adultos entre 25 y 44 años aparecían siempre: alta disposición, altas barreras. Una ex traductora con miedo de que la IA la hubiera dejado obsoleta. Una diseñadora UX que necesitaba mantenerse actualizada pero no encontraba un curso que encajara con su agenda real. Las dos motivadas. Las dos bloqueadas. El pivote llegó cuando dejamos de preguntar por qué la gente no aprende más y empezamos a preguntar por qué la gente no puede gestionar su propio aprendizaje. Ese solo cambio de enfoque lo transformó todo.",
        personas: [
          {
            tag: "USER PERSONA 1",
            avatar: "/projects/root/persona-1.webp",
            description:
              "Ex traductora adaptándose a la era digital, buscando reskilling acelerado sin perder la confianza.",
          },
          {
            tag: "USER PERSONA 2",
            avatar: "/projects/root/persona-2.webp",
            description:
              "Diseñadora UX en activo que necesita actualizarse constantemente pero lidia con agendas impredecibles.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Digital Strategy",
        description:
          "ROOT está construido alrededor de una sola imagen: un jardín de conocimiento donde las lecciones crecen a tu propio ritmo y nada se fuerza. Cada decisión de diseño volvía a tres cosas: motivación (sin presión, solo progreso), organización (un camino claro, no un campo abierto), y entretenimiento, porque el aprendizaje que se siente como deberes se abandona. El momento que nos dijo que funcionaba: los usuarios veían su ruta generada por primera vez y decían 'esto tiene sentido para mí.' Ese era el momento Aha alrededor del cual diseñamos todo.",
        products: [
          { title: "Dashboard de Aprendizaje", description: "Vista general del progreso, cursos activos y racha de estudio diario.", image: "/projects/root/digital-1.webp" },
          { title: "Mapa de Conocimiento", description: "Jardín visual donde cada lección crece a tu propio ritmo.", image: "/projects/root/digital-2-a.webp", images: ["/projects/root/digital-2-a.webp", "/projects/root/digital-2-b.webp"] },
          { title: "Generador de Rutas", description: "IA genera un camino de aprendizaje personalizado en segundos.", image: "/projects/root/digital-3-a.webp", images: ["/projects/root/digital-3-a.webp", "/projects/root/digital-3-b.webp"] },
          { title: "Progreso & Logros", description: "Hitos desbloqueados, rachas y feedback sin presión ni juicio.", image: "/projects/root/digital-4.webp" },
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
    title: "KUNA: Heritage Experience & Retail Design Strategy",
    client: "KUNA, luxury Andean textile brand · GrupoModulor · 2024",
    subtitle: "Heritage & Retail Strategy",
    category: ["Service Design", "Spatial Branding", "Phygital Retail"],
    tags: ["LUXURY RETAIL", "SERVICE DESIGN", "SPATIAL BRANDING"],
    meta: {
      role: "Service Design Lead · spatial strategy, touchpoint design, and co-creation methodology at GrupoModulor.",
      timeline: "2024",
      team: "Ximena Pizarro, Daniela Raez, Nicole Closa, Paola Abal, Giancarlo Grande.",
    },
    description:
      "Experiencia de retail de lujo andino que articula patrimonio textil, innovación tecnológica y diseño espacial para conectar con el consumidor global.",
    heroImage: "/projects/kuna/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description:
          "Lideré un proceso de investigación para profundizar en los user personas de KUNA y realicé un análisis de categoría para identificar oportunidades de negocio y posicionamiento estratégico dentro del espacio físico. Workshops de co-creación bajo metodología Design Thinking, combinados con los hallazgos de investigación, dieron forma a la dirección. La experiencia se articuló alrededor de tres pilares estratégicos: exploración, permanencia y fidelización. Un insight clave emergió con claridad: en una experiencia de lujo, la etapa de fidelización es la más crítica. La tecnología y la innovación necesitaban operar como una capa invisible, sin competir nunca con el producto ni con la artesanía.",
        personas: [
          {
            tag: "USER PERSONA 1",
            avatar: "/projects/kuna/persona-1.webp",
            description:
              "Turista internacional de alto poder adquisitivo buscando la historia de la vicuña y artesanía genuina.",
          },
          {
            tag: "USER PERSONA 2",
            avatar: "/projects/kuna/persona-2.webp",
            description:
              "Cliente recurrente de lujo que exige atención personalizada y experiencias privadas.",
          },
        ],
      },
      customerJourney: {
        sectionNumber: "02",
        title: "Customer Journey Map",
        image: "/projects/kuna/customer-journey-current.webp",
      },
      digitalStrategy: {
        sectionNumber: "03",
        title: "Digital Strategy",
        description:
          "Diseñé cuatro experiencias digitales para responder a objetivos de negocio específicos y generar engagement en cada touchpoint dentro de la tienda física. El Lifestyle Club convierte la lealtad en acceso, recompensando a los clientes que regresan con espacios y beneficios genuinamente exclusivos. Artistic Experience KUNA conecta la artesanía ancestral con la inmediatez del viajero moderno. Express KUNA Service da visibilidad nacional e internacional a técnicas ancestrales y artistas peruanos contemporáneos. Y Garment Care reencuadra la compra como el comienzo de una relación, no como el final de una.",
        products: [
          { title: "Lifestyle Club", description: "Membresía exclusiva: la lealtad se convierte en acceso a espacios y beneficios privados.", image: "/projects/kuna/digital-1.webp" },
          { title: "Artistic Experience KUNA", description: "Conecta la artesanía ancestral con la inmediatez del viajero moderno.", image: "/projects/kuna/digital-2-a.webp", images: ["/projects/kuna/digital-2-a.webp", "/projects/kuna/digital-2-b.webp"] },
          { title: "Express KUNA Service", description: "Visibilidad para técnicas ancestrales y artistas peruanos contemporáneos.", image: "/projects/kuna/digital-3-a.webp", images: ["/projects/kuna/digital-3-a.webp", "/projects/kuna/digital-3-b.webp"] },
          { title: "Garment Care", description: "La compra es el comienzo de una relación, no el final de una.", image: "/projects/kuna/digital-4.webp" },
        ],
      },
      spatialBranding: {
        sectionNumber: "04",
        title: "Spatial Branding & Signage",
        description:
          "Introduje un sistema de branding espacial construido alrededor del detalle: versiones simplificadas del logo integradas en mobiliario y espejos, un sistema de señalética de estilo editorial, y un uso estratégico del rojo para señalizar momentos de precio especial. Los códigos QR fueron integrados en puntos clave, activando flujos de campaña específicos. La composición en todo el espacio se mantiene deliberadamente limpia: jerarquía sobre decoración, intención sobre saturación.",
      },
    },
  },

  // ─────────────────────────────────────────
  // MODULOR
  // ─────────────────────────────────────────
  {
    id: "modulor",
    slug: "modulor",
    title: "GrupoModulor: Rebranding & Web End-to-End",
    client: "GrupoModulor® · Strategic Design & Innovation Consultancy, Lima · 2023",
    subtitle: "Rebranding & Web Strategy",
    category: ["Brand Strategy", "Digital Product", "Art Direction"],
    tags: ["BRAND STRATEGY", "REBRANDING", "DIGITAL PRODUCT"],
    meta: {
      role: "Project Manager & Design Experience Lead · full brand transformation and digital product deployment, from identity system to web platform launch.",
      timeline: "2023",
      team: "GrupoModulor Core Design & Tech Team.",
    },
    description:
      "Una transformación completa de marca y digital para una firma de diseño estratégico de 16 años. El trabajo abarcó identidad, narrativa y producto digital.",
    heroImage: "/projects/modulor/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description:
          "Modulor necesitaba evolucionar de una consultora local consolidada a una firma de diseño estratégico con posicionamiento global. El reto: traducir 16 años de expertise en una presencia digital capaz de hablar con tres audiencias muy distintas al mismo tiempo, sin perder coherencia. La brecha de posicionamiento de Modulor era narrativa. La firma tenía el expertise; lo que le faltaba era un ecosistema digital capaz de llevar ese expertise a tres audiencias distintas sin perder lo que la hacía singular.",
        personas: [
          {
            tag: "USER PERSONA 1",
            avatar: "/projects/modulor/persona-1.webp",
            description:
              "Directores de Innovación y Real Estate buscando transformar espacios corporativos.",
          },
          {
            tag: "USER PERSONA 2",
            avatar: "/projects/modulor/persona-2.webp",
            description:
              "Líderes de Retail y CX interesados en soluciones Phygital de escala.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Digital Strategy & Brand",
        description:
          "La estrategia digital opera a través de dos capas de conversión: el canal de Insights construye una audiencia calificada de tomadores de decisión mediante contenido y captura de newsletter, mientras que el flujo de contacto dirige a cada audiencia hacia el servicio correcto (Arquitectura de Oficinas, Phygital o Business) antes de que se realice una sola llamada. El rebranding usa un morado intenso que distingue a Modulor del estético gris corporativo de las consultoras regionales. Junto a un logotipo geométrico limpio, el sistema posiciona a Modulor como algo distinto a las firmas con las que compite.",
        products: [
          { title: "Web Principal", description: "Posicionamiento de marca: quiénes somos, qué hacemos y para quién.", image: "/projects/modulor/digital-1-a.webp", images: ["/projects/modulor/digital-1-a.webp", "/projects/modulor/digital-1-b.webp"] },
          { title: "Portal de Insights", description: "Canal de contenido que construye audiencia calificada de tomadores de decisión.", image: "/projects/modulor/digital-2-a.webp", images: ["/projects/modulor/digital-2-a.webp", "/projects/modulor/digital-2-b.webp"] },
          { title: "Contacto por Servicio", description: "Flujo de contacto que dirige a cada audiencia hacia el servicio correcto antes de una llamada.", image: "/projects/modulor/digital-3.webp" },
          { title: "Sistema de Identidad", description: "Morado intenso y logotipo geométrico que posicionan a Modulor como firma distinta.", image: "/projects/modulor/digital-4.webp" },
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
    title: "S•Collection: Brand Guidelines & Spatial Branding System",
    client: "S•Collection, luxury retail · GrupoModulor · 2024",
    subtitle: "Brand Guidelines & Spatial Branding",
    category: ["Art Direction", "Spatial Branding", "Luxury Retail"],
    tags: ["LUXURY RETAIL", "ART DIRECTION", "SPATIAL BRANDING"],
    meta: {
      role: "Art Direction Lead · brand guidelines, spatial branding, and omnichannel signage system at GrupoModulor.",
      timeline: "2024",
      team: "GrupoModulor Design Team.",
    },
    description:
      "S•Collection es la línea premium de Grupo Sole y buscaba posicionarse en el mercado como una marca de lujo. A través de una auditoría de marca, le dimos un refresh de look comunicando innovación y premiumness.",
    heroImage: "/projects/scollection/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description:
          "La estrategia se construyó alrededor de tres ejes: Identidad Visual, Audiencia y Producto, evaluados desde las perspectivas de Experiencia de Marca, Diseño e Innovación. El sistema visual comunica elegancia a través de la contención. La conexión con la audiencia requería un ecosistema omnicanal anclado en resonancia emocional. Y la capa de producto exigía que la tecnología y la artesanía se mostraran a través de iconografía, contenido inmersivo y fotografía sensorial que vende la experiencia, no solo el electrodoméstico.",
        personas: [
          {
            tag: "USER PERSONA 1",
            avatar: "/projects/scollection/persona-1.webp",
            description:
              "Cliente de alta gama enfocado en tendencias de arquitectura e interiorismo de lujo.",
          },
          {
            tag: "USER PERSONA 2",
            avatar: "/projects/scollection/persona-2.webp",
            description:
              "Arquitectos e interioristas buscando socios clave para proyectos residenciales premium.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Art Direction & Brand",
        description:
          "El ecosistema digital fue diseñado desde una sola premisa: cada gráfica debía sentirse tan premium como el producto mismo. Construí el sistema de diseño primero, estados de botón en cuatro variantes, jerarquía tipográfica en Gilroy y lógica de componentes, para que la consistencia visual no dependiera de decisiones caso por caso. La capa de contenido mobile opera diferente: formatos verticales cortos para la app SCo° donde el storytelling lidera sobre las especificaciones, la fotografía vende y la interfaz se aparta.",
        products: [
          { title: "Sistema Visual SCo°", description: "Botones en cuatro variantes, tipografía Gilroy y componentes con consistencia editorial.", image: "/projects/scollection/digital-1.png" },
          { title: "App SCo° Mobile", description: "Storytelling vertical donde la fotografía vende y la interfaz se aparta.", image: "/projects/scollection/digital-2.png" },
          { title: "Catálogo Premium", description: "Exploración de colecciones con la elegancia de una revista de lujo.", image: "/projects/scollection/digital-3.png" },
          { title: "Signage Digital", description: "Sistema omnicanal de señalética con QR y contenido activado por producto.", image: "/projects/scollection/digital-4.png" },
        ],
      },
    },
  },
];
