import { Globe, MessageCircle, Users, Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="navbar-logo" style={{ marginBottom: 4, fontSize: '1.3rem' }}>
            <div className="navbar-logo-icon" style={{ width: 32, height: 32, fontSize: '0.9rem' }}>⬡</div>
            <span>Nova<span className="gradient-text">Web</span></span>
          </div>
          <p className="footer-brand-desc">
            Crafting world-class digital experiences that drive growth, engagement, and conversions for modern businesses worldwide.
          </p>
          <div className="footer-social" style={{ marginTop: 20 }}>
            <button className="btn-icon" title="Twitter"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16h-4.267z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg></button>
            <button className="btn-icon" title="GitHub"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></button>
            <button className="btn-icon" title="LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></button>
            <button className="btn-icon" title="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></button>
          </div>
        </div>
        <div>
          <div className="footer-heading">Product</div>
          <a href="#showcase" className="footer-link">Templates</a>
          <a href="#pricing" className="footer-link">Pricing</a>
          <a href="#demo" className="footer-link">Live Demos</a>
          <a href="#" className="footer-link">Changelog</a>
          <a href="#" className="footer-link">Documentation</a>
        </div>
        <div>
          <div className="footer-heading">Company</div>
          <a href="#" className="footer-link">About Us</a>
          <a href="#" className="footer-link">Careers</a>
          <a href="#" className="footer-link">Blog</a>
          <a href="#contact" className="footer-link">Contact</a>
          <a href="#" className="footer-link">Partners</a>
        </div>
        <div>
          <div className="footer-heading">Support</div>
          <a href="#faq" className="footer-link">FAQ</a>
          <a href="#" className="footer-link">Help Center</a>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">License</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 NovaWeb Studio. All rights reserved.</span>
        <span>Designed with ❤️ for the web</span>
      </div>
    </footer>
  );
}
