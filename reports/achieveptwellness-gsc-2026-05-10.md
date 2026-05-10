# GSC Audit — achieveptwellness.com
**Period:** Nov 10, 2025 – May 10, 2026 (6 months)
**Tool:** Google Search Console MCP integration
**Methodology:** Full dataset pulled in single paginated request (row_limit=25000). Standard window for all future audits: 6 months.

---

## Overview

| Metric | Desktop | Mobile | Tablet | Total |
|--------|---------|--------|--------|-------|
| Clicks | 81 | 63 | 2 | **146** |
| Impressions | 4,066 | 2,954 | 58 | **7,078** |
| CTR | 1.99% | 2.13% | 3.45% | ~2.06% |
| Avg Position | 29.6 | 17.5 | 15.6 | — |

> Desktop avg position (29.6) remains nearly double mobile (17.5). Persistent gap — likely a desktop rendering or structured data issue worth diagnosing.

---

## Critical Issues

### 1. Sitemap — 0 Pages Indexed
- Submitted: `2026-03-01` · Pages indexed: **0**
- **Action:** Validate sitemap XML, confirm all URLs return 200, resubmit via GSC. Check for noindex tags blocking key pages.

### 2. `/services/old` Indexed in Google
- 13 impressions, position 26.9, 0 clicks
- **Action:** 301 redirect to `/services` or add `noindex`.

### 3. "laser skin resurfacing barrington il" — 84 impressions, position 90.3
- Site is appearing in searches for a completely unrelated service category.
- **Action:** Audit for any copy or metadata that could be triggering this. Likely a Squarespace template artifact or stray keyword.

---

## Top Pages by Clicks

| Page | Clicks | Impressions | CTR | Position |
|------|--------|-------------|-----|----------|
| / (Homepage) | 104 | 3,525 | 2.95% | 10.9 |
| /about | 15 | 445 | 3.37% | 10.4 |
| /treatment-techniques | 15 | 872 | 1.72% | 24.7 |
| /contact | 4 | 804 | 0.50% | 18.8 |
| /faqs | 4 | 299 | 1.34% | 7.7 |
| /faqs-2 | 3 | 241 | 1.24% | 5.8 |
| /treatment-techniques/instrument-assisted-soft-tissue-mobilization | 3 | 486 | 0.62% | 9.0 |
| /treatment-techniques/orthopedic-physical-therapy | 2 | 242 | 0.83% | 10.6 |
| /blog/pilates-physical-therapy-a-powerful-alliance-for-recovery-and-strength | 1 | 61 | 1.64% | 5.8 |
| /treatment-techniques/joint-mobilization-and-manipulation | 1 | 713 | 0.14% | 17.7 |
| /treatment-techniques/tmd-tmj | 1 | 1,289 | 0.08% | 65.9 |
| /treatment-techniques/trigger-point-dry-needling | 0 | 184 | 0% | 27.2 |
| /treatment-techniques/neurologic-physical-therapy | 0 | 182 | 0% | 9.1 |
| /services | 0 | 198 | 0% | 7.6 |
| /services/old | 0 | 13 | 0% | 26.9 |

> **/faqs-2** and **/faqs** are both indexed — duplicate FAQ pages splitting authority. Should be consolidated.

---

## Top Queries by Clicks

| Query | Clicks | Impressions | CTR | Position |
|-------|--------|-------------|-----|----------|
| achieve physical therapy | 33 | 495 | 6.67% | 6.3 |
| mobilization vs manipulation | 1 | 17 | 5.88% | 1.2 |
| physical therapy | 1 | 14 | 7.14% | 20.1 |
| achieve wellness | 1 | 32 | 3.13% | 11.2 |
| physical therapy barrington | 1 | 242 | 0.41% | 14.8 |
| physical therapy barrington il | 1 | 259 | 0.39% | 18.2 |
| mat pilates near me | 1 | 1 | 100% | 66.0 |

---

## High-Opportunity Queries (Full Dataset, sorted by impressions)

| Query | Impressions | Position | Notes |
|-------|-------------|----------|-------|
| tmj therapy | **540** | 84.2 | Buried on page 8 — biggest single query opportunity |
| tmd therapies | **229** | 78.5 | Page 8 |
| tmd therapy | **189** | 63.4 | Page 6 |
| achieve | 211 | 4.7 | Branded — high impressions, 0 clicks, position 5 |
| physical therapy barrington il | 259 | 18.2 | 1 click — core local keyword, page 2 |
| physical therapy barrington | 242 | 14.8 | 1 click — core local keyword, page 2 |
| homepage total | 3,525 | 10.9 | 104 clicks — just off page 1 |
| /treatment-techniques | 872 | 24.7 | 15 clicks — high impressions, page 2-3 |
| /contact | 804 | 18.8 | 4 clicks, 0.50% CTR — meta desc needs work |
| laser skin resurfacing barrington il | 84 | 90.3 | Wrong category — investigate |
| custom therapeutic exercise plan south barrington | 80 | 21.8 | Local service query, page 2 |
| parkinson's disease barrington | **68** | 19.5 | Jumped from 20→68 impressions vs 90-day — neuro content growing |
| barrington physical therapy | 66 | 13.5 | 0 clicks — page 2, commercial intent |
| physical therapist barrington | 66 | 30.7 | 0 clicks — page 3 |
| achieve pt | 55 | 13.1 | Branded, page 2 — should rank top 3 |
| physical therapy near me | 57 | 6.9 | Page 1, 0 clicks — title/snippet issue |
| achieve therapy | 31 | 7.2 | Branded, 0 clicks — meta description issue |
| orthopedic rehabilitation barrington il | 45 | 10.3 | Page 1, 0 clicks |
| tmj trigger point therapy north barrington il | 39 | 20.9 | Local TMJ, page 2 |
| achieve physical therapy hewlett | 39 | 11.3 | Wrong location — not our market |
| iastm cupping | 34 | 16.7 | IASTM page missing cupping content |
| difference between mobilization and manipulation | 33 | 3.1 | Position 3, 0 clicks — snippet issue |
| trigger point dry needling physical therapy | 24 | 70.0 | Page 7 |
| trigger point dry needling | 21 | 72.4 | Page 7 — dry needling page underranking |
| therapy for tmj disorder | 19 | 80.3 | Page 8 |
| neuro rehabilitation barrington il | 16 | 10.2 | Page 1, 0 clicks — neuro PT opportunity |
| physical therapist le roy | 16 | 53.3 | Wrong geo for this practice |
| parkinson's disease barrington | 68 | 19.5 | Growing — worth building content around |

---

## TMJ/TMD Content Cluster

The TMJ page (`/treatment-techniques/tmd-tmj`) generates 1,289 impressions — but all from queries ranking pages 6–9. Google is finding the page but not trusting it.

| Query | Impressions | Position |
|-------|-------------|----------|
| tmj therapy | 540 | 84.2 |
| tmd therapies | 229 | 78.5 |
| tmd therapy | 189 | 63.4 |
| tmj trigger point therapy north barrington il | 39 | 20.9 |
| therapy for tmj disorder | 19 | 80.3 |
| how to cure tmj ballwin mo | 11 | 75.7 |
| therapy for tmj | 10 | 94.9 |
| sound therapy temporomandibular joint disorder | 13 | 60.9 |
| tmj/tmd treatment | 7 | 85.9 |
| temporomandibular joint disorder sound therapy | 7 | 63.0 |
| tmj rehabilitation | 2 | 75.0 |

**~1,066 impressions across 15+ TMJ queries, avg position ~75.** Needs content depth, FAQ schema, and internal links from other treatment pages.

---

## Notable Signals

**"physical therapy near me" — position 6.9, 0 clicks**
Ranking page 1 for a high-intent generic query with zero clicks. Google Business Profile likely dominates the results. Check the actual SERP — if map pack is above organic results, optimize the GBP listing, not just the page.

**"achieve" — 211 impressions, position 4.7, 0 clicks**
Branded term, top 5, zero clicks. Users searching "achieve" aren't finding the snippet compelling enough. Review how the brand name appears in meta titles across the site.

**Parkinson's disease queries trending up**
"parkinson's disease barrington" jumped from 20 impressions (90-day) to 68 impressions (6-month window) — neuro PT content is gaining traction. Worth investing in.

**Duplicate FAQ pages**
Both `/faqs` and `/faqs-2` are indexed and driving clicks. Consolidate into one URL to concentrate link equity.

---

## Recommendations (Priority Order)

1. **Fix sitemap indexing** — 0 indexed pages from sitemap is a foundational crawl blocker
2. **Redirect/noindex `/services/old`** and consolidate `/faqs` + `/faqs-2`
3. **TMJ page overhaul** — 1,066+ impressions across 15 queries all averaging position 75; add content depth, FAQ schema, E-E-A-T signals, internal links
4. **Audit "physical therapy near me" SERP** — page 1 ranking with 0 clicks; fix GBP listing or improve snippet
5. **Push "physical therapy barrington" + "physical therapy barrington il"** to page 1 — 501 combined impressions, both on page 2
6. **Joint mobilization page** — 713 impressions at position 17.7, close to page 1
7. **Dry needling page** — ~45 impressions across two queries at positions 70-72; needs content depth
8. **Contact page meta description** — 804 impressions, 0.50% CTR; rewrite with a direct CTA
9. **Investigate "laser skin resurfacing" impressions** — wrong category showing up in GSC is a red flag
10. **Desktop/mobile position gap** — 29.6 vs 17.5 needs investigation
