import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Check, Info, Lightbulb } from 'lucide-react';
import Layout from '../components/Layout';

export default function Milestones() {
  const ages = ["1m", "2m", "3m", "4m", "6m"];
  const [selectedAge, setSelectedAge] = useState("3m");

  const categories = [
    {
      title: "Physical Development",
      count: "2/4",
      items: [
        { id: 1, text: "Holds head up while on tummy", completed: true, date: "Oct 12, 2023" },
        { id: 2, text: "Pushes up on arms while on tummy", completed: false },
        { id: 3, text: "Begins to push up through arms", completed: false },
        { id: 4, text: "Moves both arms and both legs", completed: true, date: "Oct 5, 2023" },
      ]
    },
    {
      title: "Social & Emotional",
      count: "1/3",
      items: [
        { id: 5, text: "Smiles to get your attention", completed: true, date: "Oct 20, 2023" },
        { id: 6, text: "Chuckles (not yet a full laugh)", completed: false },
        { id: 7, text: "Looks at you and is happy", completed: false },
      ]
    },
    {
      title: "Cognitive",
      count: "0/4",
      items: [
        { id: 8, text: "Looks at their own hands with interest", completed: false },
        { id: 9, text: "Follows moving things with eyes", completed: false },
      ]
    }
  ];

  return (
    <Layout title="Milestone Checklist 👶">
      {/* Wave Header Section */}
      <div className="relative h-72 w-full overflow-hidden bg-primary-container">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container to-primary opacity-90"></div>
        <svg className="absolute bottom-0 left-0 w-full" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#fff8f7"></path>
        </svg>
        
        {/* Progress Content */}
        <div className="relative z-10 px-container-padding-mobile flex items-center justify-between h-full pb-12">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-white">Doing great! 🌟</h2>
            <p className="text-sm font-medium text-white/90">Milestone Progress</p>
          </div>
          <div className="relative flex items-center justify-center">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle className="text-white/20" cx="64" cy="64" r="50" fill="transparent" stroke="currentColor" strokeWidth="8" />
              <circle 
                className="text-white transition-all duration-1000" 
                cx="64" cy="64" r="50" fill="transparent" stroke="currentColor" strokeWidth="8" 
                strokeDasharray="314.159" 
                strokeDashoffset={314.159 * (1 - 0.47)}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-xl font-bold text-white">47%</span>
              <span className="text-[10px] uppercase font-bold text-white/80 tracking-widest">7/15</span>
            </div>
          </div>
        </div>
      </div>

      {/* Age Tabs */}
      <div className="px-container-padding-mobile -mt-8 relative z-20">
        <div className="flex overflow-x-auto gap-3 py-2 no-scrollbar">
          {ages.map((age) => {
            const isCompleted = ["1m", "2m"].includes(age);
            const isSelected = selectedAge === age;
            return (
              <button 
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`flex-shrink-0 px-5 py-3 rounded-2xl flex items-center gap-2 shadow-sm transition-all ${
                  isSelected 
                    ? 'bg-primary text-white scale-105 border-2 border-white' 
                    : isCompleted 
                      ? 'bg-tertiary-container text-white' 
                      : 'bg-white text-on-surface-variant border border-outline-variant/30'
                }`}
              >
                <span className="font-bold">{age}</span>
                {isCompleted && <CheckCircle2 className="w-4 h-4 fill-current opacity-30" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Sections */}
      <main className="px-container-padding-mobile mt-8 flex flex-col gap-stack-md pb-10">
        {categories.map((cat, idx) => (
          <section key={cat.title} className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-on-surface">{cat.title}</h3>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">{cat.count}</span>
            </div>
            <div className="flex flex-col gap-3">
              {cat.items.map((item) => (
                <div 
                  key={item.id}
                  className={`flex items-center justify-between p-4 rounded-2xl transition-all border ${
                    item.completed 
                      ? 'bg-tertiary-fixed-dim/20 border-tertiary-fixed' 
                      : 'bg-white border-outline-variant shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-all ${
                      item.completed ? 'bg-tertiary text-white' : 'border-2 border-outline-variant'
                    }`}>
                      {item.completed && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                    <div className="flex flex-col">
                      <p className={`text-sm font-semibold ${item.completed ? 'text-on-tertiary-fixed-variant' : 'text-on-surface-variant'}`}>
                        {item.text}
                      </p>
                      {item.date && <p className="text-[10px] font-bold text-tertiary mt-0.5 uppercase tracking-wide">Completed: {item.date}</p>}
                    </div>
                  </div>
                  {!item.completed && <Info className="w-4 h-4 text-outline-variant" />}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Footer Disclaimer */}
        <footer className="mt-8 mb-4 p-4 bg-secondary-fixed/30 rounded-2xl border border-secondary-fixed-dim/50 flex gap-4 items-start">
          <Lightbulb className="w-6 h-6 text-secondary shrink-0" />
          <p className="text-xs text-on-secondary-fixed-variant leading-relaxed">
            Every child develops at their own pace. This checklist is a general guide and not a definitive medical assessment. If you have concerns, please consult your pediatrician.
          </p>
        </footer>
      </main>
    </Layout>
  );
}
