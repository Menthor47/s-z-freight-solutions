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
import { useTranslation } from "@/hooks/useTranslation";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: "spanish-road",
      icon: Truck,
      title: t("services.spanishRoad"),
      description: t("services.spanishRoadDesc"),
      coverage: t("services.spanishRoadCoverage"),
      deliveryTime: t("services.spanishRoadDelivery"),
      priceRange: t("services.spanishRoadPrice"),
      benefits: [
        t("services.nextDayDelivery"),
        t("services.gpsTracking"),
        t("services.temperatureControlled"),
        t("services.fragileHandling")
      ]
    },
    {
      id: "european-road",
      icon: Globe,
      title: t("services.europeanRoad"),
      description: t("services.europeanRoadDesc"),
      coverage: t("services.europeanRoadCoverage"),
      deliveryTime: t("services.europeanRoadDelivery"),
      priceRange: t("services.europeanRoadPrice"),
      benefits: [
        t("services.customsClearance"),
        t("services.multiDrop"),
        t("services.expressOptions"),
        t("services.consolidatedShipments")
      ]
    },
    {
      id: "relocation",
      icon: Package,
      title: t("services.relocation"),
      description: t("services.relocationDesc"),
      coverage: t("services.relocationCoverage"),
      deliveryTime: t("services.relocationDelivery"),
      priceRange: t("services.relocationPrice"),
      benefits: [
        t("services.preMoveConsultation"),
        t("services.itEquipment"),
        t("services.weekendMoves"),
        t("services.insuranceCoverage")
      ]
    },
    {
      id: "global",
      icon: Ship,
      title: t("services.global"),
      description: t("services.globalDesc"),
      coverage: t("services.globalCoverage"),
      deliveryTime: t("services.globalDelivery"),
      priceRange: t("services.globalPrice"),
      benefits: [
        t("services.customsBroker"),
        t("services.fclLcl"),
        t("services.airFreight"),
        t("services.doorToDoor")
      ]
    },
    {
      id: "warehousing",
      icon: Warehouse,
      title: t("services.warehousing"),
      description: t("services.warehousingDesc"),
      coverage: t("services.warehousingCoverage"),
      deliveryTime: t("services.warehousingDelivery"),
      priceRange: t("services.warehousingPrice"),
      benefits: [
        t("services.security24_7"),
        t("services.climateControlled"),
        t("services.inventoryManagement"),
        t("services.flexibleContracts")
      ]
    },
    {
      id: "consultancy",
      icon: TrendingUp,
      title: t("services.consultancy"),
      description: t("services.consultancyDesc"),
      coverage: t("services.consultancyCoverage"),
      deliveryTime: t("services.consultancyDelivery"),
      priceRange: t("services.consultancyPrice"),
      benefits: [
        t("services.costReduction"),
        t("services.routeOptimization"),
        t("services.vendorConsolidation"),
        t("services.technologyIntegration")
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={t("services.pageTitle")}
        description={t("services.pageDescription")}
        keywords="freight services, logistics services, road transport, warehousing Spain, global shipping"
      />
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-left">
            <PageBreadcrumbs items={[{ label: t("nav.home"), to: "/" }, { label: t("nav.services") }]} />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("services.pageTitle")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("services.pageDescription")}
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
                      <h4 className="font-semibold mb-2 text-sm text-muted-foreground">{t("services.coverageArea")}</h4>
                      <p className="text-foreground">{service.coverage}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm text-muted-foreground">{t("services.typicalDelivery")}</h4>
                      <p className="text-foreground">{service.deliveryTime}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">{t("services.keyBenefits")}</h4>
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
                      <span className="text-sm text-muted-foreground">{t("services.priceRange")} </span>
                      <span className="text-xl font-bold text-primary">{service.priceRange}</span>
                    </div>
                    <Button asChild>
                      <Link to="/get-quote" state={{ serviceType: service.id }}>
                        {t("services.getQuoteService")}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.faqTitle")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.faqDesc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t("services.generalLogistics")}</h3>
              <div>
                <h4 className="font-semibold mb-1">{t("services.whatRegions")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("services.whatRegionsAns")}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t("services.whatGoods")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("services.whatGoodsAns")}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t("services.areInsured")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("services.areInsuredAns")}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t("services.howRequest")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("services.howRequestAns")}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">{t("services.movingRelocation")}</h3>
              <div>
                <h4 className="font-semibold mb-1">{t("services.whatRelocations")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("services.whatRelocationsAns")}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t("services.canMoveOutside")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("services.canMoveOutsideAns")}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t("services.doPacking")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("services.doPackingAns")}
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{t("services.whatInfo")}</h4>
                <p className="text-sm text-muted-foreground">
                  {t("services.whatInfoAns")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("services.needCustom")}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("services.needCustomDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/get-quote">{t("services.getDetailedQuote")}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">{t("services.contactTeam")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;