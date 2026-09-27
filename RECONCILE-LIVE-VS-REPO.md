# Live vs repo reconcile — v1.1 · 2026-09-27 ~4:26 PM CT

Supersedes v1.0 (`f3a9a7c0…5d72`). Incorporates full public live audit + Lane1 inventory.

## Live surface
- Apex `https://ichartwrightai.com/` **200** (no redirect)
- `https://www.ichartwrightai.com/` **200** — **does NOT redirect** to apex (same content; Cloudflare params differ)
- Host: Cursor Sites project `appgprj_6a880b26bc94819186d2435defae4085`
- Pointer: `governance/CURRENT-PUBLIC-WEBSITE.json` on ChartWright/chartwright-ai
- Record CW-WEB-2026-08-28-V11 · version 11 · verification_status **UNVERIFIED**
- sites_source_commit `0342e5c…` **NOT in GitHub** (either ChartWright repo) · sites_source_repository null
- No `Last-Modified` / `dateModified` on public HTML → current deploy date **UNATTESTED**

## Live routes (public audit)
| Path | HTTP | Freshness | Notes |
|---|---|---|---|
| / | 200 | DATE_UNKNOWN | Specialized AI roles · one human founder · no seat names |
| /about | 200 | DATE_UNKNOWN | Jack Founder/CEO & Chief AI Architect; AI roles = software not employees |
| /trust | 200 | HISTORICAL receipt **checked 2026-09-13** (explicitly not current deploy) | FRESH vs 2-week cutoff; deploy still UNATTESTED |
| /tools | 200 | DATE_UNKNOWN | PUBLIC DEMO / educational |
| /research | 200 | DATE_UNKNOWN | research-platform-v2-illustrative; synthetic samples |
| /research/investment-intelligence | 200 | DATE_UNKNOWN | synthetic educational |
| /proof/one-case-five-views | 200 | DATE_UNKNOWN | guided proof (bare `/proof` = 404) |
| /privacy /terms | 200 | DATE_UNKNOWN | |
| /sitemap.xml /robots.txt | 404 | n/a | SPA HTML shell |
| /login /signin /auth /dashboard /company /contact /team | 404 | n/a | no public auth UI |

**Org scan:** Dan / Furphy / CG / Elon / seats / staff — **NOT FOUND** on public HTML (employees only in negation on About). Correct under Gate1; catch-up preview may name ACTIVE operating seats as software roles without implying employees.

## Repo ≠ live
- `ChartWright/-chartwrightai-website` + `chartwright-ai/website/`: ChartWrightAI-branded UNBLESSED preview; no trust/tools/research pages; about ~7.8KB vs live ~25KB.
- Catch-up updates those previews + ops receipts only. **Does not** move Sites v11.

## Research workflow (lab inventory ~4:25 PM CT)
Lane1 manufacture largely **DONE** on Mac (frameworks `19feaef2…`, fixtures `a4d57192…`, Gate3 mirrors, NEXT SPY/VTSAX SS OMITTED, Offer A fold `233f79bb…`, Furphy R1–R4 closeout `a205c9af…`, SCORE_INTEGRITY harden `df9f051f…` 9/9 lab).
Open lab holes: box `FOLD-CONSTRAINTS/` missing; some box sidecars HOLE/STALE; team SIGN_OFF (Apple/Claude/Gemini returns HOLE).
Live blocked: FO5b writer, site SS mirror, Gate1, Offer A buyer send, Mon 8:05 CT collect-only pulls.

## Walls
Gate1 NOT PASSED · DEPLOY_BLOCKED · Stripe NOT_WIRED · Dan NO ROLE · no client send · no push/merge/deploy unless Jack names.

## Draft branch context

This v1.1 text is included in the unblessed preview pull request. Honesty banners added on this branch do not move Sites v11. Lane1 digests above are the supplied inventory; they were not re-hashed in this environment. `0342e5c` is not a commit in this repository.
