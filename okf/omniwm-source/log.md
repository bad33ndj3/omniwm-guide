# Bundle Update Log

## 2026-09-01

* **Creation**: Initial OKF bundle assembled from https://github.com/BarutSRB/OmniWM (README) and https://omniwm.app (docs site) via WebFetch, for the OmniWM single-page HTML guide project.
* **Creation**: Added 15 concepts — overview, configuration, keyboard-shortcuts, cli-overview, cli-commands, cli-queries, cli-actions, layouts, multi-monitor, scratchpads, app-rules, command-palette, quake-terminal, workspace-bar, hidden-bar, overview-mode.
* **Gap noted**: settings-reference (full per-key TOML schema) not captured verbatim, only section table in configuration.md.
* **Added**: raycast-benchmark.md — direct fetch of manual.raycast.com (no browser/screenshots available, Chrome extension not connected), used as comparison bar per advisor guidance. Key finding: Raycast's own keyboard-shortcuts page has no in-page search/filter — concrete gap for our guide to beat.
* **Version check**: recorded OmniWM release tag v0.6.4 (via `gh api repos/BarutSRB/OmniWM/releases/latest`) as the version this bundle and the guide are verified against.
