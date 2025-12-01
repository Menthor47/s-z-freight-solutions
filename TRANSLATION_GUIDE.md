# Spanish Translation Implementation Guide

## Overview
The website now supports both English and Spanish. A complete translation system has been implemented with:

- **Translation File**: `src/lib/translations.ts` - Contains all English and Spanish text
- **Language Context**: `src/contexts/LanguageContext.tsx` - Manages language state globally
- **Translation Hook**: `src/hooks/useTranslation.ts` - Easy access to translations in components
- **Language Switcher**: `src/components/LanguageSwitcher.tsx` - UI component to switch languages
- **Navigation Updated**: `src/components/Navigation.tsx` - Now uses translations and includes language switcher

## How to Use Translations in Components

### Basic Usage
```tsx
import { useTranslation } from "@/hooks/useTranslation";

export const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("home.heroTitle")}</h1>
      <p>{t("home.heroDescription")}</p>
    </div>
  );
};
```

### Translation Path Structure
Translations are organized by page/section:
- `nav.*` - Navigation items
- `home.*` - Home page content
- `services.*` - Services page content
- `about.*` - About page content
- `contact.*` - Contact page content
- `getQuote.*` - Get Quote page content
- `trackShipment.*` - Track Shipment page content
- `relocation.*` - Relocation page content
- `footer.*` - Footer content
- `common.*` - Common/shared text

## Pages That Need Translation Updates

The following pages need to be updated to use the translation system:

### 1. **Index.tsx** (Home Page)
- Replace hardcoded strings with `t()` calls
- Key sections: hero, services, relocation, testimonials, CTA

### 2. **Services.tsx**
- All service descriptions, FAQs, and labels

### 3. **About.tsx**
- Company story, values, stats, certifications

### 4. **Contact.tsx**
- Form labels, contact information, business hours

### 5. **GetQuote.tsx**
- All form labels, step titles, validation messages

### 6. **TrackShipment.tsx**
- Search form, tracking results, status labels

### 7. **Relocation.tsx**
- Service descriptions, process steps, FAQs

### 8. **Footer.tsx**
- Footer links and content

### 9. **Components**
- InstantQuoteForm.tsx
- ServiceCard.tsx
- Testimonials.tsx
- TrustSignals.tsx
- And others

## Implementation Pattern

For each component, follow this pattern:

```tsx
import { useTranslation } from "@/hooks/useTranslation";

export const ComponentName = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Replace all hardcoded strings with t() calls */}
      <h1>{t("section.key")}</h1>
      <p>{t("section.description")}</p>
      <button>{t("common.submit")}</button>
    </div>
  );
};
```

## Adding New Translations

1. Open `src/lib/translations.ts`
2. Add the new text to both `en` and `es` sections
3. Use the same key path in both languages
4. Use the `t()` hook in your component

Example:
```typescript
export const translations = {
  en: {
    mySection: {
      myKey: "English text here",
    },
  },
  es: {
    mySection: {
      myKey: "Texto en español aquí",
    },
  },
};
```

## Language Persistence

- Language preference is saved to localStorage
- User's choice persists across sessions
- Defaults to English if no preference is set

## Language Switcher

The language switcher is now visible in the navigation bar (desktop view):
- Shows EN/ES buttons
- Clicking switches the language immediately
- All content updates automatically

## Next Steps

1. Update each page component to use the translation system
2. Replace all hardcoded English strings with `t()` calls
3. Test both English and Spanish versions
4. Verify all pages display correctly in both languages

## Example: Converting a Component

**Before:**
```tsx
export const MyComponent = () => {
  return (
    <div>
      <h1>Welcome to Our Services</h1>
      <p>Choose the service that fits your needs</p>
      <button>Get Quote</button>
    </div>
  );
};
```

**After:**
```tsx
import { useTranslation } from "@/hooks/useTranslation";

export const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("services.pageTitle")}</h1>
      <p>{t("services.pageDescription")}</p>
      <button>{t("nav.getQuote")}</button>
    </div>
  );
};
```

## Testing

To test the translation system:
1. Click the language switcher in the navigation
2. Verify all text changes to Spanish
3. Refresh the page - language preference should persist
4. Check all pages in both languages

## Notes

- All translations are complete in `src/lib/translations.ts`
- The system is ready to use - just update components to use it
- No additional dependencies were added
- The translation system is lightweight and performant
