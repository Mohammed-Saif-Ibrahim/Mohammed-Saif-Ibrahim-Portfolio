export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  type: string;
  status: string;
  accentColor: string;
  stack: string[];
  keyFeatures: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  challenges: string[];
  outcomes: string[];
  icon: string;
  /**
   * Optional path to a custom logo image (served from /public), e.g.
   * "/icons/glamsync.png". When set, this renders instead of the emoji
   * `icon` in project cards and the detail page.
   */
  logoSrc?: string;
  featured: boolean;
  year: string;
  client?: string;
  /**
   * Why this was built, for projects with no client — e.g. an independently
   * conceived product. Rendered in place of the "CLIENT: ..." line when
   * `client` is not set.
   */
  motivation?: string;
  liveUrl?: string;
  repoUrl?: string;
  media?: { type: "image" | "video"; src: string; caption?: string }[];
}

export const projects: Project[] = [
  {
    id: "01",
    slug: "tpcompanion",
    name: "TPCompanion",
    tagline:
      "Production business operations platform for Shortcuts POS environments",
    description:
      "A production-oriented Windows business operations platform built as a companion layer for Shortcuts POS. TPCompanion combines business analytics, appointment intelligence, commission management, automated messaging and reporting, Qatar GTA e-invoicing workflows, Windows background services, and a locally hosted AI assistant with controlled access to business data and Shortcuts Fusion knowledge.",

    longDescription:
      "TPCompanion is a production-oriented business operations platform developed as a companion layer for the Shortcuts POS environment used in salon, spa, and retail operations. Rather than replacing the existing POS system, TPCompanion extends it with a modern React interface and a locally running Node.js/Express backend connected directly to Microsoft SQL Server. The backend operates as a Windows Service, allowing APIs, background schedulers, messaging workflows, reporting, Qatar GTA processing, application updates, and AI services to continue running independently of the frontend. The platform provides a dedicated analytics layer over existing Shortcuts data, covering revenue, appointments, products, staff, clients, business summaries, and custom date-range analysis. It also includes a configurable commission engine supporting percentage-based, flat/jump-slab, progressive structures, employee-specific rules, item and category filtering, company filtering, stylist/operator allocation, and commission summaries. Appointment data is reused across analytics and automation workflows, supporting reminders, confirmations, pre-arrival communication, no-show workflows, and related operational processes. A background messaging system automates customer communication through SMS and WhatsApp, covering appointment reminders, confirmations, pre-arrival messages, thank-you and receipt follow-ups, new-client communication, referrals, birthdays, series and gift-certificate expiry, miss-you campaigns, no-show communication, class-related workflows, and promotions. TPCompanion also provides scheduled automated reporting, allowing selected business reports to be generated and delivered without requiring the user to keep the application open. The platform includes a dedicated Qatar GTA electronic invoicing workflow covering device onboarding, certificate lifecycle management, supplier configuration, invoice and credit-note processing, UBL 2.1 generation, document validation and signing, submission, response processing, status tracking, and DCV/PDH document-chain management. Transaction control is used around relevant chain-state operations so failed processing does not leave local invoice state inconsistent. The application is packaged for Windows using @yao-pkg/pkg, hosted through WinSW as a Windows Service, distributed through an Inno Setup installer, and supported by an application-level update mechanism backed by a controlled release repository. Most recently, TPCompanion was extended with a locally hosted AI assistant combining two distinct capabilities: controlled business-data access and Shortcuts Fusion knowledge retrieval. Users interact through a free-text conversational interface, while the backend separates natural-language requests from actual business operations. Business requests are routed through capability discovery, eligibility checks, validation, and deterministic read-only tools rather than allowing the language model to generate unrestricted SQL against the production database. Supported capabilities include business summaries, revenue, appointments, clients, staff, inventory, commissions, cash movements, gift-certificate liability, refunds and voids, stock movement, discounts, taxation, and report-derived operations. The knowledge side uses Shortcuts Fusion retrieval with document synchronization, chunking, embeddings, semantic search, confidence evaluation, and fail-closed handling for unsupported answers. The AI runtime uses Ollama with Qwen3 for local inference and nomic-embed-text for embedding-based retrieval, keeping the AI workload within the local application environment rather than depending on a hosted general-purpose AI API. This architecture provides natural-language access while keeping business-data execution deterministic, validated, and application-controlled.",

    type: "PRODUCTION",
    status: "SHIPPED",
    accentColor: "#00FF94",
    client: "Technology People LLC",

    stack: [
      "React 19",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Axios",
      "Microsoft SQL Server",
      "mssql",
      "REST APIs",
      "Recharts",
      "Nodemailer",
      "Windows Service",
      "WinSW",
      "@yao-pkg/pkg",
      "Inno Setup",
      "SMS Gateway",
      "WhatsApp Gateway",
      "Email / SMTP",
      "Qatar GTA E-Invoicing",
      "Ollama",
      "Qwen3",
      "nomic-embed-text",
      "Deterministic Business Tools",
      "Capability Routing",
      "Retrieval-Based Knowledge System",
    ],
    keyFeatures: [
      "Business analytics covering revenue, appointments, products, staff, clients, and custom date ranges",
      "Configurable commission engine supporting percentage, flat/jump-slab, and progressive commission structures",
      "Automated SMS and WhatsApp customer communication with scheduled appointment and customer workflows",
      "Scheduled automated business reporting with background processing and email delivery",
      "Qatar GTA e-invoicing workflow covering invoice and credit-note processing, UBL 2.1 generation, validation, signing, submission, and document-chain management",
      "Locally hosted AI assistant with deterministic read-only business tools and controlled capability routing",
      "Shortcuts Fusion knowledge assistant using embeddings, semantic retrieval, confidence evaluation, and fail-closed handling",
    ],

    features: [
      "Production-oriented React 19 business operations interface",
      "Direct integration with Shortcuts POS and Microsoft SQL Server",
      "Business analytics covering revenue, appointments, products, staff, clients, and custom date ranges",
      "Configurable commission engine with percentage, flat/jump-slab, and progressive commission structures",
      "Employee, item, category, company, and stylist/operator commission filtering and allocation",
      "Appointment intelligence supporting analytics, reminders, confirmations, pre-arrival workflows, and no-show handling",
      "Automated SMS and WhatsApp customer communication",
      "Automated workflows for reminders, confirmations, birthdays, referrals, thank-you messages, new clients, no-shows, expiry notifications, miss-you campaigns, classes, and promotions",
      "Scheduled automated business reporting with email delivery",
      "Background schedulers that continue operating independently of the React interface",
      "Qatar GTA e-invoicing workflow covering invoice and credit-note processing, UBL 2.1 generation, validation, signing, submission, response processing, and document-chain management",
      "DCV / PDH chain-state handling with transactional rollback protection",
      "Windows Service deployment using WinSW",
      "Windows executable packaging using @yao-pkg/pkg",
      "Inno Setup installer for Windows deployment",
      "Controlled backend release and application auto-update mechanism",
      "Local AI assistant powered by Ollama + Qwen3",
      "Free-text natural-language interface for AI business queries",
      "Deterministic read-only business tools instead of unrestricted database access",
      "Backend capability discovery, routing, eligibility checks, and validation",
      "AI capabilities for revenue, appointments, clients, staff, inventory, commissions, cash movements, refunds, stock, discounts, taxation, and other business operations",
      "Shortcuts Fusion knowledge assistant using embeddings and semantic retrieval",
      "Confidence evaluation and fail-closed handling for unsupported knowledge responses",
      "Local embedding-based retrieval using nomic-embed-text",
      "Conversation persistence and controlled AI orchestration",
      "LAN-oriented architecture designed to keep business operations and AI processing within the local environment",
    ],

    metrics: [
      { label: "Architecture", value: "Windows / LAN" },
      { label: "Frontend", value: "React 19" },
      { label: "Backend", value: "Node.js" },
      { label: "Database", value: "SQL Server" },
      { label: "Commission Models", value: "3+" },
      { label: "Messaging Workflows", value: "15+" },
      { label: "Channels", value: "SMS / WhatsApp" },
      { label: "Reporting", value: "Automated" },
      { label: "E-Invoicing", value: "Qatar GTA" },
      { label: "AI Runtime", value: "Local / Ollama" },
      { label: "LLM", value: "Qwen3" },
      { label: "Embeddings", value: "nomic-embed-text" },
      { label: "DB Access", value: "Read-Only Tools" },
    ],

    challenges: [
      "Designing a Windows-native architecture where the Node.js backend operates continuously as a background service without depending on the React interface being open",
      "Integrating with the existing Shortcuts POS SQL Server environment while preserving the existing POS as the system of record",
      "Building reliable analytics and business logic over an existing operational database schema",
      "Implementing a configurable commission engine supporting multiple calculation structures, filtering rules, employee assignments, and stylist/operator allocations",
      "Keeping business calculations centralized in the backend rather than duplicating critical rules in the frontend",
      "Building background schedulers for messaging, reporting, Qatar GTA processing, and application updates with overlap prevention and graceful shutdown handling",
      "Automating multiple customer communication workflows across SMS and WhatsApp using appointment and customer data",
      "Maintaining reliable invoice document-chain state when Qatar GTA processing succeeds or fails",
      "Implementing transactional DCV / PDH reservation and rollback behavior for failed e-invoicing operations",
      "Packaging the Node.js backend as a Windows executable, wrapping it with WinSW, and distributing it through an installer",
      "Building a controlled update mechanism that can distribute new backend versions without exposing proprietary source code",
      "Preventing a local language model from receiving unrestricted access to a production business database",
      "Designing deterministic business tools and capability routing so natural-language requests resolve to controlled application operations",
      "Handling unsupported AI requests through validation and fail-closed behavior instead of allowing arbitrary execution",
      "Improving local AI reliability by separating business-data retrieval and calculations from language-model reasoning",
      "Building a retrieval-grounded Shortcuts Fusion knowledge system using synchronization, chunking, embeddings, semantic search, confidence thresholds, and fail-closed handling",
      "Keeping the AI subsystem locally hosted so business information does not need to be sent to a hosted general-purpose AI API",
    ],

    outcomes: [
      "Delivered a production-oriented business operations layer around an existing Shortcuts POS environment without replacing the underlying POS system",
      "Provided a unified interface for analytics, commissions, appointments, products, messaging, reporting, e-invoicing, and AI-assisted business access",
      "Automated commission calculations that previously required manual processing and spreadsheet-based workflows",
      "Improved business visibility through centralized revenue, appointment, staff, client, product, and inventory analysis",
      "Automated recurring customer communication across SMS and WhatsApp",
      "Enabled scheduled business reports to be generated and delivered without requiring the application interface to remain open",
      "Integrated Qatar GTA electronic invoicing workflows into the broader business application",
      "Added transactional protection around invoice document-chain state to improve processing reliability",
      "Enabled continuous background operation through Windows Service deployment",
      "Established a controlled Windows packaging, installation, release, and update workflow",
      "Enabled natural-language business queries through a locally hosted AI assistant",
      "Kept business-data execution under deterministic backend tools rather than unrestricted model-generated SQL",
      "Added Shortcuts Fusion knowledge retrieval with confidence checks and fail-closed behavior",
      "Kept local AI inference and knowledge retrieval within the application's local environment rather than relying on a hosted LLM API",
      "Provided a publicly accessible production frontend while keeping proprietary backend source code and production business data private",
    ],

    icon: "📊",
    logoSrc: "/icons/technologypeople.png",
    featured: true,
    year: "2026",
    liveUrl: "https://companion-frontend-ten.vercel.app/",

    media: [
      {
        type: "image",
        src: "/projects/tpcompanion/loginpage.jpeg",
        caption: "Login Page",
      },
      {
        type: "image",
        src: "/projects/tpcompanion/analytics.jpeg",
        caption: "Analytics Dashboard",
      },
      {
        type: "video",
        src: "/projects/tpcompanion/Analytics.mp4",
        caption: "Analytics Demo",
      },
      {
        type: "image",
        src: "/projects/tpcompanion/commission.jpeg",
        caption: "Commission Management",
      },
      {
        type: "video",
        src: "/projects/tpcompanion/Commission.mp4",
        caption: "Commission Demo",
      },
      {
        type: "image",
        src: "/projects/tpcompanion/messaging.jpeg",
        caption: "WhatsApp & SMS Automation",
      },
      {
        type: "video",
        src: "/projects/tpcompanion/Messaging.mp4",
        caption: "Messaging Demo",
      },
      {
        type: "image",
        src: "/projects/tpcompanion/autoreports.jpeg",
        caption: "Auto Reports",
      },
      {
        type: "video",
        src: "/projects/tpcompanion/AutoReports.mp4",
        caption: "Auto Reports Demo",
      },
      {
        type: "image",
        src: "/projects/tpcompanion/aiassistant.jpeg",
        caption: "AI Assistant",
      },
      {
        type: "video",
        src: "/projects/tpcompanion/AIAssistant.mp4",
        caption: "AI Assistant Demo",
      },
      {
        type: "image",
        src: "/projects/tpcompanion/qatar-einvoicing.jpeg",
        caption: "Qatar E-invoicing",
      },
      {
        type: "video",
        src: "/projects/tpcompanion/qatar-einvoicing.mp4",
        caption: "Qatar E-invoicing Demo",
      },
    ],
  },
  {
    id: "02",
    slug: "technology-people-landing",
    name: "Technology People LLC — Company Website",
    tagline: "Modern responsive company website for Technology People LLC",
    description:
      "A modern, responsive company website developed for Technology People LLC to establish a professional digital presence for its technology services. Built with HTML5, Tailwind CSS, JavaScript, and Firebase, the site combines a polished responsive interface with an integrated contact workflow and lightweight deployment architecture.",

    longDescription:
      "Developed for Technology People LLC, this company website was created to provide the business with a modern, professional online presence for its technology services and solutions. The website was designed around clear information architecture, responsive layouts, and a clean visual presentation that allows visitors to quickly understand the company's capabilities, industries, and software offerings. The frontend was built using semantic HTML5, Tailwind CSS, and vanilla JavaScript, keeping the implementation lightweight while still providing interactive navigation, responsive components, and polished user interactions across desktop, tablet, and mobile devices. Firebase was integrated to support the website's backend functionality and form submission workflow, allowing visitor enquiries to be captured without introducing a large application framework. The project also includes an administrative login interface for managing submitted enquiries. Performance, accessibility, maintainability, and responsive behavior were considered throughout development, with the implementation structured to remain straightforward to maintain and extend. The resulting website provides Technology People LLC with a clean company-facing digital presence while demonstrating the ability to build and deploy production-oriented business websites using a lightweight frontend stack.",

    type: "FRONTEND",
    status: "SHIPPED",
    accentColor: "#6366F1",
    client: "Technology People LLC",

    stack: ["HTML5", "Tailwind CSS", "JavaScript", "Firebase", "Vercel"],
    keyFeatures: [
      "Modern responsive company website across desktop, tablet, and mobile",
      "Clear presentation of company capabilities, industries, and software solutions",
      "Responsive interactive navigation and lightweight frontend components",
      "Firebase-backed contact and enquiry workflow",
      "Administrative login interface for controlled access to submitted enquiries",
      "Semantic HTML5 structure with SEO-friendly metadata and page organization",
      "Lightweight frontend architecture using HTML5, Tailwind CSS, and vanilla JavaScript",
    ],

    features: [
      "Responsive company website across desktop, tablet, and mobile",
      "Modern business-focused UI for Technology People LLC",
      "Company overview and technology services presentation",
      "Industry-focused content sections",
      "Software solutions showcase",
      "Responsive navigation and interactive frontend components",
      "Contact and enquiry form workflow",
      "Firebase integration for form data handling",
      "Administrative login interface",
      "Semantic HTML5 structure",
      "Responsive Tailwind CSS implementation",
      "Vanilla JavaScript interactions without a heavy frontend framework",
      "SEO-friendly page structure and metadata",
      "Vercel deployment",
    ],

    metrics: [
      { label: "Frontend", value: "HTML / CSS / JS" },
      { label: "Styling", value: "Tailwind CSS" },
      { label: "Backend", value: "Firebase" },
      { label: "Deployment", value: "Vercel" },
      { label: "Responsive", value: "✓" },
      { label: "Admin", value: "Included" },
    ],

    challenges: [
      "Designing a professional company website that communicates Technology People LLC's services clearly without relying on a heavy frontend framework",
      "Creating a responsive layout that maintains consistent visual hierarchy across desktop, tablet, and mobile screen sizes",
      "Structuring company, industry, and software-solution content into a clear and easy-to-navigate information architecture",
      "Building reusable responsive UI sections using Tailwind CSS while keeping the implementation lightweight",
      "Implementing interactive frontend behavior with vanilla JavaScript without introducing unnecessary framework overhead",
      "Connecting the contact workflow to Firebase while keeping the frontend architecture simple and maintainable",
      "Providing an administrative login interface for controlled access to submitted enquiries",
      "Balancing visual presentation, accessibility, maintainability, and performance within a lightweight company website",
    ],

    outcomes: [
      "Delivered a complete professional company website for Technology People LLC",
      "Established a modern digital presence for the company's technology services and software solutions",
      "Provided a responsive experience across desktop, tablet, and mobile devices",
      "Integrated Firebase-backed enquiry handling into the website",
      "Added an administrative login interface for managing submitted enquiries",
      "Maintained a lightweight frontend implementation without a heavy JavaScript framework",
      "Created a maintainable foundation that can be extended as the company's services and offerings grow",
      "Deployed the completed website through Vercel",
    ],

    icon: "🚀",
    logoSrc: "/icons/technologypeople.png",
    featured: false,
    year: "2026",
    liveUrl: "https://www.technologypeople.ae/",

    media: [
      {
        type: "image",
        src: "/projects/technology-people-landing/homepage.jpeg",
        caption: "Homepage",
      },
      {
        type: "image",
        src: "/projects/technology-people-landing/industries.jpeg",
        caption: "Industries",
      },
      {
        type: "image",
        src: "/projects/technology-people-landing/software-solutions.jpeg",
        caption: "Software Solutions",
      },
      {
        type: "image",
        src: "/projects/technology-people-landing/mobile.jpeg",
        caption: "Mobile",
      },
      {
        type: "image",
        src: "/projects/technology-people-landing/form.jpeg",
        caption: "Contact Form",
      },
      {
        type: "image",
        src: "/projects/technology-people-landing/admin-login.jpeg",
        caption: "Admin Login",
      },
    ],
  },
  {
    id: "03",
    slug: "glamsync",
    name: "GlamSync",
    tagline:
      "Pre-launch SaaS landing page — editorial design, interactive UI, and performance-focused frontend",
    description:
      "A high-end pre-launch SaaS landing page developed for GlamSync, an upcoming salon and spa technology platform. Built with Next.js, React, TypeScript, and Tailwind CSS, the frontend combines responsive design, reusable components, custom interactions, lightweight animation systems, interactive pricing and FAQ sections, and a custom feature carousel.",

    longDescription:
      "GlamSync is an upcoming SaaS product for the salon and spa industry, and this project focused specifically on building its pre-launch landing page frontend. The underlying GlamSync SaaS application is being developed separately; my responsibility was to translate the intended product direction into a polished, responsive, and maintainable public-facing experience. The landing page uses a modern Next.js App Router architecture with React, TypeScript, and Tailwind CSS, organized around reusable page sections and shared components. Rather than following a conventional SaaS template aesthetic, the visual direction uses an editorial-style approach with large display typography, structured layouts, interactive elements, and motion-based transitions. The frontend includes responsive layouts across desktop, laptop, tablet, and mobile, along with a custom dual-cursor interaction system implemented without a dedicated cursor library. The cursor uses requestAnimationFrame for smooth trailing movement and hover-state interactions. Scroll-based section reveals are implemented using the browser's native IntersectionObserver API and reusable CSS transitions, avoiding unnecessary animation dependencies. The Features section includes a custom-built image and content carousel, while the pricing section provides interactive billing-period switching, plan comparison states, responsive layouts, and reusable plan data structures. Interactive FAQ functionality is also included. SEO was incorporated into the architecture through the Next.js App Router Metadata API, OpenGraph and Twitter/X metadata, dynamic sitemap generation, robots.ts, manifest.ts, semantic HTML, and structured heading hierarchy. The implementation deliberately avoids unnecessary third-party dependencies where native browser capabilities are sufficient, keeping the frontend maintainable and lightweight. The completed landing page establishes the pre-launch digital presence for GlamSync while keeping the unreleased SaaS application's backend, internal APIs, authentication, database, and production business logic outside the scope of this project.",

    type: "STARTUP",
    status: "SHIPPED",
    accentColor: "#F472B6",
    client: "GlamSync",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js App Router",
      "IntersectionObserver API",
      "requestAnimationFrame",
    ],
    keyFeatures: [
      "High-end pre-launch SaaS landing page with an editorial-style visual direction",
      "Responsive Next.js frontend across desktop, laptop, tablet, and mobile",
      "Reusable React and TypeScript component architecture built with Tailwind CSS",
      "Custom dual-cursor interaction with smooth requestAnimationFrame-based trailing animation",
      "Interactive pricing, FAQ, and custom feature/image carousel experiences",
      "Lightweight scroll-reveal animation system using the native IntersectionObserver API",
      "SEO and social-sharing foundation using Next.js Metadata, sitemap, robots, manifest, and semantic HTML",
    ],

    features: [
      "High-end pre-launch SaaS landing page",
      "Editorial-style visual design direction",
      "Responsive layouts across desktop, laptop, tablet, and mobile",
      "Reusable React component architecture",
      "Next.js App Router architecture",
      "Custom dual-cursor interaction system",
      "requestAnimationFrame-powered trailing cursor animation",
      "Interactive hover-state cursor behavior",
      "Scroll-reveal animation system using native IntersectionObserver",
      "Reusable CSS-based animation classes",
      "Interactive pricing interface with billing-period switching",
      "Plan comparison states and responsive pricing layouts",
      "Interactive FAQ sections",
      "Custom-built feature/image carousel without a third-party carousel library",
      "Semantic HTML structure and responsive accessibility considerations",
      "Next.js Metadata API implementation",
      "OpenGraph and Twitter/X social-sharing metadata",
      "Dynamic sitemap generation",
      "robots.txt configuration",
      "Web manifest configuration",
      "Structured heading hierarchy and descriptive navigation",
      "TypeScript-based maintainable frontend architecture",
      "Minimal third-party dependency approach where native browser APIs were sufficient",
    ],

    metrics: [
      { label: "Product", value: "Pre-Launch" },
      { label: "Framework", value: "Next.js" },
      { label: "UI", value: "React + Tailwind" },
      { label: "Language", value: "TypeScript" },
      { label: "Architecture", value: "App Router" },
      { label: "Cursor", value: "Custom" },
      { label: "Animations", value: "Native APIs" },
      { label: "Carousel", value: "Custom" },
      { label: "SEO", value: "App Router Metadata" },
    ],

    challenges: [
      "Translating an editorial-style visual direction into a maintainable React and Next.js implementation without relying on a pre-built landing-page template",
      "Designing responsive layouts that preserve the intended visual hierarchy across desktop, laptop, tablet, and mobile screen sizes",
      "Building a custom dual-cursor interaction system with smooth trailing movement using requestAnimationFrame instead of a dedicated animation library",
      "Implementing scroll-reveal behavior using the native IntersectionObserver API while keeping the animation system reusable and lightweight",
      "Building a custom feature/image carousel without introducing a third-party carousel dependency",
      "Creating an interactive pricing interface with billing-period switching, plan comparison states, and reusable plan data",
      "Implementing responsive and reusable FAQ interactions within the overall landing-page component architecture",
      "Structuring the application around reusable React components while maintaining a clear Next.js App Router architecture",
      "Implementing SEO and social-sharing foundations through the Next.js Metadata API, sitemap, robots, manifest, semantic HTML, and structured headings",
      "Avoiding unnecessary third-party dependencies where native browser capabilities could provide the required interaction behavior",
      "Maintaining a clear project boundary between the landing page frontend and the separate GlamSync SaaS application being developed by other developers",
    ],

    outcomes: [
      "Delivered the complete pre-launch landing page frontend for GlamSync",
      "Established a polished public-facing digital presence for the upcoming SaaS product",
      "Implemented a responsive experience across desktop, laptop, tablet, and mobile devices",
      "Created a reusable React component architecture for the landing page",
      "Delivered custom cursor interactions and lightweight scroll-based animation systems",
      "Built interactive pricing, FAQ, and feature carousel experiences without relying on unnecessary third-party UI libraries",
      "Implemented SEO and social-sharing foundations directly through the Next.js App Router",
      "Added dynamic sitemap, robots, and web manifest configuration",
      "Maintained a TypeScript-based frontend architecture designed for future maintainability",
      "Kept the implementation scope clearly focused on the landing page frontend while the underlying GlamSync SaaS platform remains a separate development effort",
    ],

    icon: "✨",
    logoSrc: "/icons/glamsync.png",
    featured: false,
    year: "2026",

    media: [],
  },
  {
    id: "04",
    slug: "developer-assessment-platform",
    name: "Developer Assessment Platform",
    tagline:
      "Independently built platform for practicing and assessing developer skills",
    description:
      "A full-stack platform for practicing and assessing programming knowledge through MCQs, theory questions, code-output questions, and debugging questions — with a separate candidate-facing app, a dedicated admin console, and a single Fastify + PostgreSQL backend. Built independently to explore a stateless, localStorage-first architecture rather than the typical server-tracked assessment model.",

    longDescription:
      "Developer Assessment Platform is an independently conceived and built product, not client work — it exists because I wanted a proper practice ground for developer interview prep and a self-contained excuse to design a full multi-app architecture from a blank page, with no requirements handed to me. The system is an npm-workspaces monorepo split into three apps and three shared packages: a candidate-facing Next.js 14 (App Router) app for taking quizzes, a separate Next.js 14 admin console for managing content, and a Fastify + TypeScript REST API sitting in front of PostgreSQL, with Drizzle ORM providing a typed schema and lightweight migrations and Zod validating every request. The core architectural decision was to treat Postgres purely as a content store — subjects, topics, questions, question options, admin accounts, and a couple of global settings — and nothing else. There is no assessments table, no attempts table, no bookmarks table, and no per-visitor identity anywhere in the database. The public API (`/api/v1/subjects`, `/api/v1/questions`, ...) is entirely unauthenticated and read-only content, returning question pools with their correct answers and explanations embedded, because grading is designed to happen entirely client-side. Quiz generation, grading, scoring, and weak-area analysis all live in a single client-side module (`quizEngine.ts`) in the candidate app, with everything — the generated assessment, full attempt history capped at the 50 most recent runs, computed weak-area breakdowns, and bookmarks — persisted in the browser's localStorage rather than a server-side session. The admin console has its own authentication path: JWT sessions carried in an HttpOnly, Secure cookie set on login, verified independently on every admin route by a `requireAdmin` Fastify preHandler rather than being enforced only by hiding pages in the frontend, and admin passwords hashed with Argon2id. The UI system across both frontends is deliberately strict black-and-white — no color, just typography, hairline borders, and a code-editor-inspired accent language of monospace tags and line-numbered code blocks — with dark mode as the default and light mode a single toggle away. The whole system is designed around a clear trade-off: candidates get a completely frictionless, account-free way to practice, at the cost of no cross-device sync and no admin-side visibility into candidate activity, since none of that data ever reaches the server.",

    type: "INDEPENDENT",
    status: "SHIPPED",
    accentColor: "#38BDF8",
    motivation:
      "Built independently, not for a client — a self-directed product to sharpen developer interview prep and to design a full multi-app architecture end-to-end with no external requirements.",

    stack: [
      "Next.js 14",
      "App Router",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Drizzle ORM",
      "Zod",
      "Tailwind CSS",
      "@fastify/jwt",
      "Argon2",
      "HttpOnly Cookies",
      "npm Workspaces",
      "Docker",
      "Vitest",
      "Render",
    ],
    keyFeatures: [
      "Three-app monorepo: candidate app, admin console, and a single Fastify + PostgreSQL API",
      "Stateless, unauthenticated public API — quiz generation, grading, and progress tracking run entirely client-side in localStorage",
      "MCQ, theory, code-output, and debugging question types across configurable subjects and topics",
      "Admin console with JWT + Argon2id auth over HttpOnly cookies, verified server-side on every admin route",
      "Weak-area analysis computed on read from local attempt history against an admin-configurable accuracy threshold",
      "Strict black-and-white, code-editor-inspired UI system with dark mode by default",
    ],

    features: [
      "npm-workspaces monorepo: candidate app (user-web), admin console (admin-web), and API, plus shared database/shared/types packages",
      "Fastify + TypeScript REST API with a public read-only content surface and a separate authenticated admin surface",
      "PostgreSQL schema (via Drizzle ORM) scoped purely to content: subjects, topics, questions, question options, admin users, and global settings",
      "No server-side candidate accounts, sessions, or per-visitor identity anywhere in the system",
      "Client-side quiz engine handling assessment generation, grading, scoring, and weak-area computation",
      "Assessment state, attempt history (capped at 50 most recent), progress, and bookmarks all persisted in localStorage",
      "Admin authentication via @fastify/jwt with Argon2id-hashed passwords, sessions carried in HttpOnly/Secure cookies",
      "requireAdmin preHandler enforced independently on every admin route, not just hidden in the frontend",
      "Admin console for managing subjects, topics, and questions, including publish/unpublish workflows",
      "Configurable weak-area threshold and minimum-attempts settings exposed to the admin and consumed by the client",
      "Zod-validated request/response contracts shared across the API and both frontends",
      "Seed script for sample subjects (JavaScript, React, TypeScript, SQL), topics, and questions",
      "Dockerized PostgreSQL for local development via docker-compose",
      "Vitest test suite for the API",
      "Fastify API and PostgreSQL database deployed and running in production on Render",
      "Strict black-and-white visual system with monospace, code-editor-inspired accents and dark-mode-default theming",
    ],

    metrics: [
      { label: "Apps", value: "3" },
      { label: "Database", value: "PostgreSQL" },
      { label: "ORM", value: "Drizzle" },
      { label: "Auth", value: "JWT + Argon2id" },
      { label: "Question Types", value: "4" },
      { label: "Client State", value: "localStorage" },
      { label: "Architecture", value: "Monorepo" },
      { label: "API Style", value: "REST" },
      { label: "Hosting", value: "Render" },
    ],

    challenges: [
      "Designing a schema-and-API split where Postgres holds only content and every piece of candidate activity — assessments, grading, history, bookmarks — lives entirely client-side instead of in server-tracked tables",
      "Building a client-side quiz engine responsible for assessment generation, grading, scoring, and weak-area computation, with no server-held attempt state to fall back on",
      "Structuring an npm-workspaces monorepo cleanly across two Next.js 14 frontends, a Fastify API, and shared database/validation/types packages",
      "Enforcing admin authorization independently at the API layer via a requireAdmin preHandler on every admin route, rather than relying on frontend route-hiding",
      "Deciding, deliberately, to expose isCorrect and explanation in the public question API since grading happens client-side and there is no server-held attempt to protect — and documenting that trade-off rather than treating it as an oversight",
      "Keeping a strict two-color (black and white) design system visually rich and legible across two separate frontends without introducing any accent colors",
    ],

    outcomes: [
      "Shipped a working three-app system: candidate app, admin console, and API, deployed and publicly accessible",
      "Validated a fully stateless public API design with zero candidate accounts, sessions, or server-side tracking",
      "Built a reusable client-side quiz engine handling generation, grading, scoring, and weak-area analysis",
      "Implemented admin authentication and authorization enforced independently at the API layer",
      "Established a typed, schema-as-code database layer with Drizzle ORM and lightweight migrations",
      "Deployed the Fastify API and PostgreSQL database to production on Render, serving both frontends live",
      "Produced a self-directed portfolio piece demonstrating full end-to-end architectural ownership, from database schema to UI design system, without external requirements",
    ],

    icon: "🧪",
    logoSrc: "/icons/developer-assessment-platform.png",
    featured: false,
    year: "2026",
    liveUrl: "https://developer-assessment-platform.com",
    repoUrl:
      "https://github.com/Mohammed-Saif-Ibrahim/Developer-Assessment-Platform",

    media: [
      {
        type: "image",
        src: "/projects/developer-assessment-platform/dashboard.png",
        caption: "Dashboard",
      },
      {
        type: "image",
        src: "/projects/developer-assessment-platform/subjects.png",
        caption: "Subjects Page",
      },
      {
        type: "image",
        src: "/projects/developer-assessment-platform/test-mode.png",
        caption: "Test Mode Page",
      }
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
