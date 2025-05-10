
import { ArrowDown, ChevronDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import nenedf from "@/data/files/Dev Nene.pdf";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to the center of the screen
      const x = (e.clientX - window.innerWidth / 2) / 25;
      const y = (e.clientY - window.innerHeight / 2) / 25;
      setMousePosition({ x, y });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="h-screen flex flex-col justify-center bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      {/* 3D floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circle */}
        <div 
          className="absolute w-64 h-64 rounded-full bg-primary/5 backdrop-blur-md"
          style={{
            top: '15%',
            right: '10%',
            transform: `translate3d(${-mousePosition.x * 2}px, ${mousePosition.y * 2}px, 0)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        
        {/* Small circle */}
        <div 
          className="absolute w-32 h-32 rounded-full bg-primary/10 backdrop-blur-sm"
          style={{
            bottom: '20%',
            left: '15%',
            transform: `translate3d(${mousePosition.x * 3}px, ${-mousePosition.y * 3}px, 0)`,
            transition: 'transform 0.15s ease-out',
          }}
        />
        
        {/* Rectangle */}
        <div 
          className="absolute w-40 h-40 rotate-45 bg-primary/5 backdrop-blur-md"
          style={{
            top: '30%',
            left: '10%',
            transform: `translate3d(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px, 0) rotate(45deg)`,
            transition: 'transform 0.2s ease-out',
          }}
        />
        
        {/* Donut */}
        <div 
          className="absolute w-56 h-56 border-[20px] border-primary/10 rounded-full"
          style={{
            bottom: '15%',
            right: '15%',
            transform: `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0)`,
            transition: 'transform 0.25s ease-out',
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(66,153,225,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,153,225,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div 
          className="animate-fade-in space-y-6 max-w-3xl"
          style={{
            transform: `translate3d(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px, 0)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <p className="text-primary font-medium bg-primary/10 inline-block px-3 py-1 rounded-full text-sm backdrop-blur-sm">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold relative">
            Steve Nene
            <span className="absolute -inset-1 bg-primary/5 -z-10 blur-md rounded-lg"></span>
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground/70">
            I build things for the web & secure digital systems.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl backdrop-blur-sm bg-background/30 p-3 rounded-lg">
            I'm a full-stack developer specializing in building and securing exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <Button asChild className="group backdrop-blur-sm">
              <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
                View Projects
                <ChevronDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
              </ScrollLink>
            </Button>
            
            <Button className="group backdrop-blur-sm" variant="warning" asChild>
              <a href={nenedf} target="_blank" rel="noopener noreferrer">
                View Resume
                <ExternalLink className="ml-2 h-4 w-4 group-hover:animate-bounce " />
              </a>
            </Button>
            <Button className="group backdrop-blur-sm" variant="outline" asChild>
              <a href={nenedf} download="Steve_Nene_Resume.pdf">
                Download Resume
                <Download className="ml-2 h-4 w-4 group-hover:animate-bounce" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
        style={{
          transform: `translate3d(calc(-50% + ${mousePosition.x * 0.5}px), 0, 0)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">
          <ArrowDown className="text-primary h-6 w-6" />
        </ScrollLink>
      </div>
    </section>
  );
};

export default HeroSection;
