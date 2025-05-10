
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Learning Platform",
    description: "A comprehensive online learning platform with course management, user authentication, and video streaming",
    tags: ["React", "Node.js", "MongoDB", "Express", "AWS"],
    images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: "project-2",
    title: "Cybersecurity Dashboard",
    description: "Real-time monitoring dashboard for network security with threat visualization and analytics",
    tags: ["React", "D3.js", "Python", "Flask", "WebSockets"],
    images: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: "project-3",
    title: "Smart Home App",
    description: "IoT control system for home devices with automation schedules and energy monitoring",
    tags: ["React Native", "Node.js", "MQTT", "Firebase"],
    images: ["https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3"],
    github: "https://github.com",
  },
  {
    id: "project-4",
    title: "Blockchain Trading Platform",
    description: "Secure cryptocurrency exchange platform with real-time market data and wallet integration",
    tags: ["React", "Solidity", "Web3.js", "Node.js", "PostgreSQL"],
    images: ["https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: "project-5",
    title: "AI Content Generator",
    description: "Machine learning powered tool that creates custom marketing content based on user prompts",
    tags: ["Python", "TensorFlow", "Flask", "React", "MongoDB"],
    images: ["https://images.unsplash.com/photo-1677442135136-760c813a02e8?ixlib=rb-4.0.3"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: "project-6",
    title: "Virtual Reality Training",
    description: "Immersive VR training modules for industrial safety procedures and equipment operation",
    tags: ["Unity3D", "C#", "WebXR", "Firebase", "Three.js"],
    images: ["https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3"],
    github: "https://github.com",
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card-project card-hover h-full">
      <div className="relative overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-56 object-cover"
        />
      </div>
      
      <div className="p-5 flex flex-col h-[calc(100%-14rem)]">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-auto">
          <Link to={`/projects/${project.id}`} className="text-primary font-medium hover:underline">
            View Details
          </Link>
          
          <div className="flex space-x-2">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-heading">Featured Projects</h2>
        
        <Carousel
          className="w-full max-w-screen-xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map(project => (
              <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious className="relative static left-auto right-auto translate-y-0" />
            <CarouselNext className="relative static left-auto right-auto translate-y-0" />
          </div>
        </Carousel>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
