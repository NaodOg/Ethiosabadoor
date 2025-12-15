import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-dark border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Shield className="w-8 h-8 text-accent-gold" />
                            <div className="flex flex-col">
                                <span className="text-xl font-serif font-bold text-white leading-none tracking-wide">ETHIO SABADOOR</span>
                                <span className="text-[0.6rem] text-accent-gold uppercase tracking-widest">Security Services</span>
                            </div>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Safeguarding your people, property, and peace of mind with trained professionals and modern surveillance solutions.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://web.facebook.com/people/EthioSabadoorSecurity/61551412222829/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-gold transition-colors"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/ethio_sabadoor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-gold transition-colors"><Instagram size={20} /></a>
                            <a href="https://t.me/ethiosabadoor" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-gold transition-colors"><Send size={20} /></a>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-white font-serif font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-text-muted hover:text-accent-gold transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/services" className="text-text-muted hover:text-accent-gold transition-colors text-sm">Security Services</Link></li>
                            <li><Link to="/equipment" className="text-text-muted hover:text-accent-gold transition-colors text-sm">Surveillance Equipment</Link></li>

                            <li><Link to="/contact" className="text-text-muted hover:text-accent-gold transition-colors text-sm">Contact Us</Link></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-serif font-bold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            <li className="text-text-muted text-sm">Event Security</li>
                            <li className="text-text-muted text-sm">Corporate Protection</li>
                            <li className="text-text-muted text-sm">Personal Bodyguards</li>
                            <li className="text-text-muted text-sm">CCTV Installation</li>
                            <li className="text-text-muted text-sm">Emergency Response</li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-serif font-bold mb-6">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                                <div className="text-text-muted text-sm">
                                    <p>09 91 25 94 65</p>
                                    <p>09 91 26 23 65</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                                <span className="text-text-muted text-sm">Ethiosabadoor@gmail.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                                <span className="text-text-muted text-sm">Addis Ababa, Ethiopia</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-text-muted text-xs">
                        © {new Date().getFullYear()} Ethio Sabadoor Security Services. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-text-muted hover:text-white text-xs">Privacy Policy</a>
                        <a href="#" className="text-text-muted hover:text-white text-xs">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
