# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HIFU (High-Intensity Focused Ultrasound) non-surgical facelift landing page for Amethyst Aesthetics Beauty. Built with Next.js 15 App Router, TypeScript, and Tailwind CSS. Domain: hifusomerset.co.uk

## Current Pricing (Updated Jan 2025)

| Treatment | Price |
|-----------|-------|
| Jawline Lift | £195 |
| Full Face | £395 |

- **Consultation**: £25 (redeemable against treatment cost)
- **Payment**: Klarna available (pay in 3 instalments)

## Business Details

- **Business**: Amethyst Aesthetics Beauty
- **Location**: Unit 2, Old Apple Store, New Cross Hill, South Petherton, TA13 5HV
- **Phone**: 07366 904007
- **Email**: Ismaymarianne@gmail.com
- **Practitioner**: Marianne (4+ years experience, award-finalist)

## Tracking

- **Meta Pixel ID**: 25676494561954301
- **Deployment**: Vercel

## Development Commands

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Build for production (run before deploying)
npm run lint       # Run ESLint
```

## Architecture

### Page Structure

The site is a single-page landing page with modal overlays:

- `app/page.tsx` → renders `PageWrapper` component
- `components/PageWrapper.tsx` → orchestrates all sections and manages modal state
- All booking CTAs trigger `BookingModal` with optional assessment data
- `VideoModal` handles video playback overlay

### Component Flow

`PageWrapper` manages two key state flows:
1. **Booking flow**: Any "Book Now" button sets `assessmentData.skipToCalendar = true` and opens `BookingModal`
2. **Assessment flow**: `AssessmentTool` collects skin data, passes to `BookingModal` via `onAssessmentComplete`

### Key Components

| Component | Purpose |
|-----------|---------|
| `PageWrapper.tsx` | Main orchestrator, holds booking/video modal state |
| `AssessmentTool.tsx` | Multi-step skin assessment questionnaire |
| `BookingModal.tsx` | Booking form, receives assessment data |
| `StructuredData.tsx` | JSON-LD schema markup for SEO |
| `FacebookPixel.tsx` | Meta Pixel tracking |

### API Routes

- `app/api/contact/route.ts` - Contact form POST handler (currently logs only, integrate email service as needed)

### SEO & Tracking

- Metadata in `app/layout.tsx` (title, description, OpenGraph, Twitter cards)
- `app/sitemap.ts` and `app/robots.ts` for search engines
- `components/StructuredData.tsx` for LocalBusiness schema
- Facebook Pixel in `components/FacebookPixel.tsx`

## Customization for New Clinics

### Must Change

1. `app/layout.tsx` - All metadata, business name, domain URL
2. `components/Footer.tsx` - Contact details, address, social links
3. `components/StructuredData.tsx` - Business schema data
4. `/public/images/` - Logo and all images

### Content Updates

- `PremiumHero.tsx` - Hero messaging and video
- `AboutSection.tsx` - Clinic description
- `TeamSection.tsx` - Practitioner info
- `PremiumTreatments.tsx` - Pricing
- `FAQ.tsx` - Q&A content
- `ResultsGallery.tsx` - Before/after images

### Automation Scripts

The repo includes automation for batch clinic deployments:
- `clinic-automation-agent.js` - Main orchestrator using Firecrawl
- `quality-assurance-system.js` - 36+ validation checks
- `deployment-automation.js` - Vercel/Netlify deployment

Run with: `FIRECRAWL_API_KEY=xxx node clinic-automation-agent.js --url https://clinic-site.com`

## Facebook Ad Copy (Current)

### Headline
```
Jowls Making You Look Older?
```

### Primary Text (Short Description)
```
Tired of sagging jowls staring back at you? HIFU lifts & tightens in just one session. No surgery. No downtime. Real results.
```

### Ad Copy (Full Description)
```
Still covering your neck in photos?

You're not alone. Sagging jowls and loose neck skin affect thousands of women — but surgery isn't the only answer.

HIFU uses focused ultrasound to lift and tighten from within. One session. No needles. No downtime. Results that last 1-2 years.

Choose Your Transformation:
✨ Jawline Lift — £195 (Special Offer)
💎 Full Face — £395 (Best Value)

✅ Walk in. Walk out. Get back to life.
✅ Results continue improving for months
✅ 800+ treatments completed
✅ Pay monthly with Klarna

📍 South Petherton, Somerset

£25 consultation (redeemable against treatment)

See real before & afters → hifusomerset.co.uk
```

### Alternative Headlines
- `Hate Your Neck in Photos?`
- `The 60-Minute Age Reversal`
- `Tight Skin. No Surgery. One Session.`
- `When Did Your Jawline Disappear?`