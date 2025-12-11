export { Page }

import { Helmet } from 'react-helmet-async'
import { ThemeProvider } from '@/components/ThemeProvider'
import TwSizeIndicator from '@/components/TwSizeIndicator'
import { Header } from '@/pages/Home/components/Header'
import { Hero } from '@/pages/Home/components/Hero'
import { MusicSection } from '@/pages/Home/components/MusicSection'
import { SkillsetSection } from '@/pages/Home/components/SkillsetSection'
import { WorkflowSection } from '@/pages/Home/components/WorkflowSection'
import { FAQSection } from '@/pages/Home/components/FAQSection'
import { Footer } from '@/pages/Home/components/Footer'
import '@/App.css'

function Page() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Helmet>
        <title>Steven Pereira - Music Producer & Audio Engineer</title>
        <meta
          name="description"
          content="Steven Pereira is a professional music producer and audio engineer specializing in mixing, mastering, and music production services."
        />
        <meta property="og:title" content="Steven Pereira - Music Producer & Audio Engineer" />
        <meta
          property="og:description"
          content="Professional music producer and audio engineer specializing in mixing, mastering, and music production services."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Steven Pereira - Music Producer & Audio Engineer" />
        <meta
          name="twitter:description"
          content="Professional music producer and audio engineer specializing in mixing, mastering, and music production services."
        />
      </Helmet>
      <TwSizeIndicator />
      <div className="min-h-screen overflow-x-hidden bg-neutral-900">
        <Header />
        <Hero />
        <MusicSection />
        <SkillsetSection />
        <WorkflowSection />
        <FAQSection />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
