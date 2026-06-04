import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { Play, X } from 'lucide-react';

const videos = [
  { id: 'Y-x0efG1seA', thumb: '4.jpg' },
  { id: 'Y-x0efG1seA', thumb: '7.jpeg' },
  { id: 'Y-x0efG1seA', thumb: '8.jpeg' },
  { id: 'Y-x0efG1seA', thumb: '9.jpeg' },
  { id: 'Y-x0efG1seA', thumb: 'gallery-1.jpg' },
  { id: 'Y-x0efG1seA', thumb: 'gallery-2.jpg' },
  { id: 'Y-x0efG1seA', thumb: 'post-3.jpg' },
  { id: 'Y-x0efG1seA', thumb: '6.avif' },
  { id: 'Y-x0efG1seA', thumb: '5.avif' }
];

export default function Video() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeUrl, setActiveUrl] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const openVideo = (id) => {
    setActiveUrl(`https://www.youtube.com/embed/${id}?autoplay=1`);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setIsOpen(false);
    setActiveUrl('');
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) closeVideo();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#FCFBF7]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {videos.map((vid, index) => (
              <div
                key={index}
                className="group relative aspect-[16/10] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden cursor-pointer bg-[#050B17] shadow-xl"
                onClick={() => openVideo(vid.id)}
                data-aos="fade-up"
              >
                <img
                  src={`/images/gallery/${vid.thumb}`}
                  alt={`Video Thumbnail ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90"
                />
                <div className="absolute inset-0 bg-[#050B17]/10 group-hover:bg-[#050B17]/40 transition-all duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 border border-white rounded-full flex items-center justify-center text-white transform transition-all duration-500 group-hover:scale-110 shadow-2xl">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-[#050B17]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          onClick={closeVideo}
        >
          <button
            onClick={closeVideo}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-red-500 transition-colors z-[10000]"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              title="Youtube Player"
              className="w-full h-full"
              src={activeUrl}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
