
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="text-2xl font-bold font-display">
              <span className="text-primary">Steve</span> Nene
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Full-Stack Software Developer & Cybersecurity Enthusiast
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-foreground/70 hover:text-foreground">Home</Link></li>
                <li><Link to="/projects" className="text-foreground/70 hover:text-foreground">Projects</Link></li>
                <li><Link to="/blogs" className="text-foreground/70 hover:text-foreground">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">More</h4>
              <ul className="space-y-2">
                <li><Link to="/resume" className="text-foreground/70 hover:text-foreground">Resume</Link></li>
                <li><Link to="/contact" className="text-foreground/70 hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Connect</h4>
              <div className="flex space-x-3">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-foreground/70 hover:text-foreground">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground/70 hover:text-foreground">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-foreground/70 hover:text-foreground">
                  <Twitter size={20} />
                </a>
                <a href="mailto:contact@example.com" aria-label="Email" className="text-foreground/70 hover:text-foreground">
                  <Mail size={20} />
                </a>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Steve Nene. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
