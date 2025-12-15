import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        { src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2070&auto=format&fit=crop", category: "Guards" },
        { src: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=2009&auto=format&fit=crop", category: "Team" },
        { src: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop", category: "Equipment" },
        { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", category: "Events" },
        { src: "https://images.unsplash.com/photo-1584467735867-42f745c21718?q=80&w=1974&auto=format&fit=crop", category: "Guards" },
        { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop", category: "Events" },
        { src: "https://images.unsplash.com/photo-1588702547923-7093a6c3f067?q=80&w=2070&auto=format&fit=crop", category: "Equipment" },
        { src: "https://images.unsplash.com/photo-1628519637840-022066f11463?q=80&w=2070&auto=format&fit=crop", category: "Training" },
        { src: "https://images.unsplash.com/photo-1558287333-a8c29007207c?q=80&w=2070&auto=format&fit=crop", category: "K9 Unit" },
    ];

    return (
        <div className="min-h-screen bg-primary-dark">
            <section className="pt-36 pb-12 bg-primary-light border-b border-white/5">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <SectionTitle title="Our Gallery" subtitle="A glimpse into our operations and dedication." animateOnRender={true} />
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                layoutId={`image-${index}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="relative aspect-video cursor-pointer overflow-hidden rounded-lg group"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.category}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-serif font-bold text-lg">{img.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-accent-gold transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <motion.img
                            layoutId={`image-${images.indexOf(selectedImage)}`}
                            src={selectedImage.src}
                            alt={selectedImage.category}
                            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
