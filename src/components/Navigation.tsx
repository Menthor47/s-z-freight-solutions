import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useMemo, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BUSINESS_INFO as BUSINESS_INFO_EN } from "@/lib/constants";
import { BUSINESS_INFO as BUSINESS_INFO_ES } from "@/lib/constants.es";
import { useLocale } from "@/hooks/useLocale";
import sziLogo from "@/assets/szi-group-logo.jpg";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isSpanish } = useLocale();
  const businessInfo = isSpanish ? BUSINESS_INFO_ES : BUSINESS_INFO_EN;
  const basePath = isSpanish ? "/es" : "";
  const homePath = basePath || "/";

  const normalizedPath = isSpanish
    ? location.pathname.replace(/^\/es/, "") || "/"
    : location.pathname || "/";

  const localeTogglePath = isSpanish
    ? normalizedPath === "/" ? "/" : normalizedPath
    : normalizedPath === "/" ? "/es" : `/es${normalizedPath}`;

  const navLinks = useMemo(
    () =>
      isSpanish
        ? [
            { label: "Servicios", path: `${basePath}/services` },
            { label: "Reubicación", path: `${basePath}/relocation` },
            { label: "Solicitar presupuesto", path: `${basePath}/get-quote` },
            { label: "Sobre nosotros", path: `${basePath}/about` },
            { label: "Contacto", path: `${basePath}/contact` },
          ]
        : [
            { label: "Services", path: `/services` },
            { label: "Relocation", path: `/relocation` },
            { label: "Get Quote", path: `/get-quote` },
            { label: "About", path: `/about` },
            { label: "Contact", path: `/contact` },
          ],
    [basePath, isSpanish]
  );

  const isActive = (path: string) => {
    const basePath = path.split("#")[0];
    return location.pathname === basePath;
  };

  const handleHomeClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none"
      >
        {isSpanish ? "Saltar al contenido principal" : "Skip to main content"}
      </a>
      
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link
            to={homePath}
            onClick={handleHomeClick}
            className="flex items-center space-x-2"
            aria-label={isSpanish ? "S&Z Trading / SZI Group - Ir al inicio" : "S&Z Trading / SZI Group - Go to homepage"}
          >
            <img
              src={sziLogo}
              alt={isSpanish ? "Logotipo S&Z Trading / SZI Group" : "S&Z Trading / SZI Group logo"}
              className="h-10 w-auto rounded-lg bg-white object-contain shadow-sm"
            />
            <div className="hidden md:block">
              <div className="text-lg font-bold text-trust-navy">S&Z Trading</div>
              <div className="text-xs text-muted-foreground">International Logistics</div>
            </div>
          </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path) ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={localeTogglePath}
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            {isSpanish ? "English" : "Español"}
          </Link>
        </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:${businessInfo.phoneRaw}`} className="flex items-center space-x-2 text-sm font-medium">
              <Phone className="h-4 w-4" />
              <span>{businessInfo.phone}</span>
            </a>
            <Button asChild>
              <Link to={`${basePath}/get-quote`}>
                {isSpanish ? "Solicitar presupuesto" : "Get Quote"}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label={isSpanish ? "Abrir menú" : "Open menu"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary ${
                      isActive(link.path) ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to={localeTogglePath}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {isSpanish ? "English" : "Español"}
                </Link>
                <a href={`tel:${businessInfo.phoneRaw}`} className="flex items-center space-x-2 text-lg font-medium pt-4 border-t">
                  <Phone className="h-5 w-5" />
                  <span>{businessInfo.phone}</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
};