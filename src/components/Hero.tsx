import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-bg relative overflow-hidden pt-20 md:pt-24 lg:pt-0 pb-12">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-primary rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-secondary rounded-full opacity-30 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-accent rounded-full opacity-25 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative mt-2 md:mt-0">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden glass-effect p-2 hero-glow animate-pulse-glow mx-auto">
              <img 
                src={`/images/profilepic.jpg`} 
                alt="Milan Chaulagain" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          
          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Milan</span>
              <br />
              <span className="text-foreground">Chaulagain</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-6 leading-relaxed">
              Full-Stack Developer && BSc.CSIT, Nist College
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I’m a motivated final-year Computer Science student with a strong foundation in frontend and backend web development. Passionate about building dynamic, user-friendly web applications, I’m eager to apply my skills, contribute to impactful projects, and continue growing as a full-stack web developer in real-world environments.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full smooth-transition hover:shadow-glow-primary">
                <MapPin size={16} className="text-primary" />
                <span className="text-sm">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full smooth-transition hover:shadow-glow-primary">
                <Phone size={16} className="text-primary" />
                <span className="text-sm">+977 9861029223</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow-primary smooth-transition px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass-effect hover:shadow-glow-secondary smooth-transition px-8"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a 
                href="https://github.com/MilanChaulagain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-full smooth-transition hover:shadow-glow-primary hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/milan-chaulagain-b49440248/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-full smooth-transition hover:shadow-glow-primary hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:mchaulagain57@gmail.com"
                className="p-3 glass-effect rounded-full smooth-transition hover:shadow-glow-primary hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;