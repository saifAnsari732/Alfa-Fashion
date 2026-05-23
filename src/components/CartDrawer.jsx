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

const CartDrawer = ({ isOpen, onClose, cart, onRemove, onUpdateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [appliedCoupon, setAppliedCoupon] = useState('');

  const handleApplyCoupon = () => {
    const code = couponCode.toUpperCase();
    if (code === 'ALFA10') {
      if (total >= 999) {
        setAppliedDiscount(Math.floor(total * 0.10));
        setAppliedCoupon('ALFA10');
      } else {
        alert('Minimum order value for ALFA10 is ₹999');
      }
    } else if (code === 'COMBO20') {
      const comboTotal = cart.filter(item => item.category === 'Combo').reduce((sum, item) => sum + item.price * item.quantity, 0);
      if (comboTotal > 0) {
        setAppliedDiscount(Math.floor(comboTotal * 0.20));
        setAppliedCoupon('COMBO20');
      } else {
        alert('COMBO20 is only valid on combo products');
      }
    } else if (code === 'FREESHIP') {
       if (total >= 1499) {
          setAppliedDiscount(0);
          setAppliedCoupon('FREESHIP (Free Shipping)');
       } else {
          alert('FREESHIP requires minimum ₹1499 order');
       }
    } else {
      alert('Invalid coupon code');
    }
  };

  const finalTotal = total - appliedDiscount;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white dark:bg-slate-950 z-50 border-l border-slate-200 dark:border-white/5 shadow-2xl"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-8 border-b border-slate-200 dark:border-white/5">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6 text-red-600 dark:text-red-500" />
                  Bag <span className="text-slate-500 font-bold text-sm">({cart.length})</span>
                </h2>
                <button onClick={onClose} className="p-3 hover:bg-slate-100 dark:hover:bg-white/5 rounded-2xl transition-colors">
                  <X className="w-6 h-6 text-slate-500 dark:text-gray-400" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6">
                      <ShoppingBag className="w-10 h-10 text-slate-300 dark:text-slate-700" />
                    </div>
                    <p className="text-slate-500 dark:text-gray-400 font-bold text-xl mb-4">Your bag is empty</p>
                    <button onClick={onClose} className="text-red-600 dark:text-red-500 font-black uppercase tracking-widest text-sm hover:text-slate-900 dark:hover:text-white transition-colors">
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-6 bg-slate-50 dark:bg-white/5 rounded-3xl p-4 border border-slate-200 dark:border-white/5 group relative shadow-sm dark:shadow-none">
                        <img src={item.image} alt={item.name} className="w-24 h-28 object-cover rounded-2xl shadow-md dark:shadow-xl" />
                        <div className="flex-1 py-1">
                          <p className="text-[10px] font-black text-red-600 dark:text-red-500 uppercase tracking-widest mb-1">{item.category}</p>
                          <h4 className="text-lg font-black text-slate-900 dark:text-white leading-tight mb-4">{item.name}</h4>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-black text-slate-900 dark:text-white">₹{item.price}</span>
                            <div className="flex items-center gap-4 bg-white dark:bg-slate-900 rounded-xl p-1 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
                              <button 
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="text-sm font-black text-slate-900 dark:text-white w-4 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-8 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/50">
                  <div className="mb-6 flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Coupon Code" 
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm font-bold bg-white text-[var(--color-text-light)] focus:outline-none focus:border-[var(--color-primary)] uppercase"
                    />
                    <button 
                      onClick={handleApplyCoupon}
                      className="px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-xl text-sm font-black tracking-widest uppercase transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {appliedCoupon && (
                    <div className="flex justify-between items-center mb-4 text-sm font-bold text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
                      <span>Coupon Applied: {appliedCoupon}</span>
                      <span>-₹{appliedDiscount}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-1">Estimated Total</p>
                      <p className="text-slate-400 dark:text-gray-400 text-xs">Inclusive of all taxes</p>
                    </div>
                    <div className="text-right">
                      {appliedDiscount > 0 && <p className="text-slate-400 line-through text-sm font-bold">₹{total}</p>}
                      <span className="text-4xl font-black text-slate-900 dark:text-white">₹{finalTotal}</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/9129497110?text=${encodeURIComponent(`Hi! I want to order:\n${cart.map(item => `- ${item.quantity}x ${item.name} (₹${item.price})`).join('\n')}\n\nSubtotal: ₹${total}${appliedCoupon ? `\nCoupon: ${appliedCoupon} (-₹${appliedDiscount})` : ''}\nFinal Total: ₹${finalTotal}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-6 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-2xl shadow-green-600/20 text-lg uppercase tracking-widest"
                  >
                    <Phone className="w-6 h-6" />
                    Order via WhatsApp
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};



export default CartDrawer;
