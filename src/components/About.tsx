import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable, testable code following SOLID principles"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Design",
      description: "Expertise in SQL Server, Entity Framework, and database optimization"
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Native",
      description: "Building scalable applications on Azure and AWS platforms"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Player",
      description: "Collaborative approach with strong communication skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate .NET developer with 5+ years of experience building enterprise-level applications. 
              I love solving complex problems and creating efficient, user-friendly solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-6">
                Started my career as a junior developer and quickly grew into full-stack development. 
                I've worked on everything from small business applications to large enterprise systems 
                serving thousands of users.
              </p>
              <p className="text-muted-foreground mb-6">
                My expertise spans across the entire Microsoft technology stack, including .NET Core, 
                ASP.NET, C#, SQL Server, Blazor, and modern frontend frameworks like React and Angular.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">.NET Core</Badge>
                <Badge variant="secondary">C#</Badge>
                <Badge variant="secondary">ASP.NET</Badge>
                <Badge variant="secondary">Blazor</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">SQL Server</Badge>
                <Badge variant="secondary">Azure</Badge>
                <Badge variant="secondary">Entity Framework</Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-300 border-0 bg-gradient-card">
                  <CardContent className="p-6">
                    <div className="text-tech-blue mb-4">
                      {highlight.icon}
                    </div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;