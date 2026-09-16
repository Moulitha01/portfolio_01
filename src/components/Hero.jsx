import React from "react";
import { profile, socials } from "../data/portfolioData.js";
import CoreEmblem from "./CoreEmblem.jsx";
import { ArrowIcon, DownloadIcon } from "./Icons.jsx";

export default function Hero() {
  return (
    <section id="top" className="grid-bg border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Left: name + intro, left-aligned */}
          <div className="order-2 md:order-1 text-left">
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

            <div className="flex flex-wrap items-center gap-3 mt-8">
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

          {/* Right: core emblem */}
          <div className="order-1 md:order-2 flex flex-col items-center md:items-end">
            <CoreEmblem size={300} />
            <div className="mt-4 font-mono-label text-[11px] text-accent-soft/80 text-center md:text-right">
              CORE ONLINE
              <br />
              DRAG TO INSPECT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}