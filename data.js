/*
 * VERIFICATION REPORT
 * ---------------------------------------------------------------
 * Source of truth (verbatim, no invented commands/shortcuts):
 *   - okf/omniwm-source/keyboard-shortcuts.md (all 8 tables)
 *   - okf/omniwm-source/cli-commands.md (`command <name>` list)
 * Context only (not used to fabricate cli/shortcut strings):
 *   - okf/omniwm-source/cli-actions.md, okf/omniwm-source/scratchpads.md
 *
 * Total rows: 87 (every row of every table in keyboard-shortcuts.md,
 *   including "Unassigned" rows, one row per table row)
 *   - Workspace Management: 10
 *   - Focus Navigation: 17
 *   - Window Movement: 4
 *   - Monitor Control: 5
 *   - Layout Operations: 19
 *   - Container and Column Management: 15
 *   - Dwindle Group Navigation: 5
 *   - Quake Terminal Internal Shortcuts: 12
 * Rows with a non-null `cli` mapping: 67
 * Rows with `shortcut === null` (source cell reads "Unassigned"): 37
 *   (Quake Terminal Internal Shortcuts table has no "Layout" column and
 *   no Unassigned rows; Dwindle Group Navigation table likewise has no
 *   Unassigned rows)
 *
 * Verification method: every `action` and `shortcut` string was
 * transcribed cell-by-cell from the markdown tables in
 * keyboard-shortcuts.md in table order (top to bottom, left to right).
 * Every `cli` string was copied verbatim from a `- \`command ...\``
 * bullet in cli-commands.md; where no bullet clearly matched the
 * action, `cli` was left null rather than guessed (20 rows: Focus
 * Window or Workspace Down/Up, Traverse Backward/Forward, Move
 * Container Left/Right, Move Container Up/Down, the 4 Dwindle Group
 * Navigation rows other than "Focus another tile", and all 12 Quake
 * Terminal rows, which are internal terminal shortcuts with no
 * omniwmctl equivalent).
 * All 87 rows were checked by an automated whitespace-normalized
 * substring assertion: every non-null `action`/`shortcut` string is a
 * substring of keyboard-shortcuts.md and every non-null `cli` string
 * is a substring of cli-commands.md. Result: all verbatim, zero
 * mismatches.
 *
 * NOTE — two fields are inferred, not literal source text: (1) the
 * Quake Terminal Internal Shortcuts table has no "Layout" column in
 * source; all 12 rows here are set to "Shared" by inference (they are
 * app-internal, not window-manager-layout-specific, but the schema
 * requires a value). (2) the Dwindle Group Navigation table also has
 * no "Layout" column; its 5 rows are set to "Dwindle" by inference
 * from the section heading.
 * ---------------------------------------------------------------
 */

const OMNIWM_ACTIONS = [
  // Workspace Management
  { id: "switch-to-workspace-1-9", action: "Switch to Workspace 1-9", shortcut: "Option + 1-9", layout: "Shared", category: "Workspace Management", cli: "command switch-workspace <number|next|prev|back-and-forth>", note: null },
  { id: "move-window-to-workspace-1-9", action: "Move Window to Workspace 1-9", shortcut: "Option + Shift + 1-9", layout: "Shared", category: "Workspace Management", cli: "command move-to-workspace <number|up|down>", note: null },
  { id: "switch-to-last-active-workspace", action: "Switch to Last Active Workspace", shortcut: "Control + Option + Tab", layout: "Shared", category: "Workspace Management", cli: "command switch-workspace <number|next|prev|back-and-forth>", note: "Maps to the back-and-forth argument." },
  { id: "switch-to-next-workspace", action: "Switch to Next Workspace", shortcut: null, layout: "Shared", category: "Workspace Management", cli: "command switch-workspace <number|next|prev|back-and-forth>", note: "Maps to the next argument." },
  { id: "switch-to-previous-workspace", action: "Switch to Previous Workspace", shortcut: null, layout: "Shared", category: "Workspace Management", cli: "command switch-workspace <number|next|prev|back-and-forth>", note: "Maps to the prev argument." },
  { id: "move-window-to-workspace-up", action: "Move Window to Workspace Up", shortcut: "Control + Option + Shift + Up", layout: "Shared", category: "Workspace Management", cli: "command move-to-workspace <number|up|down>", note: "Maps to the up argument." },
  { id: "move-window-to-workspace-down", action: "Move Window to Workspace Down", shortcut: "Control + Option + Shift + Down", layout: "Shared", category: "Workspace Management", cli: "command move-to-workspace <number|up|down>", note: "Maps to the down argument." },
  { id: "move-column-to-workspace-1-9", action: "Move Column to Workspace 1-9", shortcut: null, layout: "Niri", category: "Workspace Management", cli: "command move-column-to-workspace <number|up|down>", note: null },
  { id: "move-column-to-workspace-up", action: "Move Column to Workspace Up", shortcut: "Control + Option + Shift + Page Up", layout: "Niri", category: "Workspace Management", cli: "command move-column-to-workspace <number|up|down>", note: "Maps to the up argument." },
  { id: "move-column-to-workspace-down", action: "Move Column to Workspace Down", shortcut: "Control + Option + Shift + Page Down", layout: "Niri", category: "Workspace Management", cli: "command move-column-to-workspace <number|up|down>", note: "Maps to the down argument." },

  // Focus Navigation
  { id: "focus-left-right-up-down", action: "Focus Left/Right/Up/Down", shortcut: "Option + Arrow Keys", layout: "Shared", category: "Focus Navigation", cli: "command focus <left|right|up|down>", note: null },
  { id: "focus-down-or-top-up-or-bottom", action: "Focus Down or Top/Up or Bottom", shortcut: null, layout: "Shared", category: "Focus Navigation", cli: "command focus-window down-or-top|up-or-bottom", note: null },
  { id: "focus-top-bottom-window", action: "Focus Top/Bottom Window", shortcut: null, layout: "Niri", category: "Focus Navigation", cli: "command focus-window top|bottom", note: null },
  { id: "focus-window-or-workspace-down-up", action: "Focus Window or Workspace Down/Up", shortcut: null, layout: "Niri", category: "Focus Navigation", cli: null, note: "No clearly distinct CLI command found; not the same as focus-window down-or-top|up-or-bottom." },
  { id: "focus-previous-window", action: "Focus Previous Window", shortcut: "Option + Tab", layout: "Shared", category: "Focus Navigation", cli: "command focus previous", note: null },
  { id: "traverse-backward-forward", action: "Traverse Backward/Forward", shortcut: null, layout: "Niri", category: "Focus Navigation", cli: null, note: "No matching CLI command in cli-commands.md." },
  { id: "focus-first-column", action: "Focus First Column", shortcut: "Option + Home", layout: "Niri", category: "Focus Navigation", cli: "command focus-column <number|first|last>", note: "Maps to the first argument." },
  { id: "focus-last-column", action: "Focus Last Column", shortcut: "Option + End", layout: "Niri", category: "Focus Navigation", cli: "command focus-column <number|first|last>", note: "Maps to the last argument." },
  { id: "focus-column-1-9", action: "Focus Column 1-9", shortcut: "Control + Option + 1-9", layout: "Niri", category: "Focus Navigation", cli: "command focus-column <number|first|last>", note: null },
  { id: "focus-window-1-9-in-column", action: "Focus Window 1-9 in Column", shortcut: null, layout: "Niri", category: "Focus Navigation", cli: "command focus-window-in-column <number>", note: null },
  { id: "toggle-command-palette", action: "Toggle Command Palette", shortcut: "Control + Option + Space", layout: "Shared", category: "Focus Navigation", cli: "command open-command-palette", note: null },
  { id: "open-menu-anywhere", action: "Open Menu Anywhere", shortcut: "Control + Option + M", layout: "Shared", category: "Focus Navigation", cli: "command open-menu-anywhere", note: null },
  { id: "toggle-workspace-bar", action: "Toggle Workspace Bar", shortcut: null, layout: "Shared", category: "Focus Navigation", cli: "command toggle-workspace-bar", note: null },
  { id: "toggle-hidden-icons-bar", action: "Toggle Hidden Icons Bar", shortcut: null, layout: "Shared", category: "Focus Navigation", cli: "command hidden-bar panel", note: "CLI command name differs from the shortcut label (hidden-bar panel)." },
  { id: "toggle-quake-terminal", action: "Toggle Quake Terminal", shortcut: "Option + `", layout: "Shared", category: "Focus Navigation", cli: "command toggle-quake-terminal", note: null },
  { id: "toggle-overview", action: "Toggle Overview", shortcut: "Option + Shift + O", layout: "Shared", category: "Focus Navigation", cli: "command toggle-overview", note: null },
  { id: "toggle-system-stats", action: "Toggle System Stats", shortcut: null, layout: "Shared", category: "Focus Navigation", cli: "command toggle-system-stats", note: null },

  // Window Movement
  { id: "move-left-right-up-down", action: "Move Left/Right/Up/Down", shortcut: "Option + Shift + Arrow Keys", layout: "Shared", category: "Window Movement", cli: "command move <left|right|up|down>", note: null },
  { id: "reorder-window-up-down", action: "Reorder Window Up/Down", shortcut: null, layout: "Shared", category: "Window Movement", cli: "command move-window-up|down", note: null },
  { id: "move-window-down-to-workspace-down", action: "Move Window Down/to Workspace Down", shortcut: null, layout: "Niri", category: "Window Movement", cli: "command move-window-down-or-to-workspace-down", note: null },
  { id: "consume-expel-window", action: "Consume/Expel Window", shortcut: null, layout: "Niri", category: "Window Movement", cli: "command consume-or-expel-window-left|right", note: "cli-commands.md also lists command consume-window-into-column and command expel-window-from-column as related actions." },

  // Monitor Control
  { id: "focus-next-monitor", action: "Focus Next Monitor", shortcut: "Control + Command + Tab", layout: "Shared", category: "Monitor Control", cli: "command focus-monitor prev|next|last", note: "Maps to the next argument." },
  { id: "focus-previous-monitor", action: "Focus Previous Monitor", shortcut: null, layout: "Shared", category: "Monitor Control", cli: "command focus-monitor prev|next|last", note: "Maps to the prev argument." },
  { id: "focus-last-monitor", action: "Focus Last Monitor", shortcut: "Control + Command + `", layout: "Shared", category: "Monitor Control", cli: "command focus-monitor prev|next|last", note: "Maps to the last argument." },
  { id: "move-workspace-to-monitor", action: "Move Workspace to Monitor", shortcut: null, layout: "Shared", category: "Monitor Control", cli: "command swap-workspace-with-monitor <direction>", note: "Closest match in cli-commands.md; swaps the workspace with the monitor's current workspace rather than a plain move." },
  { id: "move-window-to-monitor", action: "Move Window to Monitor", shortcut: null, layout: "Shared", category: "Monitor Control", cli: "command move-to-monitor <direction>", note: null },

  // Layout Operations
  { id: "toggle-fullscreen", action: "Toggle Fullscreen", shortcut: "Option + Return", layout: "Shared", category: "Layout Operations", cli: "command toggle-fullscreen", note: null },
  { id: "toggle-native-fullscreen", action: "Toggle Native Fullscreen", shortcut: null, layout: "Shared", category: "Layout Operations", cli: "command toggle-native-fullscreen", note: null },
  { id: "balance-sizes", action: "Balance Sizes", shortcut: "Option + Shift + B", layout: "Shared", category: "Layout Operations", cli: "command balance-sizes", note: null },
  { id: "cycle-size-forward", action: "Cycle Size Forward", shortcut: "Option + .", layout: "Shared", category: "Layout Operations", cli: "command cycle-size forward|backward", note: "Maps to the forward argument." },
  { id: "cycle-size-backward", action: "Cycle Size Backward", shortcut: "Option + ,", layout: "Shared", category: "Layout Operations", cli: "command cycle-size forward|backward", note: "Maps to the backward argument." },
  { id: "move-to-root", action: "Move to Root", shortcut: null, layout: "Dwindle", category: "Layout Operations", cli: "command move-to-root", note: null },
  { id: "toggle-split", action: "Toggle Split", shortcut: null, layout: "Dwindle", category: "Layout Operations", cli: "command toggle-split", note: null },
  { id: "swap-split", action: "Swap Split", shortcut: null, layout: "Dwindle", category: "Layout Operations", cli: "command swap-split", note: null },
  { id: "grow-horizontally-vertically", action: "Grow Horizontally/Vertically", shortcut: null, layout: "Dwindle", category: "Layout Operations", cli: "command resize <horizontal|vertical> <grow|shrink>", note: "Maps to the grow argument." },
  { id: "shrink-horizontally-vertically", action: "Shrink Horizontally/Vertically", shortcut: null, layout: "Dwindle", category: "Layout Operations", cli: "command resize <horizontal|vertical> <grow|shrink>", note: "Maps to the shrink argument." },
  { id: "grow-shrink-focused-window", action: "Grow/Shrink Focused Window", shortcut: null, layout: "Dwindle", category: "Layout Operations", cli: "command resize-focused <grow|shrink>", note: null },
  { id: "preselect-left-right-up-down", action: "Preselect Left/Right/Up/Down", shortcut: null, layout: "Dwindle", category: "Layout Operations", cli: "command preselect <left|right|up|down>", note: null },
  { id: "clear-preselection", action: "Clear Preselection", shortcut: null, layout: "Dwindle", category: "Layout Operations", cli: "command preselect clear", note: null },
  { id: "raise-all-floating-windows", action: "Raise All Floating Windows", shortcut: "Option + Shift + R", layout: "Shared", category: "Layout Operations", cli: "command raise-all-floating-windows", note: null },
  { id: "rescue-off-screen-windows", action: "Rescue Off-Screen Windows", shortcut: null, layout: "Shared", category: "Layout Operations", cli: "command rescue-offscreen-windows", note: null },
  { id: "toggle-floating-window", action: "Toggle Floating Window", shortcut: null, layout: "Shared", category: "Layout Operations", cli: "command toggle-focused-window-floating", note: null },
  { id: "assign-to-scratchpad-1-10", action: "Assign to Scratchpad 1-10", shortcut: null, layout: "Shared", category: "Layout Operations", cli: "command scratchpad assign <number>", note: null },
  { id: "toggle-scratchpad-1-10", action: "Toggle Scratchpad 1-10", shortcut: null, layout: "Shared", category: "Layout Operations", cli: "command scratchpad toggle <number>", note: null },
  { id: "toggle-workspace-layout", action: "Toggle Workspace Layout", shortcut: "Option + Shift + L", layout: "Shared", category: "Layout Operations", cli: "command toggle-workspace-layout", note: null },

  // Container and Column Management
  { id: "move-container-left-right", action: "Move Container Left/Right", shortcut: "Control + Option + Shift + Left/Right", layout: "Shared", category: "Container and Column Management", cli: null, note: "No 'move container' CLI command in cli-commands.md; only command move-column <direction> exists, listed as Niri-only." },
  { id: "move-container-up-down", action: "Move Container Up/Down", shortcut: null, layout: "Dwindle", category: "Container and Column Management", cli: null, note: "No matching CLI command found in the Dwindle section of cli-commands.md." },
  { id: "toggle-column-tabbed", action: "Toggle Column Tabbed", shortcut: "Option + T", layout: "Niri", category: "Container and Column Management", cli: "command toggle-column-tabbed", note: null },
  { id: "toggle-container-full-span", action: "Toggle Container Full Span", shortcut: "Option + Shift + F", layout: "Niri", category: "Container and Column Management", cli: "command toggle-container-full-primary-span", note: "CLI command name is toggle-container-full-primary-span." },
  { id: "expand-container-span", action: "Expand Container Span", shortcut: "Control + Option + F", layout: "Niri", category: "Container and Column Management", cli: "command expand-container-to-available-primary-span", note: null },
  { id: "move-column-to-first-last", action: "Move Column to First/Last", shortcut: "Control + Option + Home/End", layout: "Niri", category: "Container and Column Management", cli: "command move-column-to-first|last|index <number>", note: null },
  { id: "move-column-to-index-1-9", action: "Move Column to Index 1-9", shortcut: null, layout: "Niri", category: "Container and Column Management", cli: "command move-column-to-first|last|index <number>", note: "Maps to the index argument." },
  { id: "set-container-span", action: "Set Container Span -10%/+10%", shortcut: "Option + -/=", layout: "Niri", category: "Container and Column Management", cli: "command set-container-primary-span <size-change>", note: null },
  { id: "set-window-secondary-span", action: "Set Window Secondary Span -10%/+10%", shortcut: "Option + Shift + -/=", layout: "Niri", category: "Container and Column Management", cli: "command set-window-secondary-span <size-change>", note: null },
  { id: "set-window-primary-span", action: "Set Window Primary Span -10%/+10%", shortcut: null, layout: "Niri", category: "Container and Column Management", cli: "command set-window-primary-span <size-change>", note: null },
  { id: "reset-window-secondary-span", action: "Reset Window Secondary Span", shortcut: "Control + Option + R", layout: "Niri", category: "Container and Column Management", cli: "command reset-window-secondary-span", note: null },
  { id: "cycle-window-primary-span", action: "Cycle Window Primary Span", shortcut: null, layout: "Niri", category: "Container and Column Management", cli: "command cycle-window-primary-span forward|backward", note: null },
  { id: "cycle-window-secondary-span", action: "Cycle Window Secondary Span", shortcut: null, layout: "Niri", category: "Container and Column Management", cli: "command cycle-window-secondary-span forward|backward", note: null },
  { id: "center-column", action: "Center Column", shortcut: null, layout: "Niri", category: "Container and Column Management", cli: "command center-column", note: null },
  { id: "center-visible-columns", action: "Center Visible Columns", shortcut: null, layout: "Niri", category: "Container and Column Management", cli: "command center-visible-columns", note: null },

  // Dwindle Group Navigation (source table columns are Goal/Default Shortcut/Behavior)
  { id: "focus-another-tile", action: "Focus another tile", shortcut: "Option + Arrow Keys", layout: "Dwindle", category: "Dwindle Group Navigation", cli: "command focus <left|right|up|down>", note: "Behavior (source): Spatial navigation. Same shortcut/command as Focus Left/Right/Up/Down; group-aware behavior within a dwindle group." },
  { id: "select-next-previous-tab", action: "Select next/previous tab", shortcut: "Option + Down/Up Arrow", layout: "Dwindle", category: "Dwindle Group Navigation", cli: null, note: "Behavior (source): Sequential within group. No distinct CLI command found." },
  { id: "join-singleton-into-group", action: "Join singleton into group", shortcut: "Option + Shift + Arrow Keys", layout: "Dwindle", category: "Dwindle Group Navigation", cli: null, note: "Behavior (source): Combines with adjacent tile. Shares its shortcut with the generic Move command but no distinct CLI action was found." },
  { id: "extract-active-tab", action: "Extract active tab", shortcut: "Option + Shift + Arrow Keys", layout: "Dwindle", category: "Dwindle Group Navigation", cli: null, note: "Behavior (source): Removes from group. Shares its shortcut with the generic Move command but no distinct CLI action was found." },
  { id: "move-complete-group", action: "Move complete group", shortcut: "Control + Option + Shift + Left/Right", layout: "Dwindle", category: "Dwindle Group Navigation", cli: null, note: "Behavior (source): Swaps entire structure. Shares its shortcut with Move Container Left/Right; no distinct CLI action was found." },

  // Quake Terminal Internal Shortcuts (source table has no Layout column; these are internal to the Quake terminal, not window-manager layout actions)
  { id: "quake-new-tab", action: "New Tab", shortcut: "Cmd + T", layout: "Shared", category: "Quake Terminal Internal Shortcuts", cli: null, note: "Internal Quake Terminal shortcut; no omniwmctl equivalent." },
  { id: "quake-close-tab", action: "Close Tab", shortcut: "Cmd + W", layout: "Shared", category: "Quake Terminal Internal Shortcuts", cli: null, note: "Internal Quake Terminal shortcut; no omniwmctl equivalent." },
  { id: "quake-next-tab", action: "Next Tab", shortcut: "Cmd + Shift + ]", layout: "Shared", category: "Quake Terminal Internal Shortcuts", cli: null, note: "Internal Quake Terminal shortcut; no omniwmctl equivalent." },
  { id: "quake-previous-tab", action: "Previous Tab", shortcut: "Cmd + Shift + [", layout: "Shared", category: "Quake Terminal Internal Shortcuts", cli: null, note: "Internal Quake Terminal shortcut; no omniwmctl equivalent." },
  { id: "quake-next-tab-alt", action: "Next Tab (Alt)", shortcut: "Ctrl + Tab", layout: "Shared", category: "Quake Terminal Internal Shortcuts", cli: null, note: "Internal Quake Terminal shortcut; no omniwmctl equivalent." },
  { id: "quake-previous-tab-alt", action: "Previous Tab (Alt)", shortcut: "Ctrl + Shift + Tab", layout: "Shared", category: "Quake Terminal Internal Shortcuts", cli: null, note: "Internal Quake Terminal shortcut; no omniwmctl equivalent." },
  { id: "quake-select-tab-1-9", action: "Select Tab 1-9", shortcut: "Cmd + 1-9", layout: "Shared", category: "Quake Terminal Internal Shortcuts", cli: null, note: "Internal Quake Terminal shortcut; no omniwmctl equivalent." },
  { id: "quake-split-pane-horizontal", action: "Split Pane (Horizontal)", shortcut: "Cmd + D", layout: "Shared", category: "Quake Terminal Internal Shortcuts", cli: null, note: "Internal Quake Terminal shortcut; no omniwmctl equivalent." },
  { id: "quake-split-pane-vertical", action: "Split Pane (Vertical)", shortcut: "Cmd + Shift + D", layout: "Shared", category: "Quake Terminal Internal Shortcuts", cli: null, note: "Internal Quake Terminal shortcut; no omniwmctl equivalent." },
  { id: "quake-close-pane", action: "Close Pane", shortcut: "Cmd + Shift + W", layout: "Shared", category: "Quake Terminal Internal Shortcuts", cli: null, note: "Internal Quake Terminal shortcut; no omniwmctl equivalent." },
  { id: "quake-equalize-splits", action: "Equalize Splits", shortcut: "Cmd + Shift + =", layout: "Shared", category: "Quake Terminal Internal Shortcuts", cli: null, note: "Internal Quake Terminal shortcut; no omniwmctl equivalent." },
  { id: "quake-navigate-pane", action: "Navigate Pane", shortcut: "Cmd + Option + Arrow Keys", layout: "Shared", category: "Quake Terminal Internal Shortcuts", cli: null, note: "Internal Quake Terminal shortcut; no omniwmctl equivalent." },
];
