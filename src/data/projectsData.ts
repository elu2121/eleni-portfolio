import type { ProjectItem } from '../types';

/**
 * =========================================================================
 * ELENI GIREFI - FEATURED PROJECTS & TECHNICAL CASE STUDIES
 * =========================================================================
 * Reusable, editable project data featuring core software engineering projects:
 * - gCODE-Hub (Full-Stack Internship Project - Flagship Visual Emphasis)
 * - Car Rental Management System (Full-Stack Fleet & Reservation Platform)
 * - Cyber Attack Simulator (Cybersecurity & Web Crypto Lab)
 * - Hotel Reservation System (Enterprise C# .NET WPF & Web API)
 *
 * Confidentiality & Accuracy Notice:
 * - Verified against official repositories and README documentation.
 * - Proprietary internship source code, internal credentials, and customer data
 *   are strictly protected under professional confidentiality standards.
 */
export const projectsData: ProjectItem[] = [
  {
    id: "gcode-hub",
    slug: "gcode-hub",
    title: "gCODE-Hub Platform",
    subtitle: "Professional Web Platform for Services, Courses & Workflow Management",
    category: "Full-Stack",
    description: "A centralized web platform engineered during an internship engagement to streamline student access to specialized technical courses, professional engineering services, application workflows, and administrative review portals.",
    featured: true,
    status: "Internship Project",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs", "PostgreSQL", "Git"],
    role: "Full-Stack Intern Developer",
    timeline: "Internship Engagement",
    links: {
      github: "https://github.com/gCODE-Technologies/gCODE-Hub",
      liveDemo: undefined, // Internal corporate deployment
      documentation: "https://github.com/gCODE-Technologies/gCODE-Hub"
    },
    placeholderImage: {
      title: "gCODE-Hub Workflow & Service Portal",
      caption: "Representative architecture visual • Course catalogs, applicant intake & admin portal",
      badge: "Featured Internship Project • Confidential Data Protected"
    },
    caseStudy: {
      overview: "gCODE-Hub was developed as part of an engineering internship to unify multiple fragmented workflows into a cohesive, responsive web platform. The platform handles user course access, professional service inquiries, career opportunities, and administrative record management.",
      confidentialityNotice: "In accordance with professional internship confidentiality standards, proprietary company source code, internal credentials, customer databases, and operational data are strictly omitted from this public case study. The technical discussions focus solely on engineering methodology, architectural patterns, and verified developer contributions.",
      problemStatement: "Organizations managing multiple educational programs and professional services frequently suffer from disconnected communication channels, manual spreadsheet tracking, and inconsistent user onboarding. gCODE-Hub aimed to provide a structured, automated solution with role-appropriate views for users and staff.",
      goalsAndRequirements: [
        "Design responsive, accessible interfaces for browsing course catalogs and technical services.",
        "Implement a structured administrative portal for reviewing applications and managing content updates.",
        "Ensure dependable client-side form validation and clean API request/response lifecycles.",
        "Establish modular, reusable UI components adhering to consistent design tokens.",
        "Build resilient relational schema relationships for programs, enrollments, and user roles."
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
        "Successfully delivered assigned features within scheduled internship milestones.",
        "Deepened practical understanding of enterprise team collaboration, pull request reviews, and git branching strategies.",
        "Reinforced the value of strict typing and clear API contracts when multiple team members contribute simultaneously."
      ]
    }
  },
  {
    id: "car-rental-system",
    slug: "car-rental-system",
    title: "Car Rental Management System",
    subtitle: "Full-Stack Web Platform for Vehicle Fleet Booking & Inventory Scheduling",
    category: "Full-Stack",
    description: "A comprehensive full-stack automotive rental application designed to streamline vehicle fleet discovery, real-time booking schedules, dynamic pricing calculations, customer profile management, and administrative fleet operations.",
    featured: true,
    status: "Completed",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "REST APIs", "Git"],
    role: "Full-Stack Developer",
    timeline: "Full-Stack Project",
    links: {
      github: "https://github.com/elu2121/car-rental-system",
      liveDemo: undefined,
      documentation: "https://github.com/elu2121/car-rental-system#readme"
    },
    placeholderImage: {
      title: "Fleet Management & Reservation Engine",
      caption: "Representative UI • Fleet catalog, real-time availability scheduler & booking flow",
      badge: "React • TypeScript • Node.js • PostgreSQL"
    },
    caseStudy: {
      overview: "The Car Rental Management System was engineered to provide a seamless, end-to-end digital experience for vehicle reservations. Customers can explore diverse fleet categories, verify real-time availability by date and location, calculate transparent rental costs, and complete reservations. Simultaneously, fleet administrators monitor vehicle statuses, maintenance logs, and rental lifecycles through a unified dashboard.",
      problemStatement: "Automotive rental operations frequently struggle with manual scheduling, double-booking race conditions during peak travel windows, and fragmented customer records. This application was built to automate the reservation pipeline with atomic database constraints and responsive, intuitive user interfaces.",
      goalsAndRequirements: [
        "Design a high-performance, responsive customer catalog with multi-facet filters (category, transmission, fuel type, daily rate).",
        "Implement an atomic date-range availability algorithm preventing overlapping vehicle bookings.",
        "Build an administrative dashboard for tracking fleet status (Available, Rented, Maintenance, In-Service).",
        "Deliver a transparent pricing engine computing rental duration, tiered discounts, insurance add-ons, and taxes.",
        "Ensure strict type safety across client-server REST communication with validated payload schemas."
      ],
      individualContribution: [
        "Architected the relational PostgreSQL database schema with models for Vehicles, Categories, Bookings, Customers, and Maintenance Logs.",
        "Constructed RESTful API endpoints in Node.js/Express with request sanitation, JWT authentication, and error interception.",
        "Engineered the responsive React frontend using modern hooks, Tailwind CSS layout tokens, and interactive date-range pickers.",
        "Implemented real-time pricing computation logic supporting custom promotional codes and multi-day discounts.",
        "Established comprehensive API route documentation and input validation middleware using schema validators."
      ],
      architecture: {
        summary: "The platform operates on a decoupled client-server architecture. A responsive React single-page application interfaces with a stateless Node.js REST API service connected to a relational PostgreSQL database.",
        highlights: [
          "Client Layer: React + TypeScript styled with Tailwind CSS, utilizing component-level state and interactive date range filters.",
          "API Layer: Express.js REST controllers organized around domain boundaries (Auth, Fleet, Bookings, Billing).",
          "Data Layer: PostgreSQL relational database with indexed timestamp fields for fast date-range collision queries.",
          "Security: HTTP-only session cookies, bcrypt password hashing, and parameterized SQL queries preventing injection attacks."
        ]
      },
      keyDecisions: [
        {
          decision: "Server-side atomic date-range overlap validation",
          rationale: "Prevents race conditions where two customers attempt to reserve the same vehicle for conflicting dates simultaneously."
        },
        {
          decision: "Relational PostgreSQL database schema over unstructured NoSQL document stores",
          rationale: "Car rental workflows rely heavily on relational constraints (foreign keys linking vehicles, reservations, and customer accounts)."
        },
        {
          decision: "Modular pricing rule calculator module",
          rationale: "Enables flexible updates to daily rates, weekend surcharges, and seasonal pricing models without altering booking logic."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Detecting date collisions when rental periods span across months or non-standard durations.",
          solution: "Implemented an SQL date-range overlap query (`WHERE check_out > new_check_in AND check_in < new_check_out`) optimized with composite date indices."
        },
        {
          challenge: "Maintaining snappy catalog filtering while handling multiple simultaneous search parameters.",
          solution: "Created memoized client-side filter chains and debounced search queries, ensuring smooth 60fps filter responses."
        }
      ],
      testingAndQA: [
        "Unit tests verifying pricing calculations across single-day, multi-day, and discount-tier scenarios.",
        "Integration tests testing booking conflicts under concurrent simulated reservations.",
        "Cross-browser and mobile responsive testing covering the entire reservation workflow."
      ],
      resultsAndLessons: [
        "Successfully developed and launched a full-featured commercial web application.",
        "Gained deep expertise in date-range algorithmic validation and relational schema optimization.",
        "Reinforced the value of structured type contracts between client form components and API controllers."
      ]
    }
  },
  {
    id: "cyber-attack-simulator",
    slug: "cyber-attack-simulator",
    title: "Cyber Attack Simulator & Cryptography Visual Lab",
    subtitle: "Interactive Browser-Based Lab Visualizing Cryptographic Ciphers & Attack Defense",
    category: "Cybersecurity & Tools",
    description: "An interactive educational web application built with React 18, Vite, Tailwind CSS, and the native Web Crypto API that visualizes real-time AES-256 encryption/decryption, SHA-256 one-way hashing, HMAC-SHA256 authentication, and defense mitigation techniques.",
    featured: true,
    status: "Completed",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Web Crypto API", "OWASP Security", "Git"],
    role: "Lead Developer & Security Researcher",
    timeline: "Personal & Security Project",
    links: {
      github: "https://github.com/elu2121/cyber-attack-simulator",
      liveDemo: undefined,
      documentation: "https://github.com/elu2121/cyber-attack-simulator#readme"
    },
    placeholderImage: {
      title: "Web Crypto Lab & Attack Vector Visualizer",
      caption: "Representative lab visual • Live AES-256 ciphers, SHA-256 digests & HMAC verification",
      badge: "React 18 • Web Crypto API • Tailwind CSS"
    },
    caseStudy: {
      overview: "The Cryptography Visual Lab was developed to transform abstract cybersecurity principles into an interactive, visual software experience. Executing real cryptographic primitives directly inside the browser via native Web Crypto APIs, learners observe secret keys, ciphertexts, digests, and authentication codes updating live with zero server latency.",
      problemStatement: "Developers and students often perceive cryptography as an opaque mathematical black box. Without tactile visualization of how key variations alter ciphertexts (the avalanche effect) or why hashing cannot be reversed, subtle cryptographic flaws easily emerge in production systems.",
      goalsAndRequirements: [
        "Implement real-time AES-256 encryption and decryption with user-supplied secret keys.",
        "Visualize SHA-256 one-way hashing demonstrating the avalanche effect on every keystroke.",
        "Provide HMAC-SHA256 keyed message authentication code verification.",
        "Build an automated test suite sidebar allowing users to run standard cryptographic test vectors live.",
        "Ensure 100% zero-server data leakage by executing all cryptographic math purely in-browser via Web Crypto API."
      ],
      individualContribution: [
        "Engineered the end-to-end client application using React, Vite, and Tailwind CSS with responsive dark mode.",
        "Implemented cryptographic pipelines using the browser's native `window.crypto.subtle` API for AES-GCM and SHA algorithms.",
        "Designed responsive 3-column card layouts with instant clipboard copying, password visibility toggles, and live character counters.",
        "Built the interactive test suite sidebar executing verified test vectors against the live crypto engine.",
        "Authored explanatory documentation detailing key derivation, IV initialization, and padding mechanics."
      ],
      architecture: {
        summary: "The application operates as a reactive client-side cryptographic workbench. Text inputs dispatch asynchronous Web Crypto operations that update reactive state containers representing raw bytes, hexadecimal representations, and decoded strings.",
        highlights: [
          "Crypto Core: Native Web Crypto API (`SubtleCrypto`) utilizing hardware-accelerated AES-256 and SHA-256 operations.",
          "State Coordinator: Reactive debounce pipeline ensuring fluid 60fps typing while asynchronous cryptography routines run.",
          "Verification Suite: Built-in automated test runner with pre-configured cryptographic test cases.",
          "UI Presentation: Modular Tailwind CSS component hierarchy with dynamic theme switching and accessible contrast ratios."
        ]
      },
      keyDecisions: [
        {
          decision: "Native Web Crypto API over third-party JavaScript crypto libraries",
          rationale: "Leverages the browser's native, hardware-accelerated cryptographic implementations with zero bundle size overhead and no third-party supply-chain vulnerabilities."
        },
        {
          decision: "Zero-backend architecture",
          rationale: "Eliminates all privacy and security liability—plaintext inputs and secret keys never leave the user's browser memory."
        },
        {
          decision: "Integrated interactive test case runner",
          rationale: "Enables learners to immediately verify output against standard NIST/RFC test vectors with a single click."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling binary ArrayBuffer and Uint8Array data within React component state.",
          solution: "Created dedicated utility functions for clean, bidirectional conversions between UTF-8 strings, hex strings, Base64, and ArrayBuffers."
        },
        {
          challenge: "Preventing UI jank during rapid text input while cryptographic operations resolve asynchronously.",
          solution: "Implemented an optimized debouncing and cancellation token mechanism that discards stale pending promises if new keystrokes arrive."
        }
      ],
      testingAndQA: [
        "Verification against standard cryptographic test vectors for SHA-256 and HMAC-SHA256.",
        "Cross-browser testing across Chrome, Firefox, and Safari for Web Crypto API compatibility.",
        "Accessibility evaluation for dark/light mode color contrast compliance."
      ],
      resultsAndLessons: [
        "Created an engaging educational tool that clearly demonstrates complex cryptographic primitives.",
        "Mastered the browser's native Web Crypto API and modern web security practices.",
        "Reinforced how visual interactive feedback accelerates technical comprehension far better than static documentation."
      ]
    }
  },
  {
    id: "hotel-reservation-system",
    slug: "hotel-reservation-system",
    title: "Hotel Reservation System (HRS)",
    subtitle: "Enterprise Desktop Application & ASP.NET Core Web API",
    category: "Desktop & Enterprise",
    description: "A full-featured enterprise hospitality management platform designed to streamline operations across room reservations, guest intake, automated billing, invoice generation, and staff audit tracking.",
    featured: true,
    status: "Completed",
    technologies: ["C#", ".NET Core", "WPF", "ASP.NET Core Web API", "Entity Framework Core", "SQL Server", "REST APIs", "Git"],
    role: "Lead Software Engineer",
    timeline: "Enterprise / Academic Project",
    links: {
      github: "https://github.com/elu2121/Hotel-Reservation-Desktop-App",
      liveDemo: undefined,
      documentation: "https://github.com/elu2121/Hotel-Reservation-Desktop-App#readme"
    },
    placeholderImage: {
      title: "HRS Enterprise Desktop & Web API",
      caption: "Representative desktop UI • Role-based access control, room inventory & SQL persistence",
      badge: "C# • WPF • ASP.NET Core • SQL Server"
    },
    caseStudy: {
      overview: "The Hotel Reservation System (HRS) is an enterprise-grade administrative desktop application coupled with a headless ASP.NET Core Web API backend. It provides automated management of multi-tier room inventories, real-time availability checking, guest billing, and role-based staff operations.",
      problemStatement: "Hospitality front desks frequently suffer from disconnected booking channels, manual paper billing errors, double-booked rooms, and lack of accountability among staff roles. HRS addresses this with atomic database transactions, strict role isolation, and automated invoice calculations.",
      goalsAndRequirements: [
        "Design a responsive WPF desktop client styled with clean typography and intuitive administrative workflows.",
        "Implement a decoupled ASP.NET Core Web API backend managing business logic and data persistence.",
        "Enforce strict Role-Based Access Control (RBAC) separating Administrator, Receptionist, and Accountant privileges.",
        "Build an atomic room reservation lifecycle preventing double-booking race conditions.",
        "Integrate automated billing, tax calculations, and printable invoice resolution."
      ],
      individualContribution: [
        "Engineered the desktop UI using WPF with XAML data binding, custom control styling, and responsive layout grids.",
        "Built RESTful Web API controllers in ASP.NET Core to handle room reservations, guest registries, and invoice lifecycles.",
        "Configured Entity Framework Core with Code-First migrations against Microsoft SQL Server.",
        "Implemented RBAC authentication and permission trees for staff roles (Admin, Receptionist, Accountant).",
        "Wrote automated unit and integration tests to verify reservation conflict detection algorithms."
      ],
      architecture: {
        summary: "HRS utilizes a decoupled client-server architecture. The rich desktop presentation layer (WPF) communicates over HTTP/REST with an ASP.NET Core Web API service backed by SQL Server via Entity Framework Core.",
        highlights: [
          "Client Layer: WPF Desktop Application with data-bound XAML views and MVVM architectural separation.",
          "Service Layer: ASP.NET Core Web API controllers providing stateless endpoints with structured DTO request/response contracts.",
          "Business Logic: Domain services orchestrating room assignment algorithms, pricing rules, and access control policies.",
          "Persistence Layer: Microsoft SQL Server managed through Entity Framework Core with strict foreign key constraints."
        ]
      },
      keyDecisions: [
        {
          decision: "Decoupled Web API backend rather than a monolithic direct-to-database desktop application",
          rationale: "Allows future web or mobile client extensions to reuse the same central reservation logic and database integrity rules without duplication."
        },
        {
          decision: "Strict Role-Based Access Control (RBAC) at both UI and API levels",
          rationale: "Ensures receptionists cannot access financial audit logs or modify system settings, while accountants focus strictly on invoice reconciliation."
        },
        {
          decision: "Entity Framework Core with explicit transaction isolation for bookings",
          rationale: "Guarantees that two receptionists attempting to book the same room concurrently will trigger a deterministic concurrency conflict rather than corrupt data."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing overlapping reservation dates during peak booking inquiries.",
          solution: "Implemented an atomic date-range overlap algorithm at the database query level using indexed check-in and check-out timestamps."
        },
        {
          challenge: "Maintaining smooth UI responsiveness in WPF during heavy database queries.",
          solution: "Utilized asynchronous programming (`async`/`await`) across all HTTP API client calls to ensure the UI thread never locks during data synchronization."
        }
      ],
      testingAndQA: [
        "API endpoint integration tests verifying HTTP status codes and payload schema validations.",
        "Concurrency testing simulating simultaneous booking attempts on identical room numbers.",
        "Manual end-to-end testing across all three user roles to verify permission barriers."
      ],
      resultsAndLessons: [
        "Constructed a robust, real-world desktop and backend enterprise software application from architecture to implementation.",
        "Deepened mastery in C#, .NET runtime idioms, WPF data binding, and relational database schema modeling.",
        "Reinforced the importance of separating presentation from domain business logic through REST contracts."
      ]
    }
  }
];
