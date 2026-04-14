export function Ticker() {
  const items = [
    'Marketing Digital',
    'Criação de Sites',
    'Identidade Visual',
    'E-commerce',
    'Gestão de Tráfego',
    'Social Media'
  ]

  const Separator = () => (
    <span className="inline-block w-1 h-1 rounded-full bg-ag-gray-300 align-middle"></span>
  )

  const TickerGroup = () => (
    <div className="inline-flex items-center gap-10 px-[60px] font-mono text-[11px] tracking-[0.15em] uppercase text-ag-gray-700">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-10 cursor-none">
          {item}
          <Separator />
        </span>
      ))}
    </div>
  )

  return (
    <div className="bg-ag-gray-100 border-y border-ag-gray-200 overflow-hidden py-4 cursor-none">
      <div className="flex gap-0 w-max animate-marquee hover:[animation-play-state:paused]">
        <TickerGroup />
        <TickerGroup />
        <TickerGroup />
      </div>
    </div>
  )
}
