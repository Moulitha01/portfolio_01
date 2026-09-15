import React from "react";

/**
 * CoreEmblem — the circular "core" graphic in the hero section.
 * Dashed outer ring + radial ticks + inner ring + glowing triangle,
 * in the site's purple/pink accent palette.
 */
export default function CoreEmblem({ size = 320, className = "" }) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <style>{`
        @keyframes core-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes core-spin-rev { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        @keyframes core-pulse { 0%, 100% { opacity: 0.9; } 50% { opacity: 1; } }
        .core-dash { animation: core-spin 60s linear infinite; transform-origin: 50% 50%; }
        .core-ticks { animation: core-spin-rev 45s linear infinite; transform-origin: 50% 50%; }
        .core-tri { animation: core-pulse 3s ease-in-out infinite; transform-origin: 50% 50%; }
        @media (prefers-reduced-motion: reduce) {
          .core-dash, .core-ticks, .core-tri { animation: none; }
        }
      `}</style>

      <div
        className="absolute inset-[-18%] rounded-full blur-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(216,180,254,0.35) 0%, rgba(168,85,247,0.15) 45%, transparent 70%)",
        }}
      />

      <svg viewBox="0 0 300 300" width={size} height={size} role="img" aria-label="Core emblem">
        <defs>
          <linearGradient id="core-ring" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f0abfc" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
          <radialGradient id="core-tri-fill" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fdf4ff" />
            <stop offset="60%" stopColor="#f0abfc" />
            <stop offset="100%" stopColor="#a855f7" />
          </radialGradient>
        </defs>

        {/* dashed outer ring */}
        <g className="core-dash">
          <circle
            cx="150"
            cy="150"
            r="132"
            fill="none"
            stroke="url(#core-ring)"
            strokeWidth="5"
            strokeDasharray="10 9"
            strokeLinecap="round"
          />
        </g>

        {/* radial tick marks */}
        <g className="core-ticks">
          {Array.from({ length: 28 }).map((_, i) => {
            const angle = (i * 360) / 28;
            const rad = (angle * Math.PI) / 180;
            const r1 = 104;
            const r2 = 116;
            const x1 = 150 + r1 * Math.cos(rad);
            const y1 = 150 + r1 * Math.sin(rad);
            const x2 = 150 + r2 * Math.cos(rad);
            const y2 = 150 + r2 * Math.sin(rad);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#e9a6f0"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeOpacity="0.85"
              />
            );
          })}
        </g>

        {/* solid inner ring */}
        <circle cx="150" cy="150" r="92" fill="none" stroke="#f4f2fb" strokeWidth="4" strokeOpacity="0.9" />
        <circle cx="150" cy="150" r="92" fill="#0b0b10" fillOpacity="0.6" />

        {/* glowing triangle core */}
        <g className="core-tri">
          <polygon points="128,110 128,190 182,150" fill="url(#core-tri-fill)" />
          <polygon
            points="128,110 128,190 182,150"
            fill="none"
            stroke="#fdf4ff"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}
