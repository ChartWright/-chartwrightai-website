import { readFileSync } from "node:fs";

const files = ["index.html", "about.html", "privacy.html", "terms.html", "404.html"];
const failures = [];

for (const file of files) {
  const source = readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
  if (!source.includes("iChartWrightAI")) failures.push(`${file}: missing public iChartWrightAI identity`);
  if (/(?<!i)\bChartWright(?:\s+AI|AI)?\b/.test(source)) {
    failures.push(`${file}: exposes the internal ChartWright AI name as public branding`);
  }
}

const home = readFileSync(new URL("../index.html", import.meta.url), "utf8");
for (const required of [
  "<title>iChartWrightAI",
  'content="iChartWrightAI"',
  "iChartWrightAI newsletter signup",
  "https://ichartwrightai.com/",
]) {
  if (!home.includes(required)) failures.push(`index.html: missing ${required}`);
}

if (failures.length) {
  console.error(JSON.stringify({ passed: false, failures }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ passed: true, checked_files: files.length, public_brand: "iChartWrightAI" }, null, 2));
