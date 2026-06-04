import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function BlogDetails() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get('title') || 'Advancements in Modern Cardiology and Heart Health';
  const img = searchParams.get('img') || '/images/blog/1.jpg';

  const [commentData, setCommentData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Comment data:', commentData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setCommentData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#FCFBF7] text-left" id="blog-content">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-10 sm:mb-16">
            <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
              <img src={img} alt={title} className="w-full h-auto object-cover max-h-[600px] bg-white" />
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4 leading-none">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              <span className="text-slate-900 font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs">Our Journal</span>
            </div>
            
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              {title}
            </h1>
            
            <div className="flex items-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-[8px]">
                  <i className="fas fa-user"></i>
                </div>
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Admin</span>
              </div>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">June 18, 2025</span>
            </div>
          </div>

          <div className="space-y-6 text-sm md:text-lg text-gray-600 leading-relaxed font-medium">
            <p>
              At Seabud, we are dedicated to bringing the freshest coastal flavors to your table. Every dish is a result of sustainable sourcing and a passion for authentic seafood preparation. Our journey begins in the early hours of the morning, working with local fishermen to select the best catch of the day.
            </p>
            
            <div className="relative py-10 md:py-16 px-8 md:px-14 bg-white border-l-4 border-red-500 rounded-r-[2rem] shadow-xl my-10">
              <i className="fas fa-quote-left absolute top-0 sm:top-2 left-6 text-red-500/10 text-6xl"></i>
              <p className="text-lg md:text-2xl font-black text-slate-900 leading-tight relative z-10">
                Great seafood is built on two things: respect for the ocean and a refusal to compromise on freshness.
              </p>
            </div>

            <p>
              This direct relationship ensures that what you eat is as fresh as it gets, honoring the traditions of seaside dining. We invite you to join us and explore the deeper stories behind your favorite dishes. Every ingredient is chosen with care to ensure the highest quality.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-10">
              <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              <h3 className="text-slate-900 font-bold uppercase tracking-[0.2em] text-[12px] sm:text-sm">Leave a Comment</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {submitted && (
                <div className="p-4 bg-green-50 text-green-700 rounded-2xl border border-green-200 text-center font-bold">
                  Thank you! Your comment has been posted successfully.
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input 
                  type="text" 
                  name="name"
                  value={commentData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required 
                  className="w-full px-6 py-4 md:py-5 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-red-500/10 outline-none transition-all text-xs font-bold text-slate-900" 
                />
                <input 
                  type="email" 
                  name="email"
                  value={commentData.email}
                  onChange={handleChange}
                  placeholder="Email Address" 
                  required 
                  className="w-full px-6 py-4 md:py-5 rounded-2xl bg-white border border-gray-200 focus:ring-2 focus:ring-red-500/10 outline-none transition-all text-xs font-bold text-slate-900" 
                />
              </div>
              <textarea 
                rows="5" 
                name="message"
                value={commentData.message}
                onChange={handleChange}
                placeholder="Write your message here..." 
                required 
                className="w-full px-6 py-4 md:py-5 rounded-[2rem] bg-white border border-gray-200 focus:ring-2 focus:ring-red-500/10 outline-none transition-all text-xs font-bold text-slate-900 resize-none"
              ></textarea>
              
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  className="group relative flex items-center justify-center gap-4 bg-red-500 hover:bg-[#050B17] text-white px-10 py-4 rounded-full font-black transition-all duration-500 shadow-xl shadow-red-500/20"
                >
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em]">Post Comment</span>
                  <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                    <i className="fas fa-paper-plane text-[10px]"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
