import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Wavefrom from '@/assets/waveform.png'

export function MusicSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="music" className="relative py-16 overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent"></div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>

      <div className="container relative z-10 px-4 mx-auto lg:px-8" ref={ref}>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Music carved with <span className="text-sky-500">emotion</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
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
            <img src={Wavefrom} alt="" />

            <div className="absolute w-64 h-64 rounded-full -right-8 -bottom-8 bg-sky-500/10 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
