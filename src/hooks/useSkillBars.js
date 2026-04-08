import { useRef, useState, useEffect } from 'react'

/**
 * Returns a ref to attach to the skills container and an `animated` boolean.
 * `animated` flips to true the first time the container enters the viewport,
 * which you use to drive the CSS width transition on each skill bar.
 */
export function useSkillBars(threshold = 0.3) {
  const ref = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true)
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [animated, threshold])

  return { ref, animated }
}
