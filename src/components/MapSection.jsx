import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const MapSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-2">
            <span className="text-amber-600 text-xs font-black tracking-[0.2em] uppercase">Visit Us</span>
            <h2 className="text-4xl sm:text-5xl font-black font-display text-slate-900 leading-tight">
              Visit Alfa Lifestyle — <br/>
              <span className="text-[#E04B2F] italic">for the best men's fashion</span>
            </h2>
          </div>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E04B2F] flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-black text-lg">Address</span>
                <span className="text-slate-600 font-medium leading-relaxed">Samaur Bazar, Kushinagar, UP, India</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-black text-lg">Call / WhatsApp</span>
                <span className="text-red-600 font-bold">+91 9129497110, +91 9120497110</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-black text-lg">Timings</span>
                <span className="text-slate-600 font-medium">Daily • 10:00 AM – 9:30 PM</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-black text-lg">Instagram</span>
                <span className="text-red-600 font-bold">@alfa_lifestyle_01</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Map Section */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14251.642939226105!2d83.97232231264879!3d26.90382377316938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993f778a3f8c853%3A0xe5a1b32d1844b24!2sPadrauna%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Alfa Lifestyle Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
