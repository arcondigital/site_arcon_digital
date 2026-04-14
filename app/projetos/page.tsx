import { getAllProjects } from '@/lib/projects'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

export const revalidate = false
export const metadata = { title: 'Projetos' }

export default async function ProjetosPage() {
  const projects = await getAllProjects()
  
  return (
    <main className="min-h-screen bg-ag-white pt-[144px] pb-[120px] px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <RevealWrapper className="mb-16">
          <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-ag-gray-500 mb-6 flex items-center gap-3 before:content-[''] before:inline-block before:w-[24px] before:h-[1px] before:bg-ag-gray-300">
            Portfólio
          </div>
          <h1 className="font-display font-black text-[clamp(40px,5vw,72px)] leading-none text-ag-black">
            Nossos projetos.
          </h1>
        </RevealWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] border border-ag-gray-200">
          {projects.map((project, index) => {
            const isWide = project.featured && index === 0 // Using the specific CSS pattern requested (first one wide)
            return (
              <RevealWrapper key={project.slug} delay={(index % 3) * 100} className={`project-card group relative overflow-hidden bg-ag-gray-100 cursor-none aspect-[3/4] ${isWide ? 'md:col-span-2 md:aspect-[16/9]' : ''}`}>
                <div className={`project-bg absolute inset-0 transition-transform duration-[600ms] ease-ag group-hover:scale-105 flex items-center justify-center
                  ${index % 5 === 0 ? 'bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]' : 
                    index % 5 === 1 ? 'bg-[#e8e8e8]' :
                    index % 5 === 2 ? 'bg-gradient-to-br from-[#f0f0f0] to-[#d0d0d0]' :
                    index % 5 === 3 ? 'bg-[#1a1a1a]' :
                    'bg-gradient-to-b from-[#e5e5e5] to-[#f5f5f5]'}`
                }>
                  {index % 4 === 0 && <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.15"><circle cx="40" cy="40" r="36" stroke="white" strokeWidth="2"/><path d="M20 40H60M40 20V60" stroke="white" strokeWidth="2"/></svg>}
                  {index % 4 === 1 && <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.25"><rect x="8" y="8" width="48" height="48" stroke="#888" strokeWidth="2"/><path d="M8 32H56M32 8V56" stroke="#888" strokeWidth="1"/></svg>}
                  {index % 4 === 2 && <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.3"><circle cx="32" cy="32" r="28" stroke="#999" strokeWidth="2"/><circle cx="32" cy="32" r="14" stroke="#999" strokeWidth="1.5"/></svg>}
                  {index % 4 === 3 && <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.12"><path d="M32 4L60 20V44L32 60L4 44V20L32 4Z" stroke="white" strokeWidth="2"/></svg>}
                </div>
                
                <div className="project-info absolute bottom-6 left-6 transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-10">
                  <div className={`font-mono text-[10px] tracking-[0.15em] uppercase mb-2 ${index % 5 === 0 || index % 5 === 3 ? 'text-white/50' : 'text-ag-gray-500'}`}>
                    {project.category[0]}
                  </div>
                  <div className={`font-display font-extrabold text-[22px] tracking-[0.02em] ${index % 5 === 0 || index % 5 === 3 ? 'text-white' : 'text-ag-black'}`}>
                    {project.title}
                  </div>
                </div>
                
                <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out flex flex-col justify-end p-7 z-20">
                  <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/60 mb-2">
                    {project.category.join(' · ')}
                  </div>
                  <div className="font-display font-extrabold text-[22px] text-white tracking-[0.02em]">
                    {project.title}
                  </div>
                </div>
              </RevealWrapper>
            )
          })}
        </div>
      </div>
    </main>
  )
}
