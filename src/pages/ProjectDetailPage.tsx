import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Shield,
  Layers,
  CheckCircle2,
  Terminal,
  Cpu,
  Code2,
  FileCheck2,
  Image as ImageIcon,
} from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { GithubIcon } from '../components/common/SocialIcons';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const projectIndex = projectsData.findIndex((p) => p.id === id);
  const project = projectsData[projectIndex];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const prevProject =
    projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1
      ? projectsData[projectIndex + 1]
      : null;

  const { caseStudy } = project;

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-16">
      {/* =========================================================================
          TOP BREADCRUMBS & NAVIGATION
          ========================================================================= */}
      <div className="flex items-center justify-between border-b border-graphite-800 pb-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-graphite-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Projects</span>
        </Link>

        <div className="flex items-center gap-2">
          <Badge variant="graphite">{project.status}</Badge>
          <Badge variant="graphite">{project.category}</Badge>
        </div>
      </div>

      {/* =========================================================================
          CASE STUDY HEADER / HERO
          ========================================================================= */}
      <header className="space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-graphite-100 tracking-tight leading-tight">
          {project.title}
        </h1>
        <p className="text-lg sm:text-xl text-graphite-300 font-mono">
          {project.subtitle}
        </p>

        {/* Project Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-graphite-900 border border-graphite-800 text-xs font-mono">
          <div>
            <span className="text-graphite-500 block mb-1">My Role</span>
            <span className="text-graphite-200 font-semibold">{project.role}</span>
          </div>
          <div>
            <span className="text-graphite-500 block mb-1">Timeline</span>
            <span className="text-graphite-200 font-semibold">{project.timeline}</span>
          </div>
          <div>
            <span className="text-graphite-500 block mb-1">Category</span>
            <span className="text-graphite-200 font-semibold">{project.category}</span>
          </div>
          <div>
            <span className="text-graphite-500 block mb-1">Type</span>
            <span className="text-graphite-200 font-semibold">{project.status}</span>
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.links.github && (
            <Button
              href={project.links.github}
              variant="secondary"
              icon={<GithubIcon className="w-4 h-4" />}
            >
              Source Repository
            </Button>
          )}

          {project.links.liveDemo ? (
            <Button
              href={project.links.liveDemo}
              variant="secondary"
              icon={<ExternalLink className="w-4 h-4" />}
            >
              Open Live Application
            </Button>
          ) : (
            <span className="text-xs font-mono text-graphite-500 flex items-center gap-1.5 px-3 py-2 rounded-lg bg-graphite-900 border border-graphite-800">
              <Shield className="w-3.5 h-3.5 text-graphite-400" />
              Live Demo: Internal / Protected Deployment
            </span>
          )}
        </div>
      </header>

      {/* =========================================================================
          CONFIDENTIALITY NOTICE (If applicable, e.g. gCODE-Hub)
          ========================================================================= */}
      {caseStudy.confidentialityNotice && (
        <section className="p-5 rounded-xl bg-graphite-900 border border-graphite-750 flex items-start gap-3">
          <Shield className="w-5 h-5 text-graphite-300 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-graphite-200">
              Confidentiality & Data Protection Notice
            </h4>
            <p className="text-xs sm:text-sm text-graphite-300 leading-relaxed">
              {caseStudy.confidentialityNotice}
            </p>
          </div>
        </section>
      )}

      {/* =========================================================================
          PROJECT OVERVIEW & PROBLEM STATEMENT
          ========================================================================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-graphite-100 flex items-center gap-2">
          <Layers className="w-5 h-5 text-graphite-400" />
          <span>Project Overview & Problem Statement</span>
        </h2>
        <div className="p-6 sm:p-8 rounded-2xl bg-graphite-900 border border-graphite-800 space-y-4 text-graphite-300 leading-relaxed">
          <p className="text-base sm:text-lg text-graphite-200">
            {caseStudy.overview}
          </p>
          <div className="pt-4 border-t border-graphite-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-graphite-300 mb-2 font-semibold">
              The Challenge / Problem Addressed
            </h3>
            <p className="text-sm sm:text-base text-graphite-300">
              {caseStudy.problemStatement}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          GOALS & REQUIREMENTS
          ========================================================================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-graphite-100 flex items-center gap-2">
          <FileCheck2 className="w-5 h-5 text-graphite-400" />
          <span>Goals & Engineering Requirements</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseStudy.goalsAndRequirements.map((goal, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-graphite-900/80 border border-graphite-800 flex items-start gap-3"
            >
              <CheckCircle2 className="w-4 h-4 text-graphite-400 shrink-0 mt-0.5" />
              <span className="text-sm text-graphite-300 leading-snug">{goal}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          INDIVIDUAL CONTRIBUTION
          ========================================================================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-graphite-100 flex items-center gap-2">
          <Code2 className="w-5 h-5 text-graphite-400" />
          <span>My Individual Engineering Contribution</span>
        </h2>
        <div className="p-6 sm:p-8 rounded-2xl bg-graphite-900 border border-graphite-800 space-y-4">
          <ul className="space-y-3 text-sm sm:text-base text-graphite-300">
            {caseStudy.individualContribution.map((contribution, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-graphite-400 shrink-0 mt-2" />
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================================================================
          TECHNOLOGIES USED
          ========================================================================= */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-graphite-100 flex items-center gap-2">
          <Cpu className="w-5 h-5 text-graphite-400" />
          <span>Technologies & Tools Applied</span>
        </h2>
        <div className="flex flex-wrap gap-2 p-5 rounded-xl bg-graphite-900 border border-graphite-800">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-graphite-850 text-graphite-200 border border-graphite-750"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* =========================================================================
          ARCHITECTURE & SYSTEM DESIGN
          ========================================================================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-graphite-100 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-graphite-400" />
          <span>Architecture & System Design</span>
        </h2>
        <div className="p-6 sm:p-8 rounded-2xl bg-graphite-900 border border-graphite-800 space-y-5">
          <p className="text-sm sm:text-base text-graphite-300 leading-relaxed">
            {caseStudy.architecture.summary}
          </p>

          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-graphite-300 font-semibold">
              Key Architectural Tiers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {caseStudy.architecture.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-graphite-850 border border-graphite-750 text-xs font-mono text-graphite-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY IMPLEMENTATION DECISIONS
          ========================================================================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-graphite-100">
          Important Implementation Decisions
        </h2>
        <div className="space-y-4">
          {caseStudy.keyDecisions.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-graphite-900 border border-graphite-800 space-y-2"
            >
              <h3 className="text-base font-bold text-graphite-200 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-graphite-400" />
                <span>{item.decision}</span>
              </h3>
              <p className="text-xs sm:text-sm text-graphite-400 pl-4 leading-relaxed">
                <strong className="text-graphite-300">Engineering Rationale:</strong> {item.rationale}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CHALLENGES AND SOLUTIONS
          ========================================================================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-graphite-100">
          Challenges & Applied Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudy.challengesAndSolutions.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-graphite-900 border border-graphite-800 space-y-4 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-graphite-500 uppercase tracking-wider block mb-1">
                  Challenge 0{idx + 1}
                </span>
                <h3 className="text-sm font-semibold text-graphite-200 mb-3">
                  {item.challenge}
                </h3>
              </div>
              <div className="pt-3 border-t border-graphite-800">
                <span className="text-xs font-mono text-graphite-300 uppercase tracking-wider block mb-1 font-semibold">
                  Engineering Solution
                </span>
                <p className="text-xs text-graphite-300 leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          TESTING AND QUALITY ASSURANCE
          ========================================================================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-graphite-100 flex items-center gap-2">
          <FileCheck2 className="w-5 h-5 text-graphite-400" />
          <span>Testing & Quality Assurance</span>
        </h2>
        <div className="p-6 sm:p-8 rounded-2xl bg-graphite-900 border border-graphite-800 space-y-3">
          <ul className="space-y-2.5 text-sm text-graphite-300">
            {caseStudy.testingAndQA.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-graphite-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================================================================
          RESULTS AND LESSONS LEARNED
          ========================================================================= */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-graphite-100">
          Results & Engineering Takeaways
        </h2>
        <div className="p-6 sm:p-8 rounded-2xl bg-graphite-900 border border-graphite-800 space-y-4">
          <ul className="space-y-3 text-sm sm:text-base text-graphite-300">
            {caseStudy.resultsAndLessons.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-graphite-400 shrink-0 mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =========================================================================
          REPRESENTATIVE INTERFACE & ARCHITECTURE VISUAL
          ========================================================================= */}
      <section className="p-6 sm:p-8 rounded-2xl bg-graphite-900 border border-graphite-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-graphite-100">
            <ImageIcon className="w-4 h-4 text-graphite-400" />
            <span>Interface Architecture & Representative Visual</span>
          </div>
          <span className="text-[11px] font-mono text-graphite-300 bg-graphite-850 px-2.5 py-1 rounded border border-graphite-750">
            {project.placeholderImage.badge}
          </span>
        </div>

        <div className="p-5 rounded-xl bg-graphite-950 border border-graphite-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-graphite-400 pb-2 border-b border-graphite-850">
            <span className="text-graphite-200 font-semibold">{project.placeholderImage.title}</span>
            <span className="text-graphite-300">{project.status}</span>
          </div>
          <p className="text-xs text-graphite-300 leading-relaxed font-mono">
            {project.placeholderImage.caption}
          </p>
        </div>

        <p className="text-xs text-graphite-400 leading-relaxed">
          * Representative visual architecture for technical review. For proprietary internship work, company source code, internal credentials, and customer databases are strictly protected under professional confidentiality policies.
        </p>
      </section>

      {/* =========================================================================
          NEXT / PREV CASE STUDY NAVIGATION
          ========================================================================= */}
      <nav aria-label="Case Study Pagination" className="pt-8 border-t border-graphite-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevProject ? (
          <Link
            to={`/projects/${prevProject.id}`}
            className="p-4 rounded-xl bg-graphite-900 border border-graphite-800 hover:border-graphite-650 transition-colors flex items-center gap-3 group text-left"
          >
            <ArrowLeft className="w-4 h-4 text-graphite-400 shrink-0 group-hover:-translate-x-1 transition-transform" />
            <div>
              <span className="text-[10px] font-mono text-graphite-500 uppercase tracking-wider block">
                Previous Case Study
              </span>
              <span className="text-sm font-bold text-graphite-200 group-hover:text-white transition-colors">
                {prevProject.title}
              </span>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextProject && (
          <Link
            to={`/projects/${nextProject.id}`}
            className="p-4 rounded-xl bg-graphite-900 border border-graphite-800 hover:border-graphite-650 transition-colors flex items-center justify-between group text-right sm:col-start-2"
          >
            <div>
              <span className="text-[10px] font-mono text-graphite-500 uppercase tracking-wider block">
                Next Case Study
              </span>
              <span className="text-sm font-bold text-graphite-200 group-hover:text-white transition-colors">
                {nextProject.title}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-graphite-400 shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </nav>
    </article>
  );
};
