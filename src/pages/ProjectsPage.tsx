import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projectsData';
import { Badge } from '../components/common/Badge';
import { ProjectCard } from '../components/common/ProjectCard';
import { Search, Sparkles } from 'lucide-react';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))];
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <Badge variant="emerald">Project Showcase</Badge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-graphite-100 tracking-tight">
          Engineered solutions,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
            from concept to deployment.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-graphite-300 leading-relaxed font-normal">
          Explore full-stack platforms, interactive cybersecurity educational tools, and community applications. Each project card links to a comprehensive architectural case study.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-xl bg-graphite-900 border border-graphite-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all cursor-pointer ${
                selectedCategory === category
                  ? 'bg-emerald-500 text-graphite-950 font-semibold shadow-sm'
                  : 'bg-graphite-850 text-graphite-300 hover:bg-graphite-800 hover:text-white border border-graphite-750'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-graphite-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tech or keyword..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-graphite-950 border border-graphite-750 rounded-lg text-graphite-200 placeholder-graphite-500 focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-graphite-900/40 rounded-xl border border-graphite-800 space-y-3">
          <p className="text-graphite-300 text-base">
            No projects matched your search criteria.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="text-xs font-mono text-emerald-400 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Candidate Notice / Transparency Note */}
      <div className="p-4 rounded-xl bg-graphite-900/60 border border-graphite-800/80 flex items-start gap-3 text-xs text-graphite-400 leading-relaxed font-mono">
        <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <span className="text-graphite-200 font-semibold">Integrity Commitment:</span> Project case studies represent genuine engineering work, architectural problem-solving, and verified coursework/internship milestones without fabricated user metrics or simulated production deployments.
        </div>
      </div>
    </div>
  );
};
