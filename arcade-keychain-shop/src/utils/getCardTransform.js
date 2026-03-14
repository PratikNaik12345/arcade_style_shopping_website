export function getCardTransform(index, current, total, animate) {
  const offset = ((index - current + total) % total + total) % total
  const norm = offset > total / 2 ? offset - total : offset
  const abs = Math.abs(norm)
  const R = 340

  const angle = norm * (360 / total) * (Math.PI / 180)
  const x = Math.sin(angle) * R
  const z = Math.cos(angle) * R - R
  const rotY = norm * (360 / total)

  let scale = 1
  let opacity = 1
  let visibility = 'visible'

  if (abs === 0) { scale = 1; opacity = 1 }
  else if (abs === 1) { scale = 0.82; opacity = 0.7 }
  else if (abs === 2) { scale = 0.65; opacity = 0.4 }
  else if (abs === 3) { scale = 0.5; opacity = 0.12 }
  else { scale = 0.4; opacity = 0; visibility = 'hidden' }

  return {
    transform: `translateX(${x}px) translateZ(${z}px) rotateY(${rotY}deg) scale(${scale})`,
    opacity,
    visibility,
    transition: animate
      ? 'transform 0.45s cubic-bezier(0.34,1.2,0.64,1), opacity 0.35s ease'
      : 'none',
    zIndex: abs === 0 ? 10 : abs === 1 ? 5 : abs === 2 ? 3 : 1,
    pointerEvents: abs <= 1 ? 'auto' : 'none',
  }
}
