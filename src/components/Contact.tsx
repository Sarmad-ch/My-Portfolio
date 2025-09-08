import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "sarmad2422@gmail.com",
      link: "mailto:sarmad2422@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone", 
      value: "+92 (304) 9252583",
      link: "tel:+923049252583"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Lahore, Pubjab",
      link: "#"
    }
  ];

  const handleSendMessage = () => {
    const subject = encodeURIComponent("Project Inquiry");
    const body = encodeURIComponent("Hi Sarmad,\n\nI would like to discuss a project.\n\nThanks,");
    window.location.href = `mailto:sarmad2422@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together 
              to bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card hover:shadow-soft transition-all duration-300 border-0 bg-gradient-card text-center group">
                <CardContent className="p-8">
                  <div className="text-tech-blue mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <a 
                    href={info.link}
                    className="text-muted-foreground hover:text-tech-blue transition-colors"
                  >
                    {info.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="shadow-card border-0 bg-gradient-card max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Your Name" 
                    className="border-border focus:border-tech-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com"
                    className="border-border focus:border-tech-blue transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input 
                  placeholder="Project Inquiry"
                  className="border-border focus:border-tech-blue transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  className="min-h-32 border-border focus:border-tech-blue transition-colors resize-none"
                />
              </div>
              
              <Button 
                onClick={handleSendMessage}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-6"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;