import React, { useState } from 'react';
import { Utensils, Beef, IceCream, GlassWater } from 'lucide-react';
import Testimonial from '../components/sections/Testimonial';
import FaqsSection from '../components/sections/FaqsSection';

const menuItems = {
  starters: [
    { name: 'Crispy Calamari', price: 99, desc: 'From childhood summers by the shore to late-night meals with loved ones, seafood.', img: '/images/menu1/1.png' },
    { name: 'Seared Scallops', price: 149, desc: 'Pan-seared scallops with a citrus glaze, served over a bed of creamy risotto.', img: '/images/menu1/6.jpeg' },
    { name: 'Crab Salad', price: 179, desc: 'Golden brown crab cakes served with a spicy remoulade sauce and fresh greens.', img: '/images/menu1/2.png' },
    { name: 'Crab Cakes', price: 100, desc: 'Fresh scallops marinated in citrus served with garlic & red onion and cilantro.', img: '/images/menu1/3.png' },
    { name: 'Garlic Shrimp', price: 219, desc: 'Succulent lobster tail grilled to perfection, served with garlic butter and lemon wedges.', img: '/images/menu1/4.png' },
    { name: 'Fresh Oysters', price: 249, desc: 'A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste.', img: '/images/menu1/5.png' },
  ],
  main: [
    { name: 'Atlantic Salmon', price: 329, desc: 'Grilled steak with seasonal greens.', img: '/images/menu1/7.jpeg' },
    { name: 'Sea Bream', price: 389, desc: 'Roasted with mediterranean herbs.', img: '/images/menu1/8.jpeg' },
    { name: 'Grilled Lobster', price: 99, desc: 'Fresh lobster with garlic butter.', img: '/images/menu1/9.jpeg' },
    { name: 'Shrimp Alfredo', price: 200, desc: 'Creamy pasta with garlic shrimp.', img: '/images/menu1/10.jpeg' },
    { name: 'Grilled Octopus', price: 300, desc: 'Charred octopus with lemon olive oil.', img: '/images/menu1/11.jpeg' },
    { name: 'Pan-Seared Tuna', price: 360, desc: 'Sesame crusted with ginger soy.', img: '/images/menu1/12.jpeg' },
  ],
  desserts: [
    { name: 'Chocolate Lava', price: 1000, desc: 'Molten center with vanilla bean cream.', img: '/images/menu1/13.jpeg' },
    { name: 'Cheesecake', price: 550, desc: 'Creamy with berry compote.', img: '/images/menu1/14.jpeg' },
    { name: 'Classic Tiramisu', price: 110, desc: 'Coffee soaked with mascarpone.', img: '/images/menu1/15.jpeg' },
    { name: 'Vanilla Sundae', price: 700, desc: 'Ice cream with chocolate syrup.', img: '/images/menu1/16.jpeg' },
    { name: 'Lemon Tart', price: 850, desc: 'Zesty lemon curd in buttery crust.', img: '/images/menu1/17.jpeg' },
    { name: 'Fruit Platter', price: 200, desc: 'Seasonal tropical sliced fruits.', img: '/images/menu1/18.jpeg' },
  ],
  drinks: [
    { name: 'Blue Lagoon', price: 220, desc: 'Coconut and pineapple signature blend.', img: '/images/menu1/19.jpeg' },
    { name: 'Fresh Mojito', price: 800, desc: 'Mint, lime and soda refresher.', img: '/images/menu1/20.jpeg' },
    { name: 'Mango Smoothie', price: 650, desc: 'Fresh mango blended with yogurt.', img: '/images/menu1/21.jpeg' },
    { name: 'Iced Coffee', price: 500, desc: 'Cold brewed with fresh cream.', img: '/images/menu1/22.jpeg' },
    { name: 'Citrus Punch', price: 750, desc: 'Orange, lime and sparkling water.', img: '/images/menu1/23.jpeg' },
    { name: 'Mineral Water', price: 300, desc: 'Pure sparkling artesian water.', img: '/images/menu1/24.jpeg' },
  ]
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState('starters');

  const tabs = [
    { id: 'starters', name: 'Starters', icon: Utensils },
    { id: 'main', name: 'Main Courses', icon: Beef },
    { id: 'desserts', name: 'Desserts', icon: IceCream },
    { id: 'drinks', name: 'Beverages', icon: GlassWater },
  ];

  return (
    <>
      <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#f6f3f0] rounded-t-[40px] lg:rounded-t-[80px] -mt-12 relative z-10" id="menu-page">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

          {/* Category Tabs */}
          <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center items-center gap-8 md:gap-14 mb-10 border-b border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 text-xs md:text-sm font-black uppercase tracking-[0.2em] transition-all shrink-0 flex items-center gap-2 border-b-2 ${
                    isActive
                      ? 'border-red-500 text-red-500 font-bold'
                      : 'border-transparent text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 min-h-[500px]">
            {menuItems[activeTab].map((item, index) => (
              <div
                key={index}
                className="group bg-white p-3 md:p-5 rounded-[2rem] border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex items-center gap-4 md:gap-6 animate-[menuFade_0.5s_ease_forwards]"
              >
                <img
                  src={item.img}
                  className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover border-2 border-white shadow-md group-hover:border-red-500 transition-all"
                  alt={item.name}
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-black text-[#050B17] text-base md:text-xl">{item.name}</h4>
                    <span className="text-red-500 font-black text-sm md:text-lg">₹ {item.price}</span>
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed italic">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Styled animation injected */}
      <style>{`
        @keyframes menuFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Testimonial />
      <FaqsSection />
    </>
  );
}
