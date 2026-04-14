import { posts } from '@/content/posts'
import { Post } from '@/types'

export async function getAllPosts(): Promise<Post[]> {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return posts.find(p => p.slug === slug) ?? null
}

export async function getAllPostSlugs(): Promise<string[]> {
  return posts.map(p => p.slug)
}
