import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="logo.png" 
                alt="Solute Solvent Logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent">
                Solute Solvent
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Transforming businesses through innovative AI solutions. 
              Where scientific precision meets artificial intelligence.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Solute Solvent. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Predictive AI
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Intelligent Automation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Data Insights
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  AI Strategy
                </a>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary transition-colors"
                >
                  Other / Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contact@solutesolvent.com</li>
              <li>support@solutesolvent.com</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
          <div>
            Built with ❤️ for the future of AI
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
