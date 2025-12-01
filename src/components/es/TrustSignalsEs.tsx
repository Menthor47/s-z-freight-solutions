import { Award, Users, Globe, TrendingUp } from "lucide-react";

export const TrustSignalsEs = () => {
  const signals = [
    {
      icon: Award,
      value: "3+",
      label: "Años en el mercado",
    },
    {
      icon: Users,
      value: "200+",
      label: "Clientes activos",
    },
    {
      icon: Globe,
      value: "25+",
      label: "Países atendidos",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Entregas puntuales",
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {signals.map((signal, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <signal.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary">{signal.value}</div>
              <div className="text-sm text-muted-foreground">{signal.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
