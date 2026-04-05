import React, { useRef, useCallback } from 'react'

export default function Joystick({ onNavigate }) {
  const baseRef = useRef(null)
  const stickRef = useRef(null)

  const handlePointerDown = useCallback((e) => {
    e.preventDefault()
    const base = baseRef.current
    if (!base) return
    base.setPointerCapture(e.pointerId)

    const rect = base.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    let moved = false

    const onMove = (ev) => {
      const dx = Math.max(-18, Math.min(18, ev.clientX - cx))
      if (stickRef.current) {
        stickRef.current.style.transform = `translate(calc(-50% + ${dx}px), -50%)`
      }
      if (Math.abs(dx) > 10 && !moved) {
        moved = true
        onNavigate(dx > 0 ? 1 : -1)
      }
    }

    const onUp = () => {
      if (stickRef.current) {
        stickRef.current.style.transform = 'translate(-50%, -50%)'
      }
      base.removeEventListener('pointermove', onMove)
      base.removeEventListener('pointerup', onUp)
    }

    base.addEventListener('pointermove', onMove)
    base.addEventListener('pointerup', onUp)
  }, [onNavigate])

  return (
    <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
      <div
        ref={baseRef}
        className="w-[60px] h-[60px] rounded-full cursor-grab active:cursor-grabbing relative touch-none"
        style={{
          background: 'radial-gradient(circle at 38% 32%, #666, #1a1a1a)',
          border: '3px solid #555',
          boxShadow: '0 4px 14px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.08)',
        }}
        onPointerDown={handlePointerDown}
      >
        <div
          ref={stickRef}
          className="absolute top-1/2 left-1/2 w-[22px] h-[22px] rounded-full pointer-events-none"
          style={{
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle at 35% 30%, #00f0ff, #1a8aaa)',
            boxShadow: '0 0 14px rgba(0,240,255,0.4), 0 2px 4px rgba(0,0,0,0.3)',
            transition: 'transform 0.12s',
          }}
        />
      </div>
      <span className="font-pixel text-[6px] text-white/50 tracking-wider">MOVE</span>
    </div>
  )
}
