# Achieve PT — SEO Recommendations vs. Competitors
*Scraped & analyzed: 2026-04-28*
*Site: achieveptwellness.com | Competitors: Advocate PT, DPT Barrington, Athletico Barrington*

---

## Executive Summary

Your site has the best content quality and trust signals of any competitor in Barrington. The copy is sharp, pricing is transparent, reviews are real, and your differentiators (1-on-1, TMJ, LSVT BIG, Tensile Studio) are genuinely unique. The gap is technical and structural SEO — title tags, H1s, missing condition pages, and schema. Fix those and you will outrank all three competitors on the terms that matter.

**Advocate PT** — shell page, no content, easiest to outrank.
**DPT** — good copy, no schema, weak title tags, no condition pages.
**Athletico** — the real threat. Dominant service list, named team, insurance list, Saturday hours. But no TMJ page, no transparent pricing, no 1-on-1 angle.

---

## Page-by-Page Recommendations

---

### 1. Homepage — `achieveptwellness.com/`

**Current title tag:** `Achieve Physical Therapy & Wellness`
**Problem:** No city, no keyword. Google uses this as the primary ranking signal for branded + local search.

**Fix:**
```
Achieve PT & Wellness | Physical Therapy in Barrington, IL
```
or
```
Physical Therapy Barrington IL | 1-on-1 Care with Dr. Julie Roy, DPT
```

**Current H1:** `1-on-1 Physical Therapy in Barrington, IL` ✓ Good — keep it.

**Missing from homepage body copy:** Specific condition keywords. Right now the homepage talks about *how* you work (1-on-1, root cause) but not *what conditions* you treat. Google looks for both. Competitors like Athletico lead with: "back and neck pain, muscle strains, sports and work-related injuries."

**Add to homepage body (suggestion — one sentence under the hero or in the "Services" section):**
> "Treating neck pain, back pain, shoulder injuries, hip pain, knee pain, TMJ/jaw disorders, post-surgical rehab, and neurologic conditions including Parkinson's disease."

**Missing: LocalBusiness schema markup.**
Squarespace doesn't auto-generate medical business schema. You need to add a JSON-LD block:
```json
{
  "@context": "https://schema.org",
  "@type": "PhysicalTherapist",
  "name": "Achieve Physical Therapy & Wellness",
  "url": "https://www.achieveptwellness.com",
  "telephone": "+18473873610",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "756 W Northwest Hwy, Suite B",
    "addressLocality": "Barrington",
    "addressRegion": "IL",
    "postalCode": "60010"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.1678325,
    "longitude": -88.1570241
  },
  "openingHours": ["Mo 07:00-19:00", "Tu 08:30-17:00", "We 08:30-17:00", "Th 08:30-17:00", "Fr 07:00-17:00"],
  "priceRange": "$80-$180"
}
```
Add this in Squarespace via Settings → Advanced → Code Injection → Header.

**Competitor gap you can exploit on the homepage:**
- Athletico does NOT list pricing. You do. Add "Transparent pricing — see costs before you book" as a trust signal near the top.
- DPT doesn't name their therapist. You name Julie prominently. Keep and amplify this.

---

### 2. About Page — `achieveptwellness.com/about`

**Current title tag:** `About Julie Roy, Owner of Achieve Physical Therapy — Achieve Physical Therapy - Barrington, IL`
The title is too long (85+ chars, Google truncates at ~60). Also buried "Barrington, IL" at the end.

**Fix:**
```
Dr. Julie Roy, DPT | Physical Therapist in Barrington, IL
```

**Current H1:** `Hi! I'm Julie Roy, DPT`
**Problem:** This is the single biggest missed SEO opportunity on the site. The H1 is the strongest on-page ranking signal. "Hi! I'm Julie Roy, DPT" contains zero searchable keywords.

**Fix:**
```
Dr. Julie Roy, DPT — Physical Therapist in Barrington, IL
```

**Current meta description:** "Learn about Achieve Physical Therapy in Barrington, including services, treatment techniques, and the expertise of Dr. Julie Roy, DPT, dedicated to pain relief and overall functional wellness."
This is generic and doesn't trigger search intent.

**Fix:**
> "Meet Dr. Julie Roy, DPT — board-certified physical therapist and owner of Achieve PT in Barrington, IL. Specializing in orthopedic rehab, TMJ therapy, dry needling, and LSVT BIG for Parkinson's."

**Missing: E-E-A-T signals (Experience, Expertise, Authoritativeness, Trust).**
Google ranks healthcare pages heavily on E-E-A-T. The about page mentions credentials in passing but doesn't structure them for crawlers.

**Add a structured credentials section:**
```
- Doctorate of Physical Therapy — Carroll University
- Certified Dry Needling Practitioner
- LSVT BIG Certified Clinician (Parkinson's rehabilitation)
- Barrington Area Chamber of Commerce Member
- [In progress] National Pilates Certification Program
```
Bullet-list format is crawlable and scannable.

**Competitor gap:** No competitor in Barrington shows their therapist's credentials in structured form. Athletico names 9 therapists but doesn't list certifications beyond specializations. This is a clean win.

---

### 3. Services / Booking Page — `achieveptwellness.com/services`

**Current title tag:** `Book Physical Therapy — Achieve Physical Therapy - Barrington, IL` ✓ Decent.

**Fix (small improvement):**
```
Book Physical Therapy in Barrington, IL | Pricing & Scheduling | Achieve PT
```

**What this page does well:**
- Transparent pricing (unique vs. all 3 competitors)
- Step-by-step process (builds trust)
- Private pay vs. insurance comparison image

**What's missing:**
The page is booking/pricing focused but contains almost no condition keywords. Someone searching "physical therapy for back pain Barrington" won't see this page rank because the page doesn't mention "back pain."

**Add a short section after pricing:**
```
## Conditions We Treat

Achieve PT treats a wide range of orthopedic and neurologic conditions in Barrington, IL:

- Neck pain and cervical injuries
- Back pain and lumbar disorders
- Shoulder injuries (rotator cuff, labrum, impingement)
- Hip pain and hip replacement rehab
- Knee pain and ACL rehabilitation
- Foot and ankle injuries
- TMJ/TMD jaw pain and dysfunction
- Post-surgical rehab (orthopedic)
- Parkinson's disease (LSVT BIG certified)
- Stroke and neurologic rehab
- Headaches related to cervical or jaw dysfunction
```

This one addition would make this page rank for a dozen high-intent local searches that currently go to Athletico.

---

### 4. TMJ/TMD Page — `achieveptwellness.com/treatment-techniques/tmd-tmj`

**This is your single biggest competitive advantage. No other PT clinic in Barrington has a dedicated TMJ page.**

**Current title tag (not scraped in full — check in Squarespace):**
Likely: "TMD / TMJ Therapy — Achieve Physical Therapy - Barrington, IL"

**Target keywords for this page:**
- `TMJ physical therapy Barrington IL` — zero competition
- `jaw pain physical therapy Barrington`
- `TMD therapy near me Barrington`
- `TMJ specialist Barrington Illinois`
- `jaw clicking physical therapy`

**Recommended title tag:**
```
TMJ & TMD Physical Therapy in Barrington, IL | Achieve PT
```

**Recommended H1 (if not already):**
```
TMJ / TMD Therapy — Jaw Pain Physical Therapy in Barrington, IL
```

**Content to add if not already present:**
- What is TMD/TMJ (brief definition — Google uses this for featured snippets)
- Common symptoms: clicking, locking, jaw pain, headaches, ear pain, clenching
- How PT treats TMJ (manual therapy, posture correction, habit changes)
- Why PT is an alternative to a bite guard or dental appliance
- A clear FAQ section (also targets "People Also Ask" in Google)

**Competitor gap:** Athletico lists "Concussion & Vertigo/Vestibular" but has zero TMJ content. DPT has no TMJ page. Advocate has nothing. If someone in Barrington searches "jaw pain physical therapy" — this page should be the result. It currently isn't, likely because it needs more keyword density and structured content.

---

### 5. Dry Needling Page — `achieveptwellness.com/treatment-techniques/trigger-point-dry-needling`

**Target keywords:**
- `dry needling Barrington IL`
- `trigger point dry needling Barrington`
- `dry needling near me Barrington`

**Competitor situation:**
- Athletico Barrington offers dry needling and mentions it in their services list
- But Athletico has NO dedicated dry needling page — it's buried in a list
- DPT and Advocate don't mention dry needling at all

**Recommended title tag:**
```
Trigger Point Dry Needling in Barrington, IL | Achieve PT & Wellness
```

**Content to verify/add:**
- Clear definition: what dry needling is vs. acupuncture (common question)
- What conditions it treats (muscle tension, trigger points, chronic pain, sports recovery)
- What to expect during a session
- Pricing ($80 / 30 min) — already on the site, make sure it's on THIS page too
- A FAQ section targeting: "Does dry needling hurt?", "How many sessions?", "Is it safe?"

**The FAQ angle is critical.** "People Also Ask" boxes in Google for "dry needling Barrington" are empty right now — first mover takes them.

---

### 6. Neurologic PT Page — `achieveptwellness.com/treatment-techniques/neurologic-physical-therapy`

**Target keywords:**
- `Parkinson's physical therapy Barrington IL`
- `LSVT BIG Barrington Illinois`
- `neurologic physical therapy Barrington`
- `stroke rehabilitation Barrington IL`
- `MS physical therapy Barrington`

**Your advantage:** LSVT BIG certification is rare. No competitor in Barrington has it. Athletico mentions "Parkinson's" nowhere on their Barrington page. DPT doesn't either.

**Recommended title tag:**
```
Neurologic Physical Therapy in Barrington, IL | LSVT BIG | Achieve PT
```

**Recommended H1:**
```
Neurologic Physical Therapy in Barrington, IL
```

**Content to verify/add:**
- Explicitly name LSVT BIG and explain what it is (one paragraph)
- Conditions: Parkinson's disease, stroke recovery, multiple sclerosis, balance disorders
- What makes Julie's neurologic approach different (1-on-1, no aides)
- The Tensile Strength Studio environment is a real advantage for neuro patients (space, equipment)
- Caregiver information section — family members often search for this on behalf of loved ones

---

### 7. Missing Pages — Create These (Highest ROI)

These pages don't exist yet but each targets a distinct high-intent search with zero competition in Barrington:

#### A. Condition-Specific Pages (create one per condition)

| Page URL (suggested) | Target Keyword |
|----------------------|----------------|
| `/back-pain-physical-therapy-barrington` | "back pain physical therapy Barrington IL" |
| `/neck-pain-physical-therapy-barrington` | "neck pain physical therapy Barrington IL" |
| `/shoulder-pain-physical-therapy-barrington` | "shoulder injury physical therapy Barrington" |
| `/knee-pain-physical-therapy-barrington` | "knee pain PT Barrington" |
| `/post-surgical-rehab-barrington` | "post surgery physical therapy Barrington IL" |

**Each page needs:**
- H1 with condition + city
- 300-500 words of condition-specific content
- Link to relevant treatment technique pages
- CTA to book free consultation

#### B. Location / Area Pages

You list served areas in the footer but have no pages for them. Create:
- `/physical-therapy-lake-zurich-il`
- `/physical-therapy-palatine-il`
- `/physical-therapy-inverness-il`

Each is a thin page (200-300 words) saying you serve that area + what you offer + CTA. These pages rank quickly because no competitor has them and the local search volume is real.

---

## Quick Wins Summary (Do These First)

| Priority | Page | Change | Time |
|----------|------|--------|------|
| 1 | Homepage | Fix title tag — add "Barrington, IL" | 5 min |
| 2 | About | Change H1 from "Hi! I'm Julie" to keyword-rich version | 5 min |
| 3 | About | Fix title tag — shorten, lead with credential + city | 5 min |
| 4 | Services | Add "Conditions We Treat" section with condition keywords | 30 min |
| 5 | TMJ page | Optimize title tag + add FAQ section | 45 min |
| 6 | All pages | Add LocalBusiness JSON-LD schema to site header | 30 min |
| 7 | Dry Needling | Add FAQ section targeting People Also Ask | 30 min |
| 8 | Neurologic | Add LSVT BIG keyword + Parkinson's/stroke/MS explicitly | 20 min |
| 9 | New | Create 2-3 condition pages (back pain, neck pain, post-surgical) | 2 hrs |
| 10 | New | Create 2 area pages (Lake Zurich, Palatine) | 1 hr |

---

## What You're Already Doing Right (Don't Change)

- H1 on homepage is good
- Transparent pricing is a major trust signal — keep it, no competitor shows prices
- 5-star Google reviews on the homepage — keep them prominent
- "Areas Served" in footer — good for local signals
- Free injury consultation CTA — this is your best lead gen hook, it's everywhere it should be
- The "Is This You?" section on homepage is a conversion weapon — keep it
- Named therapist (Dr. Julie) throughout — Athletico names 9 people but none are the owner/founder
