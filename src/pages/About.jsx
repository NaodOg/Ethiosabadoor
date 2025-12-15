import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Flag, TrendingUp, Handshake } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-primary-dark">

            <section className="pt-36 pb-12 bg-primary-light border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <SectionTitle title="About Ethio Sabadoor" subtitle="Building trust through discipline and professionalism." animateOnRender={true} />
                </div>
            </section>


            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-serif font-bold text-white mb-6">Who We Are</h3>
                            <p className="text-text-muted mb-4 leading-relaxed">
                                Founded in 2023 and based in Addis Ababa, Ethio Sabadoor Security Services is committed to delivering high-quality security solutions. We pride ourselves on our professionalism, discipline, and the trust we build with our clients.
                            </p>
                            <p className="text-text-muted mb-4 leading-relaxed">
                                Our approach combines human expertise with modern technology to create safe environments where businesses can thrive and individuals can have peace of mind.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="relative h-80 rounded-lg overflow-hidden"
                        >
                            <img
                                src="/guardimage4.jpeg"
                                alt="Team Meeting"
                                loading="eager"
                                className="absolute inset-0 w-full h-full object-cover object-top"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>


            <section className="py-20 bg-primary-light">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0 }}
                            whileHover={{ y: -10 }}
                            className="bg-primary-dark p-8 rounded-lg border border-white/5"
                        >
                            <Flag className="w-10 h-10 text-accent-gold mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">Our Mission</h4>
                            <p className="text-text-muted">To deliver quality security services that create safe environments, enabling our clients to focus on their success with absolute peace of mind.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-primary-dark p-8 rounded-lg border border-white/5"
                        >
                            <TrendingUp className="w-10 h-10 text-accent-red mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">What Drives Us</h4>
                            <p className="text-text-muted">We are driven by the wellbeing of our clients, the protection of their businesses, and the preservation of safety and stability in our community.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileHover={{ y: -10 }}
                            className="bg-primary-dark p-8 rounded-lg border border-white/5"
                        >
                            <Handshake className="w-10 h-10 text-accent-blue mb-4" />
                            <h4 className="text-xl font-bold text-white mb-3">Our Promise</h4>
                            <p className="text-text-muted">We promise unwavering dedication, rapid response to emergencies, and a team that is always prepared, trained, and equipped.</p>
                        </motion.div>
                    </div>
                </div>
            </section>


            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <SectionTitle title="Our Journey" />
                    <div className="max-w-3xl mx-auto relative border-l-2 border-white/10 ml-4 md:ml-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0 }}
                            className="mb-12 ml-8 relative"
                        >
                            <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-accent-gold border-4 border-primary-dark" />
                            <h4 className="text-xl font-bold text-white mb-2">2023</h4>
                            <p className="text-text-muted">Ethio Sabadoor Security Services was founded in Addis Ababa with a core team of elite security professionals.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-12 ml-8 relative"
                        >
                            <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-accent-blue border-4 border-primary-dark" />
                            <h4 className="text-xl font-bold text-white mb-2">2024</h4>
                            <p className="text-text-muted">Expanded operations to include event security and corporate protection services across the city.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="ml-8 relative"
                        >
                            <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-accent-red border-4 border-primary-dark animate-pulse" />
                            <h4 className="text-xl font-bold text-white mb-2">Present</h4>
                            <p className="text-text-muted">Launched comprehensive surveillance equipment services and advanced training programs. Continuing to grow and set new standards.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
