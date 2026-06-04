import React from 'react';

export default function History() {
  return (
    <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#CEE2EE] rounded-t-[40px] lg:rounded-t-[80px]" id="our-history">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 bg-slate-900 rounded-full"></span>
            <span className="text-slate-900 font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">Our History</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Honoring our deep-rooted passion for seafood since day one
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-8 lg:gap-12">
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 md:mb-8 w-full">
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 md:mb-4">1971</h3>
              <div className="w-full border-t border-gray-400/40 mb-4 md:mb-6"></div>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-[280px] mx-auto font-medium">
                A modest seafood shack opened on the coastline, serving daily catches with heartfelt hospitality.
              </p>
            </div>
            <div className="relative group">
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-full shadow-2xl overflow-hidden transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-110">
                <img src="/images/history1.avif" className="w-full h-full object-cover" alt="1971" />
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-col items-center text-center">
            <div className="relative group mt-6 md:mt-0 md:mb-8">
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-full shadow-2xl overflow-hidden transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-110">
                <img src="/images/history2.avif" className="w-full h-full object-cover" alt="1985" />
              </div>
            </div>
            <div className="w-full">
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 md:mb-4">1985</h3>
              <div className="w-full border-t border-gray-400/40 mb-4 md:mb-6"></div>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-[280px] mx-auto font-medium">
                With growing popularity, we expanded to a larger space and introduced our first signature seafood dishes.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-6 md:mb-8 w-full">
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 md:mb-4">1998</h3>
              <div className="w-full border-t border-gray-400/40 mb-4 md:mb-6"></div>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-[280px] mx-auto font-medium">
                Recognized as a go-to destination, known for fresh flavors and the warmest seaside ambiance.
              </p>
            </div>
            <div className="relative group">
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-full shadow-2xl overflow-hidden transition-transform duration-700 group-hover:scale-105 md:group-hover:scale-110">
                <img src="/images/history3.avif" className="w-full h-full object-cover" alt="1998" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
