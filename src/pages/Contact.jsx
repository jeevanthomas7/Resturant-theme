import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#FCFBF7] text-left" id="contact-us">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
             
            <div className="w-full order-last lg:order-first">
              <div className="relative group overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl h-[400px] sm:h-[500px] lg:h-[650px]">
                <img 
                  src="/images/contact-us-image.jpg" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  alt="Seabud" 
                />
                
                <div className="absolute bottom-6 left-4 right-4 md:left-8 md:right-auto md:w-[280px]">
                  <div className="rounded-[2rem] p-6 md:p-10 text-white bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                      <h3 className="text-base md:text-lg font-bold tracking-wide">Opening Hour</h3>
                      <i className="far fa-clock text-white text-xl"></i>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white/50 text-[10px] md:text-[11px] font-bold uppercase">Mon - Fri</span>
                        <span className="text-xs md:text-sm font-medium">09:00 AM - 08:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/50 text-[10px] md:text-[11px] font-bold uppercase">Saturday</span>
                        <span className="text-xs md:text-sm font-medium">11:00 AM - 06:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/50 text-[10px] md:text-[11px] font-bold uppercase">Sunday</span>
                        <span className="bg-red-500/10 px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest text-red-500">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-slate-900">
                  Get in touch
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                We’re here to help you <br className="hidden md:block" />
                savor every <span className="text-red-500">moment.</span>
              </h2>
              
              <p className="text-slate-600 text-sm md:text-lg leading-relaxed mb-10 max-w-lg">
                Reach out for reservations, private events, or just to say hello. Our team usually responds within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                {submitted && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-2xl border border-green-200 text-center font-bold">
                    Success! Your message has been sent.
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <input 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    className="w-full px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-3xl bg-white border border-gray-200 outline-none text-sm font-bold text-slate-900 transition-all duration-300 focus:border-red-500 focus:shadow-[0_10px_20px_-10px_rgba(239,68,68,0.2)]"
                  />
                  <input 
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    className="w-full px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-3xl bg-white border border-gray-200 outline-none text-sm font-bold text-slate-900 transition-all duration-300 focus:border-red-500 focus:shadow-[0_10px_20px_-10px_rgba(239,68,68,0.2)]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    className="w-full px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-3xl bg-white border border-gray-200 outline-none text-sm font-bold text-slate-900 transition-all duration-300 focus:border-red-500 focus:shadow-[0_10px_20px_-10px_rgba(239,68,68,0.2)]"
                  />
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                    className="w-full px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-3xl bg-white border border-gray-200 outline-none text-sm font-bold text-slate-900 transition-all duration-300 focus:border-red-500 focus:shadow-[0_10px_20px_-10px_rgba(239,68,68,0.2)]"
                  />
                </div>

                <textarea 
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="w-full px-6 md:px-8 py-4 md:py-5 rounded-2xl md:rounded-3xl bg-white border border-gray-200 outline-none resize-none text-sm font-bold text-slate-900 transition-all duration-300 focus:border-red-500 focus:shadow-[0_10px_20px_-10px_rgba(239,68,68,0.2)]"
                ></textarea>

                <button 
                  type="submit"
                  disabled={sending}
                  className="group relative flex items-center justify-center gap-4 w-full md:w-auto px-8 py-3 rounded-full bg-red-500 hover:bg-[#050B17] text-white font-black transition-all duration-500 shadow-xl shadow-red-500/20"
                >
                  <span className="text-[11px] md:text-sm uppercase tracking-[0.2em]">
                    {sending ? 'Sending...' : 'Submit Message'}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                    <i className="fas fa-paper-plane text-[10px]"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full text-left">
          <div className="bg-[#cee2ee] rounded-t-[2rem] md:rounded-t-[3.5rem] p-6 md:p-14 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-300">
              
              <div className="flex items-center gap-5 py-6 md:px-8 group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-white shadow-md border border-blue-100 text-red-500 transition-all duration-500 group-hover:-translate-y-2">
                  <i className="fas fa-phone-alt text-xl"></i>
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-gray-500">Call us</span>
                  <h4 className="mt-1 text-base md:text-lg font-black tracking-tight text-slate-900">(+02)-125-2556-347</h4>
                </div>
              </div>

              <div className="flex items-center gap-5 py-6 md:px-8 group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-white shadow-md border border-blue-100 text-slate-900 transition-all duration-500 group-hover:-translate-y-2">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-gray-500">Email us</span>
                  <h4 className="mt-1 text-base md:text-lg font-black tracking-tight text-slate-900 break-all">support@seabud.com</h4>
                </div>
              </div>

              <div className="flex items-center gap-5 py-6 md:px-8 group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-white shadow-md border border-blue-100 text-red-500 transition-all duration-500 group-hover:-translate-y-2">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-gray-500">Location</span>
                  <h4 className="mt-1 text-base md:text-lg font-black tracking-tight text-slate-900">1987 Crescent Valley, NY</h4>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[550px] z-0 relative hover:grayscale-0 transition-all duration-1000 overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976373946229!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s" 
          className="absolute inset-0 w-full h-full border-0" 
          allowFullScreen="" 
          loading="lazy"
          title="Google Map Location"
        ></iframe>
      </div>
    </>
  );
}
