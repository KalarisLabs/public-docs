---
title: "Kalaris Labs documentation: AI research, benchmarks and agent tools"
sidebarTitle: "Overview"
description: "Documentation for Kalaris Labs, an AI research lab building the infrastructure for the agentic era. Read our papers and benchmarks, and connect agent tools: Research Agent Skills, Kuchi, Skill Doctor, AMARA and Kalki."
keywords: ["Kalaris Labs", "AI research lab", "agent skills", "MCP servers", "LLM benchmarks", "self-improving agents", "open-source AI tools"]
mode: "wide"
boost: 2
---

**Kalaris Labs is an independent AI research lab building the infrastructure for the agentic era.** Agents now write
code, transact, negotiate and coordinate for people and institutions. Everyone is building the agents; we build what
they stand on: harnesses, protocols, markets and mandates, simulations, and evaluations that are hard to game.

> The rules have to exist before the actors do. [Read about the lab](/lab/about) or the [FAQ](/lab/faq).

This site holds our published research, our benchmarks and evaluation methods, and the documentation for every
open-source tool we ship. Every project works with Claude Code, Codex, Cursor, Gemini CLI, GitHub Copilot, OpenCode and
Windsurf, and every page is also served as Markdown so an agent can read it directly.

<Columns cols={3}>
  <Card title="Research papers" icon="file-text" href="/research">
    17 preprints on self-improving agents, agent economies, evaluation, inference and neuroscience.
  </Card>
  <Card title="Benchmarks and evals" icon="chart-column" href="/benchmarks">
    PrincipalBench v2, HiddenLaw and the evaluation rules we hold our own claims to.
  </Card>
  <Card title="For AI agents" icon="bot" href="/agents">
    MCP servers, llms.txt, skill.md and copy-paste setup for Claude, Codex, Cursor and others.
  </Card>
</Columns>

## Set up with your agent

Paste this prompt into your coding agent. It recommends the right project for your repository, waits for your
approval, and checks the result.

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

## Products

| Product | What it does | Connect it |
|---|---|---|
| [Research Agent Skills](/research-agent-skills) | 280+ open-source agent skills for literature reviews, data analysis, paper writing and citation verification | `npx skills add KalarisLabs/research-agent-skills` |
| [Kuchi](/kuchi) | Library of 84 product-launch videos, measured frame by frame, that agents use as remake templates | MCP: `https://kuchi.kalarislabs.com/mcp` |
| [Skill Doctor](/skill-doctor) | Deterministic security scanner for agent skill files, tools and MCP servers | `npx -y @security.kalarislabs/skill-doctor mcp` |
| [AMARA](/amara) | Serverless, end-to-end encrypted mesh that lets agents and robots call each other's tools over Wi-Fi or Bluetooth | `amara setup claude-code --write` |
| [Kalki](/kalki) | Coding-agent harness that must prove each self-improvement before keeping it <Badge color="orange" size="sm">Pre-release</Badge> | `kalki run -p "..."` |
| [More tools](/tools) | LocalLink, Myriad, Academic Unslop, Falsify and the Claude system prompts archive | See each page |

## Latest research

Every paper page states its evidence level. Check it before you cite a result.

| Paper | Area | Evidence |
|---|---|---|
| [PrincipalBench v2](/research/papers/principalbench-v2) | Benchmark validity | <Badge color="green" icon="flask-conical">Experiment</Badge> v1 rankings withdrawn |
| [Agent Kalki](/research/papers/agent-kalki) | Self-improving agents | <Badge color="yellow" icon="wrench">Partial implementation</Badge> |
| [Viveka](/research/papers/viveka) | Self-improving agents | <Badge color="blue" icon="cpu">Simulation</Badge> |
| [Anudhi](/research/papers/anudhi) | Edge inference | <Badge color="green" icon="flask-conical">Experiment</Badge> kernel verification only |
| [Inventing the Variable](/research/papers/inventing-the-variable) | Machine scientific discovery | <Badge color="green" icon="flask-conical">Experiment</Badge> on HiddenLaw |

See [all papers](/research) or the [changelog](/updates).

## Find the right page

| What I want to do | Best option |
|---|---|
| Write or revise a paper with an AI agent | [Write a research paper](/research-agent-skills/guides/write-a-research-paper) |
| Run a systematic review and verify citations | [Systematic review guide](/research-agent-skills/guides/systematic-review) |
| Find databases and packages for my field | [Skills by field](/research-agent-skills/guides/by-field) |
| Check a skill before I install it | [Skill Doctor quickstart](/skill-doctor/getting-started/quickstart) |
| Block risky skills in pull requests | [Skill Doctor in CI](/skill-doctor/guides/ci) |
| Connect an MCP server to my agent | [MCP servers](/agents/mcp-servers) |
| Compare orchestrator models fairly | [PrincipalBench](/benchmarks/principalbench) |
| Give my agent these docs as context | [Use these docs with AI](/ai-tools) |

## Open source

All code is public at [github.com/KalarisLabs](https://github.com/KalarisLabs). See [every repository](/open-source)
with its license and the paper it accompanies.

<Columns cols={2}>
  <GitHub.Repo repo="KalarisLabs/research-agent-skills" />
  <GitHub.Repo repo="KalarisLabs/Skill-Doctor" />
  <GitHub.Repo repo="KalarisLabs/kuchi" />
  <GitHub.Repo repo="KalarisLabs/amara" />
</Columns>

## About these docs

Research Agent Skills pages are mirrored from the
[project repository](https://github.com/KalarisLabs/research-agent-skills). Every other section is maintained in
[KalarisLabs/public-docs](https://github.com/KalarisLabs/public-docs). Read [about the lab](/lab/about).
