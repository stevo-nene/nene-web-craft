
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { School, Calendar } from "lucide-react";

interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  logo: string;
  achievements?: string[];
}

const educations: Education[] = [
  {
    institution: "St Joseph\'s HighSchool",
    degree:"High School Degree",
       field: "Kenya Certificate Secondary Education",
    period: "2016 - 2020",
    logo: "https://images.unsplash.com/photo-1580477371194-4592e4ec5c8e?ixlib=rb-4.0.3",
    achievements: [
      // "Thesis: \"Advanced Intrusion Detection Systems Using Machine Learning\"",
      "Was a Top 20% performer",
      "Student LeaderShip Member"
    ]
  },
  {
    institution: "Moringa School",
    degree: "Certificate ",
    field: "Software Engineering with FullStack-Developer Focus",
    period: "2021 - 2022",
    logo: "https://images.unsplash.com/photo-1580477371194-4592e4ec5c8e?ixlib=rb-4.0.3",
    achievements: [
      "Thesis: \"Frontend and Backend Web Development principles\"",
      "GPA: 3.95/4.0",
      "Graduate Student Research Award"
    ]
  },
  {
    institution: "ALx Africa",
    degree: "Diploma",
    field: "Software Engineering",
    period: "2022 - 2023",
    logo: "https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-4.0.3",
    achievements: [
      "Low Level Software Development principles",
      "Frontend Development Focused"
      // "Senior Project: Real-time Collaborative Coding Platform",
      // "CS Undergraduate Teaching Assistant"
    ]
  },
    {
    institution: "Open University of Kenya (OUK)",
    degree: "Degree",
    field: "Cyber-Security Forensics",
    period: "2024 - 2028",
    logo: "https://images.unsplash.com/photo-1581362072978-14998d01fdaa?ixlib=rb-4.0.3",
    achievements: [
      // "Low Level Software Development principles",
      "Foundations of Computers",
      "Computer Theories"
      // "Senior Project: Real-time Collaborative Coding Platform",
      // "CS Undergraduate Teaching Assistant"
    ]
  }
];

const EducationSection = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="section-heading">Education</h2>
        
        <div className="space-y-6">
          {educations.map((edu, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/4 bg-secondary/30">
                  <div className="h-full flex items-center justify-center p-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/10">
                      <img 
                        src={edu.logo} 
                        alt={edu.institution} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="md:w-3/4">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <School className="text-primary h-5 w-5" />
                          <CardTitle>{edu.institution}</CardTitle>
                        </div>
                        <p className="text-lg text-primary">
                          {edu.degree} • {edu.field}
                        </p>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                        <Calendar className="h-3 w-3" />
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  {edu.achievements && (
                    <CardContent>
                      <ul className="space-y-1 list-disc pl-5">
                        {edu.achievements.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
