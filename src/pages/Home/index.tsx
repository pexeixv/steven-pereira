import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MusicSection } from './components/MusicSection'
import { SkillsetSection } from './components/SkillsetSection'
import { WorkflowSection } from './components/WorkflowSection'
import { WorkGallery } from './components/WorkGallery'
import { FAQSection } from './components/FAQSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import '@/App.css'

function Home() {
  return (
    <div className="min-h-screen bg-neutral-900 overflow-x-hidden">
      <Header />
      <Hero />
      <MusicSection />
      <SkillsetSection />
      <WorkflowSection />
      <WorkGallery />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Home
