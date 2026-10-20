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
      { name: "C# & .NET Core", category: "backend", note: "OOP architecture, ASP.NET Core Web API, WPF desktop applications" },
      { name: "ASP.NET Core & EF Core", category: "backend", note: "Enterprise REST APIs, Entity Framework Core, SQL Server" },
      { name: "Java", category: "backend", note: "Core OOP, file I/O streams, data structures, robust console architectures" },
      { name: "Tailwind CSS", category: "frontend", note: "Utility-first design, tokens, responsive layouts" },
      { name: "HTML5 & Semantic Markup", category: "frontend", note: "Accessible, SEO-friendly document structures" },
      { name: "CSS3 & Responsive Design", category: "frontend", note: "Flexbox, Grid, media queries, animations" },
      { name: "REST APIs", category: "backend", note: "API design, endpoint integration, payload contracts" },
      { name: "Node.js & Express", category: "backend", note: "Server logic, middleware, JSON endpoints" },
      { name: "SQL Server & PostgreSQL", category: "database", note: "Relational queries, schema design, constraints, migrations" },
      { name: "Git & GitHub", category: "tools-devops", note: "Branch workflows, PRs, version control hygiene" }
    ] as SkillItem[]
  },
  {
    id: "currently-learning",
    title: "Currently Learning & Deepening",
    badge: "Active Growth",
    description: "Technologies I am currently studying, implementing in labs, or expanding my depth in.",
    skills: [
      { name: "Kotlin & Gradle", category: "backend", note: "JVM build automation, modular libraries, Android development fundamentals" },
      { name: "NestJS", category: "backend", note: "Modular architecture, dependency injection, decorators" },
      { name: "Prisma ORM", category: "database", note: "Type-safe database modeling, migrations" },
      { name: "MySQL", category: "database", note: "Relational modeling, indexing, query optimization" },
      { name: "Software Testing & QA", category: "testing", note: "Unit testing, integration testing, test-driven flow" },
      { name: "Web Application Security", category: "tools-devops", note: "Web Crypto API, defensive coding, OWASP Top 10 mitigation" }
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

/**
 * =========================================================================
 * ABOUT PAGE - GROUPED TECHNICAL SKILLS (COMPACT BADGES)
 * =========================================================================
 * Editable skills grouped strictly into verified categories.
 * No arbitrary proficiency percentage bars or invented metrics.
 */
export interface TechnicalSkillGroup {
  category: 'Programming' | 'Frontend' | 'Backend' | 'Databases';
  skills: string[];
}

export const technicalSkillsGrouped: TechnicalSkillGroup[] = [
  {
    category: "Programming",
    skills: ["Python", "Java", "C#", "PHP"],
  },
  {
    category: "Frontend",
    skills: ["React", "Angular"],
  },
  {
    category: "Backend",
    skills: ["Laravel", "PHP"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "Oracle SQL", "PostgreSQL"],
  },
];

/**
 * =========================================================================
 * ABOUT PAGE - MY JOURNEY HIGHLIGHTS
 * =========================================================================
 */
export const journeyMilestones = [
  {
    title: "Academic Learning",
    subtitle: "Software Engineering Foundations",
    description: "Building deep foundational discipline in algorithms, object-oriented design, systems architecture, and database theory through rigorous coursework and laboratory projects.",
    tag: "Education",
  },
  {
    title: "Hands-On Projects",
    subtitle: "From Concepts to Working Systems",
    description: "Engineering real-world software across the stack—from in-browser cryptography suites and vehicle booking portals to multi-role enterprise desktop reservation platforms in C# .NET.",
    tag: "Engineering",
  },
  {
    title: "Internship Experience",
    subtitle: "Agile Team Collaboration",
    description: "Contributing to live engineering workflows on platforms like gCODE-Hub: participating in daily standups, crafting typed REST APIs, reviewing peer pull requests, and honoring strict enterprise confidentiality standards.",
    tag: "Professional",
  },
  {
    title: "Passion for Useful Software",
    subtitle: "Human-Centered Impact",
    description: "Driven by the belief that great software removes friction and empowers people. I focus on building tools that are accessible, reliable, performant, and genuinely enjoyable to use.",
    tag: "Purpose",
  },
];

/**
 * =========================================================================
 * ABOUT PAGE - BEYOND THE CODE
 * =========================================================================
 */
export const beyondTheCodeItems = [
  {
    title: "Intellectual Curiosity",
    description: "I love exploring how things work under the surface—from network protocols and cryptographic hashing to relational database index execution plans.",
  },
  {
    title: "Structured Problem-Solving",
    description: "When faced with daunting technical challenges, I break them into bite-sized, testable components, iterating step-by-step toward clean solutions.",
  },
  {
    title: "Continuous Learning",
    description: "Technology moves fast. I enjoy learning new languages and architectural patterns, reading engineering blogs, and refining my coding craftsmanship every day.",
  },
  {
    title: "Collaboration & Empathy",
    description: "Code is written for humans. I value clear communication, constructive code reviews, mutual respect, and active listening in cross-functional teams.",
  },
];
