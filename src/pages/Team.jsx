import React, { useEffect } from 'react';
import AOS from 'aos';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const team = [
  { name: 'Olivia Brooks', role: 'Executive Chef', img: '1.jpg' },
  { name: 'Daniel Harris', role: 'Guest Manager', img: '2.jpg' },
  { name: 'James Walker', role: 'Specialist Chef', img: '3.jpg' },
  { name: 'Emily Carter', role: 'Pastry Chef', img: '4.jpg' },
  { name: 'Michael Chen', role: 'Sous Chef', img: '5.jpg' },
  { name: 'Sarah Jenkins', role: 'Sommelier', img: '6.jpg' },
  { name: 'Robert Fox', role: 'Head Waiter', img: '7.jpg' },
  { name: 'Sophia Reed', role: 'Kitchen Manager', img: '8.jpg' }
];

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="pt-14 md:pt-18 lg:pt-22 pb-14 md:pb-18 lg:pb-22 bg-[#FCFBF7]" id="our-team">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white p-3 rounded-[2.5rem] border border-gray-200 shadow-xl hover:shadow-2xl hover:border-red-500 hover:-translate-y-4 transition-all duration-500"
              data-aos="fade-up"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <img
                  src={`/images/team/${member.img}`}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/90 to-transparent flex items-center justify-center gap-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <a href="#" className="text-white hover:text-red-500 transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-white hover:text-red-500 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-white hover:text-red-500 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="py-6 text-center">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-1 group-hover:text-red-500 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gray-400">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
