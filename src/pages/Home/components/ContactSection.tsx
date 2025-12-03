import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Card } from '@/components/ui/card'
import { Calendar, Send } from 'lucide-react'

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    needMixing: false,
    needMastering: false,
    fullProduction: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="work-with-me" className="py-24 bg-black/20 relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Work with <span className="text-sky-500">me</span>
          </h2>
          <p className="text-lg text-gray-400">Let's create something amazing together</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-neutral-900/50 backdrop-blur-sm border-sky-500/20 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-neutral-800 border-sky-500/20 text-white focus:border-sky-500"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-neutral-800 border-sky-500/20 text-white focus:border-sky-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Tell me about your project
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-neutral-800 border-sky-500/20 text-white focus:border-sky-500 min-h-32"
                  placeholder="Share your vision, reference tracks, or any specific requirements..."
                  required
                />
              </div>

              <div className="space-y-3">
                <Label className="text-white">What do you need?</Label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="mixing"
                      checked={formData.needMixing}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, needMixing: checked as boolean })
                      }
                      className="border-sky-500/50 data-[state=checked]:bg-sky-500"
                    />
                    <label htmlFor="mixing" className="text-sm text-gray-300 cursor-pointer">
                      I need mixing
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="mastering"
                      checked={formData.needMastering}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, needMastering: checked as boolean })
                      }
                      className="border-sky-500/50 data-[state=checked]:bg-sky-500"
                    />
                    <label htmlFor="mastering" className="text-sm text-gray-300 cursor-pointer">
                      I need mastering
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="production"
                      checked={formData.fullProduction}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, fullProduction: checked as boolean })
                      }
                      className="border-sky-500/50 data-[state=checked]:bg-sky-500"
                    />
                    <label htmlFor="production" className="text-sm text-gray-300 cursor-pointer">
                      Full production
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  className="flex-1 bg-sky-500 hover:bg-sky-600 text-white rounded-full"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send message
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-sky-500 text-sky-400 hover:bg-sky-500/10 rounded-full"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Request quote
                </Button>
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
