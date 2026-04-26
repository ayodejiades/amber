export function AmberLogo({ className = "w-32 h-auto" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" className={className}>
      <g id="primary-mark">
        {/* Main red background block */}
        <path d="M90,50 L130,50 A30,30 0 0,1 160,80 L160,120 A30,30 0 0,1 130,150 L90,150 Z" fill="#E31B23" />

        {/* Red motion/speed lines and dots */}
        <g fill="#E31B23" stroke="#E31B23" strokeWidth="12" strokeLinecap="round">
          {/* Row 1 (Short) */}
          <line x1="90" y1="60" x2="65" y2="60" />
          <circle cx="48" cy="60" r="6" stroke="none" />

          {/* Row 2 (Long) */}
          <line x1="90" y1="80" x2="55" y2="80" />
          <circle cx="38" cy="80" r="6" stroke="none" />

          {/* Row 3 (Short) */}
          <line x1="90" y1="100" x2="65" y2="100" />
          <circle cx="48" cy="100" r="6" stroke="none" />

          {/* Row 4 (Long) */}
          <line x1="90" y1="120" x2="55" y2="120" />
          <circle cx="38" cy="120" r="6" stroke="none" />

          {/* Row 5 (Short) */}
          <line x1="90" y1="140" x2="65" y2="140" />
          <circle cx="48" cy="140" r="6" stroke="none" />
        </g>

        {/* White cutout cross */}
        <rect x="105" y="93" width="40" height="14" rx="7" fill="#FFFFFF" />
        <rect x="118" y="80" width="14" height="40" rx="7" fill="#FFFFFF" />
      </g>

      {/* Text: amber */}
      <text
        x="185"
        y="125"
        fontSize="88"
        fill="#E31B23"
        style={{
          fontFamily: "'Nunito', 'Varela Round', 'Quicksand', 'Segoe UI Rounded', sans-serif",
          fontWeight: 800
        }}
      >
        amber
      </text>

      {/* EKG Heartbeat Line */}
      <path
        d="M185,145 L450,145 L455,153 L465,115 L475,160 L482,140 L495,145"
        fill="none"
        stroke="#E31B23"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Text: tagline */}
      <text
        x="185"
        y="172"
        fontSize="12"
        fill="#E31B23"
        style={{
          textTransform: "lowercase",
          fontFamily: "'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: 500,
          letterSpacing: "1.5px"
        }}
      >
        the uber for ambulance
      </text>
    </svg>
  );
}
