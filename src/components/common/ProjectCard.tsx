import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Binary,
  Building2,
  Car,
  ExternalLink,
  Hash,
  Key,
  Lock,
  Sparkles,
  Terminal,
} from 'lucide-react';
import type { ProjectItem } from '../../types';
import { Badge } from './Badge';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isGCodeHub = project.id === 'gcode-hub';
  const isCarRental = project.id === 'car-rental-system';
  const isCyber = project.id === 'cyber-attack-simulator';
  const isHotel = project.id === 'hotel-reservation-system';

  // Renders a high-fidelity representative interface/architecture visual
  // Strictly designated without presenting as unverified screenshots
  const renderVisualHeader = () => {
    if (isGCodeHub) {
      return (
        <div className="relative h-52 w-full bg-gradient-to-br from-graphite-900 via-graphite-950 to-graphite-900 border-b border-graphite-750/70 p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
          {/* Top Window Chrome */}
          <div className="relative z-10 flex items-center justify-between pb-2 border-b border-graphite-800/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-graphite-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-graphite-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-graphite-800" />
              <span className="text-[10px] font-mono text-graphite-400 ml-2 flex items-center gap-1">
                <Lock className="w-2.5 h-2.5 text-graphite-400" />
                portal.gcode-hub.internal
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-graphite-800 text-graphite-200 border border-graphite-700">
              <span className="w-1.5 h-1.5 rounded-full bg-graphite-400" />
              Featured Internship
            </span>
          </div>

          {/* Representative UI Mockup */}
          <div className="relative z-10 my-auto py-2 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-graphite-850 border border-graphite-750 flex items-center justify-center text-graphite-200 shrink-0 shadow-sm">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-graphite-100 flex items-center gap-1.5 truncate">
                  <span>gCODE-Hub Workflow Engine</span>
                </div>
                <div className="text-[10px] text-graphite-400 font-mono">React • TypeScript • PostgreSQL</div>
              </div>
            </div>

            {/* Representative Workflow Badges */}
            <div className="grid grid-cols-3 gap-1.5 text-[9px] font-mono">
              <div className="p-1.5 rounded bg-graphite-900 border border-graphite-800 text-center text-graphite-300">
                Course Catalog
              </div>
              <div className="p-1.5 rounded bg-graphite-900 border border-graphite-800 text-center text-graphite-300">
                Intake Pipeline
              </div>
              <div className="p-1.5 rounded bg-graphite-800 border border-graphite-700 text-center text-graphite-200 font-medium">
                Admin Portal
              </div>
            </div>
          </div>

          {/* Bottom Caption */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-graphite-400 pt-2 border-t border-graphite-800/60">
            <span className="text-graphite-300 font-medium flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-graphite-400" />
              Representative Architecture Visual
            </span>
            <span className="text-graphite-500 truncate max-w-[170px]">Confidentiality Protected</span>
          </div>
        </div>
      );
    }

    if (isCarRental) {
      return (
        <div className="relative h-52 w-full bg-gradient-to-br from-graphite-900 via-graphite-950 to-graphite-900 border-b border-graphite-750/70 p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
          {/* Top Window Chrome */}
          <div className="relative z-10 flex items-center justify-between pb-2 border-b border-graphite-800/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-graphite-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-graphite-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-graphite-800" />
              <span className="text-[10px] font-mono text-graphite-400 ml-2 flex items-center gap-1">
                <Car className="w-3 h-3 text-graphite-400" />
                fleet-portal // Reservation Engine
              </span>
            </div>
            <span className="text-[10px] font-mono text-graphite-300 bg-graphite-850 px-2.5 py-0.5 rounded border border-graphite-750">
              Full-Stack Platform
            </span>
          </div>

          {/* Representative Vehicle Status Grid */}
          <div className="relative z-10 my-auto py-2 space-y-2">
            <div className="grid grid-cols-3 gap-1.5 text-[9px] font-mono">
              <div className="p-1.5 rounded bg-graphite-900 border border-graphite-800 text-graphite-300 text-center">
                Sedan: Available
              </div>
              <div className="p-1.5 rounded bg-graphite-900 border border-graphite-800 text-graphite-300 text-center">
                SUV: Rented
              </div>
              <div className="p-1.5 rounded bg-graphite-900 border border-graphite-800 text-graphite-300 text-center">
                EV: In-Service
              </div>
            </div>
            <div className="flex items-center justify-between px-2 py-1 rounded bg-graphite-900 border border-graphite-800 text-[10px] font-mono text-graphite-300">
              <span className="text-graphite-400">Booking Engine:</span>
              <span className="text-graphite-200 font-semibold truncate ml-1">Date Overlap Guard • Dynamic Pricing</span>
            </div>
          </div>

          {/* Bottom Caption */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-graphite-400 pt-2 border-t border-graphite-800/60">
            <span className="text-graphite-300 font-medium">Representative Full-Stack UI</span>
            <span className="text-graphite-500">React • Node.js • PostgreSQL</span>
          </div>
        </div>
      );
    }

    if (isCyber) {
      return (
        <div className="relative h-52 w-full bg-gradient-to-br from-graphite-900 via-graphite-950 to-graphite-900 border-b border-graphite-750/70 p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
          {/* Top Window Chrome */}
          <div className="relative z-10 flex items-center justify-between pb-2 border-b border-graphite-800/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-graphite-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-graphite-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-graphite-800" />
              <span className="text-[10px] font-mono text-graphite-400 ml-2">
                crypto-lab // Web Crypto API
              </span>
            </div>
            <span className="text-[10px] font-mono text-graphite-300 bg-graphite-850 px-2 py-0.5 rounded border border-graphite-750">
              Interactive Lab
            </span>
          </div>

          {/* 3 Primitives Mini-Lab Display */}
          <div className="relative z-10 my-auto py-2 grid grid-cols-3 gap-1.5">
            <div className="p-2 rounded-lg bg-graphite-900 border border-graphite-800 flex flex-col justify-between">
              <div className="flex items-center gap-1 text-[10px] font-mono text-graphite-200 font-semibold">
                <Key className="w-3 h-3 text-graphite-400" />
                <span>AES-256</span>
              </div>
              <div className="text-[9px] font-mono text-graphite-400 truncate mt-1">GCM Cipher</div>
            </div>
            <div className="p-2 rounded-lg bg-graphite-900 border border-graphite-800 flex flex-col justify-between">
              <div className="flex items-center gap-1 text-[10px] font-mono text-graphite-200 font-semibold">
                <Hash className="w-3 h-3 text-graphite-400" />
                <span>SHA-256</span>
              </div>
              <div className="text-[9px] font-mono text-graphite-400 truncate mt-1">One-Way Hash</div>
            </div>
            <div className="p-2 rounded-lg bg-graphite-900 border border-graphite-800 flex flex-col justify-between">
              <div className="flex items-center gap-1 text-[10px] font-mono text-graphite-200 font-semibold">
                <Binary className="w-3 h-3 text-graphite-400" />
                <span>HMAC</span>
              </div>
              <div className="text-[9px] font-mono text-graphite-400 truncate mt-1">Auth Tag</div>
            </div>
          </div>

          {/* Bottom Caption */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-graphite-400 pt-2 border-t border-graphite-800/60">
            <span className="text-graphite-300 font-medium">Representative Visual Lab</span>
            <span className="text-graphite-500">Zero-Server Web Crypto</span>
          </div>
        </div>
      );
    }

    if (isHotel) {
      return (
        <div className="relative h-52 w-full bg-gradient-to-br from-graphite-900 via-graphite-950 to-graphite-900 border-b border-graphite-750/70 p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
          {/* Top Window Chrome (WPF Desktop App) */}
          <div className="relative z-10 flex items-center justify-between pb-2 border-b border-graphite-800/80">
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3 h-3 text-graphite-400" />
              <span className="text-[10px] font-mono text-graphite-300 font-semibold">
                HRS Desktop Console
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-graphite-500 text-[9px] font-mono">
              <span>[ _ ]</span>
              <span>[ □ ]</span>
              <span>[ ✕ ]</span>
            </div>
          </div>

          {/* Room Allocation Grid Mock */}
          <div className="relative z-10 my-auto py-2 space-y-2">
            <div className="grid grid-cols-3 gap-1.5 text-[9px] font-mono">
              <div className="p-1.5 rounded bg-graphite-900 border border-graphite-800 text-graphite-300 text-center">
                101: Available
              </div>
              <div className="p-1.5 rounded bg-graphite-900 border border-graphite-800 text-graphite-300 text-center">
                102: Occupied
              </div>
              <div className="p-1.5 rounded bg-graphite-900 border border-graphite-800 text-graphite-300 text-center">
                103: Reserved
              </div>
            </div>
            <div className="flex items-center justify-between px-2 py-1 rounded bg-graphite-900 border border-graphite-800 text-[10px] font-mono text-graphite-300">
              <span className="text-graphite-400">RBAC:</span>
              <span className="text-graphite-200 font-semibold truncate ml-1">Admin • Receptionist • Accountant</span>
            </div>
          </div>

          {/* Bottom Caption */}
          <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-graphite-400 pt-2 border-t border-graphite-800/60">
            <span className="text-graphite-300 font-medium">Representative Desktop UI</span>
            <span className="text-graphite-500">WPF + ASP.NET Core API</span>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className={`group relative flex flex-col rounded-2xl bg-graphite-850 border overflow-hidden transition-all duration-300 shadow-card hover:shadow-card-hover ${
        isGCodeHub
          ? 'border-graphite-650 ring-1 ring-graphite-700/60 hover:border-graphite-500'
          : 'border-graphite-750 hover:border-graphite-600'
      }`}
    >
      {/* Top Visual Graphic */}
      {renderVisualHeader()}

      {/* Content Area */}
      <div className="flex-1 p-6 flex flex-col justify-between space-y-6">
        <div>
          {/* Card Top Meta */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <Badge variant="graphite" size="sm">
              {project.status}
            </Badge>
            <span className="text-[11px] font-mono text-graphite-400 bg-graphite-900 px-2 py-0.5 rounded border border-graphite-750">
              {project.category}
            </span>
          </div>

          {/* Title & Subtitle */}
          <h3 className="text-xl font-bold text-graphite-100 group-hover:text-white transition-colors">
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          </h3>
          <p className="text-xs text-graphite-400 font-mono mt-1 mb-3">
            {project.subtitle}
          </p>

          {/* Description */}
          <p className="text-sm text-graphite-300 leading-relaxed line-clamp-3 mb-5">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-graphite-900 text-graphite-300 border border-graphite-750/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-graphite-800 flex items-center justify-between gap-3">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-graphite-200 hover:text-white transition-colors group/link"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>

          <div className="flex items-center gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-graphite-200 bg-graphite-800 hover:text-white hover:bg-graphite-750 border border-graphite-700 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} Live Demo`}
                className="p-1.5 rounded-lg text-graphite-400 hover:text-white hover:bg-graphite-800 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
