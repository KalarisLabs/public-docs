---
title: "cell-press — AI agent skill for journal formats"
description: "Prepare manuscripts for Cell Press journals (Cell, Molecular Cell, Neuron, Immunity, Cell Reports, Cell Systems, iScience, Cell Metabolism, Current Biology…"
keywords: ["Cell Press", "Cell", "Neuron", "Cell Reports", "STAR Methods", "graphical abstract", "highlights", "journal formatting"]
---

# `cell-press`

**Category:** [journal-formats](/research-agent-skills/skills#journal-formats) · **License:** MIT · **Version:** 1.0

**Tags:** Cell Press, Cell, Neuron, Cell Reports, STAR Methods, graphical abstract, highlights, journal formatting

## When to use it

Prepare manuscripts for Cell Press journals (Cell, Molecular Cell, Neuron, Immunity, Cell Reports, Cell Systems, iScience, Cell Metabolism, Current Biology and others), covering Summary, Highlights, eTOC blurb and graphical abstract, STAR Methods with the Key Resources Table, resource availability (lead contact, materials, data and code), figure and statistics requirements, and Cell Press formatting at submission vs revision. Use when targeting a Cell Press journal, writing highlights or a graphical abstract, or converting methods into STAR Methods.

## Example requests

Ask your agent in plain language, for example:

- *"Write highlights, an eTOC blurb and the Key Resources Table for our Cell Reports submission."*

## Install

```bash
# skills.sh (Claude Code, Codex, Cursor, Gemini CLI, Copilot and more)
npx skills add KalarisLabs/research-agent-skills --skill cell-press

# GitHub CLI
gh skill install KalarisLabs/research-agent-skills cell-press
```

In Claude Code you can also add the marketplace with `/plugin marketplace add KalarisLabs/research-agent-skills` and install the whole `journal-formats` category with `/plugin install journal-formats@research-agent-skills`.

## Related

- [`abstract-and-title`](/research-agent-skills/skills/abstract-and-title)
- [`cover-letter-to-editor`](/research-agent-skills/skills/cover-letter-to-editor)
- [`protocolsio-integration`](/research-agent-skills/skills/protocolsio-integration)
- [`reproducibility-statement`](/research-agent-skills/skills/reproducibility-statement)
- [`scientific-visualization`](/research-agent-skills/skills/scientific-visualization)
- [`statistical-analysis`](/research-agent-skills/skills/statistical-analysis)
- [`venue-templates`](/research-agent-skills/skills/venue-templates)
- [`peer-review`](/research-agent-skills/skills/peer-review)
- [Write a research paper with AI](/research-agent-skills/guides/write-a-research-paper)

## Full playbook

Read [SKILL.md](https://github.com/KalarisLabs/research-agent-skills/blob/main/skills/cell-press/SKILL.md) for the complete workflow, references and any scripts. The agent installer copies the full skill folder.
