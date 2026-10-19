---
title: "research-knowledge-graph — AI agent skill for knowledge and rag"
description: "Turn a bibliography or literature corpus into a knowledge graph of papers, authors, venues, topics and citation links, then analyze it (citation clusters, key…"
keywords: ["knowledge graph", "citation network", "bibliometrics", "OpenAlex", "Neo4j", "Gephi", "NetworkX", "Obsidian", "graphify", "science mapping"]
---

# `research-knowledge-graph`

**Category:** [knowledge-and-rag](/research-agent-skills/skills#knowledge-and-rag) · **License:** MIT · **Version:** 1.0 · **Includes scripts**

**Tags:** knowledge graph, citation network, bibliometrics, OpenAlex, Neo4j, Gephi, NetworkX, Obsidian, graphify, science mapping

## When to use it

Turn a bibliography or literature corpus into a knowledge graph of papers, authors, venues, topics and citation links, then analyze it (citation clusters, key papers, bridging work, research gaps) or export it to Neo4j, Gephi, NetworkX, Obsidian or Markdown-graph tools such as graphify. Use when mapping a research field, building a citation network, finding influential or bridging papers, or visualizing how a literature connects. Zero-dependency builder with optional OpenAlex enrichment.

## Example requests

Ask your agent in plain language, for example:

- *"Build a citation network from my Zotero library and find the most influential and bridging papers."*

## Install

```bash
# skills.sh (Claude Code, Codex, Cursor, Gemini CLI, Copilot and more)
npx skills add KalarisLabs/research-agent-skills --skill research-knowledge-graph

# GitHub CLI
gh skill install KalarisLabs/research-agent-skills research-knowledge-graph
```

In Claude Code you can also add the marketplace with `/plugin marketplace add KalarisLabs/research-agent-skills` and install the whole `knowledge-and-rag` category with `/plugin install knowledge-and-rag@research-agent-skills`.

## Related

- [`networkx`](/research-agent-skills/skills/networkx)
- [`paper-corpus-rag`](/research-agent-skills/skills/paper-corpus-rag)
- [`citation-verification`](/research-agent-skills/skills/citation-verification)
- [`literature-review`](/research-agent-skills/skills/literature-review)
- [`reference-manager-interop`](/research-agent-skills/skills/reference-manager-interop)
- [`systematic-review-prisma`](/research-agent-skills/skills/systematic-review-prisma)

## Full playbook

Read [SKILL.md](https://github.com/KalarisLabs/research-agent-skills/blob/main/skills/research-knowledge-graph/SKILL.md) for the complete workflow, references and any scripts. The agent installer copies the full skill folder.
