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
    description:
      'Cuando el barrio inspira, el diseño se vuelve cultura. Proyecto integral de branding que abarca identidad visual y dirección de arte aplicados en materiales físicos, digitales e impresos.',
    tags: ['Branding', 'Spatial Branding'],
    cover: '/covers/kinta.png',
    image: A('a4c0394cb84cc035bec1a4a814f268400f0f7ceb.png'),
    gallery: g('/covers/kinta.png', 'kinta', 4),
  },
  {
    id: 'cafe-don-salazar',
    title: 'Café Don Salazar',
    subtitle: 'Service Design',
    year: '2024',
    description:
      'El proyecto propone una experiencia pop-up diseñada bajo un enfoque de Service Design, donde el espacio físico se convierte en el canal principal de interacción entre la marca y su audiencia.',
    tags: ['Service Design', 'Spatial Branding', 'Product Design'],
    cover: '/covers/don-salazar.png',
    image: A('bd3da450f72a2adc8c7d9a4185a000c0a6bb7d12.png'),
    gallery: g('/covers/don-salazar.png', 'cafe-don-salazar', 9),
  },
  {
    id: 'sole',
    title: 'SOLE',
    subtitle: 'CX y Omnicanalidad',
    year: '2024',
    description:
      'Diseño de experiencia omnicanal centrada en el cliente. Integración de touchpoints físicos y digitales para construir una experiencia de marca coherente.',
    tags: ['Service Design', 'Product Design', 'Spatial Branding'],
    cover: '/covers/sole.png',
    image: A('7134ded3236332d772a732d32ed0bae73877311c.png'),
    gallery: g('/covers/sole.png', 'sole', 8),
  },
  {
    id: 'modulor',
    title: 'Modulor',
    subtitle: 'Web End to End',
    year: '2023',
    description:
      'Lideré la transformación completa de Modulor, desde el rebranding de su identidad visual hasta el despliegue de su nueva plataforma digital.',
    tags: ['Product Design', 'Branding', 'Project Manager'],
    cover: '/covers/modulor.png',
    video: V('bb27fad4b9d586bb62d8dc9440261faaf965d935'),
    image: A('1245f94e5a40c7ef21810cbd4273674df06d0a44.png'),
    gallery: [],
  },
  {
    id: 'kuna',
    title: 'Kuna',
    subtitle: 'Branding',
    year: '2024',
    description:
      'Identidad visual completa para una marca de moda con raíces andinas. Sistema de marca que equilibra herencia cultural con estética contemporánea.',
    tags: ['Branding', 'Art Direction'],
    cover: '/covers/kuna.png',
    image: '/covers/kuna.png',
    gallery: [],
  },
  {
    id: 'marea',
    title: 'Marea',
    subtitle: 'Experience Design',
    year: '2023',
    description:
      'Diseño de experiencia para un espacio gastronómico frente al mar. Concepto espacial e identidad visual que captura la esencia del litoral.',
    tags: ['Experience Design', 'Spatial Branding'],
    cover: '/covers/marea.png',
    image: '/covers/marea.png',
    gallery: g('/covers/marea.png', 'marea', 7),
  },
  {
    id: 's-collection',
    title: 'S. Collection',
    subtitle: 'Art Direction',
    year: '2024',
    description:
      'Dirección de arte para colección de moda. Concepto editorial, selección de locaciones, casting y producción fotográfica.',
    tags: ['Art Direction', 'Fashion'],
    cover: '/covers/s-collection.png',
    image: '/covers/s-collection.png',
    gallery: [],
  },
  {
    id: 'yuyito',
    title: 'Yuyito',
    subtitle: 'Branding & Espacial',
    year: '2023',
    description:
      'Proyecto de branding e interiorismo para restaurante de cocina peruana contemporánea. La identidad visual dialoga con el diseño del espacio.',
    tags: ['Branding', 'Spatial Branding'],
    cover: '/covers/yuyito.png',
    image: '/covers/yuyito.png',
    gallery: g('/covers/yuyito.png', 'yuyito', 3),
  },
  {
    id: 'enter-the-beyond',
    title: 'Enter The Beyond',
    subtitle: 'Motion & Art Direction',
    year: '2024',
    description:
      'Proyecto de motion design y dirección de arte para una experiencia inmersiva. Narrativa visual que transporta al espectador a un universo propio.',
    tags: ['Motion', 'Art Direction'],
    cover: '/covers/enter-the-beyond.png',
    image: '/covers/enter-the-beyond.png',
    gallery: g('/covers/enter-the-beyond.png', 'enter-the-beyond', 4),
  },
]

export function getProject(id) {
  return projects.find((p) => p.id === id) ?? null
}
