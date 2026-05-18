import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  MoreVertical, 
  ArrowUp, 
  CalendarDays, 
  Plus, 
  Scale, 
  Ruler, 
  FileText,
  X
} from 'lucide-react';
import Layout from '../components/Layout';

export default function Growth() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<'Weight' | 'Height'>('Weight');
  const [showAddSheet, setShowAddSheet] = useState(false);

  const history = [
    { date: 'January 10, 2024', type: 'Routine Checkup', weight: '5.2 kg', height: '58 cm', active: true },
    { date: 'December 28, 2023', type: 'Home Recording', weight: '4.9 kg', height: '55.9 cm' },
    { date: 'December 15, 2023', type: 'Clinic Visit', weight: '4.6 kg', height: '54.5 cm' },
  ];

  return (
    <Layout title="Growth Chart 📊">
      {/* Wave Decoration */}
      <div className="fixed top-0 left-0 w-full h-48 bg-gradient-to-b from-primary/10 to-transparent wave-header -z-10"></div>
      
      <div className="px-container-padding-mobile flex flex-col gap-gutter mt-4">
        {/* Toggle Pill Buttons */}
        <div className="flex p-1.5 bg-surface-container-low rounded-full w-fit mx-auto shadow-sm">
          <button 
            onClick={() => setTab('Weight')}
            className={`px-8 py-2 rounded-full font-bold transition-all ${tab === 'Weight' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:bg-surface-variant/30'}`}
          >
            Weight
          </button>
          <button 
            onClick={() => setTab('Height')}
            className={`px-8 py-2 rounded-full font-bold transition-all ${tab === 'Height' ? 'bg-primary text-on-primary shadow-md' : 'text-on-surface-variant hover:bg-surface-variant/30'}`}
          >
            Height
          </button>
        </div>

        {/* Chart Section */}
        <section className="bg-white rounded-[24px] p-stack-md shadow-sm overflow-hidden border border-surface-container">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-on-surface">{tab} Progress</h3>
              <p className="text-xs text-on-surface-variant">Last 4 months progress</p>
            </div>
            <MoreVertical className="text-on-surface-variant w-5 h-5 cursor-pointer" />
          </div>

          {/* Visualization: Line Chart with SVG */}
          <div className="relative w-full h-48 mt-4 px-2">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <defs>
                <linearGradient id="pinkGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#b80049" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line x1="0" y1="180" x2="400" y2="180" stroke="#e4bdc2" strokeWidth="0.5" />
              <line x1="0" y1="140" x2="400" y2="140" stroke="#e4bdc2" strokeWidth="0.5" strokeDasharray="4" />
              <line x1="0" y1="100" x2="400" y2="100" stroke="#e4bdc2" strokeWidth="0.5" strokeDasharray="4" />
              <line x1="0" y1="60" x2="400" y2="60" stroke="#e4bdc2" strokeWidth="0.5" strokeDasharray="4" />
              
              {/* Data Area */}
              <path 
                d={tab === 'Weight' ? "M0 160 Q 50 140 100 130 T 200 90 T 300 70 T 400 50 L 400 200 L 0 200 Z" : "M0 170 Q 50 150 100 140 T 200 110 T 300 90 T 400 70 L 400 200 L 0 200 Z"} 
                fill="url(#pinkGradient)" 
              />
              <path 
                d={tab === 'Weight' ? "M0 160 Q 50 140 100 130 T 200 90 T 300 70 T 400 50" : "M0 170 Q 50 150 100 140 T 200 110 T 300 90 T 400 70"} 
                fill="none" 
                stroke="#b80049" 
                strokeWidth="4" 
                strokeLinecap="round" 
              />
              
              {/* Points */}
              {[100, 200, 300, 400].map((x, i) => {
                const y = tab === 'Weight' ? [130, 90, 70, 50][i] : [140, 110, 90, 70][i];
                return <circle key={x} cx={x} cy={y} r="6" fill="#b80049" />;
              })}
            </svg>
            <div className="flex justify-between mt-2 px-1 text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">
              <span>W1</span><span>W4</span><span>M2</span><span>M3</span><span>M4</span>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-gutter">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-surface-container">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Current Weight</p>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-on-surface">5.2 kg</span>
              <span className="text-xs font-bold text-tertiary flex items-center">
                <ArrowUp className="w-3 h-3" />+0.3
              </span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-surface-container">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Current Height</p>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-on-surface">58 cm</span>
              <span className="text-xs font-bold text-tertiary flex items-center">
                <ArrowUp className="w-3 h-3" />+2.1
              </span>
            </div>
          </div>
        </div>

        {/* History List */}
        <section className="mt-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-on-surface">Growth History</h2>
            <button className="text-primary text-sm font-bold">View All</button>
          </div>
          <div className="flex flex-col gap-stack-sm">
            {history.map((record, i) => (
              <div key={i} className="bg-white flex items-center justify-between p-4 rounded-2xl shadow-sm border border-surface-container">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${record.active ? 'bg-tertiary-fixed text-on-tertiary-fixed' : 'bg-surface-container-highest text-primary'}`}>
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-on-surface">{record.date}</p>
                    <p className="text-xs text-on-surface-variant">{record.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm text-on-surface">{record.weight}</p>
                  <p className="text-xs text-on-surface-variant">{record.height}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* FAB */}
      <button 
        onClick={() => setShowAddSheet(true)}
        className="fixed bottom-24 right-container-padding-mobile w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform z-40"
      >
        <Plus className="w-8 h-8" />
      </button>

      {/* Bottom Sheet Modal */}
      <AnimatePresence>
        {showAddSheet && (
          <>
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setShowAddSheet(false)}
               className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm z-50 overflow-hidden" 
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 w-full bg-white rounded-t-[32px] shadow-2xl z-50 flex flex-col max-h-[85vh] overflow-hidden"
            >
               <div className="w-full flex justify-center py-4">
                  <div className="w-12 h-1.5 bg-surface-variant rounded-full" />
               </div>
               <div className="px-container-padding-mobile pb-6">
                 <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
                        Add Measurement 📏
                      </h2>
                      <p className="text-xs text-on-surface-variant mt-1">Keep track of your baby's healthy growth journey.</p>
                    </div>
                    <button onClick={() => setShowAddSheet(false)} className="p-2 rounded-full hover:bg-surface-variant/30">
                       <X className="w-6 h-6 text-on-surface-variant" />
                    </button>
                 </div>
               </div>

               <div className="px-container-padding-mobile pb-8 overflow-y-auto">
                 <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface block px-1">Date</label>
                      <div className="flex items-center gap-3 bg-[#F5F5F5] rounded-[12px] px-4 py-3 border-2 border-transparent focus-within:border-primary focus-within:bg-white transition-all">
                        <CalendarDays className="w-5 h-5 text-on-surface-variant" />
                        <input className="bg-transparent border-none focus:ring-0 w-full text-sm p-0" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-2">
                         <label className="text-sm font-bold text-on-surface block px-1">Weight (kg)</label>
                         <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-[12px] px-4 py-3 border-2 border-transparent focus-within:border-primary focus-within:bg-white transition-all">
                            <Scale className="w-5 h-5 text-on-surface-variant" />
                            <input className="bg-transparent border-none focus:ring-0 w-full text-sm p-0" placeholder="0.0" step="0.1" type="number" />
                         </div>
                       </div>
                       <div className="space-y-2">
                         <label className="text-sm font-bold text-on-surface block px-1">Height (cm)</label>
                         <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-[12px] px-4 py-3 border-2 border-transparent focus-within:border-primary focus-within:bg-white transition-all">
                            <Ruler className="w-5 h-5 text-on-surface-variant" />
                            <input className="bg-transparent border-none focus:ring-0 w-full text-sm p-0" placeholder="00" step="0.5" type="number" />
                         </div>
                       </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface block px-1">Notes</label>
                      <div className="bg-[#F5F5F5] rounded-[12px] px-4 py-3 border-2 border-transparent focus-within:border-primary focus-within:bg-white transition-all">
                        <textarea className="bg-transparent border-none focus:ring-0 w-full text-sm p-0 resize-none" placeholder="How was baby today? (Optional)" rows={3}></textarea>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-2">
                      <button 
                        onClick={() => setShowAddSheet(false)}
                        className="w-full bg-primary text-white font-bold py-4 rounded-full shadow-lg active:scale-95 transition-all"
                      >
                        Save
                      </button>
                      <button 
                        onClick={() => setShowAddSheet(false)}
                        className="w-full text-on-surface-variant font-bold py-4 active:scale-95 transition-all"
                      >
                        Cancel
                      </button>
                    </div>
                 </div>
               </div>
               <div className="h-8 w-full bg-white shrink-0" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
}
