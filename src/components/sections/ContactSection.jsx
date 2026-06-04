import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function ContactSection() {
  const [counts, setCounts] = useState({
    dishes: 0,
    rating: 0.0,
    guests: 0,
    fishermen: 0
  });

  const ref = useRef(null);

  useEffect(() => {
    let observer;
    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const targets = {
                dishes: 85,
                rating: 4.9,
                guests: 35,
                fishermen: 25
              };
              
              const duration = 2000;
              const frameRate = 1000 / 60;
              const totalFrames = Math.round(duration / frameRate);
              let frame = 0;

              const timer = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                // Ease out cubic
                const ease = 1 - Math.pow(1 - progress, 3);

                setCounts({
                  dishes: Math.min(Math.round(targets.dishes * ease), targets.dishes),
                  rating: Math.min(parseFloat((targets.rating * ease).toFixed(1)), targets.rating),
                  guests: Math.min(Math.round(targets.guests * ease), targets.guests),
                  fishermen: Math.min(Math.round(targets.fishermen * ease), targets.fishermen)
                });

                if (frame === totalFrames) {
                  clearInterval(timer);
                }
              }, frameRate);

              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(ref.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={ref}
      className="relative pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 rounded-t-[40px] lg:rounded-t-[80px] overflow-hidden text-left" 
      id="contact-cta"
    >
      <div className="absolute inset-0 z-0">
        <img src="/images/cta-box-bg.jpg" className="w-full h-full object-cover" alt="CTA Background" />
        <div className="absolute inset-0 bg-[#111330]/80 z-10"></div>
        <div className="absolute inset-0 backdrop-blur-[1px] z-20"></div>
      </div>

      <div className="container relative z-30 mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-24">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="text-white font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">Contact Us Today!</span>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-6">
            Reach out and let the flavors begin - your next seafood experience
          </h2>
          
          <p className="text-gray-200 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Whether it's an intimate dinner, corporate function, or milestone celebration, our stunning venue and expertly crafted seafood menu set the stage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="group flex items-center justify-center gap-3 bg-red-600 text-white hover:bg-white hover:text-[#111330] px-6 py-2.5 rounded-full font-bold transition-all duration-500 w-full sm:w-auto"
            >
              <span className="text-sm">Contact Us Now</span>
              <span className="bg-white group-hover:bg-[#111330] text-red-600 group-hover:text-white w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 transform">
                <i className="fas fa-arrow-right arrow-right text-[10px]"></i>
              </span>
            </Link>

            <Link 
              to="/booktable" 
              className="group flex items-center justify-center gap-3 bg-white text-black hover:bg-red-600 hover:text-white px-6 py-2.5 rounded-full font-bold transition-all duration-500 w-full sm:w-auto"
            >
              <span className="text-sm">Reserve A Table</span>
              <span className="bg-black group-hover:bg-white text-white group-hover:text-red-600 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 transform">
                <i className="fas fa-arrow-right arrow-right text-[10px]"></i>
              </span>
            </Link>
          </div>
        </div>

        <div className="w-full border-b border-white/10 mb-12 sm:mb-16 lg:mb-22"></div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 sm:gap-x-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 group">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0 transition-transform group-hover:-translate-y-1">
              <i className="fas fa-utensils text-red-600 text-2xl sm:text-3xl"></i>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-1">{counts.dishes}+</h3>
              <p className="text-gray-200 text-[10px] sm:text-sm leading-snug">Unique Signature Dishes Curated by Our Team</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 group">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0 transition-transform group-hover:-translate-y-1">
              <i className="fas fa-star text-red-600 text-2xl sm:text-3xl"></i>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-1">{counts.rating.toFixed(1)}+</h3>
              <p className="text-gray-200 text-[10px] sm:text-sm leading-snug">Customer Ratings Reflecting Consistency</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 group">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0 transition-transform group-hover:-translate-y-1">
              <i className="fas fa-users text-red-600 text-2xl sm:text-3xl"></i>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-1">{counts.guests}k+</h3>
              <p className="text-gray-200 text-[10px] sm:text-sm leading-snug">Guests Who've Dined With Us and Shared Moments</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 group">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0 transition-transform group-hover:-translate-y-1">
              <i className="fas fa-ship text-red-600 text-2xl sm:text-3xl"></i>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-1">{counts.fishermen}+</h3>
              <p className="text-gray-200 text-[10px] sm:text-sm leading-snug">Local Fishermen Suppliers We Partner With</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
