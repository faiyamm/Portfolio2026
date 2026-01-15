import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import type { CardInfo } from '../../types';

interface CardProps {
    cardInfo: CardInfo;
    section?: string;
}

export const Card = ({ cardInfo, section }: CardProps) => {
    return (
        <div className='group flex flex-col gap-6 w-full'>
            <div className='relative w-full aspect-video rounded-2xl md:rounded-[32px] overflow-hidden'>
                <img
                    src={cardInfo.imageUrl}
                    alt={cardInfo.title}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />
            </div>

            <div className='flex flex-col gap-3'>
                <span className='text-white/90 font-medium tracking-wide text-sm md:text-base'>
                    {cardInfo.date}
                </span>

                <h3 className='text-xl md:text-2xl font-bold text-white'>
                    {cardInfo.title}
                </h3>

                <p className='text-white/90 leading-relaxed text-base md:text-lg line-clamp-3'>
                    {cardInfo.shortDescription}
                </p>

                <div className='pt-2 flex items-center justify-end gap-6 text-sm md:text-base'>
                    {cardInfo.liveUrl && (
                        <a
                            href={cardInfo.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='relative text-white font-semibold after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100'
                        >
                            Live Demo
                        </a>
                    )}

                    <Link
                        to={`/project/${cardInfo.id}`}
                        state={{ fromSection: section }}
                        className='group/link inline-flex items-center gap-2 text-white font-semibold relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100'
                    >
                        More Details
                        <FaArrowRight className="transform transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
