import { RevealWrapper } from '@/components/ui/RevealWrapper'

export function About() {
  return (
    <section id="about" className="bg-white px-6 md:px-12 py-[70px] md:py-[120px] overflow-hidden">
      <div className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-ag-gray-500 mb-10 md:mb-16 flex items-center gap-3 before:content-[''] before:inline-block before:w-[24px] before:h-[1px] before:bg-ag-gray-300">
        Sobre a agência
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
        <RevealWrapper>
          <h2 className="font-display font-black text-[clamp(34px,5vw,72px)] leading-none text-ag-black">
            Uma parceria<br/>de projetos<br/>incríveis.
          </h2>
        </RevealWrapper>
        
        <RevealWrapper delay={200} className="pt-2">
          <p className="text-[17px] font-light text-ag-gray-700 leading-[1.85] mb-14">
            Somos uma agência de marketing digital e publicidade que oferece soluções e estratégias personalizadas para construir e fortalecer marcas. Aumentamos a presença online e transformamos objetivos em oportunidades reais de negócio.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-ag-gray-200">
            <div className="md:border-r border-ag-gray-200 border-b md:border-b-0 py-6 md:py-8 pr-0 md:pr-6">
              <div className="font-display font-black text-[52px] leading-none mb-1.5 text-ag-black">+200</div>
              <div className="text-[12px] text-ag-gray-500 leading-[1.5] font-normal">Projetos entregues com resultado</div>
            </div>
            
            <div className="md:border-r border-ag-gray-200 border-b md:border-b-0 py-6 md:py-8 pl-0 md:pl-6 pr-0 md:pr-6">
              <div className="font-display font-black text-[52px] leading-none mb-1.5 text-ag-black">8+</div>
              <div className="text-[12px] text-ag-gray-500 leading-[1.5] font-normal">Anos de mercado e experiência</div>
            </div>
            
            <div className="py-6 md:py-8 pl-0 md:pl-6">
              <div className="font-display font-black text-[52px] leading-none mb-1.5 text-ag-black">97%</div>
              <div className="text-[12px] text-ag-gray-500 leading-[1.5] font-normal">De clientes retornam ou indicam</div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
