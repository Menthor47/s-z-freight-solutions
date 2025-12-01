/**
 * Business Constants
 * Centralized business information to ensure consistency across the website
 */

export const BUSINESS_INFO = {
  // Company Details
  name: "S&Z TRADING INTERNATIONAL S.C.A.",
  shortName: "S&Z Trading",
  tagline: "Professional Freight & Logistics Solutions",
  
  // Contact Information
  phone: "+34 684 48 24 40",
  phoneRaw: "+34684482440", // For tel: links
  email: "esoffice@szitrans.com",
  
  // Location
  city: "Málaga",
  country: "Spain",
  countryCode: "ES",
  
  // Web
  website: "https://szitrans.com",
  
  // Company Info
  foundedYear: 2022,
  
  // Social Media (add when available)
  social: {
    facebook: "#",
    linkedin: "#",
    twitter: "#",
  },
  
  // Business Hours
  hours: {
    weekday: { open: "08:00", close: "18:00" },
    saturday: { open: "09:00", close: "13:00" },
    sunday: "Closed",
    emergency: "24/7",
  },
} as const;

/**
 * Service Pricing Base Rates
 * Used for quote calculations
 */
export const SERVICE_RATES = {
  "spanish-road": 150,
  "european-road": 450,
  relocation: 800,
  global: 1200,
  warehousing: 200,
  consultancy: 500,
} as const;

/**
 * Quote Calculation Constants
 */
export const QUOTE_CALCULATION = {
  weightFactor: 0.5, // € per kg
  specialRequirementCost: 50, // € per requirement
} as const;

/**
 * SEO Constants
 */
export const SEO_DEFAULTS = {
  siteName: "S&Z TRADING INTERNATIONAL S.C.A.",
  title: "Professional Freight & Logistics Solutions",
  description: "Reliable freight transport across Spain and Europe. Road freight, warehousing, relocation services, global logistics, and supply chain consultancy. Get instant quotes 24/7.",
  keywords: "freight transport, logistics Spain, European road freight, warehousing, supply chain, cargo transport, business relocation, S&Z Trading International",
  ogImage: "/hero-truck.jpg",
} as const;

/**
 * Service Types
 */
export const SERVICE_TYPES = {
  SPANISH_ROAD: "spanish-road",
  EUROPEAN_ROAD: "european-road",
  RELOCATION: "relocation",
  GLOBAL: "global",
  WAREHOUSING: "warehousing",
  CONSULTANCY: "consultancy",
} as const;

/**
 * Special Requirements Options
 */
export const SPECIAL_REQUIREMENTS = [
  "Temperature Controlled",
  "Fragile Items",
  "Hazardous Materials",
  "Oversized Load",
  "Express Delivery",
  "Insurance Required",
] as const;
