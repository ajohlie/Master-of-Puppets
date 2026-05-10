# GSC Audit — achieveptwellness.com
**Period:** Feb 9 – May 8, 2026 (90 days)
**Tool:** Google Search Console MCP integration
**Note:** Full 224-query dataset pulled across 3 paginated API requests.

---

## Overview

| Metric | Desktop | Mobile | Tablet |
|--------|---------|--------|--------|
| Clicks | 65 | 47 | 0 |
| Impressions | 3,522 | 2,586 | 42 |
| CTR | 1.85% | 1.82% | 0% |
| Avg Position | 30.5 | 17.7 | 19.5 |

> **Note:** Desktop avg position (30.5) is nearly double mobile (17.7). Unusually large gap — possible desktop rendering or structured data issue.

---

## Critical Issues

### 1. Sitemap — 0 Pages Indexed
- Submitted: `2026-03-01` · Pages indexed: **0**
- **Action:** Validate sitemap XML, confirm all URLs return 200, resubmit via GSC. Check for noindex tags on key pages.

### 2. `/services/old` Indexed in Google
- 13 impressions, position 26.9, 0 clicks
- **Action:** 301 redirect to `/services` or add `noindex`.

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

## Top Queries by Clicks

| Query | Clicks | Impressions | CTR | Position |
|-------|--------|-------------|-----|----------|
| achieve physical therapy | 26 | 424 | 6.13% | 6.8 |
| mobilization vs manipulation | 1 | 17 | 5.88% | 1.2 |
| achieve wellness | 1 | 20 | 5.00% | 11.9 |
| mat pilates near me | 1 | 1 | 100% | 66.0 |
| physical therapy barrington | 1 | 214 | 0.47% | 15.0 |

---

## High-Opportunity Queries — Full Dataset

Sorted by impressions. These were missed in the initial 25-row pull.

| Query | Impressions | Position | Notes |
|-------|-------------|----------|-------|
| tmj therapy | **540** | 84.2 | Buried on page 8 — biggest query opportunity on site |
| tmd therapies | **229** | 78.5 | Page 8, similar issue |
| physical therapy barrington il | **209** | 15.9 | Geo variant of top local keyword, page 2 |
| tmd therapy | **189** | 63.4 | Page 6 — TMJ content cluster badly underranking |
| physical therapy barrington | 214 | 15.0 | Core local keyword, page 2 |
| joint manipulation | 88 | 44.7 | Page 4-5, needs dedicated targeting |
| physical therapy berwyn il | 88 | 63.6 | Wrong geo — not the target market |
| physical therapist barrington | 66 | 30.7 | Local branded variant, page 3 |
| barrington physical therapy | 65 | 13.5 | Page 2, high commercial intent |
| manipulation of joints | 63 | 38.4 | Page 4 |
| custom therapeutic exercise plan south barrington | 62 | 19.8 | Page 2, local service query |
| physical therapy near me | 56 | **6.7** | Page 1 — 0 clicks at pos 6.7 suggests weak title/snippet |
| achieve pt | 52 | 13.8 | Branded, page 2 — should be top 3 |
| orthopedic rehabilitation barrington il | 44 | 10.3 | Page 1, 0 clicks — check meta description |
| tmj trigger point therapy north barrington il | 39 | 20.9 | Local TMJ query with commercial intent |
| iastm cupping | 34 | 16.7 | IASTM page needs cupping content |
| difference between mobilization and manipulation | 33 | 3.1 | Position 3, 0 clicks — title/snippet issue |
| trigger point dry needling physical therapy | 24 | 70.0 | Page 7, dry needling page underranking |
| trigger point dry needling | 21 | 72.4 | Same issue |
| parkinson's disease barrington | 20 | 29.8 | Page 3, neuro PT opportunity |

---

## TMJ/TMD Content Cluster Analysis

The TMJ page (`/treatment-techniques/tmd-tmj`) generates 1,289 impressions — but almost entirely from queries ranking on pages 6–9. This is a content authority problem, not a keyword targeting problem.

| Query | Impressions | Position |
|-------|-------------|----------|
| tmj therapy | 540 | 84.2 |
| tmd therapies | 229 | 78.5 |
| tmd therapy | 189 | 63.4 |
| therapy for tmj disorder | 19 | 80.3 |
| tmj trigger point therapy north barrington il | 39 | 20.9 |
| therapy for tmj | 10 | 94.9 |
| tmj/tmd treatment | 7 | 85.9 |
| sound therapy temporomandibular joint disorder | 13 | 60.9 |

**Total TMJ cluster impressions: ~1,046 across 15+ queries, avg position ~75**

The page is being found but Google doesn't trust it enough to surface it. Needs content depth, E-E-A-T signals, FAQ schema, and internal links from other treatment pages.

---

## Notable Signal: "physical therapy near me" — position 6.7, 0 clicks

Ranking on page 1 for a high-intent generic query and getting 0 clicks is unusual. Likely causes:
- Title tag doesn't match the query intent
- Meta description isn't compelling enough vs. competitors
- Google Business Profile may be dominating the results and absorbing clicks

**Action:** Check SERP appearance for this query directly. Optimize title + meta description for this page.

---

## Recommendations (Priority Order)

1. **Fix sitemap indexing** — 0 indexed pages is a foundational blocker for everything else
2. **Redirect/noindex `/services/old`** — crawl budget and brand confusion
3. **TMJ content overhaul** — 1,046+ impressions across 15 queries averaging position 75; needs content depth, FAQ schema, E-E-A-T
4. **Audit "physical therapy near me" snippet** — page 1 ranking with 0 clicks is a wasted opportunity
5. **Push "physical therapy barrington il" + "barrington physical therapy" to page 1** — 423 combined impressions, core local keywords both sitting on page 2
6. **Joint mobilization page** — 713 impressions at position 17.7, minor optimization could unlock page 1
7. **Dry needling content** — two queries with ~45 combined impressions at positions 70-72; page needs depth
8. **Contact page meta description** — 497 impressions, 0.60% CTR; rewrite with a direct CTA
9. **Investigate desktop vs. mobile position gap** — 30.5 vs 17.7 is a red flag
