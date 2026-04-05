import React from 'react'
import { CLAW_POSITIONS } from '../data/keychains'

export default function ClawMechanism({ currentIndex, isGrabbing, cableHeight }) {
  const trolleyPos = CLAW_POSITIONS[currentIndex]

  return (
    <>
      {/* Rail */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-2 z-[6] rounded-b"
        style={{
          background: 'linear-gradient(180deg, #888, #555)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
        }}
      />

      {/* Trolley */}
      <div
        className="absolute top-1 w-7 h-3 rounded z-[7] transition-[left] duration-500"
        style={{
          left: `${trolleyPos}%`,
          transform: 'translateX(-50%)',
          background: 'linear-gradient(180deg, #aaa, #777)',
          boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      />

      {/* Cable */}
      <div
        className="absolute top-[14px] left-1/2 w-0.5 -translate-x-1/2 z-[6] cable-pattern transition-[height] duration-[650ms]"
        style={{
          height: `${cableHeight}px`,
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      />

      {/* Claw Head */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-[7] transition-[top] duration-[650ms]"
        style={{
          top: `${14 + cableHeight}px`,
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Block */}
        <div
          className="w-7 h-[18px] mx-auto rounded-t border border-[#aaa] relative"
          style={{
            background: 'linear-gradient(180deg, #bbb, #888)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
          }}
        >
          <div
            className="absolute top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-1.5 rounded-sm bg-arcade-gold"
            style={{ boxShadow: '0 0 8px rgba(255,215,0,0.5)' }}
          />
        </div>

        {/* Prongs */}
        <div className="flex justify-center gap-4 -mt-px">
          <div
            className="w-[3px] h-5 rounded-b-sm origin-top transition-transform duration-300 relative"
            style={{
              background: 'linear-gradient(180deg, #999, #666)',
              transform: `rotate(${isGrabbing ? -4 : -14}deg)`,
            }}
          >
            <div className="absolute -bottom-[3px] -left-[3px] w-[9px] h-[5px] bg-[#777] rounded-b" />
          </div>
          <div
            className="w-[3px] h-5 rounded-b-sm origin-top transition-transform duration-300 relative"
            style={{
              background: 'linear-gradient(180deg, #999, #666)',
              transform: `rotate(${isGrabbing ? 4 : 14}deg)`,
            }}
          >
            <div className="absolute -bottom-[3px] -left-[3px] w-[9px] h-[5px] bg-[#777] rounded-b" />
          </div>
        </div>
      </div>
    </>
  )
}
