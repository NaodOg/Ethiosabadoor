import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { Shield, Users, Moon, Star, Calendar, UserCheck } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
            icon: Users,
            title: "Event Security",
            description: "Comprehensive crowd control and safety management for concerts, clubs, corporate meetings, and public gatherings. We ensure your event runs smoothly without disruption."
        },
        {
            icon: Shield,
            title: "Corporate Security",
            description: "Protecting your business assets, employees, and sensitive information. Our guards are trained to maintain a professional presence suitable for office environments."
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
            icon: Star,
            title: "VIP Protocol Protection",
            description: "Specialized services that adhere to strict protocols for high-profile clients, ensuring safety without compromising on etiquette or privacy."
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
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
