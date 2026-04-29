import "dotenv/config";
import axios from "axios";
import fs from "fs";
import path from "path";

const API_KEY = process.env.FIRECRAWL_API_KEY;
const BASE = "https://api.firecrawl.dev/v1";

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function crawlSite(url, limit = 50) {
  if (!API_KEY) throw new Error("FIRECRAWL_API_KEY not set in .env");

  console.log(`Starting crawl: ${url} (limit: ${limit} pages)`);

  // Start crawl job
  const start = await axios.post(
    `${BASE}/crawl`,
    {
      url,
      limit,
      scrapeOptions: { formats: ["markdown"] },
    },
    { headers: { Authorization: `Bearer ${API_KEY}` } }
  );

  const jobId = start.data.id;
  console.log(`Crawl job started: ${jobId}`);

  // Poll until done
  let status = "scraping";
  let result;
  while (status === "scraping" || status === "waiting") {
    await sleep(5000);
    const poll = await axios.get(`${BASE}/crawl/${jobId}`, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    status = poll.data.status;
    result = poll.data;
    const done = result.completed || 0;
    const total = result.total || "?";
    process.stdout.write(`\r  Status: ${status} | ${done}/${total} pages`);
  }
  console.log(`\nCrawl complete: ${result.completed} pages`);

  // Save results
  const domain = new URL(url).hostname.replace("www.", "");
  const outDir = `./data/${domain}`;
  fs.mkdirSync(outDir, { recursive: true });

  const pages = result.data || [];
  pages.forEach((page, i) => {
    const slug = (page.metadata?.url || `page-${i}`)
      .replace(/https?:\/\/[^/]+/, "")
      .replace(/\//g, "_")
      .replace(/[^a-z0-9_-]/gi, "")
      .slice(0, 80) || `page-${i}`;
    const outFile = path.join(outDir, `${slug}.json`);
    fs.writeFileSync(outFile, JSON.stringify(page, null, 2));
  });

  // Write index
  const index = pages.map((p) => ({
    url: p.metadata?.url,
    title: p.metadata?.title,
    description: p.metadata?.description,
  }));
  fs.writeFileSync(path.join(outDir, "_index.json"), JSON.stringify(index, null, 2));
  console.log(`Saved ${pages.length} pages to data/${domain}/`);
}

const target = process.argv[2];
const limit = parseInt(process.argv[3] || "50", 10);

if (!target) {
  console.error("Usage: node scripts/crawl.js <url> [page-limit]");
  console.error("Example: node scripts/crawl.js https://doctorsofphysicaltherapy.com 30");
  process.exit(1);
}

crawlSite(target, limit);
