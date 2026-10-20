import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { profileConfig } from '../config/profileConfig';
import { projectsData } from '../data/projectsData';
import { Button } from '../components/common/Button';
import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectCard } from '../components/common/ProjectCard';
import { GithubIcon } from '../components/common/SocialIcons';
import { HeroSection } from '../components/home/HeroSection';

export const HomePage: React.FC = () => {
  // Curate exactly the top 3 projects for a concise, non-bloated showcase
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="space-y-12 md:space-y-16 pb-12">
      {/* =========================================================================
          1. HERO SECTION (Fraunces serif headline, single gold button, availability pill)
          ========================================================================= */}
      <HeroSection />

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
        <div className="rounded-2xl bg-graphite-850 border border-graphite-750 p-6 sm:p-8 text-center">
          <div className="max-w-xl mx-auto space-y-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-graphite-100">
              Let's build something exceptional together.
            </h2>
            <p className="text-xs sm:text-sm text-graphite-400 leading-relaxed">
              Available for full-time software engineering roles, internships, and selected freelance collaborations.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Button
                to="/contact"
                variant="secondary"
                size="md"
                icon={<Mail className="w-4 h-4" />}
              >
                Get in Touch
              </Button>
              <Button
                href={profileConfig.contact.github}
                variant="outline"
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
