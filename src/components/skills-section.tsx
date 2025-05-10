
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Server, Globe, Shield, Layers } from "lucide-react";

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: <Globe className="h-6 w-6 text-primary" />,
    skills: [
      { name: "HTML/CSS", icon: <img src="/icons/html5.svg" alt="HTML5" className="h-10 w-10" /> },
      { name: "JavaScript", icon: <img src="/icons/javascript.svg" alt="JavaScript" className="h-10 w-10" /> },
      { name: "TypeScript", icon: <img src="/icons/typescript.svg" alt="TypeScript" className="h-10 w-10" /> },
      { name: "React", icon: <img src="/icons/react.svg" alt="React" className="h-10 w-10" /> },
      { name: "Next.js", icon: <img src="/icons/nextjs.svg" alt="Next.js" className="h-10 w-10" /> },
      { name: "Tailwind CSS", icon: <img src="/icons/tailwindcss.svg" alt="Tailwind CSS" className="h-10 w-10" /> }
    ]
  },
  {
    name: "Backend",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Node.js", icon: <img src="/icons/nodejs.svg" alt="Node.js" className="h-10 w-10" /> },
      { name: "Python", icon: <img src="/icons/python.svg" alt="Python" className="h-10 w-10" /> },
      { name: "Express", icon: <img src="/icons/express.svg" alt="Express" className="h-10 w-10" /> },
      { name: "Django", icon: <img src="/icons/django.svg" alt="Django" className="h-10 w-10" /> },
      { name: "GraphQL", icon: <img src="/icons/graphql.svg" alt="GraphQL" className="h-10 w-10" /> }
    ]
  },
  {
    name: "Database",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: [
      { name: "MongoDB", icon: <img src="/icons/mongodb.svg" alt="MongoDB" className="h-10 w-10" /> },
      { name: "PostgreSQL", icon: <img src="/icons/postgresql.svg" alt="PostgreSQL" className="h-10 w-10" /> },
      { name: "MySQL", icon: <img src="/icons/mysql.svg" alt="MySQL" className="h-10 w-10" /> },
      { name: "Redis", icon: <img src="/icons/redis.svg" alt="Redis" className="h-10 w-10" /> }
    ]
  },
  {
    name: "DevOps",
    icon: <Layers className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Git", icon: <img src="/icons/git.svg" alt="Git" className="h-10 w-10" /> },
      { name: "Docker", icon: <img src="/icons/docker.svg" alt="Docker" className="h-10 w-10" /> },
      { name: "CI/CD", icon: <img src="/icons/jenkins.svg" alt="CI/CD" className="h-10 w-10" /> },
      { name: "AWS", icon: <img src="/icons/aws.svg" alt="AWS" className="h-10 w-10" /> }
    ]
  },
  {
    name: "Security",
    icon: <Shield className="h-6 w-6 text-primary" />,
    skills: [
      { name: "Pen Testing", icon: <img src="/icons/kali.svg" alt="Pen Testing" className="h-10 w-10" /> },
      { name: "Network Security", icon: <img src="/icons/wireshark.svg" alt="Network Security" className="h-10 w-10" /> },
      { name: "OWASP", icon: <img src="/icons/owasp.svg" alt="OWASP" className="h-10 w-10" /> },
      { name: "Encryption", icon: <img src="/icons/encryption.svg" alt="Encryption" className="h-10 w-10" /> }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.name} className="bg-card border border-border rounded-lg p-6 card-hover">
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              
              <CardContent className="p-0">
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center text-center">
                      <div className="bg-secondary/50 p-3 rounded-lg mb-2 h-16 w-16 flex items-center justify-center">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
