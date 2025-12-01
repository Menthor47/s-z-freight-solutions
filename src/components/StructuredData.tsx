import { Helmet } from "react-helmet-async";
import { useLocale } from "@/hooks/useLocale";
import { BUSINESS_INFO as BUSINESS_INFO_EN } from "@/lib/constants";
import { BUSINESS_INFO as BUSINESS_INFO_ES } from "@/lib/constants.es";

export const LocalBusinessSchema = () => {
  const { isSpanish } = useLocale();
  const businessInfo = isSpanish ? BUSINESS_INFO_ES : BUSINESS_INFO_EN;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FreightCompany",
    "name": businessInfo.name,
    "image": "https://szitrans.com/hero-truck.jpg",
    "description": isSpanish
      ? "Servicios profesionales de transporte y logística en España y Europa. Especialistas en transporte por carretera, almacenaje, reubicaciones y envíos globales."
      : "Professional freight and logistics services across Spain and Europe. Specializing in road transport, warehousing, relocation services, and global shipping solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": businessInfo.city,
      "addressCountry": businessInfo.countryCode
    },
    "telephone": businessInfo.phone,
    "email": businessInfo.email,
    "url": "https://szitrans.com",
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

export const ServicesFaqSchema = () => {
  const { isSpanish } = useLocale();

  const schemaEn = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What regions do you cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are based in Spain and operate across major European corridors. Our core network covers Spain, Portugal, France, Germany, the Benelux countries, Italy, and the UK, with partners providing onward connections to the rest of Europe."
        }
      },
      {
        "@type": "Question",
        "name": "What types of goods do you transport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We handle palletised goods, full and part truck loads, machinery, retail stock, e-commerce shipments, and general industrial cargo. For hazardous, temperature-controlled, or unusual loads, we confirm the safest solution for your case."
        }
      },
      {
        "@type": "Question",
        "name": "Are my shipments insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All shipments are covered by standard carrier liability, and we can arrange extended insurance for high-value or sensitive cargo on request. Share the approximate value when requesting a quote so we can propose the right cover."
        }
      },
      {
        "@type": "Question",
        "name": "How do I request a quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can request a quote via our online Get Quote form, by emailing us your shipment details, or by calling our team. Provide origin, destination, dates, approximate weight or volume, and any special requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What kind of relocations do you handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We manage business relocations of all sizes, from small offices to warehouses and light industrial sites. Depending on your needs, we can also support selected residential moves linked to corporate relocations."
        }
      },
      {
        "@type": "Question",
        "name": "Can you move us outside normal business hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Many clients prefer evening or weekend moves to avoid disruption. We can plan relocations outside standard office hours, including phased moves over several days."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide packing materials and packing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We can supply boxes, crates, wrapping materials, labels, and provide full packing and unpacking services. You decide what your team will handle and what you would like us to manage."
        }
      },
      {
        "@type": "Question",
        "name": "What information do you need for a relocation quote?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For an accurate relocation quote, we usually ask for current and new addresses, preferred move dates, approximate size of the premises, any heavy or specialist equipment, access details, and whether you need packing or unpacking services."
        }
      }
    ]
  };

  const schemaEs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué regiones cubren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Operamos desde España a través de los principales corredores europeos. Nuestra red cubre España, Portugal, Francia, Alemania, Benelux, Italia y Reino Unido, con conexiones al resto de Europa."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipos de mercancías transportan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manejamos mercancía paletizada, cargas completas y parciales, maquinaria, stock minorista, envíos de e-commerce y carga industrial. Para cargas peligrosas, con temperatura controlada o especiales, confirmamos la mejor solución."
        }
      },
      {
        "@type": "Question",
        "name": "¿Mis envíos están asegurados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Todos los envíos están cubiertos por responsabilidad estándar del transportista. Podemos organizar seguros extendidos para cargas de alto valor o sensibles. Indica el valor aproximado al solicitar presupuesto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo solicito un presupuesto?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puedes solicitar presupuesto a través de nuestro formulario online, enviando los detalles por email o llamando a nuestro equipo. Proporciona origen, destino, fechas, peso o volumen aproximado y requisitos especiales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué tipo de reubicaciones manejan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gestionamos reubicaciones empresariales de todos los tamaños, desde pequeñas oficinas hasta almacenes e instalaciones industriales ligeras. También podemos apoyar mudanzas residenciales vinculadas a traslados corporativos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Pueden realizar mudanzas fuera del horario laboral?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Muchos clientes prefieren mudanzas por la noche o en fin de semana para minimizar interrupciones. Planificamos reubicaciones fuera del horario estándar, incluyendo mudanzas por fases."
        }
      },
      {
        "@type": "Question",
        "name": "¿Proporcionan materiales y servicios de embalaje?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Podemos suministrar cajas, embalajes, materiales de protección, etiquetas y ofrecer servicios completos de embalaje y desembalaje. Tú decides qué gestiona tu equipo y qué nos encargamos nosotros."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué información necesitan para un presupuesto de reubicación?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para un presupuesto de reubicación preciso, solicitamos direcciones actuales y nuevas, fechas preferidas, tamaño aproximado de las instalaciones, equipos pesados o especiales, detalles de acceso y si necesitas servicios de embalaje."
        }
      }
    ]
  };

  const schema = isSpanish ? schemaEs : schemaEn;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
