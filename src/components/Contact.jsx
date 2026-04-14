import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Contact() {
  const { addNotification } = useApp();
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNotification('Message sent successfully! We\'ll get back to you within 24 hours.', 'success');
    setForm({ name: '', email: '', company: '', budget: '', message: '' });
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Get In Touch</div>
          <h2 className="section-title">Let's Build Something Amazing</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Ready to take your digital presence to the next level? Tell us about your project.
          </p>
        </motion.div>

        <motion.div
          className="contact-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <form className="contact-form" onSubmit={handleSubmit} style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-glass)', borderRadius: 'var(--radius-xl)', padding: 40 }}>
            <div className="contact-row">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input className="form-input" placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input className="form-input" type="email" placeholder="you@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
              </div>
            </div>
            <div className="contact-row">
              <div className="form-group">
                <label className="form-label">Company</label>
                <input className="form-input" placeholder="Your Company" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Budget Range</label>
                <select className="form-select" value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}>
                  <option value="">Select budget</option>
                  <option value="500-2000">$500 - $2,000</option>
                  <option value="2000-5000">$2,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000+">$10,000+</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Project Details</label>
              <textarea className="form-textarea" placeholder="Tell us about your project, goals, and timeline..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
            </div>
            <button type="submit" className="btn btn-primary btn-lg" style={{ alignSelf: 'flex-start' }}>
              <Send size={18} /> Send Message
            </button>
          </form>

          <div className="contact-cta-box">
            <Sparkles size={32} style={{ color: 'var(--neon-purple-light)', marginBottom: 16 }} />
            <h3 className="contact-cta-title">Start Your Project <span className="gradient-text">Today</span></h3>
            <p className="contact-cta-desc">
              Join 500+ businesses that have trusted us to build their digital presence. From concept to launch, we're with you every step.
            </p>
            <button className="btn btn-primary btn-lg">
              Get Free Consultation <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
