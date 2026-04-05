import React from 'react'

export default function GrabButton({ onClick, disabled }) {
  return (
    <div className="flex-1 flex items-center justify-center">
      <button
        className={`w-[92px] h-[92px] rounded-full border-none cursor-pointer relative flex items-center justify-center grab-btn-active transition-all duration-100 ${
          disabled ? 'opacity-50 pointer-events-none' : 'animate-grab-glow'
        }`}
        style={{
          background: 'radial-gradient(circle at 38% 32%, #ff5577, #cc1140)',
          boxShadow:
            '0 7px 0 #880025, 0 9px 22px rgba(0,0,0,0.4), 0 0 35px rgba(255,45,100,0.25), inset 0 -5px 10px rgba(0,0,0,0.3), inset 0 5px 10px rgba(255,255,255,0.15)',
        }}
        onClick={onClick}
        disabled={disabled}
      >
        <span className="font-pixel text-[13px] text-white tracking-[2px]"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.4)' }}
        >
          GRAB
        </span>
      </button>
    </div>
  )
}
