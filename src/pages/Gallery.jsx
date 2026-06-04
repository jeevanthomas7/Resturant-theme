import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';

const images = [
  '4.jpg',
  '7.jpeg',
  '8.jpeg',
  '9.jpeg',
  'gallery-1.jpg',
  'gallery-2.jpg',
  'post-3.jpg',
  '3.avif',
  '5.avif'
];

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#FCFBF7]" id="gallery">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {images.map((img, index) => (
              <div
                key={index}
                className="gallery-card group relative block overflow-hidden aspect-[4/3] rounded-[1.5rem] md:rounded-[2.5rem] w-full cursor-pointer"
                data-aos="fade-up"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={`/images/gallery/${img}`}
                  alt={`Gallery ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#050B17]/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <div className="w-14 h-14 md:w-[70px] md:h-[70px] border border-white rounded-full flex items-center justify-center text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest transform translate-y-5 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                    View
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-white/10 backdrop-blur-2xl flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-4xl aspect-[4/3] bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 w-10 h-10 flex bg-black/30 rounded-full items-center justify-center text-white hover:text-red-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-[#050B17] shadow-xl hover:bg-red-500 hover:text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center text-[#050B17] shadow-xl hover:bg-red-500 hover:text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <img
              src={`/images/gallery/${images[currentIndex]}`}
              alt={`Gallery Expanded ${currentIndex + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}
