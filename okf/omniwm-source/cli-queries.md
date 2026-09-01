---
type: Reference
title: CLI Query Reference (omniwmctl query)
description: Every omniwmctl query, selector, field, verbatim from omniwm.app.
tags: [omniwm, cli, queries]
timestamp: 2026-09-01T00:00:00Z
resource: https://omniwm.app/reference/cli/queries/
---

# Syntax
`omniwmctl query <name> [selectors...] [--fields <field1,field2,...>] [--format json|table|tsv|text]`
Default output format: JSON.

# Selectors
Value: `--window <id>`, `--workspace <name>`, `--display <name>`, `--app <name>`, `--bundle-id <id>`
Boolean: `--focused`, `--visible`, `--floating`, `--scratchpad`, `--current`, `--main`

# Fields
Window: id, pid, workspace, display, app, title, frame, mode, layout-reason, manual-override, is-focused, is-visible, is-app-hidden, is-scratchpad, scratchpad-index, hidden-reason
Workspace: id, raw-name, display-name, number, layout, display, is-focused, is-visible, is-current, window-counts, focused-window-id
Display: id, name, is-main, is-current, frame, visible-frame, has-notch, orientation, inner-gap, outer-gap-left, outer-gap-right, outer-gap-top, outer-gap-bottom, fullscreen-uses-outer-gaps, active-workspace

# Available queries
| Query | Selectors | Description |
|-------|-----------|-------------|
| workspace-bar | none | Workspace bar projection for every monitor |
| active-workspace | none | Current interaction monitor + active workspace |
| focused-monitor | none | Current interaction monitor + its active workspace |
| apps | none | Managed app summary |
| focused-window | none | Focused managed window snapshot |
| windows | window, workspace, display, focused, visible, floating, scratchpad, app, bundle-id | Managed windows |
| workspaces | workspace, display, current, visible, focused | Configured workspaces w/ occupancy |
| displays | display, main, current | Connected displays w/ geometry |
| rules | none | Persisted user window rules |
| rule-actions | none | Rule action registry |
| queries | none | Query registry |
| commands | none | Automation action registry |
| subscriptions | none | Subscription registry |
| capabilities | none | Full protocol capabilities |

# Examples
```bash
omniwmctl query windows --workspace 1
omniwmctl query focused-window --format table
omniwmctl query windows --visible --floating --fields id,title
omniwmctl query workspaces --current
omniwmctl query capabilities
```

# Related
[CLI commands](./cli-commands.md), [CLI overview](./cli-overview.md)

# Citations
[1] https://omniwm.app/reference/cli/queries/
