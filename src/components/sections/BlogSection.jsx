import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogSection() {
  const posts = [
    {
      title: '5 Secrets to Cooking the Perfect Grilled Salmon',
      img: '/images/blog/1.jpg',
      delay: '0'
    },
    {
      title: 'From Ocean to Plate How We Source Our Seafood Sustainably',
      img: '/images/blog/2.jpg',
      delay: '100'
    },
    {
      title: 'Hosting Events at Our Place - A Guide to Private Coastal Dining',
      img: '/images/blog/3.jpg',
      delay: '200'
    }
  ];

  return (
    <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#FCFBF7] text-left" id="blog">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 leading-none">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-gray-500 font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">
              Our Blog
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-[#050B17] leading-tight">
            Your monthly dose of flavor, freshness & foodie fun
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {posts.map((post, idx) => (
            <article key={idx} className="group flex flex-col h-full" data-aos="fade-up" data-aos-delay={post.delay}>
              <Link 
                to={`/blog-details?title=${encodeURIComponent(post.title)}&img=${encodeURIComponent(post.img)}`}
                className="relative block w-full pt-[75%] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-6"
              >
                <img src={post.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center text-white text-[10px] uppercase font-bold tracking-wider transform scale-50 translate-y-5 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500">
                    View
                  </div>
                </div>
              </Link>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#050B17] leading-tight mb-4 min-h-[3.5rem] md:min-h-[4rem]">
                <Link 
                  to={`/blog-details?title=${encodeURIComponent(post.title)}&img=${encodeURIComponent(post.img)}`}
                  className="hover:text-red-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h3>

              <div className="mt-auto pt-6 border-t border-gray-200">
                <Link 
                  to={`/blog-details?title=${encodeURIComponent(post.title)}&img=${encodeURIComponent(post.img)}`}
                  className="inline-flex items-center gap-2 text-red-500 font-bold group/btn"
                >
                  Read More 
                  <i className="fas fa-arrow-right text-xs -rotate-45 transition-all duration-300 group-hover/btn:translate-x-1"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
