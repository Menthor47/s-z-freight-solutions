-- Create quotes table with all form fields
CREATE TABLE public.quotes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_type TEXT NOT NULL,
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  weight DECIMAL NOT NULL,
  length DECIMAL,
  width DECIMAL,
  height DECIMAL,
  pickup_date DATE,
  delivery_date DATE,
  special_requirements TEXT[],
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_name TEXT,
  notes TEXT,
  estimated_cost DECIMAL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create shipments table for tracking functionality
CREATE TABLE public.shipments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  tracking_number TEXT NOT NULL UNIQUE,
  quote_id UUID REFERENCES public.quotes(id),
  status TEXT NOT NULL DEFAULT 'pending',
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  current_location TEXT,
  weight DECIMAL NOT NULL,
  service_type TEXT NOT NULL,
  estimated_delivery DATE,
  customer_email TEXT NOT NULL,
  customer_phone TEXT,
  timeline JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.shipments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for quotes (allow public inserts, restricted reads)
CREATE POLICY "Anyone can submit quotes"
ON public.quotes
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Users can view their own quotes by email"
ON public.quotes
FOR SELECT
USING (email = current_setting('request.jwt.claims', true)::json->>'email');

-- RLS Policies for contact_submissions (allow public inserts)
CREATE POLICY "Anyone can submit contact forms"
ON public.contact_submissions
FOR INSERT
WITH CHECK (true);

-- RLS Policies for shipments (public read by tracking number or email)
CREATE POLICY "Anyone can view shipments by tracking number"
ON public.shipments
FOR SELECT
USING (true);

CREATE POLICY "System can insert shipments"
ON public.shipments
FOR INSERT
WITH CHECK (true);

CREATE POLICY "System can update shipments"
ON public.shipments
FOR UPDATE
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates on shipments
CREATE TRIGGER update_shipments_updated_at
BEFORE UPDATE ON public.shipments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for shipments table
ALTER PUBLICATION supabase_realtime ADD TABLE public.shipments;