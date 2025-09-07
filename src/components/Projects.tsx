import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Database, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    
    {
      title: "Yatra Nepal - Tourist Platform",
      description: "Full-Stack Web Application (MERN Stack, Google Maps API, REST API) - Designed and developed a tourism platform enabling users to explore tourist destinations, check hotels, and make reservations in Nepal.",
      technologies: ["MERN Stack", "Google Maps API", "REST API", "ReactJS", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Built with MERN stack ensuring scalability and fast performance",
        "Integrated Google Maps API to help users view maps with location details, directions, and nearby attractions",
        "Implemented user authentication, reviews, and ratings to enhance engagement and trust",
        "Developed admin dashboard for content management (places, reservations) and user engagement",
        "Optimized APIs for faster data retrieval and mobile-friendly UI for cross-device compatibility"
      ],
      icon: <Globe className="text-primary" size={24} />,
      gradient: "bg-gradient-secondary"
    },
    {
      title: "Learning Management System (LMS)",
      description: "Developed a fully functional learning management system that allows students and instructors to interact with a clean, responsive interface. Key features include user authentication, course management, lesson modules, and dashboard interface.",
      technologies: ["ReactJS",  "Express", "TailwindCSS", "MongoDB"],
      features: [
        "User Authentication: Implemented login/signup for students and instructors using Clerk",
        "Course Management: Instructors can create, update, and delete courses, while students can browse and enroll",
        "Lesson Module: Built dynamic routing to display course content, videos & downloadable resources",
        "Dashboard Interface: Custom dashboards for students and instructors to track and manage courses"
      ],
      icon: <Code className="text-primary" size={24} />,
      gradient: "bg-gradient-primary"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my development journey through real-world applications
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 glass-effect border-border/50 smooth-transition hover:shadow-glow-primary"
            >
              <div className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Project Info */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${project.gradient} shadow-glow-primary`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Database size={20} className="text-primary" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      className="bg-gradient-primary hover:shadow-glow-primary smooth-transition"
                      onClick={() => window.open('https://github.com/MilanChaulagain', '_blank')}
                    >
                      <Github className="mr-2" size={20} />
                      View Code
                    </Button>
                    <Button 
                      variant="outline"
                      className="glass-effect hover:shadow-glow-secondary smooth-transition"
                    >
                      <ExternalLink className="mr-2" size={20} />
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Project Visual */}
                <div className="lg:w-96 flex items-center justify-center">
                  <div className={`w-full h-64 lg:h-80 rounded-lg ${project.gradient} p-1 shadow-glow-primary animate-float`} style={{ animationDelay: `${index * 2}s` }}>
                    <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-6xl mb-4">
                          {project.icon}
                        </div>
                        <h4 className="text-lg font-semibold">{project.title}</h4>
                        <p className="text-sm text-muted-foreground mt-2">
                          {project.technologies.slice(0, 3).join(' • ')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="glass-effect hover:shadow-glow-primary smooth-transition px-8"
            onClick={() => window.open('https://github.com/MilanChaulagain', '_blank')}
          >
            <Github className="mr-2" size={20} />
            Visit My GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;