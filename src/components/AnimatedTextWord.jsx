
    import React from 'react';
    import { motion } from 'framer-motion';

    const AnimatedTextWord = ({ text, el: Wrapper = 'p', className }) => {
      const words = text.split(" ");

      const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
      };

      const child = {
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
        hidden: {
          opacity: 0,
          y: 20,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
      };

      return (
        <Wrapper className={className}>
          <motion.span
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ display: 'inline-block', overflow: 'hidden' }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={child}
                style={{ display: 'inline-block', marginRight: '0.25em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        </Wrapper>
      );
    };

    export default AnimatedTextWord;
  