import { Instagram, Music2, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-neutral-900/80 backdrop-blur-sm border-t border-sky-500/10 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Steven Pereira</h3>
            <p className="text-sm text-gray-400">
              Music producer and sound engineer from Goa, India
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a
                href="#home"
                className="text-sm text-gray-400 hover:text-sky-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#music"
                className="text-sm text-gray-400 hover:text-sky-400 transition-colors"
              >
                Music
              </a>
              <a
                href="#skillset"
                className="text-sm text-gray-400 hover:text-sky-400 transition-colors"
              >
                Skillset
              </a>
              <a
                href="#work-with-me"
                className="text-sm text-gray-400 hover:text-sky-400 transition-colors"
              >
                Work with me
              </a>
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 border border-sky-500/20 flex items-center justify-center hover:bg-sky-500/10 hover:border-sky-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-sky-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 border border-sky-500/20 flex items-center justify-center hover:bg-sky-500/10 hover:border-sky-500/40 transition-colors"
                aria-label="SoundCloud"
              >
                <Music2 className="w-4 h-4 text-sky-400" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-neutral-800 border border-sky-500/20 flex items-center justify-center hover:bg-sky-500/10 hover:border-sky-500/40 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4 text-sky-400" />
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              <a
                href="mailto:contact@stevenpereira.com"
                className="hover:text-sky-400 transition-colors"
              >
                contact@stevenpereira.com
              </a>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-sky-500/10">
          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Steven Pereira. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
