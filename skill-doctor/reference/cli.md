---
title: "Skill Doctor CLI reference: commands, flags and exit codes"
sidebarTitle: "CLI reference"
description: "Every Skill Doctor command (scan, scan-all, diff, gate, watch, mcp), its output, gating and opt-in analysis flags, and exit codes."
---

## Commands

| Command | What it does |
|---|---|
| `skill-doctor scan <path>` | Scan one skill |
| `skill-doctor scan-all <dir>` | Scan every skill under a directory. Use `--exclude "<glob>"` to skip paths. |
| `skill-doctor diff <path> --baseline <report.json>` | Compare a scan against a saved JSON report |
| `skill-doctor gate <path>` | Check a skill against `--fail-on` and `--fail-under-coverage` |
| `skill-doctor watch <path>` | Re-scan each time a file changes |
| `skill-doctor mcp` | Start the MCP server. Requires a build with `--features mcp`. |

```bash
skill-doctor scan-all . --exclude "node_modules/*" --exclude "target/*"
skill-doctor gate ./my-skill --fail-on HIGH --fail-under-coverage 0.8
```

## Output and reporting

<ResponseField name="--output" type="text | json | sarif" default="text">
  Report format. Use `sarif` for code-scanning tools and `json` for baselines.
</ResponseField>

<ResponseField name="--deterministic" type="flag">
  Byte-identical output across identical runs: sorted keys, stable ordering and pinned timestamps.
</ResponseField>

<ResponseField name="--color" type="auto | always | never" default="auto">
  Control colored output.
</ResponseField>

<ResponseField name="--quiet" type="flag">
  Hide banners and spinners.
</ResponseField>

## Gating

<ResponseField name="--fail-on" type="LOW | MEDIUM | HIGH | CRITICAL" default="HIGH">
  Lowest finding severity that returns exit code `2`.
</ResponseField>

<ResponseField name="--fail-under-coverage" type="0.0 to 1.0">
  Lowest structural coverage ratio that passes. Below it, the run returns exit code `3`.
</ResponseField>

## Opt-in analysis

<ResponseField name="--sandbox" type="flag">
  Run the L3 behavioral harness in a temporary, isolated environment.
</ResponseField>

<ResponseField name="--intel" type="flag">
  Enable L2 semantic analysis and L4 threat-intelligence digest lookups. This makes network calls.
</ResponseField>

<ResponseField name="--tui" type="flag">
  Open the interactive full-screen terminal dashboard.
</ResponseField>

<ResponseField name="--offline" type="flag" default="on">
  On by default: no required network calls and no telemetry.
</ResponseField>

## Exit codes

| Code | Meaning |
|---|---|
| `0` | Clean: no findings at or above the threshold |
| `1` | Usage or internal engine error |
| `2` | Findings at or above `--fail-on` |
| `3` | Structural coverage below `--fail-under-coverage` |
