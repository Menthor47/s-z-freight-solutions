import { z } from "zod";

/**
 * Schema de validación para el formulario de presupuesto (Español)
 */
export const quoteFormSchemaEs = z.object({
  serviceType: z.string().min(1, "El tipo de servicio es obligatorio"),
  origin: z.string().min(2, "El origen es obligatorio").max(100, "El origen es demasiado largo"),
  destination: z.string().min(2, "El destino es obligatorio").max(100, "El destino es demasiado largo"),
  pickupDate: z.string().optional(),
  deliveryDate: z.string().optional(),
  weight: z.string().min(1, "El peso es obligatorio").refine(
    (val) => !isNaN(Number(val)) && Number(val) > 0,
    "El peso debe ser un número positivo"
  ),
  length: z.string().optional(),
  width: z.string().optional(),
  height: z.string().optional(),
  specialRequirements: z.array(z.string()),
  contactName: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es demasiado largo"),
  companyName: z.string().max(100, "El nombre de empresa es demasiado largo").optional(),
  email: z.string().email("Correo electrónico no válido").max(255, "El correo es demasiado largo"),
  phone: z.string().min(7, "El teléfono debe tener al menos 7 caracteres").max(20, "El teléfono es demasiado largo"),
});

/**
 * Schema de validación para el formulario de contacto (Español)
 */
export const contactFormSchemaEs = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre es demasiado largo"),
  email: z.string().email("Correo electrónico no válido").max(255, "El correo es demasiado largo"),
  phone: z.string().max(20, "El teléfono es demasiado largo").optional(),
  company: z.string().max(100, "El nombre de empresa es demasiado largo").optional(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000, "El mensaje es demasiado largo"),
});

export type QuoteFormDataEs = z.infer<typeof quoteFormSchemaEs>;
export type ContactFormDataEs = z.infer<typeof contactFormSchemaEs>;
