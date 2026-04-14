'use client'

import { useEffect, useRef, ReactNode } from 'react'

export function RevealWrapper({ children, delay = 0, className }: {
  children: ReactNode; delay?: number; className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('reveal-visible'), delay)
          obs.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  
  return (
    <div ref={ref} className={`reveal-base ${className ?? ''}`}>
      {children}
    </div>
  )
}
