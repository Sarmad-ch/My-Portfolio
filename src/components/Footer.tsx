import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tech-dark dark:bg-background text-white dark:text-foreground py-12 border-t dark:border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                John Developer
              </h3>
              <p className="text-gray-300 dark:text-muted-foreground mb-4">
                .NET Full-Stack Developer passionate about creating innovative solutions 
                and building scalable applications.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/SarmadHussain82" target="_blank" rel="noreferrer noopener">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-10 w-10 rounded-full border border-gray-600 dark:border-border hover:border-tech-blue hover:bg-tech-blue/20 transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://linkedin.com/in/sarmad-ch-b0098b16" target="_blank" rel="noreferrer noopener">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="h-10 w-10 rounded-full border border-gray-600 dark:border-border hover:border-tech-blue hover:bg-tech-blue/20 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-10 w-10 rounded-full border border-gray-600 dark:border-border hover:border-tech-blue hover:bg-tech-blue/20 transition-all duration-300"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 dark:text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-tech-blue transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-tech-blue transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-tech-blue transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-tech-blue transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300 dark:text-muted-foreground">
                <li>Full-Stack Development</li>
                <li>API Development</li>
                <li>Database Design</li>
                <li>Cloud Solutions</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 dark:border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-300 dark:text-muted-foreground mb-4 md:mb-0 flex items-center">
                Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Sarmad Hussain
              </p>
              <p className="text-gray-300 dark:text-muted-foreground">
                © {currentYear} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;