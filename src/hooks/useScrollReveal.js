import { useEffect, useRef, useState } from 'react'

/**
 * Observes a container via IntersectionObserver.
 * Returns { ref, visible } — set `ref` on the element you want to watch.
 * `visible` flips true once the element enters the viewport (one-shot).
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

/**
 * Convenience: returns inline transition styles for a staggered child.
 * @param {boolean} visible  — parent visibility flag
 * @param {number}  index    — 0-based child index
 * @param {number}  delay    — base stagger delay per step (seconds)
 */
export function revealStyle(visible, index = 0, delay = 0.1) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(28px)',
    transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${index * delay}s,
                 transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${index * delay}s`,
  }
}
