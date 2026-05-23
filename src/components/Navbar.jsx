import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
 Menu, X, Phone, 
   Moon, Sun,

} from 'lucide-react';


const Navbar = ({ isScrolled, theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/#categories' },
    { name: 'Arrivals', path: '/#arrivals' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/order' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || location.pathname !== '/' ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-3xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <span className="text-white font-black text-sm sm:text-lg">AL</span>
                </div>
                <div className="flex flex-col leading-tight">
                  <h1 className="text-lg sm:text-2xl font-black font-display text-slate-900 dark:text-white">Alfa Lifestyle</h1>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-blue-600 dark:text-sky-400 font-bold">Men's Trending Clothes</p>
                </div>
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                ['/deals', '/offers', '/order'].includes(item.path) ? (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`text-sm font-semibold tracking-widest transition-colors ${location.pathname === item.path ? 'text-blue-600' : 'text-[var(--color-text-light)] hover:text-[var(--color-primary)]'}`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.path}
                    className="text-sm font-semibold tracking-widest text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 transition-colors"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              <a
                href="https://wa.me/9129497110"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-green-600 text-white text-xs sm:text-sm font-black tracking-wide hover:bg-green-700 transition-all shadow-lg shadow-green-600/20"
              >
                WhatsApp
              </a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-3xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <span className="text-white font-black">AL</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold text-white">Alfa Lifestyle</h1>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-blue-300 font-bold">Men's Trending Clothes</p>
                  </div>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-white/10 rounded-full">
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              <div className="space-y-6">
                {navItems.map((item, index) => (
                  ['/deals', '/offers', '/order'].includes(item.path) ? (
                    <motion.div
                      key={item.name}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-3xl font-bold text-white/90 hover:text-[var(--color-primary-light)] transition-colors"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-3xl font-bold text-white/90 hover:text-blue-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </div>

              <div className="mt-12 space-y-4">
                <a
                  href="https://wa.me/9129497110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-green-600 text-white font-bold shadow-lg shadow-green-600/20"
                >
                  <Phone className="w-5 h-5" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
