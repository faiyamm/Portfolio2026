
import type { CardInfo } from '../types';

// import card images
import acmw from '../assets/card/acmw.webp';
import helen from '../assets/card/helen.webp';
import portfolio from '../assets/card/portfolio.webp';
import redmis from '../assets/card/redmis.webp';
import surveysdgku from '../assets/card/surveysdgku.webp';

// import detail images
import acmwDetail from '../assets/details/acmw_detail.webp';
import helenDetail from '../assets/details/helen_detail.webp';
import portfolioDetail from '../assets/details/portfolio_detail.webp';
import redmisDetail from '../assets/details/redmis_detail.webp';
import sdgkuDetail from '../assets/details/sdgku_detail.webp';

export const workExperience: CardInfo[] = [
    {
        id: "surveysdgku",
        title: "SDGKU Survey Platform",
        role: "Full Stack Developer",
        location: "Tijuana, Mexico (Remote)",
        shortDescription: `Built a secure, full-stack administrative ecosystem for university assessments, featuring a custom-engineered RBAC system and a private, anti-spam authentication workflow.`,
        fullDescription: `Collaborated within a cross-functional development team using Scrum methodology to architect and build a custom administrative survey platform from the ground up. Led the end-to-end design phase in Figma, focusing on creating an intuitive administrative dashboard for faculty and a streamlined, responsive survey interface for students. Engineered the core system infrastructure, including a custom authentication module, role-based access control (RBAC), and secure invitation-only registration workflows to ensure data integrity and platform security.`,
        date: "Feb 2025 - Jun 2025",
        imageUrl: surveysdgku,
        detailImageUrl: sdgkuDetail,
        features: [
            { title: "Role-Based Access Control (RBAC)", description: "Developed a granular permission system to manage diverse access levels for faculty and administrative staff." },
            { title: "Custom Authentication", description: "Built a secure login module from scratch, incorporating session validation and rigorous input sanitization to prevent unauthorized access." },
            { title: "Anti-Spam Workflow", description: "Implemented a unique email invitation process that eliminated spam registrations and restricted platform entry to authorized personnel." },
            { title: "Admin Dashboard", description: "Designed and implemented a centralized user interface focused on managing complex survey data and student participation metrics." }
        ],
        techStack: [
            { name: "PHP & MySQL", description: "Utilized for robust server-side logic and relational database management." },
            { name: "JavaScript", description: "Applied for core frontend interactivity, dynamic form validation, and session handling." },
            { name: "HTML/CSS", description: "Established the foundation for the platform's responsive layout and visual presentation." },
            { name: "Figma", description: "Primary tool for UI/UX prototyping and mapping out complex administrative user flows." }
        ]
    },
    {
        id: "acmw",
        title: "ACM-Women: México Community Website",
        role: "Frontend Developer & Lead Designer",
        shortDescription: `Architected a high-performance community hub from scratch, transforming organizational research into a polished React application with dynamic media handling.`,
        fullDescription: `Engineered the official community website from the ground up, conducting extensive competitive research on organizational content structures to architect a scalable information hierarchy. Translated high-fidelity Figma designs into a functional, interactive implementation using React and custom CSS, ensuring a polished user experience. Managed the entire development lifecycle, from initial conceptualization and content planning to final performance optimization and deployment on Vercel.`,
        date: "Dec 2025 - Jan 2026",
        imageUrl: acmw,
        detailImageUrl: acmwDetail,
        liveUrl: "https://acm-women.vercel.app/",
        features: [
            { title: "Architecture Research", description: "Conducted organizational research to structure community resources and content into a clear, navigable hierarchy." },
            { title: "High-Fidelity Implementation", description: "Translated complex Figma designs into a functional React application." },
            { title: "Advanced Interactivity", description: "Integrated Aceternity UI and theme toggles for a premium interactive experience." },
            { title: "SEO Optimized", description: "Implemented metadata and semantic HTML to improve search visibility." }
        ],
        techStack: [
            { name: "React", description: "Core library for the application's component-based architecture." },
            { name: "Custom CSS", description: "Tailored styling for unique visual elements beyond standard templates." },
            { name: "Aceternity UI", description: "Integrated high-end interactive components." },
            { name: "Tailwind CSS", description: "Utility-first styling for mobile-first responsiveness." }
        ]
    },
    {
        id: "redmis",
        title: "Red Temática Mexicana de Ingeniería de Software (RedMIS)",
        role: "Frontend Developer",
        location: "Tijuana, Mexico (Remote)",
        shortDescription: `Modernized a national engineering network's platform through a comprehensive UI overhaul, replacing legacy systems with an intuitive layout that boosted user engagement.`,
        fullDescription: `Executed a comprehensive UI/UX redesign for the official Redmis.org website, focusing on modernizing the interface and enhancing overall usability. Successfully replaced a legacy design with a clear, intuitive layout that prioritized information architecture and significantly increased user engagement. Collaborated across the full development lifecycle, transitioning from visual prototyping in Figma to technical frontend implementation while ensuring a seamless migration to the new system.`,
        date: "Mar 2025 - Apr 2025",
        imageUrl: redmis,
        detailImageUrl: redmisDetail,
        liveUrl: "https://redmis.org/",
        features: [
            { title: "Modernization", description: "Completely overhauled the legacy UI to align with modern web standards and improve visual clarity." },
            { title: "Information Architecture", description: "Restructured navigation based on usability research to improve user flow." },
            { title: "Collaborative Implementation", description: "Worked closely through every stage of development, from initial visual design concepts to final technical execution." }
        ],
        techStack: [
            { name: "Vanilla JS, HTML, CSS", description: "Used standard web technologies to ensure a lightweight and performant frontend implementation." },
            { name: "Figma", description: "Utilized for creating high-fidelity prototypes and defining the new visual identity of the platform." }
        ]
    }
];

export const projects: CardInfo[] = [
    {
        id: "helen",
        title: "HELEN - Smart Home Assistant For The Deaf",
        role: "Lead Frontend Developer & UI Designer",
        shortDescription: `Developed a real-time Mexican Sign Language (LSM) recognition assistant featuring a unique, textless "Bento Box" UI designed for universal accessibility.`,
        fullDescription: `Developed a React-based smart home assistant that empowers deaf users to control household devices via real-time Mexican Sign Language (LSM) recognition. Designed a textless "Bento Box" UI in Figma, utilizing universal iconography to bridge the digital gap for users with varying literacy levels, achieving a 67% unassisted task completion rate. Engineered a high-performance web architecture that reduced RAM consumption by 90% and CPU usage by 50% compared to previous legacy versions.`,
        date: "Sep 2025 - Nov 2025",
        imageUrl: helen,
        detailImageUrl: helenDetail,
        features: [
            { title: "Real-time Recognition", description: "Integrated computer vision to translate LSM into smart home commands." },
            { title: "Textless \"Bento Box\" UI", description: "Built a 100% icon-based interface to eliminate language barriers." },
            { title: "Low-Latency Stream", description: "Optimized bi-directional data streams, achieving 2.1s end-to-end latency." },
            { title: "User Validation", description: "Achieved a 67% unassisted task completion rate with 15 deaf community members." }
        ],
        techStack: [
            { name: "React & Custom CSS", description: "Core framework and styling for a responsive, 5-screen dashboard (Home, Alarms, Weather, Devices, Settings)." },
            { name: "MediaPipe.js", description: "Computer vision library for real-time hand landmark extraction." },
            { name: "Socket.IO", description: "WebSocket protocol for continuous, low-latency communication." },
            { name: "Figma", description: "Used for iterative UI design and the creation of a specialized universal iconography system." }
        ]
    },
    {
        id: "portfolio",
        title: "This Website",
        role: "Frontend Developer",
        shortDescription: `Wrote and designed this entire website from scratch using React, TypeScript and Tailwind CSS.`,
        fullDescription: `Designed and built a personal portfolio to showcase my skills and projects. The focus was on creating a modern, responsive, and accessible user experience. I implemented a custom design system, used Framer Motion for animations, and ensured high performance across all devices.`,
        date: "January, 2026",
        imageUrl: portfolio,
        detailImageUrl: portfolioDetail,
        features: [
            { title: "Responsive Design", description: "Ensured the website looks great on all devices, from mobile phones to large desktop screens." },
            { title: "Performance Optimization", description: "Optimized images and code splitting to ensure fast load times." },
            { title: "Modern Tech Stack", description: "Utilized the latest React features and Tailwind CSS for efficient development." }
        ],
        techStack: [
            { name: "React & Vite", description: "Core framework and build tool for efficient development." },
            { name: "TypeScript", description: "Used for type safety and better developer experience." },
            { name: "Tailwind CSS", description: "Utility-first CSS framework for styling." },
            { name: "Framer Motion", description: "Used for smooth animations and transitions." }
        ]
    }
];
