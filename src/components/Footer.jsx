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

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-50 dark:bg-slate-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <h3 className="text-3xl font-black text-blue-700 dark:text-blue-500 tracking-tighter leading-none mb-1">
                Alfa Lifestyle
              </h3>
              <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">Samaur Bazar, Kushinagar</p>
            </div>
            <p className="text-slate-600 dark:text-gray-400 font-medium leading-relaxed">
              All over India deliver. Premium men's trending clothes for your lifestyle.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-500 group shadow-sm">
                <InstagramIcon className="w-6 h-6 text-slate-500 dark:text-gray-400 group-hover:text-white" />
              </a>
              <a href="https://wa.me/9120594727" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-500 group shadow-sm">
                <Phone className="w-6 h-6 text-slate-500 dark:text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:ml-12">
            <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Collections', 'Arrivals', 'Deals', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-600 dark:text-gray-400 font-bold hover:text-blue-600 dark:hover:text-blue-500 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-[2px] bg-blue-600 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm mb-8">Services</h4>
            <ul className="space-y-4">
              {["Trending Jeans", "Premium Shirts", "Streetwear Tees", "Jackets", "Cargos", "Accessories"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-slate-600 dark:text-gray-400 font-bold hover:text-blue-600 dark:hover:text-blue-500 transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-[2px] bg-blue-600 transition-all" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm mb-8">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-white/5 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-slate-600 dark:text-gray-400 font-medium">📍 Location: Samaur Bazar, Kushinagar, UP, India</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-white/5 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-slate-600 dark:text-gray-400 font-bold">+91 9120594727, +91 9120497110</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-white/5 flex items-center justify-center flex-shrink-0 text-blue-600">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-slate-600 dark:text-gray-400 font-medium">Response time: &lt; 2 hours</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">
            © 2025 Alfa Lifestyle. Premium Men's Wear.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 font-bold text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

