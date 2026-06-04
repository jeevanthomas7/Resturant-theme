import React from 'react';
import Hero from '../components/sections/Hero';
import AboutUs from '../components/sections/AboutUs';
import History from '../components/sections/History';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FeatureMenu from '../components/sections/FeatureMenu';
import WtWeDo from '../components/sections/WtWeDo';
import ContactSection from '../components/sections/ContactSection';
import GallerySection from '../components/sections/GallerySection';
import Testimonial from '../components/sections/Testimonial';
import Events from '../components/sections/Events';
import Table from '../components/sections/Table';
import BlogSection from '../components/sections/BlogSection';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <History />
      <WhyChooseUs />
      <FeatureMenu />
      <WtWeDo />
      <ContactSection />
      <GallerySection />
      <Testimonial />
      <Events />
      <Table />
      <BlogSection />
    </>
  );
}
