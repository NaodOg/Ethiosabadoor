import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Phone, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-primary-dark">
            <section className="pt-36 pb-12 bg-primary-light border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <SectionTitle title="Contact Us" subtitle="Get in touch for a free consultation and quote." />
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="order-2 lg:order-1"
                        >
                            <h3 className="text-2xl font-serif font-bold text-white mb-8">Get in Touch</h3>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0 border border-white/10">
                                        <Phone className="w-6 h-6 text-accent-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                                        <p className="text-text-muted">09 91 25 94 65</p>
                                        <p className="text-text-muted">09 91 26 23 65</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0 border border-white/10">
                                        <Mail className="w-6 h-6 text-accent-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                                        <p className="text-text-muted">Ethiosabadoor@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0 border border-white/10">
                                        <MapPin className="w-6 h-6 text-accent-gold" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                                        <p className="text-text-muted">Addis Ababa, Ethiopia</p>
                                    </div>
                                </div>

                                <div className="pt-8">
                                    <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
                                    <div className="flex gap-4">
                                        <a href="https://web.facebook.com/people/EthioSabadoorSecurity/61551412222829/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white hover:bg-accent-blue hover:text-white transition-colors">
                                            <Facebook size={20} />
                                        </a>
                                        <a href="https://www.instagram.com/ethio_sabadoor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white hover:bg-pink-600 hover:text-white transition-colors">
                                            <Instagram size={20} />
                                        </a>
                                        <a href="https://t.me/ethiosabadoor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-white hover:bg-cyan-500 hover:text-white transition-colors">
                                            <Send size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>


                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="bg-primary-light p-8 rounded-xl border border-white/5 order-1 lg:order-2"
                        >
                            <h3 className="text-2xl font-serif font-bold text-white mb-4">Send a Message</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-medium text-text-muted mb-1">Name</label>
                                        <input type="text" className="w-full bg-primary-dark border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:border-accent-gold transition-colors text-sm" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-text-muted mb-1">Phone</label>
                                        <input type="tel" className="w-full bg-primary-dark border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:border-accent-gold transition-colors text-sm" placeholder="Your Phone" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-text-muted mb-1">Email</label>
                                    <input type="email" className="w-full bg-primary-dark border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:border-accent-gold transition-colors text-sm" placeholder="Your Email" />
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-text-muted mb-1">Service Type</label>
                                    <select className="w-full bg-primary-dark border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:border-accent-gold transition-colors text-sm">
                                        <option>Select a service...</option>
                                        <option>Personal Bodyguard</option>
                                        <option>VIP Protection Team</option>
                                        <option>Executive Protection</option>
                                        <option>Family Protection</option>
                                        <option>Travel Escort Protection</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-medium text-text-muted mb-1">Message</label>
                                    <textarea rows="3" className="w-full bg-primary-dark border border-white/10 rounded-md px-3 py-2 text-white focus:outline-none focus:border-accent-gold transition-colors text-sm" placeholder="How can we help you?"></textarea>
                                </div>

                                <Button type="submit" variant="primary" className="w-full py-2">Send Message</Button>
                            </form>
                        </motion.div>
                    </div>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="mt-20 h-96 bg-primary-light rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-primary-dark/50 z-10 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-12 h-12 text-accent-gold mx-auto mb-4" />
                                <p className="text-white font-bold text-xl">Addis Ababa, Ethiopia</p>
                                <p className="text-text-muted">Map integration coming soon</p>
                            </div>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
                            alt="Map Background"
                            className="absolute inset-0 w-full h-full object-cover opacity-30"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
