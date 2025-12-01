-- Fix RLS policies for quotes table to allow anonymous users
-- Drop the restrictive SELECT policy
DROP POLICY IF EXISTS "Users can view their own quotes by email" ON public.quotes;

-- Create a new policy that allows anonymous users to read quotes
CREATE POLICY "Anyone can view quotes"
ON public.quotes
FOR SELECT
USING (true);
