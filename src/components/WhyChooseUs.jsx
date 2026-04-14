import { motion } from 'framer-motion';
import { TrendingUp, Zap, Search, Smartphone, Palette } from 'lucide-react';

const features = [
  { icon: <TrendingUp size={24} />, title: 'High Conversion Design', desc: 'Our designs are engineered to turn visitors into customers with proven UX patterns and psychological triggers.' },
  { icon: <Zap size={24} />, title: 'Fast Performance', desc: 'Lightning-fast load times with optimized code, lazy loading, and CDN deployment for global speed.' },
  { icon: <Search size={24} />, title: 'SEO Optimized', desc: 'Built-in SEO best practices with semantic HTML, meta optimization, and structured data for top rankings.' },
  { icon: <Smartphone size={24} />, title: 'Mobile First', desc: 'Responsive designs that look stunning on every device, from smartphones to ultra-wide monitors.' },
  { icon: <Palette size={24} />, title: 'Modern UI/UX', desc: 'Cutting-edge design trends with glassmorphism, micro-animations, and premium visual aesthetics.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } }
};

export default function WhyChooseUs() {
  return (
    <section className="section why-section" id="why">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Why NovaWeb</div>
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We don't just build websites — we engineer digital experiences that drive real business results.
          </p>
        </motion.div>

        <motion.div
          className="why-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="why-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className="why-card-icon">{feature.icon}</div>
              <h3 className="why-card-title">{feature.title}</h3>
              <p className="why-card-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
