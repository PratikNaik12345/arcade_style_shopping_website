import { useState, useRef, useCallback, useEffect } from 'react'

export function useCarousel(total) {
  const [current, setCurrent] = useState(0)
  const [animate, setAnimate] = useState(false)
  const dragStart = useRef(null)
  const dragDelta = useRef(0)
  const totalRef = useRef(total)
  useEffect(() => { totalRef.current = total }, [total])

  // Reset animate flag after the CSS transition duration (450ms)
  useEffect(() => {
    if (!animate) return
    const t = setTimeout(() => setAnimate(false), 500)
    return () => clearTimeout(t)
  }, [animate, current])

  const go = useCallback((dir) => {
    setAnimate(true)
    setCurrent((c) => (c + dir + totalRef.current) % totalRef.current)
  }, [])

  const jumpTo = useCallback((index) => {
    setAnimate(true)
    setCurrent(index)
  }, [])

  const handlePointerDown = useCallback((e) => {
    dragStart.current = e.clientX
    dragDelta.current = 0
  }, [])

  const handlePointerMove = useCallback((e) => {
    if (dragStart.current === null) return
    dragDelta.current = e.clientX - dragStart.current
  }, [])

  const handlePointerUp = useCallback(() => {
    if (dragStart.current === null) return
    const delta = dragDelta.current
    dragStart.current = null
    dragDelta.current = 0
    if (delta < -50) go(1)
    else if (delta > 50) go(-1)
  }, [go])

  return {
    current,
    animate,
    go,
    jumpTo,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  }
}
