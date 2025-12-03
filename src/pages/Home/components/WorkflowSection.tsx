import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Zap, Target } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const tools = [
  'FL Studio',
  'Ableton',
  'Pro Tools',
  'Waves',
  'FabFilter',
  'UAD',
  'Native Instruments',
]

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
    <section id="experience" className="py-24 bg-neutral-900 relative">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Workflows & <span className="text-sky-500">Tools</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Tools I use</h3>
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
                      className="border-sky-500/30 text-sky-400 hover:bg-sky-500/10 px-4 py-2 text-sm cursor-default"
                    >
                      {tool}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Process</h3>
              <div className="flex items-center gap-2 overflow-x-auto pb-4">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                    className="flex items-center gap-2 whitespace-nowrap"
                  >
                    <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 text-xs font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-sm text-gray-300">{step}</span>
                    {index < workflowSteps.length - 1 && (
                      <div className="w-4 h-px bg-sky-500/30 mx-1"></div>
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
                  <Card className="bg-neutral-800/50 backdrop-blur-sm border-sky-500/20 rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-full bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-sky-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{principle.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">
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
