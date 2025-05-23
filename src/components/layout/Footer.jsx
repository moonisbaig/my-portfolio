import React from 'react';
import { Mail, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { Icon: Mail, href: 'mailto:moonisbaig@aol.com', label: 'Email' },
    { Icon: Twitter, href: 'https://x.com/Moonisbaig?t=jjL0hv6zcRIfsmns6uYiZw&s=09', label: 'Twitter' }, // Assuming a handle, replace if different
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/moonis-baig-28a797227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' }, // Assuming a handle
    { Icon: Instagram, href: 'https://www.instagram.com/moonisbaig?igsh=MXRjM2ZzZXdydzZlMA==', label: 'Instagram' }, // Assuming a handle
  ];

  return (
    <footer className="bg-background border-t border-border py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Muhammad Moonis Baig's ${label}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          Copyright &copy; {currentYear} Moonis Baig
        </p>
        <p className="text-xs text-muted-foreground/70 mt-1">
          Aspiring Aerospace Engineer & Science Communicator
        </p>
      </div>
    </footer>
  );
};

export default Footer;
