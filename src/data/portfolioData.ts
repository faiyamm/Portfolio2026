
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
        shortDescription: `Collaborated in a Scrum environment to build an administrative survey platform, designing a custom authentication system and RBAC for granular faculty access using PHP and MySQL.`,
        fullDescription: `Collaborated within a cross-functional team using Scrum methodology to architect a custom administrative survey platform from the ground up. Led the design phase in Figma to create an intuitive administrative dashboard and a streamlined student survey interface. Engineered the core infrastructure, including a custom authentication system, role-based access control (RBAC), and secure invitation workflows using JavaScript, PHP, and MySQL.`,
        date: "Feb 2025 - Jun 2025",
        imageUrl: surveysdgku,
        detailImageUrl: sdgkuDetail,
        features: [
            { title: "Role-Based Access Control (RBAC)", description: "Developed a granular permission system for faculty and staff access." },
            { title: "Custom Authentication", description: "Built a secure, from-scratch login module with session validation and input sanitization." },
            { title: "Anti-Spam Workflow", description: "Implemented a unique email invitation process to secure authorized registrations." },
            { title: "Admin Dashboard", description: "Designed and implemented a central UI for managing complex survey data." }
        ],
        techStack: [
            { name: "PHP & MySQL", description: "Server-side logic and relational database management." },
            { name: "JavaScript", description: "Logic for frontend interactivity and form validation." },
            { name: "HTML/CSS", description: "Foundation for the platform’s responsive layout." },
            { name: "Figma", description: "Tool for UI/UX prototyping and administrative flow design." }
        ]
    },
    {
        id: "acmw",
        title: "ACM-Women: México",
        role: "Frontend Developer & Lead Designer",
        shortDescription: `Engineered the community website from the ground up, conducting competitive research on organizational content structures and translating high-fidelity Figma designs into an interactive React implementation using custom CSS.`,
        fullDescription: `Delivered a modern digital home for the ACM-Women Mexico community. Conducted extensive research on organizational content structures to architect the site's hierarchy from scratch. Translated high-fidelity Figma designs into a functional, interactive implementation using React and custom CSS, focusing on a polished user experience and mobile-first responsiveness.`,
        date: "Dec 2025 - Jan 2026",
        imageUrl: acmw,
        detailImageUrl: acmwDetail,
        liveUrl: "https://acm-women.vercel.app/",
        features: [
            { title: "Architecture Research", description: "Built the site hierarchy from scratch based on organizational content research." },
            { title: "Custom Implementation", description: "Translated complex Figma designs into a functional React application." },
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
        title: "Redmis.org",
        role: "Frontend Developer",
        location: "Tijuana, Mexico (Remote)",
        shortDescription: `Executed a comprehensive UI redesign to modernize legacy layouts, successfully enhancing website usability and information architecture through the full development lifecycle.`,
        fullDescription: `Executed a comprehensive UI/UX redesign of the official Redmis.org website, replacing legacy layouts with a modern, high-engagement interface. Focused on enhancing the information architecture to improve site navigation and usability. Managed the full development lifecycle, translating visual prototypes into a technical frontend implementation to ensure a seamless transition for the organization’s digital presence.`,
        date: "Mar 2025 - Apr 2025",
        imageUrl: redmis,
        detailImageUrl: redmisDetail,
        liveUrl: "https://redmis.org/",
        features: [
            { title: "Modernization", description: "Replaced legacy system design with a high-engagement, modern interface." },
            { title: "Information Architecture", description: "Restructured navigation based on usability research to improve user flow." },
            { title: "Full Lifecycle Management", description: "Led the project from initial visual concepts to final technical deployment." }
        ],
        techStack: [
            { name: "Figma", description: "High-fidelity visual identity design and interactive prototyping." },
            { name: "React", description: "Core framework for building a performant and maintainable frontend." },
            { name: "Tailwind CSS", description: "Leveraged for rapid, consistent styling across the platform." }
        ]
    }
];

export const projects: CardInfo[] = [
    {
        id: "helen",
        title: "HELEN: SMART HOME ASSISTANT",
        role: "Lead Frontend Developer & UI Designer",
        shortDescription: `Developed a React application integrating MediaPipe. js for real-time sign language recognition, addressing digital exclusion for the deaf community through a textless, gesture-based interface.`,
        fullDescription: `Created an inclusive assistive technology ecosystem for the deaf community. Developed a React-based web application that integrates MediaPipe.js for real-time Mexican Sign Language (LSM) recognition. Designed a textless "Bento Box" UI in Figma centered on universal iconography, achieving a 67% unassisted task completion rate during usability testing. Integrated Socket.IO for low-latency, bi-directional communication with smart devices.`,
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
            { name: "React", description: "Managed complex application state across 5 core smart home modules." },
            { name: "MediaPipe.js", description: "Computer vision library for real-time hand landmark extraction." },
            { name: "Socket.IO", description: "WebSocket protocol for continuous, low-latency communication." },
            { name: "Figma", description: "Designed the universal iconography system and UI layout." }
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
            { name: "React", description: "Core library for building the user interface." },
            { name: "TypeScript", description: "Used for type safety and better developer experience." },
            { name: "Tailwind CSS", description: "Utility-first CSS framework for styling." },
            { name: "Vite", description: "Fast build tool and development server." }
        ]
    }
];
