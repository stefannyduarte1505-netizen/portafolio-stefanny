const BASE = 'https://portafoliostefduarte.figma.site'
const A = (hash) => `${BASE}/_assets/v11/${hash}`
const V = (hash) => `${BASE}/_videos/v1/${hash}`

export const projects = [
  {
    id: 'cafe-don-salazar',
    title: 'Café Don Salazar',
    subtitle: 'Service Design',
    description:
      "El proyecto propone una experiencia pop-up diseñada bajo un enfoque de Service Design, donde el espacio físico se convierte en el canal principal de interacción entre la marca y su audiencia. A través de estímulos sensoriales, una capa digital de autodescubrimiento y un panel comunitario, el 'journey' invita a los usuarios a descubrir sus preferencias, explorar diversos métodos y variedades de café, y conectar con los valores de Café Don Salazar. Más allá de una interacción puntual, la experiencia fue diseñada para fomentar la recurrencia, permitir el aprendizaje basado en datos y construir comunidad, fortaleciendo el vínculo entre los usuarios y la marca.",
    tags: ['Service Design', 'Spatial Branding', 'Product Design'],
    image: A('bd3da450f72a2adc8c7d9a4185a000c0a6bb7d12.png'),
    gallery: [],
    featured: true,
  },
  {
    id: 'sole',
    title: 'SOLE',
    subtitle: 'CX y omnicanalidad',
    description: null,
    tags: ['Service Design', 'Product Design', 'Spatial Branding'],
    image: A('7134ded3236332d772a732d32ed0bae73877311c.png'),
    gallery: [],
    featured: false,
  },
  {
    id: 'kinta',
    title: 'Kinta',
    subtitle: 'Spatial Branding & Art Direction',
    description:
      'Cuando el barrio inspira, el diseño se vuelve cultura. Proyecto integral de branding que abarca identidad visual y dirección de arte aplicados en materiales físicos, digitales e impresos. El concepto se aleja del minimalismo convencional para reinterpretar la identidad del barrio a través de gráficos expresivos, colores vibrantes e iconografía local.',
    tags: ['Branding', 'Spatial Branding'],
    image: A('a4c0394cb84cc035bec1a4a814f268400f0f7ceb.png'),
    gallery: [
      { src: A('ca7e59795bee8ceffac2e729e263ed1f2744eb29.png'), caption: 'Sistema tipográfico' },
      { src: A('4b2ed6b48afd02b96503bc51aed890bd7bc2aaa2.png'), caption: 'Papelería y tarjetas' },
      { src: A('16ac867504e1430e9c90d9201b1482cad42bb875.png'), caption: 'Paleta de color' },
      { src: A('6866ba8e04124beaf4bc5bc4a0f225bbb21ab8fa.png'), caption: 'Elementos gráficos' },
      { src: A('e4565d7806cf5bb456834198045bcb5506903699.png'), caption: 'Aplicación digital' },
      { src: A('1ae2df33ea42b78beed567d8db74450ef1e4c058.png'), caption: 'Aplicación digital' },
      { src: A('356aa3f7c3b0675a03a708a52e9bfdf1e6f2566a.png'), caption: 'Identidad visual' },
      { src: A('702a4b9aebc2479b85fdfb6c34c6001a1da607a1.png'), caption: 'Identidad visual' },
      { src: A('58c7972b462e53eb0eebff6dc298a82d575dfdcb.png'), caption: 'Identidad visual' },
      { src: A('c4c20a994a28cb3acc7048662acd1c7d22efed3d.png'), caption: 'Aplicación digital' },
    ],
    featured: false,
  },
  {
    id: 'modulor',
    title: 'Modulor',
    subtitle: 'Web End to End',
    description: null,
    tags: ['Product Design', 'Branding', 'Project Manager'],
    video: V('bb27fad4b9d586bb62d8dc9440261faaf965d935'),
    image: A('1245f94e5a40c7ef21810cbd4273674df06d0a44.png'),
    gallery: [],
    featured: false,
  },
]

export function getProject(id) {
  return projects.find((p) => p.id === id) ?? null
}
