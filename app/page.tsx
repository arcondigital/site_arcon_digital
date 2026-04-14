import { Hero } from '@/components/home/Hero'
import { Ticker } from '@/components/home/Ticker'
import { About } from '@/components/home/About'
import { Services } from '@/components/home/Services'
import { Midbreak } from '@/components/home/Midbreak'
import { ProjectsPreview } from '@/components/home/ProjectsPreview'
import { CtaBanner } from '@/components/home/CtaBanner'

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Midbreak />
      <ProjectsPreview />
      <CtaBanner />
    </main>
  )
}
