import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Target, 
  Search, 
  Share2, 
  BarChart3, 
  Sparkles,
  MessageSquare,
  FileText,
  Globe,
  Zap,
  Users,
  CheckCircle2
} from "lucide-react";
import Footer from "@/components/Footer";

const Marketing = () => {
  const paidMarketingServices = [
    {
      icon: Target,
      title: "PPC Campaign Management",
      description: "Data-driven pay-per-click campaigns across Google Ads, Meta, and LinkedIn with optimal ROI.",
      features: ["Keyword Research", "Ad Copywriting", "Bid Optimization", "A/B Testing"],
    },
    {
      icon: Share2,
      title: "Social Media Advertising",
      description: "Targeted social media campaigns that convert. Reach your ideal customers where they spend time.",
      features: ["Audience Targeting", "Creative Design", "Performance Tracking", "Retargeting Campaigns"],
    },
    {
      icon: BarChart3,
      title: "Display & Programmatic",
      description: "Strategic display advertising and programmatic buying for maximum reach and engagement.",
      features: ["Banner Ads", "Programmatic Buying", "Audience Segmentation", "Real-time Analytics"],
    },
  ];

  const organicMarketingServices = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to boost your organic rankings and drive qualified traffic.",
      features: ["Technical SEO", "On-page Optimization", "Link Building", "Content Strategy"],
    },
    {
      icon: FileText,
      title: "Content Marketing",
      description: "Engaging, SEO-optimized content that educates your audience and drives conversions.",
      features: ["Blog Writing", "Whitepapers", "Case Studies", "Video Content"],
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Build and engage your community with consistent, valuable organic social media presence.",
      features: ["Content Calendar", "Community Management", "Influencer Outreach", "Analytics Reporting"],
    },
  ];

  const aiLlmServices = [
    {
      icon: Sparkles,
      title: "AI-Powered SEO",
      description: "Leverage AI and LLM technology to dominate search results and AI-powered answer engines.",
      features: ["LLM Optimization", "Schema Markup", "Entity Recognition", "Semantic SEO"],
    },
    {
      icon: MessageSquare,
      title: "Chatbot & Conversational AI",
      description: "Deploy intelligent AI chatbots that engage visitors and qualify leads 24/7.",
      features: ["GPT Integration", "Lead Qualification", "Multi-language Support", "Custom Training"],
    },
    {
      icon: Globe,
      title: "AI Content Generation",
      description: "Scale your content production with AI-assisted writing while maintaining quality and brand voice.",
      features: ["Automated Copywriting", "Content Optimization", "Personalization", "Quality Assurance"],
    },
  ];

  const benefits = [
    "Increase brand visibility across all channels",
    "Drive qualified traffic and conversions",
    "Optimize for AI-powered search engines",
    "Data-driven decision making",
    "Full transparency and reporting",
    "Dedicated account manager",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">
              Marketing Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground">
              Next-Gen Digital Marketing
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Combine traditional marketing excellence with cutting-edge AI technology to maximize your ROI and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Get a Free Audit
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Paid Marketing */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Paid Marketing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Accelerate Your Growth</h2>
            <p className="text-xl text-muted-foreground">
              Strategic paid campaigns that deliver measurable results and scale your business fast
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paidMarketingServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-lg transition-smooth group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organic Marketing */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <Search className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Organic Marketing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Build Lasting Visibility</h2>
            <p className="text-xl text-muted-foreground">
              Sustainable organic strategies that establish your brand as an industry authority
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organicMarketingServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-accent/50 hover:shadow-lg transition-smooth group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-smooth">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI & LLM Marketing */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-primary text-primary-foreground shadow-glow">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">AI & LLM Visibility</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Future-Proof Your Marketing
            </h2>
            <p className="text-xl text-muted-foreground">
              Optimize for AI search engines like ChatGPT, Perplexity, and Google's AI Overviews
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {aiLlmServices.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-glow transition-smooth group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-smooth" />
                <CardHeader className="relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Our AI Marketing */}
          <Card className="max-w-4xl mx-auto border-2 border-primary/20 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Why AI Marketing Matters Now</CardTitle>
              <CardDescription className="text-base">
                Over 60% of searches now happen through AI assistants. Is your brand visible?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Let's create a custom marketing strategy that combines the best of paid, organic, and AI-powered approaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Download Marketing Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketing;
