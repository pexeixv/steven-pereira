import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Play, Layers, Sliders, Speaker, Coffee, Sparkles } from 'lucide-react'
import { Card } from '@/components/ui/card'

const features = [
  {
    icon: Play,
    title: 'Play music',
    description: 'Performance-ready playlists and live arrangements.',
  },
  {
    icon: Layers,
    title: 'Arrange & Produce',
    description: 'Arrangement and production for any style.',
  },
  {
    icon: Sliders,
    title: 'Mix',
    description: 'Clear, punchy, emotional mixes.',
  },
  {
    icon: Speaker,
    title: 'Master',
    description: 'Polished masters for streaming and vinyl.',
  },
  {
    icon: Coffee,
    title: 'Cook',
    description: 'I can cook.',
  },
  {
    icon: Sparkles,
    title: 'Clean',
    description: 'I can clean.',
  },
]

export function SkillsetSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skillset" className="py-24 bg-black/20 relative">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What can I <span className="text-sky-500">do?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <Card className="bg-neutral-900/50 backdrop-blur-sm border-sky-500/20 rounded-2xl p-6 hover:bg-neutral-900/70 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-sky-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-sky-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-2xl lg:text-3xl font-bold text-white">
            I can cook. I can clean.{' '}
            <span className="text-sky-500">I can create an experience.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
