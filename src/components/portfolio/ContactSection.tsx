"use client";

import confetti from 'canvas-confetti';
import { Button } from '@/components/ui/button';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

const socialLinks = [
  { icon: <Mail className="h-6 w-6" />, label: 'Email', href: 'mailto:jigisha.s@example.com' },
  { icon: <Linkedin className="h-6 w-6" />, label: 'LinkedIn', href: 'https://linkedin.com/in/jigishasingh-placeholder', target: "_blank" },
  { icon: <Github className="h-6 w-6" />, label: 'GitHub', href: 'https://github.com/jigishasingh-placeholder', target: "_blank" },
];

export default function ContactSection() {
  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#E6E6FA', '#FFD1DC', '#C7D2FE', '#FBCFE8'] // Lavender, Pink, Light Blue, Light Pink
    });
  };

  return (
    <section id="contact" className="bg-background">
      <Container className="text-center">
        <SectionTitle subtitle="Get In Touch">Let's Connect!</SectionTitle>
        <p className="max-w-xl mx-auto text-lg text-foreground/80 mb-8">
          I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate.
          Feel free to reach out!
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target || "_self"}
              rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
              aria-label={`Contact Jigisha via ${link.label}`}
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <Button
          size="lg"
          onClick={handleConfetti}
          className="group rounded-full shadow-lg hover:shadow-xl transition-shadow text-lg px-8 py-6"
          aria-label="Send a virtual high five"
        >
          Send Virtual High Five <span className="ml-2 text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">✋</span>
        </Button>
      </Container>
    </section>
  );
}
