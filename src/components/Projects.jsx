import React from "react";
import { projects, socials } from "../data/portfolioData.js";
import { iconMap, ArrowIcon } from "./Icons.jsx";

export default function Projects() {
  return (
    <section id="work" className="border-b border-line">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="font-mono-label text-xs text-accent mb-4">02 / SELECTED SYSTEMS</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl">Work that thinks.</h2>
          </div>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-label text-xs text-white/60 hover:text-accent-pale transition-colors inline-flex items-center gap-1"
          >
            ALL PROJECTS <ArrowIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="border-t border-line">
          {projects.map((project) => {
            const Icon = iconMap[project.icon];
            return (
              <a
                key={project.name}
                href={project.deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-line py-10 hover:bg-white/[0.02] transition-colors -mx-6 px-6"
              >
                <p className="font-mono-label text-xs text-white/40 mb-6">{project.index}</p>
                <Icon className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-display font-bold text-3xl sm:text-4xl mb-1 flex items-center gap-3">
                  {project.name}
                  <ArrowIcon className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="font-mono-label text-xs text-accent-soft mb-4">{project.tag}</p>
                <p className="text-white/55 max-w-2xl mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-label text-[11px] border border-line rounded-full px-3 py-1.5 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
