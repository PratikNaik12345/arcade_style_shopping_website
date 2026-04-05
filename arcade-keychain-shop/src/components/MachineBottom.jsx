import React from 'react'
import KeychainSVG from './KeychainSVG'

export default function MachineBottom({ chutePrizes }) {
  return (
    <div
      className="flex-shrink-0 h-[70px] flex items-center justify-center gap-5 relative"
      style={{
        background: 'linear-gradient(180deg, #2a1845, #0a0418)',
        borderTop: '3px solid #706088',
      }}
    >
      {/* Left pipe */}
      <div
        className="absolute bottom-2.5 left-2.5 w-[18px] h-10 rounded-[9px]"
        style={{
          background: 'linear-gradient(90deg, #8a4060, #a04070, #8a4060)',
          boxShadow: '0 0 8px rgba(160,64,112,0.3)',
        }}
      />

      {/* Coin slot */}
      <div
        className="w-9 h-[46px] rounded-md flex items-center justify-center"
        style={{
          background: 'linear-gradient(180deg, #666, #333)',
          border: '2px solid #777',
          boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.5)',
        }}
      >
        <div className="w-[18px] h-[3px] bg-[#111] rounded-sm" style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)' }} />
      </div>

      {/* Prize chute */}
      <div
        className="w-[130px] h-[46px] rounded-[10px] flex items-center justify-center gap-1.5 p-1 overflow-hidden"
        style={{
          background: 'rgba(0,0,0,0.5)',
          border: '2px solid rgba(255,255,255,0.06)',
          boxShadow: 'inset 0 0 18px rgba(0,0,0,0.4)',
        }}
      >
        {chutePrizes.map((kc, i) => (
          <div
            key={`chute-${i}-${kc.id}`}
            className="w-[26px] h-9 rounded overflow-hidden opacity-75 animate-drop-in"
            style={{ boxShadow: '0 2px 6px rgba(0,0,0,0.4)' }}
          >
            <KeychainSVG kc={kc} width={26} />
          </div>
        ))}
      </div>

      {/* Right pipe */}
      <div
        className="absolute bottom-2.5 right-2.5 w-[18px] h-10 rounded-[9px]"
        style={{
          background: 'linear-gradient(90deg, #8a4060, #a04070, #8a4060)',
          boxShadow: '0 0 8px rgba(160,64,112,0.3)',
        }}
      />
    </div>
  )
}
