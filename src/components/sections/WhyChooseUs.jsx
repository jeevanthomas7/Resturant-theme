import React from 'react';
import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
  const items = [
    {
      img: '/images/why/why1.jpg',
      tag: 'Premium Quality',
      title: 'Fresh Ingredients',
      stat: '100%'
    },
    {
      img: '/images/why/why2.avif',
      tag: 'Chef Specials',
      title: 'Signature Dishes',
      stat: '50+'
    },
    {
      img: '/images/why/why3.avif',
      tag: 'Trusted Taste',
      title: 'Customer Rating',
      stat: '4.9'
    },
    {
      img: '/images/why/why4.avif',
      tag: 'Heritage',
      title: 'Years of Excellence',
      stat: '25+'
    }
  ];

  return (
    <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#FCFBF7]" id="why-choose">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 leading-none">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold text-[#050B17] leading-tight mb-8">
            Embark on a flavorful journey through our signature seafood creations
          </h2>

          <Link 
            to="/about"
            className="group inline-flex items-center justify-center gap-3 sm:gap-4 bg-red-500 text-white px-5 sm:px-8 py-2 rounded-full font-bold transition-all duration-500 shadow-lg shadow-red-200 hover:scale-[1.02]"
          >
            <span className="text-sm sm:text-base">Read More</span>
            <span className="bg-white text-red-600 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1">
              <i className="fas fa-arrow-right arrow-right text-[10px] sm:text-xs"></i>
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group relative flex flex-col justify-between h-[210px] sm:h-[420px] rounded-[1.2rem] sm:rounded-[2rem] overflow-hidden border-4 border-transparent hover:border-red-500 transition-all duration-500 hover:-translate-y-2 p-3 sm:p-8 text-left"
            >
              <img 
                src={item.img}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0" 
                alt={item.title}
              />
              <div className="absolute inset-0 z-10 transition-all duration-500 bg-gradient-to-b from-[#050B17]/50 via-transparent to-[#050B17]/90 group-hover:from-red-500/40 group-hover:to-[#050B17]/50"></div>

              <div className="relative z-20">
                <p className="text-white uppercase tracking-widest font-bold text-[6px] sm:text-[10px]">
                  {item.tag}
                </p>
                <h4 className="text-white font-bold text-[12px] sm:text-xl mt-1 leading-tight">
                  {item.title}
                </h4>
              </div>

              <div className="relative z-20">
                <h3 className="text-white font-black text-2xl sm:text-5xl tracking-tighter">
                  {item.stat}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 text-center px-4">
          <span className="bg-red-500 text-white text-[10px] sm:text-sm font-black px-3 py-1 rounded-full uppercase">
            Free
          </span>
          <p className="text-gray-500 font-medium text-xs sm:text-base leading-relaxed">
            Your Next Favorite Meal Awaits -{' '}
            <Link 
              to="/menu"
              className="text-red-600 font-bold hover:text-[#050B17] transition-colors block sm:inline"
            >
              Dine In or Get It Delivered!
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
