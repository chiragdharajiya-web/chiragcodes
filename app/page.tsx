import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

// 🚀 Powerful SEO Metadata Configuration
export const metadata: Metadata = {
  title: 'Chirag Codes | Software & Mobile App Developer',
  description: 'Portfolio of Chirag Codes, a passionate mobile application developer specializing in Flutter, Dart, and building clean, user-centric digital solutions.',
  keywords: [
    'Chirag Codes',
    'Chirag codes portfolio',
    'Chirag Dharajiya',
    'Flutter Developer Chirag',
    'Mobile App Developer',
    'Software Developer Portfolio'
  ],
  authors: [{ name: 'Chirag Codes' }],
  openGraph: {
    title: 'Chirag Codes | Software & Mobile App Developer',
    description: 'Explore the technical toolkit and portfolio of Chirag Codes.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
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