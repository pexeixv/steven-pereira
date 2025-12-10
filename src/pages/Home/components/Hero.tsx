import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import HeroImage from '@/assets/hero.png'
import ContactForm from './ContactForm'

export function Hero() {
  return (
    <section id="home" className="relative flex items-center overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-neutral-900/50 to-neutral-900"></div>

      <div className="relative z-10 lg:mx-auto max-lg:ml-auto lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-2 max-lg:pt-32 max-lg:px-4 max-w-[700px]"
          >
            <div className="relative ">
              <svg
                className="absolute w-64 h-24 -left-4 -top-8 opacity-10"
                viewBox="0 0 256 96"
                fill="none"
              >
                {[...Array(32)].map((_, i) => (
                  <rect
                    key={i}
                    x={i * 8}
                    y={48 - Math.random() * 40}
                    width="6"
                    height={Math.random() * 40 + 10}
                    fill="currentColor"
                    className="text-sky-500"
                  />
                ))}
              </svg>

              <h1 className="text-4xl font-black leading-tight text-white lg:text-5xl xl:text-6xl">
                Sound that breathes. <span className="text-sky-500">Stories that move.</span>
              </h1>
            </div>

            <p className="text-lg text-gray-300">
              I'm Steven, a music producer and sound engineer from Goa, India.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <ContactForm />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-sky-500 hover:text-sky-500 text-sky-400 hover:bg-white/90"
              >
                <a href="#work" className="flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Listen
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative "
          >
            <div className="relative aspect-[4/5] overflow-hidden max-lg:max-h-[500px] max-lg:ml-auto">
              <div
                className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent "
                style={{
                  clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
                }}
              >
                <div
                  className="flex items-end justify-end w-full h-full bg-bottom bg-no-repeat bg-contain bg-gradient-to-br from-neutral-800 to-neutral-900"
                  style={{ backgroundImage: `url(${HeroImage})` }}
                ></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60"></div>
              <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-r from-transparent to-neutral-900 "></div>

              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-sky-400/40"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
