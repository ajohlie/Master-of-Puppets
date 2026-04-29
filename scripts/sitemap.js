import "dotenv/config";
import axios from "axios";
import fs from "fs";
import path from "path";

const API_KEY = process.env.FIRECRAWL_API_KEY;

async function mapSite(url) {
  if (!API_KEY) throw new Error("FIRECRAWL_API_KEY not set in .env");

  console.log(`Mapping: ${url}`);
  const res = await axios.post(
    "https://api.firecrawl.dev/v1/map",
    { url, limit: 500 },
    { headers: { Authorization: `Bearer ${API_KEY}` } }
  );

  const links = res.data.links || [];
  const domain = new URL(url).hostname.replace("www.", "");
  const outDir = `./data/${domain}`;
  fs.mkdirSync(outDir, { recursive: true });

  const outFile = path.join(outDir, "sitemap.json");
  fs.writeFileSync(outFile, JSON.stringify({ url, total: links.length, links }, null, 2));
  console.log(`Found ${links.length} URLs → ${outFile}`);
  return links;
}

const target = process.argv[2];
if (!target) {
  console.error("Usage: node scripts/sitemap.js <url>");
  process.exit(1);
}

mapSite(target);
