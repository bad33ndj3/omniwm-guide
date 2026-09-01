---
type: Concept
title: App Rules
description: Per-app window matching and forced layout/workspace/size.
tags: [omniwm, app-rules, config]
timestamp: 2026-09-01T00:00:00Z
resource: https://omniwm.app/features/app-rules/
---

# Matching criteria
- Bundle ID
- App-name substring
- Title substring or regex
- AX role/subrole

More-specific matches win; ties follow list order.

# Structural admission
Help tags, input-method surfaces, and WindowServer children of another window stay unmanaged — cannot be opted in by a rule. Buttonless accessory roots, prohibited-app roots, non-AXWindow roles, unsupported AX subroles need explicit config with both `axRole` and `axSubrole` set to observed data, plus layout (Tile or Float).

# Rule actions
- **Layout** — force Automatic, Tile, or Float
- **Workspace Assignment** — default workspace for matching apps with no tracked windows
- **Initial Container Primary Span (Niri)** — seed resizable windows at 5-100% of container width/height
- **Minimum Size** — enforce floor thresholds on window dimensions

# Configuration
Rules live in the App Rules menu or `settings.toml` as `[[appRules]]`:
```toml
[[appRules]]
bundleId = "net.kovidgoyal.kitty"
initialContainerPrimarySpan = 0.5
```

# Default rules
OmniWM ships 13 default rules — minimum-size rules for apps whose windows misbehave when squeezed too small, covering major browsers, terminals, communication apps.

# Citations
[1] https://omniwm.app/features/app-rules/
