import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + Math.random() * 8 + 2;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="preloader"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="preloader-logo">⬡ NovaWeb Studio</div>
      </motion.div>
      <motion.div
        className="preloader-bar"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 200 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <div className="preloader-bar-fill" style={{ width: `${Math.min(percent, 100)}%` }} />
      </motion.div>
      <motion.div
        className="preloader-percent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {Math.min(Math.round(percent), 100)}%
      </motion.div>
    </motion.div>
  );
}
