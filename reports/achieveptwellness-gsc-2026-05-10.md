# GSC Audit — achieveptwellness.com
**Period:** Feb 9 – May 10, 2026 (90 days)
**Tool:** Google Search Console MCP integration

---

## Overview

| Metric | Desktop | Mobile | Tablet |
|--------|---------|--------|--------|
| Clicks | 65 | 47 | 0 |
| Impressions | 3,522 | 2,586 | 42 |
| CTR | 1.85% | 1.82% | 0% |
| Avg Position | 30.5 | 17.7 | 19.5 |

> **Note:** Desktop avg position (30.5) is nearly double mobile (17.7). This gap is unusually large and may indicate a desktop-specific indexing or rendering issue worth investigating.

---

## Critical Issues

### 1. Sitemap — 0 Pages Indexed
- Sitemap submitted: `2026-03-01`
- Pages indexed from sitemap: **0**
- URL: `https://www.achieveptwellness.com/sitemap.xml`
- **Action:** Verify sitemap is valid XML, all URLs return 200, and resubmit via GSC. Check for crawl budget issues or noindex tags on key pages.

### 2. `/services/old` Indexed in Google
- 13 impressions, position 26.9, 0 clicks
- An orphaned "old" page is surfacing in search results
- **Action:** 301 redirect to `/services` or add `noindex` meta tag.

---

## Top Pages by Clicks

| Page | Clicks | Impressions | CTR | Position |
|------|--------|-------------|-----|----------|
| / (Homepage) | 83 | 3,173 | 2.62% | 11.6 |
| /about | 15 | 381 | 3.94% | 10.7 |
| /faqs | 4 | 299 | 1.34% | 7.7 |
| /contact | 3 | 497 | 0.60% | 18.5 |
| /treatment-techniques | 3 | 470 | 0.64% | 19.4 |
| /treatment-techniques/instrument-assisted-soft-tissue-mobilization | 3 | 486 | 0.62% | 9.0 |
| /treatment-techniques/joint-mobilization-and-manipulation | 1 | 713 | 0.14% | 17.7 |
| /treatment-techniques/tmd-tmj | 1 | 1,289 | 0.08% | 65.9 |

---

## High-Opportunity Pages (High Impressions, Poor Performance)

### TMJ Page — 1,289 impressions, position 65.9
The highest-impression page on the site is buried on page 6+. Biggest single SEO opportunity.
- **Action:** Audit content depth, add FAQ schema, build internal links from other treatment pages.

### Joint Mobilization Page — 713 impressions, position 17.7
Just off page 1. A small push could 5-10x clicks.
- **Action:** Tighten title tag and H1 around "joint mobilization and manipulation," improve internal linking.

### Contact Page — 497 impressions, position 18.5, 0.60% CTR
High impressions with very low CTR. Meta description likely not compelling.
- **Action:** Rewrite meta description with a CTA (e.g., "Book a free consult with Barrington's PT specialists").

---

## Top Queries by Clicks

| Query | Clicks | Impressions | CTR | Position |
|-------|--------|-------------|-----|----------|
| achieve physical therapy | 26 | 424 | 6.13% | 6.8 |
| mobilization vs manipulation | 1 | 17 | 5.88% | 1.2 |
| achieve wellness | 1 | 20 | 5.00% | 11.9 |
| mat pilates near me | 1 | 1 | 100% | 66.0 |
| physical therapy barrington | 1 | 214 | 0.47% | 15.0 |

---

## High-Opportunity Queries (High Impressions, 0 Clicks)

| Query | Impressions | Position | Notes |
|-------|-------------|----------|-------|
| barrington physical therapy | 65 | 13.5 | Core local keyword, page 2 |
| joint manipulation | 88 | 44.7 | Too deep, needs targeted page |
| difference between mobilization and manipulation | 33 | 3.1 | Ranking #3 but 0 clicks — check title/snippet |
| custom therapeutic exercise plan south barrington | 62 | 19.8 | Local service page opportunity |
| iastm cupping | 34 | 16.7 | IASTM page needs cupping content |
| achieve pt | 52 | 13.8 | Branded, should rank top 3 |
| achieve therapy | 26 | 7.2 | Branded, 0 clicks — meta description issue |
| how to cure tmj ballwin mo | 11 | 75.7 | Wrong geo — ranking for out-of-market TMJ queries |

---

## Recommendations (Priority Order)

1. **Fix sitemap indexing** — 0 indexed pages from sitemap is a foundational blocker
2. **Redirect/noindex `/services/old`** — clean up crawl budget and brand confusion
3. **TMJ page overhaul** — 1,289 impressions at position 65 is the biggest upside on the site
4. **Push joint mobilization page to page 1** — 713 impressions at 17.7, minor optimization could unlock significant clicks
5. **Improve contact page meta description** — 497 impressions, 0.60% CTR is leaving conversions on the table
6. **Target "barrington physical therapy" aggressively** — 214 impressions at position 15, core local keyword
7. **Investigate desktop vs. mobile position gap** — 30.5 vs 17.7 is a red flag for rendering or structured data issues
