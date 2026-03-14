export default function ProductArt({ name, accent }) {
  switch (name) {
    case 'Nova X Pro':
      return (
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <ellipse cx="45" cy="55" rx="28" ry="8" fill={accent} opacity="0.18" />
          <path d="M20 45 Q20 22 45 22 Q70 22 70 45" stroke={accent} strokeWidth="4" fill="none" strokeLinecap="round" />
          <rect x="14" y="44" width="12" height="20" rx="6" fill={accent} />
          <rect x="64" y="44" width="12" height="20" rx="6" fill={accent} />
        </svg>
      )
    case 'Solara Watch':
      return (
        <svg width="80" height="90" viewBox="0 0 80 90" fill="none">
          <ellipse cx="40" cy="65" rx="22" ry="6" fill={accent} opacity="0.15" />
          <rect x="22" y="18" width="36" height="44" rx="10" fill="#0a2540" stroke={accent} strokeWidth="1.5" />
          <circle cx="40" cy="40" r="13" fill="#0d2d50" stroke={accent} strokeWidth="1" />
          <line x1="40" y1="40" x2="40" y2="30" stroke={accent} strokeWidth="2" strokeLinecap="round" />
          <line x1="40" y1="40" x2="47" y2="44" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="34" y="6" width="12" height="12" rx="3" fill="#0a2540" stroke={accent} strokeWidth="1" />
          <rect x="34" y="62" width="12" height="12" rx="3" fill="#0a2540" stroke={accent} strokeWidth="1" />
        </svg>
      )
    case 'Pulse Cam':
      return (
        <svg width="95" height="85" viewBox="0 0 95 85" fill="none">
          <ellipse cx="47" cy="70" rx="26" ry="7" fill={accent} opacity="0.15" />
          <rect x="18" y="22" width="50" height="36" rx="6" fill="#1a1200" stroke={accent} strokeWidth="1.5" />
          <circle cx="45" cy="40" r="12" fill="#0d0900" stroke={accent} strokeWidth="1.5" />
          <circle cx="45" cy="40" r="7" fill="#1a1200" stroke={accent} strokeWidth="1" />
          <circle cx="45" cy="40" r="3" fill={accent} opacity="0.7" />
          <rect x="68" y="28" width="10" height="14" rx="3" fill="#1a1200" stroke={accent} strokeWidth="1" />
          <rect x="22" y="26" width="8" height="5" rx="2" fill={accent} opacity="0.5" />
        </svg>
      )
    case 'Drift Keys':
      return (
        <svg width="110" height="70" viewBox="0 0 110 70" fill="none">
          <ellipse cx="55" cy="58" rx="38" ry="8" fill={accent} opacity="0.12" />
          <rect x="10" y="22" width="90" height="30" rx="6" fill="#00120d" stroke={accent} strokeWidth="1.5" />
          {[16, 29, 40, 51, 64, 75, 86].map((x, i) => (
            <rect key={i} x={x} y="28" width={i === 0 ? 10 : 8} height="8" rx="2" fill={accent} opacity={i === 0 ? 0.7 : 0.5} />
          ))}
          <rect x="16" y="39" width="8" height="7" rx="2" fill={accent} opacity="0.3" />
          <rect x="27" y="39" width="8" height="7" rx="2" fill={accent} opacity="0.3" />
          <rect x="38" y="39" width="28" height="7" rx="2" fill={accent} opacity="0.4" />
          <rect x="69" y="39" width="8" height="7" rx="2" fill={accent} opacity="0.3" />
          <rect x="80" y="39" width="14" height="7" rx="2" fill={accent} opacity="0.3" />
        </svg>
      )
    case 'Aura Buds':
      return (
        <svg width="85" height="90" viewBox="0 0 85 90" fill="none">
          <ellipse cx="42" cy="72" rx="22" ry="6" fill={accent} opacity="0.15" />
          <ellipse cx="28" cy="42" rx="12" ry="18" fill="#200030" stroke={accent} strokeWidth="1.5" />
          <ellipse cx="57" cy="42" rx="12" ry="18" fill="#200030" stroke={accent} strokeWidth="1.5" />
          <circle cx="28" cy="42" r="5" fill={accent} opacity="0.5" />
          <circle cx="57" cy="42" r="5" fill={accent} opacity="0.5" />
          <path d="M28 24 Q42 14 57 24" stroke={accent} strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.5" />
        </svg>
      )
    case 'Vortex Pad':
      return (
        <svg width="110" height="80" viewBox="0 0 110 80" fill="none">
          <ellipse cx="55" cy="65" rx="32" ry="8" fill={accent} opacity="0.13" />
          <path d="M20 48 Q18 28 30 24 L44 22 Q55 20 66 22 L80 24 Q92 28 90 48 Q87 62 80 64 Q66 68 55 68 Q44 68 30 64 Q23 62 20 48Z" fill="#001530" stroke={accent} strokeWidth="1.5" />
          <circle cx="70" cy="38" r="5" fill="none" stroke={accent} strokeWidth="1" />
          <circle cx="79" cy="45" r="5" fill="none" stroke={accent} strokeWidth="1" />
          <circle cx="61" cy="45" r="5" fill="none" stroke={accent} strokeWidth="1" />
          <circle cx="70" cy="52" r="5" fill="none" stroke={accent} strokeWidth="1" />
          <rect x="28" y="34" width="2" height="14" rx="1" fill={accent} opacity="0.7" />
          <rect x="22" y="40" width="14" height="2" rx="1" fill={accent} opacity="0.7" />
          <circle cx="40" cy="48" r="7" fill="#001020" stroke={accent} strokeWidth="1" />
        </svg>
      )
    default:
      return null
  }
}
