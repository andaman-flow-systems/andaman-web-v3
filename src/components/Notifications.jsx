import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';

const icons = {
  success: <CheckCircle size={18} />,
  warning: <AlertTriangle size={18} />,
  error: <XCircle size={18} />,
  info: <Info size={18} />,
};

export default function Notifications() {
  const { notifications } = useApp();

  return (
    <div className="notifications">
      <AnimatePresence>
        {notifications.map(notif => (
          <motion.div
            key={notif.id}
            className={`notification ${notif.type}`}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <span className="notification-icon">{icons[notif.type]}</span>
            <span className="notification-message">{notif.message}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
