import { useEffect, useRef } from 'react'
import { getLenis } from './useLenis'

/**
 * Magnetic scroll snap between Hero (scrollY = 0) and Gallery (scrollY = 1vh).
 * Only activates in the transition zone (0 – 1.5vh).
 * Past 1.5vh the user scrolls freely into About / Contact.
 */
export function useHeroGallerySnap() {
  const timerRef     = useRef(null)
  const snappingRef  = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      const lenis = getLenis()
      if (!lenis || snappingRef.current) return

      const y  = window.scrollY
      const vh = window.innerHeight

      // Outside the snap zone → leave the user alone
      if (y >= vh * 1.5) return

      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        const current = window.scrollY
        if (current >= vh * 1.5) return   // re-check after debounce

        // < 50 % of vh → snap back to Hero; otherwise → snap to Gallery
        const target = current < vh * 0.5 ? 0 : vh

        snappingRef.current = true
        lenis.scrollTo(target, {
          duration: 0.75,
          easing: (t) => 1 - Math.pow(1 - t, 4), // ease-out quart
          onComplete: () => { snappingRef.current = false },
        })
      }, 120) // wait 120 ms after scrolling stops
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      clearTimeout(timerRef.current)
    }
  }, [])
}
