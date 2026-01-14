
import type { CardInfo } from '../types';

// import images
import acmw from '../assets/card/acmw.png';
import helen from '../assets/card/helen.png';
import portfolio from '../assets/card/portfolio.png';
import redmis from '../assets/card/redmis.png';
import surveysdgku from '../assets/card/surveysdgku.png';

export const workExperience: CardInfo[] = [
    {
        id: "surveysdgku",
        title: "SDGKU Survey Platform | Full Stack Developer",
        shortDescription: `Collaborated in a Scrum environment to build an administrative survey platform, designing a custom authentication system and RBAC for granular faculty access using PHP and MySQL.`,
        fullDescription: "",
        date: "Feb 2025 - Jun 2025",
        imageUrl: surveysdgku
    },
    {
        id: "acmw",
        title: "ACM-Women: México | Frontend Developer",
        shortDescription: `Engineered the community website from the ground up, conducting competitive research on organizational content structures and translating high-fidelity Figma designs into an interactive React implementation using custom CSS.`,
        fullDescription: "",
        date: "Dec 2025 - Jan 2026",
        imageUrl: acmw,
        liveUrl: "https://acm-women.vercel.app/"
    },
    {
        id: "redmis",
        title: "Redmis.org | Frontend Developer",
        shortDescription: `Executed a comprehensive UI redesign to modernize legacy layouts, successfully enhancing website usability and information architecture through the full development lifecycle.`,
        fullDescription: "",
        date: "Mar 2025 - Apr 2025",
        imageUrl: redmis,
        liveUrl: "https://redmis.org/"
    }
];

export const projects: CardInfo[] = [
    {
        id: "helen",
        title: "HELEN | Lead Frontend Developer",
        shortDescription: `Developed a React application integrating MediaPipe. js for real-time sign language recognition, addressing digital exclusion for the deaf community through a textless, gesture-based interface.`,
        fullDescription: "",
        date: "Sep 2025 - Nov 2025",
        imageUrl: helen
    },
    {
        id: "portfolio",
        title: "This Website | Frontend Developer",
        shortDescription: `Wrote and designed this entire website from scratch using React, TypeScript and Tailwind CSS.`,
        fullDescription: "",
        date: "Jan, 2026",
        imageUrl: portfolio
    }
];

