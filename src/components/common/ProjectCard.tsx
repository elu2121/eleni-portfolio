import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Layers, ShieldCheck, Terminal } from 'lucide-react';
import type { ProjectItem } from '../../types';
import { Badge } from './Badge';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Select distinct icon graphic based on category
  const renderVisualHeader = () => {
    const isCyber = project.category === 'Cybersecurity & Tools';
    const isInternship = project.status === 'Internship Project';

    return (
      <div className="relative aspect-video w-full bg-gradient-to-br from-graphite-850 to-graphite-950 border-b border-graphite-750/70 p-6 flex flex-col justify-between overflow-hidden group-hover:border-emerald-500/30 transition-colors">
        {/* Background circuit/grid accents */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <Badge
            variant={isInternship ? 'emerald' : 'graphite'}
            size="sm"
          >
            {project.status}
          </Badge>
          <span className="text-[11px] font-mono text-graphite-400 bg-graphite-900/80 px-2 py-0.5 rounded border border-graphite-800">
            {project.category}
          </span>
        </div>

        {/* Center Graphic Representation */}
        <div className="relative z-10 my-auto flex items-center gap-3 py-2">
          <div className="w-12 h-12 rounded-xl bg-graphite-800/90 border border-graphite-700 flex items-center justify-center text-emerald-400 shadow-md group-hover:border-emerald-500/50 group-hover:scale-105 transition-all">
            {isCyber ? (
              <ShieldCheck className="w-6 h-6" />
            ) : isInternship ? (
              <Terminal className="w-6 h-6" />
            ) : (
              <Layers className="w-6 h-6" />
            )}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-graphite-200 group-hover:text-emerald-300 transition-colors">
              {project.placeholderImage.title}
            </h4>
            <p className="text-[11px] text-graphite-400 line-clamp-1">
              {project.placeholderImage.caption}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Timeline & Role */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-graphite-400 pt-2 border-t border-graphite-800/50">
          <span>{project.role}</span>
          <span className="text-emerald-400/90">{project.timeline}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="group relative flex flex-col rounded-xl bg-graphite-900 border border-graphite-750 overflow-hidden shadow-card hover:shadow-card-hover hover:border-emerald-500/40 transition-all duration-300">
      {/* Top Visual Graphic */}
      {renderVisualHeader()}

      {/* Content Area */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-graphite-100 group-hover:text-emerald-400 transition-colors">
            <Link to={`/projects/${project.id}`}>
              {project.title}
            </Link>
          </h3>
          <p className="text-xs text-emerald-400/80 font-mono mt-0.5 mb-3">
            {project.subtitle}
          </p>

          <p className="text-sm text-graphite-400 leading-relaxed line-clamp-3 mb-5">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-graphite-850 text-graphite-300 border border-graphite-750/70"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-graphite-850/60 text-graphite-500 border border-graphite-800">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-graphite-800/80 flex items-center justify-between gap-3">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/link"
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
                aria-label={`View ${project.title} GitHub repository`}
                className="p-1.5 rounded-lg text-graphite-400 hover:text-graphite-100 hover:bg-graphite-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} Live Demo`}
                className="p-1.5 rounded-lg text-graphite-400 hover:text-emerald-400 hover:bg-graphite-800 transition-colors"
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
