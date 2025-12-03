import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What services do you offer?',
    answer:
      'I provide mixing, mastering, vocal treatment, editing, sound design, and full-track production. I can also prepare stems and deliver masters for streaming and distribution.',
  },
  {
    question: 'How do I send my files?',
    answer:
      'Upload stems or session files to a shared drive (Google Drive / Dropbox). Please include a short notes document with your vision, reference tracks and any points to watch out for. I will confirm receipt and provide next steps.',
  },
  {
    question: 'Do you work with beginners?',
    answer:
      'Absolutely. I welcome artists at every stage. I can help with arrangement, coaching on recording habits, and guide you through the production process.',
  },
  {
    question: 'Can you fix bad recordings?',
    answer:
      'Yes. I can clean up noisy or badly recorded vocals and instruments. Results depend on the source material. I will assess and propose corrective steps before starting.',
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-24 bg-neutral-900 relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Any <span className="text-sky-500">questions?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-neutral-800/50 backdrop-blur-sm border border-sky-500/20 rounded-2xl px-6 hover:bg-neutral-800/70 transition-colors"
                >
                  <AccordionTrigger className="text-left text-white hover:text-sky-400 py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
