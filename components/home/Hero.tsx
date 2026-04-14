import { RevealWrapper } from '@/components/ui/RevealWrapper'
import Link from 'next/link'
import { EtherealShadow } from '@/components/ui/etheral-shadow'

export function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-[#050505] flex items-center justify-center px-6 md:px-12 relative overflow-hidden">
      {/* Ethereal Shadow — Animated Fluid Background */}
      <EtherealShadow
        color="rgba(40, 40, 40, 1)"
        animation={{ scale: 60, speed: 30 }}
        noise={{ opacity: 0.6, scale: 1.5 }}
        sizing="fill"
      />

      {/* Subtle grid overlay — preserves the tech texture */}
      <div className="absolute inset-0 pointer-events-none z-[1]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}></div>

      {/* Darken vignette so text is always readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]/80 pointer-events-none z-[2]" />
      
      <div className="relative z-[10] w-full max-w-5xl text-center flex flex-col items-center">
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
