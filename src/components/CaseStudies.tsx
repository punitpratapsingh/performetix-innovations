import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Healthcare AI Assistant",
    industry: "Healthcare",
    description: "Developed an AI-powered patient triage system that reduced waiting times by 60% and improved diagnostic accuracy.",
    results: ["60% faster triage", "85% accuracy rate", "500K+ patients served"],
    tags: ["AI/ML", "NLP", "Healthcare"],
  },
  {
    title: "E-Commerce Recommendation Engine",
    industry: "Retail",
    description: "Built a machine learning recommendation system that increased conversion rates and customer engagement for a major online retailer.",
    results: ["40% increase in sales", "2x engagement rate", "Personalized for 2M+ users"],
    tags: ["Machine Learning", "Data Analytics", "E-Commerce"],
  },
  {
    title: "Financial Fraud Detection Platform",
    industry: "Finance",
    description: "Created a real-time fraud detection system using advanced ML algorithms, protecting millions in transactions daily.",
    results: ["99.8% fraud detection", "$10M+ protected monthly", "Real-time processing"],
    tags: ["AI", "Security", "FinTech"],
  },
];

const CaseStudies = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Case Studies</h2>
          <p className="text-xl text-muted-foreground">
            Real-world success stories from our portfolio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-accent/50 hover:shadow-lg transition-smooth group cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{study.industry}</Badge>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-smooth" />
                </div>
                <CardTitle className="text-2xl">{study.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {study.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                        <span className="font-medium text-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
