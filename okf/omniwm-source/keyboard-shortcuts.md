---
type: Reference
title: Keyboard Shortcuts (verbatim from omniwm.app/guides/keyboard-shortcuts)
description: Default keybinding tables by category. All remappable via Settings > Hotkeys.
tags: [omniwm, shortcuts, keybindings]
timestamp: 2026-09-01T00:00:00Z
resource: https://omniwm.app/guides/keyboard-shortcuts/
---

Hyper modifier default = Control + Option + Shift + Command. All bindings customizable in Settings > Hotkeys. "Layout" column: Shared / Niri / Dwindle.

# Workspace Management
| Action | Default Shortcut | Layout |
|--------|------------------|--------|
| Switch to Workspace 1-9 | Option + 1-9 | Shared |
| Move Window to Workspace 1-9 | Option + Shift + 1-9 | Shared |
| Switch to Last Active Workspace | Control + Option + Tab | Shared |
| Switch to Next Workspace | Unassigned | Shared |
| Switch to Previous Workspace | Unassigned | Shared |
| Move Window to Workspace Up | Control + Option + Shift + Up | Shared |
| Move Window to Workspace Down | Control + Option + Shift + Down | Shared |
| Move Column to Workspace 1-9 | Unassigned | Niri |
| Move Column to Workspace Up | Control + Option + Shift + Page Up | Niri |
| Move Column to Workspace Down | Control + Option + Shift + Page Down | Niri |

# Focus Navigation
| Action | Default Shortcut | Layout |
|--------|------------------|--------|
| Focus Left/Right/Up/Down | Option + Arrow Keys | Shared |
| Focus Down or Top/Up or Bottom | Unassigned | Shared |
| Focus Top/Bottom Window | Unassigned | Niri |
| Focus Window or Workspace Down/Up | Unassigned | Niri |
| Focus Previous Window | Option + Tab | Shared |
| Traverse Backward/Forward | Unassigned | Niri |
| Focus First Column | Option + Home | Niri |
| Focus Last Column | Option + End | Niri |
| Focus Column 1-9 | Control + Option + 1-9 | Niri |
| Focus Window 1-9 in Column | Unassigned | Niri |
| Toggle Command Palette | Control + Option + Space | Shared |
| Open Menu Anywhere | Control + Option + M | Shared |
| Toggle Workspace Bar | Unassigned | Shared |
| Toggle Hidden Icons Bar | Unassigned | Shared |
| Toggle Quake Terminal | Option + ` | Shared |
| Toggle Overview | Option + Shift + O | Shared |
| Toggle System Stats | Unassigned | Shared |

# Window Movement
| Action | Default Shortcut | Layout |
|--------|------------------|--------|
| Move Left/Right/Up/Down | Option + Shift + Arrow Keys | Shared |
| Reorder Window Up/Down | Unassigned | Shared |
| Move Window Down/to Workspace Down | Unassigned | Niri |
| Consume/Expel Window | Unassigned | Niri |

# Monitor Control
| Action | Default Shortcut | Layout |
|--------|------------------|--------|
| Focus Next Monitor | Control + Command + Tab | Shared |
| Focus Previous Monitor | Unassigned | Shared |
| Focus Last Monitor | Control + Command + ` | Shared |
| Move Workspace to Monitor | Unassigned | Shared |
| Move Window to Monitor | Unassigned | Shared |

# Layout Operations
| Action | Default Shortcut | Layout |
|--------|------------------|--------|
| Toggle Fullscreen | Option + Return | Shared |
| Toggle Native Fullscreen | Unassigned | Shared |
| Balance Sizes | Option + Shift + B | Shared |
| Cycle Size Forward | Option + . | Shared |
| Cycle Size Backward | Option + , | Shared |
| Move to Root | Unassigned | Dwindle |
| Toggle Split | Unassigned | Dwindle |
| Swap Split | Unassigned | Dwindle |
| Grow Horizontally/Vertically | Unassigned | Dwindle |
| Shrink Horizontally/Vertically | Unassigned | Dwindle |
| Grow/Shrink Focused Window | Unassigned | Dwindle |
| Preselect Left/Right/Up/Down | Unassigned | Dwindle |
| Clear Preselection | Unassigned | Dwindle |
| Raise All Floating Windows | Option + Shift + R | Shared |
| Rescue Off-Screen Windows | Unassigned | Shared |
| Toggle Floating Window | Unassigned | Shared |
| Assign to Scratchpad 1-10 | Unassigned | Shared |
| Toggle Scratchpad 1-10 | Unassigned | Shared |
| Toggle Workspace Layout | Option + Shift + L | Shared |

# Container and Column Management
| Action | Default Shortcut | Layout |
|--------|------------------|--------|
| Move Container Left/Right | Control + Option + Shift + Left/Right | Shared |
| Move Container Up/Down | Unassigned | Dwindle |
| Toggle Column Tabbed | Option + T | Niri |
| Toggle Container Full Span | Option + Shift + F | Niri |
| Expand Container Span | Control + Option + F | Niri |
| Move Column to First/Last | Control + Option + Home/End | Niri |
| Move Column to Index 1-9 | Unassigned | Niri |
| Set Container Span -10%/+10% | Option + -/= | Niri |
| Set Window Secondary Span -10%/+10% | Option + Shift + -/= | Niri |
| Set Window Primary Span -10%/+10% | Unassigned | Niri |
| Reset Window Secondary Span | Control + Option + R | Niri |
| Cycle Window Primary Span | Unassigned | Niri |
| Cycle Window Secondary Span | Unassigned | Niri |
| Center Column | Unassigned | Niri |
| Center Visible Columns | Unassigned | Niri |

# Dwindle Group Navigation
| Goal | Default Shortcut | Behavior |
|------|------------------|----------|
| Focus another tile | Option + Arrow Keys | Spatial navigation |
| Select next/previous tab | Option + Down/Up Arrow | Sequential within group |
| Join singleton into group | Option + Shift + Arrow Keys | Combines with adjacent tile |
| Extract active tab | Option + Shift + Arrow Keys | Removes from group |
| Move complete group | Control + Option + Shift + Left/Right | Swaps entire structure |

# Quake Terminal Internal Shortcuts
| Action | Shortcut |
|--------|----------|
| New Tab | Cmd + T |
| Close Tab | Cmd + W |
| Next Tab | Cmd + Shift + ] |
| Previous Tab | Cmd + Shift + [ |
| Next Tab (Alt) | Ctrl + Tab |
| Previous Tab (Alt) | Ctrl + Shift + Tab |
| Select Tab 1-9 | Cmd + 1-9 |
| Split Pane (Horizontal) | Cmd + D |
| Split Pane (Vertical) | Cmd + Shift + D |
| Close Pane | Cmd + Shift + W |
| Equalize Splits | Cmd + Shift + = |
| Navigate Pane | Cmd + Option + Arrow Keys |

# Related
See [CLI commands](./cli-commands.md) for the same actions triggerable via `omniwmctl command <name>`.

# Citations
[1] https://omniwm.app/guides/keyboard-shortcuts/
