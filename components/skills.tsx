'use client'

import {
  Code,
  FileCode2,
  Braces,
  Terminal,
  GitBranch,
  Flame,
  Database,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useReveal } from './use-reveal'

type Skill = { name: string; icon: LucideIcon }

const groups: { title: string; items: Skill[] }[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: FileCode2 },
      { name: 'CSS3', icon: Code },
      { name: 'JavaScript (ES6+)', icon: Braces },
    ],
  },
  {
    title: 'Languages',
    items: [{ name: 'Python', icon: Terminal }],
  },
  {
    title: 'Tools & IDEs',
    items: [
      { name: 'VS Code', icon: Code },
      { name: 'GIT', icon: GitBranch },
    ],
  },
  {
    title: 'Cloud & Database',
    items: [
      { name: 'Firebase', icon: Flame },
      { name: 'Databases', icon: Database },
    ],
  },
]

export function Skills() {
  const headRef = useReveal<HTMLDivElement>()

  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div ref={headRef} className="reveal mb-12 text-center">
          <p className="mb-3 font-mono text-sm text-accent">03 — Skills</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Technical <span className="gradient-text">Toolkit</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {groups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillGroup({ group }: { group: { title: string; items: Skill[] } }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className="reveal glass rounded-2xl p-6">
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {group.title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {group.items.map((skill) => {
          const Icon = skill.icon
          return (
            <div
              key={skill.name}
              className="group flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-4 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-primary/15 hover:shadow-[0_6px_24px_-8px_oklch(0.7_0.26_305_/_0.7)]"
            >
              <Icon className="size-4 text-accent transition-transform duration-300 group-hover:scale-110" />
              {skill.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}
