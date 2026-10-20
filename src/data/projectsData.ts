import type { ProjectItem } from '../types';

/**
 * =========================================================================
 * ELENI GIREFI - PROJECTS & DETAILED CASE STUDIES
 * =========================================================================
 * Authentic engineering projects synced with verified GitHub repositories:
 * https://github.com/elu2121
 */
export const projectsData: ProjectItem[] = [
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
      caption: "WPF administrative client, role-based access control & SQL persistence",
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
  },
  {
    id: "cyber-attack-simulator",
    slug: "cyber-attack-simulator",
    title: "Cryptography Visual Lab & Security Simulator",
    subtitle: "Interactive Web Application for Real-Time Cryptographic Analysis & Attack Defense",
    category: "Cybersecurity & Tools",
    description: "An interactive, browser-based cybersecurity education platform built with React, Vite, Tailwind CSS, and the native Web Crypto API. Visualizes real-time AES-256 encryption/decryption, SHA-256 hashing, HMAC-SHA256 authentication, and defensive vulnerability mitigations.",
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
      caption: "AES-256 live ciphers, SHA-256 hash chains, HMAC verification & test cases",
      badge: "React 18 • Web Crypto API • Tailwind CSS"
    },
    caseStudy: {
      overview: "The Cryptography Visual Lab was built to turn abstract cybersecurity concepts into tangible, visual, and interactive software. By executing real cryptographic primitives directly inside the browser using standard Web Crypto APIs, learners observe encryption keys, ciphertexts, digests, and authentication codes updating live with zero server latency.",
      problemStatement: "Developers and students often view encryption as an opaque black box. Without hands-on visualization of how key changes alter ciphertexts (avalanche effect) or why hashing cannot be reversed, subtle cryptographic vulnerabilities easily slip into production code.",
      goalsAndRequirements: [
        "Implement real-time AES-256 encryption and decryption with user-supplied secret keys.",
        "Visualize SHA-256 one-way hashing with instant avalanche effect demonstration on keystroke.",
        "Provide HMAC-SHA256 keyed message authentication code verification.",
        "Build an automated test suite sidebar allowing users to run standard cryptographic test vectors live.",
        "Ensure 100% zero-server data leakage by executing all cryptographic math purely in-browser via Web Crypto API."
      ],
      individualContribution: [
        "Engineered the entire frontend architecture using React, Vite, and Tailwind CSS with dark mode support.",
        "Implemented cryptographic pipelines using the browser's native `window.crypto.subtle` API for AES-GCM and SHA algorithms.",
        "Designed responsive 3-column card layouts with instant clipboard copying, password visibility toggles, and live character counters.",
        "Built the interactive test suite sidebar executing verified test vectors against the live crypto engine.",
        "Authored comprehensive security documentation detailing key derivation, IV initialization, and padding mechanics."
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
          rationale: "Leverages the browser's native, battle-tested, hardware-accelerated cryptographic implementations with zero bundle size overhead and no third-party supply-chain vulnerabilities."
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
        "Created an educational tool with positive feedback for clarity and responsiveness.",
        "Mastered the browser's native Web Crypto API and modern cryptographic primitives.",
        "Reinforced how visual interactive feedback accelerates technical comprehension far better than static documentation."
      ]
    }
  },
  {
    id: "hr-leave-management",
    slug: "hr-leave-management",
    title: "HR Leave Management System",
    subtitle: "Enterprise Web Application for Employee Leave Lifecycles & Approvals",
    category: "Full-Stack",
    description: "An enterprise administrative platform engineered with ASP.NET Core, C#, Entity Framework Core, and SQL Server to automate employee leave allocations, supervisor approval workflows, quota tracking, and audit reporting.",
    featured: true,
    status: "Completed",
    technologies: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Bootstrap", "MVC Pattern", "Git"],
    role: "Full-Stack Developer",
    timeline: "Enterprise Project",
    links: {
      github: "https://github.com/elu2121/HRLeaveManegment",
      liveDemo: undefined,
      documentation: "https://github.com/elu2121/HRLeaveManegment#readme"
    },
    placeholderImage: {
      title: "HR Leave Lifecycle & Balance Portal",
      caption: "Employee quota tracking, supervisor approvals & automated audit history",
      badge: "ASP.NET Core • C# • EF Core • SQL Server"
    },
    caseStudy: {
      overview: "The HR Leave Management System was developed to modernize human resources operations by digitizing vacation, medical, and personal leave requests. It automates quota deductions, notifies department supervisors, and tracks approval statuses through an organized MVC architecture.",
      problemStatement: "Paper-based or email-driven leave management creates administrative chaos—lost request slips, inconsistent remaining balance counts, overlapping staff absences, and lack of historical reporting. A centralized, role-aware digital system eliminates these bottlenecks.",
      goalsAndRequirements: [
        "Provide employees with self-service dashboards displaying real-time leave balances across leave types.",
        "Build a structured approval pipeline where supervisors can review, approve, or reject requests with audit comments.",
        "Implement automated business rules preventing leave requests exceeding remaining allocated days.",
        "Maintain clean database relationships between Employees, Leave Types, Allocations, and Requests.",
        "Deliver secure authentication and role authorization using ASP.NET Identity."
      ],
      individualContribution: [
        "Designed and implemented the ASP.NET Core MVC architecture with clean domain separation.",
        "Constructed Entity Framework Core database models, migrations, and relationship configurations in SQL Server.",
        "Built responsive Razor views with structured layouts, modal dialogs, and toast feedback notifications.",
        "Implemented business validation rules ensuring leave balance integrity and date-range consistency.",
        "Configured ASP.NET Core Identity authentication with role-based policies for Staff and HR Administrators."
      ],
      architecture: {
        summary: "The platform follows the classic ASP.NET Core MVC pattern with clear separation between Domain Models, Entity Framework Data Access, Controllers, and Razor Views.",
        highlights: [
          "Presentation Layer: ASP.NET Core Razor Views styled with responsive utility classes and accessible form controls.",
          "Controller Layer: Strongly typed MVC controllers validating incoming model bindings and coordinating domain workflows.",
          "Data Access Layer: Repository pattern backed by Entity Framework Core with SQL Server storage.",
          "Security: ASP.NET Core Identity managing password hashing, session cookies, and role claims."
        ]
      },
      keyDecisions: [
        {
          decision: "Entity Framework Core Code-First approach with migrations",
          rationale: "Keeps database schema synchronized with C# domain models under version control, enabling repeatable deployments across environments."
        },
        {
          decision: "Separate Leave Allocation and Leave Request entities",
          rationale: "Decouples annual entitlement quotas from individual historical request records, simplifying roll-forward and reporting operations."
        },
        {
          decision: "Server-side business validation combined with client-side form guards",
          rationale: "Guarantees database integrity even if client scripts are bypassed while still delivering immediate UI feedback to users."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing conflicting leave submissions spanning identical dates by the same employee.",
          solution: "Added database query validation checking existing active requests before committing a new allocation deduction."
        },
        {
          challenge: "Managing annual leave rollover and quota replenishment across diverse leave categories.",
          solution: "Structured an administrative allocation engine that applies configured allocations to all active employees atomically."
        }
      ],
      testingAndQA: [
        "Validation unit tests covering date boundary checks and negative balance guard clauses.",
        "Manual role testing verifying that regular employees cannot access supervisor approval queues.",
        "Database migration verification across clean test environments."
      ],
      resultsAndLessons: [
        "Delivered a complete, functional enterprise web application solving practical organizational workflow problems.",
        "Solidified hands-on competence in ASP.NET Core, Entity Framework Core, SQL Server, and MVC architectural conventions.",
        "Strengthened understanding of enterprise application security, user role management, and transactional data integrity."
      ]
    }
  },
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
      github: "https://github.com/elu2121",
      liveDemo: undefined,
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
    id: "student-management-system",
    slug: "student-management-system",
    title: "Student Management System",
    subtitle: "Console-Based Academic Records Management System with File Persistence",
    category: "Systems & Backend",
    description: "A robust academic management system written in Java utilizing object-oriented principles, persistent file storage, duplicate prevention algorithms, and dual-parameter record sorting.",
    featured: false,
    status: "Completed",
    technologies: ["Java", "OOP", "File I/O", "Data Structures", "Clean Architecture", "Git"],
    role: "Software Developer",
    timeline: "Core Systems Project",
    links: {
      github: "https://github.com/elu2121/student-management-system",
      liveDemo: undefined,
      documentation: "https://github.com/elu2121/student-management-system#readme"
    },
    placeholderImage: {
      title: "Academic Record Engine",
      caption: "File persistence, duplicate ID validation & automated record sorting",
      badge: "Java • OOP • File Streams • Data Structures"
    },
    caseStudy: {
      overview: "The Student Management System is a clean, reliable console application designed to manage student academic records. Built with pure Java, it emphasizes robust input validation, object-oriented design, and reliable file I/O persistence without relying on heavy external runtime dependencies.",
      problemStatement: "Basic record management software frequently crashes on unexpected user input, fails to persist modifications between restarts, and permits duplicate identifier entries. This project was developed systematically to implement bulletproof validation and clean file stream persistence.",
      goalsAndRequirements: [
        "Implement a complete CRUD lifecycle: create, read, update, and delete student records.",
        "Enforce strict duplicate ID validation to protect data uniqueness.",
        "Persist all records to local file storage (`students.txt`) with automatic parsing and loading on startup.",
        "Provide dual sorting mechanisms to order records alphabetically by name or numerically by student ID.",
        "Build a defensive console menu interface that prevents infinite loops or crashes on malformed inputs."
      ],
      individualContribution: [
        "Architected the domain model (`Student`) and repository-style file handling service in pure Java.",
        "Engineered the file storage parser using `BufferedReader` and `BufferedWriter` streams.",
        "Implemented sorting algorithms utilizing Java Collections and custom Comparators.",
        "Added defensive input scanners with regex validation and exception handling.",
        "Maintained structured, documented git commits tracking feature evolution day by day."
      ],
      architecture: {
        summary: "The application is organized into distinct functional components: a menu interaction loop, an in-memory data store using dynamic ArrayLists, and a file persistence service handling serialization and deserialization.",
        highlights: [
          "Domain Model: Encapsulated `Student` class with validated getters, setters, and formatted string representations.",
          "Storage Layer: File I/O service writing structured delimiter-separated data to persistent disk storage.",
          "Controller / Menu: Defensive terminal loop guarding against invalid types, negative IDs, and empty strings."
        ]
      },
      keyDecisions: [
        {
          decision: "Structured file persistence (`students.txt`) rather than volatile in-memory only",
          rationale: "Ensures records persist across system reboots and demonstrates essential understanding of file streams and parsing."
        },
        {
          decision: "Duplicate ID prevention guard clauses during insertion",
          rationale: "Prevents data corruption and ensures every student maintains a unique primary key."
        },
        {
          decision: "Custom comparators for sorting",
          rationale: "Provides flexible, instantaneous ordering by name or ID without modifying original insertion order permanently."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing infinite loop crashes when non-numeric input was entered into numeric scanner prompts.",
          solution: "Implemented scanner buffer clearing and `hasNextInt` checks inside safe retry loops."
        },
        {
          challenge: "Reliable line parsing from file even when student names contain spaces or special characters.",
          solution: "Adopted a structured delimiter pattern with defensive split length verification on read."
        }
      ],
      testingAndQA: [
        "Boundary testing with edge-case inputs (empty strings, negative IDs, long strings).",
        "Persistence testing verifying file writes survived abrupt application termination.",
        "Duplicate insertion attempts verifying rejection logic."
      ],
      resultsAndLessons: [
        "Delivered a stable, crash-resilient console application with clean file persistence.",
        "Strengthened foundational proficiency in Java memory management, collections, and I/O streams.",
        "Demonstrated disciplined software engineering fundamentals and daily GitHub version control practices."
      ]
    }
  },
  {
    id: "library-management-system",
    slug: "library-management-system",
    title: "Library Management System",
    subtitle: "Modular JVM Application with Gradle Build Lifecycle Automation",
    category: "Systems & Backend",
    description: "A modular library catalog and patron lending system developed in Kotlin to practice Android-ready build automation, JVM dependency resolution, and executable artifact packaging.",
    featured: false,
    status: "Completed",
    technologies: ["Kotlin", "Gradle", "JVM", "OOP", "Build Automation", "Git"],
    role: "Software Developer",
    timeline: "Academic & Systems Project",
    links: {
      github: "https://github.com/elu2121/kotlin__gradle_project",
      liveDemo: undefined,
      documentation: "https://github.com/elu2121/kotlin__gradle_project#readme"
    },
    placeholderImage: {
      title: "Kotlin JVM Catalog Engine",
      caption: "Gradle build automation, executable JAR packaging & object modeling",
      badge: "Kotlin • Gradle • JVM • Build Automation"
    },
    caseStudy: {
      overview: "The Library Management System is an object-oriented Kotlin project engineered to master Gradle build lifecycles and modern JVM programming. It implements book cataloging, patron checkout workflows, and automated JAR packaging.",
      problemStatement: "Navigating complex modern JVM and Android ecosystems requires practical understanding of build tools like Gradle, dependency management, task graphs, and idiomatic Kotlin. This project served as a hands-on foundation for build automation and typed language idioms.",
      goalsAndRequirements: [
        "Configure multi-task Gradle build files with clean dependency resolution.",
        "Implement core library catalog entities with Kotlin data classes and encapsulation.",
        "Handle book availability status tracking, checkouts, and returns.",
        "Compile and package standalone executable JAR artifacts using Gradle tasks.",
        "Maintain clean git branch hygiene and documented learning objectives."
      ],
      individualContribution: [
        "Configured `build.gradle.kts` with proper JVM toolchains and application plugins.",
        "Implemented domain models utilizing Kotlin concise syntax, null safety, and data classes.",
        "Built inventory management routines handling book search, checkouts, and overdue tracking.",
        "Packaged and verified executable JAR builds from command line terminal environments."
      ],
      architecture: {
        summary: "The project structure follows modern Gradle conventions (`src/main/kotlin`), separating domain entity representations from business rules and build configuration scripts.",
        highlights: [
          "Build Layer: Gradle configuration managing JVM compilation targets and task orchestration.",
          "Language Features: Kotlin type inference, immutability defaults, and null-safe operators.",
          "Packaging: Automated executable JAR generation ready for cross-platform JVM deployment."
        ]
      },
      keyDecisions: [
        {
          decision: "Gradle Kotlin DSL over legacy Groovy syntax",
          rationale: "Provides compile-time error checking, IDE auto-completion, and direct alignment with modern Android development standards."
        },
        {
          decision: "Kotlin Data Classes for domain models",
          rationale: "Eliminates boilerplate `equals`, `hashCode`, and `toString` methods while guaranteeing immutability."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Configuring the application manifest for automated executable JAR execution.",
          solution: "Added Gradle `application` plugin configuration with explicit `mainClass` declaration."
        }
      ],
      testingAndQA: [
        "Gradle build and test task verification.",
        "Command line execution testing of the compiled JAR artifact on clean environments."
      ],
      resultsAndLessons: [
        "Achieved confident mastery of Gradle build tools essential for production JVM and Android engineering.",
        "Embraced modern Kotlin idioms, null-safety guarantees, and expressive concise syntax."
      ]
    }
  },
  {
    id: "eleni-portfolio",
    slug: "eleni-portfolio",
    title: "Full-Stack Developer Portfolio",
    subtitle: "High-Performance Production Portfolio Platform Built with React 19, TypeScript & Tailwind",
    category: "Frontend",
    description: "A modern, responsive portfolio application designed to showcase verified full-stack software engineering projects, architectural case studies, interactive UI widgets, and clear technical competencies.",
    featured: true,
    status: "Production Release",
    technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Lucide Icons", "Motion", "Git"],
    role: "Frontend & System Architect",
    timeline: "Production Release",
    links: {
      github: "https://github.com/elu2121/eleni-portfolio",
      liveDemo: "http://localhost:5173",
      documentation: "https://github.com/elu2121/eleni-portfolio#readme"
    },
    placeholderImage: {
      title: "Eleni Portfolio Web Platform",
      caption: "Responsive dark theme, comprehensive case studies & live project showcase",
      badge: "React 19 • TypeScript • Tailwind CSS • Vite"
    },
    caseStudy: {
      overview: "This portfolio is custom-engineered to provide a professional, transparent, and aesthetically polished showcase of software engineering capabilities. It features structured case studies, interactive filtering, dynamic animations, and zero broken links.",
      problemStatement: "Many software developer portfolios rely on generic templates, inflated unverifiable metrics, or broken links. This platform was built from scratch to reflect honest engineering craftsmanship, strict type safety, and real GitHub repository connections.",
      goalsAndRequirements: [
        "Design a modern dark-mode aesthetic utilizing polished graphite and emerald design tokens.",
        "Implement client-side routing with comprehensive case studies for each real project.",
        "Provide interactive search and category filtering with instant responsiveness.",
        "Ensure full responsiveness across desktop, tablet, and mobile viewports.",
        "Maintain 100% type safety with strict TypeScript and modern React 19 features."
      ],
      individualContribution: [
        "Architected the entire application structure with Vite, React 19, and TypeScript.",
        "Configured custom Tailwind CSS theme variables, shadows, fonts, and dark-mode styling.",
        "Created reusable atomic components: Buttons, Badges, Section Headings, Project Cards, and Navigation.",
        "Connected live repository links and case studies reflecting authentic engineering projects.",
        "Deployed and maintained continuous version control hygiene on GitHub."
      ],
      architecture: {
        summary: "Component-driven single page application built on React 19 with Vite bundler, React Router v7 navigation, and utility-first Tailwind CSS styling.",
        highlights: [
          "Routing: React Router v7 managing smooth client-side page transitions and deep linking to case studies.",
          "Styling: Custom Tailwind CSS configuration with cohesive graphite and emerald color palettes.",
          "Type System: Centralized TypeScript interface contracts for projects, skills, services, and profile configs."
        ]
      },
      keyDecisions: [
        {
          decision: "Custom component design system rather than generic template libraries",
          rationale: "Ensures unique visual identity, lean bundle footprint, and fine-grained control over accessibility and animations."
        },
        {
          decision: "Centralized configuration architectures (`profileConfig`, `projectsData`, `skillsData`)",
          rationale: "Enables instant content updates without modifying UI rendering logic or JSX layouts."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Preserving optimal scroll behavior and layout transitions when navigating between deep case studies.",
          solution: "Implemented an automatic `ScrollToTop` router listener that resets window position on route changes."
        }
      ],
      testingAndQA: [
        "TypeScript compile checks verifying zero type errors.",
        "Cross-browser testing on Chrome, Edge, and Firefox.",
        "Mobile responsiveness verification across multiple screen sizes."
      ],
      resultsAndLessons: [
        "Built and launched a modern, high-performance portfolio platform showcasing real software projects.",
        "Strengthened mastery in React 19, TypeScript architecture, and utility-first styling."
      ]
    }
  }
];
