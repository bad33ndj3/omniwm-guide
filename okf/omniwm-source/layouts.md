---
type: Concept
title: Layout Modes — Niri vs Dwindle
description: The two layout engines and tiling/floating behavior.
tags: [omniwm, layouts, niri, dwindle]
timestamp: 2026-09-01T00:00:00Z
resource: https://omniwm.app/guides/layouts/
---

# Niri layout
Orientation-aware scrolling containers. Horizontal monitors: windows form vertical columns that scroll left/right. Vertical displays: horizontal rows that scroll up/down. Each container can hold multiple windows or be "tabbed" (one window visible at a time).

# Dwindle layout
Binary space partition — "recursively divides screen space." Each new window splits available space in half. Tiles can group multiple windows as tabs. Best suited for traditional tiling with predictable layouts.

# Tiling & floating
Both engines support floating windows alongside tiled layouts. Toggle individual windows between floating/tiled, or force via [App Rules](./app-rules.md). Commands exist to raise all floating windows and rescue off-screen ones — see [CLI commands](./cli-commands.md) (`raise-all-floating-windows`, `rescue-offscreen-windows`).

Full sizing/resizing/snap shortcuts (Balance Sizes, Cycle Size, Dwindle grow/shrink/preselect, Niri spans) live in [keyboard shortcuts](./keyboard-shortcuts.md) and [CLI commands](./cli-commands.md).

# Citations
[1] https://omniwm.app/guides/layouts/
