---
type: Reference
title: Configuration (settings.toml top-level sections)
description: Config file location, TOML rules, table of every top-level section.
tags: [omniwm, config, toml]
timestamp: 2026-09-01T00:00:00Z
resource: https://omniwm.app/config/configuration/
---

Location: `${XDG_CONFIG_HOME:-$HOME/.config}/omniwm/settings.toml`. Recreated from running settings if deleted.

TOML format, required top-level `schemaVersion = 1`. Strictly validated — missing required keys or malformed hotkey arrays reject the whole file. Modify values in place; don't delete keys.

# Top-level sections
| Section | Purpose |
|---------|---------|
| `[general]` | Hotkeys master switch, Hyper key, default layout, updates, IPC, animations |
| `[focus]` | Focus-follows-mouse and monitor-edge focus behavior |
| `[mouseWarp]` | Cursor warping between monitors |
| `[routing]` | macOS vs. custom monitor arrangement |
| `[gaps]` | Inner and outer gaps |
| `[niri]` | Scrolling layout options |
| `[dwindle]` | BSP layout options |
| `[borders]` | Focused-window border styling |
| `[overview]` | Overview zoom and colors — see [Overview mode](./overview-mode.md) |
| `[workspaceBar]` | Workspace bar appearance/behavior — see [Workspace bar](./workspace-bar.md) |
| `[gestures]` | Mouse and trackpad gestures |
| `[statusBar]` | Menu bar icon extras |
| `[hiddenBar]` | Menu bar icon concealment — see [Hidden bar](./hidden-bar.md) |
| `[clipboard]` | Clipboard history limits — see [Command palette](./command-palette.md) |
| `[quakeTerminal]` | Drop-down terminal settings — see [Quake terminal](./quake-terminal.md) |
| `[scratchpads]` | Scratchpad slot labels — see [Scratchpads](./scratchpads.md) |
| `[appearance]` | Light/dark appearance of OmniWM's UI |
| `[[hotkeys]]` | One entry per assignable action — see [Keyboard shortcuts](./keyboard-shortcuts.md) |
| `[[workspaces]]` | Workspace definitions |
| `[[appRules]]` | Per-app window rules — see [App rules](./app-rules.md) |
| `[[monitor*Overrides]]` | Per-monitor bar, orientation, layout overrides |

Note: full per-key schema (`/config/settings-reference/`) was not captured verbatim — only this section-level table. If exact defaults per key are needed later, re-fetch that page.

# Citations
[1] https://omniwm.app/config/configuration/
