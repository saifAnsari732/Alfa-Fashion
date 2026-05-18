import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon.jsx';
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

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-28 md:bottom-8 right-4 md:right-6 z-[60] flex flex-col gap-4">
      <motion.a
        href="https://wa.me/917985212241"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-2xl bg-green-600 flex items-center justify-center shadow-2xl shadow-green-600/30 relative group"
      >
        <div className="absolute right-full mr-4 px-3 py-1.5 bg-slate-900 border border-white/10 rounded-lg text-white text-[10px] font-black uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with Us
        </div>
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </motion.a>

    </div>
  );
};




export default FloatingButtons;
