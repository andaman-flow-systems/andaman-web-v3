import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Notifications from './components/Notifications';
import CartSidebar from './components/CartSidebar';
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import CursorGlow from './components/CursorGlow';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import { useApp } from './context/AppContext';

const pageTransition = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
  exit: { opacity: 0, scale: 1.02, transition: { duration: 0.3 } }
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { showLogin, showSignup, showCart } = useApp();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <>
      <CursorGlow />
      <Navbar />
      <Notifications />
      {showCart && <CartSidebar />}
      {showLogin && <LoginModal />}
      {showSignup && <SignupModal />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div {...pageTransition}><Home /></motion.div>
          } />
          <Route path="/checkout" element={
            <motion.div {...pageTransition}><Checkout /></motion.div>
          } />
          <Route path="/admin" element={
            <motion.div {...pageTransition}><Admin /></motion.div>
          } />
        </Routes>
      </AnimatePresence>
    </>
  );
}
