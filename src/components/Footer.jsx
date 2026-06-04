import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#111330] text-white pt-14 md:pt-18 lg:pt-22 pb-10 md:pb-14 rounded-t-[40px] lg:rounded-t-[80px] relative text-left" id="footer">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 md:mb-20">
          
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-600/20">
                <i className="fas fa-fish"></i>
              </div>
              <span className="text-2xl md:text-3xl font-bold">Seabud<span className="text-red-600">.</span></span>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We're here to flip the script on traditional baking. Think bold flavor combos and the freshest catch.
            </p>
            <div className="space-y-4 text-left">
              <h4 className="text-xs font-bold tracking-[0.2em] text-white/80">Follow On Socials:</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 text-sm">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 text-sm">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 text-sm">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all duration-300 text-sm">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:pl-10">
            <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-white">Our Services</h4>
            <ul className="space-y-3 md:space-y-4 text-gray-400 text-sm md:text-base">
              <li><a href="#" className="hover:text-red-500 transition-colors">Private Events</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Catering Services</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Dine-In Experience</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Online Reservations</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Entertainment Nights</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-white">Our Location</h4>
            <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
            <h4 className="text-lg font-bold mb-4 text-white">Get In Touch</h4>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li><a href="mailto:info@domainname.com" className="hover:text-red-500 transition-colors">info@domainname.com</a></li>
              <li><a href="tel:+11234567890" class="hover:text-red-500 transition-colors">+(123) 456-7890</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 text-white">Subscribe Newsletter</h4>
            <p className="text-gray-400 text-sm md:text-base mb-6">
              Subscribe our newsletter to get more updates!
            </p>
            <form onSubmit={handleSubscribe} className="relative group">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address *" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 md:py-5 px-6 outline-none focus:border-red-600 transition-all text-sm text-white" 
              />
              <button type="submit" className="absolute right-2 top-2 bottom-2 w-10 md:w-12 bg-white text-black rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-500 group">
                <i className="fas fa-arrow-right transform -rotate-45 group-hover:rotate-0 text-sm transition-transform duration-500"></i>
              </button>
            </form>
            {subscribed && (
              <span className="text-green-500 text-xs mt-2 block font-bold">Successfully subscribed!</span>
            )}
          </div>
        </div>

        <div className="relative w-full h-px bg-white/10 mb-12 flex justify-center items-center">
          <a 
            href="#" 
            onClick={handleScrollToTop}
            className="absolute w-12 h-12 bg-[#1a1c3d] border border-white/10 rounded-full flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all duration-500 group shadow-2xl"
          >
            <i className="fas fa-arrow-up text-white animate-bounce"></i>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-[11px] sm:text-xs md:text-sm">
          <p className="text-center md:text-left">
            Copyright © {new Date().getFullYear()} <span className="text-white font-bold">Seabud</span>. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10 font-bold">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link to="/menu" className="hover:text-white transition-colors">Our Menu</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
