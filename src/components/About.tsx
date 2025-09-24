import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Scientific Precision",
      description: "Every solution is designed with rigorous methodology and cutting-edge algorithms."
    },
    {
      icon: Users,
      title: "Human-Centered AI",
      description: "We build technology that empowers people and complements human decision-making."
    },
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Constantly exploring the latest AI research to deliver creative and impactful solutions."
    }
  ];

  const capabilities = [
    { number: "Expert Team", label: "AI specialists, data scientists & engineers" },
    { number: "Cutting-Edge Tools", label: "Latest AI technologies & frameworks" },
    { number: "Scalable Solutions", label: "Built to grow with your business" },
    { number: "Ethical AI", label: "Transparent, responsible, and compliant practices" }
  ];

  return (
    <section id="about" className="py-24 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <div>
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              About Solute Solvent
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Where <span className="text-primary">Science</span> Meets
              <br />
              <span className="text-secondary">Artificial Intelligence</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Solute Solvent, we create AI solutions that solve real business problems and unlock new opportunities. 
              Our approach combines scientific rigor, innovative thinking, and ethical AI practices to deliver solutions 
              that are powerful, responsible, and tailored to your unique needs.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Custom Solutions:</strong> Tailored AI systems for your unique business challenges.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Innovative Approaches:</strong> Leveraging the latest AI research and technology.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Ongoing Support:</strong> Ensuring solutions adapt and scale with your business.
                </p>
              </div>
            </div>

            {/* Capabilities */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {capabilities.map((cap, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {cap.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {cap.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Our Core Values</h3>
            
            {values.map((value, index) => (
              <div key={index} className="flex gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl shadow-soft border border-border/50">
                <div className="p-3 rounded-lg gradient-primary flex-shrink-0">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}

            {/* Team Note */}
            <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mt-8">
              <h4 className="font-semibold text-secondary-foreground mb-2">Ready to Explore AI for Your Business?</h4>
              <p className="text-sm text-muted-foreground">
                Our team of AI specialists, data scientists, and engineers is ready to help you unlock 
                the potential of artificial intelligence for your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
