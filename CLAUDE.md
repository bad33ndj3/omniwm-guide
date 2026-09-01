# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page HTML reference/onboarding guide for [OmniWM](https://github.com/BarutSRB/OmniWM), a macOS tiling window manager. No build step, no dependencies, no package.json — it's plain HTML/CSS/JS deployed as a static site.

- `guide.html` — the entire product: styles, markup, and JS in one file. This is what ships.
- `index.html` — a redirect stub to `guide.html` (GitHub Pages serves `index.html` at the root; kept separate to avoid duplicating content).
- `data.js` — a standalone copy of the same dataset embedded in `guide.html` (see below). Not loaded by the page itself.
- `okf/` — the source-of-truth knowledge bundle (OKF v0.1 spec: flat markdown "concept" files with YAML frontmatter, `index.md`/`log.md` reserved). Every fact in the guide traces back to a file here.
- `.github/workflows/pages.yml` — deploys `main` to GitHub Pages via `actions/upload-pages-artifact` (no build), live at https://bad33ndj3.github.io/omniwm-guide/.

## Working on `guide.html`

There's no dev server or build — open the file directly in a browser, or check the deployed Pages URL after pushing to `main`.

Key structures inside the `<script>` block (grep for these names):
- `OMNIWM_ACTIONS` (~line 303) — the frozen 87-row action/shortcut dataset. Each row: `{ id, action, shortcut, layout, category, cli, note }`. **This is the single source of truth for every shortcut/CLI string shown anywhere on the page.** Never invent a shortcut or CLI command — every value must trace verbatim to a file in `okf/omniwm-source/`, primarily `keyboard-shortcuts.md` and `cli-commands.md`. A header comment above the array in `data.js` documents the verification method and row counts per category.
- `SEARCH_SYNONYMS` (~line 398) — plain-language → OmniWM-terminology synonym map (e.g. `bigger → ["span +", "grow", ...]`) that powers the live search.
- `expandQuery` / `scoreRow` (~line 429/446) — search logic. Matching is **OR-within-word-group, AND-across-words**: a query word matches itself OR any of its synonyms, but every word (or its synonym group) must find some match. Do not flatten this into a plain AND-across-all-terms — that was a real bug once (search returned zero results for realistic queries).
- `render()` (~line 595) — when a search query is active, scores are computed across **all** categories and sorted into one flat global list, not sorted within each category group. Category-grouped browsing only happens with an empty query.
- `TASKS` / `ACTIONS_BY_ID` (~line 538) — curated "how do I X" quick-answer cards shown above the full reference table. Each task references a row `id` in `OMNIWM_ACTIONS` rather than duplicating shortcut text, so it can't drift out of sync with the dataset.
- `FEATURES` (~line 668) and `CONFIG_SECTIONS` (~line 687) — plain data arrays rendered into the features grid and config table.

CSS theme architecture (three-state, per the artifact-design convention): bare `:root` defines the dark-default tokens; `@media (prefers-color-scheme: light)` guarded by `:root:not([data-theme="light"])` redefines them for OS-light visitors; `:root[data-theme="light"]` redefines them again for an explicit toggle. Both light-mode blocks must carry the *same* light palette — a real bug here (media-query block briefly had dark values instead) broke the page for anyone in system light mode.

## Data changes

If a shortcut, CLI command, or config value needs to change: update the source markdown in `okf/omniwm-source/` first, then re-derive the affected row(s) in `OMNIWM_ACTIONS` inside `guide.html` (and mirror the same edit into `data.js`, which exists as a readable standalone copy of the same array). Don't hand-edit `guide.html`'s array without checking it still matches the source doc.

## Deployment

Push to `main` → GitHub Actions (`pages.yml`) deploys automatically to GitHub Pages. No manual build/upload step. The repo's Pages source must be set to "GitHub Actions" (Settings → Pages) for this to work.
