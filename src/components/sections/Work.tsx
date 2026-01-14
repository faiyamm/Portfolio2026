import { Card } from '../ui/Card';
import { workExperience } from '../../data/portfolioData';

export const Work = () => {
    return (
        <section id="Work" className="layout-container min-h-screen flex flex-col justify-center pt-20">
            <div className="flex flex-col">
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-8">
                    Work Experience
                </h2>
                <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-6xl text-justify mb-10">
                    My professional path is defined by a commitment to learning and a hands-on approach to real-world challenges. For me, every role is an opportunity to contribute to a team's success while refining my technical craft and understanding how meaningful tools are built from the ground up.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {workExperience.map((card) => (
                        <Card key={card.id} cardInfo={card} />
                    ))}
                </div>
            </div>
        </section>
    );
};
