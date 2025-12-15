import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, align = 'center', className, animateOnRender = false }) => {
    const alignment = align === 'left' ? 'text-left items-start' : align === 'right' ? 'text-right items-end' : 'text-center items-center';
    const animationProps = animateOnRender
        ? { animate: { opacity: 1, y: 0 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

    return (
        <div className={`flex flex-col mb-12 ${alignment} ${className}`}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                {...animationProps}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-serif font-bold text-white mb-4"
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    {...animationProps}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="h-1 w-20 bg-accent-gold mb-4"
                />
            )}
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0 }}
                    {...(animateOnRender ? { animate: { opacity: 1 } } : { whileInView: { opacity: 1 }, viewport: { once: true } })}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-text-muted max-w-2xl text-lg"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
};

export default SectionTitle;
