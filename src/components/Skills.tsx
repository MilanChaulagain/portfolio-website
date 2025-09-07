import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone, Terminal, Users } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Languages",
      icon: <Code className="text-primary" size={24} />,
      skills: ["JavaScript", "Typescript", "C, C++, C#", "Java"]
    },
    {
      category: "Frontend",
      icon: <Globe className="text-primary" size={24} />,
      skills: ["HTML, CSS, Javascript", "React.js", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: <Database className="text-primary" size={24} />,
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
    },
    {
      category: "Tools",
      icon: <Terminal className="text-primary" size={24} />,
      skills: ["Git", "GitHub", "VS Code", "Postman"]
    }
  ];

  const softSkills = [
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Communication & Teamwork",
      description: "Strong collaboration skills with effective communication"
    },
    {
      icon: <Smartphone className="text-primary" size={24} />,
      title: "Eager to Learn",
      description: "Passionate about adapting to new technologies and methodologies"
    },
    {
      icon: <Terminal className="text-primary" size={24} />,
      title: "Problem Solving",
      description: "Analytical mindset with creative problem-solving approaches"
    }
  ];

  const educationData = [
  {
    degree: "BSc.CSIT",
    institution: "Nist College, Banepa",
    duration: "2022 - 2026",
    highlights: "Data Structures, Web Programming, Database Systems, Software Engineering"
  }
];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical skills and personal qualities that drive my development journey
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((category, index) => (
              <Card 
                key={index}
                className="p-6 glass-effect smooth-transition hover:shadow-glow-primary hover:scale-105 border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h4 className="text-lg font-semibold">{category.category}</h4>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary/50 rounded-full text-sm smooth-transition hover:bg-primary/20"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Personal Qualities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <Card 
                key={index}
                className="p-6 glass-effect smooth-transition hover:shadow-glow-secondary hover:scale-105 border-border/50 text-center"
              >
                <div className="flex justify-center mb-4">
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="p-8 glass-effect border-border/50 max-w-2xl mx-auto mb-6"
            >
              <div className="text-center">
                <h4 className="text-xl font-bold gradient-text mb-2">{edu.degree}</h4>
                <p className="text-lg text-muted-foreground mb-2">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.duration}</p>
                <p className="text-sm text-muted-foreground mt-4">
                  {edu.highlights}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;