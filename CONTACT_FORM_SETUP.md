# Contact Form Setup Guide

The contact form is fully functional and ready to use. To enable it, you need to set up a Supabase project and configure the environment variables.

## Steps to Enable Contact Form

### 1. Create a Supabase Project
- Go to [supabase.com](https://supabase.com)
- Sign up or log in
- Create a new project
- Note your project URL and public API key

### 2. Create the `contact_submissions` Table
In your Supabase dashboard, go to the SQL Editor and run:

```sql
CREATE TABLE contact_submissions (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert
CREATE POLICY "Allow anyone to insert contact submissions"
  ON contact_submissions
  FOR INSERT
  WITH CHECK (true);
```

### 3. Configure Environment Variables
- Copy `.env.example` to `.env.local`
- Add your Supabase URL and public key:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_public_key_here
```

### 4. Restart Dev Server
```bash
npm run dev
```

## Form Features
- ✅ Client-side validation using Zod schema
- ✅ Loading state with spinner
- ✅ Success/error toast notifications
- ✅ Form auto-clears after successful submission
- ✅ Error messages displayed under each field
- ✅ Responsive design

## Form Fields
- **Name** (required)
- **Email** (required, validated)
- **Phone** (optional)
- **Company** (optional)
- **Message** (required)

## Testing the Form
1. Navigate to `/contact` page
2. Fill in the form fields
3. Click "Send Message"
4. Check your Supabase dashboard under `contact_submissions` table to see the submission

## Troubleshooting
- **Form not submitting**: Check browser console for errors and verify `.env.local` has correct Supabase credentials
- **RLS errors**: Ensure the policy is created correctly in Supabase
- **Toast notifications not showing**: Verify `useToast` hook is properly imported
