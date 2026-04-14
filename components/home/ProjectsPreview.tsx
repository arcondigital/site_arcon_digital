import { RevealWrapper } from '@/components/ui/RevealWrapper'
import Link from 'next/link'

export function ProjectsPreview() {
  return (
    <section id="projects" className="bg-white px-6 md:px-12 py-[80px] md:py-[120px]">
      <RevealWrapper className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <h2 className="font-display font-black text-[clamp(36px,4vw,60px)] text-ag-black max-w-[14ch] leading-[1]">
          Nossos<br/>projetos.
        </h2>
        
        <Link href="/projetos" className="inline-flex items-center gap-2.5 font-semibold text-[12px] tracking-[0.1em] uppercase text-ag-black border-b border-ag-black pb-1 hover:opacity-50 transition-opacity shrink-0 mb-2 cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ag-black rounded-sm">
          Ver todos
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6H11M6 1L11 6L6 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square"/></svg>
        </Link>
      </RevealWrapper>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
        
        <RevealWrapper className="project-card wide md:col-span-2 group relative overflow-hidden bg-ag-gray-100 cursor-none aspect-[4/5] md:aspect-[16/9]">
          <div className="project-bg absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] transition-transform duration-[600ms] ease-ag group-hover:scale-105 flex items-center justify-center">
             <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.15"><circle cx="40" cy="40" r="36" stroke="white" strokeWidth="2"/><path d="M20 40H60M40 20V60" stroke="white" strokeWidth="2"/></svg>
          </div>
          <div className="project-info absolute bottom-6 left-6 transition-opacity duration-300 opacity-100 md:group-hover:opacity-0 z-10">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2">Website</div>
            <div className="font-display font-extrabold text-[20px] md:text-[22px] text-white tracking-[0.02em]">HPLANET</div>
          </div>
          <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-400 ease-in-out flex flex-col justify-end p-7 z-20">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/60 mb-2">Website</div>
            <div className="font-display font-extrabold text-[20px] md:text-[22px] text-white tracking-[0.02em]">HPLANET</div>
          </div>
        </RevealWrapper>
        
        <RevealWrapper delay={100} className="project-card group relative overflow-hidden bg-ag-gray-100 cursor-none aspect-[3/4]">
          <div className="project-bg absolute inset-0 bg-[#e8e8e8] transition-transform duration-[600ms] ease-ag group-hover:scale-105 flex items-center justify-center">
             <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.25"><rect x="8" y="8" width="48" height="48" stroke="#888" strokeWidth="2"/><path d="M8 32H56M32 8V56" stroke="#888" strokeWidth="1"/></svg>
          </div>
          <div className="project-info absolute bottom-6 left-6 transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-10">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-ag-gray-500 mb-2">Identidade Visual</div>
            <div className="font-display font-extrabold text-[22px] text-ag-black tracking-[0.02em]">Graulab</div>
          </div>
          <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out flex flex-col justify-end p-7 z-20">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/60 mb-2">Identidade Visual</div>
            <div className="font-display font-extrabold text-[22px] text-white tracking-[0.02em]">Graulab</div>
          </div>
        </RevealWrapper>
        
        <RevealWrapper delay={200} className="project-card group relative overflow-hidden bg-ag-gray-100 cursor-none aspect-[3/4]">
          <div className="project-bg absolute inset-0 bg-gradient-to-br from-[#f0f0f0] to-[#d0d0d0] transition-transform duration-[600ms] ease-ag group-hover:scale-105 flex items-center justify-center">
             <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.3"><circle cx="32" cy="32" r="28" stroke="#999" strokeWidth="2"/><circle cx="32" cy="32" r="14" stroke="#999" strokeWidth="1.5"/></svg>
          </div>
          <div className="project-info absolute bottom-6 left-6 transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-10">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-ag-gray-500 mb-2">Website</div>
            <div className="font-display font-extrabold text-[22px] text-ag-black tracking-[0.02em]">Indexmed</div>
          </div>
          <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out flex flex-col justify-end p-7 z-20">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/60 mb-2">Website</div>
            <div className="font-display font-extrabold text-[22px] text-white tracking-[0.02em]">Indexmed</div>
          </div>
        </RevealWrapper>
        
        <RevealWrapper className="project-card group relative overflow-hidden bg-ag-gray-100 cursor-none aspect-[3/4]">
          <div className="project-bg absolute inset-0 bg-[#1a1a1a] transition-transform duration-[600ms] ease-ag group-hover:scale-105 flex items-center justify-center">
             <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.12"><path d="M32 4L60 20V44L32 60L4 44V20L32 4Z" stroke="white" strokeWidth="2"/></svg>
          </div>
          <div className="project-info absolute bottom-6 left-6 transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-10">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/50 mb-2">E-commerce</div>
            <div className="font-display font-extrabold text-[22px] text-white tracking-[0.02em]">Furry Dog</div>
          </div>
          <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out flex flex-col justify-end p-7 z-20">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/60 mb-2">E-commerce · Identidade Visual</div>
            <div className="font-display font-extrabold text-[22px] text-white tracking-[0.02em]">Furry Dog</div>
          </div>
        </RevealWrapper>
        
        <RevealWrapper delay={100} className="project-card group relative overflow-hidden bg-ag-gray-100 cursor-none aspect-[3/4]">
          <div className="project-bg absolute inset-0 bg-gradient-to-b from-[#e5e5e5] to-[#f5f5f5] transition-transform duration-[600ms] ease-ag group-hover:scale-105 flex items-center justify-center">
             <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.3"><rect x="12" y="4" width="40" height="56" rx="2" stroke="#999" strokeWidth="2"/><path d="M20 20H44M20 30H44M20 40H36" stroke="#999" strokeWidth="1.5" strokeLinecap="square"/></svg>
          </div>
          <div className="project-info absolute bottom-6 left-6 transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-10">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-ag-gray-500 mb-2">Website</div>
            <div className="font-display font-extrabold text-[22px] text-ag-black tracking-[0.02em]">Dental Office</div>
          </div>
          <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/75 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out flex flex-col justify-end p-7 z-20">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/60 mb-2">Website</div>
            <div className="font-display font-extrabold text-[22px] text-white tracking-[0.02em]">Dental Office</div>
          </div>
        </RevealWrapper>
        
      </div>
    </section>
  )
}
