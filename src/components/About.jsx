import React from "react";
import { profile, skills } from "../data/portfolioData.js";
import { iconMap } from "./Icons.jsx";

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="font-mono-label text-xs text-accent mb-4">01 / PROFILE</p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl max-w-2xl">
          {profile.aboutHeading}
        </h2>
        <p className="text-white/60 max-w-xl mt-6 text-base sm:text-lg">
          {profile.aboutText}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 mt-16">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <div key={skill.title} className="border-t border-line pt-6">
                <Icon className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display font-semibold text-xl mb-1">{skill.title}</h3>
                <p className="text-white/45 text-sm">{skill.items}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
