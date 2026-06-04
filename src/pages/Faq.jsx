import React, { useState } from 'react';

export default function Faq() {
  const [openItems, setOpenItems] = useState({
    'general-0': true, // Keep the first item open by default
  });

  const categories = [
    { id: 'general', label: 'General Info' },
    { id: 'booking', label: 'Booking Policy' },
    { id: 'menu-details', label: 'Menu Details' },
    { id: 'delivery', label: 'Delivery Support' }
  ];

  const sections = {
    general: {
      title: 'General info',
      items: [
        {
          q: 'What are your opening hours and days?',
          a: 'We are open Monday through Saturday from 08:00 AM to 05:00 PM. We prepare our freshest seafood catch every morning to ensure the highest quality for our diners.'
        },
        {
          q: 'Do you have parking facilities?',
          a: 'Yes, we provide complimentary valet parking for our guests located right at the entrance of the restaurant.'
        }
      ]
    },
    booking: {
      title: 'Booking Policy',
      items: [
        {
          q: 'How do I cancel my reservation?',
          a: 'You can cancel your booking through our website dashboard or by calling us at least 2 hours before your scheduled time.'
        }
      ]
    },
    'menu-details': {
      title: 'Menu Details',
      items: [
        {
          q: 'Are there gluten-free seafood options?',
          a: 'Yes, most of our grilled seafood and salads are naturally gluten-free. Please inform your server about any allergies.'
        }
      ]
    },
    delivery: {
      title: 'Delivery Support',
      items: [
        {
          q: 'How far do you deliver?',
          a: 'We currently deliver within a 15-mile radius of our location to ensure your food arrives fresh and hot.'
        }
      ]
    }
  };

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleFaq = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#FCFBF7] text-left">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <aside className="w-full lg:w-4/12 lg:sticky lg:top-32 h-fit">
            <div className="bg-[#eff4f7] rounded-[2.5rem] p-8 mb-8">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.4em] text-red-500 mb-6 block text-center">Categories</span>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <button 
                    key={cat.id}
                    onClick={() => handleScrollTo(cat.id)}
                    className="w-full flex items-center justify-between bg-white rounded-xl px-5 py-4 font-bold text-[11px] uppercase tracking-widest text-[#050B17] border border-gray-100 hover:border-red-500 transition-all shadow-sm outline-none text-left"
                  >
                    <span>{cat.label}</span> 
                    <i className="fas fa-chevron-right text-[8px] text-gray-500"></i>
                  </button>
                ))}
              </div>
            </div>

            <div className="relative h-[380px] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl">
              <img src="/images/contact-us-image.jpg" className="w-full h-full object-cover" alt="Contact Us" />
              <div className="absolute bottom-6 left-6 right-6 bg-[#0d1a35]/80 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 text-white text-left">
                <div className="flex items-center gap-3 mb-4">
                  <i className="far fa-clock"></i>
                  <h4 className="font-bold text-sm uppercase tracking-widest">Opening Hours</h4>
                </div>
                <div className="space-y-2 text-[11px] font-bold uppercase tracking-widest">
                  <div className="flex justify-between text-white/70 font-medium"><span>Mon - Sat</span> <span>08AM - 05PM</span></div>
                  <div className="flex justify-between items-center"><span>Sunday</span> <span className="bg-red-500/20 px-2 py-0.5 rounded text-red-400">Closed</span></div>
                </div>
              </div>
            </div>
          </aside>

          <div className="w-full lg:w-8/12">
            {Object.keys(sections).map((secKey) => {
              const sec = sections[secKey];
              return (
                <div key={secKey} id={secKey} className="mb-16 scroll-mt-32" data-aos="fade-up">
                  <h2 className="text-3xl md:text-4xl font-black text-[#050B17] mb-8 tracking-tight">{sec.title}</h2>
                  <div className="space-y-0">
                    {sec.items.map((item, idx) => {
                      const itemKey = `${secKey}-${idx}`;
                      const isOpen = !!openItems[itemKey];
                      return (
                        <div key={idx} className={`faq-row border-b border-gray-100 py-6 group ${isOpen ? 'active' : ''}`}>
                          <button 
                            onClick={() => toggleFaq(itemKey)}
                            className="w-full flex items-center justify-between text-left outline-none"
                          >
                            <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-red-600' : 'text-[#050B17]'}`}>
                              {item.q}
                            </span>
                            <span className={`w-7 h-7 text-white rounded flex items-center justify-center transition-all ${
                              isOpen ? 'bg-[#050B17] rotate-180' : 'bg-red-500'
                            }`}>
                              <i className={`fas ${isOpen ? 'fa-minus' : 'fa-plus'} text-[10px]`}></i>
                            </span>
                          </button>
                          <div 
                            className="transition-all duration-500 overflow-hidden"
                            style={{ 
                              maxHeight: isOpen ? '160px' : '0px',
                              opacity: isOpen ? 1 : 0 
                            }}
                          >
                            <p className="pt-4 text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
