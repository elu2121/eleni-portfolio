import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
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
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 z-50 px-4 py-2 bg-emerald-500 text-graphite-950 font-semibold rounded-lg shadow-lg focus:outline-none"
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
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Wordmark Branding */}
            <Link
              to="/"
              className="flex items-center gap-1.5 text-xl sm:text-2xl font-extrabold tracking-tight text-graphite-100 hover:text-white transition-colors group"
            >
              <span className="font-mono text-emerald-400 group-hover:scale-110 transition-transform">
                &lt;
              </span>
              <span>{profileConfig.wordmark.replace('.', '')}</span>
              <span className="text-emerald-400">.</span>
              <span className="font-mono text-emerald-400 group-hover:scale-110 transition-transform">
                /&gt;
              </span>
            </Link>

            {/* Desktop Navigation Links */}
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
                    `px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-150 ${
                      isActive
                        ? 'text-emerald-400 bg-graphite-800 shadow-sm'
                        : 'text-graphite-300 hover:text-graphite-100 hover:bg-graphite-850'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Action & Status */}
            <div className="hidden md:flex items-center gap-4">
              <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-graphite-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for hire</span>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-graphite-950 transition-all shadow-emerald-sm active:translate-y-0.5"
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
                className="p-2 rounded-lg text-graphite-300 hover:text-graphite-100 hover:bg-graphite-850 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-emerald-400" />
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
            <div className="px-4 pt-3 pb-6 space-y-2">
              <nav aria-label="Mobile Navigation" className="space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/30'
                          : 'text-graphite-300 hover:bg-graphite-850 hover:text-graphite-100'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-emerald-400">→</span>
                  </NavLink>
                ))}
              </nav>

              <div className="pt-4 border-t border-graphite-800/80 space-y-3">
                <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-graphite-400 bg-graphite-900 rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for engineering roles</span>
                </div>

                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-graphite-950 font-semibold text-sm transition-all shadow-emerald-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Let's Talk</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
