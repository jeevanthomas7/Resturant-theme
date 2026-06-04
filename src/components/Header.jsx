import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSub, setActiveSub] = useState({ pages: false, menu: false });
  const location = useLocation();

  const active = (path) => {
    return location.pathname === path ? 'text-red-500' : 'hover:text-red-500';
  };

  const isHome = location.pathname === '/';

  const toggleSub = (menuKey) => {
    setActiveSub((prev) => ({ ...prev, [menuKey]: !prev[menuKey] }));
  };

  // Close menus on page changes
  useEffect(() => {
    setMobileOpen(false);
    setActiveSub({ pages: false, menu: false });
  }, [location.pathname]);

  return (
    <header className="absolute top-0 left-0 w-full z-50 mt-3">
      {/* Top Header */}
      <div className="container p-2 mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between rounded-full px-3 sm:px-6 py-2 w-full overflow-hidden">
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 text-white text-[9px] sm:text-xs md:text-sm font-bold tracking-wider whitespace-nowrap overflow-hidden">
            <span className="flex items-center gap-1 min-w-0">
              <i className="fas fa-phone-alt text-red-500 flex-shrink-0"></i>
              <span className="truncate text-[11px] sm:text-[13px] md:text-sm leading-none hover:text-red-500 transition-colors">
                +(123) 465-789
              </span>
            </span>
            <span className="flex items-center gap-1 min-w-0">
              <i className="fas fa-envelope text-red-500 flex-shrink-0"></i>
              <span className="truncate text-[11px] sm:text-[13px] md:text-sm leading-none hover:text-red-500 transition-colors">
                info@domain.com
              </span>
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <a href="#" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center bg-red-500 text-white rounded hover:bg-white hover:text-red-500 transition-all duration-300">
              <i className="fab fa-instagram text-[8px] sm:text-[10px]"></i>
            </a>
            <a href="#" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center bg-red-500 text-white rounded hover:bg-white hover:text-red-500 transition-all duration-300">
              <i className="fab fa-facebook-f text-[8px] sm:text-[10px]"></i>
            </a>
            <a href="#" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center bg-red-500 text-white rounded hover:bg-white hover:text-red-500 transition-all duration-300">
              <i className="fas fa-basketball-ball text-[8px] sm:text-[10px]"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="container mx-auto px-4 md:px-12 lg:px-20 mt-2 relative">
        <nav className="bg-white rounded-2xl md:rounded-3xl px-4 md:px-8 py-3 md:py-5 flex justify-between items-center shadow-2xl relative">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 md:w-11 md:h-11 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/30">
              <Link to="/"><i className="fas fa-fish text-base md:text-lg"></i></Link>
            </div>
            <Link to="/" className="inline-block">
              <span className="text-xl md:text-2xl font-black text-gray-800 tracking-tighter">
                Seabud<span class="text-red-500">.</span>
              </span>
            </Link>
          </div>

          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-bold text-gray-600 text-sm xl:text-base">
            <li>
              <Link to="/" className={`${active('/')} transition-colors`}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={`${active('/about')} transition-colors`}>About Us</Link>
            </li>
            
            <li className="relative group dropdown py-4">
              <span className="flex items-center gap-1.5 hover:text-red-500 cursor-pointer transition-colors">
                Menu <i className="fas fa-chevron-down text-[8px] mt-0.5"></i>
              </span>
              <ul className="dropdown-menu absolute top-full left-0 w-48 bg-white shadow-2xl rounded-xl py-3 border-t-4 border-red-500 opacity-0 invisible transition-all duration-300 transform translate-y-4 z-50 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <li><Link to="/menu" className={`${active('/menu')} block px-5 py-2.5 hover:text-red-500 hover:bg-gray-50 transition-colors`}>Menu</Link></li>
                <li><Link to="/menu2" className={`${active('/menu2')} block px-5 py-2.5 hover:text-red-500 hover:bg-gray-50 transition-colors`}>Menu 2</Link></li>
                <li><Link to="/menu3" className={`${active('/menu3')} block px-5 py-2.5 hover:text-red-500 hover:bg-gray-50 transition-colors`}>Menu 3</Link></li>
                <li><Link to="/menu4" className={`${active('/menu4')} block px-5 py-2.5 hover:text-red-500 hover:bg-gray-50 transition-colors`}>Menu 4</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/blog" className={`${active('/blog')} transition-colors`}>Blog</Link>
            </li>

            <li className="relative group dropdown py-4">
              <span className="flex items-center gap-1.5 hover:text-red-500 cursor-pointer transition-colors">
                Pages <i className="fas fa-chevron-down text-[8px] mt-0.5"></i>
              </span>
              <ul className="dropdown-menu absolute top-full left-0 w-48 bg-white shadow-2xl rounded-xl py-3 border-t-4 border-red-500 opacity-0 invisible transition-all duration-300 transform translate-y-4 z-50 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                <li><Link to="/blog" className="block px-5 py-2.5 hover:text-red-500 hover:bg-gray-50 transition-colors">Blog Details</Link></li>
                <li><Link to="/team" className="block px-5 py-2.5 hover:text-red-500 hover:bg-gray-50 transition-colors">Our Team</Link></li>
                <li><Link to="/gallery" className="block px-5 py-2.5 hover:text-red-500 hover:bg-gray-50 transition-colors">Image Gallery</Link></li>
                <li><Link to="/video" className="block px-5 py-2.5 hover:text-red-500 hover:bg-gray-50 transition-colors">Video Gallery</Link></li>
                <li><Link to="/faq" className="block px-5 py-2.5 hover:text-red-500 hover:bg-gray-50 transition-colors">FAQ</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/contact" className={`${active('/contact')} transition-colors`}>Contact Us</Link>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <Link to="/booktable" className="group hidden sm:flex bg-red-500 text-white px-5 xl:px-7 py-2.5 rounded-full items-center gap-3 hover:bg-white hover:text-black transition-all duration-500 font-bold text-sm shadow-xl shadow-red-500/20">
              <span>Reserve Table</span>
              <span className="bg-white text-red-600 group-hover:bg-red-500 group-hover:text-white rounded-full w-8 h-8 flex items-center justify-center text-[10px] transition-all duration-500">
                <i className="fas fa-arrow-right arrow-right"></i>
              </span>
            </Link>

            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center bg-gray-50 hover:bg-gray-100 rounded-full text-gray-800 transition-colors border border-gray-100"
            >
              <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </nav>

        {/* Mobile menu container */}
        {mobileOpen && (
          <div className="absolute top-full left-5 right-5 mt-3 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 lg:hidden flex flex-col gap-1 font-bold text-gray-700 z-50 border border-gray-200 overflow-hidden text-left">
            <Link to="/" className="py-4 border-b border-gray-200 hover:text-red-500 transition-colors">Home</Link>
            <Link to="/about" className="py-4 border-b border-gray-200 hover:text-red-500 transition-colors">About Us</Link>
            
            <div className="border-b border-gray-200">
              <button 
                onClick={() => toggleSub('menu')} 
                className="w-full flex justify-between items-center py-3 font-bold text-left outline-none"
              >
                <span>Menu</span> <i className={`fas ${activeSub.menu ? 'fa-minus' : 'fa-plus'} text-[10px]`}></i>
              </button>
              {activeSub.menu && (
                <div className="bg-gray-50 rounded-xl mb-3 overflow-hidden text-gray-600 text-left">
                  <Link to="/menu" className="block px-6 py-3 text-sm hover:bg-red-5 border-b border-gray-200">Menu</Link>
                  <Link to="/menu2" className="block px-6 py-3 text-sm hover:bg-red-5 border-b border-gray-200">Menu 2</Link>
                  <Link to="/menu3" className="block px-6 py-3 text-sm hover:bg-red-5 border-b border-gray-200">Menu 3</Link>
                  <Link to="/menu4" className="block px-6 py-3 text-sm hover:bg-red-5">Menu 4</Link>
                </div>
              )}
            </div>

            <Link to="/blog" className="py-4 border-b border-gray-200 hover:text-red-500 transition-colors">Blog</Link>

            <div className="border-b border-gray-200">
              <button 
                onClick={() => toggleSub('pages')} 
                className="w-full flex justify-between items-center py-4 font-bold text-left outline-none"
              >
                <span>Pages</span> <i className={`fas ${activeSub.pages ? 'fa-minus' : 'fa-plus'} text-[10px]`}></i>
              </button>
              {activeSub.pages && (
                <div className="bg-gray-50 rounded-xl mb-3 overflow-hidden text-gray-600 text-left">
                  <Link to="/blog" className="block px-6 py-3 text-sm hover:bg-red-5 border-b border-gray-200">Blog Details</Link>
                  <Link to="/team" className="block px-6 py-3 text-sm hover:bg-red-5 border-b border-gray-200">Our Team</Link>
                  <Link to="/gallery" className="block px-6 py-3 text-sm hover:bg-red-5 border-b border-gray-200">Image Gallery</Link>
                  <Link to="/video" className="block px-6 py-3 text-sm hover:bg-red-5 border-b border-gray-200">Video Gallery</Link>
                  <Link to="/faq" className="block px-6 py-3 text-sm hover:bg-red-5">FAQ</Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="py-4 border-b border-gray-200 hover:text-red-500 transition-colors">Contact Us</Link>
            
            <Link to="/booktable" className="mt-6 sm:hidden bg-red-500 text-white py-4 rounded-xl text-center font-black uppercase tracking-widest text-sm shadow-xl active:scale-95 transition-transform block">
              Reserve A Table
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
