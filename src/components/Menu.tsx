import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import masalaDosaImg from '@/assets/masala-dosa.jpg';
import plainDosaImg from '@/assets/plain-dosa.jpg';
import cheeseDosaImg from '@/assets/cheese-dosa.jpg';
import paneerDosaImg from '@/assets/paneer-dosa.jpg';
import paperDosaImg from '@/assets/paper-dosa.jpg';
import mysoreDosaImg from '@/assets/mysore-dosa.jpg';

const menuItems = [
  {
    id: '1',
    name: 'Masala Dosa',
    description: 'Classic crispy dosa filled with spiced potato curry, served with sambar and chutney.',
    price: 8.99,
    image: masalaDosaImg,
  },
  {
    id: '2',
    name: 'Plain Dosa',
    description: 'Traditional crispy golden dosa, perfect with our signature sambar and coconut chutney.',
    price: 6.99,
    image: plainDosaImg,
  },
  {
    id: '3',
    name: 'Cheese Dosa',
    description: 'Crispy dosa with melted cheese filling, a modern twist on a classic favorite.',
    price: 9.99,
    image: cheeseDosaImg,
  },
  {
    id: '4',
    name: 'Paneer Dosa',
    description: 'Dosa filled with spiced cottage cheese and herbs, a protein-rich delight.',
    price: 10.99,
    image: paneerDosaImg,
  },
  {
    id: '5',
    name: 'Paper Dosa',
    description: 'Extra thin and crispy dosa, rolled to perfection for maximum crunch.',
    price: 8.49,
    image: paperDosaImg,
  },
  {
    id: '6',
    name: 'Mysore Masala Dosa',
    description: 'Spicy red chutney spread dosa with potato masala, for those who love heat.',
    price: 9.49,
    image: mysoreDosaImg,
  },
];

export const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our authentic South Indian dosas, made fresh to order with traditional recipes.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems.map((item, index) => (
            <MenuItem key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
