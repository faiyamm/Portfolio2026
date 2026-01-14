export interface CardInfo {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    date: string;
    imageUrl: string;
    detailImageUrl: string;
    liveUrl?: string;
    role?: string;
    location?: string;
    features?: { title: string; description: string }[];
    techStack?: { name: string; description: string }[];
}
