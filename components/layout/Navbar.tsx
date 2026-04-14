'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'
  const showBackground = scrolled || !isHome

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, { threshold: 0.2, rootMargin: '-20% 0px -40% 0px' })
    
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(s => observer.observe(s))
    
    return () => observer.disconnect()
  }, [isHome])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 h-[88px] px-6 md:px-12 flex items-center justify-between transition-all duration-300 ${
        showBackground 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/5 shadow-xl' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <Link href="/" onClick={closeMenu} className="flex items-center cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm opacity-100 hover:opacity-80 transition-opacity z-[60]">
          <Image
            src="/Logo_arcon_site.svg"
            alt="Arcon Digital"
            width={160}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </Link>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 list-none absolute left-1/2 -translate-x-1/2">
          <li>
            <Link href="/#about" className={`text-[12px] font-medium tracking-[0.1em] uppercase transition-all cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm ${activeSection === 'about' ? 'text-white' : 'text-white/50 hover:text-white'}`}>
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/#services" className={`text-[12px] font-medium tracking-[0.1em] uppercase transition-all cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm ${activeSection === 'services' ? 'text-white' : 'text-white/50 hover:text-white'}`}>
              Serviços
            </Link>
          </li>
          <li>
            <Link href="/projetos" className={`text-[12px] font-medium tracking-[0.1em] uppercase transition-all cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm ${activeSection === 'projects' || (typeof window !== 'undefined' && window.location.pathname === '/projetos') ? 'text-white' : 'text-white/50 hover:text-white'}`}>
              Projetos
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-[12px] font-medium tracking-[0.1em] uppercase text-white/50 hover:text-white transition-colors cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">
              Blog
            </Link>
          </li>
        </ul>
        
        <div className="flex items-center gap-6 z-[60]">
          <Link href="/#cta" className="hidden md:inline-flex border border-white/10 text-white/90 px-5 py-2.5 text-[11px] font-medium tracking-[0.1em] uppercase hover:bg-white hover:text-ag-black transition-all cursor-pointer items-center outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 rounded-sm">
            Solicite seu orçamento
          </Link>
          
          <button 
            onClick={toggleMenu}
            className="flex md:hidden flex-col justify-center items-end gap-2 w-10 h-10 cursor-pointer outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/50 p-1" 
            aria-label="Menu"
          >
            <span className={`block w-8 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></span>
            <span className={`block w-8 h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[10px] w-8' : 'w-6'}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[#050505]/95 backdrop-blur-xl" onClick={closeMenu}></div>
        <div className={`absolute right-0 top-0 h-full w-[85%] max-w-[400px] bg-[#0A0A0A] border-l border-white/5 p-12 flex flex-col pt-32 transition-transform duration-500 ease-ag-flip ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <ul className="flex flex-col gap-8 list-none text-left">
            <li className="overflow-hidden">
              <Link href="/#about" onClick={closeMenu} className="block text-[24px] font-bold text-white/90 hover:text-white transition-colors tracking-tight">
                Sobre
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link href="/#services" onClick={closeMenu} className="block text-[24px] font-bold text-white/90 hover:text-white transition-colors tracking-tight">
                Serviços
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link href="/projetos" onClick={closeMenu} className="block text-[24px] font-bold text-white/90 hover:text-white transition-colors tracking-tight">
                Projetos
              </Link>
            </li>
            <li className="overflow-hidden">
              <Link href="/blog" onClick={closeMenu} className="block text-[24px] font-bold text-white/90 hover:text-white transition-colors tracking-tight">
                Blog
              </Link>
            </li>
            <li className="mt-12">
              <Link href="/#cta" onClick={closeMenu} className="inline-flex bg-white text-black px-8 py-4 text-[12px] font-bold tracking-[0.1em] uppercase hover:bg-gray-200 transition-all rounded-sm">
                Solicite seu orçamento
              </Link>
            </li>
          </ul>

          <div className="mt-auto">
            <div className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase mb-4">Contato</div>
            <a href="mailto:oi@arcondigital.com.br" className="text-white/60 text-[14px]">oi@arcondigital.com.br</a>
          </div>
        </div>
      </div>
    </>
  )
}
