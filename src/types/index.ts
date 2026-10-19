export interface ProjectLink {
  label: string;
  url: string;
  isExternal?: boolean;
}

export interface CaseStudySection {
  title: string;
  content: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Frontend' | 'Cybersecurity & Tools';
  description: string;
  featured: boolean;
  status: 'Completed' | 'In Development' | 'Internship Project';
  technologies: string[];
  role: string;
  timeline: string;
  links: {
    github?: string;
    liveDemo?: string;
    documentation?: string;
  };
  placeholderImage: {
    title: string;
    caption: string;
    badge: string;
  };
  caseStudy: {
    overview: string;
    confidentialityNotice?: string;
    problemStatement: string;
    goalsAndRequirements: string[];
    individualContribution: string[];
    architecture: {
      summary: string;
      highlights: string[];
    };
    keyDecisions: {
      decision: string;
      rationale: string;
    }[];
    challengesAndSolutions: {
      challenge: string;
      solution: string;
    }[];
    testingAndQA: string[];
    resultsAndLessons: string[];
  };
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools-devops' | 'testing';
  level: 'confidently-used' | 'currently-learning' | 'future-interest';
  note?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  deliverables: string[];
  technologies: string[];
  idealFor: string;
}

export interface ProfileConfig {
  name: string;
  wordmark: string;
  title: string;
  headline: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  availability: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
    locationNote: string;
  };
  resume: {
    viewUrl: string;
    downloadFilename: string;
    lastUpdated: string;
  };
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}
