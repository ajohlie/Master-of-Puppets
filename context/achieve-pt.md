# Client Context — Achieve Physical Therapy & Wellness

**Slug:** achieve-pt
**URL:** https://achieveptwellness.com
**GSC Property:** https://achieveptwellness.com
**Platform:** Squarespace
**Location:** Barrington, IL
**Owner:** Dr. Julie Roy, DPT

---

## Target Keywords

- physical therapy Barrington IL
- PT clinic Barrington
- sports physical therapy Barrington
- TMJ physical therapy Barrington
- pelvic floor physical therapy Barrington
- discovery call physical therapy
- one-on-one physical therapy Barrington
- cash pay physical therapy Barrington IL

---

## Competitors

| Name | URL | Notes |
|------|-----|-------|
| Athletico Physical Therapy Barrington | https://www.athletico.com/locations/barrington/ | Large chain; has dedicated pelvic health page at /barrington-pelvic-health-therapy/ which ranks #4 for pelvic floor; no TMJ page; no transparent pricing; no 1-on-1 angle |
| Doctors of Physical Therapy Barrington | https://doctorsofphysicaltherapy.com/our-locations/barrington/ | No schema; location page is thin; also claims 1-on-1 positioning; domain authority drives rankings despite weak content |
| Advocate Health PT Barrington | https://www.advocatehealth.com/locations/advocate-physical-therapy-barrington-60010 | Shell page; ranks #1 for primary PT queries due to brand authority; low content threat |
| Team Rehab Barrington | https://team-rehab.com/location/barrington/ | Discovered 2026-06-06; ranks #2 for "physical therapy Barrington IL" and #1 for "pelvic floor PT Barrington"; similar service mix (TMJ, pelvic health, LSVT-BIG, dry needling, IASTM, golf injury, running analysis); hours 7am–7pm Mon–Thu — strong all-around competitor |
| Loop PT Barrington | https://looppt.com/physical-therapy-clinic/barrington-il/ | Discovered 2026-06-06; Chicago chain with Barrington location; ranks #2 for "TMJ physical therapy Barrington" purely via geo-signaled title tag — no clinical depth advantage over Achieve |

---

## Differentiators (do not suggest these as gaps — already implemented)

- One-on-one sessions only (no PT aide/tech model)
- Discovery call offering (free consult)
- Cash-pay / transparent pricing model
- Dr. Julie Roy is sole treating therapist
- TMJ specialization
- Pelvic floor specialization
- Wellness services alongside PT

---

## Technical Notes

- Squarespace platform — all schema and meta injected via Page Header Injection
- Playwright audits require `waitUntil: 'networkidle'` for accurate meta/schema capture
- Title tags were over 60 chars due to Squarespace auto-appending site name — partially fixed
- `/home` and `/` had duplicate indexing issue — flagged in Phase A audit
- Some system pages need noindex tags

---

## Schema Architecture

- Organization schema on homepage
- LocalBusiness schema with NAP
- Service schema on individual service pages
- No FAQ schema yet — opportunity

---

## Audit History

- 2024 — Initial Playwright crawl (22 pages). Found title length issue (13/22 pages over 60 chars), zero "discovery call" mentions in body copy, duplicate indexing on /home vs /, partial noindex on system pages.
- 2024 — Phase A (Firecrawl audit) and Phase B (Tavily competitor discovery, 5 competitor finalists identified). Phase C deep-scraping queued.
- 2026-06-06 — Competitor gap analysis. 8 keywords queried via SerpAPI (8/100 monthly calls used). 2 critical ranking gaps identified: TMJ and pelvic floor not ranking despite being stated specializations. 5 content gaps found. 2 new competitors added (Team Rehab, Loop PT). Top priority: geo-optimize TMJ title tag (30 min), create dedicated pelvic floor page (2–3 hrs). GSC OAuth token expired — re-authenticate before next run.
