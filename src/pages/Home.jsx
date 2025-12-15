import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Users, Camera, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-primary-light p-6 rounded-lg border border-transparent hover:border-accent-gold/50 transition-colors group"
    >
        <div className="w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center mb-4 group-hover:bg-accent-gold/10 transition-colors">
            <Icon className="w-6 h-6 text-accent-gold" />
        </div>
        <h3 className="text-xl font-serif font-bold text-white mb-2">{title}</h3>
        <p className="text-text-muted text-sm">{description}</p>
    </motion.div>
);

const ServicePreviewCard = ({ title, description, image, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="relative group overflow-hidden rounded-lg h-80"
    >
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/50 to-transparent z-10" />
        <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300 group-hover:-translate-y-2">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">{title}</h3>
            <p className="text-text-muted text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{description}</p>
            <Link to="/services" className="flex items-center text-accent-gold text-sm font-medium hover:text-white transition-colors inline-flex">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
        </div>
    </motion.div>
);

const Home = () => {
    return (
        <div className="min-h-screen">

            <section className="relative h-screen flex items-center justify-center overflow-hidden">

                <div className="absolute inset-0 z-0">
                    <img
                        src="/guardimage2.png"
                        alt="Security Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-dark/80" />
                </div>


                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
                    >
                        Professional Security <br />
                        <span className="text-accent-gold">You Can Trust</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto mb-10"
                    >
                        Safeguarding your people, property, and peace of mind with trained professionals and modern surveillance solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button to="/services" variant="primary">Request Security Service</Button>
                        <Button to="/contact" variant="outline">Contact Us</Button>
                    </motion.div>
                </div>
            </section>


            <section className="relative z-20 -mt-20 pb-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={Clock}
                            title="24/7 Protection"
                            description="Round-the-clock security monitoring and guard services for complete peace of mind."
                            delay={0}
                        />
                        <FeatureCard
                            icon={Users}
                            title="Trained Guards"
                            description="Highly disciplined, physically fit, and professionally trained security personnel."
                            delay={0.1}
                        />
                        <FeatureCard
                            icon={Shield}
                            title="Event Security"
                            description="Specialized crowd control and VIP protection for events of all sizes."
                            delay={0.2}
                        />
                        <FeatureCard
                            icon={Camera}
                            title="Surveillance"
                            description="State-of-the-art CCTV and monitoring equipment installation and management."
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>


            <section className="py-24 bg-primary-dark">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <SectionTitle
                                title="Why Choose Ethio Sabadoor?"
                                subtitle="We combine traditional security discipline with modern technology to provide unmatched protection."
                                align="left"
                                className="mb-8"
                            />
                            <div className="space-y-4">
                                {[
                                    "Highly trained bodyguards with military background",
                                    "Fully equipped personnel with modern tactical gear",
                                    "Strict protocol-driven security operations",
                                    "Emergency & overnight rapid response teams",
                                    "Integrated surveillance solutions"
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle className="w-5 h-5 text-accent-gold shrink-0" />
                                        <span className="text-text-muted">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-10">
                                <Button to="/about" variant="outline">Learn More About Us</Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-accent-gold/20 rounded-lg blur-xl" />
                            <img
                                src="/guardimage.png"
                                alt="Security Team"
                                className="relative rounded-lg shadow-2xl border border-white/10"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>


            <section className="py-24 bg-primary-light">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle
                        title="Our Core Services"
                        subtitle="Comprehensive security solutions tailored to your specific needs."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServicePreviewCard
                            title="Manned Guarding"
                            description="Professional guards for residential, commercial, and industrial properties."
                            image="/guardimage3.jpeg"
                            delay={0}
                        />
                        <ServicePreviewCard
                            title="Event Security"
                            description="Crowd management and safety protocols for concerts, meetings, and public gatherings."
                            image="/Eventsecurity.jpeg"
                            delay={0.2}
                        />
                        <ServicePreviewCard
                            title="Surveillance Systems"
                            description="Installation and monitoring of CCTV, IP cameras, and alarm systems."
                            image="/securitycamera.jpg"
                            delay={0.4}
                        />
                    </div>

                    <div className="text-center mt-12">
                        <Button to="/services" variant="primary">View All Services</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
