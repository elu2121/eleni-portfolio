import type { ProfileConfig } from '../types';

/**
 * =========================================================================
 * ELENI GIREFI - CENTRAL PROFILE CONFIGURATION
 * =========================================================================
 * Update your contact details, social links, resume reference, and bio
 * directly in this file. All pages consume this configuration.
 */
export const profileConfig: ProfileConfig = {
  name: "Eleni Girefi",
  wordmark: "ELENI.",
  title: "Full-Stack Developer | Software Engineer",
  headline: "Turning complex problems into elegant digital experiences.",
  shortBio: "I build modern web applications with thoughtful design, reliable functionality, and clean engineering.",
  
  fullBio: [
    "I am a software engineer focused on building robust full-stack web applications. My work balances modern client-side user experience with resilient, well-structured backend services.",
    "During my academic studies and internship experiences, I discovered a passion for end-to-end software craftsmanship—from crafting accessible, responsive user interfaces to designing schema relationships and testing API endpoints.",
    "I prioritize readable, maintainable code, type safety, and honest engineering judgment. Rather than chasing every passing trend, I focus on choosing the right tool for each project's practical constraints and user needs."
  ],

  location: "Open to Remote, Hybrid & Relocation",
  availability: "Available for full-time engineering roles & select freelance projects",

  contact: {
    // [EDITABLE PLACEHOLDER] Replace with your actual email address
    email: "elenigirefi@gmail.com",
    // [EDITABLE PLACEHOLDER] Verified GitHub profile
    github: "https://github.com/elu2121",
    // [EDITABLE PLACEHOLDER] Replace with your LinkedIn profile URL
    linkedin: "https://linkedin.com/in/elenigirefi",
    locationNote: "Based in Ethiopia • Open to global remote teams"
  },

  resume: {
    // [EDITABLE PLACEHOLDER] Place your resume PDF in the /public folder and update this path
    viewUrl: "/resume-placeholder.pdf",
    downloadFilename: "Eleni_Girefi_Software_Engineer_Resume.pdf",
    lastUpdated: "2026"
  },

  stats: [
    {
      label: "Engineering Focus",
      value: "Full-Stack",
      description: "Frontend elegance paired with robust backend architecture"
    },
    {
      label: "Code Standards",
      value: "Type-Safe",
      description: "Strict TypeScript, modular components, and predictable state"
    },
    {
      label: "Workflow",
      value: "Agile & Git",
      description: "Version control, collaborative code reviews, and structured branches"
    }
  ]
};
