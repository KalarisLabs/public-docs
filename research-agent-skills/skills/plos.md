---
title: "plos — AI agent skill for journal formats"
description: "Prepare manuscripts for PLOS journals (PLOS ONE, PLOS Biology, PLOS Computational Biology, PLOS Genetics, PLOS Medicine, PLOS Pathogens, PLOS Neglected…"
keywords: ["PLOS", "PLOS ONE", "open access", "data availability", "Vancouver", "journal formatting"]
---

# `plos`

**Category:** [journal-formats](/research-agent-skills/skills#journal-formats) · **License:** MIT · **Version:** 1.0

**Tags:** PLOS, PLOS ONE, open access, data availability, Vancouver, journal formatting

## When to use it

Prepare manuscripts for PLOS journals (PLOS ONE, PLOS Biology, PLOS Computational Biology, PLOS Genetics, PLOS Medicine, PLOS Pathogens, PLOS Neglected Tropical Diseases, PLOS Global Public Health and others), covering structure, abstract and author summary, Vancouver-style references, the mandatory data availability policy, ethics and financial disclosure statements, figure requirements (PACE), the PLOS LaTeX template, reporting guidelines and PLOS ONE's publication criteria. Use when targeting any PLOS journal or checking compliance with PLOS policies.

## Example requests

Ask your agent in plain language, for example:

- *"What do I need for the PLOS ONE data availability statement and ethics statement?"*

## Install

```bash
# skills.sh (Claude Code, Codex, Cursor, Gemini CLI, Copilot and more)
npx skills add KalarisLabs/research-agent-skills --skill plos

# GitHub CLI
gh skill install KalarisLabs/research-agent-skills plos
```

In Claude Code you can also add the marketplace with `/plugin marketplace add KalarisLabs/research-agent-skills` and install the whole `journal-formats` category with `/plugin install journal-formats@research-agent-skills`.

## Related

- [`abstract-and-title`](/research-agent-skills/skills/abstract-and-title)
- [`cover-letter-to-editor`](/research-agent-skills/skills/cover-letter-to-editor)
- [`reproducibility-statement`](/research-agent-skills/skills/reproducibility-statement)
- [`statistical-analysis`](/research-agent-skills/skills/statistical-analysis)
- [`systematic-review-prisma`](/research-agent-skills/skills/systematic-review-prisma)
- [`venue-templates`](/research-agent-skills/skills/venue-templates)
- [Write a research paper with AI](/research-agent-skills/guides/write-a-research-paper)

## Full playbook

Read [SKILL.md](https://github.com/KalarisLabs/research-agent-skills/blob/main/skills/plos/SKILL.md) for the complete workflow, references and any scripts. The agent installer copies the full skill folder.
