import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Phone, ShieldCheck, Gift, RefreshCcw } from 'lucide-react';

const OrderPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    size: '',
    notes: '',
    coupon: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    const text = `*New Order Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Category:* ${formData.category}%0A*Size:* ${formData.size}%0A*Notes:* ${formData.notes}${formData.coupon ? `%0A*Coupon:* ${formData.coupon}` : ''}`;
    window.open(`https://wa.me/9129497110?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-12">
          <div className="space-y-4">
            <span className="text-amber-600 text-xs font-black tracking-[0.2em] uppercase">ORDER FORM</span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display text-[#2B231D] leading-[1.1] tracking-tight">
              Ghar baithe order kariye <br />
              <span className="text-[#E04B2F]">— WhatsApp pe seedha</span>
            </h1>
            <p className="text-slate-600 font-medium text-lg max-w-md pt-4">
              Form bhariye, submit dabaiye — WhatsApp khulega pre-filled message ke saath. Bas Send dabaiye aur humari team aapse turant connect karegi.
            </p>
          </div>

          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 text-amber-600">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[#2B231D] font-bold text-sm">Genuine imported stock</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 text-[#E04B2F]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[#2B231D] font-bold text-sm">Factory price — kahin se bhi sasta</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 text-yellow-600">
                <Gift className="w-5 h-5" />
              </div>
              <span className="text-[#2B231D] font-bold text-sm">
                <a href="https://teal-pudding-4b21ee.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline decoration-[#E04B2F] underline-offset-4 hover:text-[#E04B2F] transition-colors">Free Killer Deo on Google review</a>
              </span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600">
                <RefreshCcw className="w-5 h-5" />
              </div>
              <span className="text-[#2B231D] font-bold text-sm">Bina bill ke bhi easy exchange</span>
            </li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-[2rem] shadow-xl p-8 sm:p-10 border border-slate-100">
            <form onSubmit={handleWhatsAppOrder} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-[#2B231D] uppercase">Aapka Naam *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="e.g. Rohit Kumar" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E04B2F] bg-slate-50 transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-[#2B231D] uppercase">Phone Number *</label>
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="98XXXXXXXX" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E04B2F] bg-slate-50 transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-[#2B231D] uppercase">Category *</label>
                  <select required name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E04B2F] bg-slate-50 transition-all text-sm font-medium text-slate-700">
                    <option value="" disabled>Category chuniye</option>
                    <option value="Premium Shirts">Premium Shirts</option>
                    <option value="Trending Jeans">Trending Jeans</option>
                    <option value="Streetwear Tees">Streetwear Tees</option>
                    <option value="Jackets">Jackets</option>
                    <option value="Cargos">Cargos</option>
                    <option value="Footwear">Footwear</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black tracking-widest text-[#2B231D] uppercase">Size / Age</label>
                  <input type="text" name="size" value={formData.size} onChange={handleChange} placeholder="e.g. 5 years / M / 38" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E04B2F] bg-slate-50 transition-all text-sm font-medium" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-[10px] font-black tracking-widest text-[#2B231D] uppercase">Coupon Code (Optional)</label>
                  <input type="text" name="coupon" value={formData.coupon} onChange={handleChange} placeholder="e.g. ALFA10" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E04B2F] bg-slate-50 transition-all text-sm font-medium uppercase" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black tracking-widest text-[#2B231D] uppercase">Extra Notes</label>
                <textarea name="notes" value={formData.notes} onChange={handleChange} rows="3" placeholder="Color, quantity, ya koi specific demand..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#E04B2F] bg-slate-50 transition-all text-sm font-medium resize-none"></textarea>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button type="submit" className="flex-1 bg-[#25D366] hover:bg-[#1DA851] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-500/20">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  Send to WhatsApp
                </button>
                <a href="tel:+919129497110" className="flex-1 bg-white border-2 border-slate-200 hover:border-[#2B231D] text-[#2B231D] py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                  <Phone className="w-5 h-5" />
                  Direct Call
                </a>
              </div>
              
              <p className="text-[10px] text-slate-400 text-center pt-2">
                * WhatsApp app/web automatically khulega pre-filled message ke saath. Koi data save nahi hota.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
