
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
    role: "Full Stack Developer",
    company: "Tyne Africa IT Consulting",
    location: "Nairobi, Kenya",
    period: "Jan 2025 – Present",
    description: [
      "Spearheading the development of a React-based internal dashboard, resulting in a 37% increase in user engagement.",
      "Designed and deployed scalable microservices architecture using Node.js, Express, and Docker.",
      "Introduced a CI/CD pipeline (GitHub Actions + Docker), cutting deployment time by 40%.",
      "Provided mentorship to junior developers through code reviews and pair programming."
    ]
  },
  {
    role: "Retail Systems Assistant",
    company: "Specific Talent Ltd",
    location: "Nairobi, Kenya",
    period: "May 2024 – Oct 2024",
    description: [
      "Built a lightweight internal system that allowed users to easily identify discounted products, improving customer satisfaction.",
      "Supported inventory management processes from product intake to point-of-sale.",
      "Audited POS systems and ensured accurate product pricing and barcode scanning.",
      "Collaborated with store staff to ensure seamless operations during peak sales periods."
    ]
  },
  {
    role: "Head of IT",
    company: "Mark Dairy Fresh",
    location: "Kiambu, Kenya",
    period: "Jun 2023 – Feb 2024",
    description: [
      "Led the design and launch of a digital platform to manage milk collection, sales, and distribution.",
      "Digitized manual record-keeping processes, increasing operational accuracy by 60%.",
      "Enabled product diversification by integrating supply chain and order tracking systems.",
      "Provided tech training to staff, ensuring smooth transition to the new digital workflows."
    ]
  },
  {
    role: "Freelance Developer",
    company: "Various Clients",
    location: "Remote",
    period: "Jan 2022 – Present",
    description: [
      "Delivered custom websites and web applications using JavaScript, React, Node.js, and MongoDB.",
      "Developed RESTful APIs for client platforms and integrated third-party services (e.g., Stripe, Firebase).",
      "Improved backend performance by optimizing database queries and API endpoints.",
      "Worked with global clients in agile environments, handling sprint planning and daily standups."
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
