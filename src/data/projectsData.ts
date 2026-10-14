// src/data/projectsData.ts

export interface Person {
  tag: string;
  title?: string;
  avatar: string;
  description: string;
  description_es?: string;
  quote?: string;
  quote_es?: string;
}

export interface Insight {
  title: string;
  title_es?: string;
  text: string;
  text_es?: string;
}

export interface DigitalProduct {
  title: string;
  title_es?: string;
  description?: string;
  description_es?: string;
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
  videos?: { title: string; src: string; aspect: '16/9' | '9/16' }[];
  cardBg?: string;
  cardLogoMode?: boolean;
  meta: {
    role: string;
    timeline: string;
    team: string;
    advisors?: string;
  };
  description: string;
  descriptionEs?: string;
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
      "Sole, a Peruvian appliance brand, needed to reposition itself in the physical retail space. I led the transformation of a saturated showroom into an omnichannel experience.",
    descriptionEs:
      "Sole, marca peruana de electrodomésticos, necesitaba reposicionarse en el espacio físico. Lideré la transformación de un showroom saturado en una experiencia omnicanal.",
    heroImage: "/projects/sole/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description: [
          "The project started with a co-creation session with key business stakeholders across different perspectives. We deepened our understanding of the target audience to map their main needs and friction points, using a scenario-persona storytelling methodology to define insights conceptually.",
          "The central challenge was clear: two brands, Sole and S•Collection, needed to coexist in the same physical space; each with a distinct user and distinct needs; yet both sharing the same aspiration: the kitchen of their dreams.",
        ],
        personas: [
          {
            tag: "USER PERSONA 1",
            avatar: "/projects/sole/persona-1.webp",
            description:
              "A practical and detail-oriented family man who shares his home with his wife, children, and an older relative. An omnichannel user who meticulously researches every price and technical specification online before visiting the store, ensuring a smart and lasting purchase that simplifies daily life for his family.",
            description_es:
              "Jefe de familia práctico y orientado al detalle que convive con su esposa, hijos y un familiar mayor. Usuario omnicanal que investiga meticulosamente precios y especificaciones técnicas online antes de visitar la tienda, garantizando una compra inteligente y duradera que simplifique la vida cotidiana de su familia.",
            quote:
              "I want efficient solutions for my home. I research extensively online because my family's trust and safety are non-negotiable.",
            quote_es:
              "Quiero soluciones eficientes para mi hogar. Me informo ampliamente online porque la confianza y seguridad de mi familia no son negociables.",
          },
          {
            tag: "USER PERSONA 2",
            avatar: "/projects/sole/persona-2.webp",
            description:
              "A professional with a sophisticated lifestyle and high aesthetic expectations, passionate about global interior design and gastronomy trends. She wants her kitchen to stop being a merely functional space and become a social and immersive ritual.",
            description_es:
              "Profesional con un estilo de vida sofisticado y altas expectativas estéticas, apasionada por las tendencias globales de diseño interior y gastronomía. Quiere que su cocina deje de ser un espacio meramente funcional y se convierta en un ritual social e inmersivo.",
            quote:
              "To me, the kitchen is the social heart of the home. I'm looking for an environment where premium technology is invisible and design takes center stage.",
            quote_es:
              "Para mí, la cocina es el corazón social del hogar. Busco un entorno donde la tecnología premium sea invisible y el diseño sea el protagonista.",
          },
        ],
        insights: [
          { title: "Decision Friction", title_es: "Fricción en la decisión", text: "In the appliance category, users don't abandon the purchase out of lack of interest, but due to cognitive overload; the physical overexposure of products in-store creates paralysis and makes it difficult to evaluate technical attributes.", text_es: "En la categoría de electrodomésticos, los usuarios no abandonan la compra por falta de interés, sino por sobrecarga cognitiva; la sobreexposición física de productos genera parálisis y dificulta evaluar los atributos técnicos." },
          { title: "Omnichannel Behavior", title_es: "Comportamiento omnicanal", text: "The mass consumer does not use the physical store as an initial discovery point, but rather as a validation node; they research digitally beforehand and visit the retail space to confirm textures, proportions, and confidence levels.", text_es: "El consumidor masivo no usa la tienda física como punto inicial de descubrimiento, sino como nodo de validación; investiga digitalmente y visita el retail para confirmar texturas, proporciones y niveles de confianza." },
          { title: "Purchase Closure", title_es: "Cierre de compra", text: "Projecting the product in the user's own space is the main conversion catalyst; when the customer cannot visualize the finish in their real context, perceived risk increases and the decision is postponed.", text_es: "Proyectar el producto en el espacio propio del usuario es el principal catalizador de conversión; cuando el cliente no puede visualizar el acabado en su contexto real, el riesgo percibido aumenta y la decisión se pospone." },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Digital Strategy",
        description:
          "I designed a virtual catalog with two distinct experiences for two completely different audiences. Sole and S•Collection coexist digitally but with differentiated journeys: Sole's centers on specifications, savings, and technical benefits, guiding the practical buyer toward a confident decision. S•Collection's centers on exploration and augmented visualization, allowing users to combine materials, colors, and textures to imagine their ideal kitchen before committing.",
        products: [
          { title: "Sole Technical Catalog", description: "Clear information architecture that prioritizes specifications, savings, and technical benefits for the practical buyer.", description_es: "Arquitectura de información clara que prioriza especificaciones, ahorros y beneficios técnicos para el comprador práctico.", image: "/projects/sole/digital-1.webp" },
          { title: "Product Detail & QR", description: "Interactive cards with dynamic QR codes per SKU connecting the physical display with extended information and purchase channels.", description_es: "Tarjetas interactivas con códigos QR dinámicos por SKU que conectan el exhibidor físico con información ampliada y canales de compra.", image: "/projects/sole/digital-2-a.webp", images: ["/projects/sole/digital-2-a.webp", "/projects/sole/digital-2-b.webp"] },
          { title: "Model Comparator", description: "Real-time interactive visualization to customize materials, colors, and finishes on the ideal kitchen before deciding.", description_es: "Visualización interactiva en tiempo real para personalizar materiales, colores y acabados de la cocina ideal antes de decidir.", image: "/projects/sole/digital-3-a.webp", images: ["/projects/sole/digital-3-a.webp", "/projects/sole/digital-3-b.webp"] },
          { title: "S•Collection Explorer", description: "Dark Mode interface that highlights the advanced technologies of the luxury line and integrates shortcuts to exclusive advisory services.", description_es: "Interfaz en Modo Oscuro que destaca las tecnologías avanzadas de la línea premium e integra accesos a servicios de asesoría exclusiva.", image: "/projects/sole/digital-4.webp" },
        ],
        insights: [
          { title: "Two profiles, one decision", title_es: "Dos perfiles, una decisión", text: "Sole's practical buyer seeks immediate technical certainty; S•Collection's customer seeks aesthetic inspiration and personalization.", text_es: "El comprador práctico de Sole busca certeza técnica inmediata; el cliente de S•Collection busca inspiración estética y personalización." },
          { title: "Segmentation that converts", title_es: "Segmentación que convierte", text: "A monolithic digital catalog generates confusion; segmenting the experience by buyer mindset doubles engagement.", text_es: "Un catálogo digital monolítico genera confusión; segmentar la experiencia por mentalidad de compra duplica el engagement." },
          { title: "See to decide", title_es: "Ver para decidir", text: "Augmented reality visualization reduces indecision by allowing users to try finishes and textures in real time before purchase.", text_es: "La visualización en realidad aumentada reduce la indecisión al permitir probar acabados y texturas en tiempo real antes de la compra." },
        ],
      },
      spatialBranding: {
        sectionNumber: "03",
        title: "Spatial Branding & Signage",
        description: [
          "During the audit, I identified that Sole's corporate blue had no strategic presence in the physical space. I repositioned it as a deliberate design decision: visible, elegant, and consistent across all touchpoints. S•Collection sustains its own visual territory through grays and blacks.",
          "The storytelling system was complemented by QR codes that activate product-specific flows, enabling conversion tracking and first-party data for smarter placement decisions. The iconographic system was designed to be visually distinct between both brands, communicating elegance through minimalism and information hierarchy.",
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
      "The problem was never a lack of content. It was the anxiety of not knowing whether you're learning the right thing, in the right order, fast enough.",
    descriptionEs:
      "El problema nunca fue la falta de contenido. Fue la ansiedad de no saber si estás aprendiendo lo correcto, en el orden correcto, lo suficientemente rápido.",
    heroImage: "/projects/root/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description: [
          "We started by looking at who had the most motivation to learn and the most obstacles to doing so. Adults between 25 and 44 always came up: high willingness, high barriers. A former translator afraid that AI had made her obsolete. A UX designer who needed to stay current but couldn't find a course that fit her real schedule. Both motivated. Both stuck.",
          "The pivot came when we stopped asking why people don't learn more and started asking why people can't manage their own learning. That single shift in focus changed everything.",
        ],
        insights: [
          { title: "Visual Differentiation", title_es: "Diferenciación visual", text: "In markets saturated by generic minimalist aesthetics, embracing local identity and culture becomes the main asset for differentiation and cultural relevance.", text_es: "En mercados saturados por estéticas minimalistas genéricas, adoptar la identidad y cultura local se convierte en el principal activo de diferenciación y relevancia cultural." },
          { title: "Emotional Connection", title_es: "Conexión emocional", text: "Contemporary audiences do not connect with static brands; they seek living proposals whose personality can manifest consistently yet flexibly across physical, digital, and editorial channels.", text_es: "Las audiencias contemporáneas no conectan con marcas estáticas; buscan propuestas vivas cuya personalidad se manifieste de forma consistente pero flexible en canales físicos, digitales y editoriales." },
          { title: "Spatial Transition", title_es: "Transición espacial", text: "The touchpoint with the exterior (the street) demands high-impact, fast-traction communication, while the interior space must be designed for permanence, comfort, and brand immersion.", text_es: "El punto de contacto con el exterior (la calle) exige comunicación de alto impacto y tracción rápida, mientras el espacio interior debe diseñarse para la permanencia, el confort y la inmersión de marca." },
        ],
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Carmela, 41",
            avatar: "/projects/root/persona-1.webp",
            description:
              "Translator displaced by AI. Overwhelmed by options and paralyzed by the fear of making the wrong choice. The problem is not finding content; it's trusting the path.",
            description_es:
              "Traductora desplazada por la IA. Abrumada por las opciones y paralizada por el miedo a elegir mal. El problema no es encontrar contenido; es confiar en el camino.",
            quote:
              "There are so many options I don't know where to start, and I'm afraid of wasting time on the wrong path.",
            quote_es:
              "Hay tantas opciones que no sé por dónde empezar, y tengo miedo de perder el tiempo en el camino equivocado.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Fiorella, 30",
            avatar: "/projects/root/persona-2.webp",
            description:
              "UX designer who needs efficiency above all. Most platforms are too generic to adapt to her specific needs and limited time.",
            description_es:
              "Diseñadora UX que necesita eficiencia ante todo. La mayoría de plataformas son demasiado genéricas para adaptarse a sus necesidades específicas y tiempo limitado.",
            quote:
              "I have very little time and most platforms aren't designed for what I actually need.",
            quote_es:
              "Tengo muy poco tiempo y la mayoría de plataformas no están diseñadas para lo que realmente necesito.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Digital Strategy",
        description:
          "ROOT is built around a single image: a knowledge garden where lessons grow at your own pace and nothing is forced. Every design decision returned to three things: motivation (no pressure, just progress), organization (a clear path, not an open field), and entertainment; because learning that feels like homework gets abandoned. The moment that told us it was working: users saw their generated route for the first time and said 'this makes sense for me.' That was the Aha moment around which we designed everything.",
        products: [
          { title: "Learning Dashboard", description: "Entry experience based on the metaphor of a visual garden, where users cultivate their knowledge at their own pace without the pressure of traditional learning.", description_es: "Experiencia de entrada basada en la metáfora de un jardín visual, donde los usuarios cultivan su conocimiento a su propio ritmo sin la presión del aprendizaje tradicional.", image: "/projects/root/digital-1.webp" },
          { title: "Conversational Onboarding", description: "A warm, personalized flow that asks the user 'What do you want to learn?', suggesting topics or allowing them to write any interest with AI assistance to build their unique path.", description_es: "Un flujo cálido y personalizado que pregunta al usuario '¿Qué quieres aprender?', sugiriendo temas o permitiendo escribir cualquier interés con asistencia de IA para construir su camino único.", image: "/projects/root/digital-2-a.webp", images: ["/projects/root/digital-2-a.webp", "/projects/root/digital-2-b.webp"] },
          { title: "Route & Units Generator", description: "The AI engine structures personalized modules and lessons based on the user's interests, allowing them to select or adjust the units of their study plan in seconds.", description_es: "El motor de IA estructura módulos y lecciones personalizadas según los intereses del usuario, permitiéndole seleccionar o ajustar las unidades de su plan de estudio en segundos.", image: "/projects/root/digital-3-a.webp", images: ["/projects/root/digital-3-a.webp", "/projects/root/digital-3-b.webp"] },
          { title: "Gamification & Rewards", description: "An organic incentive system where completing lessons makes 'flowers and orchids' grow in the user's garden, celebrating milestones and learning streaks without pressure or judgment.", description_es: "Un sistema de incentivos orgánico donde completar lecciones hace crecer 'flores y orquídeas' en el jardín del usuario, celebrando hitos y rachas de aprendizaje sin presión ni juicio.", image: "/projects/root/digital-4.webp" },
        ],
        insights: [
          { title: "The garden as metaphor", title_es: "El jardín como metáfora", text: "A visual system based on organic growth (a knowledge garden) conveys calm rather than the pressure of a checklist.", text_es: "Un sistema visual basado en el crecimiento orgánico (un jardín de conocimiento) transmite calma en lugar de la presión de una lista de tareas." },
          { title: "Micro-goals without guilt", title_es: "Micro-objetivos sin culpa", text: "Self-managed learning requires micro-measurable goals that celebrate daily progress without generating guilt for pauses.", text_es: "El aprendizaje autogestionado requiere micro-objetivos medibles que celebren el progreso diario sin generar culpa por las pausas." },
          { title: "The Aha moment", title_es: "El momento Aha", text: "The 'Aha' moment occurs when the user sees their personalized route generated and feels the platform understands their real context.", text_es: "El momento 'Aha' ocurre cuando el usuario ve su ruta personalizada generada y siente que la plataforma entiende su contexto real." },
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
      "Luxury Andean retail experience that articulates textile heritage, technological innovation, and spatial design to connect with the global consumer.",
    descriptionEs:
      "Experiencia de retail de lujo andino que articula patrimonio textil, innovación tecnológica y diseño espacial para conectar con el consumidor global.",
    heroImage: "/projects/kuna/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description: [
          "I led a research process to deepen understanding of KUNA's user personas and conducted a category analysis to identify business opportunities and strategic positioning within the physical space. Design Thinking co-creation workshops, combined with research findings, shaped the direction.",
          "The experience was articulated around three strategic pillars: exploration, permanence, and loyalty. A key insight emerged clearly: in a luxury experience, the loyalty stage is the most critical. Technology and innovation needed to operate as an invisible layer, never competing with the product or the craftsmanship.",
        ],
        insights: [
          { title: "Value Perception", title_es: "Percepción de valor", text: "The modern luxury consumer does not seek merely to acquire a high-quality garment, but to connect with the origin and artisanal heritage behind the raw material.", text_es: "El consumidor moderno de lujo no busca meramente adquirir una prenda de alta calidad, sino conectar con el origen y el patrimonio artesanal detrás de la materia prima." },
          { title: "Navigation Pace", title_es: "Ritmo de navegación", text: "The premium traveler and shopper requires differentiated spatial itineraries: while the transactional profile values agility and clarity in the journey, the heritage profile demands pauses and layers of immersive editorial content.", text_es: "El viajero y comprador premium requiere itinerarios espaciales diferenciados: mientras el perfil transaccional valora la agilidad y claridad en el recorrido, el perfil patrimonial demanda pausas y capas de contenido editorial inmersivo." },
          { title: "Brand Coherence", title_es: "Coherencia de marca", text: "The promise of 'conscious luxury' fractures if there is a disconnect between the visual communication narrative and the materiality of the point of sale; the physical space must act as the tangible extension of the brand story.", text_es: "La promesa de 'lujo consciente' se fractura si existe una desconexión entre la narrativa de comunicación visual y la materialidad del punto de venta; el espacio físico debe actuar como extensión tangible de la historia de marca." },
        ],
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Lu Wei, 38",
            avatar: "/projects/kuna/persona-1.webp",
            description: "Executive tourist seeking cultural authenticity and vicuña fibers. Buys impulsively while traveling but requires validating quality by touch before deciding.",
            description_es: "Turista ejecutiva que busca autenticidad cultural y fibras de vicuña. Compra impulsivamente mientras viaja pero necesita validar la calidad al tacto antes de decidir.",
            quote: "I want to take home unique and sustainable pieces that reflect the origin and heritage of the country I'm visiting.",
            quote_es: "Quiero llevarme a casa piezas únicas y sostenibles que reflejen el origen y el patrimonio del país que visito.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Claudia, 46",
            avatar: "/projects/kuna/persona-2.webp",
            description: "Diplomatic supervisor and quiet luxury consumer. Seeks timeless elegance for work events and demands personalized attention befitting the high purchase ticket.",
            description_es: "Supervisora diplomática y consumidora de lujo silencioso. Busca elegancia atemporal para eventos laborales y exige atención personalizada acorde al alto ticket de compra.",
            quote: "If I invest in an exclusive alpaca piece, I expect both the garment and the in-store experience to be impeccable.",
            quote_es: "Si invierto en una pieza exclusiva de alpaca, espero que tanto la prenda como la experiencia en tienda sean impecables.",
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
          "I designed four digital experiences to address specific business objectives and generate engagement at each touchpoint within the physical store. The Lifestyle Club turns loyalty into access, rewarding returning customers with genuinely exclusive spaces and benefits. Artistic Experience KUNA connects ancestral craftsmanship with the immediacy of the modern traveler. Express KUNA Service gives national and international visibility to ancestral techniques and contemporary Peruvian artists. And Garment Care reframes the purchase as the beginning of a relationship, not the end of one.",
        products: [
          { title: "Garment Care", description: "Personalized post-sale care and maintenance guide based on the type of garment and selected textile fiber (Alpaca, Vicuña, Pima).", description_es: "Guía personalizada de cuidado y mantenimiento post-venta basada en el tipo de prenda y la fibra textil seleccionada (Alpaca, Vicuña, Pima).", image: "/projects/kuna/digital-1.webp" },
          { title: "Lifestyle Club", description: "A profiling questionnaire that turns loyalty into a personalized experience, recommending collections based on user preferences.", description_es: "Cuestionario de perfilado que convierte la lealtad en una experiencia personalizada, recomendando colecciones según las preferencias del usuario.", image: "/projects/kuna/digital-2-a.webp", images: ["/projects/kuna/digital-2-a.webp", "/projects/kuna/digital-2-b.webp"] },
          { title: "Express KUNA Service", description: "Agile service designed for the modern traveler seeking curated gifts and quick purchase advice without losing the brand's exclusivity.", description_es: "Servicio ágil diseñado para el viajero moderno que busca regalos curados y asesoría de compra rápida sin perder la exclusividad de la marca.", image: "/projects/kuna/digital-3-a.webp", images: ["/projects/kuna/digital-3-a.webp", "/projects/kuna/digital-3-b.webp"] },
          { title: "Artistic Experience KUNA", description: "Space dedicated to decorative art pieces and ancestral techniques that showcase the work of Peruvian craftspeople and contemporary artists.", description_es: "Espacio dedicado a piezas de arte decorativo y técnicas ancestrales que exhiben el trabajo de artesanos peruanos y artistas contemporáneos.", image: "/projects/kuna/digital-4.webp" },
        ],
        insights: [
          { title: "Loyalty as co-creation", title_es: "Lealtad como cocreación", text: "The Lifestyle Club turns loyalty into exclusive access, making frequent customers feel like co-creators of the brand.", text_es: "El Lifestyle Club convierte la lealtad en acceso exclusivo, haciendo que los clientes frecuentes se sientan cocreadores de la marca." },
          { title: "Origin as experience", title_es: "El origen como experiencia", text: "Artistic Experience KUNA connects the modern traveler with the origin of the fiber through immersive digital narratives at the point of sale.", text_es: "Artistic Experience KUNA conecta al viajero moderno con el origen de la fibra a través de narrativas digitales inmersivas en el punto de venta." },
          { title: "The purchase as a beginning", title_es: "La compra como inicio", text: "The Garment Care service transforms the final purchase into the beginning of a lasting bond of garment care and maintenance.", text_es: "El servicio Garment Care transforma la compra final en el inicio de un vínculo duradero de cuidado y mantenimiento de la prenda." },
        ],
      },
      spatialBranding: {
        sectionNumber: "04",
        title: "Spatial Branding & Signage",
        description: [
          "I introduced a spatial branding system built around detail: simplified logo versions integrated into furniture and mirrors, an editorial-style signage system, and a strategic use of red to signal special price moments.",
          "QR codes were integrated at key points, activating specific campaign flows. The composition throughout the space is kept deliberately clean: hierarchy over decoration, intention over saturation.",
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
      "A complete brand and digital transformation for a 16-year strategic design firm. The work spanned identity, narrative, and digital product.",
    descriptionEs:
      "Una transformación completa de marca y digital para una firma de diseño estratégico de 16 años. El trabajo abarcó identidad, narrativa y producto digital.",
    heroImage: "/projects/modulor/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description: [
          "Modulor needed to evolve from an established local consultancy to a strategic design firm with global positioning. The challenge: translating 16 years of expertise into a digital presence capable of speaking to three very different audiences simultaneously, without losing coherence.",
          "Modulor's positioning gap was narrative. The firm had the expertise; what it lacked was a digital ecosystem capable of carrying that expertise to three distinct audiences without losing what made it singular.",
        ],
        insights: [
          { title: "Strategic Alignment", title_es: "Alineación estratégica", text: "A visual rebrand has no business impact if it is not backed by a deep restructuring of information architecture and the usability of its digital platforms.", text_es: "Un rebranding visual no tiene impacto de negocio si no está respaldado por una reestructuración profunda de la arquitectura de información y la usabilidad de sus plataformas digitales." },
          { title: "Product Scalability", title_es: "Escalabilidad del producto", text: "The dispersion of brand assets across digital environments generates inconsistency and hinders adoption by stakeholders; unifying into a dynamic design system is indispensable for competing globally.", text_es: "La dispersión de activos de marca en entornos digitales genera inconsistencia y dificulta la adopción por los stakeholders; unificar en un sistema de diseño dinámico es indispensable para competir globalmente." },
          { title: "B2B/B2C Conversion Friction", title_es: "Fricción de conversión B2B/B2C", text: "Visual sophistication must be balanced with functional intuition; an interface overloaded with aesthetics but weak in information hierarchy increases abandonment rates at key funnel stages.", text_es: "La sofisticación visual debe equilibrarse con la intuición funcional; una interfaz sobrecargada estéticamente pero débil en jerarquía de información aumenta las tasas de abandono en etapas clave del funnel." },
        ],
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Sofía, 39",
            avatar: "/projects/modulor/persona-1.webp",
            description: "Seeks to standardize stores, scale quickly, and see visible results. Moves through LinkedIn, industry events, and specialized media, motivated by competitive positioning.",
            description_es: "Busca estandarizar tiendas, escalar rápido y ver resultados visibles. Se mueve en LinkedIn, eventos del sector y medios especializados, motivada por el posicionamiento competitivo.",
            quote: "I need a strategic partner that allows me to standardize and scale our points of sale without losing speed or quality in execution.",
            quote_es: "Necesito un socio estratégico que me permita estandarizar y escalar nuestros puntos de venta sin perder velocidad ni calidad en la ejecución.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Mateo, 35",
            avatar: "/projects/modulor/persona-2.webp",
            description: "Focused on quality, innovation, and brand image modernization. Values human content and cultural transformation, but navigates between internal bureaucracy and complex supplier management.",
            description_es: "Enfocado en calidad, innovación y modernización de imagen de marca. Valora el contenido humano y la transformación cultural, pero navega entre la burocracia interna y la gestión compleja de proveedores.",
            quote: "We seek to transform our visual presence and innovate in the customer experience, overcoming internal and operational obstacles.",
            quote_es: "Buscamos transformar nuestra presencia visual e innovar en la experiencia del cliente, superando obstáculos internos y operacionales.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Digital Strategy & Brand",
        description: [
          "The digital strategy operates through two conversion layers: the Insights channel builds a qualified audience of decision-makers through content and newsletter capture, while the contact flow directs each audience to the right service (Office Architecture, Phygital, or Business) before a single call is made.",
          "The rebrand uses an intense purple that distinguishes Modulor from the corporate grey aesthetic of regional consultancies. Together with a clean geometric logo, the system positions Modulor as something distinct from the firms it competes with.",
        ],
        products: [
          { title: "Main Website & Lead Capture", description: "Powerful visual identity based on manifesto phrases and corporate purple tone. Integrates strategic subscription forms (lead capture) to connect with key clients in the design and retail industry.", description_es: "Identidad visual potente basada en frases manifiesto y tono corporativo púrpura. Integra formularios de suscripción estratégicos (captación de leads) para conectar con clientes clave del sector diseño y retail.", image: "/projects/modulor/digital-1-a.webp", images: ["/projects/modulor/digital-1-a.webp", "/projects/modulor/digital-1-b.webp"] },
          { title: "Project Portfolio & UI System", description: "Display of success cases (Joma, Converse, Vision Center) organized through a clear component system, with optimized visual hierarchy and an interactive button color system.", description_es: "Exhibición de casos de éxito (Joma, Converse, Vision Center) organizados mediante un sistema de componentes claro, con jerarquía visual optimizada y un sistema interactivo de colores de botones.", image: "/projects/modulor/digital-2-a.webp", images: ["/projects/modulor/digital-2-a.webp", "/projects/modulor/digital-2-b.webp"] },
          { title: "Services & Featured Projects", description: "Visual structure based on a geometric iconography system and service cards (Consulting, Retail Strategy, Training), leading into a gallery of visual covers of high-impact projects.", description_es: "Estructura visual basada en un sistema de iconografía geométrica y tarjetas de servicio (Consultoría, Estrategia Retail, Training), que conduce a una galería de portadas visuales de proyectos de alto impacto.", image: "/projects/modulor/digital-3.webp", desktop: true },
          { title: "Impact Covers & Innovative Photography", description: "Desktop editorial design using two large covers per page, backed by bold conceptual art-direction photography to convey the firm's culture and innovation.", description_es: "Diseño editorial para desktop usando dos grandes portadas por página, respaldadas por fotografía conceptual de dirección de arte atrevida para transmitir la cultura e innovación de la firma.", image: "/projects/modulor/digital-4.webp", desktop: true },
        ],
        insights: [
          { title: "Content that qualifies", title_es: "Contenido que califica", text: "The Insights channel qualifies the executive audience before first contact, building brand authority.", text_es: "El canal de Insights califica a la audiencia ejecutiva antes del primer contacto, construyendo autoridad de marca." },
          { title: "Smart flow by profile", title_es: "Flujo inteligente por perfil", text: "Directing the conversion flow by client type optimizes business meetings and accelerates proposal closing.", text_es: "Dirigir el flujo de conversión por tipo de cliente optimiza las reuniones de negocio y acelera el cierre de propuestas." },
          { title: "Scale without losing rigor", title_es: "Escalar sin perder rigor", text: "A solid web component system allows scaling case studies while maintaining visual consistency without additional effort.", text_es: "Un sólido sistema de componentes web permite escalar casos de estudio manteniendo consistencia visual sin esfuerzo adicional." },
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
      "A sensory and digital pop-up to transform specialty coffee discovery into an interactive ritual for university students.",
    descriptionEs:
      "Pop-up sensorial y digital para convertir el descubrimiento de café de especialidad en un ritual interactivo para universitarios.",
    heroImage: "/projects/don-salazar/cover.webp",
    sections: {
      research: {
        sectionNumber: "01",
        title: "Research & Strategy",
        description: [
          "The challenge was to transform the habitual, unreflective coffee purchase at the shopping center into an active, interactive learning moment for young university students.",
          "We identified that intimidation from not knowing specialty coffee jargon was blocking exploration. We designed a frictionless flow that guides users based on their taste preferences and available time.",
        ],
        insights: [
          { title: "Category Education", title_es: "Educación de categoría", text: "The specialty coffee consumer wants to explore new varieties and preparation methods, but feels intimidated by the technical and elitist language of the specialty.", text_es: "El consumidor de café de especialidad quiere explorar nuevas variedades y métodos de preparación, pero se siente intimidado por el lenguaje técnico y elitista de la especialidad." },
          { title: "Community-Based Loyalty", title_es: "Fidelización basada en comunidad", text: "Ephemeral interactions in a pop-up format only generate long-term commercial value if they include active participation mechanisms that turn the visit into a sense of belonging.", text_es: "Las interacciones efímeras en formato pop-up solo generan valor comercial a largo plazo si incluyen mecanismos de participación activa que conviertan la visita en un sentido de pertenencia." },
          { title: "Data-Driven Design", title_es: "Diseño basado en datos", text: "Self-discovery digital tools in the physical space not only improve the personalization of the user experience, but also function as a first-party data collection channel for the brand.", text_es: "Las herramientas digitales de autodescubrimiento en el espacio físico no solo mejoran la personalización de la experiencia, sino que también funcionan como canal de recopilación de datos de primera mano para la marca." },
        ],
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Mateo Reyes, 20",
            avatar: "/projects/don-salazar/persona-1.webp",
            description:
              "University student who passes through the mall daily. Orders by habit, not by choice. Curious about specialty coffee but intimidated by not knowing what to order.",
            description_es:
              "Estudiante universitario que pasa por el mall diariamente. Pide por hábito, no por elección. Curioso sobre el café de especialidad pero intimidado por no saber qué pedir.",
            quote:
              "I don't know what to order beyond my usual and I don't want to look like I don't know what I'm doing.",
            quote_es:
              "No sé qué pedir más allá de mi habitual y no quiero parecer que no sé lo que hago.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Camila Ortiz, 23",
            avatar: "/projects/don-salazar/persona-2.webp",
            description:
              "Coffee enthusiast who follows specialty accounts and actively seeks new cafés. Has the knowledge but needs a quick learning and memorable experience.",
            description_es:
              "Entusiasta del café que sigue cuentas de especialidad y busca activamente nuevas cafeterías. Tiene el conocimiento pero necesita una experiencia de aprendizaje rápida y memorable.",
            quote:
              "I want a coffee that teaches me something, not just serves it to me.",
            quote_es:
              "Quiero un café que me enseñe algo, no que solo me lo sirva.",
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
          "I designed four digital touchpoints that accompany the visitor from discovery to loyalty, transforming the pop-up visit into the start of a relationship with the brand.",
          "Each screen responds to a specific moment in the journey: exploration of origin, order personalization, education about the roasting process, and connection with the coffee community.",
        ],
        products: [
          { title: "Origin Explorer", description: "Welcome landing that connects the user with the world of 100% Peruvian specialty coffee, inviting them to discover their ideal profile from the start of the experience.", description_es: "Landing de bienvenida que conecta al usuario con el mundo del café de especialidad 100% peruano, invitándolo a descubrir su perfil ideal desde el inicio de la experiencia.", image: "/projects/don-salazar/digital-1.webp" },
          { title: "Profiling Test & Personalization", description: "Interactive flow that asks 'What kind of coffee lover are you?' and allows selecting intensity and tasting notes to tailor the suggestion to each customer's specific taste.", description_es: "Flujo interactivo que pregunta '¿Qué tipo de amante del café eres?' y permite seleccionar intensidad y notas de cata para adaptar la sugerencia al gusto específico de cada cliente.", image: "/projects/don-salazar/digital-2-a.webp", images: ["/projects/don-salazar/digital-2-a.webp", "/projects/don-salazar/digital-2-b.webp"] },
          { title: "Methods & Cup Guide", description: "Interactive module that allows choosing the extraction method (Chemex, Aeropress, etc.) and the ideal cup, demystifying the brewing process with clear visual recommendations.", description_es: "Módulo interactivo que permite elegir el método de extracción (Chemex, Aeropress, etc.) y la taza ideal, desmitificando el proceso de preparación con recomendaciones visuales claras.", image: "/projects/don-salazar/digital-3-a.webp", images: ["/projects/don-salazar/digital-3-a.webp", "/projects/don-salazar/digital-3-b.webp"] },
          { title: "Digital Ticket & Loyalty", description: "Immediate order confirmation with a service ticket and access to the community via QR code, closing the purchase flow and promoting complementary products from the catalog.", description_es: "Confirmación inmediata del pedido con ticket de servicio y acceso a la comunidad vía código QR, cerrando el flujo de compra y promoviendo productos complementarios del catálogo.", image: "/projects/don-salazar/digital-4.webp" },
        ],
        insights: [
          { title: "Specialty without barriers", title_es: "Especialidad sin barreras", text: "A taste-profile guided ordering flow (sweet, acidic, fruity) democratizes specialty without technical jargon.", text_es: "Un flujo de pedido guiado por perfil de sabor (dulce, ácido, frutal) democratiza la especialidad sin jerga técnica." },
          { title: "Digital that drives virality", title_es: "Digital que impulsa viralidad", text: "Digital interaction in the pop-up encourages quick learning and generates shareable content on social media.", text_es: "La interacción digital en el pop-up fomenta el aprendizaje rápido y genera contenido compartible en redes sociales." },
          { title: "Recurrence through referral", title_es: "Recurrencia por referido", text: "Personalized recommendation codes incentivize recurrence among groups of study peers.", text_es: "Los códigos de recomendación personalizados incentivan la recurrencia entre grupos de compañeros de estudio." },
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
      "S•Collection is the premium line of Grupo Sole, seeking to position itself in the market as a luxury brand. Through a brand audit, we gave it a look refresh communicating innovation and premiumness.",
    descriptionEs:
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
          "The strategy was built around three pillars: Visual Identity, Audience, and Product, evaluated from the perspectives of Brand Experience, Design, and Innovation. The visual system communicates elegance through restraint.",
          "Connecting with the audience required an omnichannel ecosystem anchored in emotional resonance. And the product layer demanded that technology and craftsmanship be showcased through iconography, immersive content, and sensory photography that sells the experience, not just the appliance.",
        ],
        insights: [
          { title: "Luxury through restraint", title_es: "Lujo a través de la contención", text: "Contemporary luxury is not communicated by overwhelming the space, but through restraint and rigor in detail.", text_es: "El lujo contemporáneo no se comunica abrumando el espacio, sino a través de la contención y el rigor en el detalle." },
          { title: "Technology as art", title_es: "Tecnología como arte", text: "Emotionally connecting with the premium buyer requires treating home technology as an integrated piece of art.", text_es: "Conectar emocionalmente con el comprador premium requiere tratar la tecnología del hogar como una pieza de arte integrada." },
          { title: "Selling the lifestyle", title_es: "Vender el estilo de vida", text: "Sensory photography and clean iconography sell the lifestyle before the individual appliance.", text_es: "La fotografía sensorial y la iconografía limpia venden el estilo de vida antes que el electrodoméstico individual." },
        ],
        personas: [
          {
            tag: "USER PERSONA 1",
            title: "Valeria, 35",
            avatar: "/projects/scollection/persona-1.webp",
            description: "Team leader with a sophisticated and cosmopolitan lifestyle. Seeks to integrate high-end technology and open design into her home to project status as a hostess.",
            description_es: "Líder de equipo con un estilo de vida sofisticado y cosmopolita. Busca integrar tecnología de alta gama y diseño abierto en su hogar para proyectar estatus como anfitriona.",
            quote: "For me, the kitchen is the social center of the home; I look for products where premium technology and design speak for themselves.",
            quote_es: "Para mí, la cocina es el centro social del hogar; busco productos donde la tecnología premium y el diseño hablen por sí solos.",
          },
          {
            tag: "USER PERSONA 2",
            title: "Chabela, 42",
            avatar: "/projects/scollection/persona-2.webp",
            description: "Homemaker and decision-maker in household purchases who trusts Sole's quality. Seeks to renovate her space with efficient, modern-design appliances as a reward for her hard work.",
            description_es: "Ama de casa y tomadora de decisiones en compras del hogar que confía en la calidad de Sole. Busca renovar su espacio con electrodomésticos eficientes y de diseño moderno como recompensa por su esfuerzo.",
            quote: "I trust the brand's quality and want a modern kitchen that simplifies my family's daily life and looks incredible.",
            quote_es: "Confío en la calidad de la marca y quiero una cocina moderna que simplifique la vida diaria de mi familia y se vea increíble.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Art Direction & Brand",
        description: [
          "The digital ecosystem was designed from a single premise: every graphic had to feel as premium as the product itself. I built the design system first; button states in four variants, typographic hierarchy in Gilroy and component logic; so that visual consistency didn't depend on case-by-case decisions.",
          "The mobile content layer operates differently: short vertical formats for the SCo° app where storytelling leads over specifications, photography sells, and the interface steps aside.",
        ],
        products: [
          { title: "SCo° Visual System", description: "Buttons in four variants, Gilroy typography, and components with editorial consistency.", description_es: "Botones en cuatro variantes, tipografía Gilroy y componentes con consistencia editorial.", image: "/projects/scollection/spatial-1.webp" },
          { title: "SCo° Mobile App", description: "Vertical storytelling where photography sells and the interface steps aside.", description_es: "Storytelling vertical donde la fotografía vende y la interfaz se aparta.", image: "/projects/scollection/spatial-2.webp" },
          { title: "Premium Catalog", description: "Collection exploration with the elegance of a luxury magazine.", description_es: "Exploración de colección con la elegancia de una revista de lujo.", image: "/projects/scollection/spatial-3.webp" },
          { title: "Digital Signage", description: "Omnichannel signage system with QR codes and product-activated content.", description_es: "Sistema de señalética omnicanal con códigos QR y contenido activado por producto.", image: "/projects/scollection/spatial-4.webp" },
        ],
        insights: [
          { title: "The system reflects the brand", title_es: "El sistema refleja la marca", text: "Every graphic piece and UI component must maintain design standards as refined as the brand's products.", text_es: "Cada pieza gráfica y componente UI debe mantener estándares de diseño tan refinados como los productos de la marca." },
          { title: "Vertical for immersion", title_es: "Vertical para la inmersión", text: "The vertical format in the SCo° app favors immersive and tactile exploration on mobile devices.", text_es: "El formato vertical en la app SCo° favorece la exploración inmersiva y táctil en dispositivos móviles." },
          { title: "Modular without losing luxury", title_es: "Modular sin perder el lujo", text: "A modular design system with 4 variants ensures that marketing campaigns retain the luxury look & feel across any channel.", text_es: "Un sistema de diseño modular con 4 variantes garantiza que las campañas de marketing conserven el look & feel de lujo en cualquier canal." },
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
    client: "Yuyito, mass retail · 2024",
    subtitle: "Retail & Spatial Branding",
    category: ["Estrategia Branding", "Spatial Branding"],
    tags: ["RETAIL", "SPATIAL BRANDING", "STRATEGY"],
    meta: {
      role: "Brand & Spatial Design Consultant · competitive benchmarking, strategic layout, and omnichannel signage system.",
      timeline: "2024",
      team: "GrupoModulor Design Team.",
    },
    description:
      "Retail and spatial branding consultancy to position Yuyito as the preferred destination for all home needs, through an omnichannel system where signage, iconography, and layout work together.",
    descriptionEs:
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
          "The consulting strategy was built through a competitive benchmark (studying high-turnover retail models such as Dollarcity, Asia Sur, and Miniso) and a layout matrix articulated around three strategic axes: Store Experience, Categorization, and Interior Design, evaluated against Brand Identity, Audience, and Added Value.",
          "The main objective was to position Yuyito as 'the preferred destination for all home needs.' Connecting with the audience required moving away from aspirational messaging to communicate directly through functionality, price-quality ratio, and daily deals. To ensure fluidity in the physical space, the strategy considered a layout that facilitates continuous discovery, supported by a circuit of more than two strategically located checkout points to eliminate bottlenecks.",
        ],
        personas: [],
        insights: [
          { title: "Intuitive Navigation over Visual Overload", title_es: "Navegación intuitiva sobre la sobrecarga visual", text: "In high-turnover mass retail, users don't want to get lost in crowded aisles; they demand a clear categorization and iconic signage system that allows them to find what they need and discover new products without effort or visual paralysis.", text_es: "En el retail masivo de alta rotación, los usuarios no quieren perderse en pasillos saturados; exigen un sistema de categorización claro y señalética icónica que les permita encontrar lo que necesitan y descubrir nuevos productos sin esfuerzo ni parálisis visual." },
          { title: "Perceived Value through Functionality", title_es: "Valor percibido a través de la funcionalidad", text: "The convenience audience does not connect with aspirational or distant narratives; they evaluate the space through price-quality ratio, clarity of deals, and a direct experience that pragmatically validates their purchase decision.", text_es: "La audiencia de conveniencia no conecta con narrativas aspiracionales o distantes; evalúa el espacio a través de la relación precio-calidad, la claridad de las ofertas y una experiencia directa que valida pragmáticamente su decisión de compra." },
          { title: "Spatial Fluidity as a Friction or Loyalty Trigger", title_es: "Fluidez espacial como detonante de fricción o lealtad", text: "Customer satisfaction in-store is not defined solely by choosing a product, but at the exit point; implementing agile circuits with multiple checkout points transforms a quick purchase into a recurring habit.", text_es: "La satisfacción del cliente en tienda no se define únicamente al elegir un producto, sino en el punto de salida; implementar circuitos ágiles con múltiples puntos de pago transforma una compra rápida en un hábito recurrente." },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Art Direction & Brand Experience",
        description: [
          "The spatial and graphic concept of Yuyito was designed to radically differentiate from the competition through a memorable chromatic personality (a bet on purple and orange tones) and a language of oval shapes that responds to the logo's geometry.",
          "I built a spatial design system where materiality and iconography work together: a comprehensive signage and iconography system optimizes category navigation within the store, while key areas such as campaign corners boost commercial traction throughout the year. The layout architecture not only organizes the mass offering, but transforms the journey into a quick, dynamic, and visually coherent discovery experience at every touchpoint.",
        ],
        products: [],
      },
    },
  },

  // ─────────────────────────────────────────
  // OECHSLE CAMPAIGNS
  // ─────────────────────────────────────────
  {
    id: "oechsle-campaigns",
    slug: "oechsle-campaigns",
    title: "Oechsle Campaigns",
    client: "Oechsle · 2023",
    subtitle: "Content Strategy & Creative Direction",
    category: ["Estrategia Branding"],
    tags: ["CONTENT STRATEGY", "CREATIVE DIRECTION", "SOCIAL REELS"],
    meta: {
      role: "Content Strategist & Creative Director · creative direction of seasonal campaigns, POV video production, and Reels for digital platforms.",
      timeline: "2023",
      team: "Fahrenheit DDB.",
    },
    description:
      "Development of multimedia content strategy and creative direction for Oechsle's seasonal campaigns. The approach combined dynamic POV visual narrative to amplify product value on digital platforms and the production of Reels optimized for attention capture and social interaction.",
    descriptionEs:
      "Desarrollo de estrategia de contenido multimedia y dirección creativa para campañas estacionales de Oechsle. El enfoque combinó narrativa visual dinámica en formato POV para amplificar el valor del producto en plataformas digitales y la producción de Reels optimizados para captura de atención e interacción social.",
    heroImage: "/projects/oechsle-campaigns/cover.webp",
    videos: [
      { title: "POV Campaign 01",     src: "/projects/oechsle-campaigns/video-pov-1.mp4", aspect: "16/9" },
      { title: "POV Campaign 02",     src: "/projects/oechsle-campaigns/video-pov-2.mp4", aspect: "16/9" },
      { title: "Reel Commercial 01",  src: "/projects/oechsle-campaigns/reel-1.mp4",      aspect: "9/16" },
      { title: "Reel Commercial 02",  src: "/projects/oechsle-campaigns/reel-2.mp4",      aspect: "9/16" },
    ],
    sections: {
      research: {
        sectionNumber: "01",
        title: "Strategy & Creative Direction",
        description: [
          "Development of multimedia content strategy and creative direction for Oechsle's seasonal campaigns. The approach combined dynamic POV visual narrative to amplify product value on digital platforms.",
          "Reel production was optimized for attention capture and social interaction, with vertical formats designed for mobile and product narrative in under 15 seconds.",
        ],
        personas: [],
        insights: [],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Campaign Content & Social Reels",
        description: [],
        products: [],
      },
    },
  },

  // ─────────────────────────────────────────
  // SALTA
  // ─────────────────────────────────────────
  {
    id: "salta",
    slug: "salta",
    title: "SALTA",
    client: "SALTA, urban fusion fine dining · 2024",
    subtitle: "Brand Strategy & Identity",
    category: ["Estrategia Branding"],
    tags: ["BRANDING", "IDENTITY", "GASTRONOMY"],
    meta: {
      role: "Brand Strategist & Creative Director · brand strategy, visual identity, and photography direction for a Chinese-Peruvian fusion gastronomic proposal.",
      timeline: "2024",
      team: "GrupoModulor Design Team.",
    },
    description:
      "SALTA's proposal is born from the encounter between two ancient cultures: when they collide, they ignite a transformative spark that redefines gastronomic identity. Fire is the throughline; the catalyst where Eastern heritage and native ingredients meet to celebrate a living, energetic, and contemporary culinary mastery.",
    descriptionEs:
      "La propuesta de SALTA nace del encuentro entre dos culturas milenarias: cuando colisionan, encienden una chispa transformadora que redefine la identidad gastronómica. El fuego es hilo conductor; el catalizador donde la herencia oriental y los insumos nativos se encuentran para celebrar una maestría culinaria viva, enérgica y contemporánea.",
    heroImage: "/projects/salta/cover.webp",
    spatialImages: [
      "/projects/salta/spatial-1.webp",
      "/projects/salta/spatial-2.webp",
      "/projects/salta/spatial-3.webp",
      "/projects/salta/spatial-4.webp",
      "/projects/salta/spatial-5.webp",
    ],
    sections: {
      research: {
        sectionNumber: "01",
        title: "Brand Strategy",
        description: [
          "SALTA's proposal is born from the encounter between two ancient cultures: when they collide, they ignite a transformative spark that redefines gastronomic identity. We understand fusion as the living flash of the flambé, where the mastery of the wok and the skill of the sauté elevate ingredients to center stage.",
          "More than a cooking method, fire is our throughline and the symbol that unites us; the catalyst where Eastern heritage and our native ingredients meet to celebrate a living, energetic, and contemporary culinary mastery.",
        ],
        personas: [],
        insights: [
          {
            title: "Mastery of Craft",
            title_es: "Maestría del oficio",
            text: "Ancestral technique executed with precision to consolidate brand presence and authority in every preparation.",
            text_es: "Técnica ancestral ejecutada con precisión para consolidar la presencia y autoridad de la marca en cada preparación.",
          },
          {
            title: "Excellence in Detail",
            title_es: "Excelencia en el detalle",
            text: "Rigor across the entire value chain: from mise en place and ingredient quality to service attention and ritual.",
            text_es: "Rigor en toda la cadena de valor: desde el mise en place y la calidad de los ingredientes hasta la atención al servicio y el ritual.",
          },
          {
            title: "Communion of Fused Fire",
            title_es: "Comunión del fuego fusionado",
            text: "A meeting where the technical mastery of the Chinese wok embraces Peruvian seasoning to be experienced as a group and community.",
            text_es: "Un encuentro donde la maestría técnica del wok chino abraza el sazón peruano para vivirse en grupo y comunidad.",
          },
        ],
      },
      digitalStrategy: {
        sectionNumber: "02",
        title: "Art Direction & Brand Experience",
        description: [
          "SALTA's visual identity translates the energy of fire and the gestures of the wok into a dynamic and contemporary graphic language. Through an intense color palette, character-driven typography, and a photographic direction that captures the live sauté ritual, the brand builds a sophisticated sensory universe that celebrates urban fusion fine dining.",
        ],
        products: [],
      },
    },
  },
];
