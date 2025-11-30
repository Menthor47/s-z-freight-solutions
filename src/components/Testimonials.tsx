import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendez",
      company: "TechDistrib Solutions",
      title: "Logistics Manager",
      content: "S&Z Trading has been our reliable partner for 3 years. They reduced our shipping costs by 22% while improving delivery times. Highly professional team.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      company: "EuroManufacture Ltd",
      title: "Supply Chain Director",
      content: "Outstanding service across European routes. Their tracking system is excellent and communication is always prompt. Haven't had a single damaged shipment in 2 years.",
      rating: 5,
    },
    {
      name: "Jean Dupont",
      company: "FrenchFoods Import",
      title: "Operations Lead",
      content: "Best rates for Spain-France corridor. They handle our temperature-sensitive cargo with extreme care. Saved us €50k annually compared to our previous provider.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by hundreds of businesses across Europe for reliable freight solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  <div className="text-sm font-medium text-primary">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};