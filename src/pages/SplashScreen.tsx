import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main id="splash-screen" className="bg-gradient-to-br from-[#FFF0F5] to-[#F0F0FF] min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center gap-base">
        <div className="relative mb-stack-md">
          {/* Outer Decorative Glow */}
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-white w-48 h-48 rounded-full flex items-center justify-center shadow-[0px_4px_20px_rgba(62,39,35,0.08)]"
          >
            <img 
              alt="Shishu-Sneh Logo" 
              className="w-32 h-32 object-contain" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChEB9LQMz2K1YsWlwx-HwiYF4JQ0SmOMYuxhpedCjuchr49hSWEX6xNpNJ30Vwz1HhAL4vOEFmfSFDM3h21TrUg9nm79BXjXST6_s4dICVUqQGZrCyl4iT9spEUBqjdPV7MLfhhXfABNWA6j7d5nKRNj5gkMuRnScmXgMM-QXlvMZl6SfeVePhluqEAqIqqaveQnbLAky0DxL2vviv_M6BVy9VIKSQQJwONkHREr4alSyAgbF2MQrycRMNv4e6dQnGlM8qhDjJkikJ"
            />
          </motion.div>
        </div>
        <div className="text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-plus-jakarta text-[32px] font-bold text-primary mb-2"
          >
            Shishu-Sneh
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-body-md text-on-surface-variant opacity-80"
          >
            Baby's First Year Guide
          </motion.p>
        </div>
      </div>

      {/* Bottom Loading State */}
      <div className="mt-auto flex gap-3 pb-16">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              delay: i * 0.2,
              ease: "easeInOut"
            }}
            className="w-3 h-3 rounded-full bg-primary"
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] opacity-40">
        <svg className="absolute -top-20 -left-20 w-80 h-80 text-primary-fixed-dim" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <path d="M41.5,-68.8C54.4,-61.2,65.8,-50.8,73.5,-38.3C81.1,-25.8,84.9,-11.2,83.4,2.9C81.9,17,75,30.5,66,42.5C57,54.5,45.8,65,32.8,70.8C19.7,76.6,4.8,77.7,-10.8,75.4C-26.4,73.1,-42.6,67.3,-55.8,57.1C-69,46.9,-79.1,32.3,-83.1,16.5C-87,0.7,-84.8,-16.3,-77.7,-31.2C-70.6,-46.1,-58.5,-59,-44.1,-65.9C-29.6,-72.8,-12.8,-73.7,1.2,-75.7C15.2,-77.7,30.5,-73.4,41.5,-68.8Z" fill="currentColor" transform="translate(250, 250)"></path>
        </svg>
        <svg className="absolute -bottom-20 -right-20 w-96 h-96 text-secondary-fixed" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.4,-72.6C58,-66.1,69.7,-54.6,76.9,-41C84.1,-27.4,86.9,-11.7,85.6,3.6C84.3,18.9,78.9,33.9,69.8,45.8C60.7,57.7,47.9,66.6,33.9,71.8C19.9,77,-0.2,78.5,-19,74.8C-37.7,71.2,-55.1,62.4,-67.2,49.2C-79.3,36,-86.1,18.3,-86.8,0.4C-87.5,-17.5,-82.1,-35.6,-71.1,-49.6C-60,-63.6,-43.3,-73.5,-27.8,-78.9C-12.4,-84.3,1.9,-85.2,16.6,-81.4C31.3,-77.6,30.8,-79,44.4,-72.6Z" fill="currentColor" transform="translate(250, 250)"></path>
        </svg>
      </div>
    </main>
  );
}
