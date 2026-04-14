import { projects } from '@/content/projects'
import { Project } from '@/types'

export async function getAllProjects(): Promise<Project[]> {
  return [...projects].sort((a, b) => a.order - b.order)
}

export async function getFeaturedProjects(): Promise<Project[]> {
  return projects.filter(p => p.featured).sort((a, b) => a.order - b.order)
}
