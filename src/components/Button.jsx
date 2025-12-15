import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    to,
    onClick,
    className,
    type = 'button'
}) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-dark";

    const variants = {
        primary: "bg-accent-gold text-primary-dark hover:bg-yellow-400 focus:ring-accent-gold",
        secondary: "bg-accent-blue text-white hover:bg-blue-600 focus:ring-accent-blue",
        outline: "border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-dark focus:ring-accent-gold",
        ghost: "text-text-muted hover:text-accent-gold hover:bg-white/5",
    };

    const classes = twMerge(baseStyles, variants[variant], className);

    const content = (
        <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
        >
            {children}
        </motion.span>
    );

    if (to) {
        return (
            <Link to={to} className={classes}>
                {content}
            </Link>
        );
    }

    return (
        <motion.button
            type={type}
            className={classes}
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.button>
    );
};

export default Button;
