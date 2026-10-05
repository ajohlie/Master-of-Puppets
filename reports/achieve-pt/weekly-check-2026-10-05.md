# Achieve PT Wellness — Weekly Health Check
**Date:** 2026-10-05
**Site:** https://www.achieveptwellness.com
**Platform:** Squarespace
**Pages discovered:** 35 (34 from `/sitemap.xml` + homepage `/`, which is not itself listed in the sitemap) — all fetched successfully via direct HTTP GET (HTTP 200), no timeouts/errors. Up from 33 pages last week.

---

## TL;DR

- **Stale pricing: 0 occurrences.** No `$180`/`$80`/`$150` found anywhere (body text or JSON-LD) across all 35 pages. No price other than $199/$89/$159 was found anywhere. Clean for the third week running.
- **Fixed since last week (2026-09-28):** `/contact`'s duplicate `<title>` DOM bug is gone (only 1 real `<title>` tag now); the Pilates blog post's CTA now correctly links to `https://intakeq.com/booking/sglmgu` (was a garbled/malformed href); 5 pages that had empty meta descriptions last week now have real, unique, well-written descriptions (`/conditions/hip-pain` + 4 blog posts: `what-is-iastm…`, `what-is-dry-needling`, `dont-let-pain-bench-you…`, `life-proof-not-just-summer-proof…`).
- **New issues found this week:** duplicate `<link rel="canonical">` tags (2 tags on one page) on 3 pages (`/`, `/home`, `/treatment-techniques`); the `jointmobilizationvsmanipulation` blog post's meta description is now present but cut off mid-sentence ("Joint mobilization vs. manipulation: what", 41 chars) instead of empty; the newest blog post (`why-does-my-lower-back-feel-sore-after-or-the-day-after-core-exercises`) has an empty meta description; site grew by 2 pages (`/jaw-pain-guide` is a brand-new standalone page, plus one net-new blog post — see §4).
- **Unchanged / still open:** `/privacy-policy` still 404s (linked sitewide); duplicate `<meta name="description">` tags still present on the exact same 16 pages as last week; the genuine duplicate-`<title>`-via-pasted-HTML-document bug still affects 4 treatment-technique pages (down from 5 — contact is fixed); all blog posts (now 13, was 12) still miss alt text on the same templated author-avatar image; ~83% of titles still exceed 60 characters (same proportion as last week).
- Performance: all 35 pages responded fast (0.30s–0.90s for full HTML download); no timeouts. `/conditions-overview` is the heaviest page at ~1.25 MB raw HTML — notably heavier than every other page — but shows no obvious bug (no duplicated document, no oversized inline images); likely just genuinely rich aggregator content.

---

## 1. Stale Pricing (top priority)

Current prices should be **$199** (initial eval), **$89** (30-min follow-up), **$159** (60-min follow-up). Old prices **$180 / $80 / $150** must not appear anywhere.

**Result: fully clean.** Searched visible body text and all JSON-LD blocks (`priceRange`, FAQ `Answer.text`, `Offer` prices) on all 35 pages for the literal strings `$180`, `$80`, `$150`. **Zero occurrences.**

| Page | Status |
|---|---|
| `/`, `/home` | Clean — `priceRange: "$89–$199"`, body/FAQ text correct |
| `/services` | Clean — Offers read $199 / $89 / $159 |
| `/faqs` | Clean — $199/$89/$159 quoted verbatim in FAQ JSON-LD |
| `/treatment-techniques/orthopedic-physical-therapy`, `/treatment-techniques/tmd-tmj` | Clean — "$199 for 60 minutes" in FAQ JSON-LD |
| All other 30 pages | Clean — no dollar amounts, or generic `priceRange: "$$"` placeholder only |

No other price value besides $199/$89/$159 was found anywhere on the site.

**Other price-adjacent note (unchanged, not stale):** `priceRange` schema is still inconsistent site-wide — `/`, `/home`, and `/services` carry `"$89–$199"`; most `/conditions/*`, `/treatment-techniques/*`, and all blog pages use the generic `"$$"` placeholder; `/conditions/hip-pain` and `/conditions-overview` have no `priceRange` field at all. Cosmetic/consistency issue only, same as last week.

---

## 2. SEO Health

### Title tags
- 35/35 pages have a non-empty `<title>` tag.
- **29 of 35 pages (83%) exceed 60 characters** — essentially the same proportion as last week (27/33, 82%); not a new regression.
- **Duplicate `<title>` DOM bug — still present on 4 pages** (down from 5 last week): `/treatment-techniques/instrument-assisted-soft-tissue-mobilization`, `/treatment-techniques/joint-mobilization-and-manipulation`, `/treatment-techniques/neurologic-physical-therapy`, `/treatment-techniques/trigger-point-dry-needling`. Each contains a second, real `<title>` element from an embedded second HTML document pasted into a code block.
- **Fixed:** `/contact` no longer has this bug — confirmed only 1 `<title>` tag in the DOM; a dated dev comment in the page source ("CONTACT PAGE — Header Injection v2.2, 2026-09-28") documents a cleanup around the date of last week's report.
- `/treatment-techniques/orthopedic-physical-therapy` and `/treatment-techniques/tmd-tmj` remain clean (confirmed the second "`<title>`" match on these pages is literal text inside a dev comment, not a real tag).

### Meta descriptions
- **1 page has an empty meta description:** `blog/why-does-my-lower-back-feel-sore-after-or-the-day-after-core-exercises` — likely the newest blog post (see §4). Down from 6 pages last week.
- **Fixed — 5 descriptions added this week:** `/conditions/hip-pain` and 4 blog posts (`what-is-iastm-and-is-it-the-same-as-graston-or-muscle-scraping`, `what-is-dry-needling`, `dont-let-pain-bench-you-this-summer-understanding-orthopedic-pt`, `life-proof-not-just-summer-proof-pt-tips-for-staying-active-for-the-long-run`) now have well-written, unique, 158–159 character descriptions.
- **New issue:** `blog/jointmobilizationvsmanipulation`'s description is no longer empty but is **truncated mid-sentence**: `"Joint mobilization vs. manipulation: what"` (41 chars, cuts off after "what"). Needs a real fix, not just a length fix.
- **Duplicate `<meta name="description">` tags — unchanged, same 16 pages as last week** (2–3 competing tags each): `/`, `/home`, `/services`, `/treatment-techniques`, `/conditions-overview`, and 6 of each `/treatment-techniques/*` and `/conditions/*` detail pages. Root cause unchanged (page-level code injection stacking on top of a site-wide default).
- **15 pages have a primary description outside the 70–160 char target** (down slightly from ~17 last week): mostly too long (161–248 chars, e.g. `why-women-should-prioritize-physical-therapy` at 248 chars), one too short (`jointmobilizationvsmanipulation` at 41, see above), one at 61 (`neurologic-physical-therapy`, borderline).
- The homepage "Julie Johlie Roy" typo and `/conditions/back-pain-sciatica`'s missing-leading-"1" typo flagged last week were **not re-verified this week** — not checked.

### H1 tags
- 34/35 pages have exactly one H1.
- `/blog` has **15 H1 elements** (up from 14 last week): 13 blog-post teaser titles (up from 12, tracking the new post count — see §4) plus the same 2 "Achieve Your Best" CTA/marquee headings as last week. One of the two CTA H1s renders as literally duplicated text within a single tag ("Achieve Your Best           Achieve Your Best") — cosmetic markup issue, not a new count-level regression.

### Images missing alt text
- **13 images across 13 pages** — the same templated author-avatar image is missing alt text on every blog post, now 13 (was 12 last week, tracking the new post).
- All non-blog pages (home, services, contact, faqs, about, treatment-technique pages, condition pages, jaw-pain-guide) have full alt text on every image — confirmed by excluding `<script>`/`<style>` blocks from the scan (a naive scan without that exclusion falsely flags 2 JS-template `<img>` strings per page that are never rendered as real DOM elements).

### Canonical tags
- All 35 pages have at least one canonical tag.
- **New issue: duplicate `<link rel="canonical">` tags on 3 pages:**
  - `/` and `/home` each emit **two** canonical tags with *different* values: `https://www.achieveptwellness.com` (no trailing slash) and `https://www.achieveptwellness.com/` (trailing slash).
  - `/treatment-techniques` emits **two identical** canonical tags pointing to the same URL (redundant, lower risk than the `/`/`/home` case but still a markup defect).
  - All other 32 pages have exactly one canonical tag, correctly self-referential.

### Broken internal links (4xx/5xx)
| Link | Status | Notes |
|---|---|---|
| `/privacy-policy` | **404** (confirmed via direct fetch) | Linked sitewide. Unchanged — still broken, same as every prior audit. |
| Pilates blog post CTA ("Book Your Session Today!") | **Fixed** | Now correctly links to `https://intakeq.com/booking/sglmgu`, same as every other CTA on the site. Confirmed not malformed. |
| `/conditions`, `/new-dropdown` | 302 redirect | Not broken — redirects resolve, not an error. Not previously documented; flagging only as informational. |
| All other internal links across all 35 pages | Clean | No other broken/malformed/junk hrefs found. |

All 34 sitemap URLs plus the homepage return HTTP 200 directly.

### robots.txt & sitemap
- `robots.txt`: reachable (HTTP 200), declares `Sitemap: https://www.achieveptwellness.com/sitemap.xml`.
- **Correction to last week's characterization:** the long list of AI/scraping bot user-agents (GPTBot, ClaudeBot, CCBot, Amazonbot, etc.) at the top of the file is grouped into the **same rule block as `User-agent: *`**, sharing the identical standard Squarespace `Disallow` list (`/config`, `/search`, `/account`, `/api/`, `/static/`, and tracking query-param patterns). This is Squarespace's default file — it does **not** block AI bots from crawling site content any more than it blocks any other crawler; it was previously described as "AI/scraping bots disallowed," which overstates what the file does.
- `sitemap.xml`: reachable (HTTP 200), lists **34 URLs** (up from 32 last week). All 34 fetch successfully.

---

## 3. Performance

Measured raw HTML response time and page weight via direct HTTP fetch only. **No Lighthouse/PageSpeed Insights run this week — not checked.** Last real PSI numbers on record remain the 2026-05-05 report's 52/100 mobile, 13.5s mobile LCP; treat those as stale and not representative of current state.

- Server response times were fast across the board: **0.30s–0.90s** to download full HTML for every page. Nothing indicated a timeout or hang risk. Slowest was `/home` at 0.90s; next-slowest `/blog` at 0.70s — neither is concerning on its own.
- Heaviest pages (raw HTML markup weight, not full page weight with images/CSS/JS):
  - `/conditions-overview` — **~1.25 MB**, clearly the heaviest page this week and notably heavier than its nearest peer. No obvious bug found (no duplicate `<title>`/`<!DOCTYPE>`, no oversized inline/base64 images, same image count as comparable condition pages) — likely genuinely heavier because it aggregates summaries of all 6 conditions. Worth a manual look if this keeps growing.
  - `/conditions/foot-ankle-pain` — ~0.77 MB
  - `/conditions/post-surgical-rehabilitation` — ~0.76 MB
  - `/conditions/back-pain-sciatica` — ~0.58 MB
  - `/blog/why-does-my-jaw-click-tmd-tmj-therapy` — ~0.57 MB
  - Most other pages: 0.40–0.50 MB.
  - **Note:** the four treatment-technique pages with the known duplicate-embedded-document bug (`instrument-assisted…`, `joint-mobilization…`, `neurologic…`, `trigger-point-dry-needling`) are **no longer the heaviest pages** — they're now 0.42–0.46 MB, in line with (or lighter than) their unaffected siblings (`orthopedic-physical-therapy` at 0.49 MB, `tmd-tmj` at 0.44 MB). Last week's report attributed extra weight on these pages to that bug; this week's numbers don't show that correlation, so the bug's weight impact (if any) appears to have shrunk even though the duplicate-title defect itself is still present.
- Actual page-load performance (JS/CSS/image weight, LCP, CLS, Lighthouse score) was **not checked** this week — would require a PSI/WebPageTest run.

---

## 4. Comparison with Previous Report (2026-09-28)

**Fixed since 2026-09-28:**
- `/contact`'s duplicate `<title>` DOM bug — resolved (confirmed via dated dev comment and direct tag count).
- Pilates blog post CTA — now correctly links to IntakeQ booking, no longer malformed.
- 5 previously-empty meta descriptions now filled in with genuine, unique copy: `/conditions/hip-pain`, `blog/what-is-iastm-and-is-it-the-same-as-graston-or-muscle-scraping`, `blog/what-is-dry-needling`, `blog/dont-let-pain-bench-you-this-summer-understanding-orthopedic-pt`, `blog/life-proof-not-just-summer-proof-pt-tips-for-staying-active-for-the-long-run`.

**New this week:**
- Duplicate `<link rel="canonical">` tags on `/`, `/home` (different values — trailing slash vs. not), and `/treatment-techniques` (identical duplicate).
- `blog/jointmobilizationvsmanipulation`'s meta description is now present but truncated mid-word ("...what").
- Newest blog post `blog/why-does-my-lower-back-feel-sore-after-or-the-day-after-core-exercises` has an empty meta description.
- New standalone page `/jaw-pain-guide` appeared in the sitemap (title 90 chars, over the 60-char target; otherwise unremarkable).
- Sitemap grew from 32 to 34 URLs; blog post count grew from 12 to 13. **Could not definitively isolate which single post is "the" new one from a sitemap diff alone** (same limitation noted in prior reports — no saved prior raw URL list); the empty-description post above is the most likely candidate for genuinely new content this cycle.
- `/blog` H1 count rose from 14 to 15, tracking the one additional post teaser (not an independent regression).
- `/conditions-overview` is now the single heaviest page on the site (~1.25 MB) — wasn't called out as heavy in last week's report.

**Unchanged / still open:**
- `/privacy-policy` still returns 404, linked sitewide.
- Duplicate `<meta name="description">` tags on the identical set of 16 pages.
- Duplicate `<title>` DOM-injection bug on 4 of the originally-5 affected treatment-technique pages.
- All blog posts (13, was 12) still missing alt text on the same templated author-avatar image.
- ~83% of titles still over 60 characters (same proportion as last week, 82%).
- `priceRange` JSON-LD schema inconsistency across page types (not stale pricing, just non-uniform).
- Stale pricing: still zero occurrences, 3 weeks running.

**Not checked this week** (would need dedicated tools or re-verification): Lighthouse/PageSpeed Insights scores, WebPageTest metrics, Rich Results Test validation, accessibility audit beyond alt-text presence, the two specific typos (homepage "Julie Johlie Roy", `/conditions/back-pain-sciatica` missing leading "1") flagged last week.
