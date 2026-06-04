import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Events() {
  const [activeAcc, setActiveAcc] = useState(0); // Index of active item
  const [counts, setCounts] = useState({ satisfaction: 0, eventsHeld: 0 });
  const countsRef = useRef(null);

  const accordionItems = [
    {
      title: 'Corporate Dinners & Business Gatherings',
      text: 'Impress clients or reward your team with a tailored dining experience featuring our signature seafood selections.'
    },
    {
      title: 'Birthday Parties & Anniversaries',
      text: 'Celebrate your special life moments in a vibrant coastal setting with menus customized to your taste.'
    },
    {
      title: 'Engagements & Rehearsal Dinners',
      text: 'Start your forever in an elegant atmosphere with world-class seafood and exceptional service.'
    }
  ];

  useEffect(() => {
    let observer;
    if (countsRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const targets = { satisfaction: 98, eventsHeld: 358 };
              const duration = 2000;
              const frameRate = 1000 / 60;
              const totalFrames = Math.round(duration / frameRate);
              let frame = 0;

              const timer = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;

                setCounts({
                  satisfaction: Math.min(Math.round(targets.satisfaction * progress), targets.satisfaction),
                  eventsHeld: Math.min(Math.round(targets.eventsHeld * progress), targets.eventsHeld)
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
      observer.observe(countsRef.current);
    }
    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-white text-left" id="events-section">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          <div data-aos="fade-right">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">Private Events</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-[#050B17] leading-tight mb-6">
              Host unforgettable gatherings with coastal charm
            </h2>
            
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-8">
              Whether it's an intimate dinner, corporate function, or milestone celebration, our stunning venue and expertly crafted seafood menu set the stage.
            </p>

            <div className="space-y-0 mb-10">
              {accordionItems.map((item, idx) => {
                const isActive = activeAcc === idx;
                return (
                  <div key={idx} className="border-b border-gray-100 py-4 group">
                    <button 
                      onClick={() => setActiveAcc(isActive ? -1 : idx)}
                      className="w-full flex items-center gap-4 text-left font-bold text-lg text-[#050B17] outline-none"
                    >
                      <span className={`w-7 h-7 rounded-md text-white flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isActive ? 'bg-[#050B17]' : 'bg-red-600'
                      }`}>
                        <i className={`fas ${isActive ? 'fa-minus' : 'fa-plus'} text-[10px]`}></i>
                      </span>
                      {item.title}
                    </button>
                    <div 
                      className="transition-all duration-500 overflow-hidden"
                      style={{ 
                        maxHeight: isActive ? '120px' : '0px', 
                        opacity: isActive ? 1 : 0 
                      }}
                    >
                      <p className="pt-3 text-gray-500 text-sm md:text-base leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-4 bg-red-600 hover:bg-[#050B17] text-white px-6 sm:px-8 py-2 rounded-full font-bold transition-all duration-500 shadow-xl shadow-red-100"
            >
              <span className="text-sm">Book An Event</span>
              <span className="bg-white text-red-600 w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-500">
                <i className="fas fa-arrow-right arrow-right text-[10px]"></i>
              </span>
            </Link>
          </div>

          <div ref={countsRef} className="relative w-full text-center" data-aos="fade-left">
            <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[4/3] md:aspect-[16/10]">
              <img src="/images/events-image.jpg" className="w-full h-full object-cover" alt="Private Events" />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

            <div className="absolute bottom-4 sm:bottom-8 left-4 right-4 sm:left-8 sm:right-8 grid grid-cols-2 gap-3 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 text-center text-white shadow-2xl">
                <h3 className="text-2xl sm:text-4xl font-black mb-1">{counts.satisfaction}%</h3>
                <p className="text-white/80 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">Satisfaction Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 text-center text-white shadow-2xl">
                <h3 className="text-2xl sm:text-4xl font-black mb-1">{counts.eventsHeld}+</h3>
                <p className="text-white/80 text-[8px] sm:text-[10px] font-bold uppercase tracking-widest">Events Held</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
