import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import SplashScreen from './pages/SplashScreen';
import Onboarding from './pages/Onboarding';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Growth from './pages/Growth';
import Vaccinations from './pages/Vaccinations';
import Milestones from './pages/Milestones';
import Feeding from './pages/Feeding';
import Profile from './pages/Profile';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/growth" element={<Growth />} />
      <Route path="/vaccinations" element={<Vaccinations />} />
      <Route path="/milestones" element={<Milestones />} />
      <Route path="/feeding" element={<Feeding />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div id="app-container" className="min-h-screen bg-background">
        <Router />
      </div>
    </BrowserRouter>
  );
}
