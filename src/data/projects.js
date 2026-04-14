const BASE = 'https://portafoliostefduarte.figma.site'

export const projects = [
  {
    id: 'cafe-don-salazar',
    title: 'Café Don Salazar',
    subtitle: 'Service Design',
    description:
      "El proyecto propone una experiencia pop-up diseñada bajo un enfoque de Service Design, donde el espacio físico se convierte en el canal principal de interacción entre la marca y su audiencia. A través de estímulos sensoriales, una capa digital de autodescubrimiento y un panel comunitario, el 'journey' invita a los usuarios a descubrir sus preferencias, explorar diversos métodos y variedades de café, y conectar con los valores de Café Don Salazar. Más allá de una interacción puntual, la experiencia fue diseñada para fomentar la recurrencia, permitir el aprendizaje basado en datos y construir comunidad, fortaleciendo el vínculo entre los usuarios y la marca.",
    tags: ['Service Design', 'Spatial Branding', 'Product Design'],
    image: `${BASE}/_assets/v11/bd3da450f72a2adc8c7d9a4185a000c0a6bb7d12.png`,
    featured: true,
  },
  {
    id: 'sole',
    title: 'SOLE',
    subtitle: 'CX y omnicanalidad',
    description: null,
    tags: ['Service Design', 'Product Design', 'Spatial Branding'],
    image: `${BASE}/_assets/v11/7134ded3236332d772a732d32ed0bae73877311c.png`,
    featured: false,
  },
  {
    id: 'kinta',
    title: 'Kinta',
    subtitle: 'Spatial Branding & Art Direction',
    description: null,
    tags: ['Branding', 'Spatial Branding'],
    image: `${BASE}/_assets/v11/a4c0394cb84cc035bec1a4a814f268400f0f7ceb.png`,
    featured: false,
  },
  {
    id: 'modulor',
    title: 'Modulor',
    subtitle: 'Web End to End',
    description: null,
    tags: ['Product Design', 'Branding', 'Project Manager'],
    video: `${BASE}/_videos/v1/bb27fad4b9d586bb62d8dc9440261faaf965d935`,
    image: `${BASE}/_assets/v11/1245f94e5a40c7ef21810cbd4273674df06d0a44.png`,
    featured: false,
  },
]

export function getProject(id) {
  return projects.find((p) => p.id === id) ?? null
}
