import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowUp, Code } from 'lucide-react';
import { profileConfig } from '../../config/profileConfig';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-graphite-950 border-t border-graphite-800 text-graphite-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-graphite-850">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center text-xl font-extrabold tracking-tight text-graphite-100 hover:text-white transition-colors group"
            >
              <span className="font-mono text-gold-500 group-hover:scale-110 transition-transform mr-1">
                &lt;
              </span>
              <span>
                {profileConfig.wordmark.replace('.', '')}
                <span className="text-gold-500">.</span>
              </span>
              <span className="font-mono text-gold-500 group-hover:scale-110 transition-transform ml-1">
                /&gt;
              </span>
            </Link>
            <p className="text-sm text-graphite-400 max-w-sm leading-relaxed">
              {profileConfig.shortBio}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-graphite-200 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-graphite-200 font-semibold">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${profileConfig.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-graphite-400 group-hover:text-white transition-transform" />
                  <span className="truncate max-w-[200px]">{profileConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={profileConfig.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <GithubIcon className="w-4 h-4 text-graphite-400 group-hover:text-white transition-transform" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href={profileConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <LinkedinIcon className="w-4 h-4 text-graphite-400 group-hover:text-white transition-transform" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-graphite-500">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Code className="w-3.5 h-3.5 text-graphite-400" />
            <span>
              Engineered with React, TypeScript & Tailwind CSS • {new Date().getFullYear()} {profileConfig.name}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-graphite-900 border border-graphite-800 text-graphite-400 hover:text-white hover:border-graphite-700 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
