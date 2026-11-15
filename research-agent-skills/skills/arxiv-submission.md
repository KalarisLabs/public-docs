---
title: "arxiv-submission — AI agent skill for journal formats"
description: "Prepare and post preprints to arXiv without processing failures or leaks, covering TeX source packaging (.bbl, figures, case-sensitive paths), stripping…"
keywords: ["arXiv", "preprint", "LaTeX", "submission", "open access"]
---

# `arxiv-submission`

**Category:** [journal-formats](/research-agent-skills/skills#journal-formats) · **License:** MIT · **Version:** 1.0 · **Includes scripts**

**Tags:** arXiv, preprint, LaTeX, submission, open access

## When to use it

Prepare and post preprints to arXiv without processing failures or leaks, covering TeX source packaging (.bbl, figures, case-sensitive paths), stripping private comments, choosing categories and license, endorsement, metadata (title, abstract, comments field), versioning and replacements, and linking the journal DOI later. Use when posting a paper to arXiv, when arXiv's TeX compilation fails, before uploading source, or when updating a preprint after acceptance. Includes a zero-dependency preflight checker.

## Example requests

Ask your agent in plain language, for example:

- *"arXiv failed to compile my paper, help me prepare the source upload."*

## Install

```bash
# skills.sh (Claude Code, Codex, Cursor, Gemini CLI, Copilot and more)
npx skills add KalarisLabs/research-agent-skills --skill arxiv-submission

# GitHub CLI
gh skill install KalarisLabs/research-agent-skills arxiv-submission
```

In Claude Code you can also add the marketplace with `/plugin marketplace add KalarisLabs/research-agent-skills` and install the whole `journal-formats` category with `/plugin install journal-formats@research-agent-skills`.

## Related

- [`acm-sigconf`](/research-agent-skills/skills/acm-sigconf)
- [`bibtex-hygiene`](/research-agent-skills/skills/bibtex-hygiene)
- [`citation-verification`](/research-agent-skills/skills/citation-verification)
- [`ml-paper-writing`](/research-agent-skills/skills/ml-paper-writing)
- [`reproducibility-statement`](/research-agent-skills/skills/reproducibility-statement)
- [`venue-templates`](/research-agent-skills/skills/venue-templates)
- [`ieee-transactions`](/research-agent-skills/skills/ieee-transactions)
- [`springer-lncs`](/research-agent-skills/skills/springer-lncs)
- [Write a research paper with AI](/research-agent-skills/guides/write-a-research-paper)

## Full playbook

Read [SKILL.md](https://github.com/KalarisLabs/research-agent-skills/blob/main/skills/arxiv-submission/SKILL.md) for the complete workflow, references and any scripts. The agent installer copies the full skill folder.
