import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '@/hooks/use-toast';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "You're subscribed! 🎉",
      description: "Thank you for subscribing to our newsletter. Get ready for delicious updates!",
    });
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-block p-4 bg-primary-foreground/10 rounded-full mb-4">
              <Mail className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Stay Updated with DosaCafe
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Subscribe to our newsletter for exclusive offers, new menu items, and special events!
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-hover"
            >
              <Send className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </motion.form>

          <p className="text-sm text-primary-foreground/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};
