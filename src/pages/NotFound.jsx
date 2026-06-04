import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="pt-24 pb-24 bg-[#FCFBF7] min-h-[60vh] flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-red-50 text-red-500 rounded-full mb-8">
          <ChefHat className="w-12 h-12" />
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-4 tracking-tighter">404</h1>
        <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#050B17] text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-red-500 transition-all shadow-xl"
        >
          Go Back Home
        </Link>
      </div>
    </section>
  );
}
