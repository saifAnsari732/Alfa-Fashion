import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, Heart, Search, Menu, X, Phone, 
  MapPin, ArrowRight, Star, Play,
  TrendingUp, Shield, Truck, Users, Sparkles, Clock,
  Filter, Grid3X3, Plus, Minus, Trash2
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Link } from 'react-router-dom';
import { categories, products, reviews, reels, trendingItems } from '../data/mockData.js';

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const SearchModal = ({ isOpen, onClose, products, onAddToCart }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const filtered = products.filter((p) => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query, products]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl z-[60] flex items-start justify-center pt-24 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="w-full max-w-3xl"
          >
            <div className="relative mb-12">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-red-600 dark:text-red-500" />
              <input
                type="text"
                placeholder="Search for branded shirts, kids wear..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-16 pr-16 py-6 bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-3xl text-xl font-bold text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-gray-500 focus:outline-none focus:border-red-500/50 shadow-lg dark:shadow-2xl transition-all"
                autoFocus
              />
              <button onClick={onClose} className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-slate-200 dark:bg-white/5 rounded-xl text-slate-500 dark:text-gray-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {results.length > 0 ? (
                results.map((product) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    key={product.id} 
                    className="bg-white dark:glass rounded-3xl overflow-hidden group border border-slate-200 dark:border-white/5 shadow-md dark:shadow-none"
                  >
                    <div className="aspect-[4/5] relative">
                      <Link to={`/product/${product.id}`} onClick={onClose} className="absolute inset-0 z-10" aria-label={`View details for ${product.name}`} />
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-all" />
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] font-black text-red-600 dark:text-red-500 uppercase tracking-widest mb-1">{product.category}</p>
                      <h4 className="text-slate-900 dark:text-white font-bold line-clamp-1 mb-3">
                        <Link to={`/product/${product.id}`} onClick={onClose} className="hover:text-blue-600 transition-colors">
                          {product.name}
                        </Link>
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-black text-slate-900 dark:text-white">₹{product.price}</span>
                        <button 
                          onClick={(e) => { e.preventDefault(); onAddToCart(product); onClose(); }}
                          className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform z-20 relative"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : query && (
                <div className="col-span-full py-20 text-center">
                  <Search className="w-16 h-16 text-slate-300 dark:text-slate-800 mx-auto mb-6" />
                  <p className="text-slate-500 dark:text-gray-500 text-xl font-bold">No items found matching "{query}"</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};




export default SearchModal;
