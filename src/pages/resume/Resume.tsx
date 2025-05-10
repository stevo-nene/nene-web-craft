
import { useState } from "react";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, File, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("view");
  
  return (
    <Layout 
      title="Resume | Steve Nene" 
      description="Professional resume of Steve Nene, Full-Stack Developer and Cybersecurity Enthusiast"
    >
      <section className="pt-24 pb-16">
        <div className="container-custom max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Resume</h1>
              <p className="text-lg text-muted-foreground">
                My professional background and qualifications
              </p>
            </div>
            
            <div className="flex space-x-4">
              <Button asChild>
                <a href="/resume.pdf" download="Steve_Nene_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
              
              <Button variant="outline" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open PDF
                </a>
              </Button>
            </div>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="view">
                <FileText className="mr-2 h-4 w-4" />
                View Resume
              </TabsTrigger>
              <TabsTrigger value="raw">
                <File className="mr-2 h-4 w-4" />
                Plain Text
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="view">
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-[8.5/11] w-full bg-card relative">
                    <iframe
                      src="/resume.pdf"
                      className="absolute inset-0 w-full h-full"
                      style={{ minHeight: '800px' }}
                    ></iframe>
                    
                    {/* Fallback if iframe doesn't work */}
                    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
                      <p className="text-muted-foreground mb-4">
                        If the resume isn't loading, you can download it directly.
                      </p>
                      <Button asChild>
                        <a href="/resume.pdf" download="Steve_Nene_Resume.pdf">
                          <Download className="mr-2 h-4 w-4" />
                          Download Resume
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="raw">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold">Steve Nene</h2>
                      <p>Full-Stack Software Developer & Cybersecurity Enthusiast</p>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <span>📧 contact@stevenene.com</span>
                        <span>📱 (123) 456-7890</span>
                        <span>🌐 stevenene.com</span>
                        <span>📍 San Francisco, CA</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Professional Summary</h3>
                      <p>
                        Full-stack software developer with 8+ years of experience specializing in secure web application development
                        and cybersecurity. Passionate about creating efficient, scalable, and secure digital solutions that solve
                        real-world problems. Strong background in frontend and backend technologies, with expertise in implementing
                        security best practices.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Experience</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <h4 className="font-semibold">Senior Full Stack Developer</h4>
                            <span>Jan 2022 - Present</span>
                          </div>
                          <p className="text-primary">TechCorp Solutions, San Francisco, CA</p>
                          <ul className="list-disc pl-5 mt-2">
                            <li>Lead development of a React-based dashboard that increased user engagement by 37%</li>
                            <li>Architected and implemented microservices using Node.js and Docker</li>
                            <li>Mentored junior developers and conducted code reviews to maintain code quality</li>
                            <li>Implemented CI/CD pipeline reducing deployment time by 40%</li>
                          </ul>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <h4 className="font-semibold">Cybersecurity Engineer</h4>
                            <span>Mar 2019 - Dec 2021</span>
                          </div>
                          <p className="text-primary">SecureNet, Boston, MA</p>
                          <ul className="list-disc pl-5 mt-2">
                            <li>Conducted security audits and vulnerability assessments for enterprise clients</li>
                            <li>Developed automated security testing tools using Python and JavaScript</li>
                            <li>Implemented security best practices resulting in 60% reduction in vulnerabilities</li>
                            <li>Collaborated with dev teams to integrate security protocols into SDLC</li>
                          </ul>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <h4 className="font-semibold">Full Stack Developer</h4>
                            <span>Jun 2017 - Feb 2019</span>
                          </div>
                          <p className="text-primary">WebStart Inc., Austin, TX</p>
                          <ul className="list-disc pl-5 mt-2">
                            <li>Developed and maintained multiple client websites using JavaScript, React and Node.js</li>
                            <li>Created RESTful APIs and integrated third-party services</li>
                            <li>Optimized database queries resulting in 30% improved performance</li>
                            <li>Participated in daily standups and sprint planning in an agile team</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Education</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <h4 className="font-semibold">Master of Science, Computer Science</h4>
                            <span>2015 - 2017</span>
                          </div>
                          <p className="text-primary">Massachusetts Institute of Technology</p>
                          <p>Focus: Cybersecurity</p>
                          <p>Thesis: "Advanced Intrusion Detection Systems Using Machine Learning"</p>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-1">
                            <h4 className="font-semibold">Bachelor of Science, Computer Science</h4>
                            <span>2011 - 2015</span>
                          </div>
                          <p className="text-primary">University of California, Berkeley</p>
                          <p>Senior Project: Real-time Collaborative Coding Platform</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Skills</h3>
                      
                      <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                        <div>
                          <h4 className="font-medium">Frontend</h4>
                          <p>JavaScript, TypeScript, React, Next.js, HTML/CSS, Tailwind CSS</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Backend</h4>
                          <p>Node.js, Express, Python, Django, GraphQL</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Database</h4>
                          <p>MongoDB, PostgreSQL, MySQL, Redis</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">DevOps</h4>
                          <p>Docker, AWS, CI/CD, Git, GitHub Actions</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Security</h4>
                          <p>Penetration Testing, Network Security, OWASP, Encryption</p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Other</h4>
                          <p>Agile/Scrum, Technical Writing, Team Leadership</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                      <ul className="list-disc pl-5">
                        <li>Certified Ethical Hacker (CEH) - EC-Council, 2021</li>
                        <li>AWS Certified Solutions Architect - Amazon Web Services, 2022</li>
                        <li>Google Professional Cloud Developer - Google Cloud, 2020</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
