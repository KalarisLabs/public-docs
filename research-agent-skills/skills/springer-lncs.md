---
title: "springer-lncs — AI agent skill for journal formats"
description: "Format papers for Springer Lecture Notes in Computer Science (LNCS) and related proceedings series (LNAI, LNBI, CCIS) and Springer Nature journals using the…"
keywords: ["Springer", "LNCS", "llncs", "splncs04", "conference proceedings", "Springer Nature", "journal formatting"]
---

# `springer-lncs`

**Category:** [journal-formats](/research-agent-skills/skills#journal-formats) · **License:** MIT · **Version:** 1.0

**Tags:** Springer, LNCS, llncs, splncs04, conference proceedings, Springer Nature, journal formatting

## When to use it

Format papers for Springer Lecture Notes in Computer Science (LNCS) and related proceedings series (LNAI, LNBI, CCIS) and Springer Nature journals using the llncs class or Springer Nature's sn-jnl template, covering page limits, abstract and keywords, splncs04 references, ORCID, running heads, camera-ready packages and the consent-to-publish form. Use when writing for conferences published in LNCS (e.g. ECCV, MICCAI, ESWC, many workshops), preparing an LNCS camera-ready, or targeting Springer Nature journals.

## Example requests

Ask your agent in plain language, for example:

- *"Prepare the LNCS camera-ready for our MICCAI paper with ORCIDs."*

## Install

```bash
# skills.sh (Claude Code, Codex, Cursor, Gemini CLI, Copilot and more)
npx skills add KalarisLabs/research-agent-skills --skill springer-lncs

# GitHub CLI
gh skill install KalarisLabs/research-agent-skills springer-lncs
```

In Claude Code you can also add the marketplace with `/plugin marketplace add KalarisLabs/research-agent-skills` and install the whole `journal-formats` category with `/plugin install journal-formats@research-agent-skills`.

## Related

- [`arxiv-submission`](/research-agent-skills/skills/arxiv-submission)
- [`bibtex-hygiene`](/research-agent-skills/skills/bibtex-hygiene)
- [`citation-verification`](/research-agent-skills/skills/citation-verification)
- [`rebuttal-and-response-to-reviewers`](/research-agent-skills/skills/rebuttal-and-response-to-reviewers)
- [`scientific-visualization`](/research-agent-skills/skills/scientific-visualization)
- [`venue-templates`](/research-agent-skills/skills/venue-templates)
- [Write a research paper with AI](/research-agent-skills/guides/write-a-research-paper)

## Full playbook

Read [SKILL.md](https://github.com/KalarisLabs/research-agent-skills/blob/main/skills/springer-lncs/SKILL.md) for the complete workflow, references and any scripts. The agent installer copies the full skill folder.
