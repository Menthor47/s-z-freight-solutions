import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About Us - European Freight Logistics Since 2010"
        description="S&Z Trading International - 14 years of reliable freight transport across Spain and Europe. ISO 9001 certified with 98% on-time delivery."
        keywords="about logistics company, freight company Spain, European logistics, S&Z Trading"
      />
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About S&Z Trading International</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in European freight logistics since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Founded in Madrid in 2010, S&Z Trading International began with a simple mission: to provide reliable, cost-effective freight solutions for businesses trading across Spain and Europe. What started as a small road transport operation has grown into a comprehensive logistics provider serving over 500 companies across 25+ countries.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              We've built our reputation on three pillars: reliability, transparency, and customer service. Every shipment is tracked in real-time, every client has a dedicated account manager, and every promise is kept. This approach has earned us an industry-leading 98% on-time delivery rate and partnerships with some of Europe's largest manufacturers and distributors.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, our fleet of modern vehicles and network of trusted partners allows us to offer everything from same-day Spanish deliveries to complex international supply chain solutions. But our core values remain unchanged: treat every shipment like it's our own.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: "Certified Quality",
                description: "ISO 9001 certified with full insurance coverage up to €5M per shipment"
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Personal account managers and 24/7 customer service for all clients"
              },
              {
                icon: Globe,
                title: "Wide Coverage",
                description: "Operations across 25+ European countries with local expertise"
              },
              {
                icon: TrendingUp,
                title: "Cost Efficient",
                description: "Competitive rates with no hidden fees. Average 20% cost reduction vs competitors"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            {[
              { value: "14", label: "Years in Business" },
              { value: "500+", label: "Active Clients" },
              { value: "25+", label: "Countries Served" },
              { value: "98%", label: "On-Time Delivery" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold mb-2">ISO 9001:2015</div>
                <p className="text-sm text-muted-foreground">Quality Management</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold mb-2">AEO Certified</div>
                <p className="text-sm text-muted-foreground">Authorized Economic Operator</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold mb-2">IATA Member</div>
                <p className="text-sm text-muted-foreground">International Air Transport</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Company Registration: B-12345678 | VAT: ES12345678A</p>
            <p>Fully insured with coverage up to €5,000,000 per shipment</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;