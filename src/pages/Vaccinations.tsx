import { Search, ChevronRight, CheckCircle2, Syringe, ShieldCheck, Stethoscope } from 'lucide-react';
import Layout from '../components/Layout';
import { motion } from 'motion/react';

export default function Vaccinations() {
  const categories = ["All", "Completed", "Upcoming", "Overdue"];
  const birthVaccines = [
    { name: "BCG", desc: "Protects against TB", status: "Completed", icon: ShieldCheck, color: "text-tertiary", bgColor: "bg-tertiary/10", border: 'border-tertiary' },
    { name: "OPV-0", desc: "Polio Drops", status: "Completed", icon: Stethoscope, color: "text-tertiary", bgColor: "bg-tertiary/10", border: 'border-tertiary' },
  ];
  const sixWeekVaccines = [
    { name: "OPV-1", desc: "Due: 15 Oct 2023", status: "Due Soon", icon: Syringe, color: "text-secondary", bgColor: "bg-secondary-container/10", border: 'border-secondary-container' },
    { name: "Pentavalent-1", desc: "5-in-1 Vaccine", status: "Pending", icon: Syringe, color: "text-outline", bgColor: "bg-surface-variant/30", border: 'border-outline-variant' },
  ];

  return (
    <Layout title="Vaccination Schedule 💉">
      {/* Top Search Action (Injected via title effectively, but I can add a search icon separately if needed) */}
      <div className="absolute top-4 right-16 z-50">
         <Search className="w-5 h-5 text-on-surface-variant cursor-pointer" />
      </div>

      {/* Wave Header Effect */}
      <div className="bg-gradient-to-br from-[#ffd9de] to-[#fff8f7] wave-header h-48 w-full pt-4 px-container-padding-mobile">
        {/* Summary Card */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between relative overflow-hidden border border-surface-container"
        >
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
          <div className="z-10">
            <h2 className="text-xl font-bold text-on-surface mb-1">Great job, Mom! 🎉</h2>
            <p className="text-sm text-on-surface-variant">Your baby is safe & healthy.</p>
            <div className="mt-4 inline-flex items-center px-3 py-1 bg-tertiary/10 rounded-full">
              <CheckCircle2 className="text-tertiary w-4 h-4 mr-1 fill-current opacity-20" />
              <span className="text-xs font-bold text-tertiary">8 of 15 Vaccines done</span>
            </div>
          </div>
          <div className="relative w-24 h-24 flex items-center justify-center z-10">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="48" cy="48" r="40" fill="none" stroke="#f5f5f5" strokeWidth="8" />
              <circle 
                cx="48" cy="48" r="40" fill="none" stroke="#b80049" strokeWidth="8" 
                strokeDasharray="251.3" 
                strokeDashoffset={251.3 * (1 - 0.53)}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-bold text-primary">53%</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filter Chips */}
      <div className="px-container-padding-mobile mt-6 mb-4 flex gap-2 overflow-x-auto no-scrollbar">
        {categories.map((cat, i) => (
          <button 
            key={cat}
            className={`px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all ${
              i === 0 ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-variant/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Timeline Content */}
      <main className="px-container-padding-mobile space-y-8 pb-10">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/10"></div>
            <h3 className="text-lg font-bold text-on-surface">Birth Vaccines</h3>
          </div>
          <div className="space-y-3">
            {birthVaccines.map((v, i) => (
              <motion.div 
                key={v.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-white p-4 rounded-xl shadow-sm flex items-center justify-between border-l-4 ${v.border}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${v.bgColor} flex items-center justify-center`}>
                    <v.icon className={`w-6 h-6 ${v.color}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-on-surface">{v.name}</h4>
                    <p className="text-xs text-on-surface-variant">{v.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`${v.bgColor} ${v.color} text-[10px] font-bold px-2 py-1 rounded uppercase`}>
                    {v.status}
                  </span>
                  <ChevronRight className="w-4 h-4 text-outline-variant" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-secondary-container ring-4 ring-secondary-container/10"></div>
            <h3 className="text-lg font-bold text-on-surface">6 Week Vaccines</h3>
          </div>
          <div className="space-y-3">
            {sixWeekVaccines.map((v, i) => (
              <motion.div 
                key={v.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (i + 2) * 0.1 }}
                className={`bg-white p-4 rounded-xl shadow-sm flex items-center justify-between border-l-4 ${v.border}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${v.bgColor} flex items-center justify-center`}>
                    <v.icon className={`w-6 h-6 ${v.color}`} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-on-surface">{v.name}</h4>
                    <p className="text-xs text-on-surface-variant">{v.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`${v.bgColor} ${v.color} text-[10px] font-bold px-2 py-1 rounded uppercase`}>
                    {v.status}
                  </span>
                  <ChevronRight className="w-4 h-4 text-outline-variant" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="mt-8 pt-4 pb-8 text-center border-t border-surface-container-high">
          <p className="text-xs text-on-surface-variant opacity-70 italic tracking-wide">
            Based on Indian National Immunization Schedule.
          </p>
        </footer>
      </main>
    </Layout>
  );
}
