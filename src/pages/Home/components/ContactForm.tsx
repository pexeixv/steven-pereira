import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Card } from '@/components/ui/card'
import { Send } from 'lucide-react'

function ContactForm() {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white rounded-full cursor-pointer bg-sky-500 hover:bg-sky-600 w-fit">
          Work with me
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">
              Work with <span className="text-sky-500">me</span>
            </h2>
          </DialogTitle>
          <DialogDescription asChild>
            <p className="text-lg text-gray-400">Let's create something amazing together</p>
          </DialogDescription>
        </DialogHeader>
        <Card className="p-8 bg-neutral-900/50 backdrop-blur-sm border-sky-500/20 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="text-white bg-neutral-800 border-sky-500/20 focus:border-sky-500"
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
                  className="text-white bg-neutral-800 border-sky-500/20 focus:border-sky-500"
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
                className="text-white bg-neutral-800 border-sky-500/20 focus:border-sky-500 min-h-32"
                placeholder="Share your vision, reference tracks, or any specific requirements..."
                required
              />
            </div>

            <div className="space-y-3 ">
              <Label className="text-white">What do you need?</Label>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="mixing"
                    checked={formData.needMixing}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, needMixing: checked as boolean })
                    }
                    className="border-sky-500/50 data-[state=checked]:bg-sky-500"
                  />
                  <Label htmlFor="mixing" className="text-sm text-gray-300 cursor-pointer">
                    Mixing
                  </Label>
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
                  <Label htmlFor="mastering" className="text-sm text-gray-300 cursor-pointer">
                    Mastering
                  </Label>
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
                  <Label htmlFor="production" className="text-sm text-gray-300 cursor-pointer">
                    Full production
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button
                type="submit"
                className="flex-1 text-white rounded-full cursor-pointer bg-sky-500 hover:bg-sky-600"
              >
                <Send className="size-4" />
                Send message
              </Button>
            </div>
          </form>
        </Card>
      </DialogContent>
    </Dialog>
  )
}

export default ContactForm
