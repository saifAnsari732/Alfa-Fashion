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

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Categories = () => {
  return (
    <section id="categories" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative premium ambient glow effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/5 dark:bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--color-primary)] text-sm font-black tracking-[0.3em] uppercase">Shop by Department</span>
          <h2 className="text-4xl sm:text-5xl font-black font-display mt-4 text-slate-900 dark:text-white tracking-tight">Our Collections</h2>
          <div className="w-20 h-1.5 bg-[var(--color-primary)] mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden glass border border-[var(--color-border-light)] shadow-2xl transition-all duration-500 group-hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                {/* Background Image with Fallback */}
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800" />
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="relative z-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient Overlay - Reduced Opacity for better image visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity z-10" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    {category.itemCount} Items
                  </span>
                  <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                    {category.name}
                  </h3>
                  
                  {/* Glowing Underline */}
                  <div className="w-0 h-1 bg-[var(--color-primary)] group-hover:w-full transition-all duration-500 rounded-full mb-6" />
                  
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-white/80 text-sm font-bold"
                  >
                    Explore Collection <ArrowRight className="w-4 h-4 text-[var(--color-primary)]" />
                  </motion.div>
                </div>
                
                {/* Accessibility Link/Focus Overlay */}
                <Link 
                  to={`/collection/${encodeURIComponent(category.name)}`} 
                  className="absolute inset-0 z-10 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] rounded-3xl"
                  aria-label={`View ${category.name} collection`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

