---
verified: 2026-10-17
review_after: 2026-11-17
topics: [works, handoff, deployment]
references: [vite.config.ts, vercel.json, constants.ts, index.html]
---
# Works site release

Preparation is local and private. Do not deploy until full-package approval.

After approval, create the reviewed site destination and a distinct Vercel project. Never reuse a template project association. Serve origin-root `dist/` publicly; the hub strips `/works/orion-handoff/`. Verify origin HTML and assets before landing hub rewrites. The hub owns robots and sitemap.

Validate `npm ci`, typecheck and build. Check canonical/OG/manifest paths, keyboard navigation, mobile overflow, JavaScript-disabled prose, and Works → microsite → guide native navigation.

Monitor after approved deployment: exact canonical page, asset content types, guide body, no SSO wall or hydration errors. Local previews prove no hosted state.

Rollback an approved launch by reverting its hub card/rewrites/guide commit and returning the site to the last approved deployment. No DNS, hooks, services or private handoff store changes are needed.
