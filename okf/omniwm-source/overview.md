---
type: Concept
title: OmniWM Overview
description: What OmniWM is, requirements, core features.
tags: [omniwm, overview]
timestamp: 2026-09-01T00:00:00Z
resource: https://github.com/BarutSRB/OmniWM
---

OmniWM is a tiling window manager for macOS, inspired by Niri and Hyprland. Developer-signed, notarized releases. Requires macOS 26+ on Apple Silicon. Does not disable SIP. Written in Swift, GPL-2.0 only.

# Key features
- Two layout engines: [Niri layout](./layouts.md) (orientation-aware scrolling columns/rows) and Dwindle layout (binary space partition, Hyprland-style)
- True quake/sticky terminal via Ghostty's libghostty — multi-tab, splits, edge-slide
- Native macOS tab support
- IPC/CLI (`omniwmctl`) for automation — see [CLI overview](./cli-overview.md)
- [Scratchpads](./scratchpads.md) — 10 slots for floating windows, follow workspace switches
- Overview mode (Niri-style) — thumbnails of all windows
- Command palette — fuzzy search windows, app menus, clipboard history
- Workspace bar with optional system stats
- Hidden Bar — hides menu-bar icons (macOS 27+)
- [Multi-monitor](./multi-monitor.md) management, per-display layout orientation
- [App Rules](./app-rules.md) — match by bundle ID/name/title/AX role, force tiling/floating/workspace
- Fully remappable [keyboard shortcuts](./keyboard-shortcuts.md)

# Config & state
- Config: `${XDG_CONFIG_HOME:-$HOME/.config}/omniwm/settings.toml`, live-reload, `schemaVersion = 1`. See [configuration](./configuration.md).
- State (clipboard history, update checks, window catalog): `${XDG_STATE_HOME:-$HOME/.local/state}/omniwm`

# Citations
[1] https://github.com/BarutSRB/OmniWM (README)
[2] https://omniwm.app
