import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Separator } from '@/components/ui/separator'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Theta Movies',
  description: 'Privacy Policy for Theta Movies'
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-[70px]">
        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
            <Separator />

            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-muted-foreground text-sm">Last updated: November 4, 2025</p>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you sign in with Google, we collect basic profile information including your
                  name, email address, and profile picture. This information is used to create and
                  manage your account.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use your information to provide personalized recommendations, save your
                  watchlist, and improve your overall experience on Theta Movies. We do not sell
                  your personal information to third parties.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">Google Sign-In</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use Google OAuth for authentication. When you sign in with Google, you agree to
                  Google&apos;s privacy policy and terms of service. Theta Movies only receives the
                  information you authorize Google to share with us.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our service
                  and hold certain information. You can instruct your browser to refuse all cookies
                  or to indicate when a cookie is being sent.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect
                  your personal information. However, no method of transmission over the Internet is
                  100% secure.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, update, or delete your personal information. You can
                  do this by accessing your profile settings or contacting us directly.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">Children&apos;s Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our service is not directed to children under 13. We do not knowingly collect
                  personal information from children under 13. If you are a parent or guardian and
                  believe your child has provided us with personal information, please contact us.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Privacy Policy from time to time. We will notify you of any
                  changes by posting the new Privacy Policy on this page and updating the &quot;Last
                  updated&quot; date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us through our
                  contact page.
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
