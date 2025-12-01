import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsEs = () => {
  const testimonials = [
    {
      name: "Carlos Méndez",
      company: "TechDistrib Solutions",
      title: "Responsable de Logística",
      content: "S&Z Trading es nuestro socio fiable desde hace 3 años. Reducieron nuestros costes de envío un 22% y mejoraron los tiempos de entrega.",
      rating: 5,
    },
    {
      name: "María Santos",
      company: "EuroManufacture Ltd",
      title: "Directora de Cadena de Suministro",
      content: "Servicio sobresaliente en las rutas europeas. El seguimiento es excelente y la comunicación siempre es rápida.",
      rating: 5,
    },
    {
      name: "Jean Dupont",
      company: "FrenchFoods Import",
      title: "Responsable de Operaciones",
      content: "Las mejores tarifas para el corredor España-Francia. Manejan nuestra carga sensible a la temperatura con mucho cuidado.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empresas de toda Europa confían en nosotros para soluciones logísticas fiables
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
