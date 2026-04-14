import { Project } from '@/types'

export const projects: Project[] = [
  { title: 'HPLANET',       slug: 'hplanet',       category: ['Website'],                                    coverImage: '/images/projects/hplanet.jpg',      description: 'Desenvolvimento e criação de site institucional.', featured: true, order: 1 },
  { title: 'Graulab',       slug: 'graulab',       category: ['Identidade Visual'],                         coverImage: '/images/projects/graulab.jpg',      description: 'Criação de identidade visual completa.',           featured: true, order: 2 },
  { title: 'Indexmed',      slug: 'indexmed',      category: ['Website'],                                    coverImage: '/images/projects/indexmed.jpg',     description: 'Desenvolvimento e criação de site.',               featured: true, order: 3 },
  { title: 'Furry Dog',     slug: 'furry-dog',     category: ['E-commerce', 'Identidade Visual', 'Social Media'], coverImage: '/images/projects/furry-dog.jpg', description: 'E-commerce, identidade visual e social media.',   featured: true, order: 4 },
  { title: 'Dental Office', slug: 'dental-office', category: ['Website'],                                    coverImage: '/images/projects/dental-office.jpg',description: 'Desenvolvimento e criação de site.',               featured: true, order: 5 },
]
