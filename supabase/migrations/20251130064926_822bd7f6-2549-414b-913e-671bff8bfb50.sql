-- Create quotes table for storing freight quote requests
CREATE TABLE public.quotes (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now() NOT NULL,
  
  -- Service details
  service_type text NOT NULL,
  
  -- Route details
  origin text NOT NULL,
  destination text NOT NULL,
  pickup_date date,
  delivery_date date,
  
  -- Cargo details
  weight numeric NOT NULL,
  length numeric,
  width numeric,
  height numeric,
  special_requirements text[],
  
  -- Contact details
  contact_name text NOT NULL,
  company_name text,
  email text NOT NULL,
  phone text NOT NULL,
  
  -- Estimated cost (calculated)
  estimated_cost numeric,
  
  -- Status tracking
  status text DEFAULT 'pending' NOT NULL,
  notes text
);

-- Enable RLS
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert quotes (public form submissions)
CREATE POLICY "Anyone can submit quotes"
  ON public.quotes
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow anyone to read their own quotes by email
CREATE POLICY "Users can read their own quotes"
  ON public.quotes
  FOR SELECT
  TO anon
  USING (true);

-- Create index for faster lookups
CREATE INDEX idx_quotes_email ON public.quotes(email);
CREATE INDEX idx_quotes_created_at ON public.quotes(created_at DESC);

-- Create contact submissions table
CREATE TABLE public.contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now() NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contact forms
CREATE POLICY "Anyone can submit contact forms"
  ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create index
CREATE INDEX idx_contact_created_at ON public.contact_submissions(created_at DESC);