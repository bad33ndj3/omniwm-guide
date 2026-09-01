# Per-piece rubrics — OmniWM guide vs Raycast manual

Stop condition per piece: critic scores both pages on every named criterion below (0-2: 0=worse, 1=parity, 2=better). Ours must score >=1 on every criterion and >=2 on at least half. If not, critic names the single biggest gap, builder fixes it, re-run. No "blind pick" theater (unachievable per advisor) — this rubric is the checkable substitute.

## Piece 1: Data layer + search/filter behavior
- Every shortcut/action string traces verbatim to keyboard-shortcuts.md or cli-commands.md (0/1/2 = any invented vs all verified)
- Live in-page filter exists (Raycast's own shortcut page has none — baseline to beat)
- Filter ranks results (exact action name > substring action > substring shortcut/CLI > substring category), not just naive substring anywhere
- Filtering is fast/responsive typing into a box, no page reload
- Layout scope (Shared/Niri/Dwindle) is filterable, not just displayed as text

## Piece 2: Quick-reference task list
- Every "how do I X" task a user would search for (move to workspace, resize, move to monitor, snap/tile, float, scratchpad, etc.) is answerable in <2 actions from landing on the page
- Unassigned shortcuts show the omniwmctl CLI equivalent + "bind in Settings > Hotkeys" instead of a blank
- Niri vs Dwindle variants for the same intent are both visible/reachable, not silently dropped
- Density comparable to or denser than Raycast's shortcut list, without feeling cramped

## Piece 3: Learning/onboarding flow
- A reader unfamiliar with tiling WMs can understand Niri vs Dwindle, workspaces vs monitors, scratchpads, in under 2 minutes of reading
- Example-led, short paragraphs (match Raycast's tone: concrete example before abstract explanation)
- Clear "start here" path, not just a wall of reference tables

## Piece 4: Visual design
- Typography scale, spacing, dark/light parity at least matches Raycast's polish
- Shortcuts rendered as real styled kbd/chip elements (beats Raycast's plain inline monospace)
- Single coherent visual system, no mixed styles between sections

## Piece 5: Mobile/narrow-width behavior
- No horizontal scroll of the page body at any width down to ~360px
- Filter/search remains usable and reachable without scrolling past it
- Tables/rows reflow or scroll in their own container, stay legible
