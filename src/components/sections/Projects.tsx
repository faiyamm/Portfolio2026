
import { Card } from '../ui/Card';
import { projects } from '../../data/portfolioData';

export const Projects = () => {
    return (
        <section className="layout-container min-h-screen flex flex-col justify-center pt-20">
            <div className="flex flex-col">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-8">
                    Projects
                </h2>
                <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-6xl text-justify mb-10">
                    My work is driven by a simple question: "How can I make things better?" These projects are my hands-on exploration of real-world problems, with the goal of creating practical tools that empower people to learn, work, and innovate.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Card key={project.id} cardInfo={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
