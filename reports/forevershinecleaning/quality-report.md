# Website Quality Report: forevershinecleaning.com
**Audited:** 2026-05-04  
**Platform:** Drupal 11 (custom theme: `forever-shine-theme`)  
**Audit Scope:** Homepage + Services page  
**Overall Grade: B+**

---

## Score Summary

| Category | Grade | Key Issue |
|---|---|---|
| SEO | B+ | Incomplete title tag, missing schema/structured data, no sitemap link |
| Code Quality | A- | Clean semantic HTML, minimal JS, good accessibility |
| Performance | B | Excellent images (WebP + lazy load), self-hosted (no CDN) |
| Content Quality | A- | Compelling copy, strong CTAs, verified reviews — missing FAQ/pricing |
| Local SEO | A | NAP present, geo-tags correct, prominent phone/email |
| Accessibility | B+ | 98.7% image alt coverage, proper ARIA, skip link |

---

## 1. SEO

### Title Tag
- **Current:** `"forevershinecleaning.com -"` (28 chars)
- **Issue:** Incomplete, generic, no keyword. Should be 50–60 chars describing the business and location.
- **Recommended:** `"Exterior Cleaning Services in Palatine, IL | Forever Shine"`

### Meta Description
- **Current:** `"Forever Shine Exterior Cleaning provides professional power washing, soft washing, gutter cleaning, and more in Palatine, IL and the Northwest Suburbs of"` (truncated mid-sentence)
- **Issue:** Sentence cut off — bad UX and Google may rewrite it. Max 155–160 chars.
- **Recommended:** Close the sentence and keep under 155 chars.

### Open Graph / Social Sharing
- `og:title` / `twitter:title`: Same incomplete title — needs fix
- `og:image`: Using square logo (`cropped-Forever-Shine-Badge.png`) — OG image should be 1.91:1 landscape ratio for proper Twitter card and Facebook preview
- `og:description` / `twitter:description`: OK — `"Professional exterior cleaning in Palatine, IL and the Northwest Suburbs of Chicago."`
- `og:url` and `og:type: website`: Correct

### Canonical URL
- Present and correct: `https://forevershinecleaning.com/`

### Heading Structure
- **H1 (1):** `"FOREVER SHINE"` — correct, single H1
- **H2 (7):** EXTERIOR CLEANING / OUR SERVICES / ABOUT US / SEE THE DIFFERENCE / SERVICE VIDEOS / WHAT OUR CUSTOMERS SAY / Ready to Transform Your Property?
- **H3 (13):** All 8 service names (duplicated across two sections)
- **Assessment:** Logical hierarchy, good depth

### Images & Alt Tags
- 78 total images — 77/78 have alt text (98.7%)
- The 1 missing alt is on a decorative element marked `aria-hidden="true"` — acceptable
- Alt text is descriptive and specific

### Structured Data (Schema.org)
- **JSON-LD blocks found: 0** — this is a major gap
- Missing schema types that would unlock rich results:
  - `LocalBusiness` (address, hours, phone, service area)
  - `Organization`
  - `AggregateRating` (despite 45+ visible Google reviews)
  - `Service` (for each service offering)
  - `VideoObject` (5 demo videos present but unmarked)

### Robots & Crawlability
- `robots` meta: `"max-image-preview:large, index, follow"` — good
- No `sitemap.xml` or `robots.txt` reference found in HTML
- XML sitemap should be submitted to Google Search Console regardless

### External Links
- Facebook and Instagram linked in footer
- No Google Business Profile link
- LinkedIn referenced in footer HTML but points to Facebook URL — broken/incorrect

---

## 2. Code Quality

### Platform
- **CMS:** Drupal 11
- **Theme:** Custom `forever-shine-theme` (not a page builder)
- Full code control — not Wix/Squarespace/Webflow

### HTML
- No deprecated tags detected
- 82 inline styles (mostly for CSS custom property animations like lens flares — reasonable)
- 294 `<div>` elements — moderate, not div soup
- Semantic elements used correctly: `<header>`, `<nav>`, `<main id="main-content">`, `<footer>`, `<section>`

### JavaScript
- **External scripts: 0** — excellent
- No jQuery, React, Vue, Angular, or other large frameworks detected
- Animations handled via CSS custom properties
- Google AdSense account associated (`ca-host-pub-2644536267352236`) and Site Kit integration detected (async injected, not render-blocking)

### CSS
- No Bootstrap or Tailwind detected — custom CSS
- No render-blocking stylesheets detected in `<head>`
- Likely uses Critical CSS or inline delivery

### Viewport & Charset
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` — correct
- Charset UTF-8 declared

### Accessibility
- Skip-to-content link present: `"Skip to content"` → `#main-content`
- 28 ARIA labels, 22 ARIA roles used appropriately
- Decorative elements marked `aria-hidden="true"`
- No form labels audited on homepage (contact form is on a separate page)
- Heading hierarchy correct for assistive technology

---

## 3. Performance

### Images
- **WebP:** 22 images (55% of image assets) — modern format, fast
- **JPEG:** 3 images
- **PNG:** 9 images (consider converting to WebP)
- **Lazy loading:** 74/78 images use `loading="lazy"` — 94.9% coverage
- Above-fold hero images are not lazy-loaded (correct behavior)

### Videos
- 5 MP4 videos self-hosted, served from `/storage/`
- Hero video: desktop uses `.m4v`, mobile uses `.mp4` (separate assets per device)
- All videos are autoplay + muted + looping with poster images — good UX
- Consider adding WebM fallback for additional browser compatibility

### CDN
- None detected — all assets served from `forevershinecleaning.com/storage/`
- Not critical for a local service area business, but would improve load times

### External Dependencies
- 0 external JS scripts on page load — excellent for performance
- Fonts appear to be system-stack (no Google Fonts, no @font-face overhead)

---

## 4. Content Quality

### Homepage Word Count
- ~1,001 words (HTML-derived) / ~1,308 words (markdown)
- Sufficient for a service business homepage

### Messaging & CTAs
- Hero: `"FOREVER SHINE"` + `"EXTERIOR CLEANING"` + `"Unbreakable Standards"` — strong, memorable
- 6 CTA instances:
  - "Get Your Free Quote" (×3)
  - "View Our Services" (×1)
  - "(847) 602-4064" (×2, top bar + mobile nav)
- Conversion paths are clear and low-friction

### NAP (Local SEO)
- **Name:** Forever Shine (also "Magner Power Wash" in some customer reviews — **brand inconsistency**)
- **Address:** Palatine, IL and Northwest Suburbs of Chicago (region-level, not street address — acceptable for mobile service business)
- **Phone:** (847) 602-4064 — visible in top bar, hero, footer, mobile nav
- **Email:** Admin@forevershinecleaning.com — visible in multiple locations

### Social Proof
- TrustIndex widget displaying 8+ verified Google reviews
- All shown reviews are 5-star
- Review content is specific and authentic
- `"Trustindex verifies that the original source of the review is Google"` badge shown

### Content Sections
1. Hero (video background + headline + CTA)
2. Services (8 offerings with icons)
3. About Us
4. See the Difference (portfolio/before-after)
5. Service Videos (5 embedded demos)
6. Customer Reviews
7. Final CTA

### What's Missing
- No FAQ section
- No pricing or pricing tier information
- No team bios or certifications/licenses
- No warranty or satisfaction guarantee statement

---

## 5. Technical Findings

### Geo-targeting
- ICBM coordinates: `42.1103, -88.0345` (Palatine, IL area — correct)
- `geo.region: US-IL` — correct
- `geo.placename: Palatine` — correct
- **Issue:** Timezone metadata set to `America/New_York` — should be `America/Chicago` for Palatine, IL

### Mobile
- Responsive viewport configured correctly
- Dedicated mobile hero video (`slider.mp4` vs desktop `slider.m4v`)
- Mobile hamburger nav with overlay present
- No PWA manifest detected (minor — not critical)
- `theme-color: #0d1b2e` (dark blue) set in meta

### Brand Consistency
- Multiple customer reviews reference `"Magner Power Wash"` — this appears to be a prior or parent business name
- Should clarify relationship or ensure all review responses reference "Forever Shine"

---

## Priority Fixes

| Priority | Action |
|---|---|
| 1 | Rewrite title tag to 50–60 chars with primary keyword + location |
| 2 | Fix meta description — complete the sentence, keep under 155 chars |
| 3 | Add JSON-LD structured data: `LocalBusiness`, `AggregateRating`, `VideoObject` |
| 4 | Add/verify XML sitemap and robots.txt |
| 5 | Replace OG image with a landscape (1.91:1) hero image for social sharing |
| 6 | Fix LinkedIn footer link (currently points to Facebook URL) |
| 7 | Clarify "Magner Power Wash" vs "Forever Shine" brand naming in reviews |
| 8 | Fix timezone metadata (`America/New_York` → `America/Chicago`) |
| 9 | Add FAQ section and team credentials/certifications |
| 10 | Consider CDN for static assets (optional for local business) |

---

## Conclusion

forevershinecleaning.com is a professionally built Drupal 11 site with strong fundamentals. Performance is excellent — WebP images, aggressive lazy loading, zero external JS, and CSS-based animations keep the page fast. The content is conversion-optimized with clear CTAs, verified Google reviews, and compelling service demos.

The primary gaps are on the SEO metadata side: the title tag is incomplete, the meta description is truncated, and there is no structured data markup at all. Adding JSON-LD schema (especially `LocalBusiness` and `AggregateRating`) is the single highest-leverage fix to improve local search visibility and unlock rich snippets. Addressing the brand name inconsistency (Magner Power Wash references) and fixing the LinkedIn link are quick wins.

With fixes to meta tags and schema implementation, this site would grade **A-** overall.
