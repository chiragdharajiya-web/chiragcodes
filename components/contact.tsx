'use client'

import { useState } from 'react'
import { Mail, Send, Check } from 'lucide-react'
// ✅ Yahan se InstagramIcon hata diya hai taaki koi error na aaye
import { LinkedinIcon, GithubIcon } from './brand-icons'
import { useReveal } from './use-reveal'
import { Magnetic } from './magnetic'

const EMAIL = 'dharjiyachirag3@gmail.com'
const LINKEDIN = 'https://www.linkedin.com/in/chirag-dharajiya-78a02b34a'
const GITHUB = 'https://www.github.com/chirag-dharajiya'
const INSTAGRAM = 'https://www.instagram.com/dharajiya__chirag?igsh=ajU4Ymw1cHZrYnlt'

export function Contact() {
  const headRef = useReveal<HTMLDivElement>()
  const formRef = useReveal<HTMLFormElement>()
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
      />
      <div className="relative z-10 mx-auto max-w-2xl">
        <div ref={headRef} className="reveal mb-10 text-center">
          <p className="mb-3 font-mono text-sm text-accent">05 — Contact</p>
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s <span className="gradient-text">build something</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Have a project in mind or just want to say hi? Drop me a message.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="reveal glass space-y-4 rounded-2xl p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" type="text" placeholder="Your name" />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Tell me about your idea..."
              className="w-full resize-none rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-accent focus:shadow-[0_0_0_4px_oklch(0.7_0.26_305_/_0.18)]"
            />
          </div>

          <Magnetic strength={0.25} className="w-full">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground shadow-[0_8px_30px_-8px_oklch(0.6_0.24_295_/_0.7)] transition-shadow hover:shadow-[0_10px_40px_-6px_oklch(0.7_0.26_305_/_0.8)]"
            >
              {sent ? (
                <>
                  <Check className="size-4" /> Message Sent
                </>
              ) : (
                <>
                  <Send className="size-4" /> Send Message
                </>
              )}
            </button>
          </Magnetic>
        </form>

        {/* Social links */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Social
            href={`mailto:${EMAIL}`}
            label="Email"
            icon={<Mail className="size-4" />}
          />
          <Social
            href={LINKEDIN}
            label="LinkedIn"
            icon={<LinkedinIcon className="size-4" />}
            external
          />
          <Social
            href={GITHUB}
            label="GitHub"
            icon={<GithubIcon className="size-4" />}
            external
          />
          
          {/* ✅ Yahan humne direct pure SVG icon daal diya hai jo bina kisi external dependency ke chalega */}
          <Social
            href={INSTAGRAM}
            label="Instagram"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            }
            external
          />
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string
  name: string
  type: string
  placeholder: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/60 focus:border-accent focus:shadow-[0_0_0_4px_oklch(0.7_0.26_305_/_0.18)]"
      />
    </div>
  )
}

function Social({
  href,
  label,
  icon,
  external,
}: {
  href: string
  label: string
  icon: React.ReactNode
  external?: boolean
}) {
  return (
    <Magnetic strength={0.5}>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="flex items-center gap-2 rounded-xl glass px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
      >
        {icon}
        {label}
      </a>
    </Magnetic>
  )
}