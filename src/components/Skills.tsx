import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "C# / .NET Core", level: 95 },
        { name: "ASP.NET Web API", level: 90 },
        { name: "Entity Framework", level: 88 },
        { name: "SQL Server", level: 85 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Frontend Development", 
      skills: [
        { name: "React", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 92 },
        { name: "Angular", level: 80 }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Azure", level: 82 },
        { name: "Docker", level: 78 },
        { name: "CI/CD", level: 80 },
        { name: "Git", level: 92 },
        { name: "AWS", level: 70 }
      ]
    },
    {
      title: "Tools & Practices",
      skills: [
        { name: "Visual Studio", level: 95 },
        { name: "REST APIs", level: 90 },
        { name: "Unit Testing", level: 85 },
        { name: "SOLID Principles", level: 88 },
        { name: "Microservices", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here's a breakdown of my technical expertise and the tools I use to build 
              modern, scalable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="shadow-card hover:shadow-soft transition-all duration-300 border-0 bg-gradient-card">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-tech-blue font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;