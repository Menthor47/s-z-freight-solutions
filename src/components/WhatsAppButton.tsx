import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useLocale } from "@/hooks/useLocale";

export const WhatsAppButton = () => {
  const { isSpanish } = useLocale();

  const handleWhatsAppClick = () => {
    const phoneNumber = "34684482440"; // Format: country code + number without +
    const message = isSpanish
      ? "¡Hola! Estoy interesado en sus servicios de logística."
      : "Hello! I'm interested in your logistics services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl hover:shadow-2xl transition-all z-50 bg-[#25D366] hover:bg-[#20BA5A]"
      aria-label={isSpanish ? "Contáctanos por WhatsApp" : "Contact us on WhatsApp"}
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};
