import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';

interface RevealTextProps extends HTMLMotionProps<"div"> {
    text: string;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
    className?: string;
    delay?: number;
}

export const RevealText = ({
    text,
    tag = 'div',
    className = '',
    delay = 0,
    ...props
}: RevealTextProps) => {
    const words = text.split(" ");

    const Component = motion.create(tag);

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay
            }
        }
    };

    const wordVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <Component
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className={className}
            {...props}
        >
            {words.map((word, index) => (
                <span key={index} className="inline-block mr-[0.2em] align-top">
                    <motion.span
                        variants={wordVariants}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </Component>
    );
};
