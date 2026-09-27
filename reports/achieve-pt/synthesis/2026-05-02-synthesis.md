# Achieve PT Wellness — SEO Audit Synthesis & Recommendations
**Date:** 2026-05-02  
**Phases completed:** A (Achieve PT crawl), B (competitor discovery), C (competitor deep-scrape)  
**Prepared for:** Dr. Julie Roy, DPT — Achieve Physical Therapy & Wellness, Barrington IL

---

## Executive Summary

Achieve PT has strong positioning, a distinctive practitioner brand, and a specialty service menu that directly targets an underserved patient segment (women''s health, pelvic floor, postpartum). The SEO infrastructure does not yet match the quality of the clinical offering.

**The core finding across all four phases:** Achieve PT''s most powerful marketing concept — the free "discovery call" — exists only in the metadata of a single page and is invisible to every patient who visits the site. Meanwhile, the nearest competitor (Smith PT+, Crystal Lake) has built its entire top-of-funnel around near-identical framing. Fixing this single gap requires no developer, no budget, and no technical work. It is copy.

Three additional structural issues compound the problem: title tags are systematically too long (Squarespace appends a 44-character suffix), no competitor in this market has schema markup (meaning first-mover gets rich results uncontested), and the site''s best content lane (women''s health / pelvic floor) is thinner than Crystal Lake PT''s despite Achieve PT having equivalent specialty positioning.

**Net assessment:** Achieve PT is one content sprint and one theme-level fix away from outperforming every direct competitor on the issues that matter most for local medical SEO.

---

## Achieve PT Current State (Phase A)

| Metric | Current | Target | Gap |
|--------|---------|--------|-----|
| Pages indexed | 22 | ~25-30 | Missing condition-specific pages |
| Titles >60 chars | 13/22 (59%) | 0/22 | Squarespace suffix fix |
| Meta desc coverage | 19/22 (86%) | 22/22 | 3 system pages |
| "Discovery call" in body copy | 0/22 | All key pages | Full content gap |
| Indexed duplicate (/home) | Yes | No | Canonical or redirect |
| System pages noindexed | 1/3 (/cart only) | 3/3 | /services-dropdown, /privacy-policy |
| /blog H1 count | 7 H1s on index page | 1 | Squarespace template fix |
| /privacy-policy | Broken (404 content, crawlable) | Fixed + noindexed | |
| Schema markup | Unknown | LocalBusiness + MedicalBusiness + Person | Audit pending |

---

## Competitive Landscape (Phases B & C)

### Market Map

```
                    SPECIALTY MATCH
                    High
                      |
        Crystal       |     Achieve PT
        Lake PT ------+------ (target)
                      |
        Grayslake     |     Loop PT
        Rehab    -----+-----  (Barrington-named)
                      |
        Smith PT+ ----+------ Team Rehab
        (Crystal Lake)|     (Lake Barrington)
                      |
                    Low
          Far --------+-------- Near
                  PROXIMITY
```

### Competitor Quick Reference

| Competitor | Distance | Specialty Match | SEO Strength | Primary Threat |
|------------|----------|----------------|--------------|----------------|
| Loop PT | 0 mi (Barrington clinic) | High — pelvic floor, women''s health | Barrington geo-targeting in every title | Directly competes on same geography + specialty |
| Crystal Lake PT | ~18 mi | Very High — identical model, women''s/pelvic health | Best meta desc coverage (92%), active blog | Content depth in shared specialty lane |
| Team Rehab Lake Barrington | ~2 mi | High — 50+ services, pelvic + TMJ + LSVT | Chain domain authority | Breadth and same-building proximity |
| Smith PT+ | ~18 mi | Medium-High — Menopause Medicine, women''s health | Aggressive lead gen (Discovery Session popup) | Most effective lead capture mechanism in the market |

### What Competitors Are NOT Doing (Achieve PT Opportunities)

- **No competitor uses schema markup.** Zero. First clinic to implement LocalBusiness + MedicalBusiness + Person schema appears with rich results (star ratings, address, phone, practitioner card) while all others show plain blue links.
- **No competitor offers a free soft-entry consultation with a form** except Smith PT+ (whose "Discovery Session" popup captures lead info before a patient ever calls). Achieve PT''s "discovery call" concept, if properly surfaced, could own this framing in the Barrington market.
- **No competitor publishes pricing or financing information** except Crystal Lake PT (Cherry financing). Achieve PT could close this gap with an insurance/pricing FAQ that removes the #1 barrier to scheduling.
- **No competitor has Dr.-led personal branding.** Loop PT has no named PT. Team Rehab names a Clinic Director (not DPT-titled). Crystal Lake PT mentions Emily and Tara only in patient reviews. Achieve PT''s "Dr. Julie Roy, DPT" throughout the site is a differentiation that no competitor has claimed.

---

## Priority Action Plan

### P1 — Quick Wins: Do This Week (No Developer Needed)

---

#### P1.1 — Add "discovery call" to body copy on 5 key pages
**Effort:** 30–60 minutes in Squarespace  
**Impact:** High — closes the single biggest conversion gap

Add a sentence or paragraph to the **homepage, /about, /services, /treatment-techniques, and /contact** pages that explicitly invites patients to book a free discovery call. Example language already proven in the contact page title:

> "Not sure if physical therapy is right for you? Book a free 20-minute discovery call with Dr. Julie Roy — no forms, no commitment, just a conversation about your pain."

Place it in:
- Homepage: below the hero section or before testimonials
- /about page: after the bio
- /services page: at the bottom as the primary next step
- Each treatment technique page: at the bottom
- /contact: already present in title/meta; add to page body

**Why this matters:** Smith PT+ fires this framing as a popup on every page and it is their entire top-of-funnel. Achieve PT''s version exists only in a page title that Google truncates.

---

#### P1.2 — Noindex /services-dropdown and /privacy-policy
**Effort:** 5 minutes in Squarespace (SEO settings per-page)  
**Impact:** Medium — removes crawl waste and duplicate indexing signals

- /services-dropdown: Navigation fragment, no user-facing content. Add noindex.
- /privacy-policy: Page returns a Squarespace 404 but is indexed. Add noindex (or fix the page content first — it may be unpublished/broken in the CMS).

---

#### P1.3 — Redirect /home to / (or add canonical)
**Effort:** 5–10 minutes  
**Impact:** Medium — eliminates duplicate content split between / and /home

/home is a full duplicate of the homepage with `robots: index, follow`. Either:
- Set a 301 redirect from /home to / in Squarespace URL mapping, or
- Add a canonical tag on /home pointing to /

---

#### P1.4 — Fix title for /services page
**Effort:** 5 minutes  
**Impact:** Medium — this is the booking page; title is 89 chars

Current: "Book Physical Therapy in Barrington, IL | Pricing & Scheduling | Achieve Physical Therapy" (89 chars)  
Suggested: "Book Physical Therapy in Barrington, IL | Achieve PT" (52 chars)

---

### P2 — Short-Term: Next 2–8 Weeks

---

#### P2.1 — Fix Squarespace site-name suffix (affects 13 pages)
**Effort:** Medium — Squarespace global site title setting + manual page title overrides  
**Impact:** High — fixes title truncation on 59% of the site

The suffix "— Achieve Physical Therapy - Barrington, IL" (44 chars) is auto-appended to blog post titles and most service pages. Two options:

**Option A (quick):** Shorten the site title in Squarespace Settings > SEO > Site Title to just "Achieve PT" (10 chars). This changes the suffix to "— Achieve PT" (12 chars), freeing up 32 chars for page-specific keywords.

**Option B (precise):** Override each page title individually in Squarespace page settings > SEO > Page Title. More control, more work.

Priority pages to manually fix first (highest search volume keywords):
1. /services — "Book Physical Therapy in Barrington, IL | Achieve PT" (52)
2. /about — "Dr. Julie Roy, DPT | Physical Therapist in Barrington IL" (56)
3. /faqs — "Physical Therapy FAQs | Achieve PT Barrington IL" (48)
4. All treatment technique pages — shorten individually

---

#### P2.2 — Implement schema markup
**Effort:** Medium — requires either a third-party Squarespace plugin or manual JSON-LD injection  
**Impact:** Very High — zero competitors have this; first-mover advantage in the market

Three schema types to implement:

**1. LocalBusiness / MedicalBusiness (sitewide)**
```json
{
  "@context": "https://schema.org",
  "@type": "PhysicalTherapist",
  "name": "Achieve Physical Therapy & Wellness",
  "url": "https://www.achieveptwellness.com",
  "telephone": "[phone number]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "756 W Northwest Highway, Suite B",
    "addressLocality": "Barrington",
    "addressRegion": "IL",
    "postalCode": "60010"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.1547,
    "longitude": -88.1369
  },
  "openingHours": "[hours]",
  "priceRange": "$$",
  "medicalSpecialty": ["PhysicalTherapy", "Pelvic Floor Therapy", "Women''s Health"]
}
```

**2. Person schema for Dr. Julie Roy (on /about page)**
```json
{
  "@type": "Person",
  "name": "Dr. Julie Roy",
  "jobTitle": "Doctor of Physical Therapy",
  "worksFor": { "@type": "Organization", "name": "Achieve Physical Therapy & Wellness" },
  "hasCredential": "DPT, LSVT BIG Certified"
}
```

**3. FAQPage schema (on /faqs page)**  
Apply to the FAQ content already present — this generates FAQ rich results in Google directly in SERP.

Implementation path: Squarespace Code Injection (Settings > Advanced > Code Injection) or a Squarespace SEO app (SEOSpace, Semrush app, or Schema App).

---

#### P2.3 — Fix /blog index H1 issue
**Effort:** Low — Squarespace blog template setting  
**Impact:** Medium — currently 7 H1s on the /blog index page

The blog index renders each post card title as H1. In Squarespace, the blog summary block heading level can be changed in the block settings (click the block > Edit > Heading Level). Change post card titles from H1 to H2.

Also: add a true page-level H1 to the /blog index ("Physical Therapy Blog | Achieve PT Barrington" or similar).

---

#### P2.4 — Write 5 women''s health / pelvic health blog posts
**Effort:** Medium — content creation  
**Impact:** High — closes the content gap with Crystal Lake PT, which owns the pelvic/postpartum content lane despite having identical specialty positioning to Achieve PT

Suggested topics (based on Crystal Lake PT gap analysis and search intent):
1. "What to Expect at Your First Pelvic Floor PT Appointment" — top-of-funnel, informational
2. "Postpartum Physical Therapy: Why One Visit Isn''t Enough" (directly counters Crystal Lake PT''s same post)
3. "Leaking When You Run or Jump? You Don''t Have to Live With It." — high search volume, stigma-busting
4. "TMJ and Jaw Pain: How Physical Therapy Can Help" — supports existing treatment page
5. "What Is a Discovery Call? How to Know If PT Is Right for You" — supports P1.1 CTA strategy; targets patients at the consideration stage

---

#### P2.5 — Add insurance / pricing FAQ page
**Effort:** Low-Medium — content page  
**Impact:** Medium — only Crystal Lake PT addresses this; removes the #1 barrier to scheduling

Page: /insurance-and-pricing (or add section to /faqs)

Content to include:
- Which insurance plans are accepted (or "we are out-of-network; here''s how to use your out-of-network benefits")
- What to expect to pay per session (range or "call for a benefits check")
- How to use HSA/FSA
- Whether a referral is needed (already covered in FAQs but worth repeating)
- What "1-on-1" means for your time and value vs. a clinic that double-books

---

### P3 — Strategic: Ongoing

---

#### P3.1 — Build condition-specific landing pages
**Impact:** High — Loop PT has 28+ condition pages, Achieve PT has 11

Target pages to add (highest patient search volume + specialty alignment):
- /pelvic-floor-physical-therapy-barrington-il
- /postpartum-physical-therapy-barrington-il
- /prenatal-physical-therapy-barrington-il
- /back-pain-physical-therapy-barrington-il
- /shoulder-pain-physical-therapy-barrington-il
- /headache-tmj-physical-therapy-barrington-il

Each page should: have a unique H1 with the condition + location, unique meta description <160 chars, a body of 500-800 words, and a discovery call CTA at the bottom.

---

#### P3.2 — Google Business Profile optimization
**Impact:** High for local map pack rankings (not covered in this crawl-based audit)

Ensure:
- Business category: "Physical Therapist" (primary), "Sports Medicine Clinic" (secondary)
- All treatment services listed in the GBP services section
- Weekly post cadence (minimum: 1 post per week linking to blog content)
- Photos: clinic interior, Pilates reformer/equipment, Dr. Roy headshot
- Q&A section seeded with common patient questions

---

#### P3.3 — Monitor and re-crawl quarterly
**Impact:** Ongoing maintenance

Set a 90-day recrawl cadence using this same Firecrawl setup to:
- Track title truncation reduction
- Verify noindex tags are applied
- Confirm /home duplicate is resolved
- Check if competitor schema has been implemented (first-mover window closes once someone else deploys it)

---

## Appendix: Data Sources

| Phase | Output Files | Commit |
|-------|-------------|--------|
| A — Achieve PT crawl | reports/achieve-pt/2026-05-02-audit.md | 9e5f357 |
| B — Competitor discovery | reports/competitors/2026-05-02-candidates.md | c1a84b3 |
| C — Competitor audits | reports/competitors/2026-05-02-*-audit.md, comparison-matrix.md | a8c49f1 |
| D — This synthesis | reports/synthesis/2026-05-02-synthesis.md | (this commit) |

**Competitors audited:** Loop Physical Therapy (looppt.com), Crystal Lake Physical Therapy (crystallakept.com), Team Rehabilitation Lake Barrington (team-rehab.com), Smith Physical Therapy+ (smithptplus.com)

**Crawl tool:** Firecrawl MCP  
**Search research tool:** Tavily MCP  
**Total pages analyzed:** 97 (22 Achieve PT + 25 Loop PT + 25 Crystal Lake PT + 1 Team Rehab + 25 Smith PT+; minus 1 sitemap.xml = 96 real pages)
