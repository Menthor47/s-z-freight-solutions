import { z } from "zod";

// Quote form validation schema
export const quoteFormSchema = z.object({
  serviceType: z.string().min(1, "Service type is required"),
  origin: z.string().min(2, "Origin is required").max(100, "Origin is too long"),
  destination: z.string().min(2, "Destination is required").max(100, "Destination is too long"),
  pickupDate: z.string().optional(),
  deliveryDate: z.string().optional(),
  weight: z.string().min(1, "Weight is required").refine(
    (val) => !isNaN(Number(val)) && Number(val) > 0,
    "Weight must be a positive number"
  ),
  length: z.string().optional(),
  width: z.string().optional(),
  height: z.string().optional(),
  specialRequirements: z.array(z.string()),
  contactName: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  companyName: z.string().max(100, "Company name is too long").optional(),
  email: z.string().email("Invalid email address").max(255, "Email is too long"),
  phone: z.string().min(7, "Phone number must be at least 7 characters").max(20, "Phone number is too long"),
});

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Invalid email address").max(255, "Email is too long"),
  phone: z.string().max(20, "Phone number is too long").optional(),
  company: z.string().max(100, "Company name is too long").optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message is too long"),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
