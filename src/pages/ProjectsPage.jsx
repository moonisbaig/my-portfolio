import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Mic, Tv, Brain, Palette, Code, Globe } from 'lucide-react';

const xanliziaLogoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/e5f3d3d7-8897-4421-ae10-92d35c598837/4e023f72991a87beea1de2af0d0a79f1.png";
const astronomyClubImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/e5f3d3d7-8897-4421-ae10-92d35c598837/43f3642fdad9014ba7688199d8dc397b.png";
const tebbImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/e5f3d3d7-8897-4421-ae10-92d35c598837/50530238f5e02394b45b36ba34567e55.jpg";
const ffImmigrationImageUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/e5f3d3d7-8897-4421-ae10-92d35c598837/a5e24ce6b1150ff5a2ce8c00d51e5bb3.png";


const currentProjects = [
  {
    id: "xanlizia",
    title: "Xanlizia",
    description: "Moonis’s visionary deep-space research and space education brand launched during high school. Focused on theoretical propulsion, satellite innovation, and student engagement.",
    status: "Active",
    customIcon: <img src={xanliziaLogoUrl} alt="Xanlizia Logo" className="h-10 w-auto mb-2 filter invert brightness-0" />,
    links: [
      { label: "Visit Site", href: "#", Icon: ExternalLink },
    ],
    imageUrl: xanliziaLogoUrl,
    imageAlt: "Xanlizia brand logo"
  }
];

const pastProjects = [
  {
    title: "Astronomy Club (2024–2025)",
    role: "Founder & Ex-President",
    description: "Launched educational outreach programs, space workshops, and events like Astronomy Day. Collaborated with Rah-e-Qamar to bring telescopes to Mirpurkhas for the first time.",
    icon: <Users className="h-6 w-6 text-primary mr-2" />,
    imageUrl: astronomyClubImageUrl,
    imageAlt: "AJ Science College Astronomy Club"
  },
  {
    title: "Japanese Language & Culture Club (2022–2023)",
    role: "Founder & Ex-President",
    description: "First-ever Japanese culture society at school. Introduced language and cultural classes, expanding linguistic awareness.",
    icon: <Users className="h-6 w-6 text-primary mr-2" />,
    imageUrl: "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Japanese characters and cultural items"
  },
  {
    title: "NASA Space Apps Challenge (2024)",
    project: "Chronicles of Exoplanets",
    description: "Designed a platform to explore exoplanets for all age groups using creative UI/UX and educational structure.",
    icon: <Brain className="h-6 w-6 text-primary mr-2" />,
    imageUrl: "https://images.unsplash.com/photo-1639756490399-1882a0920a7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    imageAlt: "NASA Space Apps Challenge logo or related imagery"
  },
  {
    title: "TEBB The Epic Bot Battle",
    role: "Technical Head",
    description: "Managed rear screen projection, animated sequences, and elimination interface inspired by Squid Game.",
    icon: <Tv className="h-6 w-6 text-primary mr-2" />,
    imageUrl: tebbImageUrl,
    imageAlt: "TEBB The Epic Bot Battle logo"
  },
  {
    title: "SDG Conferences",
    description: "2023: Hosted and represented SDG 8 – Economic Growth. 2024: Managed livestream as part of the virtual and hybrid team. Contributed visuals and technical support.",
    icon: <Mic className="h-6 w-6 text-primary mr-2" />,
    imageUrl: "https://images.unsplash.com/photo-1607908262301-f04db778068e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Sustainable Development Goals (SDG) logo wheel"
  },
  {
    title: "MUN Delegations",
    description: "2022 (Japan): Advocated for peace and prosperity. 2023 (Japan): Represented Japan in Climate Action talks. 2024 (India): Neutral stand in EU Immigration Crisis, promoting humanitarian responsibility.",
    icon: <Globe className="h-6 w-6 text-primary mr-2" />,
    imageUrl: "https://images.unsplash.com/photo-1580519543039-b911f035049c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Diplomacy or United Nations style logo"
  },
  {
    title: "SUPARCO–CNSA Research Proposal",
    description: "Submitted a student-led eco-coating experiment to SUPARCO. Proposed Kalonji oil, beeswax, and gum arabic-based coating for LEO satellite exposure. Awaiting selection for national-level testing.",
    customIcon: <img src="https://storage.googleapis.com/hostinger-horizons-assets-prod/e5f3d3d7-8897-4421-ae10-92d35c598837/a0694bb1485047f4df3d0e1730337ef5.png" alt="Suparco Logo Placeholder" className="h-6 w-6 text-primary mr-2 filter invert brightness-0" />,
    imageUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Scientific research or satellite imagery"
  },
  {
    title: "FFC School Mentorship Visit (2024)",
    description: "Mentored students, conducted first Japanese club session, shared insights on educational outreach and leadership.",
    icon: <Users className="h-6 w-6 text-primary mr-2" />,
    imageUrl: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    imageAlt: "Mentorship session or FFC Grammar School Sadiqabad"
  },
  {
    title: "FF Immigration (2023)",
    role: "Web Developer, Graphic Designer, and Site Manager",
    description: "Designed and maintained the company’s website and branding assets.",
    icon: <Code className="h-6 w-6 text-primary mr-2" />,
    imageUrl: ffImmigrationImageUrl,
    imageAlt: "FF Immigration website or branding"
  },
  {
    title: "Freelance & College Projects",
    description: "Graphic Designer (2022–2025) for AJ Science College. Video Editor and Creative Lead for school and external events. Technical Team Member managing livestreams and visuals.",
    icon: <Palette className="h-6 w-6 text-primary mr-2" />,
    imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    imageAlt: "Graphic design or video editing software interface"
  }
];


const ProjectsPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <AnimatedSection id="projects-hero" className="py-16 md:py-24 text-center bg-secondary/10">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My Projects
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A showcase of my ongoing and past work, reflecting my passion for innovation and creation.
        </motion.p>
      </AnimatedSection>

      <AnimatedSection id="current-projects" className="py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Current Ventures</h2>
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12"
            >
              <Card className="bg-background/50 border-border hover:border-primary transition-all duration-300 shadow-xl hover:shadow-primary/20 overflow-hidden md:flex">
                <div className="md:w-1/3 bg-black flex items-center justify-center p-4">
                  <img alt={project.imageAlt} className="w-full max-w-[200px] h-auto md:max-w-full md:h-64 object-contain filter grayscale hover:grayscale-0 transition-all duration-500" src={project.imageUrl} />
                </div>
                <div className="md:w-2/3 flex flex-col p-6">
                  <CardHeader className="p-0">
                    <div className="flex items-center mb-2"> 
                      {project.customIcon ? project.customIcon : (project.icon ? React.cloneElement(project.icon, { className: "h-8 w-8 text-primary mb-2 mr-2" }) : null)}
                      <CardTitle className="text-2xl font-semibold text-primary">{project.title}</CardTitle>
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full self-start">{project.status}</span>
                  </CardHeader>
                  <CardContent className="flex-grow p-0 pt-4">
                    <CardDescription className="text-muted-foreground text-base">{project.description}</CardDescription>
                  </CardContent>
                  {project.links && project.links.length > 0 && (
                    <CardFooter className="flex flex-wrap gap-2 pt-4 p-0">
                      {project.links.map(link => (
                        <Button key={link.label} variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.Icon && <link.Icon className="h-4 w-4 mr-2" />}
                            {link.label}
                          </a>
                        </Button>
                      ))}
                    </CardFooter>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="past-projects" className="py-12 md:py-20 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">Past Projects & Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-background/50 border-border hover:border-primary/70 transition-all duration-300 h-full flex flex-col shadow-lg hover:shadow-primary/10">
                  <CardHeader className="p-0">
                    <img alt={project.imageAlt} className="w-full h-40 object-cover rounded-t-md mb-4 filter grayscale hover:grayscale-0 transition-all duration-300" src={project.imageUrl} />
                    <div className="flex items-start p-4">
                      {project.customIcon ? project.customIcon : (project.icon ? project.icon : null)}
                      <div className={project.customIcon || project.icon ? "ml-2" : ""}>
                        <CardTitle className="text-xl font-semibold text-primary">{project.title}</CardTitle>
                        {project.role && <p className="text-sm text-accent-foreground mt-1">{project.role}</p>}
                        {project.project && <p className="text-sm text-accent-foreground mt-1">Project: {project.project}</p>}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow p-4 pt-0">
                    <CardDescription className="text-muted-foreground text-sm">{project.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProjectsPage;