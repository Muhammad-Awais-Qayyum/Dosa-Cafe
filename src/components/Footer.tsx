import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card py-12 border-t border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-heading text-2xl font-bold">
            Dosa<span className="text-secondary">Cafe</span>
          </div>
          
          <p className="text-muted-foreground text-center">
            © {new Date().getFullYear()} DosaCafe. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#about" className="text-muted-foreground hover:text-secondary transition-colors">
              About
            </a>
            <a href="#menu" className="text-muted-foreground hover:text-secondary transition-colors">
              Menu
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-secondary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
