---
type: Concept
title: Command Palette & Menu Anywhere
description: Unified fuzzy search over windows, app menus, clipboard; and a floating native menu bar.
tags: [omniwm, command-palette, menu-anywhere]
timestamp: 2026-09-01T00:00:00Z
resource: https://omniwm.app/features/command-palette/
---

# Command Palette
Default shortcut: `Control + Option + Space` (customizable). Three modes, switch via `Cmd + 1/2/3` or `Tab`/`Shift+Tab`:
- Windows mode (`Cmd + 1`)
- Menu mode (`Cmd + 2`)
- Clipboard mode (`Cmd + 3`)

Navigation: `Up`/`Down` to select, `Enter` to activate, `Escape` to close, `Shift + Enter` summons the selected window to the right of the current one (when available).

Hidden macOS apps remain searchable with a "Hidden" badge; selecting unhides the app and focuses the window.

Search ranking: substring matching, tiered — window title first, then app name, then workspace name.

Clipboard history: disabled by default, enable in Settings. Deduplicates entries.

# Menu Anywhere
Shortcut: `Control + Option + M`. Pops the frontmost app's real menu bar at the cursor — no traveling to the top of the screen.

# Citations
[1] https://omniwm.app/features/command-palette/
