---
type: Reference
title: Window & Workspace Actions (omniwmctl window / workspace)
description: Session-ID-based window actions and workspace actions, verbatim from omniwm.app.
tags: [omniwm, cli, actions]
timestamp: 2026-09-01T00:00:00Z
resource: https://omniwm.app/reference/cli/actions/
---

# Window actions
Syntax: `omniwmctl window <action> <opaque-id>`

- `focus` — focus a managed window by opaque ID
- `navigate` — navigate to a managed window (switches workspace if needed)
- `summon-right` — summon a window to the right of the currently focused window

Window IDs are session-specific, reset after OmniWM restarts. Retrieve via [query commands](./cli-queries.md).

# Workspace actions
- `omniwmctl workspace focus-name <name>` — focus a workspace by raw ID or unambiguous configured display name
- `omniwmctl workspace move-to-monitor <workspace> <left|right|up|down> [--force]` — move a workspace to an adjacent monitor

`move-to-monitor`: moving a visible workspace transfers visibility to the destination monitor; moving an inactive workspace typically makes it visible at the destination. `--force` overrides configured monitor assignment for the current session only — persists through temporary disconnections, clears when the workspace returns to its home monitor or OmniWM restarts.

# Related
[Multi-monitor guide](./multi-monitor.md), [CLI commands](./cli-commands.md)

# Citations
[1] https://omniwm.app/reference/cli/actions/
