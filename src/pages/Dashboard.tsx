import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Plus, 
  Baby, 
  AlertTriangle, 
  TrendingUp, 
  ShieldCheck, 
  Utensils, 
  Sparkles, 
  Lightbulb, 
  ChevronRight 
} from 'lucide-react';
import Layout from '../components/Layout';

export default function Dashboard() {
  const navigate = useNavigate();

  const features = [
    { 
      id: 'growth', 
      title: 'Growth', 
      subtitle: 'Last: 2 days ago', 
      icon: TrendingUp, 
      color: 'text-tertiary', 
      bgColor: 'bg-tertiary-fixed-dim/20', 
      border: 'border-tertiary',
      path: '/growth'
    },
    { 
      id: 'vaccines', 
      title: 'Vaccines', 
      subtitle: 'Next: Polio Jan 15', 
      icon: ShieldCheck, 
      color: 'text-blue-500', 
      bgColor: 'bg-blue-50', 
      border: 'border-blue-500', 
      badge: 3,
      path: '/vaccinations'
    },
    { 
      id: 'feeding', 
      title: 'Feeding', 
      subtitle: 'Tips for 3-month old', 
      icon: Utensils, 
      color: 'text-secondary-container', 
      bgColor: 'bg-secondary-fixed/30', 
      border: 'border-secondary-container',
      path: '/feeding'
    },
    { 
      id: 'milestones', 
      title: 'Milestones', 
      subtitle: '5 of 12 done', 
      icon: Sparkles, 
      color: 'text-purple-500', 
      bgColor: 'bg-purple-50', 
      border: 'border-purple-500', 
      progress: 41,
      path: '/milestones'
    },
  ];

  return (
    <Layout>
      <div className="relative w-full h-[240px] bg-primary curved-header overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90"></div>
        <div className="relative z-10 px-container-padding-mobile pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[32px] font-bold text-on-primary"
          >
            Hello, Mom! 👋
          </motion.h1>
          <div className="flex items-center mt-2 gap-2 bg-white/20 backdrop-blur-md w-fit px-4 py-1.5 rounded-full">
            <Baby className="w-4 h-4 text-on-primary" />
            <span className="text-sm font-semibold text-on-primary">Baby Arya • 3 months</span>
          </div>
        </div>
      </div>

      <div className="px-container-padding-mobile -mt-16 relative z-20 space-y-gutter">
        {/* Alert: Vaccination Due */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-secondary-fixed text-on-secondary-fixed p-4 rounded-xl flex items-center justify-between shadow-sm"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-secondary w-6 h-6" />
            <div>
              <p className="font-bold text-sm">Vaccination Due!</p>
              <p className="text-xs opacity-90">Polio Drops in 3 days</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/vaccinations')}
            className="bg-secondary text-on-secondary px-4 py-1.5 rounded-full text-xs font-bold shadow-sm"
          >
            View
          </button>
        </motion.div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-2 gap-4">
          {features.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => navigate(item.path)}
              className={`bg-white p-4 rounded-2xl shadow-sm border-l-4 ${item.border} relative active:scale-95 transition-transform cursor-pointer`}
            >
              {item.badge && (
                <div className="absolute top-2 right-2 bg-primary text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                  {item.badge}
                </div>
              )}
              <div className={`w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center mb-3`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <h3 className="font-bold text-sm text-on-surface">{item.title}</h3>
              <p className="text-[10px] text-on-surface-variant mt-1">{item.subtitle}</p>
              {item.progress !== undefined && (
                <div className="w-full bg-surface-variant h-1.5 rounded-full mt-2">
                  <div 
                    className="bg-purple-500 h-1.5 rounded-full" 
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Tip of the Day Card */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-surface-variant">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb className="text-secondary w-5 h-5" />
            <span className="font-bold text-sm text-secondary">Tip of the Day</span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            At 3 months, your baby may start sleeping for longer stretches at night. Try establishing a consistent bedtime routine like a warm bath followed by gentle feeding to encourage better sleep patterns.
          </p>
          <div className="mt-4 pt-4 border-t border-surface-variant flex justify-end">
            <button 
               onClick={() => navigate('/feeding')}
               className="text-xs font-bold text-primary flex items-center gap-1"
            >
              Read More <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* FAB: Add Log */}
      <button 
        onClick={() => navigate('/growth')} // Navigate to growth to show measurement flow or similar
        className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform z-40"
      >
        <Plus className="w-8 h-8" />
      </button>
    </Layout>
  );
}
