import { motion, useScroll } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import { Button } from './ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { openCart, getItemCount } = useCartStore();
  const itemCount = getItemCount();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary shadow-soft backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-heading text-2xl font-bold"
          >
            <span className={`transition-colors ${isScrolled ? 'text-primary-foreground' : 'text-foreground'}`}>
              Dosa<span className="text-secondary">Cafe</span>
            </span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Menu', 'Gallery', 'Contact'].map((item, idx) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                whileHover={{ scale: 1.05 }}
                className={`font-medium transition-colors hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? 'text-primary-foreground' : 'text-foreground'
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollToSection('menu')}
              className={isScrolled ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' : ''}
            >
              Order Now
            </Button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openCart}
              className={`relative p-2 rounded-full transition-colors ${
                isScrolled ? 'text-primary-foreground hover:bg-primary-foreground/10' : 'text-foreground hover:bg-foreground/10'
              }`}
            >
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
