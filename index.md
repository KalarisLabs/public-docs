---
title: "Kalaris Labs documentation: AI research, benchmarks and agent tools"
sidebarTitle: "Overview"
description: "Documentation for Kalaris Labs, an applied AI research lab. Read our papers and benchmarks, and connect agent tools: Research Agent Skills, Kuchi, Skill Doctor, AMARA and Kalki."
keywords: ["Kalaris Labs", "AI research lab", "agent skills", "MCP servers", "LLM benchmarks", "self-improving agents", "open-source AI tools"]
mode: "wide"
---

**Kalaris Labs is an applied AI research lab building infrastructure for agentic science.** This site holds our
published research, our benchmarks and evaluation methods, and the documentation for every open-source tool we ship.
Each page is also served as Markdown, so an AI agent can read this site directly.

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

## Products

| Product | What it does | Connect it |
|---|---|---|
| [Research Agent Skills](/research-agent-skills) | 280+ open-source agent skills for literature reviews, data analysis, paper writing and citation verification | `npx research-agent-skills` |
| [Kuchi](/kuchi) | Library of 84 product-launch videos, measured frame by frame, that agents use as remake templates | MCP: `https://kuchi.kalarislabs.com/mcp` |
| [Skill Doctor](/skill-doctor) | Deterministic security scanner for agent skill files, tools and MCP servers | `npx -y @security.kalarislabs/skill-doctor mcp` |
| [AMARA](/amara) | Serverless, end-to-end encrypted mesh that lets agents and robots call each other's tools over Wi-Fi or Bluetooth | `amara setup claude-code --write` |
| [Kalki](/kalki) | Coding-agent harness that must prove each self-improvement before keeping it (pre-release) | `kalki run -p "..."` |
| [More tools](/tools) | LocalLink, Myriad, Academic Unslop, Falsify and the Claude system prompts archive | See each page |

## Latest research

| Paper | Area | Evidence |
|---|---|---|
| [PrincipalBench v2](/research/papers/principalbench-v2) | Benchmark validity | Audit of v1; v1 rankings withdrawn |
| [Agent Kalki](/research/papers/agent-kalki) | Self-improving agents | Partial implementation |
| [Viveka](/research/papers/viveka) | Self-improving agents | Simulation |
| [Anudhi](/research/papers/anudhi) | Edge inference | Kernel verification results |
| [Inventing the Variable](/research/papers/inventing-the-variable) | Machine scientific discovery | Experiments on the HiddenLaw benchmark |

See [all papers](/research) or the [changelog](/updates).

## About these docs

Research Agent Skills pages are mirrored from the
[project repository](https://github.com/KalarisLabs/research-agent-skills). Every other section is maintained here, in
[KalarisLabs/public-docs](https://github.com/KalarisLabs/public-docs). Read [about the lab](/lab/about) or browse all
[open-source repositories](/open-source).
