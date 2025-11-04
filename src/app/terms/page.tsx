import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Separator } from '@/components/ui/separator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Movie Hub',
  description: 'Terms of Service for Movie Hub',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
            <Separator />

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground text-sm">
                Last updated: November 4, 2025
              </p>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Movie Hub, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">2. Use of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Movie Hub is a free streaming platform. You may use our service subject to these terms and applicable law. You are responsible for any activity that occurs under your account.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">3. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding your account and for all activities that occur under your account.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">4. Content</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content available on Movie Hub, including but not limited to text, graphics, logos, and software, is the property of Movie Hub or its content suppliers and is protected by copyright laws.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">5. Prohibited Uses</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You may not use our service for any illegal or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">6. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">7. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">8. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms, please contact us through our contact page.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
