/**
 * Constantes del Negocio
 * Información centralizada del negocio para garantizar la coherencia en todo el sitio web
 */

export const BUSINESS_INFO = {
  // Detalles de la empresa
  name: "S&Z TRADING INTERNATIONAL S.C.A.",
  shortName: "S&Z Trading",
  tagline: "Soluciones Profesionales de Transporte y Logística",
  
  // Información de contacto
  phone: "+34 684 48 24 40",
  phoneRaw: "+34684482440", // Para enlaces tel:
  email: "esoffice@szitrans.com",
  
  // Ubicación
  city: "Málaga",
  country: "España",
  countryCode: "ES",
  
  // Web
  website: "https://szitrans.com",
  
  // Información de la empresa
  foundedYear: 2022,
  
  // Redes Sociales (agregar cuando estén disponibles)
  social: {
    facebook: "#",
    linkedin: "#",
    twitter: "#",
  },
  
  // Horario comercial
  hours: {
    weekday: { open: "08:00", close: "18:00" },
    saturday: { open: "09:00", close: "13:00" },
    sunday: "Cerrado",
    emergency: "24/7",
  },
} as const;

/**
 * Tarifas base de servicios
 * Se utilizan para los cálculos de cotización
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
 * Constantes para el cálculo de cotizaciones
 */
export const QUOTE_CALCULATION = {
  weightFactor: 0.5, // € por kg
  specialRequirementCost: 50, // € por requisito
} as const;

/**
 * Constantes SEO
 */
export const SEO_DEFAULTS = {
  siteName: "S&Z TRADING INTERNATIONAL S.C.A.",
  title: "Soluciones Profesionales de Transporte y Logística",
  description: "Transporte de mercancías fiable en toda España y Europa. Transporte por carretera, almacenaje, servicios de reubicación, logística global y consultoría de cadena de suministro. Obtenga presupuestos al instante 24/7.",
  keywords: "transporte de mercancías, logística España, transporte por carretera europeo, almacenaje, cadena de suministro, transporte de carga, reubicación de empresas, S&Z Trading International",
  ogImage: "/hero-truck.jpg"
} as const;

/**
 * Tipos de servicios
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
 * Opciones de requisitos especiales
 */
export const SPECIAL_REQUIREMENTS = [
  "Control de temperatura",
  "Artículos frágiles",
  "Materiales peligrosos",
  "Carga de gran tamaño",
  "Entrega exprés",
  "Seguro requerido",
] as const;