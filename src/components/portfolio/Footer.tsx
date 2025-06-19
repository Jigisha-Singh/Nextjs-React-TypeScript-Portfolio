import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border/60 py-10 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/jigisha-singh-487186370/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jigisha Singh on LinkedIn"
              className="text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/jigishasingh-placeholder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Jigisha Singh on GitHub"
              className="text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="mailto:jigisha.s@example.com"
              aria-label="Email Jigisha Singh"
              className="text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <p className="text-sm text-foreground/80 italic">
            "Striving to turn caffeine into code, and ideas into impact."
          </p>

          <p className="text-xs text-foreground/60">
            &copy; {currentYear} Jigisha Singh.
            <br/>
             Crafted by{" "}
            <span className="text-red-500" role="img" aria-label="love">
              Aakashsingh Rajput
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
