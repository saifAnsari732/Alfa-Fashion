import React from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Phone, ArrowRight, Heart } from 'lucide-react';
import { products } from '../data/mockData.js';

const ComboNewArrived = ({ onAddToCart, onAddToWishlist, wishlist }) => {
  // Filter for products that are of category "Combo"
  const comboProducts = products.filter(p => p.category === 'Combo');

  const handleWhatsAppOrder = (product) => {
    const message = `Hello! I would like to order the combo: *${product.name}* (Price: ₹${product.price}) from Alfa Lifestyle. Please confirm availability.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/9120594727?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="combos" className="py-28 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Dynamic ambient highlights for high-end look */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/5 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="text-blue-600 dark:text-blue-500 text-sm font-black tracking-[0.3em] uppercase underline decoration-2 underline-offset-8">
              Limited Edition Packs
            </span>
            <h2 className="text-4xl sm:text-6xl font-black font-display mt-4 text-slate-900 dark:text-white tracking-tight">
              COMBO NEW ARRIVED
            </h2>
            <p className="text-slate-600 dark:text-gray-400 mt-6 text-lg">
              Get the perfect matching look! Complete ready-to-wear shirt and trouser combos, premium-crafted and paired for absolute style.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-black group cursor-pointer"
            onClick={() => {
              const el = document.getElementById('categories');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Explore All Departments</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </div>

        {/* Grid of Combos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {comboProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col h-full"
            >
              <div className="relative rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 card-hover shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full group/card">
                <Link to={`/product/${product.id}`} className="absolute inset-0 z-10" aria-label={`View ${product.name}`} />
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Combo & Discount Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-sky-500 text-white text-[9px] font-black rounded-full uppercase tracking-widest shadow-md">
                      COMBO
                    </span>
                    <span className="px-3 py-1 bg-slate-900 text-white text-[9px] font-black rounded-full uppercase tracking-widest shadow-md">
                      -{product.discount}%
                    </span>
                  </div>

                  {/* Actions Overlay */}
                  <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center gap-3 pointer-events-none">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); onAddToWishlist(product); }}
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors pointer-events-auto ${
                        wishlist && wishlist.includes(product.id) ? 'bg-blue-600 text-white' : 'bg-white/25 backdrop-blur-md text-white hover:bg-blue-600'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${wishlist && wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                    </motion.button>

                    <motion.a
                      href={`https://wa.me/9120594727?text=${encodeURIComponent(`Hi, I want to order the combo: ${product.name} (Price: ₹${product.price})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-11 h-11 rounded-2xl bg-white text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors shadow-lg"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Combo Info */}
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-[9px] font-black text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-1.5 block">
                    {product.category} Pack
                  </span>

                  <h3 className="text-sm font-black text-slate-900 dark:text-white leading-snug tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    <Link to={`/product/${product.id}`}>
                      {product.name}
                    </Link>
                  </h3>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-2.5 h-2.5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-700'}`}
                      />
                    ))}
                    <span className="text-[10px] font-bold text-slate-500 ml-1">{product.rating}</span>
                  </div>

                  <div className="mt-auto space-y-3">
                    {/* Price Tag */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-black text-slate-900 dark:text-white">₹{product.price}</span>
                      <span className="text-xs font-bold text-slate-400 line-through">₹{product.originalPrice}</span>
                    </div>

                    {/* WhatsApp Quick Order button */}
                    <button
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleWhatsAppOrder(product); }}
                      className="w-full text-[9px] sm:text-[10px] font-black text-white bg-green-600 hover:bg-green-700 uppercase tracking-widest py-2.5 px-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 shadow-md shadow-green-600/10 active:scale-95 relative z-20"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-current" /> Order on WA
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComboNewArrived;
