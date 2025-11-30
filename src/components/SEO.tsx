import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

export const SEO = ({
  title = "S&Z Trading - Professional Freight & Logistics Solutions",
  description = "Reliable freight transport across Spain and Europe. Road freight, warehousing, global logistics, and supply chain consultancy. Get instant quotes 24/7.",
  keywords = "freight transport, logistics Spain, European road freight, warehousing, supply chain, cargo transport, business relocation",
  ogImage = "/hero-truck.jpg",
  ogType = "website",
}: SEOProps) => {
  const fullTitle = title.includes("S&Z Trading") ? title : `${title} | S&Z Trading`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Canonical */}
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
};
