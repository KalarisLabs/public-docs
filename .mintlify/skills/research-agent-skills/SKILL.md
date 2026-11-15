---
name: research-agent-skills
description: Choose, install and use Kalaris Labs Research Agent Skills for academic writing, literature reviews, citation verification, journal formatting and scientific data analysis. Use when the user is writing a paper, thesis or grant, running a systematic review, checking references, or analyzing data in a scientific field.
license: MIT
compatibility: Requires Node.js for the skills.sh installer. Works with Claude Code, Codex, Cursor, Gemini CLI, GitHub Copilot, OpenCode and Windsurf.
metadata:
  author: Kalaris Labs
  docs: https://docs.kalarislabs.com/research-agent-skills
---

# Research Agent Skills

A collection of open-source agent skills for researchers. Install only the skills a task needs.

## Find the right skill

1. Read the catalog at https://docs.kalarislabs.com/research-agent-skills/skills, or the page index at
   https://docs.kalarislabs.com/llms.txt.
2. Match the user's task to a guide:
   - Paper: https://docs.kalarislabs.com/research-agent-skills/guides/write-a-research-paper
   - Thesis: https://docs.kalarislabs.com/research-agent-skills/guides/thesis-and-dissertation
   - Systematic review: https://docs.kalarislabs.com/research-agent-skills/guides/systematic-review
   - Discipline-specific analysis: https://docs.kalarislabs.com/research-agent-skills/guides/by-field
3. Propose the skills to the user and wait for approval before installing.

## Install

- One skill: `npx skills add KalarisLabs/research-agent-skills --skill <name>`
- Pick interactively: `npx skills add KalarisLabs/research-agent-skills`
- Add `--global` to install for the user account instead of this project.

Restart the agent after installing so it loads the new skills.

## Use responsibly

- Verify every reference with `citation-verification` before it goes into a manuscript. A missing match
  is not proof that a paper does not exist; report it as unverified.
- Use `unslop-academic-writing` to revise prose in the author's own voice, not to invent content.
- Read the current author guidelines for the target venue; do not rely on remembered formatting rules.
- Keep the author responsible for claims, data and authorship decisions.
