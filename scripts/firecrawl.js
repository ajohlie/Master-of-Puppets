import axios from "axios";
import fs from "fs";
import path from "path";

const API_KEY = process.env.FIRECRAWL_API_KEY;

async function scrape(url) {
  if (!API_KEY) throw new Error("FIRECRAWL_API_KEY not set in .env");

  const res = await axios.post(
    "https://api.firecrawl.dev/v0/scrape",
    { url },
    {
      headers: { Authorization: `Bearer ${API_KEY}` },
    }
  );

  const filename = path.join("./data", `${Date.now()}.json`);
  fs.writeFileSync(filename, JSON.stringify(res.data, null, 2));
  console.log(`Saved to ${filename}`);
}

const target = process.argv[2];
if (!target) {
  console.error("Usage: node scripts/firecrawl.js <url>");
  process.exit(1);
}

scrape(target);
