import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-4 pb-6 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2rem] bg-[#111827] shadow-xl shadow-slate-900/10 aspect-[4/3] md:aspect-[21/9] lg:h-[480px] flex items-end md:items-center"
        >
          <img
            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=80"
            alt="Premium Men's Wear"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          
          <div className="relative z-10 p-6 md:p-12 w-full md:w-1/2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md mb-3 border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[9px] sm:text-[11px] font-black tracking-widest uppercase text-white">New Drop</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-white leading-[1.1] mb-2 sm:mb-4 tracking-tight">
              Level Up<br />Your Style
            </h2>
            <p className="text-white/80 text-xs sm:text-base font-medium mb-4 sm:mb-8 max-w-[80%] md:max-w-md">
              Premium shirts, trending jeans, and streetwear with all-over India delivery.
            </p>
            
            <a
              href="/#categories"
              className="inline-flex items-center justify-center w-full md:w-auto px-8 py-3.5 rounded-xl sm:rounded-full bg-white text-[#111827] font-black text-sm shadow-lg hover:bg-slate-50 active:scale-95 transition-all"
            >
              Shop Collection
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
