---
title: "citation-verification — AI agent skill for literature review"
description: "Verify that every reference in a manuscript really exists and matches its metadata, catching hallucinated, corrupted or mismatched citations before submission."
keywords: ["citations", "hallucination", "DOI", "Crossref", "OpenAlex", "arXiv", "references", "research integrity"]
---

# `citation-verification`

**Category:** [literature-review](/research-agent-skills/skills#literature-review) · **License:** MIT · **Version:** 1.0 · **Includes scripts**

**Tags:** citations, hallucination, DOI, Crossref, OpenAlex, arXiv, references, research integrity

## When to use it

Verify that every reference in a manuscript really exists and matches its metadata, catching hallucinated, corrupted or mismatched citations before submission. Use when checking a .bib file or reference list, after an AI assistant drafted citations, when a DOI may point to the wrong paper, when adding missing DOIs, or before camera-ready. Queries Crossref, OpenAlex and arXiv; zero dependencies.

## Example requests

Ask your agent in plain language, for example:

- *"ChatGPT wrote my references. Check that every entry in references.bib actually exists."*

## Install

```bash
# skills.sh (Claude Code, Codex, Cursor, Gemini CLI, Copilot and more)
npx skills add KalarisLabs/research-agent-skills --skill citation-verification

# GitHub CLI
gh skill install KalarisLabs/research-agent-skills citation-verification
```

In Claude Code you can also add the marketplace with `/plugin marketplace add KalarisLabs/research-agent-skills` and install the whole `literature-review` category with `/plugin install literature-review@research-agent-skills`.

## Related

- [`apa7`](/research-agent-skills/skills/apa7)
- [`arxiv-submission`](/research-agent-skills/skills/arxiv-submission)
- [`bibtex-hygiene`](/research-agent-skills/skills/bibtex-hygiene)
- [`citation-management`](/research-agent-skills/skills/citation-management)
- [`literature-review`](/research-agent-skills/skills/literature-review)
- [`dhdna-profiler`](/research-agent-skills/skills/dhdna-profiler)
- [`firecrawl-research-index`](/research-agent-skills/skills/firecrawl-research-index)
- [`ieee-transactions`](/research-agent-skills/skills/ieee-transactions)
- [Write a research paper with AI](/research-agent-skills/guides/write-a-research-paper)

## Full playbook

Read [SKILL.md](https://github.com/KalarisLabs/research-agent-skills/blob/main/skills/citation-verification/SKILL.md) for the complete workflow, references and any scripts. The agent installer copies the full skill folder.
