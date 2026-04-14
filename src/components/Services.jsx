import { motion } from 'framer-motion';
import { ArrowRight, Code2, Palette, RefreshCw, Box } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Custom Website Development',
    desc: 'From scratch to launch, we build fully custom websites tailored to your brand identity, business goals, and user needs.',
    icon: <Code2 size={24} />,
  },
  {
    num: '02',
    title: 'UI/UX Design',
    desc: 'Human-centered design that delights users. We craft intuitive interfaces with beautiful visuals that convert visitors into customers.',
    icon: <Palette size={24} />,
  },
  {
    num: '03',
    title: 'Website Redesign',
    desc: 'Transform your outdated website into a modern, high-performing digital hub. We redesign with strategy, speed, and style.',
    icon: <RefreshCw size={24} />,
  },
  {
    num: '04',
    title: '3D Web Experiences',
    desc: 'Push the boundaries of web design with immersive 3D visuals, interactive scenes, and WebGL-powered experiences that captivate.',
    icon: <Box size={24} />,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }
};

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">What We Do</div>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">End-to-end web solutions for businesses that demand excellence.</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="service-card-number">{service.num}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.desc}</p>
              <a href="#contact" className="service-card-link">
                Learn More <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
