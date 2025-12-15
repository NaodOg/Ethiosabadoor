import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Shield, Users, Moon, Star, Calendar, UserCheck } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
        className="bg-primary-light p-8 rounded-xl border border-white/5 relative overflow-hidden group"
    >
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon size={100} />
        </div>
        <div className="w-14 h-14 bg-primary-dark rounded-full flex items-center justify-center mb-6 group-hover:bg-accent-gold/20 transition-colors">
            <Icon className="w-7 h-7 text-accent-gold" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-white mb-4">{title}</h3>
        <p className="text-text-muted leading-relaxed">{description}</p>
    </motion.div>
);

const Services = () => {
    const services = [
        {
            icon: UserCheck,
            title: "Executive Protection",
            description: "Elite security services for business leaders and executives. Our experienced team provides comprehensive protection tailored to your specific needs and lifestyle."
        },
        {
            icon: Users,
            title: "Family Protection",
            description: "Comprehensive security for families and their loved ones. We provide discrete protection services that allow your family to live comfortably while staying safeguarded."
        },
        {
            icon: Shield,
            title: "Travel Escort Protection",
            description: "Professional security escorts for domestic travel. We ensure your safety during transit and at destinations with comprehensive travel risk assessments."
        },
        {
            icon: UserCheck,
            title: "Personal Bodyguards",
            description: "Elite protection for VIPs, executives, and individuals requiring heightened security. Our bodyguards are discreet, highly trained, and vigilant."
        },
        {
            icon: Moon,
            title: "Emergency & Overnight",
            description: "Rapid response teams and overnight patrols to secure your property during vulnerable hours. We provide peace of mind while you sleep."
        },
        {
            icon: Calendar,
            title: "Short-term Security",
            description: "Flexible security solutions for one-time events, construction sites, or temporary requirements. Get professional protection exactly when you need it."
        },
        {
            icon: null,
            title: "",
            description: "",
            hidden: true
        },
        {
            icon: Star,
            title: "VIP Protocol Protection",
            description: "Specialized services that adhere to strict protocols for high-profile clients, ensuring safety without compromising on etiquette or privacy.",
            isCentered: true
        },
        {
            icon: null,
            title: "",
            description: "",
            hidden: true
        }
    ];

    return (
        <div className="min-h-screen bg-primary-dark">
            <section className="pt-36 pb-12 bg-primary-light border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <SectionTitle title="Our Security Services" subtitle="Tailored protection for every situation." animateOnRender={true} />
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            if (service.hidden) {
                                // Return empty grid cell to maintain layout
                                return <div key={`empty-${index}`} className="opacity-0 pointer-events-none" style={{visibility: "hidden"}}></div>;
                            }
                            // Find the actual index among non-hidden items for the animation
                            const visibleIndex = services.slice(0, index).filter(s => !s.hidden).length;

                            // Special styling for VIP Protocol Protection to center it in the last row
                            if (service.isCentered) {
                                return <div key={index} className="lg:col-start-2 lg:col-span-1">
                                    <ServiceCard {...service} index={visibleIndex} />
                                </div>;
                            }

                            return <ServiceCard key={index} {...service} index={visibleIndex} />;
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
