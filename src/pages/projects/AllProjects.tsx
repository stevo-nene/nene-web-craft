
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout";
import { projects } from "@/data/projects";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

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
  // console.log(selectedTag)

  return (
    <Layout title="Projects | Steve Nene" description="Browse my latest software development and cybersecurity projects">
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Browse through my recent software development and cybersecurity projects.
          </p>
          
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row mb-4">
              <div className="flex-1">
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              
            </div>
              <div className="flex flex-wrap gap-2">


                  <Badge 
                    variant="lime" 
                    className="cursor-pointer"
                    onClick={() => setSelectedTag(null)}
                  >
                    All
                  </Badge>

                
                {allTags.map(tag => (
                  <Badge 
                    key={tag}
                    variant="outline"
                    className="cursor-pointer hover:bg-secondary"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                    
                    {selectedTag===tag && <p onClick={(e)=>{
                      e.stopPropagation();

                      setSelectedTag(null)
                    }} className="ml-1.5 hover:text-red-500">×</p>}
                  </Badge>
                ))}
              </div>
          </div>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
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
                <Card key={project.id} className="overflow-hidden card-hover">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
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
                    
                    <CardDescription>{project.timeline}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="mb-4">{project.shortDescription}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline">+{project.tags.length - 3}</Badge>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Link 
                      to={`/projects/${project.id}`}
                      className="text-primary font-medium hover:underline"
                    >
                      View Details
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
