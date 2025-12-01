import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, TrendingUp } from "lucide-react";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={t("about.pageTitle")}
        description={t("about.pageDescription")}
        keywords="about logistics company, freight company Spain, European logistics, S&Z Trading International"
      />
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs items={[{ label: t("nav.home"), to: "/" }, { label: t("nav.about") }]} />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("about.pageTitle")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("about.pageSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">{t("about.ourStory")}</h2>
            <p className="text-lg text-muted-foreground mb-4">
              {t("about.storyP1")}
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              {t("about.storyP2")}
            </p>
            <p className="text-lg text-muted-foreground">
              {t("about.storyP3")}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t("about.whyChoose")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: t("about.certifiedQuality"),
                description: t("about.certifiedQualityDesc")
              },
              {
                icon: Users,
                title: t("about.dedicatedSupport"),
                description: t("about.dedicatedSupportDesc")
              },
              {
                icon: Globe,
                title: t("about.wideCoverage"),
                description: t("about.wideCoverageDesc")
              },
              {
                icon: TrendingUp,
                title: t("about.costEfficient"),
                description: t("about.costEfficientDesc")
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
              { value: "2+", label: t("about.yearsInBusiness") },
              { value: "500+", label: t("about.activeClients") },
              { value: "25+", label: t("about.countriesServed") },
              { value: "98%", label: t("about.onTimeDelivery") }
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
          <h2 className="text-3xl font-bold text-center mb-12">{t("about.certifications")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold mb-2">ISO 9001:2015</div>
                <p className="text-sm text-muted-foreground">{t("about.iso9001")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold mb-2">{t("about.aeoCertified")}</div>
                <p className="text-sm text-muted-foreground">{t("about.aeoDesc")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-2xl font-bold mb-2">{t("about.iataMember")}</div>
                <p className="text-sm text-muted-foreground">{t("about.iataDesc")}</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>{t("about.companyReg")}</p>
            <p>{t("about.insurance")}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;