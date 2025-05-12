
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
    institution: "St. Joseph's High School, Githunguri",
    degree: "Kenya Certificate of Secondary Education (KCSE)",
    field: "General Education",
    period: "2016 - 2020",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2rm2zYIHguwnDgT8_9jNwC6LEgAHo1jbg8g&s",
    achievements: [
      "Consistently ranked in the top 20% of the class",
      "Active member of the Student Leadership Council",
      "Participated in inter-school science and technology competitions"
    ]
  },
  {
    institution: "Moringa School",
    degree: "Certificate in Software Engineering",
    field: "Full-Stack Web Development",
    period: "2021 - 2022",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MtRrZ5ntzJhuyc5yg8q707E7AzRDTEgdLQ&s",
    achievements: [
      "Completed intensive training in both front-end and back-end development",
      "Developed multiple web applications as part of project-based learning",
      "Collaborated with peers on capstone projects simulating real-world scenarios"
    ]
  },
  {
    institution: "ALX Africa",
    degree: "Diploma in Software Engineering",
    field: "Software Development",
    period: "2022 - 2023",
    logo: "https://yt3.googleusercontent.com/vc_UlJrsGPt0BLmtIkV1X3e9ZnIK27-2dY9U9Y9uXWw_LSKipULYWrU_nGEEtzUM-KR0DIjoyw=s900-c-k-c0x00ffffff-no-rj",
    achievements: [
      "Gained proficiency in low-level programming and software development principles",
      "Focused on front-end development, enhancing user interface design skills",
      "Engaged in collaborative projects, fostering teamwork and problem-solving abilities"
    ]
  },
  {
    institution: "Open University of Kenya (OUK)",
    degree: "Bachelor of Science in Cyber Security and Digital Forensics",
    field: "Cyber Security",
    period: "2024 - Present",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8LSc4s3fuYMSfNopeKTqE-gtg6hpU_gtcA&s",
    achievements: [
      "Currently enrolled in courses covering computer systems and security fundamentals",
      "Engaging in studies related to digital forensics and ethical hacking",
      "Participating in virtual labs and simulations to apply theoretical knowledge"
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
