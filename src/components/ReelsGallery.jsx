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
import { categories, products, reviews, reels, trendingItems } from '../data/mockData.js';

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const ReelsGallery = () => {
  return (
    <section id="reels" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900/30 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 dark:text-blue-500 text-sm font-black tracking-[0.3em] uppercase underline decoration-2 underline-offset-8">Our Impact</span>
            <h2 className="text-4xl sm:text-6xl font-black font-display mt-4 text-slate-900 dark:text-white tracking-tight">Case Studies</h2>
            <p className="text-slate-600 dark:text-gray-400 mt-6 text-lg">See how we've helped brands achieve explosive growth through digital excellence.</p>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex items-center gap-4 bg-white/50 dark:bg-white/5 px-8 py-4 rounded-full border border-slate-200 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 transition-all shadow-sm dark:shadow-none"
          >
            <InstagramIcon className="w-6 h-6 text-blue-600" />
            <span className="font-bold text-slate-800 dark:text-white">Follow Our Journey</span>
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {reels.map((reel, index) => (
            <motion.a
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              key={reel.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group block"
            >
              <div className="relative reel-card rounded-[2rem] overflow-hidden border-2 border-slate-200 dark:border-white/5 group-hover:border-blue-600 transition-all duration-500 shadow-xl shadow-slate-200/50 dark:shadow-2xl aspect-[9/16] bg-slate-800">
                <img 
                  src={reel.thumbnail} 
                  alt="Case Study"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30"
                  >
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent">
                  <div className="flex items-center justify-between text-[10px] font-black text-white uppercase tracking-widest">
                    <span className="flex items-center gap-1.5 bg-blue-600/80 px-2 py-1 rounded-full">
                      <TrendingUp className="w-2.5 h-2.5" /> {reel.views} Views
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};





export default ReelsGallery;
