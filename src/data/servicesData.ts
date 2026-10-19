import type { ServiceItem } from '../types';

/**
 * =========================================================================
 * ELENI GIREFI - FREELANCE & CONTRACT ENGINEERING SERVICES
 * =========================================================================
 * Honest, well-scoped service offerings for freelance clients, startups,
 * and collaborative teams. All descriptions can be adjusted in this file.
 */
export const servicesData: ServiceItem[] = [
  {
    id: "responsive-web-development",
    title: "Responsive Website Development",
    shortDescription: "Custom, mobile-first websites crafted with modern HTML5, CSS3/Tailwind, and React for individuals, initiatives, and organizations.",
    detailedDescription: "I design and build tailored websites that look sharp and function reliably on every screen—from high-resolution desktop monitors to smartphones. Emphasis is placed on typography, swift load times, accessible layouts, and clean brand representation.",
    deliverables: [
      "Mobile-first, fully responsive layouts",
      "Semantic HTML & WCAG-compliant accessibility standards",
      "Fast page load speeds and SEO meta tag setup",
      "Clean, maintainable source code ready for easy hosting"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "HTML5", "Vite"],
    idealFor: "Founders, agencies, portfolio owners, and small businesses needing an authentic, high-performance web presence."
  },
  {
    id: "frontend-development",
    title: "Modern Frontend Development",
    shortDescription: "Interactive, component-based user interfaces built with React, strict TypeScript, and predictable state management.",
    detailedDescription: "Transforming design mockups and wireframes into smooth, pixel-accurate interactive experiences. I build reusable component libraries, manage client-side routing, and ensure accessible user workflows with subtle micro-interactions.",
    deliverables: [
      "Modular, reusable UI components",
      "Strict TypeScript type coverage",
      "Client-side routing and animated view transitions",
      "Accessible modal dialogs, drawers, and interactive widgets"
    ],
    technologies: ["React 19", "TypeScript", "Tailwind CSS", "Motion", "Lucide Icons"],
    idealFor: "Product teams needing an engineer to build or refactor clean, modern frontends for web applications."
  },
  {
    id: "fullstack-applications",
    title: "Full-Stack Web Applications",
    shortDescription: "End-to-end web applications connecting responsive React frontends with reliable Node.js / REST backend architectures.",
    detailedDescription: "Designing and developing cohesive web applications from database modeling to user interface. I connect client views with RESTful endpoints, implement structured validation rules, and manage persistent relational data.",
    deliverables: [
      "Integrated frontend and backend application workflow",
      "Relational database schema modeling (PostgreSQL / MySQL)",
      "Structured validation logic on both client and server boundaries",
      "Clear documentation on environment configuration and running the app"
    ],
    technologies: ["React", "Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma"],
    idealFor: "Startups and teams looking to validate functional MVPs or build dedicated internal business tools."
  },
  {
    id: "backend-api-integration",
    title: "Backend API Integration & Development",
    shortDescription: "Connecting frontends to third-party APIs, webhooks, and custom RESTful service endpoints with robust error handling.",
    detailedDescription: "Building and consuming RESTful endpoints with clean contract definitions. I handle asynchronous data fetching, network failure states, payload transformations, and pagination without breaking user flows.",
    deliverables: [
      "Type-safe API client wrappers",
      "Resilient error handling and user-friendly fallback states",
      "Pagination, search, and sorting integration",
      "Clear documentation of endpoint request and response formats"
    ],
    technologies: ["REST APIs", "Node.js", "Express", "TypeScript", "JSON Web Tokens"],
    idealFor: "Projects needing clean integration between distinct backend microservices and modern frontend applications."
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance & Enhancements",
    shortDescription: "Auditing existing codebases, updating dependencies, fixing UI bugs, and implementing new features or design updates.",
    detailedDescription: "Providing steady engineering care for existing websites and applications. I resolve cross-browser layout bugs, modernize outdated dependencies, improve responsiveness, and refactor brittle components.",
    deliverables: [
      "Dependency version audits and security patching",
      "Bug fixes for responsive display and mobile behavior",
      "Performance and asset optimization",
      "Refactoring legacy styles into clean Tailwind utility classes"
    ],
    technologies: ["React", "TypeScript", "CSS / Tailwind", "Git", "DevTools"],
    idealFor: "Existing site owners who need dependable technical maintenance and feature enhancements without rewriting everything."
  },
  {
    id: "software-testing-qa",
    title: "Software Quality & Testing Support",
    shortDescription: "Assisting teams with manual testing, component test suites, edge case verification, and accessibility audits.",
    detailedDescription: "Helping ensure software meets professional reliability standards before user delivery. I systematically inspect user journeys, identify edge-case form validation flaws, and review contrast and keyboard accessibility.",
    deliverables: [
      "Structured test plan checklist covering primary user flows",
      "Detailed bug reproduction reports with console logs and screen captures",
      "Accessibility audit checking WCAG contrast and keyboard navigation",
      "Sanity testing across Chrome, Safari, and Firefox"
    ],
    technologies: ["Manual QA", "Component Testing", "Chrome DevTools", "Accessibility Auditing"],
    idealFor: "Teams preparing for a release milestone who want an attentive eye verifying user experience and stability."
  }
];
