---
title: "Skill Doctor: security scanner for AI agent skills"
sidebarTitle: "Overview"
description: "Skill Doctor is a deterministic, offline-first security analyzer for AI agent skills, tools and MCP servers. Scan skill files for prompt injection, command injection and data exfiltration before your agent loads them."
---

![Skill Doctor security scanner for AI agent skill files](/skill-doctor/assets/banner.webp)

**Skill Doctor audits AI agent skills before your agent loads them.** It reads `SKILL.md` bundles, tool
schemas and companion scripts, and reports prompt injection, hidden command execution, credential
exfiltration and persistent backdoors. It is written in Rust, runs offline by default and does not use a
model to decide what is safe.

```bash
npx @security.kalarislabs/skill-doctor scan ./my-skill
```

<CardGroup cols={2}>
  <Card title="Quickstart" icon="rocket" href="/skill-doctor/getting-started/quickstart">
    Run your first scan in under a minute, with no installation.
  </Card>
  <Card title="Add to your agent" icon="plug" href="/skill-doctor/guides/mcp-server">
    Register Skill Doctor as an MCP server in Claude Code, Cursor or Windsurf.
  </Card>
  <Card title="Gate CI" icon="git-pull-request" href="/skill-doctor/guides/ci">
    Fail pull requests that add risky skills, and upload SARIF reports.
  </Card>
  <Card title="What it detects" icon="shield-alert" href="/skill-doctor/reference/threat-classes">
    The 11 threat classes, from SD-01 to SD-11.
  </Card>
</CardGroup>

## Why skills need a scanner

Agent skills are natural-language instructions that an agent runs with real system access: shell tools,
filesystem APIs and network sockets. They are usually installed from public repositories without code
signing or sandboxing. A skill can carry:

- **Prompt injection** hidden in Markdown headings, HTML comments or Unicode tag characters.
- **Hidden command execution** in companion scripts (`eval`, `exec`, child processes).
- **Credential exfiltration** that reads `.env` files, cloud tokens or SSH keys and sends them out.
- **Persistent backdoors** written into auto-loaded agent directories such as `.claude/` or `~/.bashrc`.

Model-based detectors are slow, cost money per scan, give different answers on the same input, and can be
fooled by the injections they are meant to catch. Skill Doctor's default layer is deterministic: the same
input always produces the same findings.

## How it works

Skill Doctor checks a skill in four layers. Only the first runs by default.

| Layer | What it does | Enable with |
|---|---|---|
| **L1** Static analysis | Lexical parsing, taint tracking from source to sink, Unicode confusable analysis (UTS #39) and compiled YARA-X rules. No network calls, no model. | On by default |
| **L2** Semantic analysis | Model-assisted reading of intent and covert prompts. | `--intel` |
| **L3** Behavioral harness | Runs the skill in a temporary, isolated home directory with execution quotas. | `--sandbox` |
| **L4** Threat intelligence | Looks up file digests against known malicious skill databases. | `--intel` |

<Info>
  **Higher layers can only add findings.** L2 and L3 may report more problems, but they can never
  suppress, dismiss or downgrade a finding from L1.
</Info>

## Who it is for

- Engineers who ship agent skills or plugins and want a check before release.
- Registry and marketplace operators screening submitted skills.
- Security teams adding skill audits to CI/CD.
- Researchers studying agent threats and prompt injection defenses.

## Project links

<CardGroup cols={3}>
  <Card title="GitHub" icon="github" href="https://github.com/KalarisLabs/Skill-Doctor">
    Source, issues and discussions.
  </Card>
  <Card title="npm" icon="package" href="https://www.npmjs.com/package/@security.kalarislabs/skill-doctor">
    `@security.kalarislabs/skill-doctor`
  </Card>
  <Card title="crates.io" icon="box" href="https://crates.io/crates/skill-doctor">
    `skill-doctor`
  </Card>
</CardGroup>

Skill Doctor is Apache-2.0 licensed and maintained by Kalaris Labs. Report vulnerabilities privately through
[GitHub Security Advisories](https://github.com/KalarisLabs/Skill-Doctor/security/advisories).
