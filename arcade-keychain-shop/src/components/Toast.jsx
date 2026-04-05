import React, { useEffect } from 'react'

export default function Toast({ message, visible, onHide }) {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onHide, 2800)
      return () => clearTimeout(timer)
    }
  }, [visible, onHide])

  return (
    <div
      className="fixed bottom-6 left-1/2 text-white px-7 py-3 rounded-full font-extrabold text-sm pointer-events-none z-[300]"
      style={{
        background: 'linear-gradient(135deg, #b44dff, #ff2d95)',
        boxShadow: '0 6px 25px rgba(180,77,255,0.35)',
        transform: visible
          ? 'translateX(-50%) translateY(0)'
          : 'translateX(-50%) translateY(100px)',
        opacity: visible ? 1 : 0,
        transition:
          'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s',
      }}
    >
      {message}
    </div>
  )
}
