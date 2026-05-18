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

const Reviews = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  return (
    <section id="reviews" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-blue-600 dark:text-blue-500 text-sm font-black tracking-[0.3em] uppercase underline decoration-2 underline-offset-8">Client Success</span>
          <h2 className="text-4xl sm:text-6xl font-black font-display mt-4 text-slate-900 dark:text-white tracking-tight">Client Feedback</h2>
        </motion.div>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-full md:w-[450px] bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-slate-200 dark:border-white/5 shadow-lg shadow-slate-200/50 dark:shadow-none"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative">
                    <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-2xl object-cover shadow-2xl border-2 border-white/10" />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-lg p-1">
                      <Star className="w-3 h-3 text-white fill-current" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{review.name}</h4>
                    <p className="text-xs font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">{review.date}</p>
                  </div>
                </div>
                <div className="flex gap-1.5 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-300 dark:text-slate-800'}`} 
                    />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-gray-400 text-lg leading-relaxed font-medium italic">"{review.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};





export default Reviews;
