
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Layout from "@/components/layout";
import { getProject, Project } from "@/data/projects";
import { ArrowLeft, ArrowRight, ChevronLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProject(id || "");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    if (!project) return;
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    if (!project) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  if (!project) {
    return (
      <Layout title="Project Not Found | Steve Nene">
        <div className="min-h-[70vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-6 text-muted-foreground">The project you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/projects">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      title={`${project.title} | Steve Nene`}
      description={project.shortDescription}
    >
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <div className="mb-6">
            <Link 
              to="/projects" 
              className="flex items-center text-primary hover:underline mb-4"
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Projects
            </Link>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
              
              <div className="flex items-center space-x-4">
                {project.github && (
                  <Button asChild variant="outline" size="sm">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Repository
                    </a>
                  </Button>
                )}
                
                {project.demo && (
                  <Button asChild size="sm">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-secondary mb-6">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
                
                {project.images.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between p-4">
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="h-10 w-10 rounded-full opacity-70 hover:opacity-100"
                      onClick={prevImage}
                    >
                      <ArrowLeft className="h-6 w-6" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="h-10 w-10 rounded-full opacity-70 hover:opacity-100"
                      onClick={nextImage}
                    >
                      <ArrowRight className="h-6 w-6" />
                    </Button>
                  </div>
                )}
                
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentImageIndex ? "bg-primary" : "bg-secondary-foreground/30"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Show image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              <div className="prose dark:prose-invert max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                {project.fullDescription.split('\n').map((paragraph, index) => (
                  paragraph.trim() ? <p key={index}>{paragraph}</p> : null
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-muted-foreground">Timeline</h4>
                      <p>{project.timeline}</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-medium text-muted-foreground">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.techStack.map(tech => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Need Something Similar?</h3>
                  <p className="mb-4 text-muted-foreground">
                    Interested in working with me on a similar project? Let's discuss your needs.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
