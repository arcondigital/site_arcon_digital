import { RevealWrapper } from '@/components/ui/RevealWrapper'

export function Services() {
  return (
    <section id="services" className="bg-ag-gray-900 px-6 md:px-12 py-[70px] md:py-[120px] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-10">
        <RevealWrapper>
          <div className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-ag-gray-500 mb-8 md:mb-16 flex items-center gap-3 before:content-[''] before:inline-block before:w-[24px] before:h-[1px] before:bg-ag-gray-700">
            O que fazemos
          </div>
          <h2 className="font-display font-black text-[clamp(32px,4.5vw,64px)] leading-none text-white max-w-[14ch]">
            Expertise que<br/>gera resultados.
          </h2>
        </RevealWrapper>
        
        <RevealWrapper delay={200} className="max-w-[360px] text-ag-gray-500 text-[14px] leading-[1.8] font-light mt-4 md:mt-0 shrink-0">
          Criamos estratégias personalizadas que resultam em aumento significativo e qualitativo da presença online da sua marca.
        </RevealWrapper>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/8 md:border-l relative z-10">
        <RevealWrapper className="h-full">
          <div className="service-card border-b border-white/8 md:border-r border-r-0 p-8 md:p-12 transition-colors cursor-none h-full bg-transparent group">
            <div className="service-content relative z-10">
              <div className="font-mono text-[11px] tracking-[0.15em] text-ag-gray-700 mb-10 transition-colors group-hover:text-ag-gray-400">01</div>
              <svg className="w-12 h-12 mb-7 opacity-70 transition-all group-hover:opacity-100 group-hover:filter group-hover:invert duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="8" width="40" height="28" rx="2" stroke="white" strokeWidth="1.5"/>
                <path d="M16 40H32" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
                <path d="M14 20L20 26L28 18L34 24" stroke="white" strokeWidth="1.5" strokeLinecap="square"/>
              </svg>
              <h3 className="font-display font-extrabold text-[28px] text-white tracking-[0.01em] mb-4 transition-colors group-hover:text-ag-black">Desenvolvimento de Sites</h3>
              <p className="text-[14px] text-ag-gray-500 leading-[1.8] font-light transition-colors group-hover:text-ag-gray-700">Projetos exclusivos: sites institucionais, landing pages, blogs e portais com foco em performance e conversão.</p>
            </div>
            <div className="absolute inset-0 bg-white translate-y-[100%] transition-transform duration-400 ease-ag-flip group-hover:translate-y-0 z-0"></div>
          </div>
        </RevealWrapper>
        
        <RevealWrapper delay={100} className="h-full">
          <div className="service-card border-b border-white/8 md:border-r border-r-0 p-8 md:p-12 transition-colors cursor-none h-full bg-transparent group">
            <div className="service-content relative z-10">
              <div className="font-mono text-[11px] tracking-[0.15em] text-ag-gray-700 mb-10 transition-colors group-hover:text-ag-gray-400">02</div>
              <svg className="w-12 h-12 mb-7 opacity-70 transition-all group-hover:opacity-100 group-hover:filter group-hover:invert duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="18" stroke="white" strokeWidth="1.5"/>
                <path d="M24 6V42M6 24H42M10 14L38 34M38 14L10 34" stroke="white" strokeWidth="1.5"/>
              </svg>
              <h3 className="font-display font-extrabold text-[28px] text-white tracking-[0.01em] mb-4 transition-colors group-hover:text-ag-black">Marketing Digital</h3>
              <p className="text-[14px] text-ag-gray-500 leading-[1.8] font-light transition-colors group-hover:text-ag-gray-700">Planejamento e ações estratégicas para aumentar a presença digital da sua marca e gerar oportunidades de negócio.</p>
            </div>
            <div className="absolute inset-0 bg-white translate-y-[100%] transition-transform duration-400 ease-ag-flip group-hover:translate-y-0 z-0"></div>
          </div>
        </RevealWrapper>
        
        <RevealWrapper delay={200} className="h-full">
          <div className="service-card border-b border-white/8 md:border-r border-r-0 p-8 md:p-12 transition-colors cursor-none h-full bg-transparent group">
            <div className="service-content relative z-10">
              <div className="font-mono text-[11px] tracking-[0.15em] text-ag-gray-700 mb-10 transition-colors group-hover:text-ag-gray-400">03</div>
              <svg className="w-12 h-12 mb-7 opacity-70 transition-all group-hover:opacity-100 group-hover:filter group-hover:invert duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L6 16V32L24 44L42 32V16L24 4Z" stroke="white" strokeWidth="1.5"/>
                <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="1.5"/>
              </svg>
              <h3 className="font-display font-extrabold text-[28px] text-white tracking-[0.01em] mb-4 transition-colors group-hover:text-ag-black">Identidade Visual</h3>
              <p className="text-[14px] text-ag-gray-500 leading-[1.8] font-light transition-colors group-hover:text-ag-gray-700">Criação de identidade visual completa, capaz de transmitir a essência da sua marca com clareza e autoridade.</p>
            </div>
            <div className="absolute inset-0 bg-white translate-y-[100%] transition-transform duration-400 ease-ag-flip group-hover:translate-y-0 z-0"></div>
          </div>
        </RevealWrapper>
        
        <RevealWrapper delay={300} className="h-full">
          <div className="service-card border-b border-white/8 md:border-r border-r-0 p-8 md:p-12 transition-colors cursor-none h-full bg-transparent group">
            <div className="service-content relative z-10">
              <div className="font-mono text-[11px] tracking-[0.15em] text-ag-gray-700 mb-10 transition-colors group-hover:text-ag-gray-400">04</div>
              <svg className="w-12 h-12 mb-7 opacity-70 transition-all group-hover:opacity-100 group-hover:filter group-hover:invert duration-300" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="4" width="40" height="40" rx="2" stroke="white" strokeWidth="1.5"/>
                <path d="M16 24H32M24 16V32" stroke="white" strokeWidth="2" strokeLinecap="square"/>
                <path d="M4 34H44" stroke="white" strokeWidth="1.5"/>
              </svg>
              <h3 className="font-display font-extrabold text-[28px] text-white tracking-[0.01em] mb-4 transition-colors group-hover:text-ag-black">Desenvolvimento E-commerce</h3>
              <p className="text-[14px] text-ag-gray-500 leading-[1.8] font-light transition-colors group-hover:text-ag-gray-700">Plataforma e-commerce completa, personalizada e sem burocracia. Venda mais com menos fricção.</p>
            </div>
            <div className="absolute inset-0 bg-white translate-y-[100%] transition-transform duration-400 ease-ag-flip group-hover:translate-y-0 z-0"></div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
