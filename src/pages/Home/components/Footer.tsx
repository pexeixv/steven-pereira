import { Instagram, Music2, Youtube } from 'lucide-react'
import ContactForm from './ContactForm'

export function Footer() {
  return (
    <footer className="py-12 border-t bg-neutral-900/80 backdrop-blur-sm border-sky-500/50">
      <div className="container px-4 mx-auto lg:px-8">
        <div className="grid gap-8 mb-8 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-xl font-bold text-white">Steven Pereira</h3>
            <p className="text-sm text-gray-400">
              Music producer and sound engineer from Goa, India
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#home"
                className="text-sm text-gray-400 transition-colors hover:text-sky-400"
              >
                Home
              </a>
              <a
                href="#music"
                className="text-sm text-gray-400 transition-colors hover:text-sky-400"
              >
                Music
              </a>
              <a
                href="#skillset"
                className="text-sm text-gray-400 transition-colors hover:text-sky-400"
              >
                Skillset
              </a>
              <ContactForm />
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-colors border rounded-full bg-neutral-800 border-sky-500/20 hover:bg-sky-500/10 hover:border-sky-500/40"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-sky-400" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-colors border rounded-full bg-neutral-800 border-sky-500/20 hover:bg-sky-500/10 hover:border-sky-500/40"
                aria-label="SoundCloud"
              >
                <Music2 className="w-4 h-4 text-sky-400" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-colors border rounded-full bg-neutral-800 border-sky-500/20 hover:bg-sky-500/10 hover:border-sky-500/40"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-sky-400" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              <a href="mailto:steven@email.com" className="transition-colors hover:text-sky-400">
                steven@email.com
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-sky-500/10">
          <p className="text-xs text-center text-gray-500">
            © {new Date().getFullYear()} Steven Pereira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
