import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, User, Search, X, Menu, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cart, wishlist, user, setShowLogin, setShowCart, setShowSignup, logout } = useApp();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'Templates', href: '/#showcase' },
    { label: 'Services', href: '/#services' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Contact', href: '/#contact' },
  ];

  const scrollToSection = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-icon">⬡</div>
            <span>Nova<span className="gradient-text">Web</span></span>
          </Link>

          <div className="navbar-links">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="navbar-link"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <Link to="/admin" className="navbar-link">Dashboard</Link>
          </div>

          <div className="navbar-actions">
            <button
              className="btn-icon"
              onClick={() => setShowCart(true)}
              aria-label="Cart"
            >
              <div className="navbar-cart-badge">
                <ShoppingCart size={18} />
                {cart.length > 0 && (
                  <span className="navbar-cart-count">{cart.length}</span>
                )}
              </div>
            </button>

            <button
              className="btn-icon"
              onClick={() => user ? logout() : setShowLogin(true)}
              aria-label={user ? 'Logout' : 'Login'}
              title={user ? `Logout (${user.name})` : 'Login'}
            >
              <User size={18} />
            </button>

            <div className="navbar-mobile-toggle" onClick={() => setMobileOpen(true)}>
              <span /><span /><span />
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              style={{ position: 'absolute', top: 24, right: 24 }}
              onClick={() => setMobileOpen(false)}
            >
              <X size={28} color="#f1f5f9" />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="navbar-link"
                onClick={(e) => { scrollToSection(e, link.href); setMobileOpen(false); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ display: 'flex', gap: 12, marginTop: 20 }}
            >
              <button className="btn btn-primary btn-sm" onClick={() => { setShowLogin(true); setMobileOpen(false); }}>Login</button>
              <button className="btn btn-secondary btn-sm" onClick={() => { setShowSignup(true); setMobileOpen(false); }}>Sign Up</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
