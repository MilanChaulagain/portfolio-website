import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      value: "mchaulagain57@gmail.com",
      href: "mailto:mchaulagain57@gmail.com"
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Phone",
      value: "+977 9861029223",
      href: "tel:+9779861029223"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Location",
      value: "Kathmandu, Nepal",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      href: "https://github.com/MilanChaulagain",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/milan-chaulagain-b48460245/",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project or collaboration opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                and potential collaborations. Whether you're looking for a full-stack developer 
                or just want to say hello, feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="p-6 glass-effect border-border/50 smooth-transition hover:shadow-glow-primary hover:scale-105"
                >
                  <div className="flex items-center gap-4">
                    {info.icon}
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">{info.title}</h4>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-lg hover:text-primary smooth-transition"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg">{info.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass-effect rounded-full smooth-transition hover:shadow-glow-primary hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 glass-effect border-border/50">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="glass-effect border-border/50 focus:shadow-glow-primary smooth-transition"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="glass-effect border-border/50 focus:shadow-glow-primary smooth-transition"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="glass-effect border-border/50 focus:shadow-glow-primary smooth-transition resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-glow-primary smooth-transition"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 glass-effect rounded-lg border-border/50">
          <h3 className="text-xl font-bold mb-2">Ready to Start a Project?</h3>
          <p className="text-muted-foreground mb-4">
            Let's turn your ideas into reality together!
          </p>
          <Button 
            size="lg"
            className="bg-gradient-accent hover:shadow-glow-secondary smooth-transition"
            onClick={() => window.location.href = 'mailto:mchaulagain57@gmail.com?subject=Project Inquiry'}
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;