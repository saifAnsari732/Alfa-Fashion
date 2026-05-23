import React, { useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Zap, ShoppingCart, Tag, MapPin, Phone } from 'lucide-react';
import { products } from '../data/mockData';

const DealCard = ({ product, onAddToCart }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-slate-900 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden group border border-slate-200 dark:border-white/5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
  >
    <div className="aspect-[4/5] relative overflow-hidden bg-slate-100 dark:bg-slate-800">
      <Link to={`/product/${product.id}`} className="absolute inset-0 z-10" aria-label={`View details for ${product.name}`} />
      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
      <div className="absolute top-3 left-3 sm:top-6 sm:left-6 flex flex-col gap-2">
        <div className="bg-blue-600 text-white text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
          SALE {product.discount}% OFF
        </div>
        {product.isNew && (
          <div className="bg-slate-900 text-white text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg border border-white/20">
            INSTA TREND
          </div>
        )}
      </div>
    </div>
    <div className="p-4 sm:p-8">
      <div className="flex items-center gap-2 mb-2 sm:mb-3">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400' : ''}`} />
          ))}
        </div>
        <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">{product.rating} Rating</span>
      </div>
      <h3 className="text-sm sm:text-xl font-black text-slate-900 dark:text-white mb-1.5 sm:mb-2 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
        <Link to={`/product/${product.id}`} className="block">
          {product.name}
        </Link>
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-sm mb-4 sm:mb-6 font-medium leading-relaxed line-clamp-2">
        {product.desc || "Premium collection at factory price. Limited stock available."}
      </p>
      <div className="flex items-center justify-between gap-1 mt-2">
        <div className="flex flex-col">
          <span className="text-slate-400 line-through text-[10px] sm:text-sm font-bold">₹{product.originalPrice}</span>
          <span className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white">₹{product.price}</span>
        </div>
        <a 
          href={`https://wa.me/9129497110?text=${encodeURIComponent(`Hi, I want to order ${product.name} (Price: ₹${product.price})`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-14 sm:h-14 bg-green-600 hover:bg-green-700 text-white rounded-xl sm:rounded-2xl flex items-center justify-center transition-all shadow-xl shadow-green-600/20 active:scale-95 z-20 relative"
        >
          <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
        </a>
      </div>
    </div>
  </motion.div>
);

const DealsPage = ({ onAddToCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const shirtDeals = products.filter(p => p.category === "Branded Shirts");
  const kidsDeals = products.filter(p => p.category === "Kids Collection");
  const footwearDeals = products.filter(p => p.category === "Footwear Sale");

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-24">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600/10 text-blue-600 border border-blue-600/20 mb-8"
        >
          <Zap className="w-4 h-4 fill-blue-600" />
          <span className="text-xs font-black uppercase tracking-[0.3em]">Insta-Live Deals</span>
        </motion.div>
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter leading-none">
          OFFERS YOU <br /> <span className="text-blue-600">CAN'T RESIST</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-bold text-lg leading-relaxed">
          Exclusive collection from our latest Instagram reels. From branded shirts to imported kidswear, we bring you the best digital experience.
        </p>
      </div>

      {/* Maha Sale Section - Footwear */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b-4 border-blue-600 pb-8">
          <div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter flex items-center gap-4">
              <span className="bg-blue-600 text-white px-4 py-1 skew-x-[-12deg]">MAHA SALE</span>
              Crocs & Slippers
            </h2>
            <p className="text-slate-500 font-bold mt-4">🔥 Unbeatable collection — comfort and style combined in every step.</p>
          </div>
          <div className="flex gap-4">
             <div className="bg-slate-100 dark:bg-white/5 px-6 py-3 rounded-2xl flex items-center gap-3">
               <Tag className="w-5 h-5 text-blue-600" />
               <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">Starts @ ₹199</span>
             </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {footwearDeals.map(product => (
            <DealCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Branded Shirts Section */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-l-8 border-blue-600 pl-8">
          <div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
              Branded Shirts <span className="text-blue-600">@ Budget</span>
            </h2>
            <p className="text-slate-500 font-bold mt-4">Style, fitting and premium look — all within your budget.</p>
          </div>
          <div className="bg-blue-600/10 text-blue-600 px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-sm">
            Premium fitting
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
          {shirtDeals.map(product => (
            <DealCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Imported Kids Section */}
      <section className="mb-32">
        <div className="bg-slate-900 dark:bg-blue-600/5 rounded-[4rem] p-12 md:p-20 relative overflow-hidden mb-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block">China & Vietnam Import</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
                PREMIUM <br /> KIDS WEAR
              </h2>
              <p className="text-slate-400 font-bold text-lg max-w-md mb-8">
                Stylish and trendy clothes (0-12 years) that represent the pinnacle of modern design.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="flex items-center gap-2 text-white font-bold bg-white/10 px-4 py-2 rounded-xl">
                   <MapPin className="w-4 h-4 text-blue-500" />
                   Lucknow Head Office
                </div>
                <div className="flex items-center gap-2 text-white font-bold bg-white/10 px-4 py-2 rounded-xl">
                   <Phone className="w-4 h-4 text-blue-500" />
                   +91 79852 12241
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 flex-1">
               {kidsDeals.slice(0, 4).map(product => (
                 <motion.div key={product.id} whileHover={{ y: -5 }} className="rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] bg-slate-800">
                   <img src={product.image} className="w-full h-full object-cover" alt="" loading="lazy" />
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
          {kidsDeals.map(product => (
            <DealCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Visit CTA */}
      <section className="bg-blue-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none" />
        <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">SCALE YOUR BRAND NOW!</h2>
        <p className="text-white/80 font-bold text-xl mb-12 max-w-2xl mx-auto">
          Don't wait. The digital landscape is evolving fast. Contact us today to secure your digital future.
        </p>
        <a 
          href="https://wa.me/9129497110" 
          target="_blank" 
          className="inline-flex items-center gap-4 bg-white text-blue-600 px-12 py-6 rounded-3xl font-black text-xl uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-black/20"
        >
          <ShoppingBag className="w-6 h-6" />
          Get Started Now
        </a>
      </section>
    </div>
  );
};


export default DealsPage;
