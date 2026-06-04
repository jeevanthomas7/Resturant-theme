import React from 'react';
import { Link } from 'react-router-dom';

export default function GallerySection() {
  const items = [
    { img: '/images/gallery/3.avif' },
    { img: '/images/gallery/5.avif' },
    { img: '/images/gallery/6.avif' },
    { img: '/images/gallery/4.jpg' },
    { img: '/images/gallery/7.jpeg' },
    { img: '/images/gallery/8.jpeg' }
  ];

  return (
    <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#FCFBF7]" id="gallery">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">Our Gallery</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-[#050B17] leading-tight">
            Savor the view - delicious dishes and unforgettable memories
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {items.map((item, index) => (
            <Link 
              key={index}
              to="/gallery" 
              className="group relative block overflow-hidden aspect-[4/3] rounded-[1.5rem] md:rounded-[2.5rem] w-full" 
              data-aos="fade-up"
            >
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="Gallery item"
              />
              <div className="absolute inset-0 bg-[#050B17]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-transparent rounded-full flex items-center justify-center text-white shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                  <i className="fas fa-arrow-right text-base md:text-xl -rotate-45"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
