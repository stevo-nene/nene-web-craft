
import { ArrowDown, ChevronDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import nenedf from "@/data/files/Dev Nene.pdf";
import { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      // Get section dimensions and position
      const rect = sectionRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the section center
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden perspective-1000"
    >
      {/* 3D floating geometric shapes with enhanced parallax effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orb */}
        <div 
          className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-xl"
          style={{
            top: '10%',
            right: '15%',
            transform: `translate3d(${-mousePosition.x * 40}px, ${mousePosition.y * 40}px, ${mousePosition.x * 100}px) rotateY(${mousePosition.x * 10}deg)`,
            transition: 'transform 0.2s ease-out',
          }}
        />
        
        {/* Wireframe sphere */}
        <div 
          className="absolute w-64 h-64 border border-primary/20 rounded-full"
          style={{
            bottom: '15%',
            left: '10%',
            boxShadow: '0 0 30px rgba(120, 120, 255, 0.1) inset',
            transform: `translate3d(${mousePosition.x * 25}px, ${-mousePosition.y * 25}px, ${-mousePosition.y * 50}px) rotateX(${mousePosition.y * 15}deg) rotateY(${-mousePosition.x * 15}deg)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          {/* Inner rings for 3D effect */}
          <div className="absolute inset-4 border border-primary/10 rounded-full"></div>
          <div className="absolute inset-8 border border-primary/5 rounded-full"></div>
        </div>
        
        {/* 3D cube */}
        <div 
          className="absolute w-40 h-40"
          style={{
            top: '35%',
            left: '15%',
            perspective: '1000px',
            transformStyle: 'preserve-3d',
            transform: `translate3d(${mousePosition.x * 30}px, ${mousePosition.y * 30}px, 0) rotateY(${mousePosition.x * 25}deg) rotateX(${-mousePosition.y * 25}deg)`,
            transition: 'transform 0.25s ease-out',
          }}
        >
          <div className="absolute inset-0 border border-primary/20 backdrop-blur-sm bg-primary/5 transform-style preserve-3d" style={{transform: 'translateZ(20px)'}}></div>
          <div className="absolute inset-0 border border-primary/20 backdrop-blur-sm bg-primary/5 transform-style preserve-3d" style={{transform: 'translateZ(-20px)'}}></div>
          <div className="absolute inset-0 border border-primary/20 backdrop-blur-sm bg-primary/5 transform-style preserve-3d" style={{transform: 'rotateX(90deg) translateZ(20px)'}}></div>
          <div className="absolute inset-0 border border-primary/20 backdrop-blur-sm bg-primary/5 transform-style preserve-3d" style={{transform: 'rotateX(-90deg) translateZ(20px)'}}></div>
          <div className="absolute inset-0 border border-primary/20 backdrop-blur-sm bg-primary/5 transform-style preserve-3d" style={{transform: 'rotateY(90deg) translateZ(20px)'}}></div>
          <div className="absolute inset-0 border border-primary/20 backdrop-blur-sm bg-primary/5 transform-style preserve-3d" style={{transform: 'rotateY(-90deg) translateZ(20px)'}}></div>
        </div>
        
        {/* Floating prism */}
        <div 
          className="absolute w-48 h-48"
          style={{
            bottom: '25%',
            right: '18%',
            transformStyle: 'preserve-3d',
            transform: `translate3d(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px, ${mousePosition.x * 30}px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10 + 45}deg)`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          <div className="absolute w-full h-full border border-primary/30 bg-primary/5 backdrop-blur-md" 
               style={{transform: 'rotateY(0deg) translateZ(20px)'}}></div>
          <div className="absolute w-full h-full border border-primary/20 bg-primary/5 backdrop-blur-md" 
               style={{transform: 'rotateY(72deg) translateZ(20px)'}}></div>
          <div className="absolute w-full h-full border border-primary/20 bg-primary/5 backdrop-blur-md" 
               style={{transform: 'rotateY(144deg) translateZ(20px)'}}></div>
          <div className="absolute w-full h-full border border-primary/20 bg-primary/5 backdrop-blur-md" 
               style={{transform: 'rotateY(216deg) translateZ(20px)'}}></div>
          <div className="absolute w-full h-full border border-primary/20 bg-primary/5 backdrop-blur-md" 
               style={{transform: 'rotateY(288deg) translateZ(20px)'}}></div>
        </div>
        
        {/* Grid pattern with depth */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(66,153,225,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(66,153,225,0.03)_1px,transparent_1px)]"
          style={{ 
            backgroundSize: '40px 40px',
            transform: `translate3d(${-mousePosition.x * 5}px, ${-mousePosition.y * 5}px, 0)`,
            transition: 'transform 0.4s ease-out',
          }}
        ></div>
        
        {/* Dynamic floating particles */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translate3d(
                ${mousePosition.x * (20 + i * 2)}px, 
                ${mousePosition.y * (20 + i * 2)}px, 
                ${(i % 3) * 50}px
              )`,
              transition: `transform ${0.2 + i * 0.03}s ease-out`,
              opacity: 0.5 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <div 
          className="animate-fade-in space-y-6 max-w-3xl backdrop-blur-sm bg-background/10 p-8 rounded-xl border border-primary/10 shadow-lg"
          style={{
            transform: `translate3d(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px, 50px) rotateY(${mousePosition.x * 2}deg) rotateX(${-mousePosition.y * 2}deg)`,
            transition: 'transform 0.3s ease-out',
            boxShadow: `
              0 10px 30px -5px rgba(0, 0, 0, 0.3),
              ${mousePosition.x * 10}px ${mousePosition.y * 10}px 30px -5px rgba(120, 120, 255, 0.15)
            `
          }}
        >
          <p className="text-primary font-medium bg-primary/10 inline-block px-3 py-1 rounded-full text-sm backdrop-blur-sm">Hi, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold relative">
            Steve Nene
            <span className="absolute -inset-1 bg-primary/10 -z-10 blur-md rounded-lg"></span>
          </h1>
      
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
            Software Developer | AI Enthusiast | Cybersecurity Specialist
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl backdrop-blur-sm bg-background/30 p-3 rounded-lg">
            Welcome to my digital playground. I'm a full-stack developer specializing in building and securing exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <div className="pt-4 flex flex-wrap gap-4">
            <Button asChild className="group backdrop-blur-sm relative overflow-hidden bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/80">
              <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
                View Projects
                <ChevronDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                <span className="absolute -inset-[1px] bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></span>
              </ScrollLink>
            </Button>
            
            <Button className="group backdrop-blur-sm relative overflow-hidden" variant="warning" asChild>
              <a href={nenedf} target="_blank" rel="noopener noreferrer">
                View Resume
                <ExternalLink className="ml-2 h-4 w-4 group-hover:animate-bounce " />
                <span className="absolute -inset-[1px] bg-warning/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></span>
              </a>
            </Button>
            <Button className="group backdrop-blur-sm relative overflow-hidden" variant="outline" asChild>
              <a href={nenedf} download="Steve_Nene_Resume.pdf">
                Download Resume
                <Download className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                <span className="absolute -inset-[1px] bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded"></span>
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
        style={{
          transform: `translate3d(calc(-50% + ${mousePosition.x * 10}px), 0, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer group">
          <div className="p-2 rounded-full bg-primary/10 backdrop-blur-sm group-hover:bg-primary/20 transition-colors">
            <ArrowDown className="text-primary h-6 w-6" />
          </div>
        </ScrollLink>
      </div>
    </section>
  );
};

export default HeroSection;
