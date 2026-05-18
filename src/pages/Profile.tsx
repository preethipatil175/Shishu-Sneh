import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Edit3, 
  ChevronRight, 
  ShieldCheck, 
  Lightbulb, 
  Hospital, 
  PhoneCall, 
  Languages, 
  Info, 
  Star, 
  HelpCircle, 
  Download, 
  CloudUpload, 
  Trash2,
  AlertCircle
} from 'lucide-react';
import Layout from '../components/Layout';
import { motion } from 'motion/react';

export default function Profile() {
  const navigate = useNavigate();
  const [vaccineReminders, setVaccineReminders] = useState(true);
  const [dailyTips, setDailyTips] = useState(true);

  return (
    <Layout>
      <main className="pb-10">
        <div className="relative w-full h-72 bg-gradient-to-b from-primary to-primary-container curved-header flex flex-col items-center justify-center pt-8 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              <path d="M0,100 C150,200 250,0 400,100 L400,400 L0,400 Z" fill="white"></path>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden mb-3">
              <img 
                alt="Baby Arya" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwH7qxag__mALHVmuu3CDwi1LkzRfbu8nGT0hd0GUR8gxC48LKfhYBb5omvEbB6MUKXf6uZF91YuBMAlCSLMbY5qlUMkty7fK76-YhwVU8LzNH_Og1bj9nv6atDwujasdu7uKNQAQsbmHv76bvxJVR-g-0nULWDXd3VtZvs_BhTQH5SwDzEtkDhzauEWWDs7Z_hP5ppiZxOO3RCNEccs4NFgI3tguWgn0h8agesU0vhVsqYXGQESHTMGJ4CgxMoPiAz0G7yK1GZNPl" 
              />
            </div>
            <h2 className="text-2xl font-bold text-white mb-0.5">Arya Sharma</h2>
            <p className="text-sm font-medium text-white/90 mb-4 tracking-wide">8 Months Old</p>
            <button 
               onClick={() => navigate('/register')}
               className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-white/30 transition-all flex items-center gap-2 border border-white/30"
            >
              <Edit3 className="w-4 h-4" />
              Edit Profile
            </button>
          </div>
        </div>

        <div className="px-container-padding-mobile -mt-8 relative z-20 space-y-gutter">
          <div className="bg-white rounded-xl shadow-sm p-5 grid grid-cols-2 gap-y-4 border border-surface-container">
            {[
              { label: 'DOB', value: '12 Oct 2023' },
              { label: 'Gender', value: 'Female' },
              { label: 'Blood Group', value: 'O Positive' },
              { label: 'Weight / Height', value: '7.8kg / 68cm' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest">{stat.label}</span>
                <span className="text-lg font-bold text-on-surface leading-tight">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Notifications */}
          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Notifications</h3>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-surface-container">
              <div className="flex items-center justify-between p-4 border-b border-surface-container-low">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm text-on-surface">Vaccine Reminders</span>
                </div>
                <button 
                  onClick={() => setVaccineReminders(!vaccineReminders)}
                  className={`w-12 h-6 rounded-full relative flex items-center transition-colors ${vaccineReminders ? 'bg-primary' : 'bg-surface-variant'}`}
                >
                  <motion.div 
                    animate={{ x: vaccineReminders ? 24 : 4 }}
                    className="w-4 h-4 bg-white rounded-full shadow-sm" 
                  />
                </button>
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm text-on-surface">Daily Care Tips</span>
                </div>
                <button 
                  onClick={() => setDailyTips(!dailyTips)}
                  className={`w-12 h-6 rounded-full relative flex items-center transition-colors ${dailyTips ? 'bg-primary' : 'bg-surface-variant'}`}
                >
                  <motion.div 
                    animate={{ x: dailyTips ? 24 : 4 }}
                    className="w-4 h-4 bg-white rounded-full shadow-sm" 
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Resources & Safety */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Resources & Safety</h3>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-surface-container">
              <button className="w-full flex items-center justify-between p-4 border-b border-surface-container-low hover:bg-surface-variant/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary">
                    <Hospital className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-sm text-on-surface text-left">Nearest Health Center</span>
                </div>
                <ChevronRight className="w-5 h-5 text-outline opacity-50" />
              </button>
              <button className="w-full flex items-center justify-between p-4 hover:bg-error-container/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center text-error">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-sm text-on-surface">Emergency 108</span>
                    <span className="text-error text-[10px] font-bold uppercase tracking-wider">Direct Support Line</span>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-outline opacity-50" />
              </button>
            </div>
          </div>

          {/* App Settings */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">App Settings</h3>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-surface-container">
               {[
                 { icon: Languages, label: 'Language', extra: 'English' },
                 { icon: Info, label: 'About Shishu-Sneh' },
                 { icon: Star, label: 'Rate App' },
                 { icon: HelpCircle, label: 'Contact Support' },
               ].map((item, i, arr) => (
                 <button 
                  key={item.label}
                  className={`w-full flex items-center justify-between p-4 hover:bg-surface-variant/30 transition-colors ${i !== arr.length - 1 ? 'border-b border-surface-container-low' : ''}`}
                 >
                   <div className="flex items-center gap-4">
                     <item.icon className="w-5 h-5 text-on-surface-variant" />
                     <span className="font-bold text-sm text-on-surface">{item.label}</span>
                   </div>
                   {item.extra ? (
                     <span className="text-primary text-xs font-bold">{item.extra}</span>
                   ) : (
                     <ChevronRight className="w-5 h-5 text-outline opacity-50" />
                   )}
                 </button>
               ))}
            </div>
          </div>

          {/* Data Management */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-on-surface-variant px-1 uppercase tracking-widest">Data Management</h3>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-surface-container">
              <button className="w-full flex items-center justify-between p-4 border-b border-surface-container-low hover:bg-surface-variant/30 transition-colors">
                <div className="flex items-center gap-4">
                  <Download className="w-5 h-5 text-on-surface-variant" />
                  <span className="font-bold text-sm text-on-surface">Export Records (PDF)</span>
                </div>
                <ChevronRight className="w-5 h-5 text-outline opacity-50" />
              </button>
              <button className="w-full flex items-center justify-between p-4 border-b border-surface-container-low hover:bg-surface-variant/30 transition-colors">
                <div className="flex items-center gap-4">
                  <CloudUpload className="w-5 h-5 text-on-surface-variant" />
                  <span className="font-bold text-sm text-on-surface">Backup to Cloud</span>
                </div>
                <ChevronRight className="w-5 h-5 text-outline opacity-50" />
              </button>
              <button className="w-full flex items-center justify-between p-4 hover:bg-error-container/20 transition-colors">
                <div className="flex items-center gap-4">
                  <Trash2 className="w-5 h-5 text-error" />
                  <span className="font-bold text-sm text-error">Clear All Data</span>
                </div>
                <AlertCircle className="w-4 h-4 text-error opacity-50" />
              </button>
            </div>
          </div>

          <div className="pt-4 pb-8 flex flex-col items-center">
            <p className="text-on-surface-variant/50 text-[10px] font-bold uppercase tracking-widest">Version 2.4.0 (2024)</p>
            <p className="text-on-surface-variant/50 text-[10px] font-bold uppercase tracking-widest mt-1">Made with ♥ for Mothers</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
