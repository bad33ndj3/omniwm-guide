---
type: Concept
title: Scratchpads
description: 10 slots for floating windows overlaid on the current workspace.
tags: [omniwm, scratchpads]
timestamp: 2026-09-01T00:00:00Z
resource: https://omniwm.app/features/scratchpads/
---

A scratchpad is a slot (1-10) that holds any number of floating windows and overlays them on the workspace you're looking at. Empty slots are invisible/inactive.

# Assigning
"Assign Focused Window to Scratchpad N" moves the active window into a slot, converting it to floating if needed, positions it off-screen. Repeating on an already-assigned window returns it to the layout.

# Toggling
"Toggle Scratchpad N" brings all windows in a slot into view on the current monitor, or hides them again. Only one scratchpad displays at a time — activating a different slot parks the previous one.

# Behavior
- Scratchpads follow you across workspace changes, stay visible until toggled off
- If a scratchpad is on another monitor, its shortcut moves it to your current monitor
- Parked windows leave a 1px edge visible on-screen

# Shortcuts / CLI
Both "Assign Focused Window to Scratchpad N" and "Toggle Scratchpad N" start unassigned — configure in Settings > Hotkeys. See [keyboard shortcuts](./keyboard-shortcuts.md).

CLI:
```
omniwmctl command scratchpad assign [1-10]
omniwmctl command scratchpad toggle [1-10]
omniwmctl query windows --scratchpad
```

Custom labels (replace numbers in workspace bar) via `[scratchpads]` in `settings.toml`.

# Citations
[1] https://omniwm.app/features/scratchpads/
