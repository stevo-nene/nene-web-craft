
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  }
];

const CertificationCard = ({ certification }: { certification: Certification }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === certification.images.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? certification.images.length - 1 : prev - 1
    );
  };

  return (
    <Card className="card-hover">
      <div className="relative">
        <img
          src={certification.images[currentImageIndex]}
          alt={certification.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        
        {certification.images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between p-2">
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-8 w-8 rounded-full opacity-70 hover:opacity-100"
              onClick={prevImage}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-8 w-8 rounded-full opacity-70 hover:opacity-100"
              onClick={nextImage}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
