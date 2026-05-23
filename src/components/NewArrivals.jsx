import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, Heart, Search, Menu, X, Phone, 
  MapPin, ArrowRight, Star, Play,
  TrendingUp, Shield, Truck, Users, Sparkles, Clock,
  Filter, Grid3X3, Plus, Minus, Trash2
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { categories, products, reviews, reels, trendingItems } from '../data/mockData.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const NewArrivals = ({ onAddToCart, onAddToWishlist, wishlist }) => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Shirts', 'Kids', 'Jeans', 'Ethnic'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="arrivals" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="text-blue-600 dark:text-blue-500 text-sm font-black tracking-[0.3em] uppercase underline decoration-2 underline-offset-8">Just Dropped</span>
            <h2 className="text-4xl sm:text-6xl font-black font-display mt-4 text-slate-900 dark:text-white tracking-tight">New Arrivals</h2>
            <p className="text-slate-600 dark:text-gray-400 mt-6 text-lg">Fresh styles arrived this week. Premium quality at competitive prices.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-3 bg-white/50 dark:bg-white/5 p-2 rounded-[2rem] border border-slate-200 dark:border-white/5 overflow-x-auto hide-scrollbar"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-8 py-3 rounded-[1.5rem] text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                  filter === f 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                    : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 card-hover shadow-xl shadow-slate-200/20 dark:shadow-none h-full flex flex-col group/card">
                <Link to={`/product/${product.id}`} className="absolute inset-0 z-10" aria-label={`View details for ${product.name}`} />
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-xl">
                        New
                      </span>
                    )}
                    {product.discount && (
                      <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-xl">
                        -{product.discount}%
                      </span>
                    )}
                  </div>

                  {/* Actions Overlay */}
                  <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-20 pointer-events-none">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); onAddToWishlist(product); }}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors pointer-events-auto ${
                        wishlist.includes(product.id) ? 'bg-blue-600 text-white' : 'bg-white/20 backdrop-blur text-white hover:bg-blue-600'
                      }`}
                    >
                      <Heart className={`w-6 h-6 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                    </motion.button>
                    <motion.a
                      href={`https://wa.me/9129497110?text=${encodeURIComponent(`Hi, I want to order ${product.name} (Price: ₹${product.price})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-2xl bg-white text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors shadow-2xl"
                    >
                      <WhatsAppIcon className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-3 sm:p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="text-[8px] sm:text-[10px] font-black text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-1">{product.category}</p>
                      <h3 className="text-xs sm:text-lg font-black text-slate-900 dark:text-white leading-tight line-clamp-2 sm:line-clamp-1">
                        <Link to={`/product/${product.id}`} className="block hover:text-blue-600 transition-colors">
                          {product.name}
                        </Link>
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-2 sm:w-3 h-2 sm:h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-slate-700'}`} 
                      />
                    ))}
                    <span className="text-[8px] sm:text-[10px] font-bold text-slate-500 ml-1">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between gap-1 mt-2">
                    <div className="flex flex-col">
                      <span className="text-slate-400 dark:text-slate-500 line-through text-[10px] sm:text-xs font-bold leading-tight">₹{product.originalPrice}</span>
                      <span className="text-base sm:text-xl font-black text-slate-900 dark:text-white leading-tight">₹{product.price}</span>
                    </div>
                    <a 
                      href={`https://wa.me/9129497110?text=${encodeURIComponent(`Hi, I want to order ${product.name} (Price: ₹${product.price})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 hover:bg-green-700 text-white rounded-xl flex items-center justify-center transition-all shadow-lg shadow-green-600/20 active:scale-95 z-20 relative"
                      aria-label="Order on WhatsApp"
                    >
                      <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    </a>
                  </div>
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
