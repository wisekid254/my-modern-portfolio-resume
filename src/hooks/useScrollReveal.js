import { useEffect } from 'react'

/**
 * Attaches an IntersectionObserver to every element with class "reveal".
 * Adds "visible" class when element enters the viewport.
 * Call this once at the App root level.
 */
export function useScrollReveal(threshold = 0.12) {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])
}
