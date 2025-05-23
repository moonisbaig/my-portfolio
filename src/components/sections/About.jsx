
    import React from 'react';
    import { motion } from 'framer-motion';
    import AnimatedSection from '@/components/AnimatedSection';

    const About = () => {
      return (
        <AnimatedSection id="about" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
            <div className="max-w-4xl mx-auto md:mx-0 md:ml-auto">
              <motion.h2 
                className="text-4xl sm:text-5xl font-bold text-foreground mb-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6 text-lg text-muted-foreground"
              >
                <p>
                  Hello! I'm Muhammad Moonis Baig, a dedicated student with a fervent interest in technology and its potential to shape the future. My journey in the digital realm is driven by a curiosity to learn, innovate, and create solutions that are both impactful and elegant.
                </p>
                <p>
                  I thrive on challenges and am constantly exploring new concepts in software development, artificial intelligence, and user experience design. My goal is to contribute to projects that push boundaries and leverage technology for positive change.
                </p>
                <p>
                  Beyond coding, I'm passionate about creative problem-solving and lifelong learning. This portfolio is a glimpse into my skills, projects, and the path I'm forging in the world of technology.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8"
              >
                <a
                  href="/resume_muhammad_moonis_baig.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 border border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-sm font-medium"
                >
                  View My Resume (Placeholder)
                </a>
              </motion.div>
            </div>
          </div>
           <div className="absolute top-0 left-0 w-1/3 h-full border-r border-border/10 opacity-30 md:opacity-100 pointer-events-none"></div>
        </AnimatedSection>
      );
    };

    export default About;
  