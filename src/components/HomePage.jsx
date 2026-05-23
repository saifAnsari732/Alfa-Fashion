import React from 'react';
import Hero from './Hero.jsx';
import TrendingTicker from './TrendingTicker.jsx';
import Categories from './Categories.jsx';
import NewArrivals from './NewArrivals.jsx';
import WhyChooseUs from './WhyChooseUs.jsx';
import StatsSection from './StatsSection.jsx';
import ReelsGallery from './ReelsGallery.jsx';
import ComboNewArrived from './ComboNewArrived.jsx';
import WhatsAppCTA from './WhatsAppCTA.jsx';

const HomePage = ({ onAddToCart, onAddToWishlist, wishlist }) => {
  return (
    <main className="pb-20 md:pb-0 w-full mx-auto">
      <Hero />
      <TrendingTicker />
      <ComboNewArrived 
        onAddToCart={onAddToCart} 
        onAddToWishlist={onAddToWishlist}
        wishlist={wishlist}
      />
      <Categories />
      <NewArrivals 
        onAddToCart={onAddToCart} 
        onAddToWishlist={onAddToWishlist}
        wishlist={wishlist}
      />
      <WhyChooseUs />
      <StatsSection />
      <ReelsGallery />
      <WhatsAppCTA />
    </main>
  );
};

export default HomePage;
