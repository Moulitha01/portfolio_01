import React from "react";
import { profile, socials } from "../data/portfolioData.js";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowIcon } from "./Icons.jsx";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-display font-bold text-xl tracking-tight">
          {profile.logo.split("/")[0]}
          <span className="text-accent">/{profile.logo.split("/")[1]}</span>
        </a>

        <div className="flex items-center gap-5">
          <nav className="hidden sm:flex items-center gap-4 text-accent-soft">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-accent-pale transition-colors"
            >
              <GithubIcon />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent-pale transition-colors"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${socials.email}`}
              aria-label="Email"
              className="hover:text-accent-pale transition-colors"
            >
              <MailIcon />
            </a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-mono-label text-xs px-4 py-2 border border-accent text-accent-pale rounded-full hover:bg-accent/10 transition-colors"
          >
            CONTACT <ArrowIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
