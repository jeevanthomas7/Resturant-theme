import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FeatureMenu() {
  const [activeFilter, setActiveFilter] = useState('starters');

  const menuItems = [
    // Starters
    { name: 'Crispy Calamari', price: '$12.50', desc: 'Lightly battered squid rings with house tartare.', img: '/images/features/1.avif', category: 'starters' },
    { name: 'Seared Scallops', price: '$24.00', desc: 'Pan-seared with citrus glaze on risotto.', img: '/images/features/2.png', category: 'starters' },
    { name: 'Crab Salad', price: '$15.00', desc: 'Lump crab with ripe avocado and lime.', img: '/images/features/3.avif', category: 'starters' },
    { name: 'Crab Cakes', price: '$18.00', desc: 'Pan-fried cakes with remoulade sauce.', img: '/images/features/4.png', category: 'starters' },

    // Main Courses
    { name: 'Atlantic Salmon', price: '$32.00', desc: 'Grilled steak with seasonal greens.', img: '/images/features/5.avif', category: 'main' },
    { name: 'Whole Sea Bream', price: '$38.00', desc: 'Roasted with mediterranean herbs.', img: '/images/features/6.avif', category: 'main' },
    { name: 'Grilled Lobster', price: '$42.00', desc: 'Fresh lobster grilled with garlic butter.', img: '/images/features/7.avif', category: 'main' },
    { name: 'Shrimp Alfredo', price: '$28.00', desc: 'Creamy pasta with garlic butter shrimp.', img: '/images/features/8.avif', category: 'main' },

    // Desserts
    { name: 'Chocolate Lava', price: '$10.00', desc: 'Molten center with vanilla bean ice cream.', img: '/images/features/9.avif', category: 'desserts' },
    { name: 'Berry Cheesecake', price: '$9.50', desc: 'Creamy cheesecake topped with berries.', img: '/images/features/10.jpeg', category: 'desserts' },
    { name: 'Classic Tiramisu', price: '$11.00', desc: 'Coffee soaked sponge with mascarpone.', img: '/images/features/11.jpeg', category: 'desserts' },
    { name: 'Vanilla Sundae', price: '$7.00', desc: 'Vanilla ice cream with chocolate syrup.', img: '/images/features/12.avif', category: 'desserts' },

    // Beverages
    { name: 'Tropical Blue Sea', price: '$12.00', desc: 'Coconut and pineapple signature blend.', img: '/images/features/13.avif', category: 'drinks' },
    { name: 'Fresh Mojito', price: '$8.00', desc: 'Mint, lime and soda refresher.', img: '/images/features/14.avif', category: 'drinks' },
    { name: 'Mango Smoothie', price: '$6.50', desc: 'Fresh mango blended with yogurt.', img: '/images/features/15.avif', category: 'drinks' },
    { name: 'Iced Coffee', price: '$5.00', desc: 'Cold brewed coffee with cream.', img: '/images/features/16.jpeg', category: 'drinks' }
  ];

  const tabs = [
    { id: 'starters', label: 'Starters', icon: 'fa-utensils' },
    { id: 'main', label: 'Main Courses', icon: 'fa-fish' },
    { id: 'desserts', label: 'Desserts', icon: 'fa-ice-cream' },
    { id: 'drinks', label: 'Beverages', icon: 'fa-wine-glass' }
  ];

  return (
    <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#111330] rounded-t-[40px] lg:rounded-t-[80px] relative z-30 -mt-10 text-left" id="menu">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-white font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">
              Our Featured Menu
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            Crafted to impress - the ocean's finest on every plate
          </h2>
        </div>

        <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center items-center gap-6 md:gap-10 lg:gap-14 mb-4 md:mb-5 border-b border-white/10 pb-4 md:pb-5">
          {tabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button 
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-3 font-bold transition-all shrink-0 pb-2 border-b-2 outline-none ${
                  isActive 
                    ? 'text-red-500 border-red-500' 
                    : 'text-white/40 hover:text-red-500 border-transparent'
                }`}
              >
                <i className={`fas ${tab.icon} text-lg`}></i>
                <span className="text-base md:text-lg lg:text-xl tracking-wide">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-5 min-h-[350px]" id="menu-grid">
          {menuItems
            .filter((item) => item.category === activeFilter)
            .map((item, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-4 md:gap-8 group animate-fade-in"
                style={{ animation: 'menuFade 0.4s ease-out forwards' }}
              >
                <div className="relative w-20 h-20 md:w-32 md:h-32 shrink-0 rounded-full p-1 border border-transparent group-hover:border-red-500 transition-all duration-500 bg-white/5">
                  <img src={item.img} className="w-full h-full object-cover rounded-full" alt={item.name} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-red-500 transition-colors truncate">
                      {item.name}
                    </h3>
                    <span className="text-white font-black text-xl md:text-2xl">{item.price}</span>
                  </div>
                  <p className="text-white/60 text-xs md:text-base italic">{item.desc}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center pt-8 md:pt-10">
          <span className="bg-red-500 text-white text-[10px] sm:text-xs font-black px-3 py-1 rounded-full uppercase">Free</span>
          <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed">
            Crafted for Your Cravings: Today's Must-{' '}
            <Link to="/menu" className="text-red-500 font-bold hover:text-white transition-colors">
              Try Selection
            </Link>
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes menuFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
