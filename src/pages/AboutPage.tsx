import React from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  BookOpen,
  Users,
} from 'lucide-react';
import { profileConfig } from '../config/profileConfig';
import { skillsCategories, engineeringPrinciples } from '../data/skillsData';
import { SectionHeading } from '../components/common/SectionHeading';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20 md:space-y-28">
      {/* =========================================================================
          HERO / PROFESSIONAL INTRODUCTION
          ========================================================================= */}
      <section className="space-y-6 max-w-4xl">
        <Badge variant="emerald">About Eleni Girefi</Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-graphite-100 tracking-tight leading-tight">
          Engineering reliable web applications with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
            craftsmanship & curiosity.
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-graphite-300 leading-relaxed font-normal">
          I am a Full-Stack Developer and Software Engineer with an authentic commitment to building robust, accessible, and maintainable software.
        </p>
      </section>

      {/* =========================================================================
          SOFTWARE ENGINEERING BACKGROUND & JOURNEY
          ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 space-y-4">
          <SectionHeading
            badge="Background"
            title="My Engineering"
            highlight="Journey"
            subtitle="How I approached software development and full-stack architecture."
          />

          <div className="p-5 rounded-xl bg-graphite-900 border border-graphite-800 space-y-3">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-semibold">
              Quick Facts
            </span>
            <ul className="space-y-2.5 text-xs text-graphite-300 font-mono">
              <li className="flex items-center justify-between border-b border-graphite-800 pb-2">
                <span className="text-graphite-500">Location:</span>
                <span className="text-graphite-200">Ethiopia (Global Remote)</span>
              </li>
              <li className="flex items-center justify-between border-b border-graphite-800 pb-2">
                <span className="text-graphite-500">Primary Focus:</span>
                <span className="text-emerald-400">Full-Stack Development</span>
              </li>
              <li className="flex items-center justify-between border-b border-graphite-800 pb-2">
                <span className="text-graphite-500">Core Stack:</span>
                <span className="text-graphite-200">React, TypeScript, Node.js</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-graphite-500">Status:</span>
                <span className="text-emerald-400">Open to Roles</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6 text-graphite-300 leading-relaxed text-base sm:text-lg">
          <div className="p-6 sm:p-8 rounded-2xl bg-graphite-900/60 border border-graphite-800/80 space-y-5">
            <h3 className="text-xl font-bold text-graphite-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-400" />
              <span>Foundation & Problem-Solving Mindset</span>
            </h3>
            <p className="text-sm sm:text-base text-graphite-300 leading-relaxed">
              My path into software engineering began with a passion for understanding how systems work under the hood. Rather than viewing code simply as a means to display pixels, I treat software engineering as the disciplined craft of modeling reality into reliable, type-safe, and self-documenting code.
            </p>
            <p className="text-sm sm:text-base text-graphite-300 leading-relaxed">
              Over the course of academic coursework and hands-on projects, I transitioned from foundational algorithmic thinking to modern full-stack web applications. I learned that writing maintainable software requires more than syntax—it demands empathy for fellow engineers who will read your code and for end-users who rely on its accessibility and speed.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-graphite-900/60 border border-graphite-800/80 space-y-5">
            <h3 className="text-xl font-bold text-graphite-100 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-400" />
              <span>Internship & Collaborative Teamwork</span>
            </h3>
            <p className="text-sm sm:text-base text-graphite-300 leading-relaxed">
              My practical engineering abilities took a significant step forward during my internship experience on platforms such as <strong className="text-graphite-100">gCODE-Hub</strong>. Working within a structured engineering workflow introduced me to real-world software delivery practices: participating in weekly agile standups, managing feature branches via Git, conducting peer pull request reviews, and coordinating API contracts between frontend and backend teammates.
            </p>
            <p className="text-sm sm:text-base text-graphite-300 leading-relaxed">
              I learned how to ask constructive questions early, adhere strictly to team style guides, respect enterprise confidentiality boundaries, and deliver modular code on schedule.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ENGINEERING PHILOSOPHY
          ========================================================================= */}
      <section className="space-y-8">
        <SectionHeading
          badge="Guiding Principles"
          title="Engineering"
          highlight="Philosophy"
          subtitle="Four core principles that shape my daily development decisions and code quality."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {engineeringPrinciples.map((principle, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-xl bg-graphite-900 border border-graphite-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-graphite-800 border border-graphite-750 flex items-center justify-center text-emerald-400 font-mono text-sm font-bold mb-4">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-bold text-graphite-100 mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-graphite-400 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          TECHNICAL SKILLS GROUPED BY EXPERIENCE LEVEL
          ========================================================================= */}
      <section className="space-y-10">
        <div className="space-y-3">
          <SectionHeading
            badge="Verified Skillsets"
            title="Technical Skills by"
            highlight="Experience Level"
            subtitle="Presented transparently by actual practical application. No fabricated progress bars or arbitrary proficiency percentages."
          />
          <p className="text-xs font-mono text-graphite-500 italic max-w-2xl">
            [Editable configuration: You can update, reclassify, or add technologies in <code className="text-emerald-400">src/data/skillsData.ts</code>]
          </p>
        </div>

        <div className="space-y-8">
          {skillsCategories.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl bg-graphite-900/80 border border-graphite-800 p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-graphite-800/80 pb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-graphite-100">
                      {group.title}
                    </h3>
                    <Badge variant={group.id === 'confidently-used' ? 'emerald' : 'graphite'}>
                      {group.badge}
                    </Badge>
                  </div>
                  <p className="text-xs sm:text-sm text-graphite-400 mt-1">
                    {group.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400">
                  {group.skills.length} Technologies
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-lg bg-graphite-850/70 border border-graphite-750/70 hover:border-emerald-500/30 transition-colors flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold text-sm text-graphite-100">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-graphite-800 text-graphite-400 border border-graphite-750">
                        {skill.category}
                      </span>
                    </div>
                    {skill.note && (
                      <p className="text-xs text-graphite-400 leading-snug">
                        {skill.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          RÉSUMÉ / CV SECTION
          ========================================================================= */}
      <section id="resume" className="space-y-6">
        <SectionHeading
          badge="Curriculum Vitae"
          title="Résumé &"
          highlight="Credentials"
          subtitle="Review my academic credentials, verified skills, and technical project history."
        />

        <div className="rounded-2xl bg-gradient-to-br from-graphite-900 to-graphite-950 border border-graphite-800 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
              <FileText className="w-3.5 h-3.5" />
              <span>Format: PDF • Updated {profileConfig.resume.lastUpdated}</span>
            </div>

            <h3 className="text-2xl font-bold text-graphite-100">
              Eleni Girefi — Software Engineer Résumé
            </h3>
            <p className="text-sm text-graphite-400 leading-relaxed">
              Contains detailed descriptions of software engineering coursework, verified internship milestones, architectural competencies, and technical proficiencies.
            </p>

            <div className="p-3 rounded-lg bg-graphite-850/80 border border-graphite-750 text-xs text-graphite-400 font-mono">
              <span className="text-emerald-400">Editable note:</span> Place your PDF in <code className="text-graphite-200">/public/{profileConfig.resume.downloadFilename}</code> to enable direct one-click downloading.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
            <Button
              href={profileConfig.resume.viewUrl}
              variant="primary"
              size="lg"
              icon={<Download className="w-4 h-4" />}
            >
              Download Résumé (PDF)
            </Button>
            <Button
              href={profileConfig.resume.viewUrl}
              variant="secondary"
              size="lg"
              icon={<ExternalLink className="w-4 h-4" />}
            >
              View in Browser
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
