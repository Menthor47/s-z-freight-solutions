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
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LocalBusinessSchema } from "@/components/StructuredData";
import { useTranslation } from "@/hooks/useTranslation";

const Index = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Truck,
      title: t("services.spanishRoad"),
      description: t("services.spanishRoadDesc"),
      priceRange: "€150",
    },
    {
      icon: Globe,
      title: t("services.europeanRoad"),
      description: t("services.europeanRoadDesc"),
      priceRange: "€450",
    },
    {
      icon: Warehouse,
      title: t("services.relocation"),
      description: t("services.relocationDesc"),
      priceRange: "€800",
    },
    {
      icon: Ship,
      title: t("services.global"),
      description: t("services.globalDesc"),
      priceRange: "€1,200",
    },
    {
      icon: Warehouse,
      title: t("services.warehousing"),
      description: t("services.warehousingDesc"),
      priceRange: "€200/mo",
    },
    {
      icon: TrendingUp,
      title: t("services.consultancy"),
      description: t("services.consultancyDesc"),
      priceRange: "€500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <LocalBusinessSchema />
      <Navigation />
      <WhatsAppButton />
      
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
                {t("home.heroTitle")}
                <span className="text-primary block">{t("home.heroTitleHighlight")}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                {t("home.heroDescription")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/get-quote">{t("home.getQuote")}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg">
                  <Link to="/get-quote" state={{ serviceType: "relocation" }}>
                    {t("home.planYourMove")}
                  </Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>{t("home.support24_7")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>{t("home.relocationExperts")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span>{t("home.insuredCargo")}</span>
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

      <section id="relocation" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.movingRelocationTitle")}</h2>
            <p className="text-lg text-muted-foreground">
              {t("home.movingRelocationDesc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">{t("home.endToEndPlanning")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("home.endToEndPlanningDesc")}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">{t("home.professionalPacking")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("home.professionalPackingDesc")}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">{t("home.outOfHours")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("home.outOfHoursDesc")}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">{t("home.safeCompliant")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("home.safeCompliantDesc")}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">{t("home.panEuropean")}</h3>
              <p className="text-sm text-muted-foreground">
                {t("home.panEuropeanDesc")}
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              {t("home.readyToPlan")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/get-quote" state={{ serviceType: "relocation" }}>
                  {t("home.planYourMove")}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">
                  {t("home.talkToSpecialist")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("home.ourServices")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("home.comprehensiveFreight")}
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
            {t("home.readyToOptimize")}
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t("home.getDetailedQuote")}
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to="/get-quote">{t("home.requestFormalQuote")}</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;