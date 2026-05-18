import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-[320px] h-[320px] rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 mb-8"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-600 dark:text-slate-300">
                Wholesale & Retail Clothing in Lucknow
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[2.5rem] sm:text-5xl lg:text-6xl font-black font-display leading-[1.1] tracking-tight text-slate-900 dark:text-white"
            >
              Elevate Your Shop with
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-blue-500 bg-clip-text text-transparent">
                Stylish Wholesale Apparel
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[13px] sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 mt-4 sm:mt-8 leading-relaxed font-medium"
            >
              Apni shop ko premium garments aur latest trending outfits se stock karein.
              <br />
              Wholesalers aur retailers ke liye sabse best quality aur style ki guarantee.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 sm:mt-12 flex flex-col gap-2.5 sm:flex-row sm:items-center justify-center lg:justify-start w-full"
            >
              <a
                href="/#categories"
                className="inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 rounded-3xl bg-blue-600 text-white font-black tracking-wide hover:bg-blue-700 transition-all shadow-2xl shadow-blue-600/20 w-full sm:w-auto text-sm sm:text-base"
              >
                Explore Collections
              </a>
              <a
                href="https://teal-pudding-4b21ee.netlify.app/"
                className="inline-flex items-center justify-center px-6 sm:px-10 py-3 sm:py-4 rounded-3xl bg-slate-200 dark:bg-slate-900/80 text-slate-900 dark:text-white font-black tracking-wide hover:bg-slate-200 dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-700 w-full sm:w-auto text-sm sm:text-base"
              >
              Give Reviews
              </a>
              <a
                href="https://wa.me/917985212241"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 rounded-3xl bg-green-600 text-white font-black tracking-wide hover:bg-green-700 transition-all w-full sm:w-auto text-sm sm:text-base"
              >
                <Phone className="w-5 h-5" />
                Whatsapp
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative overflow-hidden rounded-2xl sm:rounded-[3rem] bg-slate-900 shadow-2xl shadow-slate-900/20 hidden sm:block"
          >
            <img
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80"
              alt="Clothing wholesale collection"
              className="w-full h-full min-h-[420px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-950/70 border border-white/10 p-5 rounded-3xl backdrop-blur">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-sky-300 font-black mb-2">Trusted by local retailers</p>
                <h2 className="text-xl font-black text-white leading-tight">Stylish stock for every shop owner</h2>
              </div>
              <span className="inline-flex items-center justify-center rounded-full bg-blue-500 px-4 py-2 text-sm font-black text-white uppercase tracking-[0.2em]">
                Order Wholesale
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
