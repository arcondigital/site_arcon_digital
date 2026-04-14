export interface Post {
  title: string
  slug: string
  excerpt: string
  body: string
  coverImage: string
  author: string
  publishedAt: string
  tags: string[]
  seoTitle?: string
  seoDescription?: string
}

export interface Project {
  title: string
  slug: string
  category: string[]
  coverImage: string
  description: string
  featured: boolean
  order: number
}
