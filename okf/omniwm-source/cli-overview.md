---
type: Reference
title: CLI & IPC Overview
description: omniwmctl architecture, install, protocol, security.
tags: [omniwm, cli, ipc]
timestamp: 2026-09-01T00:00:00Z
resource: https://omniwm.app/reference/cli/overview/
---

IPC spans 3 Swift modules: OmniWMCtl (CLI binary), OmniWMIPC (shared lib), OmniWM (app). Communicate over Unix domain sockets, NDJSON format.

`omniwmctl` binary lives at `OmniWM.app/Contents/MacOS/omniwmctl`. Install to PATH via status bar menu ("Install CLI to PATH"). IPC must be explicitly enabled via same menu.

Protocol version 13 required (exact match). NDJSON, 64 KB request limit. Auth: UUID token in `~/Library/Caches/com.barut.OmniWM/ipc.sock.secret`. Socket perms 0600, peer UID verification. Window IDs are session-scoped, expire across restarts.

Shell completion: `omniwmctl completion <zsh|bash|fish>`.

# Related
[CLI commands](./cli-commands.md), [CLI queries](./cli-queries.md), [Window/workspace actions](./cli-actions.md)

# Citations
[1] https://omniwm.app/reference/cli/overview/
