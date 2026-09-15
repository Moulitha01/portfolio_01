import React from "react";
import { contact, socials, profile } from "../data/portfolioData.js";
import { GithubIcon, LinkedinIcon, MailIcon, ArrowIcon } from "./Icons.jsx";

export default function Contact() {
  return (
    <section id="contact" className="grid-bg">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-10 flex flex-col items-center text-center">
        <p className="font-mono-label text-xs text-accent mb-6">05 / OPEN CHANNEL</p>
        <h2 className="font-display font-bold text-4xl sm:text-6xl leading-tight">
          {contact.heading[0]}
          <br />
          <span className="text-accent">{contact.heading[1]}</span>
        </h2>

        <a
          href={`mailto:${socials.email}`}
          className="font-mono-label text-sm sm:text-base mt-10 border-b border-accent pb-1 inline-flex items-center gap-2 hover:text-accent-pale transition-colors"
        >
          {socials.email.toUpperCase()} <ArrowIcon className="w-4 h-4" />
        </a>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-line mt-24 pt-8">
          <p className="font-mono-label text-[11px] text-white/40">
            © {contact.year} {profile.name.toUpperCase()} {profile.surname.toUpperCase()}
          </p>
          <div className="flex items-center gap-5 text-white/50">
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
          </div>
        </div>
      </div>
    </section>
  );
}
