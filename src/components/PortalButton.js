'use client'

import { useEffect, useRef } from 'react'
import '@/styles/componentStyles/portalButton.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'

const PALETTES = [
  ['#f8c8e8', '#c8e8f8', '#e8f0c8'],
  ['#fde6c4', '#c4e6fd', '#e4c4fd'],
  ['#d4f8e8', '#f8d4e8', '#d4e8f8'],
  ['#fff0c8', '#c8f0ff', '#ffc8f0'],
  ['#e8c8f8', '#c8f8e8', '#f8e8c8'],
  ['#ffd6d6', '#d6ffee', '#d6d6ff'],
]

const ARROW = {
  up: <FontAwesomeIcon icon={faArrowUp} />,
  down: <FontAwesomeIcon icon={faArrowDown} />,
  left: <FontAwesomeIcon icon={faArrowLeft} />,
  right: <FontAwesomeIcon icon={faArrowRight} />,
}

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

function drawBlobs(canvas) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const w = canvas.width
  const h = canvas.height

  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, w, h)

  const palette = PALETTES[Math.floor(Math.random() * PALETTES.length)]

  for (let i = 0; i < 3; i++) {
    const color = palette[i]
    const side = Math.floor(Math.random() * 4)
    let cx, cy

    if (side === 0) {
      cx = randomBetween(0, w)
      cy = randomBetween(-h * 0.3, h * 0.4)
    } else if (side === 1) {
      cx = randomBetween(w * 0.6, w * 1.3)
      cy = randomBetween(0, h)
    } else if (side === 2) {
      cx = randomBetween(0, w)
      cy = randomBetween(h * 0.6, h * 1.3)
    } else {
      cx = randomBetween(-w * 0.3, w * 0.4)
      cy = randomBetween(0, h)
    }

    const rx = randomBetween(w * 0.4, w * 0.9)
    const ry = randomBetween(h * 0.7, h * 1.6)
    const maxR = Math.max(rx, ry)

    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR)
    grad.addColorStop(0, color + 'ff')
    grad.addColorStop(0.5, color + 'aa')
    grad.addColorStop(1, color + '00')

    ctx.save()
    ctx.translate(cx, cy)
    ctx.scale(rx / maxR, ry / maxR)
    ctx.translate(-cx, -cy)
    ctx.fillStyle = grad
    ctx.beginPath()
    ctx.arc(cx, cy, maxR, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }
}

export default function PortalButton({
  defaultLabel,
  hoverLabel,
  href = '#',
  onClick,
  slideDirection = 'up',
  className = '',
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
      drawBlobs(canvasRef.current)
    }
  }, [])

  const isLink = href && href !== '#'
  const btnClass = `portal-btn slide-${slideDirection}${className ? ` ${className}` : ''}`

  const inner = (
    <>
      <canvas ref={canvasRef} className="portal-blob-bg" width={220} height={56} />
      <span className="portal-solid-bg" />
      <span className="portal-label-default">{defaultLabel}</span>
      <span className="portal-label-hover">
        {hoverLabel}
        <i className="portal-arrow">{ARROW[slideDirection]}</i>
      </span>
    </>
  )

  if (isLink) {
    return (
      <a href={href} onClick={onClick} className={btnClass}>
        {inner}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={btnClass}>
      {inner}
    </button>
  )
}
