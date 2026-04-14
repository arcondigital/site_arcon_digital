import { RevealWrapper } from '@/components/ui/RevealWrapper'
import Link from 'next/link'

export function CtaBanner() {
  return (
    <section id="cta" className="bg-ag-black py-[120px] px-6 md:px-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
      }}></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <RevealWrapper>
          <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-ag-gray-600 mb-8">
            Pronto para crescer?
          </p>
        </RevealWrapper>
        
        <RevealWrapper delay={100}>
          <h2 className="font-display font-black text-[clamp(48px,7vw,100px)] text-white max-w-[16ch] mx-auto mb-4 leading-[0.95]">
            Projetos notáveis<br/>começam <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)]">aqui.</span>
          </h2>
        </RevealWrapper>
        
        <RevealWrapper delay={200}>
          <p className="text-ag-gray-500 text-[15px] font-light mb-14 max-w-[480px] mx-auto">
            Seu projeto merece ficar em boas mãos. Chama a gente no direct ou manda uma mensagem. Vamos começar agora mesmo.
          </p>
        </RevealWrapper>
        
        <RevealWrapper delay={300}>
          <Link href="mailto:oi@arcondigital.com.br" className="bg-white text-ag-black px-8 py-4 text-[12px] font-semibold tracking-[0.1em] uppercase inline-flex items-center gap-2.5 hover:bg-ag-gray-200 transition-colors cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">
            Quero uma proposta
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7H13M7 1L13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/></svg>
          </Link>
        </RevealWrapper>
      </div>
    </section>
  )
}
