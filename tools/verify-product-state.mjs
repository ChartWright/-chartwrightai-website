import { readFileSync } from "node:fs";

const failures = [];
const htmlFiles = [
  "index.html",
  "about.html",
  "trust.html",
  "research.html",
  "privacy.html",
  "terms.html",
  "404.html",
];

function read(name) {
  return readFileSync(new URL(`../${name}`, import.meta.url), "utf8");
}

function fail(message) {
  failures.push(message);
}

const pages = Object.fromEntries(htmlFiles.map((name) => [name, read(name)]));
const dated = ["index.html", "about.html", "trust.html", "research.html", "privacy.html", "terms.html"];
for (const name of dated) {
  if (!pages[name].includes("Public record as of 2026-09-27")) {
    fail(`${name}: missing public record date`);
  }
  if (!pages[name].includes("Gate1 NOT PASSED")) fail(`${name}: missing Gate1 NOT PASSED`);
  if (!pages[name].includes("DEPLOY_BLOCKED")) fail(`${name}: missing DEPLOY_BLOCKED`);
}

for (const name of ["about.html", "trust.html", "index.html", "research.html"]) {
  const source = pages[name];
  for (const required of [
    "Jack Zingale Schiro",
    "PMO",
    "Research (ELONMUSK research lane)",
    "Independent Audit",
    "Furphy",
    "Codex",
  ]) {
    if (!source.includes(required)) fail(`${name}: missing ${required}`);
  }
  if (!source.includes('data-seat-status="active"') && name !== "research.html") {
    fail(`${name}: missing active seat list`);
  }
}

const tombstones = [
  "Seat Architect",
  "Offer A Outbound",
  "Growth SEO/AEO",
  "Life Ops",
  "Furphy Grok duplicate",
];
for (const name of ["index.html", "about.html", "research.html", "privacy.html", "terms.html"]) {
  for (const tombstone of tombstones) {
    if (pages[name].includes(tombstone)) fail(`${name}: lists tombstone as public copy: ${tombstone}`);
  }
}

const trust = pages["trust.html"];
const pending = trust.match(/<ul data-seat-status="pending-delete">([\s\S]*?)<\/ul>/);
if (!pending) fail("trust.html: missing pending-delete seat list");
else {
  for (const tombstone of tombstones) {
    if (!pending[1].includes(tombstone)) fail(`trust.html pending-delete list missing ${tombstone}`);
  }
}
for (const name of ["trust.html", "about.html", "index.html"]) {
  const active = pages[name].match(/<ul data-seat-status="active">([\s\S]*?)<\/ul>/);
  if (!active) fail(`${name}: missing active seat list`);
  else {
    for (const tombstone of tombstones) {
      if (active[1].includes(tombstone)) fail(`${name}: active list contains ${tombstone}`);
    }
    for (const required of ["PMO", "Research (ELONMUSK research lane)", "Independent Audit"]) {
      if (!active[1].includes(required)) fail(`${name}: active list missing ${required}`);
    }
  }
}

const banned = [
  /Gate1 PASSED/i,
  /GATE1 PASSED/,
  /Signal Strength/,
  /\bDoc22\b/,
  /\bDan\b/,
  /stripe/i,
  /sk_live_/,
  /SUPABASE_SERVICE/,
];
for (const [name, source] of Object.entries(pages)) {
  for (const pattern of banned) {
    if (pattern.test(source)) fail(`${name}: forbidden pattern ${pattern}`);
  }
}

const robots = read("robots.txt");
if (!robots.includes("Sitemap: https://ichartwrightai.com/sitemap.xml")) {
  fail("robots.txt: missing sitemap directive");
}
if (!robots.includes("Allow: /")) fail("robots.txt: missing public allow");

const sitemap = read("sitemap.xml");
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const expected = {
  "https://ichartwrightai.com/": "index.html",
  "https://ichartwrightai.com/about.html": "about.html",
  "https://ichartwrightai.com/trust.html": "trust.html",
  "https://ichartwrightai.com/research.html": "research.html",
  "https://ichartwrightai.com/privacy.html": "privacy.html",
  "https://ichartwrightai.com/terms.html": "terms.html",
};
const locSet = new Set(locs);
for (const [loc, file] of Object.entries(expected)) {
  if (!locSet.has(loc)) fail(`sitemap.xml: missing ${loc}`);
  if (!sitemap.includes("<lastmod>2026-09-27</lastmod>")) fail("sitemap.xml: missing lastmod");
  if (!pages[file] && file !== "index.html") fail(`sitemap target missing ${file}`);
}
for (const loc of locs) {
  if (!expected[loc]) fail(`sitemap.xml: unexpected url ${loc}`);
}
if (locs.length !== Object.keys(expected).length) fail(`sitemap.xml: expected ${Object.keys(expected).length} urls, found ${locs.length}`);

for (const name of ["trust.html", "research.html"]) {
  if (!/<h1>[\s\S]*?<\/h1>/.test(pages[name])) fail(`${name}: missing h1`);
  if (!pages[name].includes("<title>")) fail(`${name}: missing title`);
}

if (failures.length) {
  console.error(JSON.stringify({ passed: false, failures }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  passed: true,
  checked_html: htmlFiles.length,
  sitemap_urls: locs.length,
  public_record: "2026-09-27",
  gate1: "NOT PASSED",
  deploy: "DEPLOY_BLOCKED",
}, null, 2));
