import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help Center - Movie Hub',
  description: 'Find answers to common questions',
}

export default function HelpPage() {
  const faqs = [
    {
      question: 'How do I watch movies on Movie Hub?',
      answer: 'Simply browse our catalog, select a movie, and click "Play Now". No subscription required!',
    },
    {
      question: 'Do I need to create an account?',
      answer: 'You can watch movies without an account. However, creating a free account allows you to save favorites and manage your watchlist.',
    },
    {
      question: 'Is Movie Hub really free?',
      answer: 'Yes! Movie Hub is completely free with no hidden fees or subscription required.',
    },
    {
      question: 'What devices can I use?',
      answer: 'Movie Hub works on all modern devices including desktop computers, laptops, tablets, and smartphones.',
    },
    {
      question: 'How do I add movies to my list?',
      answer: 'Sign in to your account, then click the "+" button on any movie card or detail page to add it to your list.',
    },
    {
      question: 'Can I download movies for offline viewing?',
      answer: 'Currently, Movie Hub only supports streaming. Offline downloads are not available at this time.',
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Help Center</h1>
              <p className="text-muted-foreground text-base md:text-lg">
                Find answers to common questions
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="pt-6 md:pt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Still have questions?
              </p>
              <a
                href="/contact"
                className="text-primary hover:underline font-medium"
              >
                Contact our support team
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
