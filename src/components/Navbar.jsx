import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bell, Search, Menu, X
} from 'lucide-react';

const Navbar = ({ onSearchClick }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/#categories' },
    { name: 'Arrivals', path: '/#arrivals' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/order' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg border-b border-slate-100 dark:border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Left - Menu/Profile (Mobile) & Logo (Desktop) */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Link to="/" className="hidden md:flex flex-col items-center">
              <h1 className="text-2xl font-black font-display text-[#111827] dark:text-white tracking-tight">ALFA</h1>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">Lifestyle</span>
            </Link>
          </div>

          {/* Center - Brand (Mobile) & Nav (Desktop) */}
          <Link to="/" className="md:hidden flex flex-col items-center">
            <h1 className="text-xl font-black font-display text-[#111827] dark:text-white tracking-tight">ALFA</h1>
            <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-slate-400">Lifestyle</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              ['/offers', '/order'].includes(item.path) ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-bold transition-colors ${location.pathname === item.path ? 'text-[#111827] dark:text-white' : 'text-slate-500 hover:text-[#111827] dark:hover:text-white'}`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-sm font-bold text-slate-500 hover:text-[#111827] dark:hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Right - Actions */}
          <div className="flex items-center gap-2">
            <button 
              onClick={onSearchClick}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 relative hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-800"></span>
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[280px] bg-white dark:bg-slate-950 z-50 flex flex-col md:hidden shadow-2xl"
            >
              <div className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex flex-col">
                  <h1 className="text-2xl font-black font-display text-[#111827] dark:text-white tracking-tight leading-none">ALFA</h1>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">Lifestyle</span>
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <nav className="flex flex-col p-4 gap-2 overflow-y-auto">
                {navItems.map((item) => (
                  ['/offers', '/order'].includes(item.path) ? (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`p-4 rounded-xl text-base font-black transition-colors ${location.pathname === item.path ? 'bg-slate-50 dark:bg-slate-900 text-[#111827] dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-4 rounded-xl text-base font-black text-slate-600 dark:text-slate-400 transition-colors"
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
