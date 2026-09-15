import React from "react";
import { certifications } from "../data/portfolioData.js";
import { BadgeIcon, ArrowIcon } from "./Icons.jsx";

export default function Certifications() {
  return (
    <section id="certifications" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="font-mono-label text-xs text-accent mb-4">04 / CREDENTIALS</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl mb-12">Verified & tested.</h2>

        <div className="border-t border-line">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-6 border-b border-line py-7 hover:bg-white/[0.02] transition-colors -mx-6 px-6"
            >
              <div className="flex items-center gap-5">
                <BadgeIcon className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h3 className="font-display font-semibold text-lg sm:text-xl">{cert.title}</h3>
                  <p className="font-mono-label text-xs text-accent-soft mt-1">{cert.issuer}</p>
                </div>
              </div>
              <span className="font-mono-label text-xs text-white/40 group-hover:text-accent-pale transition-colors inline-flex items-center gap-1 shrink-0">
                VIEW <ArrowIcon className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
