export function AmberIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={className}>
      {/* Outer red rounded square */}
      <rect x="15" y="15" width="170" height="170" rx="40" fill="#E31B23" />

      {/* Inner white mark geometry */}
      <g fill="#FFFFFF" stroke="#FFFFFF">
        {/* Base solid cross (right, top, and bottom arms) */}
        <path d="M96,128 L96,72 A12,12 0 0,1 120,72 L120,88 L136,88 A12,12 0 0,1 136,112 L120,112 L120,128 A12,12 0 0,1 96,128 Z" stroke="none"/>

        {/* Left side motion/speed lines */}
        <g strokeWidth="8" strokeLinecap="round">
          {/* Row 1 (Short) */}
          <line x1="96" y1="76" x2="76" y2="76"/>
          {/* Row 2 (Long) */}
          <line x1="96" y1="92" x2="63" y2="92"/>
          {/* Row 3 (Long) */}
          <line x1="96" y1="108" x2="63" y2="108"/>
          {/* Row 4 (Short) */}
          <line x1="96" y1="124" x2="76" y2="124"/>
        </g>

        {/* Left side dots */}
        <g stroke="none">
          <circle cx="64" cy="76" r="4" />
          <circle cx="51" cy="92" r="4" />
          <circle cx="51" cy="108" r="4" />
          <circle cx="64" cy="124" r="4" />
        </g>
      </g>
    </svg>
  );
}
