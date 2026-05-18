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

const WhyChooseUs = () => {
  const features = [
    { icon: <ShoppingBag className="w-6 h-6" />, title: "Premium Quality", desc: "High-quality ready-made garments sourced directly from trusted manufacturers" },
    { icon: <Truck className="w-6 h-6" />, title: "Fast Delivery", desc: "Quick wholesale orders delivered to your shop doorstep" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Bulk Orders", desc: "Wholesale pricing for bulk orders with flexible quantity options" },
    { icon: <Users className="w-6 h-6" />, title: "Shop Owners Support", desc: "Dedicated support for retailers and wholesalers in Padrauna" },
    { icon: <Star className="w-6 h-6" />, title: "Latest Trends", desc: "Always stocked with trending styles for men, ladies, and kids" },
    { icon: <Phone className="w-6 h-6" />, title: "Direct WhatsApp", desc: "Instant order placement and queries on WhatsApp" },
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 dark:text-blue-500 text-sm font-black tracking-[0.3em] uppercase underline decoration-2 underline-offset-8">Why Shop Here</span>
          <h2 className="text-4xl sm:text-6xl font-black font-display mt-4 text-slate-900 dark:text-white tracking-tight">Why Choose Factory Price?</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500 group shadow-lg shadow-slate-200/50 dark:shadow-none"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-600/10 flex items-center justify-center text-blue-600 dark:text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6 shadow-xl">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-medium">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};





export default WhyChooseUs;
