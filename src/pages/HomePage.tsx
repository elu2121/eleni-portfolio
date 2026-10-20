import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  ExternalLink,
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
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 6);
  const featuredServices = servicesData.slice(0, 3);

  return (
    <div className="space-y-24 md:space-y-32 pb-20">
      {/* =========================================================================
          HERO SECTION (Two-column desktop / ordered stacked mobile)
          ========================================================================= */}
      <section className="relative pt-8 sm:pt-12 md:pt-20 lg:pt-24 overflow-hidden">
        {/* Subtle background ambient gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-950/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Headline, Bio & Primary CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Identity & Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite-900 border border-graphite-800 text-xs font-mono text-graphite-300 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-semibold">{profileConfig.title}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-graphite-50 leading-[1.12]">
                Turning complex problems into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500">
                  elegant digital experiences.
                </span>
              </h1>

              {/* Suggested Introduction */}
              <p className="text-lg sm:text-xl text-graphite-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                {profileConfig.shortBio}
              </p>

              {/* Two Primary Actions */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  to="/projects"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore My Work
                </Button>

                <Button
                  to="/contact"
                  variant="secondary"
                  size="lg"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Let's Talk
                </Button>
              </div>

              {/* Quick Trust Badges / Tech Summary */}
              <div className="pt-6 border-t border-graphite-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-graphite-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>React & TypeScript</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Node.js & REST APIs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Relational Databases</span>
                </div>
              </div>
            </div>

            {/* Right Column: Professional Portrait Placeholder */}
            <div className="lg:col-span-5 flex justify-center">
              <PortraitPlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          COMPACT PROFESSIONAL SUMMARY / ENGINEERING VALUE
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profileConfig.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-graphite-900/80 border border-graphite-800 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  {stat.label}
                </span>
                {idx === 0 && <Layers className="w-4 h-4 text-graphite-500" />}
                {idx === 1 && <Terminal className="w-4 h-4 text-graphite-500" />}
                {idx === 2 && <Code2 className="w-4 h-4 text-graphite-500" />}
              </div>
              <div className="text-2xl font-bold text-graphite-100 mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-graphite-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          FEATURED PROJECTS SECTION
          ========================================================================= */}
      <section id="featured-work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering Work"
          title="Curated Projects &"
          highlight="Case Studies"
          subtitle="A selection of internship, academic, and full-stack software projects demonstrating real architectural decisions and problem-solving."
          action={
            <Button
              to="/projects"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              View All Projects
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>
      </section>

      {/* =========================================================================
          ABOUT PREVIEW SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-graphite-900 via-graphite-900 to-graphite-950 border border-graphite-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <Badge variant="emerald">Engineering Mindset</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-graphite-100">
                Bridging UI precision with dependable backend structure.
              </h2>
              <p className="text-graphite-300 text-base sm:text-lg leading-relaxed">
                {profileConfig.fullBio[0]}
              </p>
              <p className="text-graphite-400 text-sm sm:text-base leading-relaxed">
                {profileConfig.fullBio[1]}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  to="/about"
                  variant="primary"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Read Full Engineering Journey
                </Button>
                <Button
                  to="/about#resume"
                  variant="secondary"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  View Résumé Details
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-graphite-850/90 rounded-xl p-6 border border-graphite-750 space-y-4">
              <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                Core Strengths
              </h3>
              <ul className="space-y-3 text-sm text-graphite-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Component-driven React & Strict TypeScript</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>REST API Design & End-to-End Integration</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Relational Database Modeling (PostgreSQL / MySQL)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Agile Collaboration, Code Reviews & Git Workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES PREVIEW SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Freelance & Contract"
          title="Services &"
          highlight="Capabilities"
          subtitle="How I can contribute to your engineering team, startup MVP, or digital product."
          action={
            <Button
              to="/services"
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Explore All Services
            </Button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-xl bg-graphite-900 border border-graphite-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-lg font-bold text-graphite-100 group-hover:text-emerald-400 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-graphite-400 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono text-graphite-500 uppercase tracking-wider block">
                    Key Deliverables
                  </span>
                  <ul className="space-y-1.5 text-xs text-graphite-300">
                    {service.deliverables.slice(0, 3).map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="line-clamp-1">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-graphite-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-graphite-500">
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
          PROFESSIONAL CONTACT CALL TO ACTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-emerald-950/40 via-graphite-900 to-graphite-900 border border-emerald-500/30 p-8 sm:p-12 lg:p-16 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <Badge variant="emerald">Let's Connect</Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-graphite-100">
              Have a project in mind or an engineering role open?
            </h2>
            <p className="text-base sm:text-lg text-graphite-300 leading-relaxed">
              I am currently available for full-stack software developer positions, internship alumni opportunities, and selected freelance collaborations.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
              >
                Start a Conversation
              </Button>
              <Button
                href={profileConfig.contact.github}
                variant="secondary"
                size="lg"
                icon={<GithubIcon className="w-4 h-4" />}
              >
                Explore GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
