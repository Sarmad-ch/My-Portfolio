import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-background/90 dark:bg-background/95" />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-hero rounded-full text-tech-blue font-medium mb-4">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Sarmad Hussain
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            .NET Full-Stack Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about creating robust, scalable applications using modern .NET technologies, 
            React, and cloud platforms. Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-6"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <a href="/Sarmad-Hussain-CV.pdf" download>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white transition-all duration-300 text-lg px-8 py-6"
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="https://github.com/SarmadHussain82" target="_blank" rel="noreferrer noopener">
              <Button 
                variant="ghost" 
                size="icon"
                className="h-12 w-12 rounded-full border border-border hover:border-tech-blue hover:bg-tech-blue/10 transition-all duration-300"
              >
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/sarmad-ch-b0098b16" target="_blank" rel="noreferrer noopener">
              <Button 
                variant="ghost" 
                size="icon"
                className="h-12 w-12 rounded-full border border-border hover:border-tech-blue hover:bg-tech-blue/10 transition-all duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-tech-blue/20 rounded-full animate-bounce delay-0" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-tech-teal/20 rounded-full animate-bounce delay-1000" />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-accent/20 rounded-full animate-bounce delay-2000" />
    </section>
  );
};

export default Hero;