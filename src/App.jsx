import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { products } from './data/mockData.js';
import Navbar from './components/Navbar.jsx';
import HomePage from './components/HomePage.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import SearchModal from './components/SearchModal.jsx';
import FloatingButtons from './components/FloatingButtons.jsx';
import MobileBottomNav from './components/MobileBottomNav.jsx';
import MapSection from './components/MapSection.jsx';
import OrderPage from './components/OrderPage.jsx';
import CollectionPage from './components/CollectionPage.jsx';
import Preloader from './components/Preloader.jsx';
import OfferPage from './components/OfferPage.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const addToWishlist = (product) => {
    setWishlist(prev => {
      if (prev.includes(product.id)) {
        return prev.filter(id => id !== product.id);
      }
      return [...prev, product.id];
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      if (newTheme === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
      return newTheme;
    });
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-bg-light)] dark:bg-[var(--color-bg-dark)] text-[var(--color-text-light)] dark:text-[var(--color-text-dark)] transition-colors duration-300 selection:bg-[var(--color-primary)] selection:text-white">
        <Preloader />
        <Navbar 
          cartCount={cartCount} 
          wishlistCount={wishlist.length}
          onCartClick={() => setIsCartOpen(true)}
          onSearchClick={() => setIsSearchOpen(true)}
          isScrolled={isScrolled}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        
        <Routes>
          <Route path="/" element={
            <HomePage 
              onAddToCart={addToCart} 
              onAddToWishlist={addToWishlist}
              wishlist={wishlist}
            />
          } />
          <Route path="/product/:id" element={
            <ProductDetail onAddToCart={addToCart} onAddToWishlist={addToWishlist} wishlist={wishlist} />
          } />
          <Route path="/collection/:categoryName" element={
            <CollectionPage onAddToCart={addToCart} />
          } />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/offers" element={<OfferPage />} />
        </Routes>

        <MapSection />
        <Footer />

        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />

        <SearchModal 
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          products={products}
          onAddToCart={addToCart}
        />

        <FloatingButtons />
        
        <MobileBottomNav 
          cartCount={cartCount}
          onCartClick={() => setIsCartOpen(true)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
