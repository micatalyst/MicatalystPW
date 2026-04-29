import { useEffect, useRef, useCallback } from 'react'

export function useParallax({
  speed = 0.2,
  direction = 1,
  smoothing = 0.1,
}) {
  const innerRef = useRef(null)
  const currentY = useRef(0)
  const targetY = useRef(0)
  const rafRef = useRef(null)

  const lerp = (a, b, t) => a + (b - a) * t

  const tick = useCallback(() => {
    currentY.current = lerp(currentY.current, targetY.current, smoothing)
    if (innerRef.current) {
      const el = innerRef.current
      const existing = el.style.transform.match(/scale\(([^)]+)\)/)
      const scaleStr = existing ? ` scale(${existing[1]})` : ''
      el.style.transform = `translateY(${currentY.current.toFixed(2)}px)${scaleStr}`
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [smoothing])

  const handleScroll = useCallback(() => {
    if (!innerRef.current) return
    const rect = innerRef.current.closest('[data-parallax-root]')?.getBoundingClientRect()
      ?? innerRef.current.getBoundingClientRect()
    const vh = window.innerHeight
    const center = rect.top + rect.height / 2 - vh / 2
    const norm = center / (vh / 2)
    targetY.current = norm * speed * 100 * direction
  }, [speed, direction])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [handleScroll, tick])

  return innerRef
}