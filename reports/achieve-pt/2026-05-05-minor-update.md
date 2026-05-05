# Achieve PT Wellness — Minor Update Report
**Date:** 2026-05-05  
**Site:** https://www.achieveptwellness.com  
**Platform:** Squarespace  
**Type:** Light tool-verified update (not a full re-crawl)  
**Tools Run:** robots.txt fetch, PageSpeed Insights, WebPageTest  
**Prior audit:** 2026-05-02-audit.md

---

## Quick Scores

| Tool | Result |
|---|---|
| PSI Mobile Performance | 52/100 (Needs Improvement) |
| PSI Accessibility | 91/100 |
| PSI Best Practices | 100/100 |
| PSI SEO | **100/100** |
| WPT Desktop LCP | 1.15s (Good) |
| WPT Page Weight | 2 MB (Excellent) |
| Rich Results Test | Blocked by reCAPTCHA — run manually |

---

## robots.txt

```
User-agent: ClaudeBot, GPTBot, Amazonbot [+ many other AI bots]
Disallow: /

User-agent: *
Disallow: /config, /account/*, API endpoints, static assets,
          ?author=, ?tag=, ?month=, ?view=, .json, .ics formats

Sitemap: https://www.achieveptwellness.com/sitemap.xml
```

- Standard search engine crawlers: fully allowed
- AI/scraping bots: explicitly blocked (Squarespace default)
- Sitemap declared and present
- No issues for Google indexing

---

## PageSpeed Insights — Mobile (52/100)

| Metric | Value | Status |
|---|---|---|
| LCP | **13.5s** | FAIL (Poor > 4s) |
| CLS | 0 | PASS |
| FCP | 5.9s | FAIL (Poor > 3s) |
| Speed Index | 8.3s | Poor |
| Total Blocking Time | 270ms | Needs Improvement |

**Top Opportunities:**
- Reduce unused JavaScript: **760 KiB** — this is the primary driver of poor mobile scores
- Reduce unused CSS: **194 KiB**

The 13.5s mobile LCP vs. 1.15s desktop LCP is a large gap. Squarespace loads heavy JS bundles that block mobile rendering significantly more than desktop. This is partly a platform constraint — Squarespace injects large third-party scripts regardless of page content.

---

## WebPageTest — Desktop (Chrome 145, WiFi, Council Bluffs IA)

| Metric | Value | Assessment |
|---|---|---|
| TTFB | 0.141s | Excellent |
| Start Render | 1.1s | Good |
| FCP | 1.15s | Good |
| LCP | **1.15s** | Good |
| CLS | 0.094 | Good (< 0.1) |
| Total Blocking Time | 0.137s | Good |
| Speed Index | 1.172s | Excellent |
| Document Complete | 1.662s | Excellent |
| **Page Weight** | **2 MB** | Excellent |
| Total Requests | 54 | Moderate |

**WPT Verdicts:**
- Quick: "Not Bad — quick to connect, LCP fast, but 8 render-blocking requests"
- Usable: "Not Bad — good layout stability, **3 accessibility issues (3 serious)**"
- Resilient: "Not Bad — many render-blocking 3rd party requests (single point of failure)"

Desktop performance is excellent. Page weight of 2MB is well-managed for a Squarespace site. The mobile/desktop gap is the core problem.

---

## Rich Results Test

Google's Rich Results Test blocked automated access with reCAPTCHA — this requires a manual browser run at:
`https://search.google.com/test/rich-results?url=https://www.achieveptwellness.com/`

From the prior SEO audit, the site uses Squarespace's built-in schema — expected to have basic Organization and WebPage markup. No AggregateRating or LocalBusiness schema was detected in prior crawl data.

---

## Outstanding Issues (Carried from May 2 Audit)

- 13 of 22 pages have titles > 60 chars — blog posts worst offenders
- 3 pages missing meta description (cart, services-dropdown, privacy-policy — all utility/system pages)
- 3 pages missing H1 (same utility pages)
- PSI SEO score of 100/100 suggests on-page signals are well-configured despite the title length issue (Google grades on crawlability, not character counts)

---

## Summary

Squarespace site with a clear mobile/desktop performance split. Desktop is fast (1.15s LCP, 2MB), mobile suffers (13.5s LCP, 52/100) due to platform-injected JS that can't be removed without leaving Squarespace. The PSI SEO score of 100/100 is a strong signal — on-page SEO is well set up. The 3 serious accessibility issues flagged by WPT should be investigated manually. No new critical issues found since the May 2 audit.
