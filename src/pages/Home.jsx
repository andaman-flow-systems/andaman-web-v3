import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import LiveDemo from '../components/LiveDemo';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <WhyChooseUs />
      <Services />
      <Pricing />
      <Testimonials />
      <LiveDemo />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
