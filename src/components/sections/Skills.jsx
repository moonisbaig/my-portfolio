
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Cpu, Code, Database, Wind, Brain } from 'lucide-react';
    import AnimatedSection from '@/components/AnimatedSection';

    const skillCategories = [
      {
        name: 'Languages',
        icon: <Code className="h-8 w-8 text-primary mb-3" />,
        skills: ['JavaScript (ES6+)', 'Python', 'HTML5', 'CSS3', 'SQL (Basic)'],
      },
      {
        name: 'Frameworks & Libraries',
        icon: <Wind className="h-8 w-8 text-primary mb-3" />,
        skills: ['React', 'Node.js (Express)', 'TailwindCSS', 'Framer Motion', 'Vite'],
      },
      {
        name: 'Tools & Platforms',
        icon: <Cpu className="h-8 w-8 text-primary mb-3" />,
        skills: ['Git & GitHub', 'VS Code', 'Supabase (Familiar)', 'Stripe (Familiar)', 'Figma (Basic)'],
      },
      {
        name: 'Concepts & Other',
        icon: <Brain className="h-8 w-8 text-primary mb-3" />,
        skills: ['Responsive Design', 'REST APIs', 'Agile Methodologies', 'Problem Solving', 'UI/UX Principles'],
      },
    ];

    const Skills = () => {
      return (
        <AnimatedSection id="skills" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-foreground text-center mb-16"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              My Technical Arsenal
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  className="bg-secondary/30 p-6 rounded-lg shadow-lg border border-border hover:border-primary transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center text-center">
                    {category.icon}
                    <h3 className="text-xl font-semibold text-foreground mb-3">{category.name}</h3>
                    <ul className="space-y-1">
                      {category.skills.map((skill) => (
                        <li key={skill} className="text-muted-foreground text-sm">{skill}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      );
    };

    export default Skills;
  