import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { InstantQuoteForm } from "@/components/InstantQuoteForm";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustSignals } from "@/components/TrustSignals";
import { Testimonials } from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Truck, Train, Ship, Warehouse, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-truck.jpg";

const Index = () => {
  const services = [
    {
      icon: Truck,
      title: "Spanish Road Transport",
      description: "Nationwide coverage with next-day delivery options",
      priceRange: "€150",
    },
    {
      icon: Globe,
      title: "European Road Freight",
      description: "Cross-border logistics across 25+ European countries",
      priceRange: "€450",
    },
    {
      icon: Warehouse,
      title: "Relocation Services",
      description: "Business and office relocations with care",
      priceRange: "€800",
    },
    {
      icon: Ship,
      title: "Global Logistics",
      description: "Ocean and air freight worldwide",
      priceRange: "€1,200",
    },
    {
      icon: Warehouse,
      title: "Warehousing Solutions",
      description: "Secure storage facilities across Spain",
      priceRange: "€200/mo",
    },
    {
      icon: TrendingUp,
      title: "Supply Chain Consultancy",
      description: "Optimize your logistics operations",
      priceRange: "€500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Professional freight transport"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Spain & European Freight
                <span className="text-primary block">Transport Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Reliable, cost-effective logistics for your business. From Madrid to Munich, we deliver on time, every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/get-quote">Get Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Real-time Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>Insured Cargo</span>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <InstantQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive freight solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Get a detailed quote in minutes. Our team will respond within 2 hours during business hours.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/get-quote">Request Formal Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;