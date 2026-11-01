# Orion Handoff Works site

Part of [Cosmocrat OS](https://www.cosmocrat.ai/tools#orion-handoff).

MIT source for [Orion Handoff](https://www.danmercede.com/works/orion-handoff/).

`npm ci`, `npm run typecheck`, `npm run build`, then `npm run preview -- --host 127.0.0.1`.

`constants.ts` holds product copy; the [core repository](https://github.com/OrionArchitekton/orion-handoff) owns technical documentation. This project is served through the hub's prefix-stripped Works rewrite.

Template lineage: mcp-context-budget-site c5b78f8, with the Tailwind 4 build configuration used by orion-phone-site. Copyright Dan Mercede.

Deployment, validation and rollback: [runbook](docs/runbooks/works-site.md).
