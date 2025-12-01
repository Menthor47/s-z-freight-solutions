import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Truck, MapPin, Package, User, CheckCircle, Loader2 } from "lucide-react";
import { useLocation } from "react-router-dom";
import { quoteFormSchema } from "@/lib/validations";
import { SEO } from "@/components/SEO";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { BUSINESS_INFO, SERVICE_RATES, QUOTE_CALCULATION, SPECIAL_REQUIREMENTS } from "@/lib/constants";
import { useTranslation } from "@/hooks/useTranslation";

const GetQuote = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const location = useLocation();
  const initialData = location.state || {};
  
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({
    serviceType: initialData.serviceType || "",
    origin: initialData.origin || "",
    destination: initialData.destination || "",
    pickupDate: "",
    deliveryDate: "",
    weight: initialData.weight || "",
    length: "",
    width: "",
    height: "",
    specialRequirements: [] as string[],
    contactName: "",
    companyName: "",
    email: "",
    phone: "",
  });

  const specialRequirementOptions = [
    t("getQuote.temperatureControlled"),
    t("getQuote.fragileItems"),
    t("getQuote.hazardousMaterials"),
    t("getQuote.oversizedLoad"),
    t("getQuote.expressDelivery"),
    t("getQuote.insuranceRequired"),
  ];

  const calculateEstimate = () => {
    const weightFactor = parseFloat(formData.weight) * QUOTE_CALCULATION.weightFactor;
    const baseRate = SERVICE_RATES[formData.serviceType as keyof typeof SERVICE_RATES] || 300;
    const specialReqCost = formData.specialRequirements.length * QUOTE_CALCULATION.specialRequirementCost;
    
    const total = baseRate + weightFactor + specialReqCost;
    setEstimatedCost(Math.round(total));
  };

  const validateStep = (currentStep: number): boolean => {
    setErrors({});
    const validationData: any = {
      serviceType: formData.serviceType,
      origin: formData.origin,
      destination: formData.destination,
      weight: formData.weight,
      contactName: formData.contactName,
      email: formData.email,
      phone: formData.phone,
      specialRequirements: formData.specialRequirements,
    };

    try {
      quoteFormSchema.parse(validationData);
      return true;
    } catch (error: any) {
      if (error.errors) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) {
      toast({
        title: t("getQuote.validationError"),
        description: t("getQuote.checkFields"),
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("quotes").insert([
        {
          service_type: formData.serviceType,
          origin: formData.origin,
          destination: formData.destination,
          pickup_date: formData.pickupDate,
          delivery_date: formData.deliveryDate,
          weight: parseFloat(formData.weight),
          length: formData.length ? parseFloat(formData.length) : null,
          width: formData.width ? parseFloat(formData.width) : null,
          height: formData.height ? parseFloat(formData.height) : null,
          special_requirements: formData.specialRequirements,
          contact_name: formData.contactName,
          company_name: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          estimated_cost: estimatedCost,
        },
      ]);

      if (error) throw error;

      toast({
        title: t("getQuote.submitted"),
        description: t("getQuote.contactWithin"),
      });
      
      setStep(6);
    } catch (error) {
      console.error("Quote submission error:", error);
      toast({
        title: t("getQuote.failedSubmit"),
        description: t("getQuote.tryAgain"),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <Truck className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">{t("getQuote.selectServiceType")}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { value: "spanish-road", label: t("services.spanishRoad") },
                { value: "european-road", label: t("services.europeanRoad") },
                { value: "relocation", label: t("services.relocation") },
                { value: "global", label: t("services.global") },
                { value: "warehousing", label: t("services.warehousing") },
                { value: "consultancy", label: t("services.consultancy") },
              ].map((service) => (
                <Card
                  key={service.value}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    formData.serviceType === service.value ? "border-primary border-2" : ""
                  }`}
                  onClick={() => setFormData({ ...formData, serviceType: service.value })}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{service.label}</span>
                      {formData.serviceType === service.value && (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">{t("getQuote.routeDetails")}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block">{t("getQuote.originCityLocation")}</label>
                <Input
                  placeholder={t("getQuote.originPlaceholder")}
                  value={formData.origin}
                  onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                />
                {errors.origin && <p className="text-sm text-destructive mt-1">{errors.origin}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t("getQuote.destinationCityLocation")}</label>
                <Input
                  placeholder={t("getQuote.destinationPlaceholder")}
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                />
                {errors.destination && <p className="text-sm text-destructive mt-1">{errors.destination}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t("getQuote.pickupDate")}</label>
                <Input
                  type="date"
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t("getQuote.desiredDeliveryDate")}</label>
                <Input
                  type="date"
                  value={formData.deliveryDate}
                  onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Package className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">{t("getQuote.cargoDetails")}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block">{t("getQuote.weightKg")}</label>
                <Input
                  type="number"
                  placeholder={t("getQuote.weightPlaceholder")}
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                />
                {errors.weight && <p className="text-sm text-destructive mt-1">{errors.weight}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t("getQuote.lengthCm")}</label>
                <Input
                  type="number"
                  placeholder={t("getQuote.lengthPlaceholder")}
                  value={formData.length}
                  onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t("getQuote.widthCm")}</label>
                <Input
                  type="number"
                  placeholder={t("getQuote.widthPlaceholder")}
                  value={formData.width}
                  onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t("getQuote.heightCm")}</label>
                <Input
                  type="number"
                  placeholder={t("getQuote.heightPlaceholder")}
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-3 block">{t("getQuote.specialRequirements")}</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {specialRequirementOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <Checkbox
                      id={option}
                      checked={formData.specialRequirements.includes(option)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setFormData({
                            ...formData,
                            specialRequirements: [...formData.specialRequirements, option],
                          });
                        } else {
                          setFormData({
                            ...formData,
                            specialRequirements: formData.specialRequirements.filter((r) => r !== option),
                          });
                        }
                      }}
                    />
                    <label htmlFor={option} className="text-sm cursor-pointer">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <User className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">{t("getQuote.contactInformation")}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium mb-2 block">{t("getQuote.fullName")} *</label>
                <Input
                  placeholder={t("getQuote.namePlaceholder")}
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                />
                {errors.contactName && <p className="text-sm text-destructive mt-1">{errors.contactName}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t("getQuote.companyName")}</label>
                <Input
                  placeholder={t("getQuote.companyPlaceholder")}
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t("getQuote.emailAddress")} *</label>
                <Input
                  type="email"
                  placeholder={t("getQuote.emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t("getQuote.phoneNumber")} *</label>
                <Input
                  type="tel"
                  placeholder={t("getQuote.phonePlaceholder")}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">{t("getQuote.yourEstimatedQuote")}</h3>
              <p className="text-muted-foreground">{t("getQuote.basedOnInformation")}</p>
            </div>
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold text-primary">
                    €{estimatedCost?.toLocaleString()}
                  </div>
                  <p className="text-muted-foreground">{t("getQuote.estimatedCost")}</p>
                  <div className="border-t pt-4 mt-4">
                    <div className="grid grid-cols-2 gap-4 text-left text-sm">
                      <div>
                        <span className="text-muted-foreground">{t("getQuote.serviceLabel")}</span>
                        <p className="font-medium">{formData.serviceType.replace("-", " ")}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">{t("getQuote.routeLabel")}</span>
                        <p className="font-medium">{formData.origin} → {formData.destination}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">{t("getQuote.weightLabel")}</span>
                        <p className="font-medium">{formData.weight} kg</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">{t("getQuote.specialReqLabel")}</span>
                        <p className="font-medium">{formData.specialRequirements.length || t("getQuote.none")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="bg-muted/50 p-4 rounded-lg text-sm text-muted-foreground">
              <p className="font-medium mb-2">{t("getQuote.pleaseNote")}</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>{t("getQuote.note1")}</li>
                <li>{t("getQuote.note2")}</li>
                <li>{t("getQuote.note3")}</li>
              </ul>
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className="text-center space-y-6 py-8">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl font-bold">{t("getQuote.submitted")}</h3>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              {t("getQuote.thankYouMessage")}
            </p>
            <div className="bg-muted/30 p-6 rounded-lg max-w-md mx-auto">
              <p className="font-medium mb-2">{t("getQuote.whatHappensNext")}</p>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>✓ {t("getQuote.emailSent", "Email confirmation sent to {email}").replace("{email}", formData.email)}</li>
                <li>✓ {t("getQuote.teamReviews")}</li>
                <li>✓ {t("getQuote.formalQuote")}</li>
                <li>✓ {t("getQuote.questionsCall", "Questions? Call us at {phone}").replace("{phone}", BUSINESS_INFO.phone)}</li>
              </ul>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.serviceType !== "";
      case 2:
        return formData.origin && formData.destination;
      case 3:
        return formData.weight !== "";
      case 4:
        return formData.contactName && formData.email && formData.phone;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={t("getQuote.pageTitle")}
        description={t("getQuote.pageDescription")}
        keywords="freight quote, logistics quote, transport estimate, shipping quote Spain"
      />
      <Navigation />
      <WhatsAppButton />
      
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-4 text-left">
            <PageBreadcrumbs items={[{ label: t("nav.home"), to: "/" }, { label: t("nav.getQuote") }]} />
          </div>
          {step < 6 && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{t("getQuote.getYourQuote")}</h2>
                <span className="text-sm text-muted-foreground">{t("getQuote.step", "Step {current} of {total}").replace("{current}", step.toString()).replace("{total}", "5")}</span>
              </div>
              <Progress value={(step / 5) * 100} className="h-2" />
            </div>
          )}

          <Card>
            <CardContent className="p-8">
              {renderStep()}

              {step < 6 && (
                <div className="flex justify-between mt-8 pt-6 border-t">
                  {step > 1 && (
                    <Button variant="outline" onClick={() => setStep(step - 1)}>
                      {t("getQuote.back")}
                    </Button>
                  )}
                  <Button
                    className="ml-auto"
                    disabled={!canProceed() || loading}
                    onClick={() => {
                      if (step === 4) {
                        if (validateStep(4)) {
                          calculateEstimate();
                          setStep(step + 1);
                        }
                      } else if (step === 5) {
                        handleSubmit();
                      } else {
                        setStep(step + 1);
                      }
                    }}
                  >
                    {loading ? t("getQuote.processing") : step === 5 ? t("getQuote.submitQuote") : t("getQuote.continue")}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetQuote;