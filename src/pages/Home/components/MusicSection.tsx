import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function MusicSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="music" className="py-24 bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent"></div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Music carved with <span className="text-sky-500">emotion</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I craft music that carries emotion first. Every beat, every silence, and every
              frequency is placed with intention to tell a story.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border border-sky-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent"></div>

              <svg className="w-full h-48 relative z-10" viewBox="0 0 400 192">
                {[...Array(80)].map((_, i) => {
                  const height = Math.sin(i * 0.3) * 40 + Math.random() * 60 + 20
                  return (
                    <motion.rect
                      key={i}
                      x={i * 5}
                      y={96 - height / 2}
                      width="3"
                      height={height}
                      fill="currentColor"
                      className="text-sky-500"
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.01,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        repeatDelay: 2,
                      }}
                    />
                  )
                })}
              </svg>

              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent pointer-events-none"></div>
            </div>

            <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
