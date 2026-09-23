// src/data/projectsData.ts

export interface ProjectMeta {
  label: string;
  value: string;
}

export interface PersonaItem {
  title: string;
  avatar: string;
  description: string;
  quote: string;
}

export interface InsightItem {
  label: string;
  text: string;
}

export interface SectionHeaderBlock {
  type: "section-header";
  title: string;
  paragraphs: string[];
}

export interface PersonasGridBlock {
  type: "personas-grid";
  items: PersonaItem[];
}

export interface InsightsGridBlock {
  type: "insights-grid";
  items: InsightItem[];
}

export interface DigitalCardBlock {
  type: "digital-card";
  title: string;
  description: string;
  variant: "single" | "double" | "desktop";
  images: string[];
}

export interface ImageSectionBlock {
  type: "image-section";
  title?: string;
  images: string[];
  caption?: string;
}

export type ProjectSection =
  | SectionHeaderBlock
  | PersonasGridBlock
  | InsightsGridBlock
  | DigitalCardBlock
  | ImageSectionBlock;

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string;
  tags: string[];
  meta: ProjectMeta[];
  sections: ProjectSection[];
}

export const projectsData: Project[] = [
  {
    id: "sole",
    slug: "sole",
    title: "Sole",
    description:
      "Sole, marca peruana de electrodomésticos, necesitaba reposicionarse en el espacio físico. Lideré la transformación de un showroom saturado en una experiencia omnicanal.",
    coverImage: "/projects/sole/cover.webp",
    tags: ["Service Design", "Digital Strategy", "Spatial Branding", "Phygital"],
    meta: [
      { label: "Cliente:", value: "Sole & S•Collection, appliance retail · GrupoModulor · 2024" },
      { label: "Proyecto:", value: "Sole: Phygital Experience" },
      { label: "Rol:", value: "Service Design Lead · UX/UI strategy, co-creation methodology, cross-functional alignment at GrupoModulor." },
      { label: "Equipo:", value: "Ximena Pizarro, Daniela Raez, Nicole Closa, Grace Huayanca, Giancarlo Grande." },
    ],
    sections: [
      {
        type: "section-header",
        title: "Research & Strategy",
        paragraphs: [
          "El proyecto comenzó con una sesión de co-creación con stakeholders clave del negocio desde distintas perspectivas. Profundizamos en la investigación del público objetivo para mapear sus principales necesidades y puntos de fricción, usando una metodología de storytelling por escenario-persona para definir los insights conceptualmente.",
          "El reto central era claro: dos marcas, Sole y S•Collection, necesitaban coexistir en el mismo espacio físico, cada una con un usuario distinto y necesidades distintas, pero las dos compartiendo la misma ilusión: la cocina de sus sueños.",
        ],
      },
      {
        type: "personas-grid",
        items: [
          {
            title: "User persona 1",
            avatar: "/projects/sole/persona-1.webp",
            description:
              "Un padre de familia práctico y detallista que comparte su hogar con su esposa, sus hijos y un familiar mayor. Un usuario omnicanal que investiga meticulosamente cada precio y especificación técnica en internet antes de visitar la tienda, asegurando una compra inteligente y duradera que simplifique el día a día de los suyos.",
            quote:
              "Quiero soluciones eficientes para mi hogar. Investigo mucho en internet porque la confianza y la seguridad de mi familia no son negociables.",
          },
          {
            title: "User persona 2",
            avatar: "/projects/sole/persona-2.webp",
            description:
              "Una profesional con un estilo de vida sofisticado y altas expectativas estéticas, apasionada por las tendencias globales de interiorismo y gastronomía. Quiere que su cocina deje de ser un espacio meramente funcional para convertirse en un ritual social e inmersivo.",
            quote:
              "Para mí, la cocina es el corazón social del hogar. Busco un entorno donde la tecnología premium sea invisible y el diseño sea el protagonista.",
          },
        ],
      },
      {
        type: "insights-grid",
        items: [
          {
            label: "Insight 1",
            text: "La promesa central de Sole no se traduce en el entorno. La tienda comunica volumen de producto, no significado de marca.",
          },
          {
            label: "Insight 2",
            text: "Sole y S•Collection coexisten sin diferenciación visual ni experiencial, diluyendo el valor percibido de ambas líneas.",
          },
          {
            label: "Insight 3",
            text: "En los momentos de mayor carga cognitiva, al comparar modelos e imaginar los acabados en su propio hogar, los usuarios se quedan sin apoyo, aumentando la fricción en el punto de conversión.",
          },
        ],
      },
      {
        type: "section-header",
        title: "Digital Strategy",
        paragraphs: [
          "Diseñé un catálogo virtual con dos experiencias distintas para dos públicos completamente diferentes. Sole y S•Collection coexisten digitalmente pero con journeys diferenciados: el de Sole se centra en especificaciones, ahorro y beneficios técnicos, guiando al comprador práctico hacia una decisión confiada. El de S•Collection se centra en exploración y visualización aumentada, permitiendo al usuario combinar materiales, colores y texturas para imaginar su cocina ideal antes de comprometerse.",
        ],
      },
      {
        type: "digital-card",
        title: "Digital Product Experience",
        description: "Catálogo virtual interactivo con journeys diferenciados para Sole y S•Collection.",
        variant: "double",
        images: ["/projects/sole/digital-1-a.webp", "/projects/sole/digital-1-b.webp"],
      },
      {
        type: "section-header",
        title: "Spatial Branding & Signage",
        paragraphs: [
          "Durante la auditoría, identifiqué que el azul corporativo de Sole no tenía presencia estratégica en el espacio físico. Lo reposicioné como una decisión de diseño deliberada: visible, elegante y consistente en todos los puntos de contacto. S•Collection sostiene su propio territorio visual a través de grises y negros.",
          "El sistema de storytelling se complementó con códigos QR que activan flujos específicos por producto, habilitando trazabilidad de conversión y datos propios para decisiones de colocación más inteligentes. El sistema iconográfico fue diseñado para ser visualmente distinto entre ambas marcas, comunicando elegancia a través del minimalismo y la jerarquía de información.",
        ],
      },
    ],
  },
  {
    id: "root",
    slug: "root",
    title: "ROOT",
    description:
      "El problema nunca fue la falta de contenido. Fue la ansiedad de no saber si estás aprendiendo lo correcto, en el orden correcto, lo suficientemente rápido.",
    coverImage: "/projects/root/cover.webp",
    tags: ["Digital Product Design", "EdTech", "UX Research", "Self-Management"],
    meta: [
      { label: "Cliente:", value: "Digital Product Design · Master's Project, BAU Barcelona · 2026" },
      { label: "Proyecto:", value: "ROOT: Learning Self-Management Platform" },
      { label: "Rol:", value: "UX/UI Designer & Researcher · co-leading research, product strategy, and interface design." },
      { label: "Equipo:", value: "Mora Celaya, Alfredo Duarte, Stefanny Duarte, Alexandra Hilaire, Sara Prats." },
      { label: "Advisors:", value: "Cesar Úbeda, Jordi Hernandez, Sarah Romero, Jorge Agundez, Jose Saura." },
    ],
    sections: [
      {
        type: "section-header",
        title: "Research & Strategy",
        paragraphs: [
          "Empezamos mirando quiénes tenían más motivación para aprender y más obstáculos para hacerlo. Los adultos entre 25 y 44 años aparecían siempre: alta disposición, altas barreras. Una ex traductora con miedo de que la IA la hubiera dejado obsoleta. Una diseñadora UX que necesitaba mantenerse actualizada pero no encontraba un curso que encajara con su agenda real. Las dos motivadas. Las dos bloqueadas.",
          "El pivote llegó cuando dejamos de preguntar por qué la gente no aprende más y empezamos a preguntar por qué la gente no puede gestionar su propio aprendizaje. Ese solo cambio de enfoque lo transformó todo.",
        ],
      },
      {
        type: "personas-grid",
        items: [
          {
            title: "User persona 1",
            avatar: "/projects/root/persona-1.webp",
            description: "Ex traductora buscando reconversión profesional rápida frente al avance de la IA.",
            quote: "Necesito aprender habilidades relevantes sin perder meses en contenido irrelevante.",
          },
          {
            title: "User persona 2",
            avatar: "/projects/root/persona-2.webp",
            description: "Diseñadora UX en activo que necesita mantenerse al día con estándares globales.",
            quote: "Quiero una ruta estructurada que se adapte a mi agenda real, no cursos extensos que termino abandonando.",
          },
        ],
      },
      {
        type: "section-header",
        title: "Digital Strategy",
        paragraphs: [
          "ROOT está construido alrededor de una sola imagen: un jardín de conocimiento donde las lecciones crecen a tu propio ritmo y nada se fuerza.",
          "Cada decisión de diseño volvía a tres cosas: motivación (sin presión, solo progreso), organización (un camino claro, no un campo abierto), y entretenimiento, porque el aprendizaje que se siente como deberes se abandona. El momento que nos dijo que funcionaba: los usuarios veían su ruta generada por primera vez y decían 'esto tiene sentido para mí.' Ese era el momento Aha alrededor del cual diseñamos todo.",
        ],
      },
      {
        type: "digital-card",
        title: "Jardín de Conocimiento",
        description: "Plataforma interactiva para autogestión del aprendizaje adaptativo.",
        variant: "desktop",
        images: ["/projects/root/desktop-1.webp"],
      },
    ],
  },
  {
    id: "kuna",
    slug: "kuna",
    title: "KUNA",
    description:
      "Retail Strategy y experiencia de marca espacial para KUNA, elevando el patrimonio textil andino hacia el mercado de lujo global.",
    coverImage: "/projects/kuna/cover.webp",
    tags: ["Luxury Retail", "Service Design", "Spatial Branding", "Omnichannel"],
    meta: [
      { label: "Cliente:", value: "KUNA, luxury Andean textile brand · GrupoModulor · 2024" },
      { label: "Proyecto:", value: "KUNA: Heritage Experience & Retail Design Strategy" },
      { label: "Rol:", value: "Service Design Lead · spatial strategy, touchpoint design, and co-creation methodology at GrupoModulor." },
      { label: "Equipo:", value: "Ximena Pizarro, Daniela Raez, Nicole Closa, Paola Abal, Giancarlo Grande." },
    ],
    sections: [
      {
        type: "section-header",
        title: "Research & Strategy",
        paragraphs: [
          "Lideré un proceso de investigación para profundizar en los user personas de KUNA y realicé un análisis de categoría para identificar oportunidades de negocio y posicionamiento estratégico dentro del espacio físico. Workshops de co-creación bajo metodología Design Thinking, combinados con los hallazgos de investigación, dieron forma a la dirección.",
          "La experiencia se articuló alrededor de tres pilares estratégicos: exploración, permanencia y fidelización. Un insight clave emergió con claridad: en una experiencia de lujo, la etapa de fidelización es la más crítica. La tecnología y la innovación necesitaban operar como una capa invisible, sin competir nunca con el producto ni con la artesanía.",
        ],
      },
      {
        type: "personas-grid",
        items: [
          {
            title: "User persona 1",
            avatar: "/projects/kuna/persona-1.webp",
            description: "Comprador local de alta gama que busca piezas exclusivas con significado cultural y durabilidad.",
            quote: "Valoro el origen del producto y la maestría artesanal detrás de cada fibra.",
          },
          {
            title: "User persona 2",
            avatar: "/projects/kuna/persona-2.webp",
            description: "Turista o viajero internacional sofisticado que desea llevarse una experiencia textil auténtica e inolvidable.",
            quote: "Busco una conexión directa con la tradición andina explicada desde una sofisticación contemporánea.",
          },
        ],
      },
      {
        type: "section-header",
        title: "Digital Strategy",
        paragraphs: [
          "Diseñé cuatro experiencias digitales para responder a objetivos de negocio específicos y generar engagement en cada touchpoint dentro de la tienda física. El Lifestyle Club convierte la lealtad en acceso, recompensando a los clientes que regresan con espacios y beneficios genuinamente exclusivos.",
          "Artistic Experience KUNA conecta la artesanía ancestral con la inmediatez del viajero moderno. Express KUNA Service da visibilidad nacional e internacional a técnicas ancestrales y artistas peruanos contemporáneos. Y Garment Care reencuadra la compra como el comienzo de una relación, no como el final de una.",
        ],
      },
      {
        type: "digital-card",
        title: "Digital In-Store Touchpoints",
        description: "Servicios digitales integrados en tienda para fidelización y cuidado de prendas.",
        variant: "single",
        images: ["/projects/kuna/digital-1-a.webp"],
      },
      {
        type: "section-header",
        title: "Spatial Branding & Signage",
        paragraphs: [
          "Introduje un sistema de branding espacial construido alrededor del detalle: versiones simplificadas del logo integradas en mobiliario y espejos, un sistema de señalética de estilo editorial, y un uso estratégico del rojo para señalizar momentos de precio especial.",
          "Los códigos QR fueron integrados en puntos clave, activando flujos de campaña específicos. La composición en todo el espacio se mantiene deliberadamente limpia: jerarquía sobre decoración, intención sobre saturación.",
        ],
      },
    ],
  },
  {
    id: "modulor",
    slug: "modulor",
    title: "GrupoModulor",
    description:
      "Una transformación completa de marca y digital para una firma de diseño estratégico de 16 años. El trabajo abarcó identidad, narrativa y producto digital.",
    coverImage: "/projects/modulor/cover.webp",
    tags: ["Rebranding", "Digital Platform", "Strategic Design", "B2B Positioning"],
    meta: [
      { label: "Cliente:", value: "GrupoModulor® · Strategic Design & Innovation Consultancy, Lima · 2023" },
      { label: "Proyecto:", value: "GrupoModulor: Rebranding & Web End-to-End" },
      {
        label: "Rol:",
        value: "Project Manager & Design Experience Lead · full brand transformation and digital product deployment, from identity system to web platform launch.",
      },
    ],
    sections: [
      {
        type: "section-header",
        title: "Research & Strategy",
        paragraphs: [
          "Modulor necesitaba evolucionar de una consultora local consolidada a una firma de diseño estratégico con posicionamiento global. El reto: traducir 16 años de expertise en una presencia digital capaz de hablar con tres audiencias muy distintas al mismo tiempo, sin perder coherencia.",
          "La brecha de posicionamiento de Modulor era narrativa. La firma tenía el expertise; lo que le faltaba era un ecosistema digital capaz de llevar ese expertise a tres audiencias distintas sin perder lo que la hacía singular.",
        ],
      },
      {
        type: "personas-grid",
        items: [
          {
            title: "Executive Buyer",
            avatar: "/projects/modulor/persona-1.webp",
            description: "Directores corporativos buscando innovación espacial y estrategia omnicanal para su empresa.",
            quote: "Necesito un socio estratégico capaz de ejecutar proyectos complejos con rigor.",
          },
          {
            title: "Talento Creativo",
            avatar: "/projects/modulor/persona-2.webp",
            description: "Diseñadores y consultores de alto nivel buscando sumarse a una firma vanguardista.",
            quote: "Busco trabajar en proyectos con verdadero impacto y pensamiento de diseño global.",
          },
        ],
      },
      {
        type: "section-header",
        title: "Digital Strategy & Brand",
        paragraphs: [
          "La estrategia digital opera a través de dos capas de conversión: el canal de Insights construye una audiencia calificada de tomadores de decisión mediante contenido y captura de newsletter, mientras que el flujo de contacto dirige a cada audiencia hacia el servicio correcto (Arquitectura de Oficinas, Phygital o Business) antes de que se realice una sola llamada.",
          "El rebranding usa un morado intenso que distingue a Modulor del estético gris corporativo de las consultoras regionales. Junto a un logotipo geométrico limpio, el sistema posiciona a Modulor como algo distinto a las firmas con las que compite.",
        ],
      },
      {
        type: "digital-card",
        title: "Plataforma Web Modulor",
        description: "Rediseño completo de la experiencia web y sistema de conversión.",
        variant: "desktop",
        images: ["/projects/modulor/desktop-1.webp"],
      },
    ],
  },
  {
    id: "scollection",
    slug: "scollection",
    title: "S•Collection",
    description:
      "S•Collection es la línea premium de Grupo Sole y buscaba posicionarse en el mercado como una marca de lujo. A través de una auditoría de marca, le dimos un refresh de look comunicando innovación y premiumness.",
    coverImage: "/projects/s-collection/cover.webp",
    tags: ["Luxury Retail", "Brand Guidelines", "Art Direction", "Design Systems"],
    meta: [
      { label: "Cliente:", value: "S•Collection, luxury retail · GrupoModulor · 2024" },
      { label: "Proyecto:", value: "S•Collection: Brand Guidelines & Spatial Branding System" },
      {
        label: "Rol:",
        value: "Art Direction Lead · brand guidelines, spatial branding, and omnichannel signage system at GrupoModulor.",
      },
    ],
    sections: [
      {
        type: "section-header",
        title: "Research & Strategy",
        paragraphs: [
          "La estrategia se construyó alrededor de tres ejes: Identidad Visual, Audiencia y Producto, evaluados desde las perspectivas de Experiencia de Marca, Diseño e Innovación.",
          "El sistema visual comunica elegancia a través de la contención. La conexión con la audiencia requería un ecosistema omnicanal anclado en resonancia emocional. Y la capa de producto exigía que la tecnología y la artesanía se mostraran a través de iconografía, contenido inmersivo y fotografía sensorial que vende la experiencia, no solo el electrodoméstico.",
        ],
      },
      {
        type: "personas-grid",
        items: [
          {
            title: "User persona 1",
            avatar: "/projects/s-collection/persona-1.webp",
            description: "Consumidor exigente enfocado en electrodomésticos de alta gama con estética arquitectónica.",
            quote: "Busco piezas donde la tecnología sea invisible y el diseño sea el verdadero protagonista.",
          },
          {
            title: "User persona 2",
            avatar: "/projects/s-collection/persona-2.webp",
            description: "Arquitectos e interioristas buscando especificar productos premium en sus proyectos residenciales.",
            quote: "Necesito marcas que eleven el valor visual de los espacios que creo para mis clientes.",
          },
        ],
      },
      {
        type: "section-header",
        title: "Art Direction & Brand",
        paragraphs: [
          "El ecosistema digital fue diseñado desde una sola premisa: cada gráfica debía sentirse tan premium como el producto mismo. Construí el sistema de diseño primero, estados de botón en cuatro variantes, jerarquía tipográfica en Gilroy y lógica de componentes, para que la consistencia visual no dependiera de decisiones caso por caso.",
          "La capa de contenido mobile opera diferente: formatos verticales cortos para la app SCo° donde el storytelling lidera sobre las especificaciones, la fotografía vende y la interfaz se aparta.",
        ],
      },
      {
        type: "digital-card",
        title: "SCo° App & Brand System",
        description: "Formatos inmersivos y componentes del sistema visual de lujo.",
        variant: "double",
        images: ["/projects/s-collection/digital-1-a.webp", "/projects/s-collection/digital-1-b.webp"],
      },
    ],
  },
];
