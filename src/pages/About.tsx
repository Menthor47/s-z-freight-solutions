import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About Us - S&Z TRADING INTERNATIONAL S.C.A."
        description="S&Z TRADING INTERNATIONAL S.C.A. - Your trusted logistics partner in Spain and Europe. Professional freight and relocation services since 2022."
        keywords="about logistics company, freight company Spain, European logistics, S&Z Trading International"
      />
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About S&Z TRADING INTERNATIONAL S.C.A.</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted logistics partner in Spain and Europe since 2022
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
              Founded in 2022, S&Z TRADING INTERNATIONAL S.C.A. has quickly established itself as a reliable logistics provider in Spain and Europe. Starting with a focus on road transport, we've expanded our services to include comprehensive logistics solutions for businesses of all sizes across the region.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              We've built our reputation on three pillars: reliability, transparency, and customer service. Every shipment is handled with care, and every client receives personalized attention. This approach has helped us build strong relationships with businesses across various industries.
            </p>
            <p className="text-lg text-muted-foreground">
              Our growing fleet of modern vehicles and network of trusted partners enables us to offer a wide range of services, from local deliveries to international freight solutions. We're committed to providing efficient and cost-effective logistics services while maintaining the highest standards of quality and customer satisfaction.
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
                description: "ISO 9001 certified with full insurance coverage up to €250K per shipment"
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
              { value: "3+", label: "Years in Business" },
              { value: "200+", label: "Active Clients" },
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
                <div className="text-2xl font-bold mb-2">Chep Associate</div>
                <p className="text-sm text-muted-foreground">CX/HX/Timo/Trans</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Company Registration: VAT/NIF NIF: ESF70700547</p>
            <p className="font-bold text-base">Fully insured with coverage up to €250k per shipment</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;