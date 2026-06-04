import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/videos/seabud-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[1]" style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.9) 100%)'
        }}></div>
      </div>

      <div className="relative z-20 w-full pt-48 pb-10 lg:pb-11">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 lg:pb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="w-full lg:max-w-[650px] text-left">
              <div className="inline-flex items-center gap-2 rounded-full px-0 py-2 mb-3">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-white font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs md:text-sm leading-none">
                  Savor the best of the sea
                </span>
              </div>
              <h1 className="text-white font-extrabold mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl 2xl:leading-tight">
                Fresh seafood crafted with <br />
                <span className="text-red-500">passion,</span> served with <br className="hidden lg:block" /> elegance
              </h1>
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/contact" 
                  className="group flex items-center gap-3 bg-red-600 hover:bg-white text-white hover:text-black px-5 py-2.5 rounded-full font-bold transition-all duration-300 text-sm"
                >
                  Get Started
                  <span className="bg-white group-hover:bg-black text-red-600 group-hover:text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                    <i className="fas fa-arrow-right arrow-right text-[10px]"></i>
                  </span>
                </Link>
                <Link 
                  to="/menu" 
                  className="group flex items-center gap-3 bg-white text-black hover:text-black px-5 py-2.5 rounded-full font-bold transition-all duration-300 text-sm border border-slate-200"
                >
                  Explore our Menu
                  <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                    <i className="fas fa-arrow-right arrow-right text-[10px]"></i>
                  </span>
                </Link>
              </div>
            </div>

            <div className="w-full lg:w-auto flex-shrink-0">
              <div className="w-full max-w-[480px] lg:max-w-none lg:w-[420px] mx-auto lg:ml-auto rounded-[2rem] p-6 sm:p-8 text-white bg-white/10 backdrop-blur-md shadow-2xl border border-white/10 text-left">
                <div className="flex justify-between items-center mb-6 pb-5 border-b border-white/10">
                  <h3 className="text-lg sm:text-xl font-bold tracking-wide text-white">
                    Working Hours
                  </h3>
                  <i className="far fa-clock text-2xl text-white"></i>
                </div>
               
                <div className="space-y-4 sm:space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm sm:text-base">Mon - Fri</span>
                    <span className="text-sm sm:text-base font-bold">09:00 AM - 09:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm sm:text-base">Saturday</span>
                    <span className="text-sm sm:text-base font-bold">10:00 AM - 08:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm sm:text-base">Sunday</span>
                    <span className="text-sm sm:text-base font-bold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
