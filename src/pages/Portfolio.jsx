import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';

const Portfolio = () => {
  // These are the images from your public/images folder:
  const displayImages = [
    "/images/DSC00027.jpg",
    "/images/DSC00043.jpg",
    "/images/DSC00063.jpg",
    "/images/DSC00102-Recovered.jpg",
    "/images/DSC00132.jpg",
    "/images/DSC00144.jpg",
    "/images/DSC00199.jpg",
    "/images/DSC00219.jpg",
    "/images/DSC00223.jpg",
    "/images/DSC00230.jpg",
    "/images/DSC00254.jpg",
    "/images/DSC04952.jpg",
    "/images/IMG_4620.JPG",
    "/images/IMG_4621.JPG",
    "/images/IMG_4622.JPG",
    "/images/IMG_4623.JPG",
    "/images/IMG_5330.PNG",
    "/images/IMG_5331.PNG",
    "/images/IMG_5332.PNG",
    "/images/IMG_5333.PNG",
    "/images/IMG_5334.PNG",
    "/images/IMG_5335.PNG",
    "/images/IMG_5336.PNG",
    "/images/IMG_5338.PNG",
    "/images/IMG_5339.PNG",
    "/images/IMG_5340.PNG"
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