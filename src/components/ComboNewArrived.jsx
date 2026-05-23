import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
import { products } from '../data/mockData.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const ComboNewArrived = ({ onAddToWishlist, wishlist }) => {
  const comboProducts = products.filter(p => p.category === 'Combo');

  return (
    <section id="combos" className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-6">
          <span className="text-slate-400 text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase">Limited Edition Packs</span>
          <h2 className="text-2xl sm:text-4xl font-black font-display text-slate-900 dark:text-white tracking-tight leading-none mt-1">Combo Offers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
        {comboProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 dark:border-slate-700 flex flex-col relative"
          >
            <Link to={`/product/${product.id}`} className="absolute inset-0 z-10" />
            
            {/* Image Box */}
            <div className="relative aspect-[3/4] bg-slate-50 dark:bg-slate-900">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Badges */}
              <div className="absolute top-2 left-2 flex flex-col gap-1 z-20">
                <span className="px-2 py-0.5 bg-[#111827] text-white text-[9px] font-black rounded-full uppercase tracking-widest">
                  Combo
                </span>
                {product.discount && (
                  <span className="px-2 py-0.5 bg-white text-slate-900 text-[9px] font-black rounded-full uppercase tracking-widest shadow-sm">
                    -{product.discount}%
                  </span>
                )}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); onAddToWishlist(product); }}
                className={`absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center z-20 backdrop-blur-sm shadow-sm ${
                  wishlist?.includes(product.id) ? 'bg-white text-rose-500' : 'bg-white/70 text-slate-400'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${wishlist?.includes(product.id) ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Info Box */}
            <div className="p-3 flex flex-col flex-1">
              <h3 className="text-xs font-black text-slate-900 dark:text-white leading-tight line-clamp-2 mb-1 mt-1">
                {product.name}
              </h3>
              
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                <span className="text-[9px] font-bold text-slate-500">{product.rating}</span>
              </div>
              
              <div className="mt-auto space-y-2 relative z-20">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-sm font-black text-slate-900 dark:text-white">₹{product.price}</span>
                  <span className="text-[9px] font-bold text-slate-400 line-through">₹{product.originalPrice}</span>
                </div>
                
                <a 
                  href={`https://wa.me/9129497110?text=${encodeURIComponent(`Hi, I want to order the combo: ${product.name} (Price: ₹${product.price})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="w-full h-8 bg-[#22C55E] text-white rounded-lg flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform text-[10px] font-black uppercase tracking-wider"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-current" /> WA Order
                </a>
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
