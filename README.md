# Kalaris Labs public documentation

This repository is the source for [docs.kalarislabs.com](https://docs.kalarislabs.com/).
The site uses Mintlify's product navigation so each Kalaris Labs project has its own section.

The Research Agent Skills section is mirrored from
[`KalarisLabs/research-agent-skills/docs`](https://github.com/KalarisLabs/research-agent-skills/tree/main/docs).
Edit that source directory, not the mirrored `research-agent-skills/` files here. The
`sync-research-agent-skills` workflow checks for changes every six hours and can also be run
manually from GitHub Actions. It updates the project pages and navigation and commits the
result to this repository. Mintlify deploys this repository's `main` branch.

Add future projects under their own directory and `navigation.products` entry in `docs.json`.
Keep project paths stable; use `redirects` when moving published pages.

The separate `KalarisLabs/docs` knowledge base is not a source for this public site.
