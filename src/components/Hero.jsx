import React from "react";
import { profile, socials } from "../data/portfolioData.js";
import CoreEmblem from "./CoreEmblem.jsx";
import { ArrowIcon, DownloadIcon } from "./Icons.jsx";

export default function Hero() {
  return (
    <section id="top" className="grid-bg border-b border-line">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="flex flex-col items-center text-center">
          <CoreEmblem size={300} />

          <div className="w-full flex items-center justify-between mt-4 mb-6 font-mono-label text-[11px] text-accent-soft/80">
            <span />
            <span className="hidden sm:block">
              CORE ONLINE
              <br />
              DRAG TO INSPECT
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono-label text-xs text-accent-soft mb-6">
            <span className="w-8 h-px bg-accent-soft/60" />
            {profile.role} · {profile.location}
          </div>

          <h1 className="font-display font-bold leading-[0.95] tracking-tight">
            <span className="block text-6xl sm:text-7xl">{profile.name.toUpperCase()}</span>
            <span className="block text-6xl sm:text-7xl ghost-text">
              {profile.surname.toUpperCase()}
            </span>
          </h1>

          <p className="max-w-xl mt-6 text-white/60 text-base sm:text-lg">
            {profile.heroSummary}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a
              href="#work"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-soft transition-colors text-ink font-mono-label text-xs font-bold px-6 py-3 rounded-full"
            >
              EXPLORE MY WORK ↓
            </a>
            <a
              href={socials.resumeUrl}
              download
              className="inline-flex items-center gap-2 border border-line hover:border-accent-soft transition-colors font-mono-label text-xs font-bold px-6 py-3 rounded-full"
            >
              RÉSUMÉ <DownloadIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
