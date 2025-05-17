
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ArrowUp, Download, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";


import nenedf from "@/data/files/Dev Nene.pdf";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-gray border-t border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
              <a
                href="https://github.com/stephen-nene/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile of Steve Nene"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>

            </Button>

            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
              <a
                href="https://ke.linkedin.com/in/stevenene/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile of Steve Nene"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>

            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
              <a
                href="mailto:stevekid705@gmail.com"
                aria-label="Send email to Steve Nene"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>

            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
              <a
                href="https://x.com/hackerOnBird"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter profile of Steve Nene"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
              <a href={nenedf} target="_blank" rel="noopener noreferrer">
                <FileDown className="h-5 w-5" />
                <span className="sr-only">Resume</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" onClick={scrollToTop}>
              <ArrowUp className="h-5 w-5" />
              <span className="sr-only">Scroll to Top</span>
            </Button>
            {/* <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary"> */}

            <ThemeToggle />
            {/* </Button> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold font-display">
              <span className="text-primary">Steve</span> Nene
            </Link>
            <p className="text-muted-foreground">Software Developer | AI Enthusiast | Cybersecurity Specialist</p>
          </div>



          <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-3">Navigation</h4>
              <ul className="space-y-2">
                {/* <ScrollLink to="/#skills" smooth={true} duration={500} className="cursor-pointer">
          Skills
        </ScrollLink> */}
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

          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <a href={nenedf} target="_blank" rel="noopener noreferrer">
                  <FileDown className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              <p className="text-sm text-muted-foreground pt-2">
                &copy; {currentYear} Steve. All rights reserved.
              </p>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
