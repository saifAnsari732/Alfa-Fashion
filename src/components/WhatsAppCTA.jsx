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

const WhatsAppCTA = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse" />
      
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-[3rem] p-12 sm:p-24 text-center border border-slate-200 dark:border-white/10 relative overflow-hidden group shadow-lg shadow-slate-200/50 dark:shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-blue-600/10 transition-all duration-700" />
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 mx-auto mb-10 rounded-[2rem] bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-600/30"
          >
            <Phone className="w-12 h-12 text-white" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-7xl font-black font-display text-slate-900 dark:text-white mb-8 tracking-tighter leading-none">
            Order Wholesale <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Clothing Stock</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Connect with our team for fast wholesale pricing, size availability, and delivery support for your shop.
            Get store-ready styles for men, ladies, and kids.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-center">
            <a
              href="https://wa.me/9129497110?text=Hi%20Factory%20Price!%20I%20want%20to%20order%20wholesale%20stock."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-12 py-6 bg-green-600 hover:bg-green-700 text-white font-black rounded-[1.5rem] transition-all hover:scale-105 shadow-2xl shadow-green-600/30 text-lg uppercase tracking-widest"
            >
              <Phone className="w-6 h-6" />
              Order on WhatsApp
            </a>
            <a
              href="https://www.google.com/search?sca_esv=d40cf40a0657004d&hl=en-IN&sxsrf=ANbL-n4NWO9g-gPaQJu_rJ3m9DL1XSxHoQ%3A1778583850432&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZ64Rik5F2fP51CwuvqQsfd7bR1IieNEorwsGd82JVlTtRdQsIUE00GXvEZCFBq5I8NjdCtdL1Jn7BeDU0ky76ZUhtIlAD7HpHxITU-qUw7ie80G9RrjSpsjIdTT6ZMwkILCm1z87OJWzyWsCvl4FQFTDR-2aNxrfvkO8RJIRZni8_hx5Q%3D%3D&q=Factory+Price+Readymade+Shop+%28+Mens%2FLadies%2FKids+genric+brand+Cloth+Showroom%29+Reviews&sa=X&ved=2ahUKEwjtw-6UzbOUAxXVaHADHT6JE04Q0bkNegQIJRAF&biw=1920&bih=919&dpr=1#lrd=0x39938d671b962d35:0xe46cc713e297d020,3,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-10 py-6 border border-slate-200 dark:border-slate-700 rounded-[1.5rem] bg-white text-slate-900 dark:bg-slate-900 dark:text-white font-black uppercase tracking-widest hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-lg"
            >
              <Star className="w-5 h-5 text-yellow-500" />
              Google Reviews
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default WhatsAppCTA;
