import { motion, useScroll } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useEffect, useState } from 'react';

export const FloatingOrderButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsVisible(latest > 500);
    });
  }, [scrollY]);

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isVisible ? 1 : 0, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToMenu}
      className="fixed bottom-8 right-8 z-40 bg-secondary text-secondary-foreground rounded-full p-4 shadow-hover hover:shadow-2xl transition-shadow"
    >
      <ShoppingBag className="w-6 h-6" />
    </motion.button>
  );
};
