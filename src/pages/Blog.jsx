import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const blogs = [
    { id: 1, img: '1.jpg', title: 'Advancements in Modern Cardiology and Heart Health' },
    { id: 2, img: '2.jpg', title: 'Understanding Diagnostic Imaging: What You Need to Know' },
    { id: 3, img: '3.jpg', title: 'Post-Operative Recovery: Tips for Faster Rehabilitation' },
    { id: 4, img: '4.jpg', title: 'Managing Chronic Pain with Specialized Orthopedic Care' },
    { id: 5, img: '5.jpg', title: 'The Importance of Regular Health Screenings for Longevity' },
    { id: 6, img: '6.jpg', title: 'Healthy Living: Nutrition Tips from Our Expert Clinicians' }
  ];

  const handlePaginationClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#FCFBF7] text-left" id="blog">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {blogs.map((blog) => (
            <article key={blog.id} className="group flex flex-col h-full">
              <Link 
                to={`/blog-details?id=${blog.id}&title=${encodeURIComponent(blog.title)}&img=${encodeURIComponent(`/images/blog/${blog.img}`)}`} 
                className="relative block w-full pt-[75%] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-6"
              >
                <img 
                  src={`/images/blog/${blog.img}`} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={blog.title} 
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center text-white text-[10px] uppercase font-bold tracking-wider transform scale-50 translate-y-5 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500">
                    View
                  </div>
                </div>
              </Link>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#050B17] leading-tight mb-4 min-h-[3.5rem] md:min-h-[4rem]">
                <Link 
                  to={`/blog-details?id=${blog.id}&title=${encodeURIComponent(blog.title)}&img=${encodeURIComponent(`/images/blog/${blog.img}`)}`} 
                  className="hover:text-red-600 transition-colors"
                >
                  {blog.title}
                </Link>
              </h3>

              <div className="mt-auto pt-6 border-t border-gray-200">
                <Link 
                  to={`/blog-details?id=${blog.id}&title=${encodeURIComponent(blog.title)}&img=${encodeURIComponent(`/images/blog/${blog.img}`)}`} 
                  className="inline-flex items-center gap-2 text-red-500 font-bold group/btn"
                >
                  Read More 
                  <i className="fas fa-arrow-right text-xs -rotate-45 transition-all duration-300 group-hover/btn:translate-x-1"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3">
          <button 
            onClick={handlePaginationClick}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#E1F0F9] text-[#1B1F3B] hover:bg-[#1B1F3B] hover:text-white transition-all duration-300 outline-none"
          >
            <i className="fas fa-chevron-left text-xs"></i>
          </button>
          <button 
            onClick={handlePaginationClick}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#1B1F3B] text-white font-bold outline-none"
          >
            1
          </button>
          <button 
            onClick={handlePaginationClick}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#E1F0F9] text-[#1B1F3B] hover:bg-[#1B1F3B] hover:text-white transition-all duration-300 font-bold outline-none"
          >
            2
          </button>
          <button 
            onClick={handlePaginationClick}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#E1F0F9] text-[#1B1F3B] hover:bg-[#1B1F3B] hover:text-white transition-all duration-300 font-bold outline-none"
          >
            3
          </button>
          <button 
            onClick={handlePaginationClick}
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#E1F0F9] text-[#1B1F3B] hover:bg-[#1B1F3B] hover:text-white transition-all duration-300 outline-none"
          >
            <i className="fas fa-chevron-right text-xs"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
