import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers,
  Mail,
  Terminal,
} from 'lucide-react';
import { profileConfig } from '../config/profileConfig';
import { projectsData } from '../data/projectsData';
import { servicesData } from '../data/servicesData';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { SectionHeading } from '../components/common/SectionHeading';
import { PortraitPlaceholder } from '../components/common/PortraitPlaceholder';
import { ProjectCard } from '../components/common/ProjectCard';
import { GithubIcon } from '../components/common/SocialIcons';

export const HomePage: React.FC = () => {
  // Curate top 3 projects for a concise, high-impact homepage showcase
  const featuredProjects = projectsData.slice(0, 3);
  const featuredServices = servicesData.slice(0, 3);

  return (
    <div className="space-y-16 md:space-y-20 pb-12">
      {/* =========================================================================
          HERO SECTION (Compact typography & sleek balanced layout)
          ========================================================================= */}
      <section className="relative pt-4 sm:pt-6 md:pt-10 lg:pt-12 overflow-hidden">
        {/* Subtle background ambient gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-950/20 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Headline, Bio & Primary CTAs */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              {/* Identity & Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-graphite-900 border border-graphite-800 text-xs font-mono text-graphite-300 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-semibold">{profileConfig.title}</span>
              </div>

              {/* Refined Headline (Scaled down for balance) */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight text-graphite-50 leading-[1.18]">
                Turning complex problems into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500">
                  elegant digital experiences.
                </span>
              </h1>

              {/* Concise Introduction */}
              <p className="text-sm sm:text-base text-graphite-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Software Engineering student & aspiring Full-Stack Developer building modern web applications with clean architecture, strict typing, and thoughtful design.
              </p>

              {/* Compact Primary Actions */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Button
                  to="/projects"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore My Work
                </Button>

                <Button
                  to="/contact"
                  variant="secondary"
                  size="md"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Let's Talk
                </Button>
              </div>

              {/* Quick Tech Highlights */}
              <div className="pt-4 border-t border-graphite-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-graphite-400 font-mono">
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
          COMPACT PROFESSIONAL SUMMARY / ENGINEERING VALUE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {profileConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-graphite-900/80 border border-graphite-800 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                {idx === 0 && <Layers className="w-3.5 h-3.5 text-graphite-500" />}
                {idx === 1 && <Terminal className="w-3.5 h-3.5 text-graphite-500" />}
                {idx === 2 && <Code2 className="w-3.5 h-3.5 text-graphite-500" />}
              </div>
              <div className="text-xl font-bold text-graphite-100 mb-1">
                {stat.value}
              </div>
              <p className="text-xs text-graphite-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          FEATURED PROJECTS SECTION (Top 3 Curated Projects)
          ========================================================================= */}
      <section id="featured-work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Work"
          title="Curated Projects &"
          highlight="Case Studies"
          subtitle="Top engineering projects demonstrating full-stack architecture, security, and desktop applications."
          action={
            <Button
              to="/projects"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              View All ({projectsData.length})
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
          STREAMLINED ABOUT PREVIEW
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-graphite-900 via-graphite-900 to-graphite-950 border border-graphite-800 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="emerald">Engineering Mindset</Badge>
              <h2 className="text-xl sm:text-2xl font-bold text-graphite-100">
                Bridging UI precision with dependable backend structure.
              </h2>
              <p className="text-xs sm:text-sm text-graphite-300 leading-relaxed max-w-2xl">
                I balance modern client-side user experience with resilient, well-structured backend services. During my academic studies and internship work, I developed a passion for accessible interfaces, atomic database transactions, and clean code reviews.
              </p>

              <div className="pt-1">
                <Button
                  to="/about"
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Read About My Journey
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-graphite-850/80 rounded-xl p-4 sm:p-5 border border-graphite-750 space-y-2.5">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold block">
                Core Strengths
              </span>
              <ul className="space-y-2 text-xs text-graphite-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Component-driven React & TypeScript</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>C# .NET Core & ASP.NET Web APIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>PostgreSQL & SQL Server Relational DBs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Agile Teamwork & Git Version Control</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPACT SERVICES PREVIEW
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Capabilities"
          title="Technical Services &"
          highlight="Solutions"
          subtitle="Areas where I can contribute to engineering teams, MVPs, and web projects."
          action={
            <Button
              to="/services"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              All Services
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="p-5 rounded-xl bg-graphite-900 border border-graphite-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-base font-bold text-graphite-100 group-hover:text-emerald-400 transition-colors mb-1.5">
                  {service.title}
                </h3>
                <p className="text-xs text-graphite-400 leading-relaxed mb-4 line-clamp-2">
                  {service.shortDescription}
                </p>

                <div className="space-y-1.5 mb-4">
                  <span className="text-[10px] font-mono text-graphite-500 uppercase tracking-wider block">
                    Deliverables
                  </span>
                  <ul className="space-y-1 text-xs text-graphite-300">
                    {service.deliverables.slice(0, 2).map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="line-clamp-1">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-graphite-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-graphite-500">
                  {service.technologies.slice(0, 2).join(' • ')}
                </span>
                <Link
                  to="/services"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          COMPACT CALL TO ACTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-emerald-950/30 via-graphite-900 to-graphite-900 border border-emerald-500/30 p-6 sm:p-10 text-center">
          <div className="max-w-xl mx-auto space-y-4">
            <Badge variant="emerald">Let's Connect</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-graphite-100">
              Have a project or engineering role open?
            </h2>
            <p className="text-xs sm:text-sm text-graphite-300 leading-relaxed">
              Available for full-time software developer roles, internships, and collaborative projects.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={<Mail className="w-4 h-4" />}
              >
                Start a Conversation
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
