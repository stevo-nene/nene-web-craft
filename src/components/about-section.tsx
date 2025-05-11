
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ArrowRight,ChevronDown,Computer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import { Link as ScrollLink } from "react-scroll";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-background">
      <div className="container-custom">
        <h2 className="section-heading">About Me</h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"> */}
        <div className="grid md:grid-cols-5 gap-8 items-start">

          <div className="md:col-span-3 space-y-6">
            <p className="text-lg">
              Hi there! I'm Steve, a self-driven software developer from Kenya with a passion for
              cybersecurity and AI. I'm constantly exploring the intersection of technology and everyday challenges.
            </p>

            <p>
              Currently, I'm working at <span className="font-semibold">Tyne Africa IT Consulting</span> while
              pursuing a <span className="font-semibold">Cybersecurity Degree at Open University of Kenya (OUK)</span>.
              I'm constantly upskilling in both frontend and backend development, specializing in building
              real-world applications from AI solutions to e-commerce systems.
            </p>

            <p>
              My experience includes training AI models at Remotasks and Outlier, and helping clients
              grow their online presence through technical solutions. I take pride in developing innovative,
              secure solutions for real-world problems.
            </p>

            <div className="bg-accent/5 p-6 rounded-lg border border-border mt-8">
              <p className="italic">
                "I don't just write code, I solve everyday problems with it."
              </p>
            </div>

            <div className="pt-3">
              <Button variant="info" className="group" asChild>
              
              <ScrollLink to="skills" smooth={true} duration={500} offset={-80}>
                  View my skills
                  {/* <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
              </ScrollLink>
              
              </Button>
                          {/* <Button asChild className="group backdrop-blur-sm">
                View Projects
                <ChevronDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button> */}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-card rounded-2xl p-6 shadow-md card-hover">
              <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Kenya</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Current Role</p>
                  <p className="font-medium">Software Developer & Cybersecurity Specialist at Tyne Africa IT Consulting</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="font-medium">Cybersecurity - Open University of Kenya</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Languages</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge>English</Badge>
                    <Badge variant="warning">Swahili</Badge>
                    <Badge variant="destructive">Machine Language</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* <div className="relative">
            <div className="aspect-square rounded-lg bg-secondary p-2 border border-border relative z-10 max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3"
                alt="Steve Nene"
                className="rounded-lg object-cover w-full h-full"
              />
              <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
