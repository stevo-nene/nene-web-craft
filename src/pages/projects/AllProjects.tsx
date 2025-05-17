import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout";
import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  // Filter projects based on search term and selected tag
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesTag;
  });

  return (
    <Layout title="Projects | Steve Nene" description="Browse my latest software development and cybersecurity projects">
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Projects</h1>
            <p className="text-lg text-muted-foreground">
              Browse through my recent software development and cybersecurity projects.
            </p>
          </div>
          
          <div className="mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <Badge 
                variant={selectedTag ? "outline" : "lime"}
                className="cursor-pointer transition-colors"
                onClick={() => setSelectedTag(null)}
              >
                All
              </Badge>
              
              {allTags.map(tag => (
                <Badge 
                  key={tag}
                  variant={selectedTag === tag ? "lime" : "outline"}
                  className="cursor-pointer transition-colors flex items-center"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                  {selectedTag === tag && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTag(null);
                      }} 
                      className="ml-1.5 hover:text-red-500 focus:outline-none"
                      aria-label="Clear filter"
                    >
                      ×
                    </button>
                  )}
                </Badge>
              ))}
            </div>
          </div>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12 space-y-2">
              <p className="text-lg">No projects found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedTag(null);
                }}
                className="text-primary hover:underline mt-2"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <Card 
                  key={project.id} 
                  className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="aspect-video overflow-hidden relative bg-muted">
                    {project.images[0] ? (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        onLoad={(e) => {
                          // Remove skeleton once loaded
                          e.currentTarget.style.opacity = '1';
                        }}
                        style={{ opacity: 0 }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/80 flex items-center justify-center">
                        <span className="text-muted-foreground">No image</span>
                      </div>
                    )}
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start gap-2">
                      <CardTitle className="text-xl line-clamp-2">{project.title}</CardTitle>
                      <div className="flex space-x-2 flex-shrink-0">
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
                    
                    <CardDescription>{project.timeline}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-4 flex-grow">
                    <p className="mb-4 line-clamp-3">{project.shortDescription}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <Badge 
                          key={tag} 
                          variant={selectedTag === tag ? "lime" : "info"}
                          className="cursor-pointer"
                          onClick={() => setSelectedTag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="glow">+{project.tags.length - 3}</Badge>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Link 
                      to={`/projects/${project.id}`}
                      className="text-primary font-medium hover:underline flex items-center"
                    >
                      View Details
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AllProjects;