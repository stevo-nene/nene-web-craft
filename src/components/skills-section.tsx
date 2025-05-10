
interface Skill {
  name: string;
  level: number; // 1-5
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 5 },
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "React", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "Tailwind CSS", level: 4 }
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Python", level: 4 },
      { name: "Express", level: 4 },
      { name: "Django", level: 3 },
      { name: "GraphQL", level: 3 }
    ]
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", level: 4 },
      { name: "PostgreSQL", level: 4 },
      { name: "MySQL", level: 3 },
      { name: "Redis", level: 3 }
    ]
  },
  {
    name: "DevOps",
    skills: [
      { name: "Git", level: 5 },
      { name: "Docker", level: 3 },
      { name: "CI/CD", level: 3 },
      { name: "AWS", level: 3 }
    ]
  },
  {
    name: "Security",
    skills: [
      { name: "Pen Testing", level: 4 },
      { name: "Network Security", level: 4 },
      { name: "OWASP", level: 4 },
      { name: "Encryption", level: 3 }
    ]
  }
];

const SkillBar = ({ level }: { level: number }) => {
  return (
    <div className="w-full bg-secondary rounded-full h-2">
      <div 
        className="bg-primary h-2 rounded-full"
        style={{ width: `${level * 20}%` }}
      />
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-card border border-border rounded-lg p-6 card-hover">
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">
                        {skill.level}/5
                      </span>
                    </div>
                    <SkillBar level={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
