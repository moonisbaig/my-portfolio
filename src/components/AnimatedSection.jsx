
    import React from 'react';
    import { motion } from 'framer-motion';

    const AnimatedSection = ({ children, className, id }) => {
      return (
        <motion.section
          id={id}
          className={`relative ${className || ''}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }} // Trigger when 15% of the element is in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
        >
          {children}
        </motion.section>
      );
    };

    export default AnimatedSection;
  