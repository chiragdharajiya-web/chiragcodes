'use client'

import { ArrowDown } from 'lucide-react'
import { Magnetic } from './magnetic'
import { LinkedinIcon } from './brand-icons'

const LINKEDIN = 'https://www.linkedin.com/in/chirag-dharajiya-78a02b34a'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Ambient glowing backgrounds */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 size-[34rem] rounded-full bg-accent/20 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-5 inline-block rounded-full glass px-4 py-1.5 text-sm text-muted-foreground">
          Available for opportunities
        </p>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          Hi, I&apos;m <span className="gradient-text">Chirag Dharajiya</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Developer | Crafting Modern, Responsive, and User-Centric Web
          Experiences
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Magnetic>
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 font-medium text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.6_0.24_295_/_0.7)] transition-shadow hover:shadow-[0_10px_40px_-6px_oklch(0.7_0.26_305_/_0.8)]"
            >
              View My Work
              <ArrowDown className="size-4" />
            </a>
          </Magnetic>

          <Magnetic>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl glass px-7 py-3.5 font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <LinkedinIcon className="size-4" />
              Connect on LinkedIn
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  )
}
