import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

// 🚀 Advanced SEO & Site Name Configuration
export const metadata: Metadata = {
  title: 'Chirag Dharajiya | Software & Mobile App Developer',
  description: 'Portfolio of Chirag Dharajiya, a passionate mobile application developer specializing in Flutter, Dart, and building clean, user-centric digital solutions.',
  keywords: [
    'Chirag Dharajiya',
    'Chirag Codes',
    'Chirag codes portfolio',
    'Flutter Developer Chirag',
    'Mobile App Developer',
    'Software Developer Portfolio'
  ],
  authors: [{ name: 'Chirag Dharajiya' }],
  openGraph: {
    title: 'Chirag Dharajiya | Software & Mobile App Developer',
    description: 'Explore the technical toolkit and portfolio of Chirag Dharajiya.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Chirag Dharajiya', // Google reads this for site name
  },
  verification: {
    google: 'eXW_5jLObvvoVGlA6PsgxoxHCnAGjdN6PL7KN_uWmDQ',
  },
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* 🎯 Official Google Site Name Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Chirag Dharajiya",
            "url": "https://chiragcodes.online"
          }),
        }}
      />
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}