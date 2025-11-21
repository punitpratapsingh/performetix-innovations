import { Brain, Code, Rocket, TrendingUp, Search, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Custom AI/ML solutions tailored to your industry. From predictive analytics to natural language processing, we build intelligent systems that drive real business value.",
    features: ["Predictive Analytics", "Computer Vision", "NLP Solutions", "Deep Learning Models"],
    category: "Technology",
  },
  {
    icon: Code,
    title: "Web Application Development",
    description: "Scalable, responsive web applications built with cutting-edge technologies. We create seamless user experiences that work flawlessly across all devices.",
    features: ["Custom Web Apps", "Progressive Web Apps", "API Development", "Cloud Integration"],
    category: "Technology",
  },
  {
    icon: Rocket,
    title: "Custom Solutions",
    description: "Bespoke technology solutions designed specifically for your unique challenges. We transform complex problems into elegant, efficient systems.",
    features: ["Process Automation", "System Integration", "Legacy Modernization", "Consulting Services"],
    category: "Technology",
  },
  {
    icon: TrendingUp,
    title: "Paid Marketing",
    description: "Strategic paid campaigns across all major platforms. Drive immediate results with data-driven PPC, social media advertising, and display campaigns.",
    features: ["Google Ads & PPC", "Social Media Ads", "Display Advertising", "Retargeting Campaigns"],
    category: "Marketing",
  },
  {
    icon: Search,
    title: "Organic Marketing & SEO",
    description: "Build sustainable visibility with comprehensive SEO strategies, content marketing, and organic social media management that establishes your authority.",
    features: ["Technical SEO", "Content Strategy", "Link Building", "Social Media Management"],
    category: "Marketing",
  },
  {
    icon: Sparkles,
    title: "AI & LLM Marketing",
    description: "Future-proof your brand with AI-powered marketing. Optimize for ChatGPT, Perplexity, and AI search engines while leveraging conversational AI for engagement.",
    features: ["LLM Optimization", "AI Chatbots", "AI Content Generation", "Voice Search SEO"],
    category: "Marketing",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive IT solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 hover:shadow-lg transition-smooth group relative"
            >
              <div className="absolute top-4 right-4">
                <Badge variant={service.category === "Marketing" ? "default" : "secondary"} className="text-xs">
                  {service.category}
                </Badge>
              </div>
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-2xl pr-20">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
