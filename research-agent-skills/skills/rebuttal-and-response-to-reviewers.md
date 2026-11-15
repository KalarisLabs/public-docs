---
title: "rebuttal-and-response-to-reviewers — AI agent skill for research writing"
description: "Plan and write responses to peer review, including journal \"response to reviewers\" letters for revise-and-resubmit, conference rebuttals under strict length…"
keywords: ["peer review", "rebuttal", "response to reviewers", "revise and resubmit", "OpenReview", "author response"]
---

# `rebuttal-and-response-to-reviewers`

**Category:** [research-writing](/research-agent-skills/skills#research-writing) · **License:** MIT · **Version:** 1.0

**Tags:** peer review, rebuttal, response to reviewers, revise and resubmit, OpenReview, author response

## When to use it

Plan and write responses to peer review, including journal "response to reviewers" letters for revise-and-resubmit, conference rebuttals under strict length limits (OpenReview/ICLR, NeurIPS, ICML, ACL ARR, CVPR), author responses to meta-reviews, and appeals. Use when a user receives reviews, must triage reviewer comments, draft point-by-point replies, decide what new experiments to run, disagree respectfully with a reviewer, or track manuscript changes for a revision. For authors answering reviews of their own manuscript; to write a review of someone else's paper, use peer-review instead.

## Example requests

Ask your agent in plain language, for example:

- *"We got major revisions with 3 reviewers. Help me write the response letter."*

## Install

```bash
# skills.sh (Claude Code, Codex, Cursor, Gemini CLI, Copilot and more)
npx skills add KalarisLabs/research-agent-skills --skill rebuttal-and-response-to-reviewers

# GitHub CLI
gh skill install KalarisLabs/research-agent-skills rebuttal-and-response-to-reviewers
```

In Claude Code you can also add the marketplace with `/plugin marketplace add KalarisLabs/research-agent-skills` and install the whole `research-writing` category with `/plugin install research-writing@research-agent-skills`.

## Related

- [`acm-sigconf`](/research-agent-skills/skills/acm-sigconf)
- [`cover-letter-to-editor`](/research-agent-skills/skills/cover-letter-to-editor)
- [`elsevier-cas`](/research-agent-skills/skills/elsevier-cas)
- [`ieee-transactions`](/research-agent-skills/skills/ieee-transactions)
- [`ml-paper-writing`](/research-agent-skills/skills/ml-paper-writing)
- [`nature-portfolio`](/research-agent-skills/skills/nature-portfolio)
- [`peer-review`](/research-agent-skills/skills/peer-review)
- [`scientific-critical-thinking`](/research-agent-skills/skills/scientific-critical-thinking)
- [Write a research paper with AI](/research-agent-skills/guides/write-a-research-paper)

## Full playbook

Read [SKILL.md](https://github.com/KalarisLabs/research-agent-skills/blob/main/skills/rebuttal-and-response-to-reviewers/SKILL.md) for the complete workflow, references and any scripts. The agent installer copies the full skill folder.
