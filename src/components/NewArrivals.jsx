import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { products } from '../data/mockData.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const NewArrivals = ({ onAddToWishlist, wishlist }) => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Shirts', 'Kids', 'Jeans', 'Ethnic'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="arrivals" className="pt-8 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-black font-display text-slate-900 dark:text-white tracking-tight">New Arrivals</h2>
          </div>
          
          {/* Horizontal scrollable filters */}
          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 w-full md:w-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-black whitespace-nowrap transition-all duration-300 ${
                  filter === f 
                    ? 'bg-[#111827] text-white shadow-md shadow-slate-900/10' 
                    : 'bg-white text-slate-500 dark:text-slate-400 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-700 flex flex-col relative"
          >
            <Link to={`/product/${product.id}`} className="absolute inset-0 z-10" />
            
            {/* Image Box */}
            <div className="relative aspect-[4/5] bg-slate-50 dark:bg-slate-900">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Badges */}
              <div className="absolute top-2 left-2 flex flex-col gap-1 z-20">
                {product.isNew && (
                  <span className="px-2 py-0.5 bg-[#111827] text-white text-[9px] font-black rounded-full uppercase tracking-widest">
                    New
                  </span>
                )}
                {product.discount && (
                  <span className="px-2 py-0.5 bg-white text-slate-900 text-[9px] font-black rounded-full uppercase tracking-widest shadow-sm">
                    -{product.discount}%
                  </span>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); onAddToWishlist(product); }}
                className={`absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center z-20 backdrop-blur-sm shadow-sm ${
                  wishlist?.includes(product.id) ? 'bg-white text-rose-500' : 'bg-white/70 text-slate-400'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${wishlist?.includes(product.id) ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Info Box */}
            <div className="p-3 flex flex-col flex-1">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{product.category}</p>
              <h3 className="text-xs font-black text-slate-900 dark:text-white leading-tight line-clamp-2 mb-1">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                <span className="text-[9px] font-bold text-slate-500">{product.rating}</span>
              </div>
              
              <div className="mt-auto flex items-end justify-between">
                <div className="flex flex-col">
                  <span className="text-slate-400 dark:text-slate-500 line-through text-[9px] font-bold">₹{product.originalPrice}</span>
                  <span className="text-sm font-black text-slate-900 dark:text-white">₹{product.price}</span>
                </div>
                
                <a 
                  href={`https://wa.me/9129497110?text=${encodeURIComponent(`Hi, I want to order ${product.name} (Price: ₹${product.price})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 bg-[#22C55E] text-white rounded-lg flex items-center justify-center shadow-md active:scale-90 transition-transform z-20 relative"
                  aria-label="Order on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default NewArrivals;
