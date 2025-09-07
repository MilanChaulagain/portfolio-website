import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/MilanChaulagain",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/milan-chaulagain-b48460245/",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:mchaulagain57@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold gradient-text hover:scale-105 smooth-transition"
          >
            Milan Chaulagain
          </button>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect rounded-full smooth-transition hover:shadow-glow-primary hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-2">
            <p className="text-muted-foreground">
              <a 
                href="mailto:mchaulagain57@gmail.com" 
                className="hover:text-primary smooth-transition"
              >
                mchaulagain57@gmail.com
              </a>
            </p>
            <p className="text-muted-foreground">
              <a 
                href="tel:+9779861029623" 
                className="hover:text-primary smooth-transition"
              >
                +977 9861029623
              </a>
            </p>
            <p className="text-sm text-muted-foreground">Kathmandu, Nepal</p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-primary opacity-30"></div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Milan Chaulagain. All rights reserved.
            </p>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="px-6 py-2 glass-effect rounded-full text-sm hover:shadow-glow-primary smooth-transition hover:scale-105"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;