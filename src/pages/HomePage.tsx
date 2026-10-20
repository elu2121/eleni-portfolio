import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import { profileConfig } from '../config/profileConfig';
import { projectsData } from '../data/projectsData';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { SectionHeading } from '../components/common/SectionHeading';
import { PortraitPlaceholder } from '../components/common/PortraitPlaceholder';
import { ProjectCard } from '../components/common/ProjectCard';
import { GithubIcon } from '../components/common/SocialIcons';

export const HomePage: React.FC = () => {
  // Curate exactly the top 3 projects for a concise, non-bloated showcase
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="space-y-12 md:space-y-16 pb-12">
      {/* =========================================================================
          1. HERO SECTION (Compact, balanced & elegant)
          ========================================================================= */}
      <section className="relative pt-4 sm:pt-6 md:pt-10 overflow-hidden">
        {/* Soft champagne gold ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[250px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Headline, Bio & Primary CTAs */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              {/* Identity & Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite-850 border border-graphite-750 text-xs font-mono text-graphite-300 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-semibold">{profileConfig.title}</span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight text-graphite-100 leading-[1.18]">
                Turning complex problems into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500">
                  elegant digital experiences.
                </span>
              </h1>

              {/* Concise Introduction */}
              <p className="text-sm sm:text-base text-graphite-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Software Engineering student & Full-Stack Developer crafting reliable, type-safe web applications with modern architecture and intuitive design.
              </p>

              {/* Compact Primary Actions */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3">
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

              {/* Tech Highlights Strip */}
              <div className="pt-3 border-t border-graphite-750/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-graphite-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>React & TypeScript</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>C# .NET & Node.js</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PostgreSQL & SQL Server</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <PortraitPlaceholder className="max-w-xs sm:max-w-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FEATURED PROJECTS (Focused 3-Card Grid)
          ========================================================================= */}
      <section id="featured-work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering"
          title="Curated Projects &"
          highlight="Case Studies"
          subtitle="Three core software systems demonstrating full-stack engineering, web security, and desktop architecture."
          action={
            <Button
              to="/projects"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              All Projects ({projectsData.length})
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </section>

      {/* =========================================================================
          3. COMPACT CONTACT BANNER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-emerald-950/40 via-graphite-850 to-graphite-850 border border-emerald-500/30 p-6 sm:p-8 text-center">
          <div className="max-w-xl mx-auto space-y-3">
            <Badge variant="emerald">Open to Opportunities</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-graphite-100">
              Let's build something exceptional together.
            </h2>
            <p className="text-xs sm:text-sm text-graphite-400 leading-relaxed">
              Available for full-time software engineering roles, internships, and selected freelance collaborations.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={<Mail className="w-4 h-4" />}
              >
                Get in Touch
              </Button>
              <Button
                href={profileConfig.contact.github}
                variant="secondary"
                size="md"
                icon={<GithubIcon className="w-4 h-4" />}
              >
                GitHub Profile
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
