'use client'

import { GraduationCap, Code2, Calendar } from 'lucide-react'
import { useReveal } from './use-reveal'

export function About() {
  const ref = useReveal<HTMLDivElement>()
  const eduRef = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto grid max-w-5xl items-start gap-8 md:grid-cols-2">
        <div ref={ref} className="reveal">
          <p className="mb-3 font-mono text-sm text-accent">01 — About Me</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            A developer who loves{' '}
            <span className="gradient-text">clean code</span>
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            I&apos;m a passionate developer on a journey to master the craft of
            building practical digital solutions. I care deeply about writing
            clean, maintainable code and designing interfaces that feel
            intuitive and polished across every device.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From responsive layouts to interactive front-end features, I focus
            on turning ideas into refined, user-centric web experiences.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex size-10 items-center justify-center rounded-xl glass">
              <Code2 className="size-5 text-accent" />
            </span>
            Clean, responsive &amp; user-centric builds
          </div>
        </div>

        {/* Education card */}
        <div ref={eduRef} className="reveal" id="education">
          <p className="mb-3 font-mono text-sm text-accent">02 — Education</p>
          <div className="glass rounded-2xl p-7">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                <GraduationCap className="size-6 text-accent" />
              </span>
              <div>
                <h3 className="text-lg font-semibold">
                  B.Voc — IT (Bachelor of Vocation in Information Technology)
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Silver Oak University
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 rounded-xl bg-secondary/60 px-4 py-3 text-sm">
              <Calendar className="size-4 text-accent" />
              <span className="font-medium">3rd Year</span>
              <span className="text-muted-foreground">— In Progress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
