import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, Phone, Home, Tag
} from 'lucide-react';

const MobileBottomNav = ({ cartCount, onCartClick }) => {
  const location = useLocation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200 dark:border-white/5 pb-5 pt-3 transition-colors shadow-[0_-10px_30px_rgba(0,0,0,0.05)] rounded-t-3xl">
      <div className="flex justify-around items-center px-2">
        <Link to="/" className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all duration-300 ${location.pathname === '/' ? 'text-[#111827] dark:text-white' : 'text-slate-400'}`}>
          <div className="relative">
            <Home className={`w-6 h-6 transition-transform duration-300 ${location.pathname === '/' ? 'scale-110' : ''}`} />
            {location.pathname === '/' && <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#111827] dark:bg-white rounded-full"></div>}
          </div>
          <span className="text-[10px] font-bold">Home</span>
        </Link>

        <Link to="/offers" className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all duration-300 ${location.pathname === '/offers' ? 'text-[#111827] dark:text-white' : 'text-slate-400'}`}>
          <div className="relative">
            <Tag className={`w-6 h-6 transition-transform duration-300 ${location.pathname === '/offers' ? 'scale-110' : ''}`} />
            {location.pathname === '/offers' && <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#111827] dark:bg-white rounded-full"></div>}
          </div>
          <span className="text-[10px] font-bold">Offers</span>
        </Link>

        <button onClick={onCartClick} className="flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all duration-300 text-slate-400 relative">
          <div className="relative">
            <div className="w-12 h-12 -mt-8 bg-[#111827] dark:bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg shadow-slate-900/40 border-4 border-white dark:border-slate-950">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] rounded-full flex items-center justify-center font-black border-2 border-white dark:border-slate-800">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
          <span className="text-[10px] font-bold mt-1">Bag</span>
        </button>

        <Link to="/order" className={`flex flex-col items-center gap-1.5 p-2 rounded-2xl transition-all duration-300 ${location.pathname === '/order' ? 'text-[#111827] dark:text-white' : 'text-slate-400'}`}>
          <div className="relative">
            <Phone className={`w-6 h-6 ${location.pathname === '/order' ? 'fill-[#111827] dark:fill-white' : ''}`} />
            {location.pathname === '/order' && <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#111827] dark:bg-white rounded-full"></div>}
          </div>
          <span className="text-[10px] font-bold">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomNav;
