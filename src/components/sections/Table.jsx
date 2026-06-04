import React, { useState } from 'react';

export default function Table() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
    requests: ''
  });

  const [reserved, setReserved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation data:', formData);
    setReserved(true);
    setTimeout(() => {
      setReserved(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        guests: '',
        date: '',
        time: '',
        requests: ''
      });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#cee2ee] rounded-t-[40px] lg:rounded-t-[80px] text-left" id="reservation">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-2 mb-4 leading-none">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-[#050B17] font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
              Reserve A Table
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-[#050B17] leading-tight">
            Dine with us - simple, seamless table reservations
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          <div className="w-full lg:w-7/12">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {reserved && (
                <div className="md:col-span-2 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 text-center font-bold">
                  Your table has been reserved successfully! We look forward to seeing you.
                </div>
              )}
              <div className="space-y-2">
                <label className="block text-[#050B17] font-bold text-base md:text-lg">Your Name*</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex. John Dev" 
                  required 
                  className="w-full bg-white/40 border border-[#050B17]/10 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-red-500/20 text-[#050B17] placeholder-[#050B17]/40 transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[#050B17] font-bold text-base md:text-lg">Email Address*</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com" 
                  required 
                  className="w-full bg-white/40 border border-[#050B17]/10 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-red-500/20 text-[#050B17] placeholder-[#050B17]/40 transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[#050B17] font-bold text-base md:text-lg">Phone Number*</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number" 
                  required 
                  className="w-full bg-white/40 border border-[#050B17]/10 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-red-500/20 text-[#050B17] placeholder-[#050B17]/40 transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[#050B17] font-bold text-base md:text-lg">Number Of Guests*</label>
                <div className="relative">
                  <select 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/40 border border-[#050B17]/10 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-red-500/20 text-[#050B17] appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select</option>
                    <option value="1 Person">1 Person</option>
                    <option value="2 Persons">2 Persons</option>
                    <option value="4 Persons">4 Persons</option>
                    <option value="6+ Persons">6+ Persons</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                    <i className="fas fa-chevron-down text-[#050B17]/40 text-xs"></i>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[#050B17] font-bold text-base md:text-lg">Date Of Reservation*</label>
                <input 
                  type="date" 
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required 
                  className="w-full bg-white/40 border border-[#050B17]/10 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-red-500/20 text-[#050B17] transition-all" 
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[#050B17] font-bold text-base md:text-lg">Time Of Reservation*</label>
                <input 
                  type="time" 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required 
                  className="w-full bg-white/40 border border-[#050B17]/10 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-red-500/20 text-[#050B17] transition-all" 
                />
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="block text-[#050B17] font-bold text-base md:text-lg">Special Requests</label>
                <textarea 
                  rows="4" 
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  placeholder="Additional Message..." 
                  className="w-full bg-white/40 border border-[#050B17]/10 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-red-500/20 text-[#050B17] placeholder-[#050B17]/40 transition-all resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 mt-4">
                <button type="submit" className="group inline-flex items-center gap-4 bg-red-600 hover:bg-[#050B17] text-white px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-xl shadow-red-500/20">
                  <span className="text-sm">Book A Table</span>
                  <span className="bg-white text-red-600 w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-500">
                    <i className="fas fa-arrow-right arrow-right text-[10px]"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-5/12">
            <div className="h-full bg-[#111330] rounded-[2rem] md:rounded-[3rem] px-6 py-10 md:p-10 lg:p-12 text-white relative overflow-hidden flex flex-col justify-center shadow-2xl">
              <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
                <img src="/images/cta-box-bg.jpg" className="w-full h-full object-cover" alt="" />
              </div>
              
              <div className="relative z-10 space-y-8 md:space-y-10">
                <p className="text-white/70 text-sm md:text-lg leading-relaxed">
                  Have a question, need a reservation, or want to plan a private event? Reach out - we're here to help!
                </p>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white">Our Address</h4>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white">Contact Information</h4>
                  <p className="text-white/60 text-sm md:text-base">Phone: + (123) 456-789</p>
                  <p className="text-white/60 text-sm md:text-base">Email: info@domainname.com</p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-white">Hours Of Operation</h4>
                  <div className="flex justify-between max-w-xs text-white/60 text-sm md:text-base border-b border-white/10 pb-2">
                    <span>Mon - Fri</span>
                    <span>11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-xs text-white/60 text-sm md:text-base border-b border-white/10 pb-2">
                    <span>Sat - Sun</span>
                    <span>09:00 AM - 11:00 PM</span>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="text-lg font-bold mb-6">Stay Connected</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-white hover:text-red-600 transition-all duration-300 shadow-lg">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-white hover:text-red-600 transition-all duration-300 shadow-lg">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-white hover:text-red-600 transition-all duration-300 shadow-lg">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-white hover:text-red-600 transition-all duration-300 shadow-lg">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
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
