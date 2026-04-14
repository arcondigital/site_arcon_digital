import { RevealWrapper } from '@/components/ui/RevealWrapper'

export function Midbreak() {
  return (
    <section className="bg-ag-black p-0 relative overflow-hidden aspect-[16/7] min-h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>
      
      <RevealWrapper className="relative z-10 text-center flex flex-col items-center">
        <div className="font-display font-black text-[clamp(56px,9vw,140px)] text-white leading-[0.9] tracking-[-0.02em]">
          Mais que<br/><em className="not-italic text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">uma agência.</em>
        </div>
        
        <button className="inline-flex items-center justify-center w-[72px] h-[72px] border border-white/30 rounded-full mt-10 transition-all duration-300 hover:border-white hover:bg-white/5 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-white/50" aria-label="Assistir vídeo institucional">
          <svg className="ml-1 fill-white" width="18" height="18" viewBox="0 0 18 18">
            <path d="M4 2L16 9L4 16V2Z"/>
          </svg>
        </button>
      </RevealWrapper>
    </section>
  )
}
