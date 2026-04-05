import React from 'react'

export default function Header({ cartCount, onCartClick }) {
  return (
    <div className="flex-shrink-0 h-16 flex items-center justify-center relative bg-gradient-to-b from-[#3a2060] to-[#261448] border-b-2 border-metal-mid z-10">
      {/* Neon border frame */}
      <div className="absolute inset-y-1.5 inset-x-3.5 border-2 border-neon-pink rounded-lg animate-neon-pulse pointer-events-none" />

      {/* Brand */}
      <span className="font-pixel text-xl text-white tracking-[4px] text-shadow-neon-pink animate-neon-flicker">
        Naik Arcade
      </span>

      {/* Cart button */}
      <div
        className="absolute right-5 top-1/2 -translate-y-1/2 w-9 h-9 cursor-pointer text-neon-pink filter-neon-pink transition-transform hover:scale-[1.15]"
        onClick={onCartClick}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
        <div
          className={`absolute -top-1.5 -right-2 min-w-[18px] h-[18px] bg-neon-pink text-white text-[9px] font-extrabold rounded-full flex items-center justify-center px-1 shadow-[0_0_8px_#ff2d95] transition-transform duration-300 ${
            cartCount > 0 ? 'scale-100' : 'scale-0'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
        >
          {cartCount}
        </div>
      </div>
    </div>
  )
}
