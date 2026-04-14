import { RevealWrapper } from '@/components/ui/RevealWrapper'
import Link from 'next/link'

export function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-[#050505] flex items-center justify-center px-6 md:px-12 relative overflow-hidden">
      {/* Deep Background Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#151515_0%,#050505_100%)]"></div>
      
      {/* Subtle Fluid Abstract Shapes */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-white/[0.02] rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-white/[0.01] rounded-full blur-[100px]"></div>
      
      {/* subtle grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}></div>
      
      <div className="relative z-10 w-full max-w-5xl text-center flex flex-col items-center">
        <RevealWrapper delay={100}>
          <h1 className="font-display leading-[1.02] tracking-tighter text-white text-[clamp(42px,7vw,88px)] mb-8 max-w-4xl px-4 md:px-0">
            <span className="font-black">Estratégia e Design</span><br/>
            <span className="font-medium opacity-90">para marcas que lideram.</span>
          </h1>
        </RevealWrapper>
        
        <RevealWrapper delay={200}>
          <p className="max-w-xl mx-auto text-neutral-400 text-[16px] md:text-[18px] leading-[1.6] font-light mb-12 px-6 md:px-0">
            Construímos e fortalecemos marcas com estratégias que geram resultados reais. Presença online, conversões e crescimento sustentável.
          </p>
        </RevealWrapper>
        
        <RevealWrapper delay={300} className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full px-6 md:px-0">
          <Link href="/#cta" className="bg-white text-black w-full sm:w-auto px-10 py-5 text-[12px] font-bold tracking-[0.1em] uppercase inline-flex items-center justify-center gap-3 hover:bg-neutral-200 transition-all cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 group rounded-none">
            Quero uma proposta
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/projetos" className="border border-white/10 text-white w-full sm:w-auto px-10 py-5 text-[12px] font-bold tracking-[0.1em] uppercase hover:bg-white/5 transition-all cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 inline-flex items-center justify-center rounded-none">
            Ver projetos
          </Link>
        </RevealWrapper>
      </div>
    </section>
  )
}
