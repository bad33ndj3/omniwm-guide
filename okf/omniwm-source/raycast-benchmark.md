---
type: Reference
title: Raycast Manual — Benchmark
description: Concrete structural/visual facts about raycast.com/manual, fetched directly, used as the comparison bar for the OmniWM guide.
tags: [raycast, benchmark, competitor]
timestamp: 2026-09-01T00:00:00Z
resource: https://manual.raycast.com/
---

Fetched directly (manual.raycast.com/, /keyboard-shortcuts, /search-bar). Live screenshots were not available (Chrome extension not connected) — structural facts only, no pixel-level color/shadow values.

# Site structure
Multi-page docs site, not single-page. Left sidebar tree, 7 top sections (Basics, Core Features, Power Features, AI, iOS, Account, Troubleshooting & Guidelines), collapsible, current page highlighted. Breadcrumb in header ("Manual > current page"). Right sidebar = sticky per-page table of contents (anchor jump list). Prev/Next page links at bottom.

# Search
Global site search: `⌘K` / `Ctrl K`, centered in header, opens an overlay. NOT full-text fuzzy search of shortcut tables — it's a page/command finder, not a within-page filter.

**Real weakness found**: the `/keyboard-shortcuts` reference page itself has **no in-page search or filter UI**. Raycast tells the reader to use browser Cmd+F. This is a genuine gap our single-page guide can beat by having a live filter/search box over the whole shortcut+action list.

# Keyboard shortcuts page (`/keyboard-shortcuts`) — direct competitor to our quick-reference
- 18 sections (Global Shortcuts, General Navigation, List Navigation, Root Search, Action Panel, Common Item Actions [+subsections], AI Chat [+subsections], Forms, Text Editing, Alternative Navigation Bindings, Extensions Support & Feedback)
- Format per row: bullet point, key combo(s) as **plain monospace inline text** (not styled chip/kbd elements) — e.g. "⌘Space / AltSpace" — followed by colon and description
- Mac/Windows variants shown together separated by `/`
- Parenthetical context inline: "(default, can be customized)", "(enabled by default)"
- Cross-references other pages inline: "See the Command Aliases & Hotkeys page for details"
- Moderate density, clear section breathing room, bold subsection headers

# Search bar page — matching model to reference/beat
Raycast's own root search: fuzzy matching (`msg`→Messages), 3 sensitivity levels (High/Medium/Low), ranking = exact alias > alias prefix > title fuzzy score > subtitle/keyword > frecency. Good model for how our in-page filter should rank: exact action-name match > substring in action > substring in shortcut/CLI string > substring in category.

# What to beat, concretely
1. **In-page live filter over the full action list** — Raycast has none on its shortcut page; we should have type-to-filter with fuzzy/substring ranking.
2. **Real `<kbd>`-styled chips**, not plain inline text — visually clearer than Raycast's plain monospace.
3. **Single page, no click-through** — Raycast forces navigation between shortcuts/CLI/concepts across ~5 separate pages; ours should surface it all in one scrollable, filterable page with anchored sections (best of both: single-page density + sidebar-style ToC/breadcrumb wayfinding via a sticky mini-nav).
4. Match, don't necessarily beat: their onboarding tone (short, example-led, "why this matters" framing), their moderate/generous spacing, their light/dark theme parity, their per-page sticky ToC for orientation.

# Citations
[1] https://manual.raycast.com/
[2] https://manual.raycast.com/keyboard-shortcuts
[3] https://manual.raycast.com/search-bar
