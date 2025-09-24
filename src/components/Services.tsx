// src/components/Services.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Cog, BarChart3, Lightbulb, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Predictive AI Solutions",
      description: "Turn your data into actionable insights that drive growth, optimize decisions, and forecast trends.",
      features: ["Revenue Forecasting", "Customer Behavior Prediction", "Smart Recommendations"]
    },
    {
      icon: Cog,
      title: "Intelligent Process Automation",
      description: "Streamline repetitive tasks, reduce errors, and free your team to focus on high-value work.",
      features: ["Workflow Optimization", "Automated Document Processing", "Smart Task Automation"]
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Leverage advanced analytics to make informed, faster, and smarter business decisions.",
      features: ["Real-Time Analytics", "Custom Dashboards", "Actionable Business Intelligence"]
    },
    {
      icon: Lightbulb,
      title: "AI Strategy & Roadmaps",
      description: "Identify AI opportunities, plan implementation, and maximize ROI with expert guidance.",
      features: ["AI Readiness Assessment", "Implementation Planning", "ROI Optimization"]
    },
    {
      icon: Zap,
      title: "Conversational AI & NLP",
      description: "Engage customers with intelligent chatbots, sentiment analysis, and automated content generation.",
      features: ["Smart Chatbots", "Text & Sentiment Analysis", "Automated Content Creation"]
    },
    {
      icon: Shield,
      title: "Responsible AI & Compliance",
      description: "Ensure your AI solutions are ethical, transparent, and fully compliant with regulations.",
      features: ["Bias Detection", "Compliance Frameworks", "Ethical AI Guidelines"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine scientific rigor with cutting-edge AI technology to deliver solutions that **drive measurable business impact**.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl gradient-primary group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see exactly what you need? We specialize in custom AI solutions for your business.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-primary hover:text-primary/80 font-semibold underline underline-offset-4 transition-colors"
          >
            Let's discuss your specific requirements →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
