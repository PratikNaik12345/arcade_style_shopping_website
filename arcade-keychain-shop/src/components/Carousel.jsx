import React from 'react'
import KeychainSVG from './KeychainSVG'

export default function Carousel({ keychains, currentIndex, onSelect }) {
  return (
    <div
      className="absolute bottom-[4%] left-0 right-0 h-[60%] flex items-center justify-center z-[4]"
      style={{ perspective: '900px' }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {keychains.map((kc, i) => {
          const offset = i - currentIndex
          const absOffset = Math.abs(offset)
          if (absOffset > 2) return null

          const isActive = i === currentIndex
          const w = isActive ? 115 : 85
          const h = isActive ? 195 : 145
          const tx = offset * (isActive ? 0 : 115)
          const sc = 1 - absOffset * 0.14
          const ry = offset * -10

          return (
            <div
              key={kc.id}
              className="absolute cursor-pointer"
              style={{
                zIndex: 10 - absOffset,
                opacity: 1 - absOffset * 0.28,
                transform: `translateX(${tx}px) scale(${sc}) rotateY(${ry}deg)`,
                transformStyle: 'preserve-3d',
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
              onClick={() => onSelect(i)}
            >
              {/* Swing wrapper */}
              <div
                className="animate-swing"
                style={{
                  animationDelay: `${-i * 0.7}s`,
                  animationDuration: `${3.5 + i * 0.3}s`,
                  transformOrigin: 'top center',
                }}
              >
              {/* Hook */}
              <div className="w-2.5 h-2.5 border-2 border-[#bbb] rounded-full mx-auto -mb-[3px] relative">
                <div
                  className="absolute -top-[22px] left-1/2 w-px h-[22px] -translate-x-1/2"
                  style={{ background: 'linear-gradient(180deg, rgba(180,180,180,0.2), #bbb)' }}
                />
              </div>

              {/* Card */}
              <div
                className="rounded-[10px] overflow-hidden relative transition-all duration-300 hover:-translate-y-1"
                style={{
                  width: w,
                  height: h,
                  boxShadow: isActive
                    ? '0 0 35px rgba(255,215,0,0.25), 0 0 70px rgba(255,45,149,0.1), 0 8px 35px rgba(0,0,0,0.6), 0 0 0 2px rgba(255,215,0,0.25)'
                    : '0 6px 25px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
                }}
                data-keychain-id={kc.id}
              >
                <KeychainSVG kc={kc} width={w} />

                {/* Overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-1.5 pb-1.5 pt-2 text-center"
                  style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.9))' }}
                >
                  <div className="font-orbit font-bold text-[13px] text-arcade-gold text-shadow-gold">
                    ₹{kc.price}
                  </div>
                  <div className="text-[9px] text-white/70 font-bold tracking-wide mt-px">
                    {kc.name}
                  </div>
                </div>
              </div>
              </div>{/* end swing wrapper */}
            </div>
          )
        })}
      </div>
    </div>
  )
}
