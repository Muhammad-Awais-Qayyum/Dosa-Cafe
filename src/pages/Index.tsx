import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Menu } from '@/components/Menu';
import { CartDrawer } from '@/components/CartDrawer';
import { Gallery } from '@/components/Gallery';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingOrderButton } from '@/components/FloatingOrderButton';
import { ScrollProgress } from '@/components/ScrollProgress';
import { WaveDivider } from '@/components/WaveDivider';
import { Testimonials } from '@/components/Testimonials';
import { Newsletter } from '@/components/Newsletter';
import { Stats } from '@/components/Stats';

const Index = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <WaveDivider />
      <Stats />
      <About />
      <WaveDivider flip />
      <Menu />
      <WaveDivider />
      <Gallery />
      <Testimonials />
      <WaveDivider flip />
      <Newsletter />
      <Contact />
      <Footer />
      <CartDrawer />
      <FloatingOrderButton />
    </div>
  );
};

export default Index;
