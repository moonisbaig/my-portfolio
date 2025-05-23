
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { useToast } from '@/components/ui/use-toast';
    import AnimatedSection from '@/components/AnimatedSection';
    import { Send, Mail, MapPin } from 'lucide-react';

    const Contact = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Placeholder for form submission logic (e.g., to Formspree, Netlify Forms, or a backend)
        // For now, simulate a delay and show a toast
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form data submitted:', formData);
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      };

      return (
        <AnimatedSection id="contact" className="py-20 md:py-32 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold text-foreground text-center mb-16"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              Let's Connect
            </motion.h2>
            
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-primary">Get in Touch</h3>
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of something visionary. Feel free to reach out.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:moonis.baig@example.com" className="text-muted-foreground hover:text-primary">moonis.baig@example.com</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Earth | Milky Way Galaxy</span>
                  </div>
                </div>
              </motion.div>

              <motion.form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                  <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="bg-background/70 border-border focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
                  <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className="bg-background/70 border-border focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                  <Textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Your message..." required className="bg-background/70 border-border focus:border-primary" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  {isSubmitting ? 'Sending...' : <>Send Message <Send className="h-4 w-4 ml-2" /></>}
                </Button>
              </motion.form>
            </div>
          </div>
        </AnimatedSection>
      );
    };

    export default Contact;
  