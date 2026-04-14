import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  { name: 'Sarah Chen', role: 'CEO, TechVision', text: 'NovaWeb Studio completely transformed our online presence. Our conversions increased by 340% within the first month. The design is absolutely stunning and our customers love it.', initials: 'SC' },
  { name: 'Marcus Wright', role: 'Founder, LaunchPad', text: 'Working with NovaWeb was an incredible experience. They understood our vision perfectly and delivered a website that exceeded all expectations. Truly world-class work.', initials: 'MW' },
  { name: 'Elena Rodriguez', role: 'CMO, StyleHouse', text: 'The attention to detail is unmatched. Every animation, every interaction — it all feels intentional and premium. Our e-commerce site has never performed better.', initials: 'ER' },
  { name: 'David Kim', role: 'CTO, CloudBase', text: 'As a tech company, we needed a website that showcased innovation. NovaWeb delivered a 3D experience that literally makes our competitors jealous. Outstanding team.', initials: 'DK' },
  { name: 'Lisa Thompson', role: 'Director, ArtSpace', text: 'From the initial concept to the final launch, the NovaWeb team was professional, creative, and efficient. Our portfolio site is a work of art itself. Highly recommended!', initials: 'LT' },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const cardWidth = 424;

  const scroll = (dir) => {
    setActive(prev => {
      const next = dir === 'left' ? Math.max(0, prev - 1) : Math.min(testimonials.length - 1, prev + 1);
      return next;
    });
  };

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Testimonials</div>
          <h2 className="section-title">Loved by Hundreds of Clients</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Don't just take our word for it — hear from the businesses we've helped transform.
          </p>
        </motion.div>

        <div style={{ overflow: 'hidden', marginTop: 60 }}>
          <motion.div
            className="testimonials-track"
            ref={trackRef}
            animate={{ x: -active * cardWidth }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{ paddingLeft: 'calc(50% - 200px)' }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="testimonial-card"
                animate={{
                  scale: i === active ? 1 : 0.95,
                  opacity: i === active ? 1 : 0.5,
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={14} fill="#f59e0b" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="testimonials-nav">
          <button className="testimonials-nav-btn" onClick={() => scroll('left')} disabled={active === 0}>
            <ChevronLeft size={18} />
          </button>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === active ? 'var(--neon-purple)' : 'var(--border-glass)',
                  transition: 'all 0.3s',
                  border: 'none',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
          <button className="testimonials-nav-btn" onClick={() => scroll('right')} disabled={active === testimonials.length - 1}>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
