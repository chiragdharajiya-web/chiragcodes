'use client'

import { useEffect, useRef } from 'react'

/**
 * Adds the `is-visible` class to the element once it scrolls into view,
 * triggering the CSS fade-in animation defined by the `.reveal` utility.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Reveal as soon as any part of the element enters the viewport.
    // Using threshold 0 (instead of a fraction) ensures sections taller
    // than the viewport still reveal — a fractional threshold can never be
    // met when 15% of the element is larger than the screen height.
    const reveal = () => el.classList.add('is-visible')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal()
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)

    // Failsafe: if the observer never fires (e.g. element already in view
    // before hydration, or in constrained preview frames), reveal anyway.
    const fallback = window.setTimeout(reveal, 1200)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return ref
}
