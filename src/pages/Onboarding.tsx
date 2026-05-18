import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Activity } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Track Your Baby's Growth",
    description: "Monitor weight and height with simple charts. Watch your little one grow healthy & strong.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxUIXRC14G_DKAj1SHSj9VFTQJJmEuJtWi8dpJ2UGb6LlmUC5Q9dhL7U39TQFe2HIuC6RPCiIENLbR30kKlgmjMSWIXu_byKKkxxuznPCZ0Shxn0QfEYet2axG4zKosCtWaN3_seSoRrk0JWbJDqo_cuaHAIAJoG4PWGvLjKnMrWkbgsp5R05c_qCq4pexFkut-WBIt_EZPe7ibwyJl8eVHBHPS3AB4v5Ka_r2uu9MAtNq-qFF8tXQbPRis1sFT9iyOk4IDLVrSaC7",
    badge: { icon: Activity, label: "GROWING FAST" }
  },
  {
    id: 2,
    title: "Expert Guidance at Your Fingertips",
    description: "Feeding tips, developmental milestones, and nutrition advice — all in your local language.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJhYJJMbVw5OC2XvXkCbgzyFuhVCTJCZDsOXruD8cNJVb0deh_dO89KvW4Wc0xj9gHlyYrs9JCiwGp7B77BmuC9kDY8kYJ2FaM7y7W_0FHjNXseYc21pNKp7wKt5b1m3cRns42Urfc5tjZekMBBOwJlxvND_bYpap-B1FktOChF3JaeB6nJaGsmQhevLsCqvI984l-KzewpB3q99Z11STeTyWeS_IjGi0lf9fjosS4zeIjkSWxoZX9U2FIAAmHXYUcViXpzpbb2rQk",
    previewChips: [
      { id: 1, icon: "🍴", label: "Feeding Tips" },
      { id: 2, icon: "📈", label: "Milestones" }
    ]
  },
  {
    id: 3,
    title: "Personalized Health Calendar",
    description: "Never miss a vaccination or health checkup. Stay on top of your baby's wellness schedule.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3OgTEf4R1sQinCI2XByXJ_Ojtic6f-cEf7zrUb-kBibkYwoShan62rMIcwR0-FSrI4DolAAVSHWpDMW97c6QD73lK3d8kRl9HyEXQ2AcDadiQw1ZWLlsulkUzZRq5IMM2GPCpLfv3fiFNvKrY9OEx3ALgHIWTipueNYoVYxiMHLNU_WbHQSD4gjGZ5rAuNbKIKPIiiUGVwiQuWLVhRRBFQoAixqD_tOh9V6vRVcv0VWxxfhQA7fwqmcJACQno2m6T33MEyksnyvFk",
  }
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate('/register');
    }
  };

  const handleSkip = () => {
    navigate('/register');
  };

  const slide = slides[currentSlide];

  return (
    <main className="relative h-screen flex flex-col items-center justify-between overflow-hidden bg-background">
      {/* Top Wave Header with Illustration */}
      <div className="relative w-full h-[486px] flex items-center justify-center overflow-hidden">
        {/* Organic Wave Background */}
        <div className="absolute inset-0 bg-primary-fixed/30 wave-header"></div>
        
        {/* Top Header */}
        <div className="absolute top-0 w-full flex justify-between items-center px-container-padding-mobile py-4 z-10">
          <span className="text-xl font-bold text-primary">Shishu-Sneh</span>
          <button 
            onClick={handleSkip}
            className="text-on-surface-variant font-semibold hover:bg-surface-variant/50 px-4 py-2 rounded-full transition-colors"
          >
            Skip
          </button>
        </div>

        {/* Illustration Container */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative z-0 w-full px-container-padding-mobile flex justify-center items-end h-full pb-10"
          >
            <div className="relative w-full max-w-[320px] aspect-square bg-white rounded-[40px] shadow-[0px_4px_20px_rgba(62,39,35,0.08)] p-6 flex flex-col items-center justify-center overflow-hidden">
              <img 
                alt={slide.title} 
                className="w-full h-full object-contain" 
                src={slide.image} 
              />
              
              {slide.badge && (
                <div className="absolute bottom-4 right-4 bg-tertiary-container/10 border border-tertiary-container/20 p-2 rounded-xl flex items-center gap-2">
                  <slide.badge.icon className="w-4 h-4 text-tertiary" />
                  <span className="text-[10px] font-bold text-tertiary uppercase tracking-wider">{slide.badge.label}</span>
                </div>
              )}

              {slide.previewChips && (
                <div className="absolute bottom-4 left-0 w-full px-4 flex gap-2">
                   {slide.previewChips.map(chip => (
                     <div key={chip.id} className="bg-white/90 backdrop-blur shadow-sm rounded-lg p-2 flex gap-2 items-center text-[10px] font-bold">
                        <span>{chip.icon}</span>
                        <span>{chip.label}</span>
                     </div>
                   ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Section */}
      <div className="flex-1 w-full px-container-padding-mobile flex flex-col items-center text-center pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-2xl font-bold text-on-surface mb-stack-sm max-w-[280px]">
              {slide.title}
            </h1>
            <p className="text-body-md text-on-surface-variant/80 max-w-[320px] leading-relaxed">
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Controls */}
      <div className="w-full px-container-padding-mobile pb-12 flex items-center justify-between">
        <div className="w-20"></div>
        
        {/* Page Indicator */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <div 
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 bg-primary' : 'w-2 bg-surface-variant'}`}
            />
          ))}
        </div>

        {/* Primary Action */}
        <div className="w-20 flex justify-end">
          <button 
            onClick={handleNext}
            className="bg-primary text-on-primary w-14 h-14 rounded-full flex items-center justify-center shadow-[0px_4px_20px_rgba(233,30,99,0.3)] active:scale-95 transition-transform"
          >
            {currentSlide === slides.length - 1 ? (
              <span className="font-bold px-2">Go</span>
            ) : (
              <ArrowRight className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Background Subtle Textures */}
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary-fixed/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 -right-20 w-48 h-48 bg-primary-fixed/20 rounded-full blur-3xl -z-10"></div>
    </main>
  );
}
