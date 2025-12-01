# Translation Implementation Checklist

## ✅ Completed
- [x] Translation file (`src/lib/translations.ts`) - All 1000+ strings translated
- [x] Language Context (`src/contexts/LanguageContext.tsx`)
- [x] Translation Hook (`src/hooks/useTranslation.ts`)
- [x] Language Switcher Component (`src/components/LanguageSwitcher.tsx`)
- [x] App.tsx - LanguageProvider wrapper added
- [x] Navigation.tsx - Fully translated with language switcher
- [x] Index.tsx (Home Page) - Fully translated

## 📋 To Do - Pages

### [ ] Services.tsx
**Translations to add:**
- Page title and description
- All 6 service cards (title, description, coverage, delivery time, benefits, price range)
- FAQ section (title, description, all Q&A pairs)
- CTA section

**Key translation paths:**
- `services.pageTitle`
- `services.spanishRoad` through `services.consultancy`
- `services.faqTitle`, `services.faqDesc`
- `services.whatRegions`, `services.whatRegionsAns`, etc.

### [ ] About.tsx
**Translations to add:**
- Page title and description
- "Our Story" section (3 paragraphs)
- "Why Choose Us" section (4 cards)
- Stats section (4 stats)
- Certifications section

**Key translation paths:**
- `about.pageTitle`
- `about.ourStory`, `about.storyP1`, `about.storyP2`, `about.storyP3`
- `about.whyChoose` and all value cards
- `about.yearsInBusiness`, etc.

### [ ] Contact.tsx
**Translations to add:**
- Page title and description
- Form labels (Name, Email, Phone, Company, Message)
- Form buttons and validation messages
- Contact information cards (address, phone, email, hours)

**Key translation paths:**
- `contact.pageTitle`
- `contact.name`, `contact.email`, `contact.phone`, etc.
- `contact.headOffice`, `contact.businessHours`, etc.

### [ ] GetQuote.tsx
**Translations to add:**
- Page title and description
- All step titles (1-5)
- Form field labels
- Button labels (Back, Continue, Submit)
- Validation messages
- Success screen text
- Estimated quote display

**Key translation paths:**
- `getQuote.pageTitle`
- `getQuote.selectService`, `getQuote.routeDetails`, etc.
- `getQuote.back`, `getQuote.continue`, `getQuote.submitQuote`

### [ ] TrackShipment.tsx
**Translations to add:**
- Page title and description
- Search form labels and placeholder
- Tracking results labels
- Status messages
- Error messages

**Key translation paths:**
- `trackShipment.pageTitle`
- `trackShipment.trackingNumber`, `trackShipment.track`
- `trackShipment.shipmentStatus`, `trackShipment.shipmentDetails`

### [ ] Relocation.tsx
**Translations to add:**
- Page title and description
- Service description
- "Why Choose" section (4 cards)
- Process steps (5 steps)
- FAQ section
- CTA section

**Key translation paths:**
- `relocation.pageTitle`
- `relocation.whyChoose` and all cards
- `relocation.consultation`, `relocation.planning2`, etc.
- `relocation.faq` and all Q&A

### [ ] Footer.tsx
**Translations to add:**
- Section titles (Quick Links, Services, Contact Us)
- All footer links
- Company description
- Contact information

**Key translation paths:**
- `footer.quickLinks`, `footer.services`, `footer.contactUs`
- `footer.professional`, `footer.copyright`

## 📋 To Do - Components

### [ ] InstantQuoteForm.tsx
**Translations to add:**
- Form title and description
- Field labels (Origin City, Destination City, Weight, Service Type)
- Button label

**Key translation paths:**
- `services.originCity`, `services.destinationCity`, etc.

### [ ] ServiceCard.tsx
- May need to handle dynamic content from parent

### [ ] Testimonials.tsx
**Translations to add:**
- Section title
- Testimonial text (if hardcoded)

### [ ] TrustSignals.tsx
**Translations to add:**
- Section title
- All signal cards

### [ ] PageBreadcrumbs.tsx
- Receives labels as props, should work as-is

### [ ] Other Components
- Check for any hardcoded text in:
  - Accordion content
  - Card titles
  - Button labels
  - Placeholder text

## 🔄 Implementation Pattern

For each file, follow this pattern:

```tsx
// 1. Import the hook
import { useTranslation } from "@/hooks/useTranslation";

// 2. Call the hook in your component
const MyComponent = () => {
  const { t } = useTranslation();

  // 3. Replace hardcoded strings
  return (
    <div>
      <h1>{t("section.key")}</h1>
      <p>{t("section.description")}</p>
    </div>
  );
};
```

## ✨ Tips

1. **Consistency**: Use the same translation key paths across components
2. **Organization**: Keep translations organized by page/section
3. **Testing**: After each update, test both EN and ES versions
4. **localStorage**: Language preference persists automatically
5. **Performance**: Translation system is lightweight, no performance impact

## 🚀 Quick Start

To update a page:
1. Add `import { useTranslation } from "@/hooks/useTranslation";`
2. Add `const { t } = useTranslation();` in component
3. Replace all hardcoded strings with `t("path.to.key")`
4. Test in browser by clicking language switcher

## 📊 Progress

- **Completed**: 2/15 pages (Home, Navigation)
- **Remaining**: 13 pages/components
- **Total Strings**: 1000+
- **Languages**: English, Spanish
