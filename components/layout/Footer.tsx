import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-ag-gray-900 border-t border-white/5 px-6 md:px-12 pt-16 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-16 mb-16">
        <div>
          <Link href="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity mb-4 outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">
            <Image
              src="/Logo_arcon_site.svg"
              alt="Arcon Digital"
              width={140}
              height={35}
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-[13px] text-white/50 font-light leading-[1.7] max-w-[240px]">
            Marketing que vende. Não marketing que impressiona.
          </p>
        </div>
        
        <div>
          <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-5">Serviços</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li><Link href="/#services" className="text-white/70 text-[13px] hover:text-white transition-colors cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">Criação de Sites</Link></li>
            <li><Link href="/#services" className="text-white/70 text-[13px] hover:text-white transition-colors cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">Marketing Digital</Link></li>
            <li><Link href="/#services" className="text-white/70 text-[13px] hover:text-white transition-colors cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">Identidade Visual</Link></li>
            <li><Link href="/#services" className="text-white/70 text-[13px] hover:text-white transition-colors cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">E-commerce</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-5">Empresa</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li><Link href="/#about" className="text-white/70 text-[13px] hover:text-white transition-colors cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">Sobre nós</Link></li>
            <li><Link href="/projetos" className="text-white/70 text-[13px] hover:text-white transition-colors cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">Projetos</Link></li>
            <li><Link href="/blog" className="text-white/70 text-[13px] hover:text-white transition-colors cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">Blog</Link></li>
            <li><Link href="#" className="text-white/70 text-[13px] hover:text-white transition-colors cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">Trabalhe conosco</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-5">Contato</h4>
          <ul className="list-none flex flex-col gap-2.5">
            <li className="text-white/70 text-[13px]">João Pessoa, PB</li>
            <li><a href="mailto:oi@arcondigital.com.br" className="text-white/70 text-[13px] hover:text-white transition-colors cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">oi@arcondigital.com.br</a></li>
            <li><a href="#" className="text-white/70 text-[13px] hover:text-white transition-colors cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">Instagram</a></li>
            <li><a href="#" className="text-white/70 text-[13px] hover:text-white transition-colors cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
        <span className="text-[11px] text-white/40 font-mono tracking-[0.05em]">
          © {new Date().getFullYear()} Arcon Digital — Todos os direitos reservados
        </span>
        <div className="flex gap-6">
          <Link href="#" className="text-[11px] text-white/40 font-mono tracking-[0.05em] hover:text-white/80 transition-colors cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
