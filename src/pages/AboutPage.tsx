import React from 'react';
import {
  ArrowRight,
  BrainCircuit,
  Briefcase,
  Code2,
  Compass,
  Database,
  GraduationCap,
  HeartHandshake,
  Layout,
  Mail,
  Server,
  Sparkles,
  Terminal,
} from 'lucide-react';
import {
  technicalSkillsGrouped,
  journeyMilestones,
  beyondTheCodeItems,
} from '../data/skillsData';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { PortraitPlaceholder } from '../components/common/PortraitPlaceholder';

export const AboutPage: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Frontend':
        return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getJourneyIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Briefcase className="w-5 h-5 text-emerald-400" />;
      case 3:
        return <HeartHandshake className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getBeyondIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 1:
        return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      case 2:
        return <Compass className="w-5 h-5 text-emerald-400" />;
      case 3:
        return <HeartHandshake className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-24 md:space-y-32">
      {/* =========================================================================
          1. HERO SECTION
          ========================================================================= */}
      <section className="relative overflow-hidden pt-4 sm:pt-8">
        {/* Ambient background glow accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 right-1/4 w-80 h-80 bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          {/* Left Column: Personal Introduction & Headline */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-graphite-900 border border-graphite-800 text-xs font-mono text-graphite-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold">Hi, I'm Eleni.</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-graphite-50 leading-[1.14]">
              I turn ideas into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500">
                digital experiences.
              </span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-graphite-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <p>
                I am a <strong className="text-graphite-100 font-semibold">Software Engineering student</strong> and aspiring <strong className="text-emerald-400 font-semibold">Full-Stack Developer</strong> driven by the challenge of turning complex requirements into clean, intuitive, and accessible software.
              </p>
              <p className="text-sm sm:text-base text-graphite-400">
                Whether designing responsive web interfaces, structuring relational database schemas, or writing robust backend APIs, I focus on software craftsmanship, type safety, and real human usability.
              </p>
            </div>

            {/* Working Links to Projects & Contact */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Button
                to="/projects"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View My Projects
              </Button>

              <Button
                to="/contact"
                variant="secondary"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <PortraitPlaceholder />
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MY JOURNEY SECTION
          ========================================================================= */}
      <section className="space-y-12">
        <SectionHeading
          badge="Background & Growth"
          title="My Engineering"
          highlight="Journey"
          subtitle="How academic foundations, hands-on software projects, and internship collaboration shaped my engineering mindset."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {journeyMilestones.map((milestone, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 rounded-2xl bg-graphite-900 border border-graphite-800 hover:border-emerald-500/40 transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col justify-between space-y-4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-graphite-850 border border-graphite-750 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:scale-105 transition-all">
                    {getJourneyIcon(idx)}
                  </div>
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-graphite-850 text-graphite-400 border border-graphite-750/80">
                    {milestone.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-graphite-100 group-hover:text-emerald-400 transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400/80 mt-1">
                    {milestone.subtitle}
                  </p>
                </div>

                <p className="text-sm text-graphite-300 leading-relaxed font-normal">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          3. TECHNICAL SKILLS SECTION (COMPACT BADGES, NO PROFICIENCY BARS)
          ========================================================================= */}
      <section className="space-y-10">
        <SectionHeading
          badge="Technical Skills"
          title="Tools & Technologies"
          highlight="I Build With"
          subtitle="Compact badges grouped by domain. Editable in data configuration with zero arbitrary percentages or ratings."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalSkillsGrouped.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-graphite-900 border border-graphite-800 hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-graphite-850 border border-graphite-750 flex items-center justify-center">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-graphite-100">
                      {group.category}
                    </h3>
                    <span className="text-[10px] font-mono text-graphite-500">
                      {group.skills.length} Technologies
                    </span>
                  </div>
                </div>

                {/* Compact Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-graphite-850 text-graphite-200 border border-graphite-750 hover:border-emerald-500/50 hover:text-emerald-300 hover:bg-graphite-800 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          4. BEYOND THE CODE
          ========================================================================= */}
      <section className="space-y-10">
        <SectionHeading
          badge="Human-Centered Engineering"
          title="Beyond the"
          highlight="Code"
          subtitle="The mindset, habits, and values that guide my day-to-day approach to building software and working with others."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beyondTheCodeItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-graphite-900/80 border border-graphite-800 hover:border-emerald-500/30 transition-all duration-300 space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-graphite-850 border border-graphite-750 flex items-center justify-center">
                {getBeyondIcon(idx)}
              </div>
              <h3 className="text-base font-bold text-graphite-100">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-graphite-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          5. CLOSING CTA SECTION
          ========================================================================= */}
      <section className="rounded-3xl bg-gradient-to-br from-graphite-900 via-graphite-950 to-emerald-950/30 border border-graphite-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        {/* Ambient backlight */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-6 relative z-10">
          <Badge variant="emerald">Let's Build Together</Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-graphite-50 tracking-tight leading-tight">
            Turning complex problems into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500">
              elegant digital experiences.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-graphite-300 leading-relaxed font-normal">
            I am currently open to full-time software engineering roles, internships, and collaborative development projects. Let's start a conversation.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              icon={<Mail className="w-4 h-4" />}
            >
              Get in Touch
            </Button>

            <Button
              to="/projects"
              variant="secondary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
