import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Camera, Radio, Scan, Dog, Video, Wifi } from 'lucide-react';

const EquipmentCard = ({ icon: Icon, title, description, image, index, imageClass = "w-full h-full object-cover" }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        className="bg-primary-light rounded-xl overflow-hidden border border-white/5 group"
    >
        <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-transparent transition-colors z-10" />
            <img
                src={image}
                alt={title}
                className={`${imageClass} transition-transform duration-500 group-hover:scale-110`}
            />
            <div className="absolute top-4 right-4 z-20 bg-primary-dark/80 p-2 rounded-full backdrop-blur-sm">
                <Icon className="w-5 h-5 text-accent-gold" />
            </div>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-serif font-bold text-white mb-2">{title}</h3>
            <p className="text-text-muted text-sm mb-6">{description}</p>
            <div className="flex gap-3">
                <Button to="/contact" variant="outline" className="w-full text-xs py-2">Get Quote</Button>
            </div>
        </div>
    </motion.div>
);

const Equipment = () => {
    const equipment = [
        {
            icon: Video,
            title: "CCTV Cameras",
            description: "High-definition indoor and outdoor cameras with night vision and motion detection capabilities.",
            image: "/cctvcam.png",
            imageClass: "w-full h-full object-contain p-2"
        },
        {
            icon: Wifi,
            title: "IP Cameras",
            description: "Networked cameras allowing remote monitoring from any device, anywhere in the world.",
            image: "/ipcam.png",
            imageClass: "w-full h-full object-contain p-2"
        },
        {
            icon: Camera,
            title: "Body Cameras",
            description: "Wearable recording devices for guards to document patrols and incidents.",
            image: "/bodycam.png"
        },
        {
            icon: Radio,
            title: "Radio Systems",
            description: "Long-range two-way radios for instant communication between team members.",
            image: "/radiosystem.jpg"
        },
        {
            icon: Scan,
            title: "Metal Detectors",
            description: "Handheld and walk-through metal detectors for screening at entry points.",
            image: "/metaldetector.jpg"
        },
        {
            icon: Dog,
            title: "K9 Units",
            description: "Trained security dogs with tactical gear for detection and patrol support.",
            image: "/k9unit.jpg"
        }
    ];

    return (
        <div className="min-h-screen bg-primary-dark">
            <section className="pt-36 pb-12 bg-primary-light border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <SectionTitle
                        title="Surveillance & Equipment"
                        subtitle="Modern technology to enhance safety and monitoring."
                        animateOnRender={true}
                    />
                    <p className="text-text-muted max-w-2xl mx-auto -mt-6 mb-6">
                        In addition to professional guard services, Ethio Sabadoor provides modern surveillance equipment installation and maintenance.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {equipment.map((item, index) => (
                            <EquipmentCard key={index} {...item} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Equipment;
