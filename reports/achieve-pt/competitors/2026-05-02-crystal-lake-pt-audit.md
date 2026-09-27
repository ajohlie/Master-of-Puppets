# Crystal Lake Physical Therapy — Competitor SEO Audit
**URL:** https://www.crystallakept.com  
**Crawl date:** 2026-05-02  
**Pages crawled:** 25

---

## Summary
- Pages crawled: 25
- Pages missing meta description: 2 (/request-appointment.html, /sitemap.xml)
- Pages with title >60 chars: 3
- Pages missing H1 (functional): All 25 — see critical issue below
- "Discovery call" mentions (body text): 0

### Critical Technical Issue: H1 Blocked by JavaScript Widget
Every page shows "www.powr.io is blocked" as the detected H1. This is a Wix/Powr.io widget that Firecrawl could not render — blocking the page actual H1 content. From HTML inspection, the real H1s appear to be "New Health and Wellness Classess!" (a sitewide promotional banner with a typo) on most pages. This means:
1. Their H1 may not be unique per page — it may be the same promotional banner sitewide.
2. Any H1 set within the Wix editor may not be rendering correctly for crawlers.
3. Search engines may be seeing the wrong H1 (or no meaningful H1) on every page.

---

## Page Inventory

| URL | Title (chars) | Trunc? | Meta Desc | H1 (detected) | Words |
|-----|--------------|--------|-----------|----------------|-------|
| / (homepage) | Crystal Lake Physical Therapy (36) | No | 200 chars | [JS blocked] | 680 |
| /multiple-sclerosis.html | Crystal Lake Physical Therapy (50) | No | 197 chars | [JS blocked] | 635 |
| /telemedicine.html | Crystal Lake Physical Therapy (44) | No | 198 chars | [JS blocked] | 971 |
| /financing-options-with-cherry.html | Financing Options With Cherry (61) | YES | 29 chars | [JS blocked] | 643 |
| /motor-vehicle-accident-injuries.html | Motor Vehicle Accident Injuries PT (63) | YES | 198 chars | [JS blocked] | 909 |
| /direct-access.html | Crystal Lake Physical Therapy (45) | No | 200 chars | [JS blocked] | 458 |
| /sports-injuries.html | Crystal Lake Physical Therapy (47) | No | 201 chars | [JS blocked] | 1,047 |
| /our-practice.html | Crystal Lake Physical Therapy (44) | No | 192 chars | [JS blocked] | 557 |
| /our-location.html | Crystal Lake Physical Therapy (44) | No | 142 chars | [JS blocked] | 381 |
| /neck-pain.html | Crystal Lake Physical Therapy (41) | No | 198 chars | [JS blocked] | 1,036 |
| /request-appointment.html | Request (19) | No | MISSING | [JS blocked] | 427 |
| /post-surgical-rehab.html | Crystal Lake Physical Therapy (51) | No | 196 chars | [JS blocked] | 1,029 |
| /vestibular-rehab.html | Crystal Lake Physical Therapy (48) | No | 202 chars | [JS blocked] | 933 |
| /patient-resources.html | Crystal Lake Physical Therapy (49) | No | 192 chars | [JS blocked] | 404 |
| /work-injuries.html | Crystal Lake Physical Therapy (45) | No | 202 chars | [JS blocked] | 1,018 |
| /pelvic-pain.html | Crystal Lake Physical Therapy (43) | No | 202 chars | [JS blocked] | 1,256 |
| /stemwave.html | Crystal Lake Physical Therapy (40) | No | 199 chars | [JS blocked] | 755 |
| /newsletters.html | Crystal Lake Physical Therapy (43) | No | 29 chars | [JS blocked] | 404 |
| /clptblog | Crystal Lake PT Blog (66) | YES | 74 chars | [JS blocked] | 6,729 |
| /patient-infoforms.html | Crystal Lake Physical Therapy (50) | No | 72 chars | [JS blocked] | 532 |
| /contact-us.html | Crystal Lake Physical Therapy (42) | No | 141 chars | [JS blocked] | 533 |
| /patient-intake-form.html | Crystal Lake Physical Therapy (51) | No | 197 chars | [JS blocked] | 787 |
| /shoulder-pain.html | Crystal Lake Physical Therapy (45) | No | 201 chars | [JS blocked] | 1,072 |
| /tmj-dysfunction.html | Crystal Lake Physical Therapy (47) | No | 202 chars | [JS blocked] | 928 |
| /sitemap.xml | (0 chars) | No | MISSING | NONE | 1 |

**Pattern:** Nearly every page title is the same boilerplate "Crystal Lake Physical Therapy" — no keyword differentiation per page.

---

## Indexability Signals

| URL | Finding |
|-----|---------|
| All 25 pages | No robots meta tags detected — all indexed by default |
| /sitemap.xml | Crawled as a content page; XML sitemap should not be rendered as HTML |
| /request-appointment.html | Indexed with no meta description and minimal title ("Request") |
| /newsletters.html | Indexed with only 29-char meta description |
| /financing-options-with-cherry.html | Indexed with only 29-char meta description |

---

## Competitive Intelligence

### Services Offered

Conditions treated: Arthritis, Back Pain & Sciatica, Balance & Gait Disorders, Chronic Pain, Elbow/Wrist/Hand Pain, Fibromyalgia, Hip & Knee Pain, Incontinence/Pelvic Floor, Motor Vehicle Accidents, Multiple Sclerosis, Myofascial Release/MPS Dolphin Neuro Stim, Neck Pain, Pelvic Pain, Post-Mastectomy PT, Post-Surgical Rehab, Pre-Surgical Rehab, Shoulder Pain, Sports Injuries, TMJ Dysfunction, Telemedicine PT, Vestibular Rehab, Work Injuries

Specialty/Additional: StemWave Therapy (shockwave), Cherry Financing (buy now pay later), Health & Wellness Classes (yoga, exercise — insurance accepted), Workshops

**Total: ~25 named services/conditions**

### CTA Language (body copy)

| Phrase | Count | Notes |
|--------|-------|-------|
| "contact us" | 105 | Dominant CTA — nav, footer, every page body |
| "schedule" | 26 | Generic scheduling language |
| "call us" | 5 | Phone-first |
| "request appointment" | 1 | Single use |
| "free consultation" | 1 | Single use, not prominent |

No "discovery call," "discovery session," or structured soft-entry offer.

### Pricing Transparency

Most transparent on pricing of all competitors audited:
- **Cherry financing page** with real example: "$250 treatment — $45.17/month for 24 months at 0% APR"
- Insurance mentioned 27 times; accepts insurance for PT and exercise classes
- Complimentary benefits check offered
- Telehealth out-of-pocket discount for uninsured patients explicitly stated
- Cherry financing serves as explicit cash/self-pay payment plan pathway

### Blog Topics (10+ posts, women's health focused)

- "Post-Mastectomy Physical Therapy: What Patients in Recovery Need to Know"
- "Leaking is NOT a normal part of aging!" (pelvic floor/incontinence)
- "One Postpartum Visit Is Not Enough!"
- "To Kegel Or Not To Kegel?"
- "Physical Therapy Can Successfully Treat Headaches"
- "Tips to Prevent Pain With Gardening This Spring"
- "Tips For Inflammation Management in the Summer!"
- "4 Injury Prevention Tips for 4th of July"
- "Give Chair Yoga a Try!"
- "Good Hydration is Key!"

### Schema Markup

**None.** No @type schema found in any of the 25 pages. Site runs on Wix (inferred from powr.io widget usage). No LocalBusiness, MedicalBusiness, Person, or MedicalCondition schema.

### Trust Signals

- "Voted One of the Best Physical Therapy Clinics in McHenry County in 2023 and 2024" — displayed on homepage
- Staff: "Emily" and "Tara" (both PT, DPT) named in patient reviews
- Testimonials/reviews section on site; Google review quotes
- 1-on-1 with licensed PT only — explicitly stated: "you will only be seen by a licensed physical therapist...full undivided attention"

### "Discovery Call" Mentions

**0 occurrences.** No soft-entry consultation offer in any body copy.

---

## Competitive Summary Notes

- **Strongest content competitor:** Best blog of any clinic audited, with topics directly overlapping Achieve PT target patient (pelvic floor, postpartum, incontinence, mastectomy).
- **Pricing transparency leader:** Cherry financing + insurance + discount policy = lowest-barrier entry point financially. Achieve PT has zero pricing info publicly visible.
- **Critical technical weakness:** H1 blocked sitewide by Powr.io JS widget; same boilerplate title tag on nearly every page. Strong content is undermined by weak on-page signals — opportunity for Achieve PT to outrank them on specific condition searches with properly optimized pages.
- **Same 1-on-1 DPT-only model as Achieve PT** — but they do not lead with practitioner name/credentials the way Achieve PT does with "Dr. Julie Roy, DPT."
