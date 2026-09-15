import React from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ArrowIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function DownloadIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3v12" />
      <path d="M7 11l5 5 5-5" />
      <path d="M5 20h14" />
    </svg>
  );
}

export function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.6 2.8 5.5 3.1 5.5 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.1 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7.5 10v6.5M7.5 7.5v.01M12 16.5V13a2 2 0 0 1 4 0v3.5M12 13v3.5" />
    </svg>
  );
}

export function MailIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function BrainIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1.5 5.6A3 3 0 0 0 7 17.6 3 3 0 0 0 12 20a3 3 0 0 0 5-2.4 3 3 0 0 0 2.5-5A3 3 0 0 0 18 7a3 3 0 0 0-3-3 3 3 0 0 0-3 1.7A3 3 0 0 0 9 4Z" />
      <path d="M9 4v16M15 4v16M6 9.5h3M15 9.5h3M6.5 14.5h3M14.5 14.5h3" />
    </svg>
  );
}

export function SparkleIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8M18.5 5.5l-2.8 2.8M8.3 15.7l-2.8 2.8" />
    </svg>
  );
}

export function CodeIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />
    </svg>
  );
}

export function DatabaseIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5V12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5.5" />
      <path d="M5 12v6.5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V12" />
    </svg>
  );
}

export function ScanIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 1-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}

export function BadgeIcon({ className = "w-6 h-6" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="9" r="5" />
      <path d="m8.5 13.5-1.8 6.5L12 17l5.3 3-1.8-6.5" />
    </svg>
  );
}

export const iconMap = {
  brain: BrainIcon,
  sparkle: SparkleIcon,
  code: CodeIcon,
  database: DatabaseIcon,
  scan: ScanIcon,
  badge: BadgeIcon,
};
