import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useLocale } from "@/hooks/useLocale";
import { SEO_DEFAULTS as SEO_DEFAULTS_EN, BUSINESS_INFO as BUSINESS_INFO_EN } from "@/lib/constants";
import { SEO_DEFAULTS as SEO_DEFAULTS_ES } from "@/lib/constants.es";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

export const SEO = ({
  title: propTitle,
  description: propDescription,
  keywords: propKeywords,
  ogImage = "/hero-truck.jpg",
  ogType = "website",
}: SEOProps) => {
  const { isSpanish, locale } = useLocale();
  const location = useLocation();
  const SEO_DEFAULTS = isSpanish ? SEO_DEFAULTS_ES : SEO_DEFAULTS_EN;
  
  const title = propTitle || SEO_DEFAULTS.title;
  const description = propDescription || SEO_DEFAULTS.description;
  const keywords = propKeywords || SEO_DEFAULTS.keywords;
  
  const fullTitle = title.includes("S&Z") ? title : `${title} | ${SEO_DEFAULTS.siteName}`;
  
  const baseUrl = BUSINESS_INFO_EN.website;
  const currentPath = location.pathname;
  const canonicalUrl = `${baseUrl}${currentPath}`;
  
  const alternateEnPath = isSpanish 
    ? currentPath.replace(/^\/es/, "") || "/" 
    : currentPath;
  const alternateEsPath = isSpanish 
    ? currentPath 
    : currentPath === "/" ? "/es" : `/es${currentPath}`;
  
  return (
    <Helmet>
      {/* Language */}
      <html lang={locale} />
      
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:locale" content={isSpanish ? "es_ES" : "en_US"} />
      <meta property="og:locale:alternate" content={isSpanish ? "en_US" : "es_ES"} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}${ogImage}`} />

      {/* Canonical & Hreflang */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${alternateEnPath}`} />
      <link rel="alternate" hrefLang="es" href={`${baseUrl}${alternateEsPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${alternateEnPath}`} />
    </Helmet>
  );
};
