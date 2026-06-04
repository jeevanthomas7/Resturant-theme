import React from 'react';
import { Link } from 'react-router-dom';
import AboutUs from '../components/sections/AboutUs';
import ContactSection from '../components/sections/ContactSection';
import Testimonial from '../components/sections/Testimonial';
import WtWeDo from '../components/sections/WtWeDo';
import Table from '../components/sections/Table';
import FaqsSection from '../components/sections/FaqsSection';

export default function About() {
  const team = [
    { name: 'Olivia Brooks', role: 'Executive Chef', img: '/images/team/1.jpg' },
    { name: 'Daniel Harris', role: 'Guest Manager', img: '/images/team/2.jpg' },
    { name: 'James Walker', role: 'Specialist Chef', img: '/images/team/3.jpg' },
    { name: 'Emily Carter', role: 'Pastry Chef', img: '/images/team/4.jpg' }
  ];

  return (
    <>
      <AboutUs />

      {/* Our Approach Section */}
      <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#cee2ee] rounded-t-[40px] lg:rounded-t-[80px] overflow-hidden text-left" id="our-approach">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="mb-10 lg:mb-12">
                <div className="flex items-center gap-2 mb-4 leading-none">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                  <span className="text-slate-900 font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">Our Approach</span>
                </div>
                <h2 className="text-2xl md:text-4xl lg:text-4xl font-black text-[#050B17] leading-tight mb-6">
                  Crafting fresh flavors from ocean to plate
                </h2>
                <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-lg">
                  At Seabud, our approach blends tradition with innovation. We source the freshest catch daily to ensure unparalleled quality.
                </p>
              </div>

              <div className="bg-[#111330] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-12 lg:p-14 shadow-2xl flex-grow">
                <div className="mb-10 text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Our mission</h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
                    At Seabud, our mission is to bring the true taste of the sea to your plate. We are committed to serving the freshest seafood.
                  </p>
                  <div className="flex flex-wrap gap-4 md:gap-8">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                        <i className="fas fa-check text-[8px] text-white"></i>
                      </div>
                      <span className="text-white text-xs md:text-sm font-bold">Fresh Catch Daily</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                        <i className="fas fa-check text-[8px] text-white"></i>
                      </div>
                      <span className="text-white text-xs md:text-sm font-bold">Quality You Taste</span>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-white/10 mb-10"></div>

                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Our vision</h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
                    To be the leading coastal dining destination, where tradition meets modern culinary excellence in every single bite.
                  </p>
                  <div className="flex flex-wrap gap-4 md:gap-8">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                        <i className="fas fa-check text-[8px] text-white"></i>
                      </div>
                      <span className="text-white text-xs md:text-sm font-bold">Sustainable Sourcing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                        <i className="fas fa-check text-[8px] text-white"></i>
                      </div>
                      <span className="text-white text-xs md:text-sm font-bold">Expert Craftsmanship</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="h-[400px] md:h-[600px] lg:h-full w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img src="/images/approach-image.jpg" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" alt="Our Approach" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Cards */}
      <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-white/50 text-left">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative bg-white rounded-[2.5rem] p-8 md:p-14 overflow-hidden border border-gray-200 shadow-xl group flex items-center min-h-[320px]">
              <div className="relative z-10 w-full sm:w-3/5">
                <span className="text-red-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Seafood Snacks</span>
                <h3 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight mb-8">Fried chicken <br />& fries</h3>
                <Link to="/menu" className="inline-block text-red-600 font-bold uppercase tracking-widest text-[10px] border-b-2 border-red-500 pb-1 hover:text-slate-900 transition-all">Shop Now</Link>
              </div>
              <img src="/images/fd-about1.png" className="absolute -right-4 bottom-0 w-[180px] md:w-1/2 h-auto object-contain transform group-hover:scale-110 transition-transform duration-1000 opacity-30 sm:opacity-100" alt="Promo 1" />
            </div>

            <div className="relative bg-white rounded-[2.5rem] p-8 md:p-14 overflow-hidden border border-gray-200 shadow-xl group flex items-center min-h-[320px]">
              <div className="relative z-10 w-full sm:w-3/5">
                <span className="text-red-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Big Sale! Offer</span>
                <h3 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight mb-8">Delicious exotic seafood</h3>
                <Link to="/menu" className="inline-block text-red-600 font-bold uppercase tracking-widest text-[10px] border-b-2 border-red-500 pb-1 hover:text-slate-900 transition-all">Shop Now</Link>
              </div>
              <img src="/images/fd-about2.png" className="absolute -right-4 bottom-0 w-[180px] md:w-1/2 h-auto object-contain transform group-hover:scale-110 transition-transform duration-1000 opacity-30 sm:opacity-100" alt="Promo 2" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#111330] rounded-t-[40px] lg:rounded-t-[80px] overflow-hidden relative text-left" id="expertise-section">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

            <div className="w-full lg:w-1/2 order-last lg:order-first">
              <div className="relative group aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="/images/test-tradition-image.jpg" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Tradition" />
                
                <div className="absolute bottom-6 left-4 right-4 md:left-8 md:right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-10 rounded-[2rem] text-white">
                  <h4 className="text-base md:text-xl font-bold mb-6 leading-tight">
                    Enjoy 25% Off on Coastal Feast Week - Limited Time Only!
                  </h4>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-3">
                      <img src="/images/person1.jpeg" className="w-9 h-9 rounded-full border-2 border-[#111330]" alt="Reviewer" />
                      <img src="/images/person2.jpeg" className="w-9 h-9 rounded-full border-2 border-[#111330]" alt="Reviewer" />
                      <div className="w-9 h-9 rounded-full bg-red-600 border-2 border-[#111330] flex items-center justify-center text-[10px] font-black">+</div>
                    </div>
                    <Link to="/menu" className="text-xs md:text-sm font-bold uppercase tracking-widest border-b border-white/30 pb-1 hover:text-red-500 transition-colors">View Offers</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="mb-10 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 leading-none">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                  <span className="text-red-500 font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">Taste the Tradition</span>
                </div>
                <h2 className="text-2xl md:text-5xl font-black text-white leading-tight mb-6">
                  Expertly crafted from the coast, served with soul
                </h2>
                <p className="text-white/60 text-sm md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Every dish in our signature selection is a reflection of our passion for coastal cuisine. Prepared with the freshest catch and authentic techniques.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 mb-10 text-left">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-red-500 text-xl md:text-2xl">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <h4 className="text-white font-bold text-sm md:text-lg leading-tight">Fresh Flavor<br />Daily Catch</h4>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-red-500 text-xl md:text-2xl">
                    <i className="fas fa-star"></i>
                  </div>
                  <h4 className="text-white font-bold text-sm md:text-lg leading-tight">Inspired Coast<br />Tradition</h4>
                </div>
              </div>

              <div className="w-full h-px bg-white/10 mb-10"></div>

              <div className="space-y-4">
                {[
                  'Carefully sourced fresh seafood from trusted coastal fisheries.',
                  'Expertly balanced flavors using handpicked regional spices.',
                  'Lovingly prepared by seasoned chefs with generational recipes.'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <i className="fas fa-check text-[10px] text-white"></i> 
                    </div>
                    <p className="text-white/70 text-sm md:text-base">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Crew Section */}
      <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-white text-left">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2 mb-4 leading-none">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">Expert Crew</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-[#050B17] leading-tight">Meet the people behind the flavor magic</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {team.map((m, idx) => (
              <div key={idx} className="group text-center animate-fade-in" data-aos="fade-up">
                <div className="aspect-[4/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden mb-6 shadow-xl border-4 border-white">
                  <img src={m.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={m.name} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#050B17] mb-2">{m.name}</h3>
                <p className="text-red-500 uppercase tracking-[0.2em] text-[10px] font-semibold">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Testimonial />
      <WtWeDo />
      <Table />
      <FaqsSection />
    </>
  );
}
