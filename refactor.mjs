import fs from 'fs';

const appCode = fs.readFileSync('src/App.jsx', 'utf8');
const lines = appCode.split('\n');

const components = [
  { name: 'Navbar', start: 64, end: 226 },
  { name: 'Hero', start: 227, end: 385 },
  { name: 'TrendingTicker', start: 386, end: 402 },
  { name: 'Categories', start: 403, end: 462 },
  { name: 'NewArrivals', start: 463, end: 603 },
  { name: 'WhyChooseUs', start: 604, end: 650 },
  { name: 'ReelsGallery', start: 651, end: 726 },
  { name: 'Reviews', start: 727, end: 786 },
  { name: 'WhatsAppCTA', start: 787, end: 834 },
  { name: 'Footer', start: 835, end: 935 },
  { name: 'CartDrawer', start: 936, end: 1045 },
  { name: 'SearchModal', start: 1046, end: 1134 },
  { name: 'FloatingButtons', start: 1135, end: 1156 },
  { name: 'MobileBottomNav', start: 1157, end: 1195 },
];

const imports = `import React, { useState, useEffect } from 'react';
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
`;

fs.mkdirSync('src/components', { recursive: true });
fs.mkdirSync('src/data', { recursive: true });

for (const comp of components) {

  // line numbers are 1-based, array is 0-based
  const compLines = lines.slice(comp.start - 1, comp.end);
  const content = imports + '\n' + compLines.join('\n') + `\n\nexport default ${comp.name};\n`;
  fs.writeFileSync(`src/components/${comp.name}.jsx`, content);
}

// Now rewrite App.jsx
const appStartLine = 1196;
const appLines = lines.slice(appStartLine - 1); // everything from function App() down

const appImports = `import { useState, useEffect } from 'react';
import { products } from './data/mockData.js';
${components.map(c => `import ${c.name} from './components/${c.name}.jsx';`).join('\n')}
`;

fs.writeFileSync('src/App.jsx', appImports + '\n' + appLines.join('\n'));
console.log('Refactoring complete!');
