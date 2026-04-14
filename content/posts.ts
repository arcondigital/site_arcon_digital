import { Post } from '@/types'

export const posts: Post[] = [
  {
    title: 'Como o marketing digital pode transformar sua empresa',
    slug: 'como-marketing-digital-transforma-empresa',
    excerpt: 'Entenda como uma estratégia digital bem estruturada gera resultados reais para negócios de qualquer porte.',
    body: `<h2>Por que marketing digital importa</h2><p>Conteúdo do post aqui...</p>`,
    coverImage: '/images/blog/post-1.jpg',
    author: 'Arcon Digital',
    publishedAt: '2025-01-15T10:00:00Z',
    tags: ['Marketing Digital', 'Estratégia'],
  },
  {
    title: 'Identidade visual: muito além de um logotipo',
    slug: 'identidade-visual-alem-do-logotipo',
    excerpt: 'A identidade visual de uma marca vai muito além do logo. Descubra o que realmente compõe uma marca forte.',
    body: `<h2>O que é identidade visual</h2><p>Conteúdo do post aqui...</p>`,
    coverImage: '/images/blog/post-2.jpg',
    author: 'Arcon Digital',
    publishedAt: '2025-02-03T10:00:00Z',
    tags: ['Identidade Visual', 'Branding'],
  },
]
