'use client'

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

export const lenisRef = { current: null }

export default function LenisWrapper({ children }) {
  const localRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Suavidade do scroll
      //easing: (t) => t, // Linear (pode ajustar para suavizar mais)
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      infinite: false,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <div>{children}</div>
}
