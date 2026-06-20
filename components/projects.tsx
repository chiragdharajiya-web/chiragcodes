'use client'

import { FolderGit2, ArrowUpRight } from 'lucide-react'
import { useReveal } from './use-reveal'
import { Magnetic } from './magnetic'

const projects = [
  {
    title: 'Personal Portfolio',
    tech: ['HTML', 'CSS'],
    description:
      'Designed and developed a personal portfolio website from scratch. Created a clean, modern user interface with a fully responsive layout optimized for mobile, tablet, and desktop devices. Implemented structured sections for smooth data presentation and improved code organization.',
  },
  {
    title: 'Amazon Clone',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Developed a basic Amazon-style frontend layout replicating key visual structures. Built custom product grid sections, a responsive navigation bar, and a detailed footer. Integrated basic JavaScript functionalities to simulate dynamic features like an active add-to-cart counter and functional search input.',
  },
]

export function Projects() {
  const headRef = useReveal<HTMLDivElement>()

  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div ref={headRef} className="reveal mb-12 text-center">
          <p className="mb-3 font-mono text-sm text-accent">04 — Projects</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Selected <span className="gradient-text">Work</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
}: {
  project: { title: string; tech: string[]; description: string }
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal group relative flex flex-col overflow-hidden rounded-2xl glass p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_60px_-20px_oklch(0.6_0.24_295_/_0.6)]"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-primary/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-60" />

      <div className="mb-5 flex items-center justify-between">
        <span className="flex size-12 items-center justify-center rounded-xl bg-primary/20">
          <FolderGit2 className="size-6 text-accent" />
        </span>
        <Magnetic strength={0.6}>
          <a
            href="#"
            aria-label={`View ${project.title}`}
            className="flex size-10 items-center justify-center rounded-xl glass text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowUpRight className="size-5" />
          </a>
        </Magnetic>
      </div>

      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
