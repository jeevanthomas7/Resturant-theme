import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const [counts, setCounts] = useState({
    repeatRate: 0,
    experience: 0,
    customers: 0,
    satisfaction: 0
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    let observer;
    if (sectionRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const targets = {
                repeatRate: 95,
                experience: 25,
                customers: 10,
                satisfaction: 98
              };
              
              const duration = 2000;
              const frameRate = 1000 / 60;
              const totalFrames = Math.round(duration / frameRate);
              let frame = 0;

              const timer = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;

                setCounts({
                  repeatRate: Math.min(Math.round(targets.repeatRate * progress), targets.repeatRate),
                  experience: Math.min(Math.round(targets.experience * progress), targets.experience),
                  customers: Math.min(Math.round(targets.customers * progress), targets.customers),
                  satisfaction: Math.min(Math.round(targets.satisfaction * progress), targets.satisfaction)
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
      observer.observe(sectionRef.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#FCFBF7] rounded-t-[40px] lg:rounded-t-[80px] overflow-hidden" 
      id="about-section"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center">
          
          <div className="relative w-full max-w-[580px] h-[440px] sm:h-[560px] mx-auto text-left" data-aos="fade-right" data-aos-duration="1000">
            
            <div className="w-[87%] h-[300px] sm:h-[490px] rounded-[45px] overflow-hidden shadow-xl z-10 relative">
              <img src="/images/about1.jpg" className="w-full h-full object-cover" alt="Interior" />
            </div>
            
            <div className="absolute top-5 -right-2 sm:right-0 bg-red-500 w-[45px] sm:w-[70px] h-[170px] sm:h-[210px] rounded-xl z-30 flex flex-col items-center justify-center text-white shadow-2xl" data-aos="zoom-in" data-aos-delay="400">
              <span className="text-[9px] font-extrabold uppercase tracking-widest mb-3 [writing-mode:vertical-rl] rotate-180">Customer Repeat Rate</span>
              <span className="text-lg sm:text-2xl font-black">{counts.repeatRate}%</span>
            </div>

            <div className="absolute bottom-0 right-0 w-[65%] h-[220px] sm:h-[320px] rounded-[45px] border-[8px] sm:border-[12px] border-white overflow-hidden shadow-xl z-20" data-aos="fade-up" data-aos-delay="200">
              <img src="/images/about-2.jpg" className="w-full h-full object-cover" alt="Chef" />
            </div>
            
            <Link 
              to="/contact" 
              className="absolute bottom-[60px] md:bottom-[100px] -left-4 md:-left-10 w-24 h-24 md:w-[135px] md:h-[135px] z-30 flex items-center justify-center group" 
              data-aos="zoom-in" 
              data-aos-delay="600"
            >
              <img 
                src="/images/contact-us-circle.svg" 
                className="w-full h-full animate-[spin_10s_linear_infinite]" 
                style={{ filter: 'invert(34%) sepia(91%) saturate(3048%) hue-rotate(345deg) brightness(97%) contrast(93%)' }}
                alt="contact circle"
              />
              <div className="absolute bg-red-500 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white text-[12px] md:text-lg shadow-lg group-hover:scale-110 transition-transform">
                <i className="fas fa-fish"></i>
              </div>
            </Link>
          </div>

          <div className="lg:pl-6 text-left">
            <div className="flex items-center gap-2 mb-6" data-aos="fade-left">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">About Us</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl mb-6 font-extrabold text-slate-900 leading-tight" data-aos="fade-left" data-aos-delay="100">
              Our story of freshness flavors and family tradition
            </h2>

            <p className="text-gray-600 text-base md:text-lg mb-10 leading-relaxed" data-aos="fade-left" data-aos-delay="200">
              Ocean's Delight began as a small seaside eatery and has grown into a destination for seafood lovers near and far. What hasn't changed is our devotion to honest food.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                  <i className="fas fa-check text-white text-[9px]"></i>
                </div>
                <span className="text-gray-700 text-sm font-bold">Freshly Baked with Care.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                  <i className="fas fa-check text-white text-[9px]"></i>
                </div>
                <span className="text-gray-700 text-sm font-bold">100% Quality You Can Taste!</span>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] border border-gray-200 shadow-xl p-6 md:p-8 mb-12" data-aos="fade-up" data-aos-delay="400">
              <div className="grid grid-cols-3 divide-x divide-gray-300 text-center">
                <div className="px-1 sm:px-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-1">
                    {counts.experience}+
                  </div>
                  <p className="text-gray-500 text-[8px] sm:text-[10px] uppercase font-bold tracking-tighter sm:tracking-normal leading-tight">Years Of Experience</p>
                </div>
                
                <div className="px-1 sm:px-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-1">
                    {counts.customers}k+
                  </div>
                  <p className="text-gray-500 text-[8px] sm:text-[10px] uppercase font-bold tracking-tighter sm:tracking-normal leading-tight">Happy Customers</p>
                </div>
                
                <div className="px-1 sm:px-2">
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-1">
                    {counts.satisfaction}%
                  </div>
                  <p className="text-gray-500 text-[8px] sm:text-[10px] uppercase font-bold tracking-tighter sm:tracking-normal leading-tight">Satisfaction Rate</p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="500">
              <Link 
                to="/about" 
                className="group inline-flex items-center gap-6 bg-red-600 hover:bg-slate-900 text-white pl-8 pr-2 py-2 rounded-full font-bold transition-all duration-500 shadow-lg"
              >
                <span className="text-sm tracking-widest uppercase">More About Us</span>
                <span className="bg-white text-red-600 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-500">
                  <i className="fas fa-arrow-right arrow-right text-[12px]"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
