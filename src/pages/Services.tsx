import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Truck, Globe, Warehouse, Ship, TrendingUp, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { ServicesFaqSchema } from "@/components/StructuredData";

const Services = () => {
  const services = [
    {
      id: "spanish-road",
      icon: Truck,
      title: "Spanish Road Transport",
      description: "Complete nationwide coverage across Spain with flexible delivery options for all cargo types.",
      coverage: "All Spanish provinces and major cities",
      deliveryTime: "24-48 hours nationwide",
      priceRange: "€150 - €800",
      benefits: [
        "Next-day delivery to major cities",
        "Real-time GPS tracking",
        "Temperature-controlled options available",
        "Fragile cargo handling expertise"
      ]
    },
    {
      id: "european-road",
      icon: Globe,
      title: "European Road Freight",
      description: "Seamless cross-border logistics connecting Spain with 25+ European countries.",
      coverage: "EU27 plus UK, Switzerland, Norway",
      deliveryTime: "2-7 days depending on destination",
      priceRange: "€450 - €2,500",
      benefits: [
        "Customs clearance assistance",
        "Multi-drop delivery routes",
        "Express options available",
        "Consolidated shipments for cost savings"
      ]
    },
    {
      id: "relocation",
      icon: Package,
      title: "Business Relocation Services",
      description: "Professional office and business relocations with minimal downtime and maximum care.",
      coverage: "Spain and major European cities",
      deliveryTime: "Scheduled based on project",
      priceRange: "€800 - €5,000",
      benefits: [
        "Pre-move planning consultation",
        "IT equipment specialized handling",
        "Weekend and after-hours moves",
        "Insurance coverage up to €500k"
      ]
    },
    {
      id: "global",
      icon: Ship,
      title: "Global Logistics & Shipping",
      description: "Worldwide ocean and air freight services for international trade and distribution.",
      coverage: "150+ countries worldwide",
      deliveryTime: "5-30 days (air/sea)",
      priceRange: "€1,200 - €15,000",
      benefits: [
        "Dedicated customs broker support",
        "FCL and LCL container options",
        "Air freight for urgent shipments",
        "Door-to-door delivery worldwide"
      ]
    },
    {
      id: "warehousing",
      icon: Warehouse,
      title: "Warehousing & Storage",
      description: "Secure, climate-controlled storage facilities strategically located across Spain.",
      coverage: "Madrid, Barcelona, Valencia facilities",
      deliveryTime: "Flexible terms",
      priceRange: "€200 - €2,000/month",
      benefits: [
        "24/7 security and CCTV monitoring",
        "Climate-controlled zones",
        "Inventory management systems",
        "Flexible short and long-term contracts"
      ]
    },
    {
      id: "consultancy",
      icon: TrendingUp,
      title: "Supply Chain Consultancy",
      description: "Expert analysis and optimization of your logistics operations to reduce costs and improve efficiency.",
      coverage: "Remote and on-site consultations",
      deliveryTime: "Project-based",
      priceRange: "€500 - €5,000",
      benefits: [
        "Cost reduction analysis",
        "Route optimization strategies",
        "Vendor consolidation recommendations",
        "Technology integration guidance"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Freight & Logistics Services - Spain & Europe"
        description="Comprehensive freight solutions: Spanish road transport, European freight, warehousing, global shipping, and supply chain consultancy. Get instant quotes."
        keywords="freight services, logistics services, road transport, warehousing Spain, global shipping"
      />
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs items={[{ label: "Home", to: "/" }, { label: "Services" }]} />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive freight and logistics solutions designed for modern businesses. Choose the service that fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service, index) => (
              <AccordionItem
                key={service.id}
                value={service.id}
                className="border rounded-lg px-6 bg-card hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center space-x-4 text-left">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Coverage Area</h4>
                      <p className="text-foreground">{service.coverage}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-muted-foreground">Typical Delivery Time</h4>
                      <p className="text-foreground">{service.deliveryTime}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">✓</span>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-sm text-muted-foreground">Price Range: </span>
                      <span className="text-xl font-bold text-primary">{service.priceRange}</span>
                    </div>
                    <Button asChild>
                      <Link to="/get-quote" state={{ serviceType: service.id }}>
                        Get Quote for This Service
                      </Link>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <ServicesFaqSchema />

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find quick answers about our freight, logistics, and relocation services. If you don’t see your question here, our team is happy to help.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">General Logistics</h3>
              <div>
                <h4 className="font-semibold mb-1">What regions do you cover?</h4>
                <p className="text-sm text-muted-foreground">
                  We are based in Spain and operate across major European corridors. Our core network covers Spain, Portugal, France, Germany, the Benelux countries, Italy, and the UK, with partners providing onward connections to the rest of Europe.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">What types of goods do you transport?</h4>
                <p className="text-sm text-muted-foreground">
                  We handle palletised goods, full and part truck loads, machinery, retail stock, e-commerce shipments, and general industrial cargo. For hazardous, temperature-controlled, or unusual loads, we confirm the safest solution for your case.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Are my shipments insured?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes. All shipments are covered by standard carrier liability, and we can arrange extended insurance for high-value or sensitive cargo on request. Share the approximate value when requesting a quote so we can propose the right cover.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">How do I request a quote?</h4>
                <p className="text-sm text-muted-foreground">
                  You can request a quote via our online Get Quote form, by emailing us your shipment details, or by calling our team. Provide origin, destination, dates, approximate weight or volume, and any special requirements.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Moving &amp; Relocation</h3>
              <div>
                <h4 className="font-semibold mb-1">What kind of relocations do you handle?</h4>
                <p className="text-sm text-muted-foreground">
                  We manage business relocations of all sizes, from small offices to warehouses and light industrial sites. Depending on your needs, we can also support selected residential moves linked to corporate relocations.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Can you move us outside normal business hours?</h4>
                <p className="text-sm text-muted-foreground">
                  Yes. Many clients prefer evening or weekend moves to avoid disruption. We can plan relocations outside standard office hours, including phased moves over several days.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Do you provide packing materials and packing services?</h4>
                <p className="text-sm text-muted-foreground">
                  We can supply boxes, crates, wrapping materials, labels, and provide full packing and unpacking services. You decide what your team will handle and what you would like us to manage.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">What information do you need for a relocation quote?</h4>
                <p className="text-sm text-muted-foreground">
                  For an accurate relocation quote, we usually ask for current and new addresses, preferred move dates, approximate size of the premises, any heavy or specialist equipment, access details, and whether you need packing or unpacking services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every business is unique. Contact us to discuss your specific requirements and get a tailored logistics plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/get-quote">Get Detailed Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;