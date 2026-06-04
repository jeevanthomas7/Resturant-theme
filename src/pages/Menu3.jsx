import React, { useState, useEffect } from 'react';
import { Home, Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuData = [
  { id: 1, name: "Truffle Mushroom Burger", category: "Burgers", price: 1038, type: "veg", popular: true, desc: "Double portobello patties with truffle oil.", image: "/images/menu3/1.jpeg" },
  { id: 2, name: "Spicy Pepperoni Feast", category: "Pizza", price: 1494, type: "non-veg", popular: true, desc: "Spicy pepperoni with hot honey drizzle.", image: "/images/menu3/2.jpeg" },
  { id: 3, name: "Avocado Green Salad", category: "Salads", price: 747, type: "veg", popular: false, desc: "Kale, avocado, seeds, lime dressing.", image: "/images/menu3/3.jpeg" },
  { id: 4, name: "Korean Fried Wings", category: "Sides", price: 913, type: "non-veg", popular: true, desc: "Crispy wings in spicy glaze.", image: "/images/menu3/4.jpeg" },
  { id: 5, name: "Mediterranean Bowl", category: "Salads", price: 1204, type: "veg", popular: false, desc: "Falafel, hummus, quinoa bowl.", image: "/images/menu3/5.jpeg" },
  { id: 6, name: "Classic Margarita", category: "Drinks", price: 540, type: "veg", popular: false, desc: "Fresh lime and salt rim.", image: "/images/menu3/6.jpeg" },
  { id: 7, name: "BBQ Chicken Burger", category: "Burgers", price: 1079, type: "non-veg", popular: true, desc: "Grilled chicken with BBQ sauce.", image: "/images/menu3/7.jpeg" },
  { id: 12, name: "Cheese Burst Pizza", category: "Pizza", price: 1577, type: "veg", popular: true, desc: "Extra cheese overload.", image: "/images/menu3/8.jpeg" },
  { id: 15, name: "Chicken Biryani", category: "Main Course", price: 1245, type: "non-veg", popular: true, desc: "Aromatic basmati rice with chicken.", image: "/images/menu3/9.jpeg" },
  { id: 20, name: "Chicken Shawarma", category: "Wraps", price: 747, type: "non-veg", popular: true, desc: "Middle eastern wrap.", image: "/images/menu3/10.jpeg" },
  { id: 25, name: "Ice Cream Sundae", category: "Desserts", price: 498, type: "veg", popular: true, desc: "Ice cream with toppings.", image: "/images/menu3/11.jpeg" }
];

const categories = ["All", "Burgers", "Pizza", "Salads", "Sides", "Drinks", "Main Course", "Wraps", "Desserts"];

export default function Menu3() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalQty, setModalQty] = useState(1);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalQty(1);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = '';
  };

  const shouldShowItem = (item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDiet = dietaryFilter === 'all' || item.type === dietaryFilter;
    return matchesSearch && matchesDiet;
  };

  const hasItems = (category) => {
    return menuData.some(item => {
      const belongs = category === 'All' || item.category === category;
      return belongs && shouldShowItem(item);
    });
  };

  const addToOrder = () => {
    alert(`Order Placed: ${modalQty} x ${selectedItem.name}`);
    closeModal();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const hasResults = menuData.some(shouldShowItem);

  return (
    <div className="antialiased text-gray-800 bg-gray-50 min-h-screen font-sans">
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="w-full px-4 md:px-12 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center">
            <Link to="/" className="p-2 bg-orange-500 rounded-xl text-white hover:bg-black transition-all">
              <Home className="w-5 h-5" />
            </Link>
            <span className="font-black text-xl ml-2 tracking-tighter hidden sm:block">
              Special<span className="text-orange-500">Menu</span>
            </span>
          </div>

          <div className="flex-1 max-w-2xl relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a dish..."
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
            />
          </div>

          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${
                dietaryFilter === 'all' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setDietaryFilter('veg')}
              className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase transition-all ${
                dietaryFilter === 'veg' ? 'bg-white shadow-sm text-green-600' : 'text-gray-500'
              }`}
            >
              Veg
            </button>
          </div>
        </div>

        <div className="w-full px-4 md:px-12 bg-white border-t border-gray-50 overflow-x-auto hide-scrollbar">
          <div className="flex w-max md:w-full md:justify-center gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-4 px-1 border-b-2 font-bold text-xs uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? 'text-orange-500 border-orange-500'
                    : 'text-gray-400 border-transparent hover:text-orange-500'
                }`}
              >
                {cat === 'All' ? 'All Items' : cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="w-full px-4 md:px-12 pt-8 pb-20">
        {hasResults ? (
          <div className="space-y-12">
            {categories
              .filter((c) => activeCategory === 'All' || activeCategory === c)
              .map((section) => {
                if (!hasItems(section)) return null;
                const sectionItems = menuData.filter(
                  (item) =>
                    (section === 'All' || item.category === section) && shouldShowItem(item)
                );

                return (
                  <section key={section} className="scroll-mt-24">
                    <div className="mb-8 flex items-center gap-4">
                      <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em]">{section}</h2>
                      <div className="flex-1 h-px bg-gray-200/60"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
                      {sectionItems.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => openModal(item)}
                          className="bg-white rounded-2xl md:rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group cursor-pointer overflow-hidden"
                        >
                          <div className="relative pt-[75%] overflow-hidden bg-gray-100">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {item.popular && (
                              <div className="absolute top-3 left-3 bg-orange-500 text-white text-[8px] font-black px-2 py-1 rounded-lg tracking-tighter uppercase">
                                Popular
                              </div>
                            )}
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-filter backdrop-blur-sm p-1.5 rounded-xl border border-gray-100">
                              <div
                                className={`w-2.5 h-2.5 border-2 flex items-center justify-center rounded-sm ${
                                  item.type === 'veg' ? 'border-green-600' : 'border-red-600'
                                }`}
                              >
                                <div
                                  className={`w-1 h-1 rounded-full ${
                                    item.type === 'veg' ? 'bg-green-600' : 'bg-red-600'
                                  }`}
                                ></div>
                              </div>
                            </div>
                          </div>

                          <div className="p-4 flex flex-col flex-1">
                            <div className="flex justify-between items-start gap-2 mb-2">
                              <h3 className="font-bold text-sm md:text-base text-gray-900 line-clamp-1 group-hover:text-orange-500 transition-colors">
                                {item.name}
                              </h3>
                              <span className="text-sm font-black text-gray-900 whitespace-nowrap">₹{item.price}</span>
                            </div>

                            <p className="hidden sm:block text-gray-400 text-[10px] md:text-xs line-clamp-2 mb-4 flex-1 leading-relaxed font-medium">
                              {item.desc}
                            </p>

                            <div className="mt-auto pt-3 border-t border-gray-50 flex items-center justify-between">
                              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter">15-20 min</span>
                              <button className="bg-gray-900 text-white px-5 py-1.5 rounded-xl text-[10px] font-black uppercase hover:bg-orange-500 transition-all transform active:scale-95">
                                Add
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                );
              })}
          </div>
        ) : (
          <div className="py-32 text-center flex flex-col items-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Search className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-lg font-black text-gray-400 uppercase tracking-widest">No dishes found</h3>
            <p className="text-gray-300 text-xs mt-2 uppercase font-bold tracking-widest">Try adjusting your filters</p>
          </div>
        )}
      </main>

      {/* Modal Item */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black bg-opacity-60 backdrop-filter backdrop-blur-md"
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-3xl rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row animate-[zoomIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 z-20 w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-900 hover:text-red-500 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
            </div>

            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-5 h-5 border-2 p-0.5 rounded-md flex items-center justify-center ${
                      selectedItem.type === 'veg' ? 'border-green-600' : 'border-red-600'
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        selectedItem.type === 'veg' ? 'bg-green-600' : 'bg-red-600'
                      }`}
                    ></div>
                  </div>
                  <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em]">
                    {selectedItem.category}
                  </span>
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4 leading-none">{selectedItem.name}</h2>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                  {selectedItem.desc}
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest block mb-1">
                      Total Price
                    </span>
                    <span className="text-3xl font-black text-gray-900">₹{selectedItem.price * modalQty}</span>
                  </div>
                  <div className="flex items-center bg-gray-100 rounded-2xl p-1.5 border border-gray-200">
                    <button
                      onClick={() => setModalQty((prev) => Math.max(1, prev - 1))}
                      className="w-10 h-10 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-xl transition-all font-black"
                    >
                      -
                    </button>
                    <span className="px-6 text-sm font-black">{modalQty}</span>
                    <button
                      onClick={() => setModalQty((prev) => prev + 1)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-white hover:shadow-sm rounded-xl transition-all font-black"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={addToOrder}
                  className="w-full bg-gray-900 hover:bg-orange-500 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl transform active:scale-95"
                >
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
