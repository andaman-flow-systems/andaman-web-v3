import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  { q: 'How long does it take to build a website?', a: 'Typical projects take 2-6 weeks depending on complexity. Simple landing pages can be delivered in as little as 5 business days, while complex e-commerce or 3D experiences may take 6-8 weeks.' },
  { q: 'Do you provide hosting and maintenance?', a: 'Yes! We offer managed hosting with 99.9% uptime, automatic backups, SSL certificates, and ongoing maintenance packages. Our Pro and Premium plans include hosting for the first year.' },
  { q: 'Can I customize the templates after purchase?', a: 'Absolutely. All our templates come with clean, well-documented code that you can customize. We also offer customization services if you need professional modifications.' },
  { q: 'What technologies do you use?', a: 'We use modern technologies including React, Next.js, Three.js for 3D experiences, Node.js for backends, and deploy on Vercel, AWS, or your preferred platform. We always choose the best tech stack for your specific needs.' },
  { q: 'Do you offer refunds?', a: 'We offer a 30-day money-back guarantee on all template purchases. For custom projects, we provide milestone-based payments so you only pay for work you approve.' },
  { q: 'Can you redesign my existing website?', a: 'Yes! Website redesign is one of our core services. We analyze your current site, identify areas for improvement, and deliver a modern, high-performing redesign that preserves your brand identity.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Everything you need to know about working with NovaWeb Studio.
          </p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`faq-item ${openIndex === i ? 'open' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <span className="faq-icon"><Plus size={16} /></span>
              </button>
              <div className="faq-answer">
                <p className="faq-answer-text">{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
