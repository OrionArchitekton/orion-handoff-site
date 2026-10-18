import type { ProductData } from './types';
const GITHUB = 'https://github.com/OrionArchitekton/orion-handoff';
const GUIDE = 'https://www.danmercede.com/guides/hand-off-local-agent-tasks';
export const PRODUCT_DATA: ProductData = {
  name: 'orion-handoff',
  tagline: 'Carry task context between agent sessions.',
  credibility: 'MIT · Python 3.11+ · Linux x86_64 · Explicit local stores',
  canonical: 'https://www.danmercede.com/works/orion-handoff/',
  metaDescription: 'A local CLI for bounded task handoffs. Inspect exact tasks, preserve immutable revisions, and keep stale or ambiguous context from becoming a continuation.',
  problem: {
    heading: 'A new session needs the right context',
    body: 'The latest note may belong to another task. A fresh file may contain old observations. A recorded next step may need new approval.',
  },
  whatItDoes: {
    heading: 'Keep those questions separate',
    body: 'Save a bounded handoff in an explicitly selected local store. Pick up an exact task, inspect its observations and acceptance claims, and see uncertainty before continuing. Every result says authority: none.',
  },
  cta: { primaryLabel: 'View on GitHub', primaryUrl: GITHUB, secondaryLabel: 'Follow the guide', secondaryUrl: GUIDE },
  demo: {
    heading: 'One task, one explicit pickup',
    intro: 'An illustrative summary of the guide’s synthetic walkthrough. JSON responses contain additional fields; these are the decision points.',
    lines: [
      {kind:'command', text:'orion-handoff --store "$STORE" --json pickup --task alpha'},
      {kind:'output', text:'code: context_available   match: task', tone:'ok'},
      {kind:'output', text:'recency: within_window   authority: none'},
      {kind:'comment', text:'# Two current tasks share a project: no implicit choice'},
      {kind:'command', text:'orion-handoff --store "$STORE" --json pickup --project sample-project --resume'},
      {kind:'output', text:'code: ambiguous   record: null   exit: 11', tone:'fail'},
      {kind:'comment', text:'# A stale successor stays selected; no older fallback'},
      {kind:'output', text:'code: inspect_only   continuation: null   exit: 10', tone:'muted'},
    ],
  },
  quickstart: {
    heading: 'Start with a disposable store',
    intro: 'Download the v0.1.0 wheel and verify its SHA-256 against the reviewed release checksum. The guide includes a self-contained record generator, two tasks, a stale successor, and a backup/restore check.',
    blocks: [
      {title:'Install the verified wheel', note:'From your download directory', command:'python3 -m venv .venv\n.venv/bin/python -m pip install --no-deps --no-index ./orion_handoff-0.1.0-py3-none-any.whl'},
      {title:'Initialize and inspect', note:'Bash · local Linux filesystem', command:'DEMO_ROOT=$(mktemp -d "\${TMPDIR:-/tmp}/handoff-demo.XXXXXXXX")\nSTORE="$DEMO_ROOT/store"\n.venv/bin/orion-handoff --store "$STORE" --json init\n.venv/bin/orion-handoff --store "$STORE" --json list'},
    ],
  },
  commands: [
    {name:'init', description:'Initialize the chosen store. Re-initializing preserves its records.'},
    {name:'record --input -', description:'Validate a complete JSON record from stdin and append an immutable revision.'},
    {name:'show FULL_UUID4', description:'Inspect one record and its current-revision status.'},
    {name:'list', description:'Inspect a bounded list, with explicit truncation.'},
    {name:'pickup --task KEY', description:'Select an exact task; report matching, integrity, recency and acceptance separately.'},
  ],
  differentiators: {
    heading: 'Useful boundaries',
    points: [
      {title:'Observed time stays explicit', body:'Context uses its declared observation time. Saving a file does not make an old observation current.'},
      {title:'Uncertainty stays visible', body:'Ambiguous matches refuse selection. Stale, missing or conflicting information produces inspect-only context.'},
      {title:'Records carry no permission', body:'Claims and references are returned for review. References are never opened or verified, and recorded next steps are never executed.'},
      {title:'A small standalone core', body:'Standard-library runtime, no service, hooks or provider adapters. Tested on WSL2 Linux x86_64 with ext4 and CPython 3.11/3.13. Use a same-host local filesystem.'},
    ],
  },
  links: [
    {label:'Source and recovery runbook', url:GITHUB},
    {label:'Step-by-step guide', url:GUIDE},
    {label:'All Works', url:'https://www.danmercede.com/works'},
  ],
  footerNote:'MIT licensed. Built by Dan Mercede.',
};
