import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Performetix</h3>
            <p className="text-background/80 leading-relaxed">
              Transforming businesses with cutting-edge AI, ML, and custom technology solutions.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="hover:bg-background/10 hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10 hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-background/10 hover:text-primary transition-smooth">
                <Github className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["AI & Machine Learning", "Web Development", "Custom Solutions", "Consulting", "Support & Maintenance"].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-background/80 hover:text-primary transition-smooth">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Case Studies", "Careers", "Blog", "Privacy Policy"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-background/80 hover:text-primary transition-smooth">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>contact@performetix.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 Innovation Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-background/80">Subscribe to our newsletter for the latest insights and updates</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button className="bg-primary hover:bg-primary/90 transition-smooth">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-background/60 text-sm pt-8 border-t border-background/20">
          <p>&copy; {new Date().getFullYear()} Performetix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
