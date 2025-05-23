
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { ExternalLink, Github } from 'lucide-react';
    import AnimatedSection from '@/components/AnimatedSection';

    const projectData = [
      {
        title: 'Futuristic Portfolio Engine',
        description: 'A dynamic personal portfolio system built with modern web technologies, showcasing a minimalist design and smooth animations.',
        tech: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
        imageUrl: 'abstract-code',
        liveLink: '#',
        githubLink: '#',
      },
      {
        title: 'AI-Powered Research Assistant',
        description: 'Conceptual project for an AI tool that assists students in academic research by summarizing papers and finding relevant sources.',
        tech: ['Python', 'NLP', 'Flask (conceptual)'],
        imageUrl: 'ai-brain-circuit',
        liveLink: null,
        githubLink: '#',
      },
      {
        title: 'Minimalist Task Manager',
        description: 'A sleek and efficient task management application designed for focus and productivity, with a clean user interface.',
        tech: ['JavaScript', 'HTML', 'CSS', 'localStorage'],
        imageUrl: 'task-management-ui',
        liveLink: '#',
        githubLink: '#',
      },
    ];

    const Projects = () => {
      return (
        <AnimatedSection id="projects" className="py-20 md:py-32 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-foreground text-center mb-16"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              My Creations
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-background/50 border-border hover:border-primary transition-all duration-300 h-full flex flex-col shadow-xl hover:shadow-primary/20">
                    <CardHeader>
                      <img  
                        alt={project.title} 
                        className="w-full h-48 object-cover rounded-t-md mb-4 filter grayscale hover:grayscale-0 transition-all duration-300"
                       src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                      <CardTitle className="text-2xl font-semibold text-primary">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.map(tag => (
                          <span key={tag} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full">{tag}</span>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-end space-x-2">
                      {project.githubLink && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub repository`}>
                            <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                          </a>
                        </Button>
                      )}
                      {project.liveLink && (
                        <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                           <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`}>
                            View Live <ExternalLink className="h-4 w-4 ml-2" />
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      );
    };

    export default Projects;
  