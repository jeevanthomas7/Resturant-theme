import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
import ScrollToTop from './ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const isHome = pathname === '/';

  // Determine banner title
  let bannerTitle = 'Spice Garden';
  if (pathname === '/about') {
    bannerTitle = 'About Us';
  } else if (pathname === '/menu') {
    bannerTitle = 'Our Menu';
  } else if (pathname === '/menu2') {
    bannerTitle = 'Our Menu 2';
  } else if (pathname === '/menu3') {
    bannerTitle = 'Our Menu 3';
  } else if (pathname === '/menu4') {
    bannerTitle = 'Our Menu 4';
  } else if (pathname === '/blog') {
    bannerTitle = 'Our Blog';
  } else if (pathname === '/blog-details') {
    bannerTitle = 'Blog Details';
  } else if (pathname === '/team') {
    bannerTitle = 'Our Team';
  } else if (pathname === '/gallery') {
    bannerTitle = 'Image Gallery';
  } else if (pathname === '/video') {
    bannerTitle = 'Video Gallery';
  } else if (pathname === '/faq') {
    bannerTitle = 'FAQ';
  } else if (pathname === '/contact') {
    bannerTitle = 'Contact Us';
  } else if (pathname === '/booktable') {
    bannerTitle = 'Book A Table';
  } else if (pathname === '/404') {
    bannerTitle = 'Page Not Found';
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-800 overflow-x-hidden relative">
      <ScrollToTop />
      <Header />
      {!isHome && <Banner title={bannerTitle} />}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
