import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

const Portfolio = () => {
  // These are the compressed WebP versions of your images from the public/images folder:
  const displayImages = [
    "/images/DSC00027.webp",
    "/images/DSC00043.webp",
    "/images/DSC00063.webp",
    "/images/DSC00102-Recovered.webp",
    "/images/DSC00132.webp",
    "/images/DSC00144-copy.webp",
    "/images/DSC00199.webp",
    "/images/DSC00219.webp",
    "/images/DSC00223.webp",
    "/images/DSC00230.webp",
    "/images/DSC00254.webp",
    "/images/DSC04952.webp",
    "/images/IMG_4620.webp",
    "/images/IMG_4621.webp",
    "/images/IMG_4622.webp",
    "/images/IMG_4623.webp",
    "/images/IMG_5330.webp",
    "/images/IMG_5331.webp",
    "/images/IMG_5332.webp",
    "/images/IMG_5333.webp",
    "/images/IMG_5334.webp",
    "/images/IMG_5335.webp",
    "/images/IMG_5336.webp",
    "/images/IMG_5338.webp",
    "/images/IMG_5339.webp",
    "/images/IMG_5340.webp"
  ];

  return (
    <div className="min-h-screen bg-primary-dark">
      <section className="pt-36 pb-12 bg-primary-light border-b border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionTitle
            title="Our Portfolio"
            subtitle="A showcase of our security services in action."
            animateOnRender={true}
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border border-white/10 group hover:shadow-2xl hover:shadow-accent-gold/10 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image}
                    alt={`Portfolio item ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;