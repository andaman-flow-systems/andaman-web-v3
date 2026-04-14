import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const demos = [
  { name: 'Portfolio Pro', url: 'portfolio-pro.novaweb.studio', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop' },
  { name: 'ShopWave Store', url: 'shopwave.novaweb.studio', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop' },
  { name: 'LaunchPad SaaS', url: 'launchpad.novaweb.studio', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop' },
  { name: 'Enterprise Suite', url: 'enterprise.novaweb.studio', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop' },
];

export default function LiveDemo() {
  const [active, setActive] = useState(0);

  return (
    <section className="section demo-section" id="demo">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Live Preview</div>
          <h2 className="section-title">See Our Work in Action</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Explore live demos of our recent projects and see the quality we deliver.
          </p>
        </motion.div>

        <motion.div
          className="demo-viewer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="demo-browser-bar">
            <div className="demo-browser-dots">
              <div className="demo-browser-dot" />
              <div className="demo-browser-dot" />
              <div className="demo-browser-dot" />
            </div>
            <div className="demo-browser-url">
              <AnimatePresence mode="wait">
                <motion.span
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  https://{demos[active].url}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          <div className="demo-content">
            <AnimatePresence mode="wait">
              <motion.img
                key={active}
                src={demos[active].image}
                alt={demos[active].name}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="demo-tabs">
          {demos.map((demo, i) => (
            <button
              key={i}
              className={`demo-tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {demo.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
