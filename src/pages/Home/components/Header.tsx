import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Music', href: '#music' },
  { label: 'Skillset', href: '#skillset' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work with me', href: '#work-with-me' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-900/90 backdrop-blur-md border-sky-500/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex flex-col">
            <a href="#home" className="text-xl font-bold tracking-wide text-white">
              Steven Pereira
            </a>
            <span className="text-xs text-gray-400 tracking-wider">
              Producer · Engineer · From Goa
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-sky-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden lg:inline-flex bg-sky-500 hover:bg-sky-600 text-white rounded-full"
            >
              <a href="#work-with-me">Work with me</a>
            </Button>

            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-neutral-900 border-sky-500/20">
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg text-gray-300 hover:text-sky-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button
                    asChild
                    className="bg-sky-500 hover:bg-sky-600 text-white rounded-full mt-4"
                  >
                    <a href="#work-with-me">Work with me</a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
