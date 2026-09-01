---
type: Concept
title: Multi-Monitor Behavior
description: Per-display orientation, moving windows/workspaces between monitors, home monitor.
tags: [omniwm, monitors, multi-monitor]
timestamp: 2026-09-01T00:00:00Z
resource: https://omniwm.app/guides/multi-monitor/
---

Layout orientation is per-display, not global. Horizontal-orientation monitors: columns scroll horizontally. Vertical-orientation monitors: rows scroll vertically. See [layouts](./layouts.md).

# Two settings controlling cross-monitor movement
- **Move Window Across Monitor at Edge** — whether pushing a window past a workspace boundary transfers it to the adjacent display.
- **Follow Window to Monitor** — whether focus follows a window sent to another monitor; off = stay in source workspace.

# Dedicated move actions
`Move Window to Left/Right/Up/Down Monitor` sends the focused window directly to the current workspace on the adjacent routed display, independent of edge-crossing settings. No wrapping when no monitor exists in that direction.

# Workspace home monitor
Each workspace has a designated Home Monitor. `Move Workspace to Left/Right/Up/Down Monitor` actions target the active workspace but do NOT rewrite the workspace's Home Monitor or swap workspaces. Fullscreen, hidden apps, scratchpads, and some focus conditions can block these moves.

Also see CLI equivalent: `omniwmctl workspace move-to-monitor <workspace> <direction> [--force]` in [CLI actions](./cli-actions.md).

# Citations
[1] https://omniwm.app/guides/multi-monitor/
