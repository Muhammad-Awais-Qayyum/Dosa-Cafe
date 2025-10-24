import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { useCartStore } from '@/store/cartStore';
import type { MenuItem as MenuItemType } from '@/store/cartStore';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

export const MenuItem = ({ item, index }: MenuItemProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem, openCart } = useCartStore();
  
  // Featured items (first two items)
  const isFeatured = index < 2;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(item);
    }
    openCart();
    setQuantity(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-bold shadow-soft">
          £{item.price.toFixed(2)}
        </div>
        {isFeatured && (
          <motion.div
            initial={{ scale: 0, rotate: -12 }}
            animate={{ scale: 1, rotate: -12 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="absolute top-4 left-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-soft"
          >
            ⭐ Featured
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-2xl font-bold mb-2">{item.name}</h3>
        <p className="text-muted-foreground mb-4">{item.description}</p>

        {/* Quantity Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 bg-muted rounded-full p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-bold w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-full bg-background flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <Button
            onClick={handleAddToCart}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
