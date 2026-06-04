import React from 'react';
import { Link } from 'react-router-dom';

export default function WtWeDo() {
  return (
    <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#FCFBF7] -mt-10 relative z-30 text-left" id="features">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-10 md:mb-16 lg:mb-20">
          <div className="w-full lg:w-3/5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="text-gray-500 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
                What We Do
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-black text-[#050B17] leading-tight">
              Honoring coastal traditions with modern culinary creativity
            </h2>
          </div>

          <div className="w-full lg:w-2/5 text-left">
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-6">
              Every plate tells a story of dedication — to quality, to flavor, and to the ocean's bounty. Hand-selecting the finest local seafood to create chef-driven menus.
            </p>
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-4 bg-red-500 hover:bg-[#050B17] text-white px-5 sm:px-6 py-2 rounded-full font-bold transition-all duration-500 shadow-xl shadow-red-100"
            >
              <span className="text-xs sm:text-sm">Contact Us Now</span>
              <span className="bg-white text-red-600 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-transform duration-500">
                <i className="fas fa-arrow-right arrow-right text-[10px]"></i>
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          
          <div className="bg-[#cee2ee] aspect-square lg:aspect-[3/2] rounded-[1.5rem] sm:rounded-[3rem] p-4 sm:p-8 md:p-10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white text-red-500 rounded-xl flex items-center justify-center text-sm sm:text-xl"><i className="fas fa-cog"></i></div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] sm:text-xs group-hover:-rotate-45 transition-transform duration-500"><i class="fas fa-arrow-right"></i></div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-4xl font-black text-[#050B17] mb-1 sm:mb-2">98%</h3>
              <p className="text-[#050B17]/60 text-[10px] sm:text-base leading-tight sm:leading-normal">Whether its an intimate dinner, function, or milestone celebration.</p>
            </div>
          </div>

          <div className="aspect-square lg:aspect-[3/2] rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden shadow-xl">
            <img src="/images/why/wt1.jpg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="What we do 1" />
          </div>

          <div className="bg-[#111330] aspect-square lg:aspect-[3/2] rounded-[1.5rem] sm:rounded-[3rem] p-4 sm:p-8 md:p-10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 shadow-2xl">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-red-500 text-white rounded-xl flex items-center justify-center text-sm sm:text-xl"><i className="fas fa-utensils"></i></div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white text-[#050B17] rounded-full flex items-center justify-center text-[10px] sm:text-xs group-hover:-rotate-45 transition-transform duration-500"><i className="fas fa-arrow-right"></i></div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-4xl font-black text-white mb-1 sm:mb-2">10k+</h3>
              <p className="text-white/50 text-[10px] sm:text-base leading-tight sm:leading-normal">Whether its an intimate dinner, function, or milestone celebration.</p>
            </div>
          </div>

          <div className="aspect-square lg:aspect-[3/2] rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden shadow-xl">
            <img src="/images/why/wt-2.jpg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="What we do 2" />
          </div>

          <div className="bg-[#EF4444] aspect-square lg:aspect-[3/2] rounded-[1.5rem] sm:rounded-[3rem] p-4 sm:p-8 md:p-10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-500 shadow-2xl">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white text-red-500 rounded-xl flex items-center justify-center text-sm sm:text-xl"><i className="fas fa-globe-americas"></i></div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white text-[#050B17] rounded-full flex items-center justify-center text-[10px] sm:text-xs group-hover:-rotate-45 transition-transform duration-500"><i className="fas fa-arrow-right"></i></div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-4xl font-black text-white mb-1 sm:mb-2">256+</h3>
              <p className="text-white/80 text-[10px] sm:text-base leading-tight sm:leading-normal">Whether its an intimate dinner, function, or milestone celebration.</p>
            </div>
          </div>

          <div className="aspect-square lg:aspect-[3/2] rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden shadow-xl">
            <img src="/images/why/wt3.avif" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="What we do 3" />
          </div>
        </div>
      </div>
    </section>
  );
}
