---
title: "Kalaris Labs documentation: guides for open-source tools"
sidebarTitle: "Home"
description: "Documentation for Kalaris Labs open-source projects: Research Agent Skills for AI-assisted research and writing, and Skill Doctor, a security scanner for AI agent skills."
mode: "wide"
---

Kalaris Labs builds open-source infrastructure for AI agents: the skills they use, and the tools that keep
those skills safe. Pick a project to install it, follow a workflow end to end, or look up a reference.

## Projects

<CardGroup cols={2}>
  <Card title="Research Agent Skills" icon="flask-conical" href="/research-agent-skills" cta="Read the docs">
    Open-source AI agent skills for academic writing, literature reviews, citation checks and scientific
    data analysis. Works with Claude Code, Codex, Cursor, Gemini CLI, Copilot, OpenCode and Windsurf.
  </Card>

  <Card title="Skill Doctor" icon="shield-check" href="/skill-doctor" cta="Read the docs">
    A deterministic, offline-first security scanner for AI agent skills, tools and MCP servers. Catches
    prompt injection, command injection and data exfiltration before your agent loads a skill.
  </Card>
</CardGroup>

## Install in one command

<CodeGroup>
```bash Research Agent Skills
npx skills add KalarisLabs/research-agent-skills
```

```bash Skill Doctor
npx @security.kalarislabs/skill-doctor scan ./my-skill
```
</CodeGroup>

## Start with a goal

<CardGroup cols={3}>
  <Card title="Write a research paper" icon="file-pen" href="/research-agent-skills/guides/write-a-research-paper">
    Draft, revise and format a manuscript for your target journal.
  </Card>

  <Card title="Run a systematic review" icon="search" href="/research-agent-skills/guides/systematic-review">
    Search literature, screen studies and verify every citation.
  </Card>

  <Card title="Find skills for your field" icon="microscope" href="/research-agent-skills/guides/by-field">
    Databases and analysis packages for biology, chemistry, medicine, physics and ML.
  </Card>

  <Card title="Scan a skill before you install it" icon="shield-alert" href="/skill-doctor/getting-started/quickstart">
    Check any skill for hidden instructions and risky scripts in under a minute.
  </Card>

  <Card title="Let your agent audit skills" icon="plug" href="/skill-doctor/guides/mcp-server">
    Add Skill Doctor as an MCP server in Claude Code, Cursor or Windsurf.
  </Card>

  <Card title="Block risky skills in CI" icon="git-pull-request" href="/skill-doctor/guides/ci">
    Fail pull requests on high-severity findings and upload SARIF reports.
  </Card>
</CardGroup>

## Built in the open

<CardGroup cols={3}>
  <Card title="Open source" icon="github" href="https://github.com/KalarisLabs">
    Every project is on GitHub under MIT or Apache-2.0.
  </Card>

  <Card title="Verifiable releases" icon="shield-check" href="/skill-doctor/reference/verify-releases">
    Releases are checksummed, signed and attested.
  </Card>

  <Card title="Measured" icon="chart-bar" href="/research-agent-skills/reference/benchmarks">
    Skills are scored and benchmarked, with published results.
  </Card>
</CardGroup>

<Note>
  More Kalaris Labs projects will appear here as their documentation is published. Follow progress on
  [GitHub](https://github.com/KalarisLabs).
</Note>
