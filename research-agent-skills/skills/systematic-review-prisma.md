---
title: "systematic-review-prisma — AI agent skill for literature review"
description: "Plan, run and report systematic reviews and meta-analyses to PRISMA 2020 standards."
keywords: ["systematic review", "PRISMA 2020", "meta-analysis", "PROSPERO", "screening", "risk of bias", "evidence synthesis"]
---

# `systematic-review-prisma`

**Category:** [literature-review](/research-agent-skills/skills#literature-review) · **License:** MIT · **Version:** 1.0 · **Includes scripts**

**Tags:** systematic review, PRISMA 2020, meta-analysis, PROSPERO, screening, risk of bias, evidence synthesis

## When to use it

Plan, run and report systematic reviews and meta-analyses to PRISMA 2020 standards. Use when writing a review protocol (PROSPERO/OSF), building reproducible database search strings (PubMed, Embase, Scopus, Web of Science), deduplicating exports, organizing title/abstract and full-text screening, assessing risk of bias, drawing the PRISMA flow diagram, or completing the PRISMA 2020 checklist. Includes a dedup tool and a checked PRISMA diagram generator.

## Example requests

Ask your agent in plain language, for example:

- *"Plan a systematic review of exercise interventions for depression and make the PRISMA flow diagram."*

## Install

```bash
# skills.sh (Claude Code, Codex, Cursor, Gemini CLI, Copilot and more)
npx skills add KalarisLabs/research-agent-skills --skill systematic-review-prisma

# GitHub CLI
gh skill install KalarisLabs/research-agent-skills systematic-review-prisma
```

In Claude Code you can also add the marketplace with `/plugin marketplace add KalarisLabs/research-agent-skills` and install the whole `literature-review` category with `/plugin install literature-review@research-agent-skills`.

## Related

- [`firecrawl-research-index`](/research-agent-skills/skills/firecrawl-research-index)
- [`literature-review`](/research-agent-skills/skills/literature-review)
- [`plos`](/research-agent-skills/skills/plos)
- [`research-knowledge-graph`](/research-agent-skills/skills/research-knowledge-graph)
- [`scientific-critical-thinking`](/research-agent-skills/skills/scientific-critical-thinking)
- [`citation-verification`](/research-agent-skills/skills/citation-verification)
- [`peer-review`](/research-agent-skills/skills/peer-review)
- [`scientific-writing`](/research-agent-skills/skills/scientific-writing)
- [Write a research paper with AI](/research-agent-skills/guides/write-a-research-paper)

## Full playbook

Read [SKILL.md](https://github.com/KalarisLabs/research-agent-skills/blob/main/skills/systematic-review-prisma/SKILL.md) for the complete workflow, references and any scripts. The agent installer copies the full skill folder.
