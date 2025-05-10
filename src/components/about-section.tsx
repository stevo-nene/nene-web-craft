
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p>
              Hello! I'm Steve, a developer passionate about creating software that solves real-world problems. 
              My journey in technology started when I was in college, where I discovered my love for coding and digital security.
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at a tech startup, a large corporation, and a 
              cybersecurity firm. My main focus these days is building accessible, inclusive products and digital experiences.
            </p>
            <p>
              I also recently discovered a passion for teaching, which has led me to create tutorials and blog posts to share 
              my knowledge with the development community.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-medium mb-2">Technologies I work with:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <ul className="space-y-1">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">▹</span>
                    <span>JavaScript (ES6+)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">▹</span>
                    <span>TypeScript</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">▹</span>
                    <span>React</span>
                  </li>
                </ul>
                <ul className="space-y-1">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">▹</span>
                    <span>Node.js</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">▹</span>
                    <span>Python</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">▹</span>
                    <span>Express</span>
                  </li>
                </ul>
                <ul className="space-y-1">
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">▹</span>
                    <span>MongoDB</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">▹</span>
                    <span>PostgreSQL</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-primary">▹</span>
                    <span>Docker</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-lg bg-secondary p-2 border border-border relative z-10 max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3"
                alt="Steve Nene"
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
