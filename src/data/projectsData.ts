import type { ProjectItem } from '../types';

/**
 * =========================================================================
 * ELENI GIREFI - PROJECTS & DETAILED CASE STUDIES
 * =========================================================================
 * Contains the 3 candidate projects with truthful, high-fidelity case studies.
 * Notice: No fabricated user counts, production metrics, or proprietary leaks.
 * All repository and live links are explicitly marked as editable placeholders.
 */
export const projectsData: ProjectItem[] = [
  {
    id: "gcode-hub",
    slug: "gcode-hub",
    title: "gCODE-Hub Platform",
    subtitle: "Professional Web Platform for Services, Courses & Workflow Management",
    category: "Full-Stack",
    description: "A centralized platform engineered during an internship to streamline student access to specialized courses, technical opportunities, professional services, and administrative management workflows.",
    featured: true,
    status: "Internship Project",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "PostgreSQL", "Git"],
    role: "Full-Stack Intern Developer",
    timeline: "Internship Engagement",
    links: {
      // [EDITABLE PLACEHOLDER] Replace with authorized public demo or repo link if permitted by organization
      github: "https://github.com/elenigirefi/gcode-hub-placeholder",
      liveDemo: undefined, // Confidential / Internal corporate deployment
      documentation: "#"
    },
    placeholderImage: {
      title: "gCODE-Hub Architectural Dashboard",
      caption: "Workflow management, course catalog & candidate opportunity portal",
      badge: "Internship Project • Confidential Data Protected"
    },
    caseStudy: {
      overview: "gCODE-Hub was developed as part of an engineering internship to unify multiple fragmented workflows into a cohesive, responsive web platform. The platform handles user course access, professional service inquiries, career opportunities, and administrative record management.",
      confidentialityNotice: "In accordance with professional internship confidentiality standards, proprietary source code, internal credentials, customer databases, and internal operational data are omitted from this public case study. The technical discussions below focus solely on engineering methodology, architectural patterns, and verified developer contributions.",
      problemStatement: "Organizations managing multiple educational programs and professional services frequently suffer from disconnected communication channels, manual spreadsheet tracking, and inconsistent user onboarding. gCODE-Hub aimed to provide a structured, automated solution with role-appropriate views for users and staff.",
      goalsAndRequirements: [
        "Design responsive, accessible interfaces for browsing course catalogs and technical services.",
        "Implement a structured administrative portal for reviewing applications and managing content updates.",
        "Ensure dependable client-side form validation and clean API request/response lifecycles.",
        "Establish modular, reusable UI components adhering to consistent design tokens.",
        "Build resilient database schema relationships for programs, enrollments, and user roles."
      ],
      individualContribution: [
        "Architected core reusable React components with TypeScript interfaces to ensure strict typing across forms and data tables.",
        "Collaborated on designing RESTful API endpoints for course listings, service inquiries, and user submissions.",
        "Built administrative table views featuring sorting, client-side filtering, and paginated data handling.",
        "Participated in weekly agile standups, sprint planning sessions, and peer code reviews.",
        "Documented API contracts and component props to assist fellow developers during integration."
      ],
      architecture: {
        summary: "The application separates concerns through a modular multi-tier architecture. A component-driven React frontend communicates with a RESTful backend API service connected to a relational database layer.",
        highlights: [
          "Client Layer: React + TypeScript with component-level state and central layout scaffolding.",
          "Network Layer: Dedicated API client service with centralized error interception and typed response payloads.",
          "Server Layer: Node-based REST API controllers structured around functional domain modules.",
          "Data Layer: Relational schema modeling entities for users, programs, applications, and system logs."
        ]
      },
      keyDecisions: [
        {
          decision: "Strict TypeScript interfaces across all data-fetching layers",
          rationale: "Minimizes runtime null/undefined exceptions when handling complex nested server responses and guarantees compile-time contract enforcement."
        },
        {
          decision: "Component-driven design system with atomic UI building blocks",
          rationale: "Accelerated development across both public landing pages and internal dashboard views while preserving visual consistency."
        },
        {
          decision: "Separation of public vs administrative routing boundaries",
          rationale: "Ensures clean code organization, prevents accidental state leakage, and lays the groundwork for fine-grained role-based access control."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Managing complex nested forms with multiple dependent validation fields.",
          solution: "Implemented controlled form state machines with real-time field-level validation feedback, preventing malformed payload submissions."
        },
        {
          challenge: "Handling varying screen dimensions across mobile devices and high-resolution desktop monitors.",
          solution: "Applied mobile-first responsive grid layouts with Tailwind CSS, thoroughly verified across breakpoint viewports."
        }
      ],
      testingAndQA: [
        "Component testing for critical UI elements, ensuring predictable rendering under empty, loading, and error states.",
        "Manual end-to-end user journey verification covering the application submission and catalog browsing flows.",
        "Cross-browser sanity testing on modern Chromium, WebKit, and Firefox browsers."
      ],
      resultsAndLessons: [
        "Successfully delivered assigned features within the scheduled internship milestones.",
        "Deepened practical understanding of enterprise team collaboration, pull request reviews, and git branching strategies.",
        "Reinforced the value of strict typing and clear API contracts when multiple team members contribute simultaneously."
      ]
    }
  },
  {
    id: "cyber-attack-simulator",
    slug: "cyber-attack-simulator",
    title: "Cyber Attack Simulator & Defense Platform",
    subtitle: "Interactive Web Application for Hands-On Security Education",
    category: "Cybersecurity & Tools",
    description: "An educational sandbox application built to visualize common web vulnerabilities (such as SQL Injection, XSS, and authentication bypasses) alongside their defensive mitigation techniques.",
    featured: true,
    status: "Completed",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Interactive State Engine", "Web Security", "Git"],
    role: "Lead Developer & System Architect",
    timeline: "Academic & Personal Project",
    links: {
      // [EDITABLE PLACEHOLDER] Replace with your actual GitHub repository URL
      github: "https://github.com/elenigirefi/cyber-attack-simulator-placeholder",
      // [EDITABLE PLACEHOLDER] Replace with your actual live demo URL if hosted
      liveDemo: "https://cyber-simulator-demo-placeholder.vercel.app",
      documentation: "#"
    },
    placeholderImage: {
      title: "Security Sandbox & Attack Vector Visualizer",
      caption: "Interactive payload simulation, terminal logs & defense mitigation walkthrough",
      badge: "Cybersecurity & Web Defense"
    },
    caseStudy: {
      overview: "Cybersecurity principles are frequently taught through abstract theory or dense documentation. This project was developed to provide an interactive, safe, in-browser sandbox where learners can visualize how malicious payloads exploit vulnerable code and how modern defenses neutralize those threats.",
      problemStatement: "Students and early-career developers often struggle to understand web security vulnerabilities like SQL Injection, Cross-Site Scripting (XSS), and Broken Access Control until they can see the exact mechanics of execution. Setting up real vulnerable virtual machines can be tedious and intimidating.",
      goalsAndRequirements: [
        "Create an entirely safe browser-based simulation engine without executing live malicious exploits on remote servers.",
        "Visualize the step-by-step path of an input payload as it traverses from client input to vulnerable parsing logic.",
        "Provide side-by-side comparisons showing the 'Vulnerable Implementation' vs the 'Secure Remediation' (e.g., parameterized queries vs string concatenation).",
        "Include an educational terminal feed displaying simulated network requests, server logs, and defensive alerts.",
        "Ensure intuitive navigation suitable for self-paced learning and classroom demonstrations."
      ],
      individualContribution: [
        "Conceived, architected, and built the end-to-end interactive application using React, TypeScript, and Tailwind CSS.",
        "Created the deterministic simulation engine that parses user-selected exploit inputs and renders realistic terminal responses.",
        "Engineered the visual code comparison widget highlighting vulnerable lines alongside security patch recommendations.",
        "Authored explanatory educational guides explaining the OWASP Top 10 concepts addressed in each lab.",
        "Maintained zero external runtime vulnerabilities by keeping simulated attacks strictly inside a sandboxed UI mock environment."
      ],
      architecture: {
        summary: "The application is built as a deterministic state machine. Users select an attack module, configure payload variables, and trigger the step-by-step simulation. The engine walks through lexical inspection, vulnerable evaluation, and defense interception states.",
        highlights: [
          "Simulation Engine: State-driven scenario coordinator dispatching events (Payload Dispatched -> Inspection -> Breach or Defense Triggered).",
          "Virtual Console: Emulated terminal window displaying structured security events with timestamping and severity color codes.",
          "Remediation Engine: Dynamic diff view illustrating secure coding practices (prepared statements, sanitization, CSRF tokens)."
        ]
      },
      keyDecisions: [
        {
          decision: "Pure client-side safe simulation rather than live target servers",
          rationale: "Guarantees zero security risk for hosting providers, allows zero-latency instant feedback, and enables learners to use the tool offline."
        },
        {
          decision: "Side-by-side interactive code diffs",
          rationale: "Bridges the gap between offensive theory and practical engineering defense by showing developers the exact code modification needed."
        },
        {
          decision: "Componentized scenario architecture",
          rationale: "Makes it straightforward to add new attack scenarios (e.g., CSRF, IDOR, SSRF) without refactoring the simulation core."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Accurately representing complex multi-step exploits without overwhelming junior learners.",
          solution: "Designed a progressive disclosure interface where users can toggle between high-level conceptual flowcharts and granular raw HTTP payload views."
        },
        {
          challenge: "Managing synchronous animation steps in the visual terminal.",
          solution: "Built a customized asynchronous event queue in TypeScript that streams simulated log entries with controlled typing delays."
        }
      ],
      testingAndQA: [
        "Type checks validating that all scenario definitions conform to strict scenario schemas.",
        "Accessibility audit verifying contrast ratios on terminal themes and keyboard accessibility for code walkthroughs.",
        "Cross-device responsiveness testing ensuring code snippets remain legible on tablet and mobile viewports."
      ],
      resultsAndLessons: [
        "Successfully created an engaging educational showcase that effectively demonstrates frontend architectural complexity.",
        "Gained profound appreciation for defensive web architecture, input sanitization, and secure-by-design engineering principles.",
        "Validated that interactive visual learning accelerates conceptual comprehension significantly compared to static slides."
      ]
    }
  },
  {
    id: "skillswap",
    slug: "skillswap",
    title: "SkillSwap",
    subtitle: "Peer-to-Peer Skills & Knowledge Exchange Web Application",
    category: "Full-Stack",
    description: "A collaborative community application designed for people to exchange skills, schedule reciprocal mentorship sessions, and track learning milestones without monetary transactions.",
    featured: true,
    status: "Completed",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Prisma"],
    role: "Full-Stack Developer",
    timeline: "Comprehensive Project",
    links: {
      // [EDITABLE PLACEHOLDER] Replace with your actual GitHub repository URL
      github: "https://github.com/elenigirefi/skillswap-placeholder",
      // [EDITABLE PLACEHOLDER] Replace with your actual live demo URL if hosted
      liveDemo: "https://skillswap-demo-placeholder.vercel.app",
      documentation: "#"
    },
    placeholderImage: {
      title: "SkillSwap Mentorship & Matchmaker Portal",
      caption: "Skill directory, reciprocal matching algorithm & session scheduler",
      badge: "Full-Stack Web Application"
    },
    caseStudy: {
      overview: "SkillSwap was created to dismantle financial barriers to learning by connecting peers who possess complementary talents. A user skilled in React who wants to learn Spanish can discover a language enthusiast eager to build their first web app, arranging reciprocal exchange sessions.",
      problemStatement: "Traditional tutoring platforms enforce high hourly fees and rigid booking frameworks. Many motivated self-learners have valuable knowledge to share in return for guidance in another domain, but lacked a dedicated platform to discover reciprocal partners.",
      goalsAndRequirements: [
        "Implement intuitive user profile management with dual 'Skills Offered' and 'Skills Desired' taxonomies.",
        "Develop an exploratory search and filter interface with keyword search and category tags.",
        "Build a session exchange request system with status tracking (Pending, Accepted, Completed).",
        "Provide reciprocal match recommendations when complementary skill overlaps are detected.",
        "Ensure data integrity with strict schema validations and relational database constraints."
      ],
      individualContribution: [
        "Designed the database schema using Prisma ORM with relational models for Users, Skills, SwapRequests, and Reviews.",
        "Developed REST API endpoints supporting user discovery, request creation, status updates, and profile configuration.",
        "Built the responsive React frontend utilizing modern hook patterns and clean separation of UI and business logic.",
        "Created an intuitive swap request workflow with feedback toast notifications and empty state handling.",
        "Conducted manual integration testing across user lifecycle scenarios."
      ],
      architecture: {
        summary: "The application employs a decoupled client-server architecture. The React SPA interacts with an Express REST API layer, which manages business logic and communicates with a PostgreSQL database via Prisma ORM.",
        highlights: [
          "Frontend SPA: React + TypeScript styled with Tailwind CSS, utilizing client-side routing and custom HTTP hooks.",
          "Backend API: Node.js/Express service organizing routing, request controllers, and input validation middlewares.",
          "ORM & Database: Prisma client managing type-safe database queries against a relational PostgreSQL store.",
          "State Management: Local React component state paired with reusable context for user preferences."
        ]
      },
      keyDecisions: [
        {
          decision: "Relational database with Prisma ORM rather than a NoSQL store",
          rationale: "The domain exhibits strong relational integrity requirements (user A offers skill X, user B requests skill X, mutual sessions connect two users)."
        },
        {
          decision: "Optimistic UI updates for swap request interactions",
          rationale: "Provides instantaneous tactile feedback to users while handling background server synchronization gracefully."
        },
        {
          decision: "Strict tag-based skill categorization",
          rationale: "Standardizes search queries and facilitates automated discovery of complementary match pairings."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing self-referential or duplicate swap requests between identical accounts.",
          solution: "Implemented compound unique constraints at the database level and complementary frontend validation guards."
        },
        {
          challenge: "Handling complex multi-tag filter combinations without sluggish UI re-renders.",
          solution: "Utilized memoized filtering functions with `useMemo`, ensuring smooth 60fps search interactions even with extensive lists."
        }
      ],
      testingAndQA: [
        "Validation schema tests verifying that invalid email formats and empty skill tags are rejected at the API boundary.",
        "Manual flow testing across two simultaneous browser sessions simulating user exchange requests and approvals.",
        "Lighthouse performance inspection to confirm optimal asset loading and core web vitals."
      ],
      resultsAndLessons: [
        "Constructed a fully functioning full-stack application demonstrating practical full-lifecycle engineering ability.",
        "Gained practical experience managing relational schemas, migrations, and type-safe database access.",
        "Learned how to balance user-friendly interactive UI states with robust backend validation."
      ]
    }
  }
];
