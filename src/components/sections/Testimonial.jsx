import React, { useState, useEffect } from 'react';

export default function Testimonial() {
  const slides = [
    {
      text: 'From the moment we walked in, we were warmly welcomed and seated by the window with a lovely view. The aroma of fresh seafood filled the air, and every dish we ordered was flavorful.',
      name: 'Wade L Warren',
      role: 'Happy Customer'
    },
    {
      text: 'The best seafood experience I’ve had in years. The lobster was cooked to perfection and the service was impeccable. Truly a coastal gem that captures the essence of fresh dining.',
      name: 'Jane Cooper',
      role: 'Food Critic'
    },
    {
      text: 'Exceptional quality and atmosphere. We celebrated our anniversary here and the staff went above and beyond. The grilled sea bream is a must-try for any seafood lover.',
      name: 'Robert Fox',
      role: 'Satisfied Guest'
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="testimonial-section" className="bg-white">
      <div className="flex flex-col lg:flex-row w-full rounded-t-[40px] lg:rounded-t-[80px] overflow-hidden min-h-[600px] lg:min-h-[700px]">
        
        <div className="w-full lg:w-1/2 h-[400px] lg:h-auto">
          <img src="/images/testimonials-image.jpg" className="w-full h-full object-cover" alt="Dining" />
        </div>
    
        <div className="w-full lg:w-1/2 bg-[#0b1230] flex justify-center items-center px-6 py-14 lg:px-20 text-center text-white">
          <div className="max-w-[600px]">
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-white/60 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs">Our Testimonials</span>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-10">
              Stories shared by those who dined with us
            </h2>

            <div className="text-red-500 text-4xl mb-6">
              <i className="fas fa-quote-right"></i>
            </div>

            <div id="t-slider">
              {slides.map((slide, index) => {
                const isActive = index === current;
                return (
                  <div 
                    key={index} 
                    className={`t-slide text-center ${isActive ? 'block' : 'hidden'}`}
                    style={isActive ? { animation: 'tFade 0.7s ease-out forwards' } : {}}
                  >
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 italic">
                      "{slide.text}"
                    </p>
                    <h4 className="text-white text-xl font-bold">{slide.name}</h4>
                    <p className="text-white/40 text-sm uppercase tracking-widest mt-1">{slide.role}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex justify-center gap-2">
              {slides.map((_, index) => {
                const isActive = index === current;
                return (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full bg-white/20 transition-all duration-500 ease-in-out cursor-pointer outline-none ${
                      isActive ? 'w-8 rounded-xl bg-red-500' : 'w-2'
                    }`}
                  ></button>
                );
              })}
            </div>

          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes tFade {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
