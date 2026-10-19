# Kalaris Labs public documentation

This repository is the source for [docs.kalarislabs.com](https://docs.kalarislabs.com/).
The site uses Mintlify's product navigation so each Kalaris Labs project has its own section.

The Research Agent Skills section is mirrored from
[`KalarisLabs/research-agent-skills/docs`](https://github.com/KalarisLabs/research-agent-skills/tree/main/docs).
Edit that source directory, not the mirrored `research-agent-skills/` files here. The
`sync-research-agent-skills` workflow checks for changes every six hours and can also be run
manually from GitHub Actions. It updates the project pages and navigation and commits the
result to this repository. Mintlify deploys this repository's `main` branch.

The Skill Doctor section (`skill-doctor/`) is written here directly, based on the
[`KalarisLabs/Skill-Doctor`](https://github.com/KalarisLabs/Skill-Doctor) README. Update it when that
project's commands or flags change.

Site-wide settings (theme, fonts, icons, navbar, footer, contextual menu, 404 page) live at the top
level of `docs.json`. The sync script only replaces the Research Agent Skills product's navigation, so
these settings and other products are kept. Icons use the Lucide library.

Logos and the favicon come from the Kalaris Labs brand kit (https://kalarislabs.com/brand): the black
wordmark for light mode (`logo/light.png`) and the white wordmark for dark mode (`logo/dark.png`).

## Working with agents

- `AGENTS.md` (also loaded by `CLAUDE.md`) explains the repository layout and checks for coding agents.
- `.mintlify/AGENTS.md` holds the writing rules used by the Mintlify agent and coding agents.
- `.agents/skills/mintlify/` is Mintlify's official skill, linked into `.claude/skills/` for Claude Code.
- `.mintlify/skills/` contains the Kalaris Labs skills that Mintlify publishes at
  `https://docs.kalarislabs.com/.well-known/skills/`, so `npx skills add https://docs.kalarislabs.com` works.
- `.github/workflows/docs-checks.yml` runs `mint validate`, `mint broken-links`, `mint a11y` and the hub link
  check on every pull request.

## Adding a project

Add future projects under their own directory and `navigation.products` entry in `docs.json`.
Keep project paths stable; use `redirects` when moving published pages.

The separate `KalarisLabs/docs` knowledge base is not a source for this public site.
