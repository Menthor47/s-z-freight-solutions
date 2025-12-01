import { useLocation } from "react-router-dom";

export const useLocale = () => {
  const location = useLocation();
  const isSpanish = location.pathname === "/es" || location.pathname.startsWith("/es/");

  return {
    locale: isSpanish ? "es" : "en",
    isSpanish,
  } as const;
};
