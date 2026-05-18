import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShoppingBag, Zap, Phone, Grid3X3
} from 'lucide-react';

const MobileBottomNav = ({ cartCount, onCartClick }) => {
  const location = useLocation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200 dark:border-white/5 pb-6 transition-colors">
      <div className="flex justify-around pt-4 pb-2">
        <Link to="/" className={`flex flex-col items-center gap-1.5 ${location.pathname === '/' ? 'text-blue-600' : 'text-slate-500 dark:text-slate-400'}`}>
          <div className="w-6 h-6 flex items-center justify-center">
            <Grid3X3 className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Home</span>
        </Link>
        <Link to="/deals" className={`flex flex-col items-center gap-1.5 ${location.pathname === '/deals' ? 'text-blue-600' : 'text-slate-500 dark:text-slate-400'}`}>
          <div className="w-6 h-6 flex items-center justify-center">
            <Zap className={`w-6 h-6 ${location.pathname === '/deals' ? 'fill-blue-600' : ''}`} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Deals</span>
        </Link>

        <button onClick={onCartClick} className="flex flex-col items-center gap-1.5 text-slate-500 dark:text-slate-400 relative">
          <div className="w-6 h-6 flex items-center justify-center">
            <ShoppingBag className="w-6 h-6" />
          </div>
          {cartCount > 0 && (
            <span className="absolute -top-1 right-2 w-4 h-4 bg-blue-600 text-white text-[10px] rounded-full flex items-center justify-center font-black">
              {cartCount}
            </span>
          )}
          <span className="text-[10px] font-black uppercase tracking-widest">Bag</span>
        </button>
        <Link to="/order" className={`flex flex-col items-center gap-1.5 ${location.pathname === '/order' ? 'text-blue-600' : 'text-slate-500 dark:text-slate-400'}`}>
          <div className="w-6 h-6 flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileBottomNav;
