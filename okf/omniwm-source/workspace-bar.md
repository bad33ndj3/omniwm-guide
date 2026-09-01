---
type: Concept
title: Workspace Bar & System Stats
description: Floating per-display workspace/app navigation island; optional stats popup.
tags: [omniwm, workspace-bar, system-stats]
timestamp: 2026-09-01T00:00:00Z
resource: https://omniwm.app/features/workspace-bar/
---

A "centered floating island on each display" showing workspace chips (names + app icons).

# Interaction
- Click a workspace chip → switch to that workspace
- Click an app icon → focus that window
- Dedup enabled: multiple windows from same app share one icon + count badge
- Apps with macOS-hidden windows show an eye-slash badge; selecting unhides + focuses
- Non-empty scratchpad slots appear as clickable pills that toggle the scratchpad

# System Stats
Optional popup: CPU, memory, GPU, disk, uptime. Toggle via hotkey or `omniwmctl command toggle-system-stats`. Only works when the workspace bar is visible on that monitor.

# Customization
Position, notch handling, modifier-key reveal, empty-workspace hiding, layout space reservation, fullscreen behavior, custom color schemes. Per-monitor independent settings. App icons excludable/replaceable.

# Citations
[1] https://omniwm.app/features/workspace-bar/
