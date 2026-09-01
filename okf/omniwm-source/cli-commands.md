---
type: Reference
title: CLI Command Reference (omniwmctl command / capture)
description: Every omniwmctl top-level command and `command <name>` action, verbatim from omniwm.app.
tags: [omniwm, cli, commands]
timestamp: 2026-09-01T00:00:00Z
resource: https://omniwm.app/reference/cli/commands/
---

# Syntax
`omniwmctl <command> [arguments...] [--format json|table|tsv|text] [--json]`

# Top-level commands
| Command | Type | Purpose |
|---------|------|---------|
| ping | remote | Verify IPC reachability, returns `pong` |
| version | remote | App + protocol versions |
| command | remote | Execute window manager commands via IPC |
| capture | remote | Start/stop diagnostics or performance traces |
| query | remote | Query OmniWM state, registries, protocol capabilities |
| rule | remote | Manage window rules |
| workspace | remote | Perform workspace actions |
| window | remote | Perform window actions using session IDs |
| subscribe | remote | Stream subscribe handshake + live event envelopes as JSON |
| watch | remote | Consume events and execute child commands |
| help / --help / -h | local | Usage text |
| completion <zsh\|bash\|fish> | local | Emit shell completion script |

Global flags: `--format <format>`, `--json` (shorthand for `--format json`).

Exit codes: 0 success, 1 request rejected, 2 cannot connect to IPC socket, 3 CLI argument parsing failed, 4 unexpected internal error.

# command <name> categories

## Focus
- `command focus <left|right|up|down>`
- `command focus-window-in-column <number>` (Niri)
- `command focus-window top|bottom` (Niri)
- `command focus-window down-or-top|up-or-bottom`
- `command focus previous`
- `command focus-column <number|first|last>` (Niri)

## Move
- `command move <left|right|up|down>`
- `command move-window-up|down`
- `command move-window-down-or-to-workspace-down` (Niri)
- `command consume-or-expel-window-left|right` (Niri)
- `command consume-window-into-column` (Niri)
- `command expel-window-from-column` (Niri)

## Workspace navigation
- `command switch-workspace <number|next|prev|back-and-forth>`
- `command switch-workspace anywhere <number>`
- `command move-to-workspace <number|up|down>`
- `command move-to-workspace on-monitor <number> <direction>`

## Monitor management
- `command focus-monitor prev|next|last`
- `command move-to-monitor <direction>`
- `command swap-workspace-with-monitor <direction>`

## Column/container (Niri)
- `command center-column`
- `command center-visible-columns`
- `command move-column <direction>`
- `command move-column-to-first|last|index <number>`
- `command move-column-to-workspace <number|up|down>`
- `command toggle-column-tabbed`
- `command toggle-container-full-primary-span`
- `command expand-container-to-available-primary-span`
- `command cycle-window-primary-span forward|backward`
- `command cycle-window-secondary-span forward|backward`
- `command reset-window-secondary-span`
- `command set-container-primary-span <size-change>`
- `command set-window-primary-span <size-change>`
- `command set-window-secondary-span <size-change>`

Size-change format: fixed pixels (`100`), proportions (`50%`), deltas (`+10` or `-10%`).

## Dwindle
- `command move-to-root`
- `command toggle-split`
- `command swap-split`
- `command resize <horizontal|vertical> <grow|shrink>`
- `command resize-focused <grow|shrink>`
- `command preselect <left|right|up|down>`
- `command preselect clear`

## Layout & sizing (shared)
- `command balance-sizes`
- `command cycle-size forward|backward`
- `command toggle-workspace-layout`
- `command set-workspace-layout <default|niri|dwindle>`
- `command toggle-fullscreen`
- `command toggle-native-fullscreen`

## Window management
- `command toggle-focused-window-floating`
- `command raise-all-floating-windows`
- `command rescue-offscreen-windows`
- `command scratchpad assign <number>`
- `command scratchpad toggle <number>`

## UI controls
- `command open-command-palette`
- `command open-menu-anywhere`
- `command toggle-workspace-bar`
- `command hidden-bar panel`
- `command toggle-quake-terminal`
- `command toggle-overview`
- `command toggle-system-stats`

# Capture commands
```
omniwmctl capture start trace
omniwmctl capture start performance
omniwmctl capture stop
omniwmctl capture status
```
Only one active capture allowed. Returns JSON with `phase`, `profile`, `startedAt`, `lastArtifact`. Both profiles auto-finalize after 10 minutes. Traces write incrementally; performance captures write final artifacts only.

Status example:
```json
{
  "phase": "idle",
  "profile": null,
  "startedAt": null,
  "lastArtifact": {
    "profile": "trace",
    "path": "/Users/example/.local/state/omniwm/diagnostics/omniwm-trace-....log",
    "startedAt": "2026-08-25T21:00:00Z",
    "endedAt": "2026-08-25T21:01:00Z"
  },
  "failureReason": null
}
```

# Related
[Keyboard shortcuts](./keyboard-shortcuts.md) map 1:1 to many of these command names. [CLI queries](./cli-queries.md). [Window/workspace actions](./cli-actions.md).

# Citations
[1] https://omniwm.app/reference/cli/commands/
