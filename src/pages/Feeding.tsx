import { ArrowLeft, ChevronDown, CheckCircle2, XCircle, Droplet, Clock, Moon, Utensils, ShieldCheck } from 'lucide-react';
import Layout from '../components/Layout';
import { motion } from 'motion/react';

export default function Feeding() {
  const ages = ["0-1m", "1-3m", "3-6m", "6-12m", "1-2y"];

  return (
    <Layout title="Feeding Guide 🍼">
      {/* Wave Decorative Element */}
      <div className="h-32 w-full bg-gradient-to-br from-surface-bright to-surface-container wave-header -mt-2 mb-4"></div>
      
      <main className="px-container-padding-mobile -mt-24 relative z-10 space-y-6">
        {/* Age Selector */}
        <section className="overflow-x-auto no-scrollbar flex gap-3 pb-2 mt-4">
          {ages.map((age, i) => (
            <button 
              key={age}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full font-bold transition-all shadow-sm ${
                i === 1 ? 'bg-primary text-on-primary scale-105' : 'bg-white text-on-surface-variant border border-outline-variant/30'
              }`}
            >
              {age}
            </button>
          ))}
        </section>

        {/* Hero Card */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm border border-surface-variant/20"
          >
            <div className="relative h-48 w-full bg-gradient-to-br from-secondary-container/20 to-primary/10 flex items-center justify-center">
              <img 
                alt="Breastfeeding Illustration" 
                className="w-full h-full object-cover rounded-xl" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoAUa-EFqDbTpSRsz1gEw0KJzAtZg9VibJhR85iGVKZfIf0bhXYZOcinNUjl-siAduM3DhyXRmltvrHOetEP4BLCe0ALPO32tScNUaiT5nnBECeMceZ66nl5eYI3dZcYi7gZeI09kFv8tuB0OS1FMe8EwSwMRNjY83vjF8COK2ieBhCPd7ovnsTgbfJmXeTYqj1Qw4q-X3LbkOsQ2EWlA14Yi_yufaQxPv39Lff-OgWDC4H7Qj3YrBaXk-PqV7fBwUZtKkqi61EBpp" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-2">Exclusive Breastfeeding is Best! 🤱</h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">Your baby needs only breast milk for the first 6 months. It provides all the nutrition and hydration required for healthy development.</p>
            </div>
          </motion.div>
        </section>

        {/* Tips List */}
        <h3 className="text-lg font-bold text-on-surface px-1">Nurturing Tips</h3>
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col gap-3 border-t-4 border-primary/40">
            <div className="w-10 h-10 rounded-xl bg-primary-container/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-on-surface">Frequency</h4>
              <p className="text-xs text-on-surface-variant mt-1">Feed 8-12 times every 24 hours.</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm flex flex-col gap-3 border-t-4 border-tertiary/40">
            <div className="w-10 h-10 rounded-xl bg-tertiary-container/10 flex items-center justify-center">
              <Droplet className="w-5 h-5 text-tertiary" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-on-surface">No Water</h4>
              <p className="text-xs text-on-surface-variant mt-1">Breast milk is 88% water.</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm col-span-2 flex items-center gap-4 border-l-4 border-secondary/40">
            <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center flex-shrink-0">
              <Moon className="w-6 h-6 text-secondary" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-sm text-on-surface">Night Feeding</h4>
                <ChevronDown className="w-4 h-4 text-outline-variant" />
              </div>
              <p className="text-xs text-on-surface-variant">Helps maintain milk supply and comforts baby.</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm col-span-2 flex items-center gap-4 border-l-4 border-primary/40">
            <div className="w-12 h-12 rounded-full bg-primary-fixed/30 flex items-center justify-center flex-shrink-0">
              <Utensils className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-sm text-on-surface">Mother's Diet</h4>
                <ChevronDown className="w-4 h-4 text-outline-variant" />
              </div>
              <p className="text-xs text-on-surface-variant">Stay hydrated and eat iron-rich foods.</p>
            </div>
          </div>
        </section>

        {/* Myth Buster Section */}
        <section className="pb-10">
          <div className="bg-error-container/40 rounded-3xl p-6 border border-error/10 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-error/10 p-2 rounded-lg">
                 <ShieldCheck className="w-5 h-5 text-error" />
              </div>
              <h3 className="text-lg font-bold text-on-error-container">Myth vs Fact</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white">
                <div className="flex items-center gap-1 mb-1 text-xs font-bold text-error uppercase tracking-widest">
                  <XCircle className="w-4 h-4" /> MYTH
                </div>
                <p className="text-sm font-bold text-on-surface mb-2 italic">"Gripe water helps with digestion."</p>
                <div className="flex items-center gap-1 mb-1 text-xs font-bold text-tertiary uppercase tracking-widest border-t border-error-container/30 pt-2">
                  <CheckCircle2 className="w-4 h-4" /> FACT
                </div>
                <p className="text-xs text-on-surface-variant">Avoid gripe water as it may contain unnecessary sugar or alcohol. Breast milk alone is best for digestion.</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-xl border border-white">
                <div className="flex items-center gap-1 mb-1 text-xs font-bold text-error uppercase tracking-widest">
                  <XCircle className="w-4 h-4" /> MYTH
                </div>
                <p className="text-sm font-bold text-on-surface mb-2 italic">"Babies need extra water during summer."</p>
                <div className="flex items-center gap-1 mb-1 text-xs font-bold text-tertiary uppercase tracking-widest border-t border-error-container/30 pt-2">
                  <CheckCircle2 className="w-4 h-4" /> FACT
                </div>
                <p className="text-xs text-on-surface-variant">No extra water is needed before 6 months. Frequent nursing keeps the baby perfectly hydrated.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
