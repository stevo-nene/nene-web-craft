
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    role: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "Jan 2022 - Present",
    description: [
      "Lead development of a React-based dashboard that increased user engagement by 37%",
      "Architected and implemented microservices using Node.js and Docker",
      "Mentored junior developers and conducted code reviews to maintain code quality",
      "Implemented CI/CD pipeline reducing deployment time by 40%"
    ]
  },
  {
    role: "Cybersecurity Engineer",
    company: "SecureNet",
    location: "Boston, MA",
    period: "Mar 2019 - Dec 2021",
    description: [
      "Conducted security audits and vulnerability assessments for enterprise clients",
      "Developed automated security testing tools using Python and JavaScript",
      "Implemented security best practices resulting in 60% reduction in vulnerabilities",
      "Collaborated with dev teams to integrate security protocols into SDLC"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "WebStart Inc.",
    location: "Austin, TX",
    period: "Jun 2017 - Feb 2019",
    description: [
      "Developed and maintained multiple client websites using JavaScript, React and Node.js",
      "Created RESTful APIs and integrated third-party services",
      "Optimized database queries resulting in 30% improved performance",
      "Participated in daily standups and sprint planning in an agile team"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="section bg-secondary/30">
      <div className="container-custom">
        <h2 className="section-heading">Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle>{exp.role}</CardTitle>
                    <p className="text-lg text-primary">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end">
                    <Badge variant="outline" className="mb-1">{exp.period}</Badge>
                    <span className="text-sm text-muted-foreground">{exp.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 list-disc pl-5">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
