import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import Index from "./pages/Index";
import Services from "./pages/Services";
import GetQuote from "./pages/GetQuote";
import TrackShipment from "./pages/TrackShipment";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Relocation from "./pages/Relocation";
import IndexEs from "./pages/es/IndexEs";
import ServicesEs from "./pages/es/ServicesEs";
import AboutEs from "./pages/es/AboutEs";
import RelocationEs from "./pages/es/RelocationEs";
import ContactEs from "./pages/es/ContactEs";
import GetQuoteEs from "./pages/es/GetQuoteEs";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const routes = [
  { path: "/", element: <Index />, spanishElement: <IndexEs /> },
  { path: "/services", element: <Services />, spanishElement: <ServicesEs /> },
  { path: "/relocation", element: <Relocation />, spanishElement: <RelocationEs /> },
  { path: "/get-quote", element: <GetQuote />, spanishElement: <GetQuoteEs /> },
  { path: "/track", element: <TrackShipment /> },
  { path: "/about", element: <About />, spanishElement: <AboutEs /> },
  { path: "/contact", element: <Contact />, spanishElement: <ContactEs /> },
];

const AppContent = () => {
  useScrollToTop();
  
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {routes.map(({ path, element, spanishElement }) => {
        const spanishPath = path === "/" ? "/es" : `/es${path}`;
        return <Route key={spanishPath} path={spanishPath} element={spanishElement ?? element} />;
      })}

      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
