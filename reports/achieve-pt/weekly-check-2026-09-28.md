# Achieve PT Wellness — Weekly Health Check
**Date:** 2026-09-28
**Site:** https://www.achieveptwellness.com
**Platform:** Squarespace
**Pages discovered:** 33 (32 from `/sitemap.xml` + homepage `/`) — all fetched successfully (HTTP 200), no timeouts/errors

---

## TL;DR

- **Stale pricing: 0 pages show old $180/$80/$150 anywhere — visible text or JSON-LD.** The 3 URLs flagged last week (`/`, `/home`, `/services`) with stale structured-data pricing are **fixed**: `priceRange` now reads `$89–$199`, FAQ/Offer pricing text now reads $199/$89/$159. This is the single most important change this week.
- **New issues found this week:** widespread duplicate `<meta name="description">` tags (16 of 33 pages carry 2–3 competing description tags, several with different wording or exceeding 160 chars); a genuine duplicate `<title>` DOM bug (not the harmless SVG-icon titles noted previously) on 5 pages, caused by a full HTML document accidentally pasted into a Squarespace code block; a typo in the homepage's secondary meta description ("Julie **Johlie** Roy"); a typo on `/conditions/back-pain-sciatica`'s description (missing leading "1" — reads "-on-1"). **Caveat:** several sub-agents noted this week's audit used raw HTML/curl fetches, while last week's likely relied on a markdown-converting fetch that silently truncates `<head>`/JSON-LD content — some of these duplicate-tag findings may be pre-existing and simply undetected last week, not new regressions. Flagging as "new to this report" rather than "new to the site."
- **Fixed since last week (2026-09-27):** stale JSON-LD pricing on `/`, `/home`, `/services` (see above); `/about`'s hero photo of Dr. Julie Roy now has alt text (was missing).
- **Unchanged / still open:** the Pilates blog post's "Book Your Session Today!" CTA is still a broken/malformed link (not fixed); `/privacy-policy` still 404s, linked sitewide; `/blog` still marks post teasers as `<h1>` (now 14 H1s total, up from 13 — one extra CTA block); 5 blog posts + `/conditions/hip-pain` still have empty meta descriptions; 27/33 pages still have titles over 60 characters (identical count to last week); all 12 blog posts still have a templated author-avatar image with no alt text.
- Sitemap grew from 31 to 32 URLs since yesterday's report (all pages fetch fine; could not pin down which single URL is new without the prior raw URL list).

---

## 1. Stale Pricing (top priority)

Current prices should be **$199** (initial eval), **$89** (30-min follow-up), **$159** (60-min follow-up). Old prices **$180 / $80 / $150** must not appear anywhere.

**Result: fully clean.** All four sub-audits searched visible body text AND every JSON-LD `<script type="application/ld+json">` block (LocalBusiness `priceRange`, FAQPage `Answer.text`, Offer/OfferCatalog `price` fields) on all 33 pages for the literal strings "$180", "$80", "$150". **Zero occurrences found anywhere.**

| Page | Last week's status | This week |
|---|---|---|
| `/` | Stale `priceRange: "$80–$180"` + stale FAQ answer text | **Fixed** — `priceRange: "$89–$199"`, body text and FAQ correct |
| `/home` | Stale `priceRange` + stale FAQ answer text (identical to `/`) | **Fixed** — `priceRange: "$89–$199"`; the old `FAQPage` block was removed entirely from this page |
| `/services` | Stale `MedicalWebPage.description`, stale Dry Needling/Follow-Up `Offer` prices ($80/$150) | **Fixed** — all Offers now read $199 / $89 / $159; a changelog-style HTML comment left in the page source explicitly documents the correction |
| `/faqs` | Clean | Clean — confirmed $199/$89/$159 quoted verbatim in FAQ JSON-LD |
| `/treatment-techniques/orthopedic-physical-therapy`, `/treatment-techniques/tmd-tmj` | Not checked in that level of detail last week | Clean — both quote "$199 for 60 minutes" correctly in FAQ JSON-LD |
| All other 27 pages | — | Clean — no dollar amounts, or generic `priceRange: "$$"` placeholder only |

**Other price-adjacent notes (not old prices, just inconsistency worth flagging):** `priceRange` schema is inconsistent site-wide — `/` and `/home` carry the specific `"$89–$199"`, most `/conditions/*` and `/treatment-techniques/*` pages use the generic `"$$"` placeholder, and `/conditions/hip-pain` and `/conditions-overview` have no `priceRange` field at all (simpler/older schema block). Not a defect, but worth standardizing for consistent rich-result display.

No other price value (besides $199/$89/$159) was found anywhere on the site.

---

## 2. SEO Health

### Title tags
- 33/33 pages have a `<title>` tag; none are empty.
- **27 of 33 pages exceed 60 characters** — identical count to last week's audit; same underlying pattern (long descriptive titles, auto-appended location suffix on blog posts).
- **Genuine duplicate `<title>` DOM bug on 5 pages** (this is a change from last week's characterization): `/contact`, `/treatment-techniques/neurologic-physical-therapy`, `/treatment-techniques/trigger-point-dry-needling`, `/treatment-techniques/instrument-assisted-soft-tissue-mobilization`, and `/treatment-techniques/joint-mobilization-and-manipulation` each contain a second, real `<title>` element inserted into the DOM — not inside an inline SVG icon (which would be harmless) but inside what appears to be an entire second `<!DOCTYPE html>…</html>` document pasted as literal content into a Squarespace "Book Now"-style code block. Per HTML5 parsing rules this is a genuine second `<title>` node in the page, which browsers/search engines could pick up incorrectly. `/treatment-techniques/orthopedic-physical-therapy` and `/treatment-techniques/tmd-tmj` do **not** have this bug (title is clean on those two; only their meta description is duplicated — see below).
- Several titles have cosmetic missing-space rendering issues (e.g. "NeurologicPhysical Therapy", "IASTM &Cupping") from stacked `<span>` markup — low priority, cosmetic only.

### Meta descriptions
- **6 pages have no meta description** (empty `content=""`): all 5 of the same blog posts flagged last week (`what-is-iastm-and-is-it-the-same-as-graston-or-muscle-scraping`, `what-is-dry-needling`, `dont-let-pain-bench-you-this-summer-understanding-orthopedic-pt`, `life-proof-not-just-summer-proof-pt-tips-for-staying-active-for-the-long-run`, `jointmobilizationvsmanipulation`) plus `/conditions/hip-pain` — unchanged from last week.
- **New this week: 16 of 33 pages carry duplicate `<meta name="description">` tags** (2 tags on most, 3 on `/treatment-techniques` and on 4 of the treatment-technique detail pages). Root cause per dev comments left in the page source: a page-specific "Page Header Code Injection" snippet was added in Squarespace page settings on top of a site-wide default, so both render. Affected: `/`, `/home`, `/services`, `/treatment-techniques`, `/treatment-techniques/orthopedic-physical-therapy`, `/treatment-techniques/neurologic-physical-therapy`, `/treatment-techniques/trigger-point-dry-needling`, `/treatment-techniques/instrument-assisted-soft-tissue-mobilization`, `/treatment-techniques/joint-mobilization-and-manipulation`, `/treatment-techniques/tmd-tmj`, `/conditions/back-pain-sciatica`, `/conditions/shoulder-pain`, `/conditions/knee-pain`, `/conditions/post-surgical-rehabilitation`, `/conditions/foot-ankle-pain`, `/conditions-overview`. Only the first tag is normally used by browsers/Google, but the extras are dead weight and a maintenance trap (editing the visible one doesn't remove the stale duplicate).
- Two content bugs found in duplicate description text: homepage's secondary tag reads "Julie **Johlie** Roy" (typo); `/conditions/back-pain-sciatica`'s primary tag is missing its leading "1" — reads "-on-1 back pain and sciatica treatment..." instead of "1-on-1...".
- **~17 pages have a description outside the 70–160 char target** (mostly too long: 161–283 chars), largely the same pages/pattern flagged last week.

### H1 tags
- 32/33 pages have exactly one H1.
- `/blog` has **14 H1 elements** (up from 13 last week): 12 blog-post teaser titles (same count as last week — no new posts added to the index this cycle) plus **2** "Achieve Your Best" CTA/marquee headings (was 1 last week).

### Images missing alt text
- **12 images across 12 pages** — the same templated author-avatar image is missing alt text on all 12 blog posts (unchanged from last week's 12-post list).
- **Fixed:** `/about`'s hero photo of Dr. Julie Roy now has `alt="Dr. Julie Roy, DPT, Owner of Achieve Physical Therapy"` (was missing last week).
- All other pages (services, contact, faqs, treatment-technique pages, condition pages) have full alt text on every image.

### Canonical tags
- All 33 pages have a canonical tag; none are missing, all point to the correct self URL.
- `/home`'s canonical currently reads `https://www.achieveptwellness.com` (no trailing slash) vs. last week's recorded `.../` — functionally identical root URL, flagging only as a sanity note, not an issue.

### Broken internal links (4xx/5xx)
| Link | Status | Notes |
|---|---|---|
| `/privacy-policy` | **404** (confirmed via direct curl, HTTP 404) | Linked from the footer of pages sitewide. Unchanged — still broken, same as every prior audit. |
| CTA button "Book Your Session Today!" on `/blog/pilates-physical-therapy-a-powerful-alliance-for-recovery-and-strength` | Malformed, not a clean 4xx | **Still broken, not fixed.** `href` is still a garbled string that looks like raw JS for an IntakeQ widget embed got mangled into a URL (`/scriptfunction-c-windowintakeq...`) instead of linking to `https://intakeq.com/booking/sglmgu` like every other CTA on the site. |
| All other ~150–175 links per page, across all 33 pages | Clean | No other broken/malformed/suspicious hrefs found (checked for empty, `javascript:`, or junk-text hrefs). |

All 32 URLs in the sitemap plus the homepage returned HTTP 200 directly.

### robots.txt & sitemap
- `robots.txt`: reachable (HTTP 200), declares `Sitemap: https://www.achieveptwellness.com/sitemap.xml`, standard search engines allowed, AI/scraping bots disallowed (Squarespace default). No change from last week.
- `sitemap.xml`: reachable (HTTP 200), lists **32 URLs** (up from 31 last week). All 32 fetch successfully; could not determine which single URL is new without a saved prior URL list — no obviously new page name stood out in this week's crawl (all URLs match last week's known pages, so this may be a sitemap-generation quirk rather than genuinely new content).

---

## 3. Performance

Measured raw HTML response time and page weight via direct fetch only (no Lighthouse/PSI run this week — **not checked**; last real PSI numbers remain the 2026-05-05 report's 52/100 mobile, 13.5s mobile LCP).

- Server response times were fast across the board: **0.25s–0.66s** to download full HTML for every page. Nothing indicated a timeout or hang risk.
- Notably heavy pages (raw markup weight, not full page weight with images/CSS/JS):
  - `/treatment-techniques/neurologic-physical-therapy` — **1.73 MB**, the heaviest page found this week, inflated by the duplicate-embedded-document bug described above.
  - `/blog/going-for-the-green-how-physical-therapy-helps-you-stay-active-this-st-patricks-day` — **1.35 MB**
  - `/blog/back-on-the-court-the-pickleball-court` — **1.15 MB**
  - `/treatment-techniques/tmd-tmj` — **1.18 MB**
  - `/treatment-techniques/instrument-assisted-soft-tissue-mobilization` — **1.10 MB**
  - `/blog/why-does-my-jaw-click-tmd-tmj-therapy` — **1.04 MB**
  - `/about` — 808 KB
  - `/blog/dont-let-pain-bench-you-this-summer-understanding-orthopedic-pt` — 767 KB
  - `/blog/life-proof-not-just-summer-proof-pt-tips-for-staying-active-for-the-long-run` — 786 KB
  - Most other pages: 400–670 KB.
- The four treatment-technique pages with the duplicate-embedded-document code-block bug (neuro, dry-needling, IASTM, joint-mobilization) are measurably heavier than their peers (ortho, tmd-tmj) specifically because of that bug — fixing the stray code block would also reduce page weight there.
- Actual page-load performance (JS/CSS/image weight, LCP, CLS, Lighthouse score) was **not checked** this week — would require a PSI/WebPageTest run.

---

## 4. Comparison with Previous Report (2026-09-27)

**Fixed since 2026-09-27:**
- Stale JSON-LD pricing on `/`, `/home`, `/services` — all now show $199/$89/$159 and `priceRange: "$89–$199"` correctly; `/home`'s stale `FAQPage` block was removed entirely.
- `/about`'s hero photo of Dr. Julie Roy now has alt text (was missing).

**New this week (see caveat in TL;DR about detection-method differences):**
- Duplicate `<meta name="description">` tags on 16 pages (2–3 competing tags each), several exceeding 160 chars or containing inconsistent wording.
- Genuine duplicate `<title>` DOM injection (not the harmless SVG-icon titles previously described) on 5 pages, traced to a full HTML document mistakenly pasted into a Squarespace code block.
- Typo in homepage's secondary meta description ("Julie Johlie Roy").
- Typo in `/conditions/back-pain-sciatica`'s primary meta description (missing leading "1").
- `/blog` CTA block count increased from 1 to 2 (14 H1s total, up from 13).
- Sitemap grew from 31 to 32 URLs.

**Unchanged / still open:**
- Pilates blog post's "Book Your Session Today!" CTA — still a malformed/broken link, not fixed.
- `/privacy-policy` still returns 404, linked sitewide.
- 5 blog posts + `/conditions/hip-pain` still missing meta descriptions entirely (same list as last week).
- 27/33 pages still have titles over 60 characters (identical count).
- All 12 blog posts still missing alt text on the same templated author-avatar image.
- `priceRange` schema inconsistency across page types (not stale, just non-uniform).

**Not checked this week** (would need dedicated tools): Lighthouse/PageSpeed Insights scores, WebPageTest metrics, Rich Results Test validation, accessibility audit beyond alt-text presence.
