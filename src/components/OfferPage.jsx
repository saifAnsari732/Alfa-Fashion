import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Copy, CheckCircle, Sparkles, Gift, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

const offers = [
  {
    id: 1,
    title: "Flat 10% Off",
    code: "ALFA10",
    description: "Get a flat 10% discount on all premium shirts and trending jeans. Minimum order value ₹999.",
    validity: "Ends in",
    expiresInSeconds: 3600 * 5 + 1800 // 5 hours 30 mins
  },
  {
    id: 2,
    title: "Combo Special - 20% Off",
    code: "COMBO20",
    description: "Extra 20% off when you buy any of our signature Combo packs. Valid for a limited time only.",
    validity: "Ends in",
    expiresInSeconds: 3600 * 12 + 2400 // 12 hours 40 mins
  },
  {
    id: 3,
    title: "Free Shipping",
    code: "FREESHIP",
    description: "Free all-over-India delivery on orders above ₹1499. Treat yourself to our latest arrivals.",
    validity: "Ends in",
    expiresInSeconds: 3600 * 24 * 2 + 3600 // 2 days 1 hour
  }
];

const CountdownTimer = ({ initialSeconds }) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (totalSeconds <= 0) return "EXPIRED";

    let timeString = "";
    if (days > 0) timeString += `${days}d `;
    timeString += `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
    
    return timeString;
  };

  const isExpiringSoon = timeLeft < 3600; // Less than 1 hour

  return (
    <span className={`font-black ${isExpiringSoon ? 'text-red-600 animate-pulse' : 'text-[#D4AF37]'}`}>
      {formatTime(timeLeft)}
    </span>
  );
};

const OfferPage = () => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#F3EBE1] to-transparent pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#E8DCCB]/30 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] text-sm font-black tracking-[0.3em] uppercase">Premium Privileges</span>
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display mt-2 text-[#2B231D] tracking-tight">
            Exclusive <span className="text-[#8C7B65]">Offers</span>
          </h1>
          <p className="text-[#5C5046] mt-6 text-lg max-w-2xl mx-auto font-medium">
            Unlock luxury at an exceptional value. Apply these exclusive codes at checkout or share them directly with our styling team on WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.7 }}
              className="relative rounded-[2rem] bg-gradient-to-br from-white to-[#FAF8F5] p-1 border-[1.5px] border-[#E8DCCB] hover:border-[#D4AF37] shadow-[0_20px_40px_rgba(140,123,101,0.08)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 group"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none rounded-[2rem]" />
              
              <div className="h-full bg-white/60 backdrop-blur-sm rounded-[1.8rem] p-8 sm:p-10 flex flex-col relative z-10 border border-white">
                
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#F3EBE1] to-[#E8DCCB] flex items-center justify-center shadow-inner">
                    <Gift className="w-7 h-7 text-[#8C7B65]" />
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8DCCB] text-[10px] font-black uppercase tracking-widest text-[#8C7B65]">
                    Limited
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-[#2B231D] mb-4 font-display leading-tight">{offer.title}</h3>
                
                <p className="text-[#5C5046] font-medium leading-relaxed mb-10 flex-grow text-sm sm:text-base">
                  {offer.description}
                </p>
                
                <div className="mt-auto">
                  <div className="relative">
                    {/* Dashed line separator */}
                    <div className="absolute top-0 left-[-2.5rem] right-[-2.5rem] border-t-2 border-dashed border-[#E8DCCB]" />
                    
                    <div className="pt-8 pb-2 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C7B65] font-bold mb-1.5">Voucher Code</span>
                        <span className="text-xl font-black text-[#D4AF37] tracking-[0.15em] bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#F3EBE1]">{offer.code}</span>
                      </div>
                      
                      <button
                        onClick={() => handleCopy(offer.code)}
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          copiedCode === offer.code 
                            ? 'bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/30 scale-105' 
                            : 'bg-[#2B231D] text-white hover:bg-[#8C7B65] shadow-lg hover:-translate-y-1'
                        }`}
                        title="Copy Code"
                      >
                        {copiedCode === offer.code ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-[11px] text-[#8C7B65] mt-6 text-center font-bold tracking-wider uppercase flex items-center justify-center gap-2 bg-[#FAF8F5] py-2 rounded-lg border border-[#F3EBE1]">
                    <span>{offer.validity}</span> 
                    <CountdownTimer initialSeconds={offer.expiresInSeconds} />
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
