import { motion } from 'framer-motion';
import { Coffee, Heart, Star, Users } from 'lucide-react';

const stats = [
  { icon: Users, value: '10K+', label: 'Happy Customers' },
  { icon: Coffee, value: '50K+', label: 'Dosas Served' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
  { icon: Heart, value: '100%', label: 'Love & Care' },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-block p-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-4"
              >
                <stat.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.h3
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
                className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
