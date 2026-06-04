import React from 'react';
import { Link } from 'react-router-dom';

export default function Banner({ title }) {
  return (
    <section 
      className="relative h-[350px] md:h-[420px] flex items-center justify-center bg-cover bg-center overflow-hidden" 
      style={{ backgroundImage: "url('/images/banner.jpeg')" }}
    >
      <div 
        className="absolute inset-0 z-10" 
        style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.85) 100%)' }}
      >
      </div>

      <div className="relative z-20 text-center text-white px-4 pt-33 sm:pt-33">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-1 sm:mb-3">
          {title}
        </h1>
        
        <div className="flex items-center justify-center gap-1 sm:gap-3 text-[7px] md:text-[10px] font-bold tracking-[0.3em] uppercase">
          <Link to="/" className="text-white/70 hover:text-red-500 transition-colors">Home</Link>
          <span className="text-red-500">/</span>
          <span className="text-white">{title}</span>
        </div>
      </div>
    </section>
  );
}
