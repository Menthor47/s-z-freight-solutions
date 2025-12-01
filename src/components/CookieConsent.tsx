import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/hooks/useLocale";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "szitrans_cookie_consent";

interface CookieConsentState {
  accepted: boolean;
  timestamp: number;
}

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { isSpanish } = useLocale();

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    const consentState: CookieConsentState = {
      accepted: true,
      timestamp: Date.now(),
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentState));
    setShowBanner(false);
  };

  const handleDecline = () => {
    const consentState: CookieConsentState = {
      accepted: false,
      timestamp: Date.now(),
    };
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentState));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-0 left-0 right-0 z-[100] bg-background border-t shadow-lg p-4 md:p-6"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h2 id="cookie-consent-title" className="font-semibold text-lg mb-1">
              {isSpanish ? "Uso de cookies" : "Cookie Notice"}
            </h2>
            <p id="cookie-consent-description" className="text-sm text-muted-foreground">
              {isSpanish
                ? "Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar navegando, aceptas nuestra política de cookies."
                : "We use cookies to enhance your experience on our website. By continuing to browse, you accept our cookie policy."}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Button variant="outline" size="sm" onClick={handleDecline}>
              {isSpanish ? "Rechazar" : "Decline"}
            </Button>
            <Button size="sm" onClick={handleAccept}>
              {isSpanish ? "Aceptar" : "Accept"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleDecline}
              aria-label={isSpanish ? "Cerrar" : "Close"}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
