import React, { useState } from 'react';

export default function FaqsSection() {
  const [activeFaq, setActiveFaq] = useState(0);

  const faqs = [
    { q: 'What are your opening hours and days?', a: 'We’re open every day from 12:00 PM to 11:00 PM, including weekends and holidays. We offer both home delivery and takeaway.' },
    { q: 'Do you offer home delivery or takeaway options?', a: 'Yes, we provide fast home delivery within a 10km radius and easy takeaway service via our website.' },
    { q: 'Is reservation required, or can we walk in anytime?', a: 'Walk-ins are always welcome, however, we recommend booking a table for dinner or weekends.' },
    { q: 'Do you have vegetarian or vegan options?', a: 'Absolutely! We have a wide range of plant-based coastal dishes available on our seasonal menu.' }
  ];

  return (
    <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#FCFBF7] text-left" id="faq-section">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 items-center">
          
          <div className="w-full lg:w-1/2 order-last lg:order-first">
            <div className="grid grid-cols-2 gap-4 md:gap-6 items-start">
              
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white bg-white">
                  <img src="/images/faq-img-1.jpg" className="w-full h-full object-cover" alt="FAQ img 1" />
                </div>
                <div className="aspect-square rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white bg-white">
                  <img src="/images/faq-img-2.jpg" className="w-full h-full object-cover" alt="FAQ img 2" />
                </div>
              </div>

              <div className="mt-0">
                <div className="relative aspect-[2/4] rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-4 border-white bg-white overflow-hidden">
                  <img src="/images/faq-img-3.jpg" className="w-full h-full object-cover" alt="FAQ img 3" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-[#050B17]/90 backdrop-blur-md rounded-xl p-4 text-white flex items-center justify-between shadow-2xl">
                    <div className="flex items-center gap-2">
                      <div className="text-red-500 text-sm">★</div>
                      <span className="text-xs md:text-sm font-black">4.9 Star</span>
                    </div>
                    <div className="text-right">
                      <div className="text-[9px] md:text-[10px] opacity-70 uppercase font-black tracking-widest">Reviews</div>
                    </div>
                  </div>       
                </div>
              </div>

            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="mb-10 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 leading-none">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">FAQs</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#050B17] leading-tight tracking-tight mb-6">
                Frequently asked questions
              </h2>
              <p className="text-gray-600 text-sm md:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                Got questions about our food or bookings? Find quick answers to make your Seabud visit seamless.
              </p>
            </div>

            <div className="space-y-0">
              {faqs.map((item, idx) => {
                const isActive = activeFaq === idx;
                return (
                  <div key={idx} className="faq-row border-b border-gray-100 group">
                    <button 
                      onClick={() => setActiveFaq(isActive ? -1 : idx)}
                      className="w-full flex items-center justify-between text-left py-6 outline-none"
                    >
                      <span className={`text-base md:text-lg font-bold transition-colors pr-4 ${
                        isActive ? 'text-red-600 font-bold' : 'text-[#050B17]'
                      }`}>
                        {item.q}
                      </span>
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive ? 'bg-[#050B17] text-white rotate-180' : 'bg-red-500/10 text-red-500'
                      }`}>
                        <i className={`fas ${isActive ? 'fa-minus' : 'fa-plus'} text-[10px]`}></i>
                      </span>
                    </button>
                    <div 
                      className="transition-all duration-500 overflow-hidden"
                      style={{ 
                        maxHeight: isActive ? '120px' : '0px',
                        opacity: isActive ? 1 : 0 
                      }}
                    >
                      <p className="pb-6 text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
