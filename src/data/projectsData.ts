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
  desktop?: boolean;         // wide desktop screenshot — skips phone frame
}

export interface GalleryItem {
  caption?: string;
  image: string;
}

export interface ProjectSections {
  research?: {
    sectionNumber: string;
    title: string;
    description: string | string[];
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
    description: string | string[];
    products?: DigitalProduct[];
    insights?: Insight[];
  };
  spatialBranding?: {
    sectionNumber: string;
    title: string;
    description: string | string[];
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
  bgColor?: string;
  insightColors?: [string, string, string];
  journeyDiagram?: string;
  userFlowDiagram?: string;
  spatialImages?: string[];
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
    category: ["Service Design", "CX", "Spatial Branding", "Product Design"],
    tags: ["PHYGITAL RETAIL", "SERVICE DESIGN", "CX STRATEGY"],
    bgColor: "#F2F6FF",
    insightColors: ["#F2F6FF", "#E5EEFF", "#D6E4FF"],
    journeyDiagram: "/projects/sole/customer-journey-current.webp",
    userFlowDiagram: "/projects/sole/sole-flow.png",
    spatialImages: [
      "/projects/sole/sole-spatial-1.webp",
      "/projects/sole/sole-spatial-2.webp",
      "/projects/sole/sole-spatial-3.webp",
      "/projects/sole/sole-spatial-4.webp",
      "/projects/sole/sole-spatial-5.webp",
      "/projects/sole/sole-spatial-6.webp",
    ],
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
        description: [
          "El proyecto comenzó con una sesión de co-creación con stakeholders clave del negocio desde distintas perspectivas. Profundizamos en la investigación del público objetivo para mapear sus principales necesidades y puntos de fricción, usando una metodología de storytelling por escenario-persona para definir los insights conceptualmente.",
          "El reto central era claro: dos marcas, Sole y S•Collection, necesitaban coexistir en el mismo espacio físico, cada una con un usuario distinto y necesidades distintas, pero las dos compartiendo la misma ilusión: la cocina de sus sueños.",
        ],
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
          { title: "Fricción de Decisión", text: "En la categoría de electrodomésticos, el usuario no abandona la compra por falta de interés, sino por saturación cognitiva; la sobreexposición física de productos en tienda genera parálisis y dificulta la evaluación de atributos técnicos." },
          { title: "Comportamiento Omnicanal", text: "El consumidor masivo no utiliza la tienda física como punto inicial de descubrimiento, sino como nodo de validación; investiga previamente en canales digitales y acude al espacio comercial a confirmar texturas, proporciones y niveles de confianza." },
          { title: "Cierre de Venta", text: "La proyección del producto en el propio espacio del usuario es el principal catalizador de conversión; cuando el cliente no puede visualizar el acabado en su contexto real, el riesgo percibido aumenta y se posterga la decisión." },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Digital Strategy",
        description:
          "Diseñé un catálogo virtual con dos experiencias distintas para dos públicos completamente diferentes. Sole y S•Collection coexisten digitalmente pero con journeys diferenciados: el de Sole se centra en especificaciones, ahorro y beneficios técnicos, guiando al comprador práctico hacia una decisión confiada. El de S•Collection se centra en exploración y visualización aumentada, permitiendo al usuario combinar materiales, colores y texturas para imaginar su cocina ideal antes de comprometerse.",
        products: [
          { title: "Catálogo Técnico Sole", description: "Arquitectura de información clara que prioriza especificaciones, ahorro y beneficios técnicos para el comprador práctico.", image: "/projects/sole/digital-1.webp" },
          { title: "Detalle de Producto y QR", description: "Fichas interactivas con códigos QR dinámicos por SKU que conectan la exhibición física con la información extendida y canales de compra.", image: "/projects/sole/digital-2-a.webp", images: ["/projects/sole/digital-2-a.webp", "/projects/sole/digital-2-b.webp"] },
          { title: "Comparador de Modelos", description: "Visualización interactiva en tiempo real para personalizar materiales, colores y acabados sobre la cocina ideal antes de decidir.", image: "/projects/sole/digital-3-a.webp", images: ["/projects/sole/digital-3-a.webp", "/projects/sole/digital-3-b.webp"] },
          { title: "Explorador S•Collection", description: "Interfaz en Modo Dark que destaca las tecnologías avanzadas de la línea de lujo e integra accesos directos a asesoría exclusiva.", image: "/projects/sole/digital-4.webp" },
        ],
        insights: [
          { title: "Dos perfiles, una decisión", text: "El comprador práctico de Sole busca certitud técnica inmediata; el cliente de S•Collection busca inspiración y personalización estética." },
          { title: "Segmentación que convierte", text: "Un catálogo digital monolítico genera confusión; segmentar la experiencia según la mentalidad del comprador duplica el engagement." },
          { title: "Ver para decidir", text: "La visualización en realidad aumentada reduce la indecisión al permitir probar acabados y texturas en tiempo real antes de la compra." },
        ],
      },
      spatialBranding: {
        sectionNumber: "03",
        title: "Spatial Branding & Signage",
        description: [
          "Durante la auditoría, identifiqué que el azul corporativo de Sole no tenía presencia estratégica en el espacio físico. Lo reposicioné como una decisión de diseño deliberada: visible, elegante y consistente en todos los puntos de contacto. S•Collection sostiene su propio territorio visual a través de grises y negros.",
          "El sistema de storytelling se complementó con códigos QR que activan flujos específicos por producto, habilitando trazabilidad de conversión y datos propios para decisiones de colocación más inteligentes. El sistema iconográfico fue diseñado para ser visualmente distinto entre ambas marcas, comunicando elegancia a través del minimalismo y la jerarquía de información.",
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
    category: ["Product Design"],
    tags: ["PRODUCT DESIGN", "EDTECH", "UX RESEARCH"],
    bgColor: "#F8FAF0",
    insightColors: ["#FCFDF7", "#F8FAF0", "#EEF3D8"],
    journeyDiagram: "/projects/root/customer-journey-current.webp",
    userFlowDiagram: "/projects/root/root-flow.png",
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
        description: [
          "Empezamos mirando quiénes tenían más motivación para aprender y más obstáculos para hacerlo. Los adultos entre 25 y 44 años aparecían siempre: alta disposición, altas barreras. Una ex traductora con miedo de que la IA la hubiera dejado obsoleta. Una diseñadora UX que necesitaba mantenerse actualizada pero no encontraba un curso que encajara con su agenda real. Las dos motivadas. Las dos bloqueadas.",
          "El pivote llegó cuando dejamos de preguntar por qué la gente no aprende más y empezamos a preguntar por qué la gente no puede gestionar su propio aprendizaje. Ese solo cambio de enfoque lo transformó todo.",
        ],
        insights: [
          { title: "Diferenciación Visual", text: "En mercados saturados por estéticas minimalistas genéricas, abrazar la identidad y la cultura local se convierte en el principal activo de diferenciación y relevancia cultural." },
          { title: "Conexión Emocional", text: "Las audiencias contemporáneas no conectan con marcas estáticas; buscan propuestas vivas cuya personalidad sea capaz de manifestarse de forma coherente pero flexible en canales físicos, digitales y editoriales." },
          { title: "Transición Espacial", text: "El punto de contacto con el exterior (la calle) exige una comunicación de alto impacto y tracción rápida, mientras que el espacio interior debe estar diseñado para la permanencia, el confort y la inmersión de marca." },
        ],
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Carmela, 41",
            avatar: "/projects/root/persona-1.webp",
            description:
              "Traductora desplazada por la IA. Abrumada por las opciones y paralizada por el miedo a elegir mal. El problema no es encontrar contenido, sino confiar en el camino.",
            quote:
              "Hay tantas opciones que no sé por dónde empezar, y me da miedo perder el tiempo en el camino equivocado.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Fiorella, 30",
            avatar: "/projects/root/persona-2.webp",
            description:
              "Diseñadora UX que necesita eficiencia ante todo. La mayoría de plataformas son demasiado genéricas para adaptarse a sus necesidades específicas y su tiempo limitado.",
            quote:
              "Tengo muy poco tiempo y la mayoría de plataformas no están diseñadas para lo que realmente necesito.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Digital Strategy",
        description:
          "ROOT está construido alrededor de una sola imagen: un jardín de conocimiento donde las lecciones crecen a tu propio ritmo y nada se fuerza. Cada decisión de diseño volvía a tres cosas: motivación (sin presión, solo progreso), organización (un camino claro, no un campo abierto), y entretenimiento, porque el aprendizaje que se siente como deberes se abandona. El momento que nos dijo que funcionaba: los usuarios veían su ruta generada por primera vez y decían 'esto tiene sentido para mí.' Ese era el momento Aha alrededor del cual diseñamos todo.",
        products: [
          { title: "Dashboard de Aprendizaje", description: "Experiencia de entrada basada en la metáfora de un jardín visual, donde el usuario cultiva su conocimiento a su propio ritmo sin la presión de un aprendizaje tradicional.", image: "/projects/root/digital-1.webp" },
          { title: "Onboarding Conversacional", description: "Flujo cercano y personalizado que le pregunta al usuario \"¿Qué quieres aprender?\", sugiriendo temas o permitiendo escribir cualquier interés con asistencia de IA para armar su ruta única.", image: "/projects/root/digital-2-a.webp", images: ["/projects/root/digital-2-a.webp", "/projects/root/digital-2-b.webp"] },
          { title: "Generador de Rutas y Unidades", description: "El motor de IA estructura módulos y lecciones personalizadas según los intereses del usuario, permitiéndole seleccionar o ajustar las unidades de su plan de estudio en segundos.", image: "/projects/root/digital-3-a.webp", images: ["/projects/root/digital-3-a.webp", "/projects/root/digital-3-b.webp"] },
          { title: "Gamificación y Recompensas", description: "Sistema de incentivos orgánico donde completar lecciones hace crecer \"flores y orquídeas\" en el jardín del usuario, celebrando hitos y rachas de aprendizaje sin presiones ni juicio.", image: "/projects/root/digital-4.webp" },
        ],
        insights: [
          { title: "El jardín como metáfora", text: "Un sistema visual basado en el crecimiento orgánico (un jardín de conocimiento) transmite calma en lugar de la presión de un checklist." },
          { title: "Micro-metas sin culpa", text: "El aprendizaje auto-gestionado requiere metas micro-medibles que celebren el avance diario sin generar culpa por pausas." },
          { title: "El momento Aha", text: "El momento 'Aha' ocurre cuando el usuario ve su ruta personalizada generada y siente que la plataforma entiende su contexto real." },
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
    category: ["Service Design", "CX", "Spatial Branding", "Product Design"],
    tags: ["LUXURY RETAIL", "SERVICE DESIGN", "SPATIAL BRANDING"],
    bgColor: "#F5EFE9",
    insightColors: ["#F8F4F0", "#F5EFE9", "#EADFCF"],
    journeyDiagram: "/projects/kuna/customer-journey-current.webp",
    userFlowDiagram: "/projects/kuna/kuna-flow.png",
    spatialImages: [
      "/projects/kuna/kuna-spatial-1.webp",
      "/projects/kuna/kuna-spatial-2.webp",
      "/projects/kuna/kuna-spatial-3.webp",
      "/projects/kuna/kuna-spatial-4.webp",
      "/projects/kuna/kuna-spatial-5.webp",
      "/projects/kuna/kuna-spatial-6.webp",
    ],
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
        description: [
          "Lideré un proceso de investigación para profundizar en los user personas de KUNA y realicé un análisis de categoría para identificar oportunidades de negocio y posicionamiento estratégico dentro del espacio físico. Workshops de co-creación bajo metodología Design Thinking, combinados con los hallazgos de investigación, dieron forma a la dirección.",
          "La experiencia se articuló alrededor de tres pilares estratégicos: exploración, permanencia y fidelización. Un insight clave emergió con claridad: en una experiencia de lujo, la etapa de fidelización es la más crítica. La tecnología y la innovación necesitaban operar como una capa invisible, sin competir nunca con el producto ni con la artesanía.",
        ],
        insights: [
          { title: "Percepción de Valor", text: "El consumidor de lujo moderno no busca únicamente adquirir una prenda de alta calidad, sino conectar con el origen y la herencia artesanal detrás de la materia prima." },
          { title: "Ritmo de Navegación", text: "El viajero y comprador premium requiere itinerarios espaciales diferenciados: mientras el perfil transaccional valora la agilidad y claridad en el recorrido, el perfil heritage demanda pausas y capas de contenido editorial inmersivo." },
          { title: "Coherencia de Marca", text: "La promesa de \"lujo consciente\" se fractura si existe desconexión entre la narrativa de comunicación visual y la materialidad del punto de venta; el espacio físico debe actuar como la extensión tangible del relato de marca." },
        ],
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Lu Wei, 38",
            avatar: "/projects/kuna/persona-1.webp",
            description: "Turista ejecutiva en busca de autenticidad cultural y fibras de vicuña. Compra impulsivamente por estar de viaje pero requiere validar la calidad al tacto antes de decidir.",
            quote: "Quiero llevarme prendas únicas y sostenibles que reflejen el origen y la herencia del país que estoy visitando.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Claudia, 46",
            avatar: "/projects/kuna/persona-2.webp",
            description: "Supervisora diplomática y consumidora de lujo silencioso. Busca elegancia atemporal para eventos de trabajo y exige una atención personalizada a la altura del alto ticket de compra.",
            quote: "Si invierto en una pieza exclusiva de alpaca, espero que tanto la prenda como la experiencia en tienda sean impecables.",
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
          { title: "Garment Care", description: "Guía personalizada de cuidado y mantenimiento postventa según el tipo de prenda y la fibra textil seleccionada (Alpaca, Vicuña, Pima).", image: "/projects/kuna/digital-1.webp" },
          { title: "Lifestyle Club", description: "Cuestionario de perfilamiento que convierte la lealtad en una experiencia personalizada, recomendando colecciones según las preferencias del usuario.", image: "/projects/kuna/digital-2-a.webp", images: ["/projects/kuna/digital-2-a.webp", "/projects/kuna/digital-2-b.webp"] },
          { title: "Express KUNA Service", description: "Servicio ágil diseñado para el viajero moderno que busca curaduría de regalos y asesoría de compra rápida sin perder la exclusividad de la marca.", image: "/projects/kuna/digital-3-a.webp", images: ["/projects/kuna/digital-3-a.webp", "/projects/kuna/digital-3-b.webp"] },
          { title: "Artistic Experience KUNA", description: "Espacio dedicado a piezas de arte decorativo y técnicas ancestrales que visibilizan el trabajo de artesanos y artistas peruanos contemporáneos.", image: "/projects/kuna/digital-4.webp" },
        ],
        insights: [
          { title: "Lealtad como co-creación", text: "El Lifestyle Club convierte la lealtad en acceso exclusivo, haciendo que el cliente frecuente se sienta co-creador de la marca." },
          { title: "Origen como experiencia", text: "Artistic Experience KUNA conecta al viajero moderno con el origen de la fibra mediante narrativas digitales inmersivas en punto de venta." },
          { title: "La compra como comienzo", text: "El servicio Garment Care transforma la compra final en el inicio de un vínculo duradero de cuidado y mantenimiento de la prenda." },
        ],
      },
      spatialBranding: {
        sectionNumber: "04",
        title: "Spatial Branding & Signage",
        description: [
          "Introduje un sistema de branding espacial construido alrededor del detalle: versiones simplificadas del logo integradas en mobiliario y espejos, un sistema de señalética de estilo editorial, y un uso estratégico del rojo para señalizar momentos de precio especial.",
          "Los códigos QR fueron integrados en puntos clave, activando flujos de campaña específicos. La composición en todo el espacio se mantiene deliberadamente limpia: jerarquía sobre decoración, intención sobre saturación.",
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
    title: "GrupoModulor: Rebranding & Web End-to-End",
    client: "GrupoModulor® · Strategic Design & Innovation Consultancy, Lima · 2023",
    subtitle: "Rebranding & Web Strategy",
    category: ["Product Design"],
    tags: ["BRAND STRATEGY", "REBRANDING", "DIGITAL PRODUCT"],
    bgColor: "#F3F3FA",
    insightColors: ["#F8F8FC", "#F3F3FA", "#E7E7F7"],
    userFlowDiagram: "/projects/modulor/modulor-flow.png",
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
        description: [
          "Modulor necesitaba evolucionar de una consultora local consolidada a una firma de diseño estratégico con posicionamiento global. El reto: traducir 16 años de expertise en una presencia digital capaz de hablar con tres audiencias muy distintas al mismo tiempo, sin perder coherencia.",
          "La brecha de posicionamiento de Modulor era narrativa. La firma tenía el expertise; lo que le faltaba era un ecosistema digital capaz de llevar ese expertise a tres audiencias distintas sin perder lo que la hacía singular.",
        ],
        insights: [
          { title: "Alineación Estratégica", text: "Un rebranding visual carece de impacto en el negocio si no está respaldado por una reestructuración profunda en la arquitectura de información y en la usabilidad de sus plataformas digitales." },
          { title: "Escalabilidad de Producto", text: "La dispersión de activos de marca en entornos digitales genera inconsistencia y dificulta la adopción por parte de los stakeholders; la unificación en un sistema de diseño dinámico es indispensable para competir globalmente." },
          { title: "Fricción en la Conversión B2B/B2C", text: "La sofisticación visual debe equilibrarse con la intuición funcional; una interfaz sobrecargada de estética pero débil en jerarquía de información incrementa las tasas de abandono en las etapas clave del funnel." },
        ],
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Sofía, 39",
            avatar: "/projects/modulor/persona-1.webp",
            description: "Busca estandarizar tiendas, escalar con rapidez y ver resultados visibles. Se mueve a través de LinkedIn, eventos del sector y medios especializados, motivado por el posicionamiento competitivo.",
            quote: "Necesito un aliado estratégico que me permita estandarizar y escalar nuestros puntos de venta sin perder velocidad ni calidad en la ejecución.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Mateo, 35",
            avatar: "/projects/modulor/persona-2.webp",
            description: "Enfocado en calidad, innovación y modernización de imagen de marca. Valora el contenido humano y la transformación cultural, pero navega entre burocracia interna y una gestión de proveedores compleja.",
            quote: "Buscamos transformar nuestra presencia visual e innovar en la experiencia del cliente, superando las trabas operativas e internas.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Digital Strategy & Brand",
        description: [
          "La estrategia digital opera a través de dos capas de conversión: el canal de Insights construye una audiencia calificada de tomadores de decisión mediante contenido y captura de newsletter, mientras que el flujo de contacto dirige a cada audiencia hacia el servicio correcto (Arquitectura de Oficinas, Phygital o Business) antes de que se realice una sola llamada.",
          "El rebranding usa un morado intenso que distingue a Modulor del estético gris corporativo de las consultoras regionales. Junto a un logotipo geométrico limpio, el sistema posiciona a Modulor como algo distinto a las firmas con las que compite.",
        ],
        products: [
          { title: "Web Principal & Captura de Leads", description: "Identidad visual potente basada en frases manifiesto y tono morado corporativo. Integra formularios de suscripción estratégica (lead capture) para conectar con clientes clave en la industria del diseño y retail.", image: "/projects/modulor/digital-1-a.webp", images: ["/projects/modulor/digital-1-a.webp", "/projects/modulor/digital-1-b.webp"] },
          { title: "Portafolio de Proyectos & Sistema UI", description: "Exhibición de casos de éxito (Joma, Converse, Vision Center) organizada mediante un sistema de componentes claro, con jerarquía visual optimizada y un sistema cromático de botones interactivos.", image: "/projects/modulor/digital-2-a.webp", images: ["/projects/modulor/digital-2-a.webp", "/projects/modulor/digital-2-b.webp"] },
          { title: "Servicios & Proyectos Destacados", description: "Estructura visual basada en un sistema de iconografía geométrica y cards de servicios (Consultoría, Estrategia Retail, Capacitación), dando paso a una galería de portadas visuales de proyectos de alto impacto.", image: "/projects/modulor/digital-3.webp", desktop: true },
          { title: "Portadas de Impacto & Fotografía Innovadora", description: "Diseño editorial de versión Desktop que utiliza dos grandes portadas por página, respaldadas por una dirección de arte fotográfica conceptual y atrevida para transmitir la cultura e innovación de la firma.", image: "/projects/modulor/digital-4.webp", desktop: true },
        ],
        insights: [
          { title: "Contenido que califica", text: "El canal de Insights califica a la audiencia ejecutiva antes del primer contacto, construyendo autoridad de marca." },
          { title: "Flujo inteligente por perfil", text: "Dirigir el flujo de conversión según el tipo de cliente optimiza las reuniones de negocio y acelera el cierre de propuestas." },
          { title: "Escalar sin perder rigor", text: "Un sistema de componentes web sólido permite escalar casos de estudio manteniendo consistencia visual sin esfuerzo adicional." },
        ],
      },
    },
  },

  // ─────────────────────────────────────────
  // DON SALAZAR
  // ─────────────────────────────────────────
  {
    id: "don-salazar",
    slug: "don-salazar",
    title: "Café Don Salazar — Phygital Pop-Up Experience",
    client: "Café Don Salazar · GrupoModulor · 2024",
    subtitle: "Phygital Pop-Up Experience",
    category: ["Service Design", "CX", "Spatial Branding", "Product Design"],
    tags: ["SERVICE DESIGN", "SPATIAL BRANDING", "PRODUCT DESIGN"],
    bgColor: "#F2F5E8",
    insightColors: ["#F7F9F0", "#F2F5E8", "#E5EBCF"],
    journeyDiagram: "/projects/don-salazar/customer-journey-current.webp",
    userFlowDiagram: "/projects/don-salazar/don-salazar-flow.png",
    spatialImages: [
      "/projects/don-salazar/don-salazar-spatial-1.webp",
      "/projects/don-salazar/don-salazar-spatial-2.webp",
      "/projects/don-salazar/don-salazar-spatial-3.webp",
      "/projects/don-salazar/don-salazar-spatial-4.webp",
      "/projects/don-salazar/don-salazar-spatial-5.webp",
    ],
    meta: {
      role: "Service Design Lead · pop-up experience, spatial strategy, and interactive ordering flow.",
      timeline: "2024",
      team: "GrupoModulor Design Team.",
    },
    description:
      "Pop-up sensorial y digital para convertir el descubrimiento de café de especialidad en un ritual interactivo para universitarios.",
    heroImage: "/projects/don-salazar/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description: [
          "El reto era transformar la compra habitual e irreflexiva de café en el centro comercial en un momento de aprendizaje activo e interactivo para jóvenes universitarios.",
          "Identificamos que la intimidación por no conocer la jerga del café de especialidad bloqueaba la exploración. Diseñamos un flujo sin fricciones que guía al usuario según sus gustos y tiempo disponible.",
        ],
        insights: [
          { title: "Educación de Categoría", text: "El consumidor de café especial desea explorar nuevas variedades y métodos de preparación, pero se siente intimidado por el lenguaje técnico y elitista de la especialidad." },
          { title: "Fidelización por Comunidad", text: "Las interacciones efímeras en un formato pop-up solo generan valor comercial a largo plazo si incluyen mecanismos de participación activa que conviertan la visita en un sentido de pertenencia." },
          { title: "Diseño Basado en Datos", text: "Las herramientas digitales de autodescubrimiento en el espacio físico no solo mejoran la personalización de la experiencia del usuario, sino que funcionan como un canal de recolección de first-party data para la marca." },
        ],
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Mateo Reyes, 20",
            avatar: "/projects/don-salazar/persona-1.webp",
            description:
              "Estudiante universitario que pasa por el mall a diario. Pide por hábito, no por elección. Curioso por el café de especialidad pero intimidado por no saber qué pedir.",
            quote:
              "No sé qué pedir más allá de lo de siempre y no quiero parecer que no sé lo que hago.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Camila Ortiz, 23",
            avatar: "/projects/don-salazar/persona-2.webp",
            description:
              "Apasionada del café que sigue cuentas de especialidad y busca activamente nuevas cafeterías. Tiene el conocimiento pero necesita una experiencia rápida de aprender y memorable de vivir.",
            quote:
              "Quiero un café que me enseñe algo, no solo que me lo sirvan.",
          },
        ],
      },
      customerJourney: {
        sectionNumber: "02",
        title: "Customer Journey Map",
        image: "/projects/don-salazar/customer-journey-current.webp",
      },
      digitalStrategy: {
        sectionNumber: "03",
        title: "Digital Strategy",
        description: [
          "Diseñé cuatro touchpoints digitales que acompañan al visitante desde el descubrimiento hasta la fidelización, transformando la visita al pop-up en el inicio de una relación con la marca.",
          "Cada pantalla responde a un momento específico del journey: exploración del origen, personalización del pedido, educación sobre el proceso de tueste, y conexión con la comunidad de cafeteros.",
        ],
        products: [
          { title: "Explorador de Origen", description: "Landing de bienvenida que conecta al usuario con el universo del café de especialidad 100% peruano, invitándolo a descubrir su perfil ideal desde el inicio de la experiencia.", image: "/projects/don-salazar/digital-1.webp" },
          { title: "Test de Perfilado y Personalización", description: "Flujo interactivo que pregunta \"¿Qué tipo de cafetero eres?\" y permite seleccionar intensidad y notas de cata para adaptar la sugerencia al gusto específico de cada cliente.", image: "/projects/don-salazar/digital-2-a.webp", images: ["/projects/don-salazar/digital-2-a.webp", "/projects/don-salazar/digital-2-b.webp"] },
          { title: "Guía de Métodos y Taza", description: "Módulo interactivo que permite elegir el método de extracción (Chemex, Aeropress, etc.) y la taza ideal, desmitificando el proceso de preparación con recomendaciones visuales y claras.", image: "/projects/don-salazar/digital-3-a.webp", images: ["/projects/don-salazar/digital-3-a.webp", "/projects/don-salazar/digital-3-b.webp"] },
          { title: "Ticket Digital & Fidelización", description: "Confirmación de pedido inmediata con ticket de atención y acceso a la comunidad mediante código QR, cerrando el flujo de compra e impulsando productos complementarios del catálogo.", image: "/projects/don-salazar/digital-4.webp" },
        ],
        insights: [
          { title: "Especialidad sin barreras", text: "Un flujo de pedido guiado por perfil de sabor (dulce, ácido, frutal) democratiza la especialidad sin tecnicismos." },
          { title: "Digital que genera viralidad", text: "La interacción digital en el pop-up fomenta el aprendizaje exprés y genera contenido compartible en redes sociales." },
          { title: "Recurrencia por recomendación", text: "Los códigos de recomendación personalizados incentivan la recurrencia entre grupos de compañeros de estudio." },
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
    category: ["Estrategia Branding"],
    tags: ["LUXURY RETAIL", "ART DIRECTION", "SPATIAL BRANDING"],
    meta: {
      role: "Art Direction Lead · brand guidelines, spatial branding, and omnichannel signage system at GrupoModulor.",
      timeline: "2024",
      team: "GrupoModulor Design Team.",
    },
    description:
      "S•Collection es la línea premium de Grupo Sole y buscaba posicionarse en el mercado como una marca de lujo. A través de una auditoría de marca, le dimos un refresh de look comunicando innovación y premiumness.",
    heroImage: "/projects/scollection/cover.webp",
    spatialImages: [
      "/projects/scollection/spatial-1.webp",
      "/projects/scollection/spatial-2.webp",
      "/projects/scollection/spatial-3.webp",
      "/projects/scollection/spatial-4.webp",
      "/projects/scollection/spatial-5.webp",
      "/projects/scollection/spatial-6.webp",
      "/projects/scollection/spatial-7.webp",
      "/projects/scollection/spatial-8.webp",
      "/projects/scollection/spatial-9.webp",
      "/projects/scollection/spatial-10.webp",
    ],
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description: [
          "La estrategia se construyó alrededor de tres ejes: Identidad Visual, Audiencia y Producto, evaluados desde las perspectivas de Experiencia de Marca, Diseño e Innovación. El sistema visual comunica elegancia a través de la contención.",
          "La conexión con la audiencia requería un ecosistema omnicanal anclado en resonancia emocional. Y la capa de producto exigía que la tecnología y la artesanía se mostraran a través de iconografía, contenido inmersivo y fotografía sensorial que vende la experiencia, no solo el electrodoméstico.",
        ],
        insights: [
          { title: "Lujo desde la contención", text: "El lujo contemporáneo no se comunica sobrecargando el espacio, sino a través de la contención y el rigor en el detalle." },
          { title: "Tecnología como arte", text: "Conectar emocionalmente con el comprador premium exige tratar la tecnología del hogar como una pieza de arte integrada." },
          { title: "Vender el estilo de vida", text: "La fotografía sensorial y la iconografía limpia venden el estilo de vida antes que el electrodoméstico individual." },
        ],
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Valeria, 35",
            avatar: "/projects/scollection/persona-1.webp",
            description: "Líder de equipo con estilo de vida sofisticado y cosmopolita. Busca integrar tecnología de alta gama y diseño abierto en su hogar para proyectar estatus como anfitriona.",
            quote: "Para mí la cocina es el centro social de la casa; busco productos donde la tecnología premium y el diseño hablen por sí solos.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Chabela, 42",
            avatar: "/projects/scollection/persona-2.webp",
            description: "Ama de casa y tomadora de decisión en compras del hogar que confía en la seguridad de Sole. Busca renovar su espacio con electrodomésticos eficientes y de diseño moderno como recompensa a su esfuerzo.",
            quote: "Confío en la calidad de la marca y quiero una cocina moderna que simplifique el día a día de mi familia y luzca increíble.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Art Direction & Brand",
        description: [
          "El ecosistema digital fue diseñado desde una sola premisa: cada gráfica debía sentirse tan premium como el producto mismo. Construí el sistema de diseño primero, estados de botón en cuatro variantes, jerarquía tipográfica en Gilroy y lógica de componentes, para que la consistencia visual no dependiera de decisiones caso por caso.",
          "La capa de contenido mobile opera diferente: formatos verticales cortos para la app SCo° donde el storytelling lidera sobre las especificaciones, la fotografía vende y la interfaz se aparta.",
        ],
        products: [
          { title: "Sistema Visual SCo°", description: "Botones en cuatro variantes, tipografía Gilroy y componentes con consistencia editorial.", image: "/projects/scollection/spatial-1.webp" },
          { title: "App SCo° Mobile", description: "Storytelling vertical donde la fotografía vende y la interfaz se aparta.", image: "/projects/scollection/spatial-2.webp" },
          { title: "Catálogo Premium", description: "Exploración de colecciones con la elegancia de una revista de lujo.", image: "/projects/scollection/spatial-3.webp" },
          { title: "Signage Digital", description: "Sistema omnicanal de señalética con QR y contenido activado por producto.", image: "/projects/scollection/spatial-4.webp" },
        ],
        insights: [
          { title: "El sistema refleja la marca", text: "Cada pieza gráfica y componente UI debe mantener estándares de diseño tan refinados como los productos de la marca." },
          { title: "Vertical para inmersión", text: "El formato vertical en la app SCo° favorece la exploración inmersiva y táctil en dispositivos móviles." },
          { title: "Modular sin perder lujo", text: "Un sistema de diseño modular de 4 variantes asegura que las campañas de marketing conserven el look & feel de lujo en cualquier canal." },
        ],
      },
    },
  },

  // ─────────────────────────────────────────
  // YUYITO
  // ─────────────────────────────────────────
  {
    id: "yuyito",
    slug: "yuyito",
    title: "Yuyito",
    client: "Yuyito, retail masivo · 2024",
    subtitle: "Retail & Spatial Branding",
    category: ["Estrategia Branding", "Spatial Branding"],
    tags: ["RETAIL", "SPATIAL BRANDING", "ESTRATEGIA"],
    meta: {
      role: "Brand & Spatial Design Consultant · benchmark competitivo, layout estratégico y sistema de señalética omnicanal.",
      timeline: "2024",
      team: "GrupoModulor Design Team.",
    },
    description:
      "Consultoría de retail y branding espacial para posicionar a Yuyito como el destino preferido para todas las necesidades del hogar, a través de un sistema omnicanal donde señalética, iconografía y layout trabajan juntos.",
    heroImage: "/projects/yuyito/cover.webp",
    spatialImages: [
      "/projects/yuyito/spatial-1.webp",
      "/projects/yuyito/spatial-2.webp",
      "/projects/yuyito/spatial-3.webp",
      "/projects/yuyito/spatial-4.webp",
      "/projects/yuyito/spatial-5.webp",
      "/projects/yuyito/spatial-6.webp",
    ],
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description: [
          "La estrategia de consultoría se construyó a través de un benchmark competitivo (estudiando modelos de retail de alta rotación como Dollarcity, Asia Sur y Miniso) y una matriz de layout articulada en tres ejes estratégicos: Experiencia de tienda, Categorización y Diseño interior, evaluados según la Identidad de Marca, la Audiencia y el Valor Agregado.",
          "El objetivo principal fue posicionar a Yuyito como "el destino preferido para todas las necesidades del hogar". La conexión con la audiencia exigía alejarse de discursos aspiracionales para comunicar de forma directa desde la funcionalidad, la relación precio-calidad y las ofertas diarias. Para garantizar la fluidez en el espacio físico, la estrategia contempló una disposición que facilite el descubrimiento continuo, respaldada por un circuito de más de dos cajas registradoras estratégicamente ubicadas para eliminar embotellamientos.",
        ],
        personas: [],
        insights: [
          { title: "Navegación Intuitiva sobre Sobrecarga Visual", text: "En el retail masivo de alta rotación, el usuario no busca perderse en pasillos abarrotados; demanda un sistema claro de categorización y señalética icónica que le permita ubicar lo que necesita y descubrir nuevos productos sin esfuerzo ni parálisis visual." },
          { title: "Valor Percibido desde la Funcionalidad", text: "La audiencia de conveniencia no conecta con narrativas aspiracionales o lejanas; evalúa el espacio desde la relación precio-calidad, la claridad de las ofertas y una experiencia directa que valida su decisión de compra de forma pragmática." },
          { title: "Fluidez Espacial como Detonador de Fricción o Lealtad", text: "La satisfacción del cliente en tienda no se define únicamente al elegir el producto, sino en el punto de salida; implementar circuitos ágiles con múltiples puntos de cobro transforma una compra rápida en un hábito recurrente." },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Art Direction & Brand Experience",
        description: [
          "El concepto espacial y gráfico de Yuyito se diseñó para diferenciarse radicalmente de la competencia mediante una personalidad cromática memorable (apuesta por tonos morados y naranjas) y un lenguaje de formas ovaladas que responden a la geometría del logotipo.",
          "Construí un sistema de diseño omnicanal donde la materialidad y la iconografía trabajan juntas: un sistema integral de señalética e iconografía optimiza la navegación por categorías dentro de la tienda, mientras que áreas clave como los corners de campaña potencian la tracción comercial a lo largo del año. La arquitectura del layout no solo ordena la oferta masiva, sino que transforma el recorrido en una experiencia de hallazgo ágil, dinámica y visualmente coherente en cada punto de contacto.",
        ],
        products: [],
      },
    },
  },
];
