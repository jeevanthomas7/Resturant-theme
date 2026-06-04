import React, { useState, useEffect } from 'react';
import { Home, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuItems = [
  { id: 3, name: "Tuna Tataki", desc: "Seared yellowfin tuna, sesame crust", price: 780, cat: "Starters", tag: "Non-Veg", img: "/images/menu4/3.jpeg" },
  { id: 4, name: "Burrata Toast", desc: "Sourdough, heirloom tomato, balsamic", price: 390, cat: "Starters", tag: "Veg", img: "/images/menu4/4.jpeg" },
  { id: 5, name: "Lobster Bisque", desc: "Cognac-flamed lobster, saffron cream", price: 950, cat: "Seafood", tag: "Non-Veg", img: "/images/menu4/5.jpeg" },
  { id: 6, name: "Grilled Sea Bass", desc: "Whole sea bass, lemon butter, capers", price: 1200, cat: "Seafood", tag: "Non-Veg", img: "/images/menu4/6.jpeg" },
  { id: 7, name: "Garlic Butter Crab", desc: "Sri Lankan mud crab, XO chilli butter", price: 1450, cat: "Seafood", tag: "Non-Veg", img: "/images/menu4/7.jpeg" },
  { id: 8, name: "Saffron Prawn Curry", desc: "Tiger prawns in coconut saffron broth", price: 880, cat: "Seafood", tag: "Non-Veg", img: "/images/menu4/8.jpeg" },
  { id: 9, name: "Hyderabadi Biryani", desc: "Aged basmati, mutton, saffron milk", price: 520, cat: "Biryani", tag: "Non-Veg", img: "/images/menu4/9.jpeg" },
  { id: 10, name: "Veg Dum Biryani", desc: "Wild mushroom, truffle oil, onions", price: 380, cat: "Biryani", tag: "Veg", img: "/images/menu4/10.jpeg" },
  { id: 1, name: "Prawn Tempura", desc: "Crispy golden prawns with yuzu aioli", price: 620, cat: "Starters", tag: "Non-Veg", img: "/images/menu4/1.jpeg" },
  { id: 2, name: "Truffle Arancini", desc: "Risotto balls dusted with black truffle", price: 480, cat: "Starters", tag: "Veg", img: "/images/menu4/2.jpeg" },
  { id: 11, name: "Prawn Biryani", desc: "Tiger prawns, coastal masala, kewra", price: 680, cat: "Biryani", tag: "Non-Veg", img: "/images/menu4/11.jpeg" },
  { id: 12, name: "Chicken Mandi", desc: "Whole smoked chicken over spiced rice", price: 750, cat: "Biryani", tag: "Non-Veg", img: "/images/menu4/12.jpeg" },
  { id: 13, name: "Wagyu Skewers", desc: "A5 wagyu tenderloin, chimichurri", price: 1800, cat: "Grill", tag: "Non-Veg", img: "/images/menu4/13.jpeg" },
  { id: 14, name: "Smoked Lamb Chops", desc: "Herb-crusted rack, pomegranate jus", price: 1350, cat: "Grill", tag: "Non-Veg", img: "/images/menu4/14.jpeg" },
  { id: 15, name: "Paneer Tikka", desc: "Kashmiri chilli marinade, clay oven", price: 420, cat: "Grill", tag: "Veg", img: "/images/menu4/15.jpeg" },
  { id: 16, name: "Charcoal Chicken", desc: "Piri piri glaze, crispy pickled slaw", price: 650, cat: "Grill", tag: "Non-Veg", img: "/images/menu4/16.jpeg" },
  { id: 17, name: "Cold Brew Lemonade", desc: "House cold brew, yuzu extract", price: 220, cat: "Drinks", tag: "Veg", img: "/images/menu4/17.jpeg" },
  { id: 18, name: "Mango Lassi", desc: "Alphonso mango pulp, hung curd", price: 180, cat: "Drinks", tag: "Veg", img: "/images/menu4/18.jpeg" },
  { id: 19, name: "Passion Fruit Cooler", desc: "Tropical passion fruit, fresh mint", price: 260, cat: "Drinks", tag: "Veg", img: "/images/menu4/19.jpeg" },
  { id: 20, name: "Dark Chocolate Lava", desc: "72% Valrhona, salted caramel core", price: 420, cat: "Desserts", tag: "Veg", img: "/images/menu4/20.jpeg" }
];

const cats = ["All", "Starters", "Seafood", "Biryani", "Grill", "Drinks", "Desserts"];

export default function Menu4() {
  const [filterTag, setFilterTag] = useState('All');
  const [filterCat, setFilterCat] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [qty, setQty] = useState(1);

  const openM = (it) => {
    setSelectedItem(it);
    setQty(1);
    document.body.style.overflow = 'hidden';
  };

  const closeM = () => {
    setSelectedItem(null);
    document.body.style.overflow = '';
  };

  const updateQty = (delta) => {
    setQty(prev => Math.max(1, prev + delta));
  };

  const addToOrder = () => {
    alert(`Order Placed: ${qty} x ${selectedItem.name}`);
    closeM();
  };

  const filteredItems = menuItems.filter(it => {
    const matchesTag = filterTag === 'All' || it.tag === filterTag;
    const matchesCat = filterCat === 'All' || it.cat === filterCat;
    const matchesSearch = it.name.toLowerCase().includes(searchQuery.trim().toLowerCase());
    return matchesTag && matchesCat && matchesSearch;
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeM();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen text-[#EDE5D8] antialiased bg-[#050B17] relative overflow-hidden font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=DM+Sans:wght@400;500;700&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'DM Sans', sans-serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Video Background */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
          <source src="/videos/bgmenu.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-50 w-full bg-black/40 backdrop-blur-xl border-b border-white/10">
          <div className="w-full px-4 lg:px-12 py-4">
            <div className="flex flex-wrap items-center justify-between gap-y-4">
              <div className="flex items-center gap-2">
                <Link to="/" className="p-2 rounded-md text-white hover:text-[#C8A96B] transition-all">
                  <Home className="w-6 h-6" />
                </Link>
                <span className="font-serif text-2xl lg:text-3xl tracking-[0.2em] text-white uppercase hidden sm:block">
                  Menu
                </span>
              </div>

              <div className="order-3 lg:order-2 w-full lg:flex-1 lg:max-w-xl lg:mx-auto relative">
                <input
                  type="text"
                  placeholder="Search dish..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-[#C8A96B] focus:bg-white/10 transition-all text-white placeholder-gray-500 font-medium font-sans"
                />
                <svg className="absolute left-3 top-3 h-4 w-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="order-2 lg:order-3 flex gap-1.5 font-sans">
                {['All', 'Veg', 'Non-Veg'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setFilterTag(tag)}
                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                      filterTag === tag
                        ? 'bg-[#C8A96B] text-[#050B17]'
                        : 'bg-white/5 text-gray-400 border border-white/10 hover:text-white'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full border-t border-white/5 overflow-x-auto no-scrollbar font-serif">
            <div className="w-full px-4 lg:px-12 flex gap-8 lg:gap-14 py-3 lg:justify-center">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilterCat(c)}
                  className={`text-[11px] lg:text-sm uppercase tracking-[0.2em] whitespace-nowrap transition-all ${
                    filterCat === c
                      ? 'text-[#C8A96B]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="w-full px-4 lg:px-12 py-7 lg:py-12 relative z-10">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-10">
              {filteredItems.map((it) => (
                <div
                  key={it.id}
                  onClick={() => openM(it)}
                  className="card group relative bg-transparent backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden cursor-pointer hover:border-[#C8A96B] transition-all duration-500 flex flex-col"
                >
                  <div className="relative h-40 lg:h-52 overflow-hidden">
                    <img src={it.img} alt={it.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xl px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 border border-white/10 font-sans">
                      <span className={`w-1.5 h-1.5 rounded-full ${it.tag === 'Veg' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      {it.tag}
                    </div>
                  </div>

                  <div className="p-4 lg:p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-xl lg:text-2xl tracking-wide text-white truncate mb-1.5 transition-colors group-hover:text-[#C8A96B]">{it.name}</h3>
                    <p className="text-[11px] lg:text-sm text-gray-400 line-clamp-2 mb-6 font-medium leading-relaxed font-sans">{it.desc}</p>
                    <div className="mt-auto flex items-center justify-between font-sans">
                      <span className="font-serif text-lg lg:text-2xl text-[#C8A96B]">₹{it.price}</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black">{it.cat}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-black text-gray-400 uppercase tracking-widest font-serif">No dishes found</h3>
              <p className="text-gray-500 text-xs mt-2 uppercase font-bold tracking-widest font-sans">Try adjusting your filters</p>
            </div>
          )}
        </main>
      </div>

      {/* Detail Modal Sheet */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-transparent backdrop-blur-xl"
          onClick={closeM}
        >
          <div
            className="relative w-full max-w-lg md:max-w-4xl max-h-[80vh] md:max-h-none overflow-y-auto no-scrollbar bg-[#0a1223]/95 border border-white/10 rounded-[2.5rem] flex flex-col md:flex-row shadow-2xl animate-[scaleIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeM}
              className="absolute top-5 right-5 z-20 w-10 h-10 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-[#C8A96B] hover:text-black transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full md:w-5/12 h-64 md:h-auto overflow-hidden">
              <img src={selectedItem.img} alt={selectedItem.name} className="w-full h-full object-cover" />
            </div>

            <div className="w-full md:w-7/12 p-8 md:p-14 flex flex-col justify-between font-sans">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C8A96B]">{selectedItem.cat}</span>
                  <span className="text-white/10">|</span>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${selectedItem.tag === 'Veg' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{selectedItem.tag}</span>
                  </div>
                </div>

                <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 uppercase tracking-tight leading-none">{selectedItem.name}</h2>
                <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-10 font-medium">{selectedItem.desc}</p>

                <div className="flex items-center gap-6 mb-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Quantity</span>
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-1">
                    <button onClick={() => updateQty(-1)} className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-all text-xl font-bold">−</button>
                    <span className="px-6 text-lg font-black text-white">{qty}</span>
                    <button onClick={() => updateQty(1)} className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-lg transition-all text-xl font-bold">+</button>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-10 border-t border-white/10 flex items-center justify-between font-sans">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 block mb-1">Total Amount</span>
                  <div className="font-serif text-3xl md:text-4xl text-white leading-none">₹{(selectedItem.price * qty).toLocaleString('en-IN')}</div>
                </div>
                <button onClick={addToOrder} className="bg-[#C8A96B] hover:bg-[#dab97a] text-[#050B17] px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all transform active:scale-95 shadow-xl">
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
