# Achieve PT Wellness — Weekly Health Check
**Date:** 2026-09-27
**Site:** https://www.achieveptwellness.com
**Platform:** Squarespace
**Pages discovered:** 32 (31 from `/sitemap.xml` + homepage `/`) — all fetched successfully (HTTP 200)

---

## TL;DR

- **Stale pricing: 0 pages show old prices to visitors.** However, **3 URLs (`/`, `/home`, `/services`) still carry the old $180/$80/$150 rates inside invisible JSON-LD structured data** (LocalBusiness `priceRange`, FAQPage schema, and a Service `Offer` on `/services`) — Google can surface these stale numbers in rich results even though the page text is correct.
- **New issues found this week:** 5 newly-published blog posts have no meta description; a "Book Your Session Today!" button on the Pilates blog post has a malformed href (redirects through a junk URL instead of going straight to booking); 7 new `/conditions/*` pages exist and are mostly clean but `/conditions/hip-pain` is missing a meta description; two duplicate `<title>` elements appear in the raw HTML of 8 pages (harmless SVG icon titles, not the real page title, but worth cleaning up).
- **Fixed since the last audit (2026-05-02):** `/home` now has a correct canonical tag pointing to `/`, resolving the duplicate-content risk flagged previously; all 4 blog posts flagged for missing meta descriptions in May now have them.
- **Unchanged / still open:** `/privacy-policy` still 404s and is linked from the footer of all 33 pages checked; 27 of 33 pages still have titles over 60 characters; the `/blog` index still marks every post card as an `<h1>` (now 13, up from 7 in May since more posts were added).
- No prior file matching `reports/achieve-pt/weekly-check-*.md` existed, so this is the first report in that series — I used `2026-05-02-audit.md` and `2026-05-05-minor-update.md` as the comparison baseline (see Comparison section).

---

## 1. Stale Pricing (top priority)

Current prices should be **$199** (initial eval), **$89** (30-min follow-up), **$159** (60-min follow-up). Old prices **$180 / $80 / $150** must not appear anywhere.

**Visible, on-page text: all clear.** Every page's visible body copy (`/`, `/home`, `/services`, `/faqs`) already shows $199 / $89 / $159. No other/different price values were found anywhere on the site.

**Structured data (JSON-LD, invisible to visitors, visible to Google): still stale on 3 URLs.**

| Page | Schema block | Field | Old text still present |
|---|---|---|---|
| `/` | `MedicalBusiness`/`LocalBusiness` (`#business`) | `priceRange` | `"$80–$180"` |
| `/` | `FAQPage` → Q: "How much does physical therapy cost in Barrington, IL?" | `acceptedAnswer.text` | `"...the initial evaluation is $180 (60 minutes). Follow-up recovery sessions are $80 for 30 minutes or $150 for 60 minutes..."` |
| `/home` | `MedicalBusiness`/`LocalBusiness` (`#business`) | `priceRange` | `"$80–$180"` (identical duplicate of `/`) |
| `/home` | `FAQPage` → same question | `acceptedAnswer.text` | Identical old text to `/` above |
| `/services` | `MedicalWebPage` (`services#webpage`) | `description` | `"...Transparent pricing: $180 eval, $80–$150 follow-ups."` |
| `/services` | `OfferCatalog` → Offer "Dry Needling Session" | `price` | `"80"` (stale rate mislabeled onto a service whose visible on-page price is $89) |
| `/services` | `OfferCatalog` → Offer "Follow-Up Session" | `price` / `description` | `price: "150"`, description `"Follow-up physical therapy session — $80 for 30 minutes or $150 for 60 minutes."` |

`/faqs` was checked separately and is fully clean — no old prices anywhere (on-page or JSON-LD).

**Why it matters:** this JSON-LD feeds Google's rich results / knowledge panel pricing, so a searcher could see "$80–$180" in search even though the page itself says $199/$89/$159. This should be corrected in the Squarespace page settings / code-injection blocks that generate these schema blocks.

---

## 2. SEO Health

### Title tags
- 33/33 pages have a title tag; none are empty.
- **27 of 33 pages exceed 60 characters** (mostly blog posts with the auto-appended "— Achieve Physical Therapy - Barrington, IL" suffix, and treatment-technique/condition pages with long descriptive titles). This is the same pattern flagged in the 2026-05-02 audit — persists, larger sample now.
- **No duplicate titles** across distinct content, except the expected `/` ↔ `/home` pair (same page, intentional duplicate — see canonical note below).
- **Technical note (not a real SEO title issue):** 8 pages (`/contact` and all 7 `/treatment-techniques*` pages) contain a *second* `<title>` element later in the HTML body. Inspection shows these are `<title>` elements inside inline SVG icons (used for accessibility labels), not a second page `<title>` — browsers/Google use only the first one in `<head>`. Flagging for awareness only; no action needed unless it's cluttering the SVG source unnecessarily.

### Meta descriptions
- **6 pages have no meta description:** the 5 newest blog posts (see list below) and `/conditions/hip-pain`.
- **18 pages have a description outside the 70–160 char target** (mostly on the long side — treatment-technique pages run 197–213 chars, homepage/`/home` run 283 chars).
- Pages missing a description:
  - `/blog/what-is-iastm-and-is-it-the-same-as-graston-or-muscle-scraping`
  - `/blog/what-is-dry-needling`
  - `/blog/dont-let-pain-bench-you-this-summer-understanding-orthopedic-pt`
  - `/blog/life-proof-not-just-summer-proof-pt-tips-for-staying-active-for-the-long-run`
  - `/blog/jointmobilizationvsmanipulation`
  - `/conditions/hip-pain`

### H1 tags
- 32/33 pages have exactly one H1.
- `/blog` (the index) has **13 H1 elements** — 12 blog post card titles are marked up as `<h1>` (a known Squarespace blog-index template behavior) plus one "Achieve Your Best" CTA/marquee heading. This is unchanged in kind from the May audit but grew from 7 to 13 as more posts were published.

### Images missing alt text
- **13 images across 13 pages** are missing alt text:
  - The same templated author-avatar image (`.../memberAccountAvatars/...`) is missing alt text on **all 12 blog posts** — a single template fix would resolve all of these at once.
  - `/about` — the hero photo of Dr. Julie Roy (`dr-julie-roy-dpt-1600w.webp`) has no alt text.

### Canonical tags
- All 33 pages have a canonical tag; none are missing.
- `/home` correctly canonicalizes to `https://www.achieveptwellness.com/` — this resolves the duplicate-content risk called out in the 2026-05-02 audit.

### Broken internal links (4xx/5xx)
| Link | Status | Notes |
|---|---|---|
| `/privacy-policy` | **404** | Linked from the footer of **all 33 pages checked** (sitewide). Same issue noted in the 2026-05-02 audit as "may be broken or unpublished" — confirmed still broken. |
| CTA button "Book Your Session Today!" on `/blog/pilates-physical-therapy-a-powerful-alliance-for-recovery-and-strength` | Not a clean 4xx, but malformed | `href` is a garbled string (`/scriptfunction-c-windowintakeq...`) that looks like a JS snippet was pasted into the button's URL field instead of the booking link. It 301-redirects to `/services` rather than straight to the booking widget (other CTAs link directly to `https://intakeq.com/booking/sglmgu`). Worth fixing so this button books a session in one click like the others. |
| `/cart`, `/conditions` → `/conditions/back-pain-sciatica`, `/new-dropdown` → `/treatment-techniques/orthopedic-physical-therapy` | 200 / 302 (working redirects) | No action needed. |

All 31 URLs in the sitemap plus the homepage returned HTTP 200 directly — no other broken internal links found among sitemap pages themselves.

### robots.txt & sitemap
- `robots.txt`: reachable, declares `Sitemap: https://www.achieveptwellness.com/sitemap.xml`, standard search engines allowed, AI/scraping bots disallowed (Squarespace default). No change from the 2026-05-05 report.
- `sitemap.xml`: reachable, lists 31 URLs. New since the May crawl: 7 `/conditions/*` pages (`back-pain-sciatica`, `shoulder-pain`, `knee-pain`, `post-surgical-rehabilitation`, `hip-pain`, `foot-ankle-pain`, `conditions-overview`) and 7 new blog posts.

---

## 3. Performance

I measured only raw HTML response time and page weight via direct fetch (no Lighthouse/PSI run this week — that would need to be re-run manually and is **not checked** here; see the 2026-05-05 report for the last real PSI numbers: 52/100 mobile, 13.5s mobile LCP).

- Server response times were fast and unremarkable: 0.24s–0.62s to download the full HTML for every page. `/blog` (0.62s) and `/` (0.50s) were the slowest; nothing stood out as a timeout or hang risk.
- Several pages are HTML-heavy (1.0–1.25 MB of raw markup, before images/CSS/JS): `/blog/why-does-my-jaw-click-tmd-tmj-therapy` (1254 KB), `/blog/life-proof-not-just-summer-proof-pt-tips-for-staying-active-for-the-long-run` (1246 KB), `/home` (1144 KB), `/treatment-techniques/joint-mobilization-and-manipulation` (1131 KB). This is markup weight only, not a Lighthouse score — flagging as a "worth watching" trend since it's grown since May, not a confirmed performance regression.
- Actual page-load performance (JS/CSS/image weight, LCP, CLS) was **not checked** this week — would require a PSI/WebPageTest run.

---

## 4. Comparison with Previous Reports

No file matching `reports/achieve-pt/weekly-check-*.md` existed before this one, so there's no direct prior "weekly check" to diff against. I compared against the two most recent relevant reports instead: `2026-05-02-audit.md` (full SEO crawl) and `2026-05-05-minor-update.md` (robots.txt/PSI/WPT spot-check).

**Fixed since 2026-05-02:**
- `/home` duplicate-content risk — now has a correct canonical tag to `/` (previously flagged as indexed duplicate with no canonical mentioned).
- Meta descriptions on the 4 blog posts flagged in May (`back-on-the-court-the-pickleball-court`, the "Why Women" post, the Pilates post, the St. Patrick's Day post) are still present and fine.

**New since 2026-05-02 (mostly new content, not regressions):**
- 7 new `/conditions/*` pages and 7 new blog posts added to the sitemap (up from 22 pages in May to 32 today).
- 5 of the new blog posts are missing meta descriptions; `/conditions/hip-pain` is missing one too.
- Stale pricing in JSON-LD on `/`, `/home`, `/services` (pricing itself changed from $180/$80/$150 → $199/$89/$159 sometime after May, but the structured-data blocks weren't fully updated — this is a new finding this cycle, not present in the old crawl which predates the price change).
- Malformed CTA href on the Pilates blog post.

**Unchanged / still open:**
- Titles over 60 characters (13/22 pages in May → 27/33 pages today; same underlying pattern, more pages now affected).
- `/privacy-policy` returning 404, linked sitewide.
- `/blog` index marking post cards as `<h1>` (7 in May → 13 today, more posts).
- robots.txt/sitemap configuration unchanged from the 2026-05-05 check.

**Not checked this week** (would need dedicated tools): Lighthouse/PageSpeed Insights scores, WebPageTest metrics, Rich Results Test, accessibility audit beyond alt-text presence.
