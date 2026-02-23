'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const cursor = ref.current
    if (!cursor) return
    if (typeof window === 'undefined') return
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const down = () => cursor.classList.add('is-down')
    const up = () => cursor.classList.remove('is-down')
    const hide = () => cursor.classList.add('is-hidden')
    const show = () => cursor.classList.remove('is-hidden')

    document.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mousedown', down)
    document.addEventListener('mouseup', up)
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    const onEnter = () => cursor.classList.add('is-hover')
    const onLeave = () => cursor.classList.remove('is-hover')
    const getInteractive = () =>
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, summary')

    const nodes = getInteractive()
    nodes.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    const observer = new MutationObserver(() => {
      const n = getInteractive()
      n.forEach((el) => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mousedown', down)
      document.removeEventListener('mouseup', up)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
      nodes.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
      observer.disconnect()
    }
  }, [])

  return <div id="custom-cursor" aria-hidden="true" ref={ref} />
}