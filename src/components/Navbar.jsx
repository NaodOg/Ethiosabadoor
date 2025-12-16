import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Equipment', path: '/equipment' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
    ];


    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const isHome = location.pathname === '/';
    const showBackground = !isHome || scrolled;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${showBackground ? 'bg-primary-dark shadow-lg py-3' : 'bg-transparent py-3'}`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">

                    <Link to="/" className="flex items-center gap-2 group">
                        <img
                            src="/newlogo.png"
                            alt="Ethio Sabadoor Logo"
                            className="h-10 w-auto object-contain transition-transform group-hover:scale-105 xl:h-12"
                        />
                    </Link>


                    <div className="hidden xl:flex items-center gap-4 md:gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-xs sm:text-sm font-medium transition-colors hover:text-accent-gold ${location.pathname === link.path ? 'text-accent-gold' : 'text-text-muted'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button to="/contact" variant="primary" className="px-3 py-1.5 text-xs sm:text-sm">
                            Get Quote
                        </Button>
                    </div>


                    <button
                        className="xl:hidden text-white hover:text-accent-gold transition-colors z-50 relative"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>


            <AnimatePresence>
                {isOpen && (
                    <>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden"
                        />


                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-primary-dark border-l border-white/10 z-40 xl:hidden shadow-2xl pt-24 px-6"
                        >
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`text-base font-medium py-2 border-b border-white/5 ${location.pathname === link.path ? 'text-accent-gold' : 'text-text-muted'}`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button to="/contact" variant="primary" className="w-full mt-2 py-3 text-sm">
                                    Get Quote
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
