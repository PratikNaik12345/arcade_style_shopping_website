import { useState, useRef, useCallback, useEffect } from 'react'

export function useCarousel(total) {
  const [current, setCurrent] = useState(0)
  const [animate, setAnimate] = useState(false)
  const dragStart = useRef(null)
  const dragDelta = useRef(0)
  const dragVelocity = useRef(0)
  const lastX = useRef(0)
  const lastTime = useRef(0)
  const rafId = useRef(null)
  const accumulatedDrag = useRef(0)
  const totalRef = useRef(total)

  useEffect(() => { totalRef.current = total }, [total])

  useEffect(() => {
    if (!animate) return
    const t = setTimeout(() => setAnimate(false), 500)
    return () => clearTimeout(t)
  }, [animate, current])

  const snapTo = useCallback((index) => {
    setAnimate(true)
    setCurrent((c) => {
      const n = totalRef.current
      if (typeof index === 'function') return ((index(c) % n) + n) % n
      return ((index % n) + n) % n
    })
  }, [])

  const jumpTo = useCallback((index) => snapTo(index), [snapTo])

  const go = useCallback((dir) => {
    setAnimate(true)
    setCurrent((c) => ((c + dir + totalRef.current) % totalRef.current + totalRef.current) % totalRef.current)
  }, [])

  const runMomentum = useCallback(() => {
    let velocity = dragVelocity.current
    let drag = Math.max(-200, Math.min(200, accumulatedDrag.current))
    const CARD_WIDTH = 200
    const FRICTION = .8

    const tick = () => {
      velocity *= FRICTION
      drag += velocity

      if (Math.abs(drag) >= CARD_WIDTH) {
        // const steps = Math.round(drag / CARD_WIDTH)
        const steps = Math.max(-3, Math.min(3, Math.round(drag / CARD_WIDTH)))
        accumulatedDrag.current = drag - steps * CARD_WIDTH
        snapTo(c => c - steps)
        drag = accumulatedDrag.current
      }

      if (Math.abs(velocity) > 0.5) {
        rafId.current = requestAnimationFrame(tick)
      } else {
        accumulatedDrag.current = 0
        dragVelocity.current = 0
      }
    }

    rafId.current = requestAnimationFrame(tick)
  }, [snapTo])

  const handlePointerDown = useCallback((e) => {
    if (rafId.current) cancelAnimationFrame(rafId.current)
    dragStart.current = e.clientX
    lastX.current = e.clientX
    lastTime.current = performance.now()
    dragDelta.current = 0
    dragVelocity.current = 0
    accumulatedDrag.current = 0
  }, [])

  const handlePointerMove = useCallback((e) => {
    if (dragStart.current === null) return
    const now = performance.now()
    const dt = now - lastTime.current || 16
    const dx = e.clientX - lastX.current
    dragVelocity.current = dragVelocity.current * 0.6 + (dx / dt) * 16 * 0.4
    lastX.current = e.clientX
    lastTime.current = now
    dragDelta.current = e.clientX - dragStart.current
  }, [])

  const handlePointerUp = useCallback(() => {
    if (dragStart.current === null) return
    const delta = dragDelta.current
    dragStart.current = null
    const CARD_WIDTH = 200
    if (Math.abs(dragVelocity.current) > 2) {
      accumulatedDrag.current = delta
      runMomentum()
    } else if (Math.abs(delta) > CARD_WIDTH / 2) {
      snapTo(c => c + Math.sign(delta))
    }
    dragDelta.current = 0
  }, [runMomentum, snapTo])

  return {
    current,
    animate,
    go,
    jumpTo,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
    handlePointerCancel: handlePointerUp,
  }
}

