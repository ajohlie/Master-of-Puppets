# Website Quality Report: forevershinecleaning.com
**Audited:** 2026-05-05  
**Platform:** Drupal 11 (custom theme: `forever-shine-theme`)  
**Audit Scope:** Homepage  
**Tools Used:** Google PageSpeed Insights, Google Rich Results Test, WebPageTest (Catchpoint), direct robots.txt fetch, static HTML analysis

---

## Score Summary

| Category | Grade | Source |
|---|---|---|
| SEO — Metadata | C | Static HTML analysis |
| SEO — Structured Data | B- | Google Rich Results Test |
| SEO — Crawlability | A | robots.txt fetch |
| Code Quality | A- | Static HTML analysis |
| Performance | D | PageSpeed Insights (mobile: 39/100) |
| Page Weight | F | WebPageTest (44 MB total) |
| Content & Conversion | A- | Static HTML analysis |
| Local SEO | A | Geo-tags + Rich Results Test |
| Accessibility | B+ | Static HTML analysis |

---

## 1. robots.txt (Fetched Directly)

**File:** `https://forevershinecleaning.com/robots.txt`

```
User-agent: *

Sitemap: https://forevershinecleaning.com/sitemap.xml
Sitemap: https://forevershinecleaning.com/sitemap.rss
```

- All crawlers allowed (no Disallow rules) — good
- Two sitemaps declared: XML and RSS formats
- Sitemaps should be submitted/verified in Google Search Console
- **Correction from v1 of this report:** robots.txt does exist. Previous analysis incorrectly stated it was absent.

---

## 2. Google PageSpeed Insights

**Tested:** Mobile | **Score: 39 / 100 (Poor)**

> Google's threshold: 0–49 = Poor (red), 50–89 = Needs Improvement (orange), 90–100 = Good (green).

### Core Web Vitals

| Metric | Value | Threshold | Status |
|---|---|---|---|
| LCP (Largest Contentful Paint) | **6.2s** | Good < 2.5s / Poor > 4s | FAIL (Poor) |
| CLS (Cumulative Layout Shift) | **0.078** | Good < 0.1 | PASS |
| INP (Interaction to Next Paint) | **300ms** | Good < 200ms | Needs Improvement |
| FCP (First Contentful Paint) | **1.0s** | Good < 1.8s | PASS |
| TTFB (Time to First Byte) | **119ms** | Good < 800ms | PASS |
| Speed Index | **7.9s** | — | Poor |
| Total Blocking Time | **3,040ms** | Good < 200ms | FAIL (Very Poor) |

### Opportunities (Potential Savings)

| Opportunity | Est. Savings |
|---|---|
| Efficient cache lifetimes | 913 KiB |
| Reduce unused JavaScript | 320 KiB |
| Improve image delivery | 405 KiB |
| Reduce unused CSS | 14 KiB |
| Remove legacy JavaScript | 22 KiB |

### Diagnostics

| Diagnostic | Value |
|---|---|
| Minimize main-thread work | 10.4s |
| Reduce JavaScript execution time | 5.7s |
| Avoid chaining critical requests | Max critical path: 2,539ms |
| Forced reflow | 150ms unattributed |
| Non-composited animations | Detected |
| Enormous network payloads | Detected |

### Passed Audits (Notable)
- Document request latency
- Minify CSS / Minify JavaScript
- No render-blocking requests
- Viewport configured for mobile
- Font display strategy

**Summary:** The 39/100 mobile score is driven primarily by the hero video (~slider.m4v) which pushes LCP to 6.2s and contributes to the enormous page weight. Total Blocking Time of 3,040ms is the most critical issue — this is driven by heavy JavaScript execution despite no visible third-party scripts in the initial HTML (GTM, MonsterInsights, AIOSEO, and LiteSpeed scripts are injected at runtime).

**Note:** Desktop PSI data was present but incomplete in this test run. WebPageTest (below) provides the desktop view.

---

## 3. Google Rich Results Test

**Result: 3 valid items detected** (crawled May 5, 2026, 12:41 AM UTC)

**Correction from v1 of this report:** Previous analysis stated "0 JSON-LD blocks found." This was incorrect. AIOSEO (All in One SEO) generates JSON-LD at runtime via the CMS. Google confirmed it is present and valid.

### Detected Structured Data

| Schema Type | Status | Issues |
|---|---|---|
| Breadcrumbs | 1 valid item | Contains "Hello world!" and "/category/uncategorized/" paths — leftover from site setup |
| Local businesses | 1 valid item | Named "forevershinecleaning.com" instead of "Forever Shine" |
| Organization | 1 valid item | Non-critical issues detected; name is "forevershinecleaning.com" not business name |

### Schema Quality Issues

From the actual JSON-LD output:
```json
{
  "@type": "Organization",
  "name": "forevershinecleaning.com",   // ← wrong — should be "Forever Shine"
  "url": "https://forevershinecleaning.com/"
}
```

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "name": "Home" },
    { "name": "Uncategorized" },   // ← leftover test category
    { "name": "Hello world!" }     // ← leftover default post
  ]
}
```

The LocalBusiness schema is detected and valid — good for local pack eligibility. However the organization name being the domain instead of the actual business name is an issue. The "Hello world!" breadcrumb is embarrassing and should be cleaned up.

### Missing Schema (Not Detected)
- `AggregateRating` — 45+ Google reviews displayed on page but not marked up for rich snippets
- `VideoObject` — 5 service demo videos present, none schema-marked
- `Service` — 8 service types listed, none individually schema-marked

---

## 4. WebPageTest

**Config:** Desktop, Chrome 145, WiFi (240/120 Mbps, 2ms RTT), Los Angeles CA, run May 5 2026 00:41 UTC

| Metric | Value | Assessment |
|---|---|---|
| TTFB | **1.971s** | Slow (Good < 0.8s) |
| Start Render | **2.7s** | Slow |
| FCP | **2.748s** | Needs Improvement |
| LCP | **3.653s** | Needs Improvement (> 2.5s) |
| CLS | **0.035** | Good |
| Total Blocking Time | **0.284s** | Good (desktop) |
| Speed Index | **6.336s** | Poor |
| Document Complete | **10.17s** | Poor |
| Total Load Time | **16.044s** | Poor |
| **Total Page Weight** | **44 MB** | Critical issue |
| Total Requests | **72** | High |
| Total Bytes | **45,587,129 bytes** | Critical issue |

### WPT Narrative Verdicts
- **Is It Quick?** "Not Bad — began rendering content with little delay. The largest content rendered a little late."
- **Is It Usable?** "Needs Improvement — good layout stability. Took some time to become interactive. Some HTML was generated after delivery."
- **Is It Resilient?** "Not Bad — no render-blocking 3rd party requests. No security issues. Some HTML generated after delivery."

### Page Weight Analysis
44MB is extremely high for a service business homepage. The dominant contributor is almost certainly the hero video (`slider.m4v` / `slider.mp4`) served in autoplay. Service demo videos add further weight. This explains:
- The 16s total load time
- The high LCP (video must load before largest element renders)
- Poor Speed Index

**Fix:** Host videos on YouTube/Vimeo and embed, or compress to <5MB, or replace hero video with a static image + CSS animation.

---

## 5. SEO Metadata (Static HTML)

### Title Tag
- **Current:** `"forevershinecleaning.com -"` (28 chars, sentence incomplete)
- **Issue:** Generic, no keyword, no location, sentence cut off with a dash and nothing after it
- **Recommended:** `"Exterior Cleaning Services in Palatine, IL | Forever Shine"` (58 chars)

### Meta Description
- **Current:** `"Forever Shine Exterior Cleaning provides professional power washing, soft washing, gutter cleaning, and more in Palatine, IL and the Northwest Suburbs of"` (truncated mid-sentence)
- **Issue:** Ends at 153 chars mid-sentence — Google will rewrite it
- **Recommended:** Complete the sentence, keep under 155 chars

### Open Graph / Social Sharing
- `og:title` = "forevershinecleaning.com -" — same incomplete title
- `og:image` = square logo (1006×405px) — not ideal; Twitter and Facebook expect 1.91:1
- `og:description` = OK — "Professional exterior cleaning in Palatine, IL..."
- `og:url` and `og:type: website` = correct

### Heading Structure
- H1 (1): "FOREVER SHINE" — correct single H1
- H2 (7): Exterior Cleaning / Our Services / About Us / See the Difference / Service Videos / What Our Customers Say / Ready to Transform Your Property?
- H3 (13): 8 service names (duplicated in two sections)
- Hierarchy is logical and correct

### Images & Alt Tags
- 77/78 images have alt text (98.7%) — excellent
- 1 missing alt is on `aria-hidden="true"` decorative element — acceptable

### External Links
- Facebook and Instagram in footer — good
- LinkedIn footer link points to Facebook URL — broken
- No Google Business Profile link

---

## 6. Code Quality (Static HTML)

- **CMS:** Drupal 11 with custom theme + AIOSEO plugin, LiteSpeed cache, MonsterInsights, GTM
- No deprecated HTML tags
- Semantic elements correct: `<header>`, `<nav>`, `<main id="main-content">`, `<footer>`, `<section>`
- 82 inline styles (CSS custom properties for animations — acceptable)
- 294 `<div>` elements — moderate
- Skip link: `"Skip to content"` → `#main-content` — good
- 28 ARIA labels, 22 ARIA roles — good coverage
- Viewport meta: `width=device-width, initial-scale=1.0` — correct
- LiteSpeed cache layer detected (likely responsible for good TTFB on PSI despite slow WPT TTFB)

---

## 7. Content & Conversion

- ~1,300 words on homepage — good depth
- Hero tagline: "Unbreakable Standards" — strong, memorable
- 6 CTA instances: "Get Your Free Quote" (×3), "View Our Services" (×1), phone (×2)
- 8+ verified Google reviews via TrustIndex
- **Brand name issue:** Reviews reference "Magner Power Wash"; site says "Forever Shine" — needs clarification
- Missing: FAQ, pricing tiers, team bios, certifications, warranty statement

---

## 8. Local SEO

- NAP: Phone (847) 602-4064 and email visible in multiple locations
- Address: Palatine, IL / Northwest Suburbs of Chicago (service area, no street address — acceptable)
- Geo-tags: `geo.region: US-IL`, `geo.placename: Palatine`, ICBM `42.1103, -88.0345` — all correct
- **Issue:** Timezone metadata set to `America/New_York` — should be `America/Chicago`
- LocalBusiness schema: confirmed valid by Rich Results Test
- Google Business Profile link: not present on homepage

---

## Priority Fixes (Ranked by Impact)

| Priority | Fix | Impact |
|---|---|---|
| 1 | **Compress or externalize hero video** — 44MB page weight is the root cause of the 39/100 PSI score | Performance |
| 2 | **Fix title tag** — rewrite to 50–60 chars with keyword + location | SEO |
| 3 | **Fix meta description** — complete the sentence, under 155 chars | SEO |
| 4 | **Fix Organization.name in AIOSEO** — change from "forevershinecleaning.com" to "Forever Shine" | Structured Data |
| 5 | **Clean up BreadcrumbList** — remove "Hello world!" and "/category/uncategorized/" entries | Structured Data |
| 6 | **Add AggregateRating schema** — 45+ reviews on page but none marked up for rich snippets | Structured Data |
| 7 | **Fix LinkedIn footer link** — currently points to Facebook URL | Technical |
| 8 | **Fix OG image** — use 1.91:1 landscape hero image for social sharing | SEO |
| 9 | **Fix timezone metadata** — change `America/New_York` → `America/Chicago` | Technical |
| 10 | **Add VideoObject schema** — 5 demo videos present, none marked up | Structured Data |
| 11 | **Clarify brand name** — reconcile "Magner Power Wash" vs "Forever Shine" in reviews | Content |
| 12 | **Add FAQ section** and service certifications | Content |

---

## Corrections from v1 of This Report

The initial report was based on static HTML analysis only. Running actual tools surfaced the following errors:

| Claim in v1 | Actual Finding |
|---|---|
| "robots.txt not found in HTML" | robots.txt exists at /robots.txt with 2 sitemaps declared |
| "0 JSON-LD blocks found — major gap" | AIOSEO generates valid JSON-LD; Google confirmed 3 valid structured data items |
| Performance grade: B | PSI mobile score is 39/100 (D/F range) — static analysis missed video weight |
| "0 external JS scripts — excellent" | GTM, MonsterInsights, AIOSEO, and LiteSpeed scripts inject at runtime — not visible in static HTML |
| Page weight not assessed | 44MB total — critical issue driven by self-hosted autoplay video |

---

## Conclusion

**Overall Grade: C+** (revised down from B+)

The site has solid fundamentals — clean semantic HTML, good conversion design, verified reviews, and valid local business schema. But real tool data reveals a performance crisis: a 39/100 PSI mobile score, 44MB page weight, LCP of 6.2s on mobile, and 3,040ms Total Blocking Time. These are not minor issues — a 6+ second LCP means real users are staring at an incomplete page for 6 seconds on mobile, and Google demotes pages with poor Core Web Vitals in mobile rankings.

The single most impactful fix is compressing or externalizing the hero video. That one change would likely push the PSI score above 70 and cut page weight by 80%+. After that, fixing the title tag, Organization schema name, and adding AggregateRating markup are the next highest-leverage improvements.

**With video fix + metadata fixes + schema cleanup, this site would reach A- territory.**
