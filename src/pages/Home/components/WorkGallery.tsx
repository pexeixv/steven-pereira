import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Coastal Dreams',
    genre: ['Ambient', 'Electronic'],
    duration: '4:32',
    type: 'Mix & Master',
  },
  {
    title: 'Urban Nights',
    genre: ['Hip-Hop', 'Trap'],
    duration: '3:45',
    type: 'Production',
  },
  {
    title: 'Velvet Horizon',
    genre: ['Jazz', 'Soul'],
    duration: '5:18',
    type: 'Mix',
  },
  {
    title: 'Echoes of Goa',
    genre: ['World', 'Fusion'],
    duration: '6:02',
    type: 'Full Production',
  },
]

export function WorkGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  const togglePlay = (index: number) => {
    setPlayingIndex(playingIndex === index ? null : index)
  }

  return (
    <section id="work" className="py-24 bg-black/20 relative">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Take a look at my <span className="text-sky-500">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <Card className="bg-neutral-900/50 backdrop-blur-sm border-sky-500/20 rounded-2xl overflow-hidden hover:bg-neutral-900/70 hover:-translate-y-1 transition-all duration-300 group">
                <div className="relative aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-full h-full opacity-20" viewBox="0 0 200 100">
                      {[...Array(40)].map((_, i) => (
                        <motion.rect
                          key={i}
                          x={i * 5}
                          y={50 - Math.sin(i * 0.5) * 20}
                          width="3"
                          height={Math.sin(i * 0.5) * 40 + 20}
                          fill="currentColor"
                          className="text-sky-500"
                          animate={
                            playingIndex === index
                              ? {
                                  height: [
                                    Math.sin(i * 0.5) * 40 + 20,
                                    Math.sin(i * 0.5 + 0.5) * 40 + 20,
                                    Math.sin(i * 0.5) * 40 + 20,
                                  ],
                                }
                              : {}
                          }
                          transition={{
                            duration: 1,
                            repeat: playingIndex === index ? Infinity : 0,
                            delay: i * 0.02,
                          }}
                        />
                      ))}
                    </svg>
                  </div>

                  <button
                    onClick={() => togglePlay(index)}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <div className="w-16 h-16 rounded-full bg-sky-500 flex items-center justify-center hover:bg-sky-600 transition-colors">
                      {playingIndex === index ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white ml-1" />
                      )}
                    </div>
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400">{project.duration}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.genre.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-sky-500/30 text-sky-400 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Badge className="bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 border-0">
                    {project.type}
                  </Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button
            variant="outline"
            className="border-sky-500 text-sky-400 hover:bg-sky-500/10 rounded-full px-8"
          >
            View all projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
