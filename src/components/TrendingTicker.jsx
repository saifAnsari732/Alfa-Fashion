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

const TrendingTicker = () => {
const agencyItems = [
  "Factory Price Fashion",
  "Trendy Clothing Collection",
  "Men's Wear",
  "Women's Wear",
  "Kids Fashion",
  "Wholesale Clothing",
  "Affordable Streetwear",
  "Factory Price Padrauna"
];

  return (
    <div className="bg-blue-600 py-4 overflow-hidden border-y border-blue-500/50">
      <div className="flex whitespace-nowrap">
        <div className="flex items-center gap-12 w-max animate-ticker">
          {[...agencyItems, ...agencyItems, ...agencyItems].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-white font-black uppercase tracking-tighter text-lg">
              <Sparkles className="w-5 h-5 text-blue-200 fill-blue-200" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};





export default TrendingTicker;
