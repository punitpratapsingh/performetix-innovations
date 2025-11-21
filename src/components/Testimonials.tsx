import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, MedTech Solutions",
    content: "Performetix transformed our healthcare platform with their AI solution. The results exceeded our expectations, and their team's expertise is unmatched.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "CEO, RetailHub",
    content: "The recommendation engine they built increased our revenue by 40%. Their understanding of ML and business needs is exceptional.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "VP Technology, FinSecure",
    content: "Working with Performetix was seamless. They delivered a robust fraud detection system that processes millions of transactions flawlessly.",
    rating: 5,
    initials: "ER",
  },
  {
    name: "David Kumar",
    role: "Founder, LogisTech",
    content: "Their custom solution streamlined our entire supply chain. The ROI was visible within the first quarter of implementation.",
    rating: 5,
    initials: "DK",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-smooth">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
