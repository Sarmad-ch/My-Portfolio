import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Brandpath x DHL",
      description:
        "Ecommerce enablement and global fulfillment collaboration. Focus on scalable logistics experiences, omnichannel order processing, and brand growth.",
      technologies: ["E‑commerce", "Logistics", "Fulfillment"],
      image: "/Work/brandpath.png",
      liveUrl: "https://brandpath.com/",
      githubUrl: "",
    },
    {
      title: "The Myriad Website",
      description:
        "Dynamic frontend powered by PMS APIs: real-time listings, bookings, invoices, responsive dashboards, admin and public portals.",
      technologies: ["ASP.NET MVC", "Razor", "JavaScript", "Bootstrap"],
      image: "/Work/website-landing-page.png",
      liveUrl: "https://themyriad.com/",
      githubUrl: "https://github.com/SarmadHussain82",
    },
    {
      title: "PayProNext — US Payroll Platform",
      description:
        "US payroll system: SSRS reports, tax-compliant calculations, and frontend website implementation.",
      technologies: [".NET", "SSRS", "SQL Server", "ASP.NET MVC", "JavaScript"],
      image: "/Work/paypronext-website.png",
      liveUrl: "https://paypronext.com/",
      githubUrl: "https://github.com/SarmadHussain82",
    },
    {
      title: "TaxProNext — Tax & Payroll Website",
      description:
        "Marketing website and pages for tax, payroll, and consulting services with responsive UI.",
      technologies: ["Next.js/React", "CSS", "Responsive UI"],
      image: "/Work/taxpronext-website.png",
      liveUrl: "https://taxpronext.com/",
      githubUrl: "https://github.com/SarmadHussain82",
    },
    {
      title: "Cleanup.ae — Cleaning Services Website",
      description:
        "Marketing and services website for cleaning company with service pages and contact flows.",
      technologies: ["WordPress/Custom", "Responsive UI"],
      image: "/Work/cleanup-ae-website.png",
      liveUrl: "https://cleanup.ae/",
      githubUrl: "https://github.com/SarmadHussain82",
    },
    {
      title: "Strategic Housing Group — Corporate Website",
      description:
        "Corporate site for co-living brands including The Myriad; content and brand pages.",
      technologies: ["Next.js/React", "CSS"],
      image: "/Work/strategichousinggroup-website.png",
      liveUrl: "https://strategichousinggroup.com/",
      githubUrl: "https://github.com/SarmadHussain82",
    },
    {
      title: "URBN Living — Co-living Brand Website",
      description:
        "Brand website for URBN Living with lifestyle pages and lead capture.",
      technologies: ["Next.js/React", "CSS"],
      image: "/Work/urbanliving-website.png",
      liveUrl: "https://urbn.living/",
      githubUrl: "https://github.com/SarmadHussain82",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of the projects I've worked on, showcasing my expertise in 
              full-stack development and modern technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-300 border-0 bg-gradient-card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                        <Button 
                          variant="default" 
                          size="sm"
                          className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;