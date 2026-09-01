# OmniWM Source Bundle

Raw ground-truth material pulled from the OmniWM GitHub repo and omniwm.app docs site, for building the single-page OmniWM guide artifact. Every claim in the guide must trace back to one of these concepts. Never invent commands/keybindings not listed here.

Captured against OmniWM v0.6.4 · checked 2026-09-01

## Core
* [Overview](./overview.md) - what OmniWM is, requirements, feature list
* [Configuration](./configuration.md) - settings.toml location, TOML rules, top-level sections

## Reference (verbatim tables)
* [Keyboard Shortcuts](./keyboard-shortcuts.md) - every default keybinding by category
* [CLI Overview](./cli-overview.md) - omniwmctl architecture, install, protocol
* [CLI Commands](./cli-commands.md) - every `omniwmctl command <name>`
* [CLI Queries](./cli-queries.md) - every `omniwmctl query <name>`
* [CLI Actions](./cli-actions.md) - `omniwmctl window` / `omniwmctl workspace` actions

## Concepts / Features
* [Layouts (Niri vs Dwindle)](./layouts.md)
* [Multi-Monitor Behavior](./multi-monitor.md)
* [Scratchpads](./scratchpads.md)
* [App Rules](./app-rules.md)
* [Command Palette & Menu Anywhere](./command-palette.md)
* [Quake Terminal](./quake-terminal.md)
* [Workspace Bar & System Stats](./workspace-bar.md)
* [Hidden Bar](./hidden-bar.md)
* [Overview Mode](./overview-mode.md)

## Benchmark
* [Raycast Manual Benchmark](./raycast-benchmark.md) - structural/visual facts about raycast.com/manual, the comparison bar

## Known gaps
Full per-key settings-reference schema (`/config/settings-reference/`) was not captured verbatim — only section-level summary in [configuration.md](./configuration.md). Re-fetch if a builder needs exact TOML defaults.
