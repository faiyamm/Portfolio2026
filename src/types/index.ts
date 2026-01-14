
export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    date: string;
    imageUrl: string;
    techStack: string[];
    liveDemoUrl?: string;
    features: string[];
}

export interface WorkExperience {
    id: string;
    title: string;
    company: string;
    date: string;
    shortDescription: string;
    fullDescription: string;
    imageUrl: string;
}
