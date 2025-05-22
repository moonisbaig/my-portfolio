import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedTextWord from '@/components/AnimatedTextWord';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

const HomePage = () => {
  const rainRef = useRef(null);
  const xanliziaLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/e5f3d3d7-8897-4421-ae10-92d35c598837/4e023f72991a87beea1de2af0d0a79f1.png";

  useEffect(() => {
    const container = rainRef.current;
    if (!container) return;

    const createDroplet = () => {
      const droplet = document.createElement('span');
      droplet.innerText = Math.random() > 0.5 ? String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1)) + 33) : ' ';
      droplet.style.left = `${Math.random() * 100}%`;
      droplet.style.animationDuration = `${Math.random() * 4 + 3}s`; 
      droplet.style.animationDelay = `${Math.random() * 3}s`;
      droplet.style.fontSize = `${Math.random() * 6 + 9}px`;
      droplet.style.opacity = `${Math.random() * 0.3 + 0.1}`;
      container.appendChild(droplet);

      setTimeout(() => {
        droplet.remove();
      }, (parseFloat(droplet.style.animationDuration) + parseFloat(droplet.style.animationDelay)) * 1000 + 1000);
    };

    const intervalId = setInterval(createDroplet, 80);
    return () => clearInterval(intervalId);
  }, []);

  const featuredProjects = [
    {
      title: "Xanlizia",
      description: "A futuristic student-led deep space research brand.",
      customIcon: <img src={xanliziaLogoUrl} alt="Xanlizia Logo" className="h-10 w-auto mb-2 filter invert brightness-0" />,
      link: "/projects#xanlizia" 
    },
    {
      title: "Past Leadership",
      description: "Former President & Founder of Astronomy and Japanese Language Clubs.",
      icon: <Users className="h-8 w-8 text-primary mb-2" />,
      link: "/resume#leadership"
    }
  ];

  return (
    <>
      <section id="hero" className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center text-center overflow-hidden bg-background py-20">
        <div className="digital-rain" ref={rainRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-6">
              <AnimatedTextWord text="Hello, bipedan!" el="span" className="inline-block" />
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            An independent student explorer, aspiring aerospace engineer, and science communicator from Pakistan.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
              <Link to="/projects">View My Projects</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
              <Link to="/resume">See Resume</Link>
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

      <AnimatedSection id="about-snapshot" className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            About Snapshot
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A recent high school graduate passionate about deep space innovation, science education, and technology. Founder of two school clubs and contributor to national-level STEM initiatives. I strive to turn curiosity into action through design, diplomacy, and development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild variant="link" className="text-primary hover:text-primary/80">
              <Link to="/resume#about-me">Learn More About Me</Link>
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection id="featured-projects" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="bg-secondary/20 border-border hover:border-primary transition-all duration-300 h-full flex flex-col text-center items-center shadow-lg hover:shadow-primary/10 p-6">
                  <CardHeader className="items-center p-0">
                    {project.customIcon ? project.customIcon : project.icon}
                    <CardTitle className="text-2xl font-semibold text-primary mt-2">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-0 mt-4">
                    <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/projects">See More Projects</Link>
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>
      <style jsx global>{`
        .digital-rain span {
          position: absolute;
          top: -20px; /* Start above screen */
          color: #333; /* Dark grey, subtle */
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          user-select: none;
        }

        @keyframes fall {
          to {
            transform: translateY(105vh); /* Fall past the bottom of the screen */
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;