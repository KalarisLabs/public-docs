---
title: "Kalaris Labs documentation"
sidebarTitle: "Home"
description: "Documentation for Kalaris Labs open-source projects: Research Agent Skills for AI-assisted research and writing, and Skill Doctor, a security scanner for AI agent skills."
mode: "wide"
---

Kalaris Labs builds open-source infrastructure for AI agents: the skills they use for research, and the
tools that check those skills are safe to run. Every project here works with Claude Code, Codex, Cursor,
Gemini CLI, GitHub Copilot, OpenCode and Windsurf.

## Set up with your agent

Paste this prompt into your coding agent. It installs the right project for your repository and checks
the result.

<CodeGroup>
```markdown setup-prompt.md
You are setting up Kalaris Labs tools in this project. Docs: https://docs.kalarislabs.com
Full page index for agents: https://docs.kalarislabs.com/llms.txt

Step 1: Read this repository and tell me what it contains (papers, data analysis, agent skills, other).
Step 2: Recommend one or both of these, with one line on why for this repo:
  - Research Agent Skills: skills for academic writing, literature review, citation checks and
    scientific data analysis. Install: npx skills add KalarisLabs/research-agent-skills
  - Skill Doctor: an offline security scanner for agent skills and MCP servers.
    Scan: npx @security.kalarislabs/skill-doctor scan-all .
Step 3: Wait for my approval before installing anything or changing files.
Step 4: After installing, run one small task that proves it works and show me the output.
```

```bash Research Agent Skills
npx skills add KalarisLabs/research-agent-skills
```

```bash Skill Doctor
npx @security.kalarislabs/skill-doctor scan-all .
```
</CodeGroup>

## Choose a project

<Columns cols={2}>
  <Card title="Research Agent Skills" img="/research-agent-skills/assets/banner.webp" href="/research-agent-skills" cta="Read the docs">
    280+ open-source agent skills for manuscripts, theses, systematic reviews, citation checks and
    scientific data analysis across ML, biology, chemistry, medicine and physics.
  </Card>

  <Card title="Skill Doctor" img="/skill-doctor/assets/banner.webp" href="/skill-doctor" cta="Read the docs">
    A deterministic, offline-first security scanner for agent skills, tools and MCP servers. Catches
    prompt injection, command injection and data exfiltration before a skill loads.
  </Card>
</Columns>

## Find the right page

| What I want to do | Best option |
|---|---|
| Write or revise a paper with an AI agent | [Write a research paper](/research-agent-skills/guides/write-a-research-paper) |
| Write a thesis or dissertation | [Thesis and dissertation guide](/research-agent-skills/guides/thesis-and-dissertation) |
| Run a systematic review and verify citations | [Systematic review guide](/research-agent-skills/guides/systematic-review) |
| Find databases and packages for my field | [Skills by field](/research-agent-skills/guides/by-field) |
| Install only the research skills I need | [Installation](/research-agent-skills/getting-started/installation) |
| Check a skill before I install it | [Skill Doctor quickstart](/skill-doctor/getting-started/quickstart) |
| Have my agent audit skills on its own | [Skill Doctor as an MCP server](/skill-doctor/guides/mcp-server) |
| Block risky skills in pull requests | [Skill Doctor in CI](/skill-doctor/guides/ci) |
| Give my agent these docs as context | [Use these docs with AI](/ai-tools) |

## Explore

<Columns cols={3}>
  <Card title="Research workflows" icon="file-pen" href="/research-agent-skills/guides/write-a-research-paper">
    Papers, theses, systematic reviews and writing without AI slop.
  </Card>

  <Card title="Skill catalog" icon="layout-grid" href="/research-agent-skills/skills">
    Every research skill, grouped by category.
  </Card>

  <Card title="Benchmarks" icon="chart-bar" href="/research-agent-skills/reference/benchmarks">
    How research skills are scored and evaluated.
  </Card>

  <Card title="Threat classes" icon="shield-alert" href="/skill-doctor/reference/threat-classes">
    The 11 risks Skill Doctor detects, SD-01 to SD-11.
  </Card>

  <Card title="CLI reference" icon="terminal" href="/skill-doctor/reference/cli">
    Skill Doctor commands, flags and exit codes.
  </Card>

  <Card title="Verify releases" icon="badge-check" href="/skill-doctor/reference/verify-releases">
    Check signatures and checksums before you run a binary.
  </Card>
</Columns>

## Next steps

- [Research Agent Skills quickstart](/research-agent-skills/getting-started/quickstart): install one skill
  and verify a bibliography.
- [Skill Doctor quickstart](/skill-doctor/getting-started/quickstart): scan your first skill in under a
  minute.
- [Use these docs with AI](/ai-tools): connect the docs MCP server or install Kalaris skills from this
  site.
- [GitHub](https://github.com/KalarisLabs): source, issues and releases for every project.
