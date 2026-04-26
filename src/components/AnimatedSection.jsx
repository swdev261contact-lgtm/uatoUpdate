import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.6
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -40 };
      case 'right':
        return { opacity: 0, x: 40 };
      case 'down':
        return { opacity: 0, y: -40 };
      default:
        return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
