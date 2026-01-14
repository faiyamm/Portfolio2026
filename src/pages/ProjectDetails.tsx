
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { projects, workExperience } from '../data/portfolioData';
import { useEffect } from 'react';

export const ProjectDetails = () => {
    const { id } = useParams<{ id: string }>();

    // Combine all items to search
    const allItems = [...workExperience, ...projects];
    const item = allItems.find((p) => p.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!item) {
        return <Navigate to="/" replace />;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-32 pb-20 px-4 md:px-0 max-w-4xl mx-auto"
        >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
                        {item.title}
                    </h1>
                    <div className="text-xl text-white/90 font-medium">
                        {item.role} <span className="mx-2">|</span> {item.date}
                    </div>
                </div>

                {item.liveUrl && (
                    <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white font-semibold border border-white/20 hover:bg-white/10 px-6 py-3 rounded-full transition-all shrink-0"
                    >
                        Live Demo
                        <FaExternalLinkAlt className="text-sm" />
                    </a>
                )}
            </div>

            {/* Hero Image */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative aspect-video w-full rounded-2xl overflow-hidden mb-16 shadow-2xl border border-white/10 bg-white/5"
            >
                <img
                    src={item.detailImageUrl || item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Content */}
            <div className="space-y-12">
                {/* Description */}
                <div className="prose prose-invert max-w-none">
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed font-normal text-justify">
                        {item.fullDescription}
                    </p>
                </div>

                <div className="space-y-8">
                    {/* Features */}
                    {item.features && item.features.length > 0 && (
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white">Features</h3>
                            <ul className="space-y-1">
                                {item.features.map((feature, idx) => (
                                    <li key={idx} className="text-lg text-white/90 leading-relaxed">
                                        <strong className="text-white font-bold">{feature.title}:</strong> {feature.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tech Stack */}
                    {item.techStack && item.techStack.length > 0 && (
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
                            <ul className="space-y-1">
                                {item.techStack.map((tech, idx) => (
                                    <li key={idx} className="text-lg text-white/90 leading-relaxed">
                                        <strong className="text-white font-bold">{tech.name}:</strong> {tech.description}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
