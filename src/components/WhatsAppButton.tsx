import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "34900123456"; // Format: country code + number without +
    const message = encodeURIComponent("Hello! I'm interested in your logistics services.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-xl hover:shadow-2xl transition-all z-50 bg-[#25D366] hover:bg-[#20BA5A]"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};
