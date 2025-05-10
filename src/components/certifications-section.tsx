
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Certification {
  name: string;
  issuer: string;
  date: string;
  images: string[];
  description: string;
}

const certifications: Certification[] = [
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2021",
    images: ["https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3"],
    description: "Professional certification for ethical hackers demonstrating skills in penetration testing, system hacking, and security."
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2022",
    images: ["https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3"],
    description: "Advanced certification validating expertise in designing distributed systems on AWS."
  },
  {
    name: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2020",
    images: ["https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3"],
    description: "Certification demonstrating skills in building scalable applications using Google Cloud technologies."
  },
  {
    name: "Microsoft Azure Security Engineer",
    issuer: "Microsoft",
    date: "2023",
    images: ["https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3"],
    description: "Validates expertise in implementing security controls and threat protection on Microsoft Azure."
  },
  {
    name: "Certified Information Systems Security Professional (CISSP)",
    issuer: "ISC²",
    date: "2022",
    images: ["https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-4.0.3"],
    description: "Demonstrates deep expertise across various domains of information security."
  },
  {
    name: "Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2021",
    images: ["https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3"],
    description: "Validates skills in deploying, managing and troubleshooting Kubernetes clusters."
  }
];

const CertificationCard = ({ certification }: { certification: Certification }) => {
  return (
    <Card className="card-hover h-full">
      <div className="relative">
        <img
          src={certification.images[0]}
          alt={certification.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-2 right-2 bg-primary/90 p-2 rounded-full">
          <Award className="h-5 w-5 text-white" />
        </div>
      </div>
      
      <CardHeader>
        <CardTitle>{certification.name}</CardTitle>
        <CardDescription>
          {certification.issuer} • {certification.date}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground">{certification.description}</p>
      </CardContent>
    </Card>
  );
};

const CertificationsSection = () => {
  return (
    <section className="section bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-heading">Certifications</h2>
        
        <Carousel
          className="w-full max-w-screen-xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {certifications.map((cert, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <CertificationCard certification={cert} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious className="relative static left-auto right-auto translate-y-0" />
            <CarouselNext className="relative static left-auto right-auto translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CertificationsSection;
