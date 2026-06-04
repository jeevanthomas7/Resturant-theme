import React, { useState, useEffect } from 'react';
import { Home, Search, List, Heart, ChevronDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuData = [
  {
    category: "Recommended",
    items: [
      { id: 1, name: "Chicken Dum Biriyani", price: 240, type: "non-veg", desc: "Classic dum biriyani with rich spices.", img: "/images/menu2/b4.jpg" },
      { id: 2, name: "Beef Fry Kerala", price: 210, type: "non-veg", desc: "Spicy roasted beef with coconut slices.", img: "/images/menu2/r3.jpg" },
      { id: 3, name: "Paneer Butter Masala", price: 180, type: "veg", desc: "Soft paneer cubes in creamy tomato gravy.", img: "/images/menu2/a3.jpeg" },
      { id: 4, name: "Chicken 65", price: 200, type: "non-veg", desc: "Crispy deep fried spicy chicken.", img: "/images/menu2/t1.jpeg" }
    ]
  },
  {
    category: "Arabic",
    items: [
      { id: 10, name: "Chicken Mandhi", price: 260, type: "non-veg", desc: "Arabian rice with juicy chicken.", img: "/images/menu2/b1.jpeg" },
      { id: 11, name: "Beef Mandhi", price: 300, type: "non-veg", desc: "Rich beef mandhi platter.", img: "/images/menu2/b2.jpeg" },
      { id: 12, name: "Kuboos Bread", price: 20, type: "veg", desc: "Soft Arabic bread.", img: "/images/menu2/b4.jpg" },
      { id: 13, name: "Hummus Dip", price: 80, type: "veg", desc: "Creamy chickpea dip.", img: "/images/menu2/f1.jpeg" }
    ]
  },
  {
    category: "Biryani",
    items: [
      { id: 15, name: "Chicken Biriyani", price: 220, type: "non-veg", desc: "Traditional dum biriyani.", img: "/images/menu2/r1.jpeg" },
      { id: 16, name: "Mutton Biriyani", price: 340, type: "non-veg", desc: "Tender mutton slow cooked rice.", img: "/images/menu2/r2.png" },
      { id: 17, name: "Egg Biriyani", price: 180, type: "non-veg", desc: "Spiced egg biriyani.", img: "/images/menu2/r3.jpg" },
      { id: 18, name: "Veg Biriyani", price: 160, type: "veg", desc: "Mixed vegetable biriyani.", img: "/images/menu2/b4.jpg" }
    ]
  },
  {
    category: "Rice",
    items: [
      { id: 20, name: "Jeera Rice", price: 110, type: "veg", desc: "Fluffy cumin rice.", img: "/images/menu2/rr1.jpeg" },
      { id: 21, name: "Veg Fried Rice", price: 150, type: "veg", desc: "Chinese style veg rice.", img: "/images/menu2/rr2.jpeg" },
      { id: 22, name: "Chicken Fried Rice", price: 180, type: "non-veg", desc: "Chicken fried rice.", img: "/images/menu2/rr3.jpeg" },
      { id: 23, name: "Egg Fried Rice", price: 160, type: "non-veg", desc: "Egg fried rice.", img: "/images/menu2/rr4.jpeg" }
    ]
  },
  {
    category: "Starters",
    subcategories: [
      {
        name: "Shawarma",
        items: [
          { id: 6, name: "Chicken Shawarma Roll", price: 120, type: "non-veg", desc: "Grilled chicken wrapped in kuboos.", img: "/images/menu2/s1.jpeg" },
          { id: 7, name: "Beef Shawarma Roll", price: 140, type: "non-veg", desc: "Juicy beef shawarma wrap.", img: "/images/menu2/s2.jpeg" }
        ]
      },
      {
        name: "Grills",
        items: [
          { id: 8, name: "Al Faham Half", price: 280, type: "non-veg", desc: "Charcoal grilled chicken half.", img: "/images/menu2/s3.jpeg" }
        ]
      }
    ]
  },
  {
    category: "Breads",
    items: [
      { id: 30, name: "Butter Naan", price: 40, type: "veg", desc: "Soft naan.", img: "/images/menu2/rr1.jpeg" },
      { id: 31, name: "Garlic Naan", price: 50, type: "veg", desc: "Garlic naan.", img: "/images/menu2/v1.png" },
      { id: 32, name: "Tandoori Roti", price: 30, type: "veg", desc: "Wheat roti.", img: "/images/menu2/v2.png" },
      { id: 33, name: "Parotta", price: 20, type: "veg", desc: "Layered bread.", img: "/images/menu2/v3.jpeg" }
    ]
  },
  {
    category: "Veg",
    items: [
      { id: 35, name: "Paneer Butter Masala", price: 180, type: "veg", desc: "Paneer curry.", img: "/images/menu2/v1.png" },
      { id: 36, name: "Veg Kurma", price: 160, type: "veg", desc: "Mixed veg curry.", img: "/images/menu2/b1.jpeg" },
      { id: 37, name: "Dal Fry", price: 140, type: "veg", desc: "Lentil curry.", img: "/images/menu2/v1.png" },
      { id: 38, name: "Aloo Gobi", price: 150, type: "veg", desc: "Potato cauliflower.", img: "/images/menu2/v2.png" },
      { id: 39, name: "Palak Paneer", price: 170, type: "veg", desc: "Spinach paneer.", img: "/images/menu2/v3.jpeg" }
    ]
  },
  {
    category: "Non Veg",
    items: [
      { id: 40, name: "Chicken Curry", price: 210, type: "non-veg", desc: "Traditional curry.", img: "/images/menu2/f1.jpeg" },
      { id: 41, name: "Beef Curry", price: 230, type: "non-veg", desc: "Rich beef curry.", img: "/images/menu2/r1.jpeg" },
      { id: 42, name: "Mutton Curry", price: 280, type: "non-veg", desc: "Spicy mutton curry.", img: "/images/menu2/r2.png" },
      { id: 43, name: "Chicken Roast", price: 240, type: "non-veg", desc: "Dry roasted chicken.", img: "/images/menu2/r3.jpg" },
      { id: 44, name: "Pepper Chicken", price: 220, type: "non-veg", desc: "Pepper spicy.", img: "/images/menu2/r4.jpeg" }
    ]
  },
  {
    category: "Fish Items",
    items: [
      { id: 45, name: "Fish Fry", price: 220, type: "non-veg", desc: "Crispy fish fry.", img: "/images/menu2/f1.jpeg" },
      { id: 46, name: "Fish Curry", price: 240, type: "non-veg", desc: "Spicy fish curry.", img: "/images/menu2/r1.jpeg" },
      { id: 47, name: "Fish Moilee", price: 260, type: "non-veg", desc: "Coconut curry fish.", img: "/images/menu2/r2.png" },
      { id: 48, name: "Grilled Fish", price: 300, type: "non-veg", desc: "Grilled fish.", img: "/images/menu2/r3.jpg" },
      { id: 49, name: "Fish Tikka", price: 280, type: "non-veg", desc: "Tandoori fish.", img: "/images/menu2/r4.jpeg" }
    ]
  },
  {
    category: "Tandoori",
    items: [
      { id: 50, name: "Chicken Tandoori Half", price: 280, type: "non-veg", desc: "Half grilled chicken.", img: "/images/menu2/t1.jpeg" },
      { id: 51, name: "Chicken Tandoori Full", price: 520, type: "non-veg", desc: "Full grilled chicken.", img: "/images/menu2/b2.jpeg" },
      { id: 52, name: "Paneer Tikka", price: 220, type: "veg", desc: "Grilled paneer.", img: "/images/menu2/a3.jpeg" },
      { id: 53, name: "Chicken Tikka", price: 260, type: "non-veg", desc: "Chicken tikka.", img: "/images/menu2/f1.jpeg" },
      { id: 54, name: "Malai Tikka", price: 270, type: "non-veg", desc: "Creamy tikka.", img: "/images/menu2/r3.jpg" }
    ]
  }
];

export default function Menu2() {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(new Set());
  const [selectedItem, setSelectedItem] = useState(null);
  const [qty, setQty] = useState(1);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [openSubcategories, setOpenSubcategories] = useState({});

  const toggleSub = (sectionId) => {
    setOpenSubcategories(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleFav = (e, id) => {
    e.stopPropagation();
    const newFavs = new Set(favorites);
    if (newFavs.has(id)) {
      newFavs.delete(id);
    } else {
      newFavs.add(id);
    }
    setFavorites(newFavs);
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setQty(1);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = '';
  };

  const quickAdd = (e, item) => {
    e.stopPropagation();
    alert(`Added to Cart: 1 x ${item.name}`);
  };

  const addToCart = () => {
    alert(`Added to Cart: ${qty} x ${selectedItem.name}`);
    closeModal();
  };

  const updateQty = (delta) => {
    setQty(prev => Math.max(1, prev + delta));
  };

  const getAllItems = (section) => {
    let items = [];
    if (section.subcategories) {
      section.subcategories.forEach(sub => {
        items = items.concat(sub.items);
      });
    }
    if (section.items) {
      items = items.concat(section.items);
    }
    return items;
  };

  const filterItem = (item) => {
    const matchType = currentFilter === 'all' || item.type === currentFilter;
    const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchType && matchSearch;
  };

  const scrollToSec = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 90, behavior: 'smooth' });
    }
    setIsMobileDrawerOpen(false);
  };

  // Close modals on Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f4f0] text-gray-800 antialiased font-sans">
      {/* Sticky Sub Header */}
      <nav className="sticky top-0 z-[100] bg-white border-b border-gray-200 shadow-sm">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center px-5 lg:px-12 py-3 gap-4">
          <Link to="/" className="p-2 bg-green-500 rounded-lg text-white hover:bg-black transition-all">
            <Home className="w-5 h-5" />
          </Link>
          <div className="whitespace-nowrap">
            <h1 className="text-green-700 font-extrabold text-xl">Special Menu</h1>
          </div>
          <div className="flex-1 relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition"
            />
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center bg-gray-100 rounded-xl p-1 gap-1">
            {['all', 'veg', 'non-veg'].map((filter) => (
              <button
                key={filter}
                onClick={() => setCurrentFilter(filter)}
                className={`px-5 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                  currentFilter === filter
                    ? 'bg-white text-green-600 shadow-sm'
                    : 'text-gray-500 hover:text-green-600'
                }`}
              >
                {filter === 'all' ? 'All' : filter === 'veg' ? 'Veg' : 'Non-Veg'}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden px-4 py-3 bg-white">
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-green-700 font-extrabold text-lg">Special Menu</h1>
            <Link to="/" className="bg-green-700 p-2 rounded-lg text-white">
              <Home className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              className="flex-1 bg-gray-50 border border-gray-200 py-2 rounded-xl flex items-center justify-center font-bold text-sm gap-2"
            >
              <List className="w-4 h-4" /> Category
            </button>
            <div className="flex items-center bg-gray-100 rounded-xl p-1 gap-1">
              {['all', 'veg', 'non-veg'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setCurrentFilter(filter)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase ${
                    currentFilter === filter
                      ? 'bg-white text-green-600 shadow-sm'
                      : 'text-gray-500'
                  }`}
                >
                  {filter === 'all' ? 'All' : filter === 'veg' ? 'Veg' : 'Non-Veg'}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-2.5 relative">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-green-400"
            />
            <Search className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </nav>

      {/* Main Body */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="hidden md:block w-70 lg:w-84 border-r border-gray-200 bg-white sticky top-[73px] self-start h-[calc(100vh-73px)] overflow-y-auto no-scrollbar">
          <div className="p-4 text-[11px] font-extrabold text-gray-500 uppercase tracking-widest bg-gray-100 border-b border-gray-200">
            Categories
          </div>
          <div className="flex flex-col">
            {menuData.map((section) => {
              const visibleCount = getAllItems(section).filter(filterItem).length;
              if (visibleCount === 0) return null;
              const sectionId = 'sec-' + section.category.toLowerCase().replace(/\s+/g, '-');

              if (section.subcategories) {
                const isOpen = !!openSubcategories[sectionId];
                return (
                  <div key={section.category} className="border-b border-gray-100">
                    <button
                      onClick={() => toggleSub(sectionId)}
                      className="w-full flex items-center justify-between p-4 hover:bg-green-50 transition-all font-bold text-gray-700"
                    >
                      <span>{section.category}</span>
                      <div className="flex items-center gap-2">
                        <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-black">
                          {visibleCount}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="bg-green-50/20">
                        {section.subcategories.map(sub => (
                          <button
                            key={sub.name}
                            onClick={() => scrollToSec('sub-' + sub.name.toLowerCase().replace(/\s+/g, '-'))}
                            className="w-full text-left pl-10 pr-4 py-3 text-[11px] font-black uppercase text-gray-400 hover:text-green-700 transition-colors"
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              } else {
                return (
                  <button
                    key={section.category}
                    onClick={() => scrollToSec(sectionId)}
                    className="w-full flex items-center justify-between p-4 border-b border-gray-100 hover:bg-green-50 transition-all font-bold text-gray-700"
                  >
                    <span>{section.category}</span>
                    <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded-full font-black">
                      {visibleCount}
                    </span>
                  </button>
                );
              }
            })}
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 p-4 md:p-8 lg:p-12 bg-[#f0f4f0]">
          <div className="max-w-7xl mx-auto space-y-12">
            {menuData.map((section) => {
              const visibleItems = getAllItems(section).filter(filterItem);
              if (visibleItems.length === 0) return null;
              const sectionId = 'sec-' + section.category.toLowerCase().replace(/\s+/g, '-');

              return (
                <div key={section.category} id={sectionId} className="scroll-mt-24">
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-xl font-black text-gray-900 border-l-4 border-green-600 pl-4">{section.category}</h2>
                    <div className="h-px bg-gray-200 flex-1"></div>
                  </div>

                  {section.items && (
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-10">
                      {section.items.filter(filterItem).map(item => (
                        <MenuItemCard
                          key={item.id}
                          item={item}
                          isFav={favorites.has(item.id)}
                          onFavToggle={(e) => toggleFav(e, item.id)}
                          onCardClick={() => openModal(item)}
                          onQuickAdd={(e) => quickAdd(e, item)}
                        />
                      ))}
                    </div>
                  )}

                  {section.subcategories && section.subcategories.map(sub => {
                    const subVisible = sub.items.filter(filterItem);
                    if (subVisible.length === 0) return null;
                    const subId = 'sub-' + sub.name.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <div key={sub.name} id={subId} className="scroll-mt-24 mb-10 pl-4">
                        <h4 className="text-xs font-black uppercase text-green-600 tracking-[0.2em] mb-4">{sub.name}</h4>
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                          {subVisible.map(item => (
                            <MenuItemCard
                              key={item.id}
                              item={item}
                              isFav={favorites.has(item.id)}
                              onFavToggle={(e) => toggleFav(e, item.id)}
                              onCardClick={() => openModal(item)}
                              onQuickAdd={(e) => quickAdd(e, item)}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}

            {/* Empty State */}
            {menuData.every(s => getAllItems(s).filter(filterItem).length === 0) && (
              <div className="py-32 text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                  <Search className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="text-lg font-black text-gray-400 uppercase tracking-widest">No dishes found</h3>
                <p className="text-gray-300 text-xs mt-2 uppercase font-bold tracking-widest">Try adjusting your filters</p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Item Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row animate-[zoomIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black transition-all"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex flex-col md:flex-row w-full">
              <div className="md:w-5/12 h-48 md:h-auto overflow-hidden">
                <img className="w-full h-full object-cover mobile-modal-img" src={selectedItem.img} alt={selectedItem.name} />
              </div>
              <div className="md:w-7/12 p-6 md:p-8 flex flex-col justify-between min-h-[350px]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <VegIndicator type={selectedItem.type} />
                    <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">{selectedItem.name}</h2>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{selectedItem.desc}</p>
                  
                  <div className="mt-6">
                    <div className="flex items-center bg-gray-100 rounded-xl p-1 w-fit">
                      <button onClick={() => updateQty(-1)} className="w-9 h-9 flex items-center justify-center bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-all font-bold text-lg text-gray-700">−</button>
                      <span className="px-5 font-black text-lg text-gray-900">{qty}</span>
                      <button onClick={() => updateQty(1)} className="w-9 h-9 flex items-center justify-center bg-green-100 rounded-lg shadow-sm hover:bg-green-200 transition-all font-bold text-lg text-green-700">+</button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Total Price</div>
                    <span className="text-2xl font-black text-gray-900 tracking-tight">₹{selectedItem.price * qty}</span>
                  </div>
                  <button onClick={addToCart} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-2xl font-black shadow-lg shadow-green-600/20 transition-all transform active:scale-95 text-xs uppercase tracking-widest">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {isMobileDrawerOpen && (
        <div
          className="fixed inset-0 z-[150] bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileDrawerOpen(false)}
        >
          <div
            className="absolute bottom-0 inset-x-0 bg-white rounded-t-[2.5rem] p-6 max-h-[80vh] overflow-y-auto animate-[slideUp_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6"></div>
            <h3 className="font-black text-xl mb-6 text-gray-900 px-2">Select Category</h3>
            <div className="space-y-2">
              {menuData.map((section) => {
                const visibleCount = getAllItems(section).filter(filterItem).length;
                if (visibleCount === 0) return null;
                const sectionId = 'sec-' + section.category.toLowerCase().replace(/\s+/g, '-');

                if (section.subcategories) {
                  const isOpen = !!openSubcategories[sectionId];
                  return (
                    <div key={section.category} className="border-b border-gray-100">
                      <button
                        onClick={() => toggleSub(sectionId)}
                        className="w-full flex items-center justify-between py-3 hover:bg-green-50 transition-all font-bold text-gray-700"
                      >
                        <span>{section.category}</span>
                        <div className="flex items-center gap-2">
                          <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-black">
                            {visibleCount}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </button>
                      {isOpen && (
                        <div className="bg-green-50/20 py-2">
                          {section.subcategories.map(sub => (
                            <button
                              key={sub.name}
                              onClick={() => scrollToSec('sub-' + sub.name.toLowerCase().replace(/\s+/g, '-'))}
                              className="w-full text-left pl-6 pr-4 py-2.5 text-[11px] font-black uppercase text-gray-400 hover:text-green-700 transition-colors"
                            >
                              {sub.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                } else {
                  return (
                    <button
                      key={section.category}
                      onClick={() => scrollToSec(sectionId)}
                      className="w-full flex items-center justify-between py-3 border-b border-gray-100 hover:bg-green-50 transition-all font-bold text-gray-700"
                    >
                      <span>{section.category}</span>
                      <span className="bg-gray-100 text-gray-500 text-[10px] px-2 py-0.5 rounded-full font-black">
                        {visibleCount}
                      </span>
                    </button>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

function VegIndicator({ type }) {
  const isVeg = type === 'veg';
  return (
    <div className={`w-4 h-4 border-2 flex items-center justify-center rounded-sm ${isVeg ? 'border-green-700' : 'border-red-700'}`}>
      <div className={`${isVeg ? 'w-1.5 h-1.5 bg-green-700 rounded-full' : 'w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[6px] border-b-red-700'}`}></div>
    </div>
  );
}

function MenuItemCard({ item, isFav, onFavToggle, onCardClick, onQuickAdd }) {
  return (
    <div
      onClick={onCardClick}
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col group"
    >
      <div className="relative aspect-[16/10] overflow-hidden p-2">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <button
          onClick={onFavToggle}
          className={`absolute top-4 right-4 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center transition-colors ${
            isFav ? 'text-red-500' : 'text-gray-400'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
        </button>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start gap-2 mb-1.5">
          <VegIndicator type={item.type} />
          <h3 className="text-sm font-extrabold text-gray-900 leading-tight truncate">{item.name}</h3>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-4 flex-1">{item.desc}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-base font-black text-gray-900">₹{item.price}</span>
          <button
            onClick={onQuickAdd}
            className="w-9 h-9 rounded-full border-2 border-green-600 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all font-black text-xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
