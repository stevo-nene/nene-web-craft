
import { ArrowDown, ChevronDown, Download,ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import nenedf from "@/data/files/Dev Nene.pdf"


const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center bg-gradient-to-b from-background to-secondary/30">
      <div className="container-custom">
        <div className="animate-fade-in space-y-6 max-w-3xl">
          <p className="text-primary font-medium">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Steve Nene
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground/70">
            I build things for the web & secure digital systems.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            I'm a full-stack developer specializing in building and securing exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <Button asChild className="group">
              <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
                View Projects
                <ChevronDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
              </ScrollLink>
            </Button>
            
            <Button className="group" variant="warning" asChild>
              <a href={nenedf} target="_blank" rel="noopener noreferrer">
                View Resume
                <ExternalLink className="ml-2 h-4 w-4 group-hover:animate-bounce " />
              </a>
            </Button>
            <Button className="group" variant="outline" asChild>
              <a href={nenedf} download="Steve_Nene_Resume.pdf">
                Download Resume
                <Download className="ml-2 h-4 w-4 group-hover:animate-bounce" />
              </a>
            </Button>
            {/* View Resume button on new tab */}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">
          <ArrowDown className="text-primary h-6 w-6" />
        </ScrollLink>
      </div>
    </section>
  );
};

export default HeroSection;
