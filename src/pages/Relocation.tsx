import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Truck, MapPin, Package, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Relocation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Business Relocation Services"
        description="Professional business and office relocation services across Spain and Europe. Careful planning, expert handling, and minimal downtime for your move."
        keywords="business relocation, office move, warehouse relocation, logistics Spain, European relocation"
      />
      <Navigation />
      <WhatsAppButton />

      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs items={[{ label: "Home", to: "/" }, { label: "Relocation" }]} />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Moving &amp; Relocation Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Move your business, warehouse, or inventory across Spain and Europe with a logistics partner that plans every detail and treats your cargo like its own.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/get-quote" state={{ serviceType: "relocation" }}>
                  Get Relocation Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link to="/contact">
                  Talk to a Relocation Specialist
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Truck className="h-6 w-6 text-primary" />
                  What We Move
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We specialise in business relocations of all sizes, from small offices to multi-site warehouse and light industrial moves. Whether you are consolidating sites, opening a new location, or reconfiguring your logistics network, we plan your move around your operations.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Office relocations, including desks, IT equipment, and archives</li>
                  <li>Warehouse moves with pallet racking, machinery, and inventory</li>
                  <li>Light industrial and workshop equipment</li>
                  <li>High-value, fragile, or specialist items that require extra care</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MapPin className="h-6 w-6 text-primary" />
                  Coverage
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Based in Spain, we manage relocations across major European corridors, including:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Spain and Portugal</li>
                  <li>France, Germany, Benelux</li>
                  <li>Italy and surrounding regions</li>
                  <li>UK and Ireland via road and ferry connections</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Package className="h-5 w-5 text-primary" />
                  Professional Packing
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Trained crews use quality packing materials and labelling so everything arrives safely and can be placed exactly where you need it.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  Minimal Downtime
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Evening, overnight, and weekend moves available so your teams and customers experience as little disruption as possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Safe &amp; Compliant
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>
                  Vehicles and routes are selected for your load type, with insurance options available for high-value or sensitive goods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Relocation Process Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear, step-by-step process so you know exactly what will happen before, during, and after moving day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">1. Initial consultation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                We discuss your current and new locations, timeframes, special items, and any constraints around access or working hours.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">2. Site survey &amp; plan</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                When needed, we perform a site visit and build a detailed move plan, including inventory, packing, vehicle requirements, and schedule.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">3. Packing &amp; loading</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Our crews pack, label, and load your items carefully, working to the agreed timetable and health and safety standards.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">4. Delivery &amp; setup</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                We deliver to your new site, position key items as requested, and collect used packing materials once you are operational.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Move?</h2>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Share your routes, dates, and what you need to move, and we will prepare a tailored relocation plan and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link to="/get-quote" state={{ serviceType: "relocation" }}>
                Start Relocation Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Relocation;
