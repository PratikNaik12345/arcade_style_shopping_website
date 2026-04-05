import React, { useEffect, useRef, useState } from 'react'
import KeychainSVG from './KeychainSVG'

export default function FlyingPrize({ kc, sourceRect, targetRect, onComplete }) {
  const ref = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    // Trigger the fly animation after mount
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setAnimated(true)
      })
    })

    const timer = setTimeout(() => {
      onComplete()
    }, 700)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!sourceRect || !targetRect) return null

  const dx = targetRect.left + targetRect.width / 2 - sourceRect.left - sourceRect.width / 2
  const dy = targetRect.top + targetRect.height / 2 - sourceRect.top - sourceRect.height / 2

  return (
    <div
      ref={ref}
      className="fixed z-[200] pointer-events-none rounded-lg overflow-hidden"
      style={{
        left: sourceRect.left,
        top: sourceRect.top,
        width: sourceRect.width,
        height: sourceRect.height,
        boxShadow: '0 0 30px rgba(255,215,0,0.5)',
        transform: animated
          ? `translate(${dx}px, ${dy}px) scale(0.22) rotate(18deg)`
          : 'translate(0, 0) scale(1) rotate(0deg)',
        opacity: animated ? 0 : 1,
        transition: 'all 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      <KeychainSVG kc={kc} width={Math.round(sourceRect.width)} />
    </div>
  )
}
