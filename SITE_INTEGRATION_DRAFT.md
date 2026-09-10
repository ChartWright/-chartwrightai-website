# Draft: Six-Business-Line Website Integration

**Status:** DRAFT ONLY — independent review required before implementation or publication  
**Scope:** ChartWright AI public website and verified private workspaces  
**Source brief:** `six-business-line-website-integration-program.md` in the COO workspace  
**External effect:** None. This file is not linked from a public page.

## Purpose

Give visitors one coherent way to understand the ChartWright ecosystem while keeping public explanations, private delivery workspaces, evidence, credentials, client data, and decision authority properly separate.

## Information architecture proposal

The public home page should use a “How ChartWright helps” section with six cards. Each card must state its capability status and link only to a reviewed public explanation or an approved request path.

| Line | Public card title | Safe public description | Private destination rule |
|---|---|---|---|
| Research intelligence | Evidence-linked research | Structured research briefs that distinguish sources, calculations, assumptions, and unknowns. | Link only through an approved, scoped request; do not expose research source files. |
| Forecasting and scenario lab | Scenario planning | Versioned scenario work that makes uncertainty, inputs, and limitations visible. | No forecasts, weights, or client scenarios leave the private workspace without review. |
| Real-estate intelligence | Property decision support | Rights-aware property and market workflow support, subject to scope and location. | No property, client, or licensed-data record crosses the public boundary. |
| Consulting accelerator | Governed delivery systems | Scoped operating, research, and workflow design for complex business decisions. | Intake stays human-owned; contracts and client work remain private. |
| Website and lead-generation systems | Responsible growth systems | Clear journeys, consent-aware intake, and measurable operating workflows. | No contact list, reply, schedule, or campaign connection is implied or exposed. |
| Bounded virtual-training lab | Research safety controls | Paper-only methodology and process learning with explicit limits and human gates. | No live trading, account connection, signal, performance claim, or order path. |

## Shared visitor journey

```text
Learn about a named line
  -> see capability and evidence status
  -> read limitations and boundaries
  -> choose an approved request or public resource
  -> human scope review
  -> authorized private workspace only when the relevant owner approves
```

Every route must offer an accessible recovery path and make clear when a capability is proposed, paused, unavailable, or subject to review.

## Implementation proposal

1. Add the six-card section to `index.html` after the existing advisory/agentic material.
2. Add a concise “public versus private” boundary statement.
3. Convert any route that is not a verified public destination into a plain review/intake request—not a private-site link.
4. Keep the existing no-account-access, no-live-signal, and no-execution boundaries visible.
5. Do not add analytics, forms, CRM, payments, authentication, scripts, providers, external embeds, or email automation in this change.

## Required independent review

The reviewer must verify:

- each card describes a current or clearly labeled proposed capability;
- no research, forecast, training, or commercial wording becomes a performance, investment, trading, fundraising, or customer claim;
- no card exposes or links to an unverified private workspace;
- support, accessibility, scope, and recovery routes are defined;
- the design remains consistent with the current public product boundary; and
- every exact page target and rollback plan is recorded before CEO publication approval.

## Explicitly out of scope

- Publishing or deploying website changes
- Changing DNS, domains, hosting, payments, analytics, authentication, CRM, email, or provider connections
- Moving private data, credentials, customer records, research artefacts, or methodology baselines
- Making a trading, funding, financial-performance, or customer-success claim
