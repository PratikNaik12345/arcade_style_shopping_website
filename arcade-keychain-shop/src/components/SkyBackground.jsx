import React, { useMemo } from 'react'

export default function SkyBackground() {
  const stars = useMemo(() =>
    Array.from({ length: 55 }, (_, i) => ({
      id: i,
      left: `${(i * 17 + 3) % 100}%`,
      top: `${(i * 13 + 7) % 55}%`,
      size: 1 + ((i * 7) % 20) / 10,
      dur: `${2 + ((i * 11) % 30) / 10}s`,
      del: `${((i * 19) % 30) / 10}s`,
    })), [])

  return (
    <div className="absolute inset-0 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse at 60% 20%, rgba(100,60,180,0.15), transparent 50%),
          linear-gradient(180deg, #08031a 0%, #120838 30%, #201050 55%, #2e1868 75%, #3a2575 90%, #4a3088 100%)
        `
      }}
    >
      {/* Stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            '--tw-dur': s.dur,
            '--tw-del': s.del,
          }}
        />
      ))}

      {/* Moon */}
      <div className="absolute top-[10%] right-[30%] w-11 h-11 rounded-full animate-moon-glow"
        style={{
          background: 'radial-gradient(circle at 30% 30%, #fffde8, #ffd700)',
          boxShadow: '0 0 25px rgba(255,215,0,0.5), 0 0 70px rgba(255,215,0,0.2)',
        }}
      >
        <div className="absolute top-[5px] left-[10px] w-8 h-8 bg-[#1a0e3a] rounded-full" />
      </div>

      {/* Clouds */}
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            bottom: `${18 + i * 10}%`,
            left: '-120px',
            width: `${80 + i * 30}px`,
            height: `${30 + i * 10}px`,
            background: 'rgba(180,160,255,0.06)',
            filter: 'blur(14px)',
            animation: `cloudDrift ${25 + i * 8}s linear infinite`,
            animationDelay: `${-i * 10}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes cloudDrift {
          0% { transform: translateX(-120px); }
          100% { transform: translateX(calc(480px + 120px)); }
        }
      `}</style>
    </div>
  )
}
