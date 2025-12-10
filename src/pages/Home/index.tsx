import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MusicSection } from './components/MusicSection'
import { SkillsetSection } from './components/SkillsetSection'
import { WorkflowSection } from './components/WorkflowSection'
import { WorkGallery } from './components/WorkGallery'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'
import '@/App.css'

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-neutral-900">
      <Header />
      <Hero />
      <MusicSection />
      <SkillsetSection />
      <WorkflowSection />
      <WorkGallery />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default Home
