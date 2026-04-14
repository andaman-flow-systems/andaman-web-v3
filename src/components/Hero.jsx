import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: Math.random() * 6,
  duration: 6 + Math.random() * 8,
  size: 2 + Math.random() * 3,
  color: Math.random() > 0.5 ? '#a855f7' : '#3b82f6',
}));

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero-bg">
        <div className="hero-bg-gradient" />
        <div className="hero-particles">
          {particles.map(p => (
            <div
              key={p.id}
              className="hero-particle"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                background: p.color,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div className="hero-content" style={{ y, opacity }}>
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <span className="hero-badge-dot" />
            Award-Winning Web Design Studio
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="hero-title-line">Websites That Sell.</span>
            <span className="hero-title-line">
              <span className="gradient-text">Designed to Dominate.</span>
            </span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            We create powerful, high-converting websites for modern businesses.
            Premium templates and custom designs that leave lasting impressions.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#showcase" className="btn btn-primary btn-lg">
              Explore Templates <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary btn-lg">
              Get Custom Website
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div>
              <div className="hero-stat-value">500+</div>
              <div className="hero-stat-label">Projects Delivered</div>
            </div>
            <div>
              <div className="hero-stat-value">98%</div>
              <div className="hero-stat-label">Client Satisfaction</div>
            </div>
            <div>
              <div className="hero-stat-value">50+</div>
              <div className="hero-stat-label">Awards Won</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-3d"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="mockup-container">
            <div className="mockup-glow" />
            <motion.div
              className="mockup-screen mockup-screen-2"
              animate={{ y: [0, -12, 0], rotateY: [20, 18, 20] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop" alt="Website template preview" />
            </motion.div>
            <motion.div
              className="mockup-screen mockup-screen-1"
              animate={{ y: [0, -15, 0], rotateY: [-15, -12, -15] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop" alt="Featured website mockup" />
            </motion.div>
            <motion.div
              className="mockup-screen mockup-screen-3"
              animate={{ y: [0, -10, 0], rotateY: [-25, -22, -25] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=350&fit=crop" alt="E-commerce template" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
