import { motion } from 'framer-motion';
import aboutImage from '@/assets/about-cooking.jpg';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-hover"
            >
              <img
                src={aboutImage}
                alt="Chef preparing fresh dosa"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: 'spring' }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground rounded-2xl p-6 shadow-hover"
            >
              <p className="font-heading text-4xl font-bold">10+</p>
              <p className="text-sm">Years of Tradition</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-secondary mb-6" />
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At DosaCafe, we bring South India's heart to Luton. From crispy dosas 
              to aromatic chutneys, every bite is crafted with tradition, freshness, 
              and love.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our chefs use authentic recipes passed down through generations, 
              combined with the freshest local ingredients to create an unforgettable 
              dining experience.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Fresh Ingredients', icon: '🌿' },
                { label: 'Authentic Recipes', icon: '📖' },
                { label: 'Made with Love', icon: '❤️' },
                { label: 'Fast Service', icon: '⚡' },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-background rounded-xl shadow-soft"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
