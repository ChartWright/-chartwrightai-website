# Reconcile live site vs this repository

**Record date:** 2026-09-27  
**This repository:** `ChartWright/-chartwrightai-website` (static HTML preview)  
**Live domain:** `https://ichartwrightai.com`  
**Status:** DEPLOY_BLOCKED · Gate1 NOT PASSED · this file does not update live Sites version 11

This repository is an unblessed preview package. It is not the source of truth for the live site.

## Live identity (supplied verification, 2026-09-27)

| Field | Value |
|---|---|
| Product | Cursor Sites |
| Project | `appgprj_6a880b26bc94819186d2435defae4085` |
| Version | 11 |
| Record | `CW-WEB-2026-08-28-V11` |
| `sites_source_commit` | `0342e5c…` |
| `sites_source_repository` | null / missing evidence |
| `verification_status` | UNVERIFIED |

`0342e5c` is not a commit in this repository (`git rev-parse` fails; it does not appear in branch history). `ChartWright/chartwright-ai` could not be opened from this environment (GitHub could not resolve the repository), so this note does not re-hash that repo. The supplied verification already states the same commit is absent there.

Source linkage is UNVERIFIED. Do not treat a merge of this preview as a publish of Sites version 11.

## Bless constraint

`chartwright-ai/website` DESIGN-NOTES were not readable here. The supplied constraint is that those notes say nothing in that website tree may go live until Jack blesses it. This preview is under the same wall: nothing here goes live until Jack blesses a named deploy.

## Divergences

| Topic | Live site | This preview (`main`, then this branch) |
|---|---|---|
| Branding | About title `About · iChartWrightAI`. Public brand iChartWrightAI. | `about.html` title remains `About ChartWrightAI`. The preview was not rebranded. |
| About size | About document is about 25KB (a GET on 2026-09-27 returned 25,411 bytes). | `main` `about.html` is 7,791 bytes. This draft is larger only because of the roster block. It is still the small preview, not the live About document. |
| About roster | Founder Jack plus generic “Specialized AI roles.” Does not name PMO, Research, Independent Audit, or Furphy Codex. PUBLIC DEMO / SYNTHETIC language is on the live research and tools surfaces. | Draft names Jack Zingale Schiro as sole clearance and the active software roles. Furphy is Codex only. Advisory template is paused. Tombstones are not listed as live. |
| Trust | Trust Center date **2026-09-13**. | No Trust page on `main`. This branch adds `trust.html` as a preview record dated 2026-09-27. It does not change the live Trust date. |
| Research | Live research surface shows **2026-09-23**. Routes such as `/research` are the Sites app, labeled public demo / synthetic. | No research page on `main`. This branch adds `research.html` as an honesty banner only. |
| Tools | Live `/tools` is the Sites tools gateway. | No tools page on `main`. This branch adds `tools.html` as an honesty banner only. |
| sitemap.xml / robots.txt | HTTP 404. The body is SPA fallback HTML, not an XML sitemap or a robots file. | Absent on `main`. This branch adds both for preview files that exist in this tree (`/`, `about.html`, `trust.html`, `research.html`, `tools.html`, `privacy.html`, `terms.html`). |
| Auth URLs | Public `/login`, `/signin`, `/auth`, `/app`, `/dashboard` return 404. Authenticated view UNVERIFIED. | No login and no invented auth. |
| Dan | Not a live role. | No Dan biography in this preview. |
| Deploy | Sites version 11 is the live artifact. | DEPLOY_BLOCKED. This pull request does not update live Sites version 11. |

## What this branch is allowed to be

A draft catch-up of the preview package: dated roster copy, honesty banners, and preview `robots.txt` / `sitemap.xml`.

## What this branch is not

A source restore of Sites version 11, a blessing, a Gate1 pass, or a production deploy.
