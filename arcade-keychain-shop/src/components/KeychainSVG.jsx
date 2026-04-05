import React from 'react'

export default function KeychainSVG({ kc, width }) {
  const w = width
  const h = w * 1.65
  const night = kc.theme !== 'day'
  const bgId = `bg${kc.id}-${Math.random().toString(36).slice(2, 6)}`

  const cx = w * 0.5
  const cy = h * 0.7
  const r = w * 0.27
  const sk = '#ffd4b0'
  const hr = kc.id % 2 ? '#2a1508' : '#c49060'

  return (
    <svg viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
      <defs>
        {night ? (
          <linearGradient id={bgId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0e0628" />
            <stop offset="45%" stopColor="#201050" />
            <stop offset="100%" stopColor="#3a2575" />
          </linearGradient>
        ) : (
          <linearGradient id={bgId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6ec6f0" />
            <stop offset="50%" stopColor="#a0d8f8" />
            <stop offset="100%" stopColor="#d8ecff" />
          </linearGradient>
        )}
      </defs>

      <rect width={w} height={h} rx="7" fill={`url(#${bgId})`} />

      {/* Scene elements */}
      {night ? (
        <>
          <circle cx={w * 0.62} cy={h * 0.13} r={w * 0.1} fill="#ffd700" opacity="0.85" />
          <circle cx={w * 0.69} cy={h * 0.1} r={w * 0.09} fill="#201050" />
          {Array.from({ length: 14 }).map((_, i) => (
            <circle
              key={i}
              cx={((i * 37 + 13) % 100) * w / 100}
              cy={((i * 23 + 7) % 45) * h / 100}
              r={0.8 + ((i * 7) % 15) / 10}
              fill="#fff"
              opacity={0.25 + ((i * 11) % 65) / 100}
            />
          ))}
        </>
      ) : (
        <>
          {[0, 1, 2].map((i) => (
            <ellipse
              key={i}
              cx={w * (0.18 + i * 0.3)}
              cy={h * (0.12 + i * 0.07)}
              rx={w * 0.14}
              ry={w * 0.055}
              fill="rgba(255,255,255,0.55)"
            />
          ))}
        </>
      )}

      {/* Character */}
      {/* Hair */}
      <ellipse cx={cx} cy={cy + r * 0.3} rx={r * 0.85} ry={r * 0.7} fill={hr} />
      {/* Face */}
      <ellipse cx={cx} cy={cy} rx={r * 0.56} ry={r * 0.5} fill={sk} />
      {/* Eyes */}
      <ellipse cx={cx - r * 0.18} cy={cy - r * 0.04} rx={r * 0.07} ry={r * 0.1} fill="#1a0800" />
      <ellipse cx={cx + r * 0.18} cy={cy - r * 0.04} rx={r * 0.07} ry={r * 0.1} fill="#1a0800" />
      {/* Eye highlights */}
      <circle cx={cx - r * 0.15} cy={cy - r * 0.09} r={r * 0.028} fill="#fff" />
      <circle cx={cx + r * 0.21} cy={cy - r * 0.09} r={r * 0.028} fill="#fff" />
      {/* Blush */}
      <ellipse cx={cx - r * 0.28} cy={cy + r * 0.12} rx={r * 0.07} ry={r * 0.04} fill="#ff9999" opacity="0.45" />
      <ellipse cx={cx + r * 0.28} cy={cy + r * 0.12} rx={r * 0.07} ry={r * 0.04} fill="#ff9999" opacity="0.45" />
      {/* Mouth */}
      <path
        d={`M${cx - r * 0.05} ${cy + r * 0.19} Q${cx} ${cy + r * 0.27} ${cx + r * 0.05} ${cy + r * 0.19}`}
        stroke="#994422"
        strokeWidth="1.1"
        fill="none"
      />
      {/* Mushroom hat */}
      <ellipse cx={cx} cy={cy - r * 0.3} rx={r} ry={r * 0.58} fill={kc.hat} />
      {/* Hat spots */}
      <circle cx={cx - r * 0.38} cy={cy - r * 0.38} r={r * 0.11} fill="#fff" opacity="0.6" />
      <circle cx={cx + r * 0.28} cy={cy - r * 0.48} r={r * 0.14} fill="#fff" opacity="0.65" />
      <circle cx={cx + r * 0.02} cy={cy - r * 0.62} r={r * 0.09} fill="#fff" opacity="0.55" />
      <circle cx={cx - r * 0.2} cy={cy - r * 0.56} r={r * 0.07} fill="#fff" opacity="0.45" />
      {/* Peace sign hand */}
      <line x1={cx + r * 0.48} y1={cy + r * 0.2} x2={cx + r * 0.58} y2={cy - r * 0.02} stroke={sk} strokeWidth="2.5" strokeLinecap="round" />
      <line x1={cx + r * 0.55} y1={cy + r * 0.15} x2={cx + r * 0.67} y2={cy + r * 0.02} stroke={sk} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
