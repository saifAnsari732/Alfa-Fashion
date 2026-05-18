import React, { useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';
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
          href={`https://wa.me/917985212241?text=${encodeURIComponent(`Hi, I want to order ${product.name} (Price: ₹${product.price})`)}`}
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

const CollectionPage = ({ onAddToCart }) => {
  const { categoryName } = useParams();
  const decodedCategoryName = decodeURIComponent(categoryName);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryName]);

  // Match products with category names roughly
  const filteredProducts = products.filter(p => {
    const searchWords = decodedCategoryName.toLowerCase().replace('&', '').split(' ').filter(Boolean);
    const productCat = p.category.toLowerCase();
    
    // Custom mappings for better matching
    if (decodedCategoryName.includes("Premium Shirts") && productCat.includes("shirt")) return true;
    if (decodedCategoryName.includes("Kids") && productCat.includes("kid")) return true;
    if (decodedCategoryName.includes("Footwear") && productCat.includes("footwear")) return true;
    if (decodedCategoryName.includes("Ethnic") && productCat.includes("ethnic")) return true;
    if (decodedCategoryName.includes("New Born") && productCat.includes("new born")) return true;
    if (decodedCategoryName.includes("Denim") && productCat.includes("jeans")) return true;
    if (decodedCategoryName.includes("Winter") && productCat.includes("winter")) return true;

    return searchWords.some(word => productCat.includes(word) || p.name.toLowerCase().includes(word));
  });

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter uppercase">
          {decodedCategoryName}
        </h1>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6" />
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-bold text-lg">
          Explore our exclusive collection of {decodedCategoryName}. Top quality at factory prices.
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8">
          {filteredProducts.map(product => (
            <DealCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-slate-600 dark:text-slate-400">
            More products coming soon to this collection!
          </h2>
          <Link to="/" className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors">
            Go Back Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
