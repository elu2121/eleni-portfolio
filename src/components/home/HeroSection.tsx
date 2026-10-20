import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { PortraitPlaceholder } from '../common/PortraitPlaceholder';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill: regular font, small pulsing gold dot (Only availability indicator on site) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite-850 border border-graphite-750 text-xs font-sans text-graphite-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              <span>Available for engineering roles & internships</span>
            </div>

            {/* Headline: font-serif (Fraunces), text-4xl sm:text-5xl lg:text-6xl, font-medium, leading-[1.08] */}
            {/* Only the second line is gold (text-gold-400, flat, no gradient) */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-graphite-100 leading-[1.08]">
              Turning complex problems into{' '}
              <span className="block text-gold-400">
                elegant digital experiences.
              </span>
            </h1>

            {/* Intro text: text-base sm:text-lg, text-graphite-300, max-w-xl */}
            <p className="text-base sm:text-lg text-graphite-300 max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
              Software Engineering student building reliable, well-typed web apps with React, .NET, and Node.js.
            </p>

            {/* CTAs: Explore Projects is the single gold primary button on this screen */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <Button
                to="/projects"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Projects
              </Button>

              <Button
                to="/contact"
                variant="secondary"
                size="md"
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Contact Me
              </Button>
            </div>

            {/* Tech Strip: regular font, text-sm, text-graphite-300, with neutral graphite-500 check icons (not gold) */}
            <div className="pt-4 border-t border-graphite-750 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-sm text-graphite-300 font-sans">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-graphite-500 shrink-0" />
                <span>React & TypeScript</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-graphite-500 shrink-0" />
                <span>C# .NET & Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-graphite-500 shrink-0" />
                <span>PostgreSQL & SQL Server</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <PortraitPlaceholder className="max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};
