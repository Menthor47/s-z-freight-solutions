import { Helmet } from "react-helmet-async";

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FreightCompany",
    "name": "S&Z Trading International",
    "image": "https://sztrading.com/hero-truck.jpg",
    "description": "Professional freight and logistics services across Spain and Europe. Specializing in road transport, warehousing, and global shipping solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Principal 123",
      "addressLocality": "Madrid",
      "postalCode": "28001",
      "addressCountry": "ES"
    },
    "telephone": "+34900123456",
    "email": "info@sztrading.com",
    "url": "https://sztrading.com",
    "priceRange": "€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Spain"
      },
      {
        "@type": "Country",
        "name": "France"
      },
      {
        "@type": "Country",
        "name": "Germany"
      },
      {
        "@type": "Country",
        "name": "Netherlands"
      },
      {
        "@type": "Country",
        "name": "Belgium"
      },
      {
        "@type": "Country",
        "name": "United Kingdom"
      },
      {
        "@type": "Country",
        "name": "Italy"
      },
      {
        "@type": "Country",
        "name": "Portugal"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
