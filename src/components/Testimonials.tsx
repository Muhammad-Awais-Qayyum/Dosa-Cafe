import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Food Blogger',
    content: 'The best dosas I\'ve had outside of India! The masala dosa is perfectly crispy with an amazing potato filling. DosaCafe is now my go-to spot.',
    rating: 5,
    avatar: '👩‍🦰',
  },
  {
    name: 'Raj Patel',
    role: 'Local Resident',
    content: 'Authentic South Indian flavors that remind me of home. The chutneys are made fresh daily and you can taste the difference. Highly recommend!',
    rating: 5,
    avatar: '👨',
  },
  {
    name: 'Emily Chen',
    role: 'Regular Customer',
    content: 'Love the cozy atmosphere and friendly service. The cheese dosa is my favorite - crispy on the outside with melted cheese inside. Perfection!',
    rating: 5,
    avatar: '👩',
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy diners!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-3xl p-8 md:p-12 shadow-hover"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
              ))}
            </div>

            {/* Content */}
            <p className="text-xl md:text-2xl text-center mb-8 leading-relaxed">
              "{testimonials[activeIndex].content}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div className="text-5xl">{testimonials[activeIndex].avatar}</div>
              <div className="text-left">
                <p className="font-bold text-lg">{testimonials[activeIndex].name}</p>
                <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-secondary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
