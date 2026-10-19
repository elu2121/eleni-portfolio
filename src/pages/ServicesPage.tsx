import React from 'react';
import {
  Code,
  Layers,
  Server,
  Globe,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileCheck2,
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const ServicesPage: React.FC = () => {
  // Service icon selector
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'responsive-web-development':
        return <Globe className="w-6 h-6 text-emerald-400" />;
      case 'frontend-development':
        return <Code className="w-6 h-6 text-emerald-400" />;
      case 'fullstack-applications':
        return <Layers className="w-6 h-6 text-emerald-400" />;
      case 'backend-api-integration':
        return <Server className="w-6 h-6 text-emerald-400" />;
      case 'website-maintenance':
        return <Wrench className="w-6 h-6 text-emerald-400" />;
      case 'software-testing-qa':
        return <FileCheck2 className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <Badge variant="emerald">Technical Services</Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-graphite-100 tracking-tight leading-tight">
          Software engineering &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
            web development services.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-graphite-300 leading-relaxed font-normal">
          I provide focused technical engineering for freelance clients, startups, and software teams. Below are my core capabilities, key deliverables, and target project scopes.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className="p-8 rounded-2xl bg-graphite-900 border border-graphite-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between group shadow-card"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-graphite-850 border border-graphite-750 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-emerald-500/50 transition-all">
                  {getServiceIcon(service.id)}
                </div>
                <span className="text-xs font-mono text-graphite-500">
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-graphite-100 group-hover:text-emerald-300 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-graphite-300 leading-relaxed mb-4">
                  {service.detailedDescription}
                </p>
              </div>

              {/* Deliverables */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block">
                  Expected Deliverables
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-graphite-300">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="space-y-1.5 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-graphite-500 block">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-graphite-850 text-graphite-300 border border-graphite-750"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ideal for note */}
              <div className="p-3.5 rounded-lg bg-graphite-850/60 border border-graphite-800 text-xs text-graphite-400">
                <strong className="text-graphite-300 font-mono">Best suited for:</strong> {service.idealFor}
              </div>
            </div>

            {/* Bottom Contact Button */}
            <div className="pt-6 mt-6 border-t border-graphite-800/80 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400/90">
                Customizable Scope
              </span>
              <Button
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                variant="outline"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Inquire About Service
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Honest Scope & Collaboration Notice */}
      <div className="p-6 rounded-2xl bg-graphite-900/60 border border-graphite-800 space-y-2">
        <h4 className="text-sm font-bold text-graphite-200 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>Engineering Integrity & Scope Notice</span>
        </h4>
        <p className="text-xs text-graphite-400 leading-relaxed font-mono">
          All service scopes are adjusted to match project requirements and timeline. I provide transparent estimations, clear weekly communication, and thoroughly documented code. You can edit any service or add customized offerings in <code className="text-graphite-200">src/data/servicesData.ts</code>.
        </p>
      </div>

      {/* Bottom CTA Banner */}
      <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-emerald-950/30 via-graphite-900 to-graphite-900 border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-graphite-100">
            Need a tailored solution not listed above?
          </h3>
          <p className="text-sm text-graphite-300">
            Let's discuss your product goals, technical constraints, and timeline to determine the right architectural approach.
          </p>
        </div>
        <Button
          to="/contact"
          variant="primary"
          size="lg"
          icon={<ArrowRight className="w-4 h-4" />}
        >
          Discuss Your Project
        </Button>
      </div>
    </div>
  );
};
