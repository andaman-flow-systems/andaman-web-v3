import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

const plans = [
  {
    name: 'Starter',
    monthly: 29,
    oneTime: 299,
    desc: 'Perfect for small businesses getting started online',
    features: [
      '1 Page Website',
      'Responsive Design',
      'Basic SEO Setup',
      'Contact Form',
      '1 Revision Round',
      'Standard Support',
    ],
  },
  {
    name: 'Pro',
    monthly: 79,
    oneTime: 799,
    desc: 'Ideal for growing businesses that need more power',
    featured: true,
    features: [
      'Up to 10 Pages',
      'Custom UI/UX Design',
      'Advanced SEO',
      'CMS Integration',
      'Animation & Interactions',
      '3 Revision Rounds',
      'Priority Support',
      'Analytics Dashboard',
    ],
  },
  {
    name: 'Premium',
    monthly: 149,
    oneTime: 1499,
    desc: 'For enterprises demanding world-class digital presence',
    features: [
      'Unlimited Pages',
      '3D Web Experiences',
      'E-commerce Integration',
      'Custom Backend',
      'API Integrations',
      'Unlimited Revisions',
      'Dedicated Manager',
      '24/7 Premium Support',
      'Performance Optimization',
    ],
  },
];

export default function Pricing() {
  const { billingMode, setBillingMode } = useApp();

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>Pricing</div>
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="pricing-toggle">
          <span className={`pricing-toggle-label ${billingMode === 'monthly' ? 'active' : ''}`}>Monthly</span>
          <button
            className={`pricing-toggle-switch ${billingMode === 'one-time' ? 'active' : ''}`}
            onClick={() => setBillingMode(billingMode === 'monthly' ? 'one-time' : 'monthly')}
          >
            <div className="pricing-toggle-knob" />
          </button>
          <span className={`pricing-toggle-label ${billingMode === 'one-time' ? 'active' : ''}`}>
            One-Time <span style={{ fontSize: '0.75rem', color: 'var(--neon-green)', marginLeft: 4 }}>Save 20%</span>
          </span>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {plan.featured && <div className="pricing-badge">Most Popular</div>}
              <div className="pricing-name">{plan.name}</div>
              <div className="pricing-price">
                <motion.span
                  key={billingMode}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ${billingMode === 'monthly' ? plan.monthly : plan.oneTime}
                </motion.span>
                <span>{billingMode === 'monthly' ? '/mo' : ''}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 8 }}>{plan.desc}</p>
              <div className="pricing-features">
                {plan.features.map((feature, fi) => (
                  <div key={fi} className="pricing-feature">
                    <div className="pricing-feature-check"><Check size={12} /></div>
                    {feature}
                  </div>
                ))}
              </div>
              <button className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%', justifyContent: 'center' }}>
                Get Started <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
