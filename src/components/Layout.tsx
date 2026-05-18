import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home, Activity, ShieldCheck, User } from 'lucide-react';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  showTopBar?: boolean;
  showBottomNav?: boolean;
  title?: string;
}

export default function Layout({ children, showTopBar = true, showBottomNav = true, title = "Shishu-Sneh" }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: Activity, label: "Growth", path: "/growth" },
    { icon: ShieldCheck, label: "Vaccines", path: "/vaccinations" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {showTopBar && (
        <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-md flex justify-between items-center px-container-padding-mobile py-4 h-16 shadow-sm border-b border-surface-container-low">
          <div className="flex items-center gap-3">
            <Menu className="w-6 h-6 text-primary cursor-pointer" />
            <h1 className="text-xl font-bold text-primary">{title}</h1>
          </div>
          <Link to="/profile" className="w-10 h-10 rounded-full border-2 border-primary-fixed overflow-hidden">
            <img 
              alt="Baby Avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5ZtPQgOttzlnCU6lC31yEWtITvJeA98OiA5099P196KuUzBEI8QeZJNc-nrnLqeWUnGEo1YPcpoVaheiDh3Z8WN0bHyt8EIxzacoZxxsd5wwWeQjlpmO5UN0V0itDkXEk5JG9DnyHTJIF1pEDys2fOAzctc_7xQ_Zkhiir2J1RS1aZSmj9TJ0sPLK5V6yrnpvFq6Y2r4EpLR_iSvzfXwKgnxd8Ypej7oBsTXOAkfUaLREzlMCwMizv_vKoh-Fl-rrrrMqo0zRJ_CO" 
            />
          </Link>
        </header>
      )}

      <main className={`flex-grow ${showTopBar ? 'pt-16' : ''} ${showBottomNav ? 'pb-24' : ''}`}>
        {children}
      </main>

      {showBottomNav && (
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-safe pt-2 h-20 bg-white/90 backdrop-blur-md z-50 rounded-t-2xl shadow-[0px_-4px_20px_rgba(62,39,35,0.08)]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link 
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center rounded-2xl px-4 py-1.5 transition-all ${
                  isActive ? 'bg-primary-container/10 text-primary font-bold' : 'text-on-surface-variant/80 hover:bg-surface-variant/30'
                }`}
              >
                <Icon className={`w-6 h-6 mb-1 ${isActive ? 'fill-current opacity-20' : ''}`} />
                <span className="text-[12px] uppercase tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </div>
  );
}
