import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Zap, Target } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const tools = ['Studio One', 'FL Studio', 'Ableton', 'Pro Tools', 'Waves', 'FabFilter', 'UAD']

const instruments = ['Keyboard', 'Guitar']

const workflowSteps = ['Receive session', 'Organize', 'Mix', 'Review', 'Master', 'Deliver']

const principles = [
  {
    icon: Heart,
    title: 'Emotion first',
    description:
      'I follow a focused mixing and mastering routine. Every project starts with a clear emotional goal, then I shape the sound to match that vision while keeping the mix clean, balanced and intentional.',
  },
  {
    icon: Zap,
    title: 'Organized sessions',
    description:
      'My workflow is fast and organized so you can stay creative. I build tidy sessions, remove technical friction, and deliver mixes quickly without compromising quality.',
  },
  {
    icon: Target,
    title: 'Clarity & depth',
    description:
      'Leave the technical detail to me. I deliver mixes with clarity, depth and emotion, ensuring every element serves the story of your track.',
  },
]

export function WorkflowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-24 bg-neutral-900">
      <div className="container px-4 mx-auto lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
            Workflows & <span className="text-sky-500">Tools</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 mb-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">Tools I use</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  >
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm cursor-default border-sky-500/30 text-sky-400 hover:bg-sky-500/10"
                    >
                      {tool}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">Instruments I play</h3>
              <div className="flex flex-wrap gap-2">
                {instruments.map((instrument, index) => (
                  <motion.div
                    key={instrument}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  >
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm cursor-default border-sky-500/30 text-sky-400 hover:bg-sky-500/10"
                    >
                      {instrument}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold text-white">Process</h3>
              <div className="flex items-center gap-2 pb-4 overflow-x-auto">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                    className="flex items-center gap-2 whitespace-nowrap"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-xs font-semibold border rounded-full bg-sky-500/20 border-sky-500/40 text-sky-400">
                      {index + 1}
                    </div>
                    <span className="text-sm text-gray-300">{step}</span>
                    {index < workflowSteps.length - 1 && (
                      <div className="w-4 h-px mx-1 bg-sky-500/30"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.5 + index * 0.1 }}
                >
                  <Card className="p-6 bg-neutral-800/50 backdrop-blur-sm border-sky-500/20 rounded-2xl">
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center flex-shrink-0 rounded-full w-11 h-11 bg-sky-500/10">
                        <Icon className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                        <h4 className="mb-2 text-lg font-semibold text-white">{principle.title}</h4>
                        <p className="text-sm leading-relaxed text-gray-400">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
