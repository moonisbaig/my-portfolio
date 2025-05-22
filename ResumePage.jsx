import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Briefcase, GraduationCap, Star, Award, Users, Settings, Mail, MapPin } from 'lucide-react';

const ResumePage = () => {

  const aboutMe = {
    name: "Muhammad Moonis Baig",
    nationality: "Pakistani",
    fieldOfStudy: "Aerospace Engineering, Orbital Mechanics, Astronautics",
    shortBio: "A recent high school graduate from Pakistan passionate about building the future of space. Founder of space and cultural clubs, with experience in national STEM initiatives, technical roles, and digital media."
  };

  const education = [
    { school: "AJ Science College – High School", location: "Pakistan" },
    { school: "The Educators – Secondary School", location: "Pakistan" },
    { school: "Al Riyadh International School – Middle School", location: "KSA" },
    { school: "Ajool International School – Primary School", location: "KSA" }
  ];

  const leadership = [
    { title: "Founder & Ex-President – Japanese Language & Culture Club" },
    { title: "Founder & Ex-President – Astronomy Club" },
    { title: "President – Astronomy Day 2024" },
    { title: "Substitute Sheriff – School Discipline Role" }
  ];

  const skills = [
    "Graphic Design (Photoshop, Canva, Illustrator)",
    "Video Editing (CapCut, DaVinci Resolve)",
    "Technical Support (Live Streams, Rear Screen Management)",
    "Programming (HTML, JS, Java basics)",
    "Web Development (Freelance)"
  ];

  const certifications = [
    "NASA Space Apps (2024)",
    "GYSSC Challenge (Tech Team)",
    "MUN Delegate (Japan, India)",
    "Astronomy Day Certificate",
    "SDG Conference Certificate",
    "Mentorship Certificate – FFC"
  ];

  const freelanceWork = [
    { title: "Video Editor & Graphic Designer (Current)", role: "Working with multiple international companies, mainly crypto-based projects." },
    { title: "FF Immigration (2023)", role: "Web Development & Management" },
    { title: "AJ Science College", role: "Graphic Design & Video Editing" },
    { title: "Technical Lead", role: "Various school events" }
  ];

  const contactInfo = {
    email: "moonisbaig@aol.com",
    location: "Mirpurkhas, Sindh, Pakistan"
  };

  const SectionCard = ({ title, icon, children, id }) => (
    <motion.div 
      id={id}
      className="bg-secondary/20 p-6 md:p-8 rounded-lg shadow-lg border border-border hover:border-primary/30 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center mb-6">
        {React.cloneElement(icon, { className: "h-7 w-7 text-primary mr-3" })}
        <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
      </div>
      {children}
    </motion.div>
  );

  return (
    <div className="bg-background min-h-screen">
      <AnimatedSection id="resume-hero" className="py-16 md:py-24 text-center bg-secondary/10">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My Resume
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          A detailed overview of my academic, leadership, and extracurricular background.
        </motion.p>
      </AnimatedSection>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
        <SectionCard title="About Me" icon={<Star />} id="about-me">
          <p className="text-2xl font-semibold text-primary mb-2">{aboutMe.name}</p>
          <p className="text-muted-foreground mb-1"><span className="font-medium text-foreground/80">Nationality:</span> {aboutMe.nationality}</p>
          <p className="text-muted-foreground mb-4"><span className="font-medium text-foreground/80">Aspiring Field:</span> {aboutMe.fieldOfStudy}</p>
          <p className="text-muted-foreground leading-relaxed">{aboutMe.shortBio}</p>
        </SectionCard>

        <SectionCard title="Education" icon={<GraduationCap />}>
          <ul className="space-y-3">
            {education.map(edu => (
              <li key={edu.school} className="text-muted-foreground">
                <span className="font-semibold text-foreground/90">{edu.school}</span> - {edu.location}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Leadership & Clubs" icon={<Users />} id="leadership">
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            {leadership.map(item => <li key={item.title}>{item.title}</li>)}
          </ul>
        </SectionCard>

        <SectionCard title="Skills" icon={<Settings />}>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            {skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </SectionCard>

        <SectionCard title="Certifications" icon={<Award />}>
          <ul className="space-y-2 list-disc list-inside text-muted-foreground">
            {certifications.map(cert => <li key={cert}>{cert}</li>)}
          </ul>
        </SectionCard>

        <SectionCard title="Freelance & Technical Work" icon={<Briefcase />}>
          <ul className="space-y-3">
            {freelanceWork.map(work => (
              <li key={work.title} className="text-muted-foreground">
                <span className="font-semibold text-foreground/90">{work.title}</span>: {work.role}
              </li>
            ))}
          </ul>
        </SectionCard>
        
        <SectionCard title="Contact Information" icon={<Mail />}>
          <div className="space-y-3">
            <div className="flex items-center text-muted-foreground">
              <Mail className="h-5 w-5 text-primary mr-3" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">{contactInfo.email}</a>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary mr-3" />
              <span>{contactInfo.location}</span>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
};

export default ResumePage;