
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  achievements?: string[];
}

const educations: Education[] = [
  {
    institution: "Massachusetts Institute of Technology",
    degree: "Master of Science",
    field: "Computer Science with Cybersecurity Focus",
    period: "2015 - 2017",
    achievements: [
      "Thesis: \"Advanced Intrusion Detection Systems Using Machine Learning\"",
      "GPA: 3.95/4.0",
      "Graduate Student Research Award"
    ]
  },
  {
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science",
    field: "Computer Science",
    period: "2011 - 2015",
    achievements: [
      "Dean's List: 8 semesters",
      "Senior Project: Real-time Collaborative Coding Platform",
      "CS Undergraduate Teaching Assistant"
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
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle>{edu.institution}</CardTitle>
                    <p className="text-lg text-primary">
                      {edu.degree} • {edu.field}
                    </p>
                  </div>
                  <Badge variant="outline">{edu.period}</Badge>
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
