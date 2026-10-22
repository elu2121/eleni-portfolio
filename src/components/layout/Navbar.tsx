import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profileConfig } from '../../config/profileConfig';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close mobile menu on route navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Track window scroll for background elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skip to Main Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 z-50 px-4 py-2 bg-gold-500 text-graphite-950 font-semibold rounded-lg shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-graphite-950/90 backdrop-blur-md border-b border-graphite-800 shadow-sm'
            : 'bg-graphite-950/60 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Wordmark Branding (Gold Place #1: Logo brackets) */}
            <Link
              to="/"
              className="flex items-center text-xl sm:text-2xl font-extrabold tracking-tight text-graphite-100 hover:text-white transition-colors group"
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

            {/* Desktop Navigation Links (text-sm, active: text-graphite-100 bg-graphite-800, no gold) */}
            <nav
              aria-label="Primary Navigation"
              className="hidden md:flex items-center gap-1 lg:gap-2 bg-graphite-900/70 border border-graphite-800/80 px-4 py-1.5 rounded-full"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-150 ${
                      isActive
                        ? 'text-graphite-100 bg-graphite-800 shadow-sm'
                        : 'text-graphite-400 hover:text-graphite-100 hover:bg-graphite-850'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Action (Outlined button, no duplicate availability status) */}
            <div className="hidden md:flex items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-lg border border-graphite-700 text-graphite-100 hover:border-gold-500 hover:text-gold-400 bg-transparent transition-all active:translate-y-0.5"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="p-2 rounded-lg text-graphite-300 hover:text-graphite-100 hover:bg-graphite-850 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-graphite-100" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-graphite-800 bg-graphite-950/95 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
            <div className="px-4 pt-3 pb-6 space-y-3">
              <nav aria-label="Mobile Navigation" className="space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-graphite-850 text-graphite-100 border border-graphite-750'
                          : 'text-graphite-400 hover:bg-graphite-850 hover:text-graphite-100'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-graphite-500">→</span>
                  </NavLink>
                ))}
              </nav>

              <div className="pt-2 border-t border-graphite-800/80">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gold-500 hover:bg-gold-400 text-graphite-950 font-semibold text-sm transition-all"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
