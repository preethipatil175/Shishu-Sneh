import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Camera, Calendar, ChevronDown, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Register() {
  const navigate = useNavigate();
  const [gender, setGender] = useState<string>('Boy');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="bg-background min-h-screen font-nunito text-on-surface">
      {/* Top Navigation Bar */}
      <header className="flex justify-between items-center px-container-padding-mobile py-4 w-full h-16 bg-transparent">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant/50 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-on-surface" />
        </button>
        <span className="text-xl font-bold text-primary">Shishu-Sneh</span>
        <div className="w-10"></div>
      </header>

      {/* Wave Header Background */}
      <div className="absolute top-0 left-0 w-full h-[25%] -z-10 overflow-hidden bg-surface-container-high">
         <svg className="h-full w-full fill-background" preserveAspectRatio="none" viewBox="0 0 500 150">
            <path d="M0,150 C150,100 350,200 500,150 L500,00 L0,0 Z"></path>
         </svg>
      </div>

      <main className="px-container-padding-mobile pb-stack-lg flex flex-col items-center">
        {/* Avatar Section */}
        <div className="relative mt-8 mb-6">
          <div className="w-20 h-20 rounded-full bg-white shadow-[0px_4px_20px_rgba(62,39,35,0.12)] flex items-center justify-center overflow-hidden border-2 border-primary-fixed">
            <img 
               alt="Baby placeholder" 
               className="w-full h-full object-cover" 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOwM_VZmSBI8A-YRCD9vHcw6DMbgCEYU3Z1l-5nhH-ZH2cDro5vy4slls2pMCd-QzgUHO2W7J8IeOuGwxVvWN-GAMPG_Bsv-_hvX9MXhX0wuVWXb08oeBJmOcUwTwx2Ld05XZPO3uq9miVdsemw8kPQzredNwPfqDlv0oiVdY1sgk3JasZO499bPCd2C3Ham2uHro2fiS9GDoJr5enlVXXgO6YNq7joVKtmB2gPgwrUtOYwkIRCgB5r32qhRGRcDE_VFIPUS8Tj2vp"
            />
          </div>
          <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white border-2 border-white shadow-md active:scale-95 duration-200">
            <Camera className="w-4 h-4" />
          </button>
        </div>

        <h1 className="text-2xl font-bold text-center text-on-surface mb-stack-md px-4 leading-tight">
          Tell us about your little one 💕
        </h1>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-stack-md">
          {/* Baby's Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-on-surface-variant px-1 uppercase tracking-wider">Baby's Name *</label>
            <input 
              required
              className="w-full h-14 bg-surface-container-low border-none rounded-xl px-4 text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary-fixed-dim" 
              placeholder="Enter baby's name" 
              type="text" 
            />
          </div>

          {/* Date of Birth */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-on-surface-variant px-1 uppercase tracking-wider">Date of Birth *</label>
            <div className="relative">
              <input 
                required
                className="w-full h-14 bg-surface-container-low border-none rounded-xl px-4 text-on-surface cursor-pointer focus:ring-2 focus:ring-primary-fixed-dim" 
                placeholder="DD / MM / YYYY" 
                type="date"
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* Gender Toggle */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-on-surface-variant px-1 uppercase tracking-wider">Gender</label>
            <div className="flex gap-3">
              {['Boy 👦', 'Girl 👧', 'Other 🌟'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setGender(option.split(' ')[0])}
                  className={`flex-1 py-3 px-2 rounded-xl flex items-center justify-center gap-2 transition-all border ${
                    gender === option.split(' ')[0]
                      ? 'bg-primary-fixed text-on-primary-fixed-variant border-primary/20 scale-105'
                      : 'bg-surface-container-low text-on-surface-variant border-transparent scale-100 hover:bg-surface-variant/30'
                  }`}
                >
                  <span className="text-xs font-semibold">{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mother's Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-on-surface-variant px-1 uppercase tracking-wider">Mother's Name (Optional)</label>
            <input 
              className="w-full h-14 bg-surface-container-low border-none rounded-xl px-4 text-on-surface placeholder-on-surface-variant/50 focus:ring-2 focus:ring-primary-fixed-dim" 
              placeholder="Enter mother's name" 
              type="text" 
            />
          </div>

          {/* Weight and Height Row */}
          <div className="grid grid-cols-2 gap-gutter">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-on-surface-variant px-1 uppercase tracking-wider">Birth Weight (kg)</label>
              <input 
                className="w-full h-14 bg-surface-container-low border-none rounded-xl px-4 text-on-surface focus:ring-2 focus:ring-primary-fixed-dim" 
                placeholder="3.2" 
                step="0.1" 
                type="number" 
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-on-surface-variant px-1 uppercase tracking-wider">Birth Height (cm)</label>
              <input 
                className="w-full h-14 bg-surface-container-low border-none rounded-xl px-4 text-on-surface focus:ring-2 focus:ring-primary-fixed-dim" 
                placeholder="50" 
                type="number" 
              />
            </div>
          </div>

          {/* Blood Group */}
          <div className="space-y-1.5">
            <label className="text-sm font-bold text-on-surface-variant px-1 uppercase tracking-wider">Blood Group</label>
            <div className="relative">
              <select className="w-full h-14 bg-surface-container-low border-none rounded-xl px-4 text-on-surface appearance-none cursor-pointer focus:ring-2 focus:ring-primary-fixed-dim">
                <option value="">Select blood group</option>
                {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(bg => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant w-5 h-5" />
            </div>
          </div>

          {/* Bottom Button */}
          <div className="pt-stack-md">
            <button 
              type="submit"
              className="w-full h-14 bg-primary text-on-primary font-bold rounded-full flex items-center justify-center gap-2 custom-shadow active:scale-95 transition-transform duration-200"
            >
              Save & Continue
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
