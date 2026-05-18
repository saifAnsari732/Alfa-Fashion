import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, label: 'Bulk Orders Sold', value: 1250, suffix: '+' },
  { id: 2, label: 'Retailers Served', value: 620, suffix: '+' },
  { id: 3, label: 'Years in Trade', value: 12, suffix: '+' },
  { id: 4, label: 'Cities Delivered', value: 18, suffix: '+' },
];

const animateCount = (target, setValue, duration = 1200) => {
  const start = 0;
  const startTime = performance.now();

  const step = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const current = Math.floor(progress * (target - start) + start);
    setValue(current);
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      setValue(target);
    }
  };

  requestAnimationFrame(step);
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    stats.forEach((stat, index) => {
      animateCount(stat.value, (value) => {
        setCounts((prev) => {
          const next = [...prev];
          next[index] = value;
          return next;
        });
      }, 1200 + index * 150);
    });
  }, [visible]);

  return (
    <section ref={sectionRef} className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-400 font-black mb-3">Factory Price Highlights</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Trusted wholesale numbers that grow with every scroll</h2>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">Our value-driven metrics move up as you explore the page — built for retailers, stockists, and shop owners.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-slate-950/30"
            >
              <p className="text-5xl sm:text-6xl font-black tracking-tight text-white">{counts[index]}{stat.suffix}</p>
              <p className="mt-4 text-sm uppercase tracking-[0.35em] text-slate-300 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
