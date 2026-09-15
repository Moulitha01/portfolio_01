import React from "react";
import { experience, stats } from "../data/portfolioData.js";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="font-mono-label text-xs text-accent mb-4">03 / EXPERIENCE</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl mb-12">Field tested.</h2>

        <div className="border-l-2 border-accent pl-6 py-1">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
            <h3 className="font-display font-bold text-2xl">{experience.role}</h3>
            <span className="font-mono-label text-xs text-white/40">{experience.dates}</span>
          </div>
          <p className="text-accent-soft mb-4">{experience.company}</p>
          <p className="text-white/55 max-w-2xl">{experience.description}</p>
        </div>

        <div className="grid grid-cols-3 border-t border-line mt-16 pt-8 gap-6">
          {stats.map((stat, i) => {
            const isCert = stat.label === "CERTIFICATIONS";
            const content = (
              <>
                <p className="font-display font-bold text-3xl sm:text-4xl text-accent">
                  {stat.value}
                </p>
                <p className="font-mono-label text-[11px] text-white/40 mt-1">{stat.label}</p>
              </>
            );
            return isCert ? (
              <a
                key={i}
                href="#certifications"
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                {content}
              </a>
            ) : (
              <div key={i}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
