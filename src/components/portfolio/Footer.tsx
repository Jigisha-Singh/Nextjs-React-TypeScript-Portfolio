import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-border/60 py-10 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            
          </div>     
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
