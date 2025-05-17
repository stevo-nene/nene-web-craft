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
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  github?: string;
  demo?: string;
  timeline: string;
}

const featuredProjects: Project[] = [
  {
    id: "playstation-booking",
    title: "PlayStation Booking Platform",
    description: "Full-featured booking system for PlayStation gaming sessions with real-time scheduling, payment integration, and admin dashboard.",
    tags: ["React", "TypeScript", "Redux", "Tailwind"],
    images: [
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3"
    ],
    github: "https://github.com/stephen-nene",
    demo: "https://ps-booking.vercel.app/",
    timeline: "Mar 2023 - Jun 2023"
  },
  {
    id: "milk-management-1",
    title: "Milk Management System",
    description: "Comprehensive dairy management platform handling customer relations, sales tracking, and employee management for milk brokers.",
    tags: ["Angular", "Java", "Spring Boot", "PostgreSQL"],
    images: [

      "https://images.unsplash.com/photo-1517448931760-9bf4414148c5",
      "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3"
    ],
    github: "https://github.com/stephen-nene",
    demo: "https://milky-way-logistics.vercel.app",
    timeline: "Sep 2020 - Jan 2021"
  },
  {
    id: "alcohol-ecommerce",
    title: "Alcohol Ecommerce Platform",
    description: "Role-based ecommerce solution with distinct dashboards for customers, admins, and distributors, featuring inventory management.",
    tags: ["React", "Node.js", "MongoDB", "AWS"],
    images: [
      "https://images.unsplash.com/photo-1733709425481-bbdad7762321",
      "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea"
    ],
    github: "https://github.com/stephen-nene",
    demo: "https://dripcode.vercel.app/",
    timeline: "Jan 2023 - Apr 2023"
  },
  {
    id: "events-kenya-1",
    title: "Kenyan Events Platform",
    description: "Event discovery and management system for Kenyan market, supporting ticket sales and venue bookings with real-time updates.",
    tags: ["React", "D3.js", "Python", "WebSockets"],
    images: [
      "https://images.unsplash.com/photo-1549451371-64aa98a6f660",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3",
    ],
    github: "https://github.com/stephen-nene",
    demo: "https://sherehe-ke.vercel.app",
    timeline: "May 2022 - Nov 2022"
  },
  {
    id: "truck-route",
    title: "Truck Route Management",
    description: "FMCSA-compliant logistics solution for route optimization, hours tracking, and regulatory compliance for truck drivers.",
    tags: ["React", "Mapbox", "Node.js", "PostgreSQL"],
    images: [
      "https://images.unsplash.com/photo-1590504805643-bb1f94cde7fd",
      'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3',
      "https://images.unsplash.com/photo-1535395154152-d0f9c0755c3e?ixlib=rb-4.0.3",
    ],
    github: "https://github.com/stephen-nene",
    demo: "https://spotter-swart.vercel.app/",
    timeline: "Sep 2022 - Nov 2022"
  },
  {
    id: "greensert-ai-1",
    title: "GreensertAI",
    description: "AI-powered environmental platform analyzing satellite data to identify desert regions for potential reforestation projects.",
    tags: ["Python", "TensorFlow", "GeoDjango", "PostGIS"],
    images: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3"
    ],
    github: "https://github.com/stephen-nene",
    demo: "https://greensert.vercel.app/",
    timeline: "Oct 2021 - Dec 2021"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="aspect-video overflow-hidden bg-muted relative">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <span className="text-sm text-muted-foreground">{project.timeline}</span>
        </div>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map(tag => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-auto pt-2">
          <Link 
            to={`/projects/${project.id}`} 
            className="text-primary font-medium hover:underline flex items-center"
          >
            View Details
            <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
          
          <div className="flex space-x-2">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors"
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
                className="text-foreground/70 hover:text-foreground transition-colors"
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
    <section id="projects" className="py-16 bg-secondary/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my most impactful and technically challenging projects
          </p>
        </div>
        
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {featuredProjects.map(project => (
              <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static left-auto right-auto translate-y-0" />
            <CarouselNext className="relative static left-auto right-auto translate-y-0" />
          </div>
        </Carousel>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="px-8">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;