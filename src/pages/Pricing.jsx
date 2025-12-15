import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { CheckCircle, AlertCircle, Clock, MapPin } from 'lucide-react';

const Pricing = () => {
    return (
        <div className="min-h-screen bg-primary-dark">
            <section className="pt-36 pb-12 bg-primary-light border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <SectionTitle title="Pricing Factors" subtitle="Transparent and customized quotes based on your needs." animateOnRender={true} />
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-serif font-bold text-white mb-6">How We Determine Cost</h3>
                            <p className="text-text-muted mb-8">
                                Every security requirement is unique. We provide tailored quotes based on several key factors to ensure you get the best value and protection.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0 border border-white/10">
                                        <Clock className="w-6 h-6 text-accent-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Duration & Timing</h4>
                                        <p className="text-text-muted text-sm">Overnight shifts, emergency call-outs, and holiday coverage may incur different rates compared to standard business hours.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0 border border-white/10">
                                        <AlertCircle className="w-6 h-6 text-accent-red" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Risk Level & Expertise</h4>
                                        <p className="text-text-muted text-sm">High-risk environments requiring guards with military backgrounds or specialized tactical training will be priced accordingly.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0 border border-white/10">
                                        <MapPin className="w-6 h-6 text-accent-blue" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Location & Logistics</h4>
                                        <p className="text-text-muted text-sm">Remote locations or sites requiring vehicle patrols and additional logistical support.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <Button to="/contact" variant="primary">Get a Custom Quote</Button>
                            </div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="bg-primary-light p-8 rounded-xl border border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <CheckCircle size={150} />
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-white mb-6">Our Service Guarantee</h3>

                            <div className="space-y-6">
                                <div className="bg-primary-dark p-6 rounded-lg border border-white/5">
                                    <h4 className="text-lg font-bold text-white mb-2 text-accent-gold">Guard Replacement</h4>
                                    <p className="text-text-muted text-sm">If a guard is unable to report for duty, we guarantee a replacement within 2 hours to ensure continuous coverage.</p>
                                </div>

                                <div className="bg-primary-dark p-6 rounded-lg border border-white/5">
                                    <h4 className="text-lg font-bold text-white mb-2 text-accent-gold">Rapid Response</h4>
                                    <p className="text-text-muted text-sm">Our emergency response team is on standby 24/7, ready to deploy immediately upon request.</p>
                                </div>

                                <div className="bg-primary-dark p-6 rounded-lg border border-white/5">
                                    <h4 className="text-lg font-bold text-white mb-2 text-accent-gold">Satisfaction Promise</h4>
                                    <p className="text-text-muted text-sm">We conduct regular site inspections and client feedback sessions to ensure our high standards are maintained.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
