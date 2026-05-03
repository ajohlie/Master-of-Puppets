# Smith Physical Therapy+ — Competitor SEO Audit
**URL:** https://smithptplus.com  
**Crawl date:** 2026-05-02  
**Pages crawled:** 25

---
## Summary
- Pages crawled: 25
- Pages missing meta desc: 15 (only 10 unique service/content pages have descriptions; all event sub-pages, ticket pages, calendar, and class pages have no meta description)
- Pages with title >60 chars: 18 (every page title includes " - Smith Physical Therapy +" which pushes all but the shortest names over 60 chars)
- Pages missing H1: 2 (events-programs/blocked, events-calendar: H1 is structural/decorative, not a keyword H1)
- Pages with noindex signal: 1 (/join-our-team/ has robots array containing "noindex" alongside "index, follow")
- Pages blocked (503): 1 (/events-programs/ returned Wordfence 503)

---
## Page Inventory

| URL | Title (chars) | >60? | Meta Desc? | H1 (from markup) | Notes |
|---|---|---|---|---|---|
| https://smithptplus.com | "Home - Smith Physical Therapy + \| Crystal Lake, IL" (51) | No | Yes (125) | "Physical Therapy serving McHenry County" | Primary landing page |
| https://smithptplus.com/tickets-order/ | "Order Completed - Smith Physical Therapy +" (43) | No | No | "Order Completed" | Transactional; no SEO value |
| https://smithptplus.com/tickets-checkout/ | "Tickets Checkout - Smith Physical Therapy +" (44) | No | No | "Tickets Checkout" | Transactional; no SEO value |
| https://smithptplus.com/events-programs/ | "Your access to this site has been limited by the site owner" (59) | No | No | N/A (503 blocked) | Wordfence blocked crawl |
| https://smithptplus.com/privacy-policy/ | "Privacy Policy - Smith Physical Therapy +" (42) | No | No | "Privacy Policy" | Non-indexable for ranking purposes |
| https://smithptplus.com/events-calendar/ | "Events Calendar - Smith Physical Therapy +" (43) | No | No | "Events Calendar" | No keyword H1 |
| https://smithptplus.com/events-classes/ | "Events - Classes - Smith Physical Therapy +" (44) | No | Yes (140) | "Events – Classes" | Desc shared with races page |
| https://smithptplus.com/events-races/ | "Events - Races - Smith Physical Therapy +" (42) | No | Yes (140) | "Events – Races" | Desc shared with classes page |
| https://smithptplus.com/join-our-team/ | "Join Our Team - Smith Physical Therapy +" (41) | No | Yes (134) | "Join Our Team" | **noindex** in robots meta |
| https://smithptplus.com/meet-the-team/ | "About Us - Smith Physical Therapy +" (36) | No | Yes (123) | "About Us" | URL says "meet-the-team", title says "About Us" — mismatch |
| https://smithptplus.com/dance-medicine/ | "Dance Medicine - Smith Physical Therapy +" (42) | No | Yes (133) | "Dance Medicine" | Service page |
| https://smithptplus.com/return-to-sport/ | "Return To Sport - Smith Physical Therapy +" (43) | No | Yes (131) | "Return To Sport" | Service page |
| https://smithptplus.com/performance-and-recovery/ | "Performance and Recovery - Smith Physical Therapy +" (51) | No | Yes (147) | "Performance and Recovery" | Service page |
| https://smithptplus.com/running-academy/ | "Running Academy - Smith Physical Therapy +" (43) | No | Yes (142) | "Running Academy" | Service page |
| https://smithptplus.com/events/age-strong-winter-2026-2026-01-08/ | "Age Strong - Winter 2026 - Smith Physical Therapy +" (52) | No | No | "Age Strong – Winter 2026" | Event sub-page |
| https://smithptplus.com/events/age-strong-winter-2026-2026-01-08-2026-01-15/ | "Age Strong - Winter 2026 - Smith Physical Therapy +" (52) | No | No | "Age Strong – Winter 2026" | Duplicate of above |
| https://smithptplus.com/events/age-strong-winter-2026-2026-01-08-2026-01-15-2026-01-22/ | "Age Strong - Winter 2026 - Smith Physical Therapy +" (52) | No | No | "Age Strong – Winter 2026" | Duplicate of above |
| https://smithptplus.com/events/age-strong-winter-2026-2026-01-08-2026-01-15-2026-01-22-2026-01-29/ | "Age Strong - Winter 2026 - Smith Physical Therapy +" (52) | No | No | "Age Strong – Winter 2026" | Duplicate of above |
| https://smithptplus.com/events/age-strong-winter-2026-2026-01-08-2026-01-15-2026-01-22-2026-01-29-2026-02-05/ | "Age Strong - Winter 2026 - Smith Physical Therapy +" (52) | No | No | "Age Strong – Winter 2026" | Duplicate of above |
| https://smithptplus.com/events/age-strong-winter-2026-2026-01-08-2026-01-15-2026-01-22-2026-01-29-2026-02-05-2026-02-12/ | "Age Strong - Winter 2026 - Smith Physical Therapy +" (52) | No | No | "Age Strong – Winter 2026" | Duplicate of above |
| https://smithptplus.com/events/dirt-circus/ | "Dirt Circus - Smith Physical Therapy +" (39) | No | Yes (12: "Dirt Circus") | "Dirt Circus" | Thin meta desc (12 chars) |
| https://smithptplus.com/events/age-strong-2026-session-4-2026-09-16-2026-09-23/ | "Age Strong - 2026: Session 4 - Smith Physical Therapy +" (56) | No | No | "Age Strong – 2026: Session 4" | Event sub-page |
| https://smithptplus.com/events/age-strong-2026-session-4-2026-09-16-2026-09-23-2026-09-30/ | "Age Strong - 2026: Session 4 - Smith Physical Therapy +" (56) | No | No | "Age Strong – 2026: Session 4" | Duplicate |
| https://smithptplus.com/events/age-strong-2026-session-4-2026-09-16-2026-09-23-2026-09-30-2026-10-07/ | "Age Strong - 2026: Session 4 - Smith Physical Therapy +" (56) | No | No | "Age Strong – 2026: Session 4" | Duplicate |
| https://smithptplus.com/events/age-strong-2026-session-4-2026-09-16-2026-09-23-2026-09-30-2026-10-07-2026-10-14/ | "Age Strong - 2026: Session 4 - Smith Physical Therapy +" (56) | No | No | "Age Strong – 2026: Session 4" | Duplicate |

---
## Indexability Signals

- **All robots tags:** "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" on all pages except one.
- **/join-our-team/ anomaly:** robots field is an array: `["index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1", "noindex"]`. This is a conflicting signal — two robots directives present simultaneously. Google will typically honor "noindex" if it appears anywhere in the array. This page is likely not indexed.
- **/events-programs/:** Returned HTTP 503 (Wordfence block). If this happens for Googlebot too, the page is effectively deindexed by crawl failure.
- **Transactional pages indexed:** /tickets-order/ and /tickets-checkout/ are set to "index, follow" — these have no SEO value and should be noindexed.
- **Event sub-pages:** 11 of 25 crawled pages are date-variant URLs for the same events (Age Strong Winter 2026 and Age Strong Session 4). These are near-duplicate thin pages all set to "index, follow" — a significant duplicate content risk.

---
## Competitive Intelligence

### Services Offered
14 distinct named services/programs identified:

1. **Physical Therapy** — general outpatient, one-on-one care
2. **Balance and Concussion** — Concussion Management & Rehabilitation, Vestibular Rehabilitation, Headaches and TMJ, Parkinson's LSVT BIG Treatment
3. **Dance Medicine** — injury rehab, wellness and recovery sessions, technique improvement
4. **Menopause Movement Medicine** — women's health program for managing menopausal symptoms and long-term function (new — added April 2026)
5. **Performance and Recovery** — goal identification, functional assessment, biomechanics coaching, Soft Tissue Care, Dry Needling
6. **Return to Sport** — Return-to-Play Testing, Video Analysis, ACL Recovery, Group Training
7. **Running Academy** — technique analysis and training, injury rehabilitation, youth running camps, virtual training
8. **Age Strong** — recurring group fitness program for older adults (Winter 2026 + Session 4 editions)
9. **Woman Strong** — recurring group fitness sessions (5:30 and 6:30 sessions sold out as of crawl date)
10. **Special Programs / Events** — Marathons, aquathons, workshops
11. **Soft Tissue Recovery** — Cupping, Graston, ASTYM, Rock Blades (listed in lead gen form options)
12. **Fascial Manipulation (FM1)** — advanced clinical training workshop (Level One Fascial Manipulation® Workshop, May 1–3, 2026, hosted at clinic)
13. **Running Events** — Dirt Circus (May 30, 2026), 9th Annual Crystal Lake Aquathon (Jul 19, 2026), 7th Annual Crystal Lake Half Marathon & 12K (Sep 6, 2026)
14. **Observation / Internship Program** — for pre-PT high school and college students

### CTA Language (body copy)

**Primary CTA — popup modal, appears on every page of the site:**
> _"Book your FREE 30-Minute Discovery Session with a licensed physical therapist—no referral needed. We'll assess your movement, discuss your goals, and give you clear next steps."_
- Popup slug: `30-minute-discovery`; auto-opens after 7.5 seconds on every page (delay: 7500ms), with a 1-month cookie to suppress after first close or form submission
- Popup title: "Struggling with pain or injury?"
- **This CTA appears on every single crawled page** as a persistent popup overlay

**Secondary CTA — homepage hero section:**
> "Schedule a Visit" (button linking to https://smithptplus.com/visit-appointment/)

**Supporting copy — homepage:**
> "You deserve to move better and feel better. Optimize your performance and prevent injuries with personalized care from our expert physical therapy team."

**Footer CTA (all pages):**
> "Sign Up for Our Newsletter"
> "PATIENT LOGIN"

**Service card CTAs (homepage):**
> "[LEARN MORE]" — used on every service card

**Lead gen form — services offered checklist (inside popup, all pages):**
- Physical Therapy
- Concussion / Balance / Headaches/TMJ
- Dance Medicine
- Return to Sports
- Running Academy / Running training / Virtual training
- Soft Tissue Recovery (cupping, Graston, ASTYM, Rock Blades, etc)

**Disclaimer in popup (all pages):**
> _"Per federal guidelines, individuals covered under federally funded programs—including but not limited to Medicare, Medicaid, Tricare, Veterans Health Administration (VHA), and other government-sponsored insurance plans—are not eligible to receive free discovery sessions or complimentary assessments."_

**Events races page body copy:**
> "The Dirt Circus is rolling back into the Crystal Lake area for the second year in a row and Smith Physical Therapy + is excited to be a part of this event again!"

**Join Our Team page:**
No "Discovery Session" CTA text appears in the body. However, the site-wide popup is still present on this page.

### Pricing Transparency

- **No prices listed anywhere** on the crawled pages.
- **No explicit "cash-based" or "cash pay" framing** found in any page.
- **Insurance acknowledged implicitly** via the popup disclaimer: federally funded programs (Medicare, Medicaid, Tricare, VHA) are specifically excluded from the free discovery session. This implies they do accept insurance, but the exclusion carve-out also signals they operate a hybrid model where at least the discovery session is a private-pay offer.
- **No "call for pricing"** language found.
- **No self-pay rate card** found.

### Blog Topics / Media Mentions on Homepage

Three blog posts visible in the "Latest Tips and Techniques" section on the homepage:

| Title | Date | Category |
|---|---|---|
| Smith PT+ Featured in Crystal Lake City Lifestyle Magazine | April 28, 2026 | In the Media, Women's Health |
| New York Times Features Denise Smith | April 27, 2026 | In the Media, Physical Therapy Tips |
| What is Menopause Medicine | April 22, 2026 | Physical Therapy Tips, Women's Health |

Blog section link: https://smithptplus.com/tips-techniques/  
**Note:** The blog section was not crawled directly; only homepage previews were captured. Author "Melissa Nickle" is credited on the City Lifestyle article. "Denise Smith" is mentioned as the New York Times-featured practitioner (April 27, 2026 article by Amanda Loudin).

### Schema Markup

**None found.** A search for "schema.org" and "@type" across all 25 pages returned zero matches. Smith PT+ has **no structured data** implemented anywhere on the crawled pages — no LocalBusiness, MedicalBusiness, Person, Article, Event, or BreadcrumbList schema. This is a significant SEO gap for a local healthcare provider.

### Trust Signals

**Named practitioners found:**
- **Denise Smith** — featured in The New York Times (April 27, 2026, article by Amanda Loudin); appears to be the owner/principal
- **Patti Noble** — authored "Strong For Life" article in Crystal Lake City Lifestyle Magazine (April 28, 2026)
- **Melissa Nickle** — credited as the publisher of the City Lifestyle article on the website
- **Carla Baldwin** — listed as site author/WordPress user (BaldwinWeb.Design — the web developer)

**Credentials visible in crawl:**
- "licensed physical therapist" (popup copy)
- Parkinson's LSVT BIG Treatment (specialty certification implied)
- Fascial Manipulation® Level 1 workshop being hosted (instructor-level credentialing implied)
- "dedicated therapists" language; no individual DPT credentials listed in crawled pages

**Media trust signals:**
- New York Times feature (April 2026)
- Crystal Lake City Lifestyle Magazine feature (April 2026)

**Community trust signals:**
- 7th Annual Crystal Lake Half Marathon & 12K (hosted since at least 2020)
- 9th Annual Crystal Lake Aquathon (hosted since at least 2018)
- YouTube channel: https://www.youtube.com/channel/UChgeUsJOeHFcckzEgKDM5hg (585 subscribers)
- Social media: Facebook (@smithptrun), Instagram (@smithptrun), LinkedIn, YouTube

**Reviews/testimonials:**
- Homepage markdown mentions "Reviews from Our Clients" as a section heading, but the actual review content is dynamically loaded and not captured in the crawl markdown. The Google Maps embed link is present for Crystal Lake location.

**Internship/partnership:**
- School district partnerships for high school micro-internships

### "Discovery Call" / "Discovery Session" Mentions

**Phrase used exclusively: "Discovery Session"** (never "Discovery Call")

**Exact phrase count: 44 occurrences across all 25 pages**

- The phrase appears on **every single crawled page** via the sitewide popup overlay
- The popup auto-fires on all pages after 7.5 seconds
- **Two instances per page:** once in the markdown-rendered popup text, once in the raw HTML popup code
- Exact phrase: _"Book your FREE 30-Minute Discovery Session with a licensed physical therapist—no referral needed."_
- Popup cookie name: `pum-3207` (slug: `30-minute-discovery`)
- The disclaimer following each mention specifically calls out federally funded programs' ineligibility, which implies this is a private-pay/cash offer used as a top-of-funnel lead gen tool

**Specific pages where it appears in body content (not just popup):**
All 25 pages — the popup is injected into the HTML of every page. The phrase does NOT appear organically within the editorial/marketing body copy of any service page (outside the popup).

---
## SEO Issues Summary (Quick Reference)

1. **Massive duplicate content from event date-variant URLs** — 11 of 25 crawled pages are near-identical pages for the same two events (Age Strong Winter 2026 and Age Strong Session 4) with different date combos in the URL. All are set to index. These should be consolidated or canonicalized.

2. **No schema markup anywhere** — Zero structured data across 25 pages. A local healthcare/medical practice with events, blog articles, and named practitioners missing LocalBusiness, MedicalBusiness, Event, and Article schema is leaving significant SERP enhancement opportunity on the table.

3. **Transactional and utility pages unnecessarily indexed** — /tickets-order/ and /tickets-checkout/ are set to index, follow. These pages have no SEO value and dilute crawl budget.

4. **Broken robots directive on /join-our-team/** — Conflicting robots array (both "index, follow" and "noindex") almost certainly causes this page to be deindexed, yet it contains valuable employer branding content.

5. **Missing meta descriptions on 15 of 25 pages** — All event sub-pages, calendar, and ticket pages have no meta description, resulting in Google auto-generating snippets.

6. **URL/title mismatch on About page** — URL is /meet-the-team/ but title tag and H1 are "About Us." This wastes the keyword signal in a branded URL.

7. **Events-programs blocked by Wordfence** — /events-programs/ returned a 503 during the crawl. If this affects Googlebot, this page is effectively deindexed.
