'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { lenisRef } from '@/lib/LenisWrapper'

export function ScrollToTop() {
  // ... existing code ...
  const pathname = usePathname()
  // ... existing code ...

  useEffect(() => {
    // Disable native history scroll restoration; we control it manually
    try {
      if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }
    } catch (_) {}

    const lenis = lenisRef.current

    if (!lenis) {
      // Lenis not ready? Fallback to native immediate jump
      window.scrollTo(0, 0)
      return
    }

    // Stop any ongoing smooth scroll animation
    lenis.stop()

    // Immediately jump to the top via Lenis
    lenis.scrollTo(0, { immediate: true })

    // Ensure window scroll position is also at top on the next frame
    requestAnimationFrame(() => {
      window.scrollTo(0, 0)
      // Restart Lenis once we're at the top
      lenis.start()
    })
  }, [pathname])

  return null
}
