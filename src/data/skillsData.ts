import type { SkillItem } from '../types';

/**
 * =========================================================================
 * ELENI GIREFI - TECHNICAL SKILLS & PROFICIENCY TIERS
 * =========================================================================
 * Grouped transparently by verified experience level rather than deceptive
 * percentage bars or arbitrary numeric meters.
 * You can easily edit categories or add technologies below.
 */

export const skillsCategories = [
  {
    id: "confidently-used",
    title: "Confidently Used",
    badge: "Core Stack",
    description: "Technologies I actively build with, tested through internship work, academic projects, and web development.",
    skills: [
      { name: "React", category: "frontend", note: "Functional components, custom hooks, modular UI" },
      { name: "TypeScript", category: "frontend", note: "Strict typing, interfaces, generics, type safety" },
      { name: "JavaScript (ES6+)", category: "frontend", note: "Modern syntax, async/await, DOM APIs" },
      { name: "Tailwind CSS", category: "frontend", note: "Utility-first design, tokens, responsive layouts" },
      { name: "HTML5 & Semantic Markup", category: "frontend", note: "Accessible, SEO-friendly document structures" },
      { name: "CSS3 & Responsive Design", category: "frontend", note: "Flexbox, Grid, media queries, animations" },
      { name: "REST APIs", category: "backend", note: "API design, endpoint integration, payload contracts" },
      { name: "Node.js & Express", category: "backend", note: "Server logic, middleware, JSON endpoints" },
      { name: "PostgreSQL", category: "database", note: "Relational queries, schemas, relationships" },
      { name: "Git & GitHub", category: "tools-devops", note: "Branch workflows, PRs, version control hygiene" }
    ] as SkillItem[]
  },
  {
    id: "currently-learning",
    title: "Currently Learning & Deepening",
    badge: "Active Growth",
    description: "Technologies I am currently studying, implementing in labs, or expanding my depth in.",
    skills: [
      { name: "NestJS", category: "backend", note: "Modular architecture, dependency injection, decorators" },
      { name: "Prisma ORM", category: "database", note: "Type-safe database modeling, migrations" },
      { name: "MySQL", category: "database", note: "Relational modeling, indexing, query optimization" },
      { name: "Software Testing & QA", category: "testing", note: "Unit testing, integration testing, test-driven flow" },
      { name: "Web Application Security", category: "tools-devops", note: "Defensive coding, OWASP Top 10 mitigation" }
    ] as SkillItem[]
  },
  {
    id: "future-interest",
    title: "Future Interests & Technology Roadmap",
    badge: "Roadmap",
    description: "Frameworks and disciplines I plan to explore as I continue expanding my full-stack capabilities.",
    skills: [
      { name: "Laravel", category: "backend", note: "Exploring modern PHP framework conventions and ecosystems" },
      { name: "Angular", category: "frontend", note: "Enterprise two-way binding & RxJS observables" },
      { name: "CI/CD & Cloud Deployment", category: "tools-devops", note: "Automated pipelines, Docker containerization" },
      { name: "Microservices Architecture", category: "backend", note: "Decoupled domain services and message queues" }
    ] as SkillItem[]
  }
];

export const engineeringPrinciples = [
  {
    title: "Type Safety & Correctness",
    description: "I rely on strict TypeScript to eliminate entire classes of runtime errors before code ever hits production."
  },
  {
    title: "User-Centered Accessibility",
    description: "Websites should be fast, keyboard-navigable, screen-reader friendly, and visually legible to everyone."
  },
  {
    title: "Maintainable Architecture",
    description: "I write clean, modular components with clear separation between user interface, state management, and network calls."
  },
  {
    title: "Honest Engineering Judgment",
    description: "I evaluate tools based on problem constraints rather than hype, choosing straightforward solutions over unnecessary complexity."
  }
];
