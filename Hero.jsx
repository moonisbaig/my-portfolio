
    import React, { useEffect, useRef } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import AnimatedTextWord from '@/components/AnimatedTextWord';

    const Hero = () => {
      const rainRef = useRef(null);

      useEffect(() => {
        const container = rainRef.current;
        if (!container) return;

        const createDroplet = () => {
          const droplet = document.createElement('span');
          droplet.innerText = Math.random() > 0.5 ? '0' : '1';
          droplet.style.left = `${Math.random() * 100}%`;
          droplet.style.animationDuration = `${Math.random() * 3 + 2}s`; 
          droplet.style.animationDelay = `${Math.random() * 2}s`;
          droplet.style.fontSize = `${Math.random() * 5 + 8}px`;
          container.appendChild(droplet);

          setTimeout(() => {
            droplet.remove();
          }, (parseFloat(droplet.style.animationDuration) + parseFloat(droplet.style.animationDelay)) * 1000);
        };

        const intervalId = setInterval(createDroplet, 100);
        return () => clearInterval(intervalId);
      }, []);


      return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-background py-20 pt-32 md:pt-20">
          <div className="digital-rain" ref={rainRef}></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-6">
                <AnimatedTextWord text="Muhammad Moonis Baig" el="span" className="inline-block" />
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-10 max-w-3xl mx-auto"
            >
              A passionate student and aspiring tech visionary, crafting innovative digital experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-x-4"
            >
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="hover:bg-accent hover:text-accent-foreground">
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-muted-foreground">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
        </section>
      );
    };

    export default Hero;
  