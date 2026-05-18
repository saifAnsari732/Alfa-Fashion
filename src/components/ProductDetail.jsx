import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ShoppingBag, Heart, ArrowLeft, Star, Phone } from 'lucide-react';
import { products } from '../data/mockData.js';

const ProductDetail = ({ onAddToCart, onAddToWishlist, wishlist }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));
  const navigate = useNavigate();

  if (!product) {
    return (
      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center py-24">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600 font-black mb-6">Product not found</p>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Sorry, this product does not exist.</h1>
          <Link to="/" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-blue-600 text-white font-black hover:bg-blue-700 transition-all">
            Back to catalog
          </Link>
        </div>
      </main>
    );
  }

  const saved = wishlist.includes(product.id);

  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200 mb-10 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to products
        </button>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-900/50">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[300px] sm:h-[520px] object-contain"
              loading="lazy"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full bg-blue-600/10 text-blue-600 text-xs font-black uppercase tracking-[0.3em] px-4 py-2">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="inline-flex rounded-full bg-slate-900 text-white text-xs font-black uppercase tracking-[0.3em] px-4 py-2">
                    New Arrival
                  </span>
                )}
                {product.discount && (
                  <span className="inline-flex rounded-full bg-emerald-600 text-white text-xs font-black uppercase tracking-[0.3em] px-4 py-2">
                    {product.discount}% OFF
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
                {product.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className={`w-4 h-4 ${index < Math.floor(product.rating) ? 'fill-current text-yellow-400' : 'text-slate-300'}`} />
                  ))}
                </div>
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{product.rating} / 5.0</span>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {product.desc || 'High quality apparel with reliable wholesale pricing for retailers and shop owners.'}
              </p>
            </div>

            <div className="rounded-[2rem] bg-slate-100 dark:bg-slate-900/60 p-5 sm:p-8 grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] font-black text-slate-500 dark:text-slate-400">Wholesale price</p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">₹{product.price}</span>
                  <span className="text-sm font-bold text-slate-400 dark:text-slate-500 line-through">₹{product.originalPrice}</span>
                </div>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] font-black text-slate-500 dark:text-slate-400">Stock note</p>
                <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
                  Available for bulk orders and retail stores. Best suited for phone orders, store delivery, or showroom display.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => onAddToCart(product)}
                className="inline-flex items-center justify-center gap-3 rounded-[1.5rem] bg-blue-600 px-8 py-4 text-sm font-black text-white uppercase tracking-[0.25em] transition-all hover:bg-blue-700 shadow-lg shadow-blue-600/20"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              <a
                href={`https://wa.me/917985212241?text=Hi, I want to order ${product.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-[1.5rem] bg-[#25D366] px-8 py-4 text-sm font-black text-white uppercase tracking-[0.25em] transition-all hover:bg-[#1DA851] shadow-lg shadow-green-600/20"
              >
                <Phone className="w-5 h-5" />
                Order Now
              </a>
              <button
                type="button"
                onClick={() => onAddToWishlist(product)}
                className={`inline-flex items-center justify-center gap-3 rounded-[1.5rem] px-8 py-4 text-sm font-black uppercase tracking-[0.25em] transition-all ${saved ? 'bg-slate-900 text-white' : 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-100'}`}
              >
                <Heart className="w-5 h-5" />
                {saved ? 'Saved' : 'Save Item'}
              </button>
            </div>

            <div className="rounded-[2rem] bg-green-600 text-white p-5 sm:p-8">
              <p className="text-sm uppercase tracking-[0.35em] font-black text-green-100">Need help ordering?</p>
              <p className="mt-3 text-base leading-relaxed text-white/90">
                Contact us on WhatsApp for faster wholesale order support, stock confirmation, and retailer pricing.
              </p>
              <a
                href="https://wa.me/917985212241"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-white text-green-600 px-6 py-4 text-sm font-black uppercase tracking-[0.25em] hover:bg-slate-100 transition-all"
              >
                <Phone className="w-5 h-5" />
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
