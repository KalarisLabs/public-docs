# Kalaris Labs public docs

Source for https://docs.kalarislabs.com, built with Mintlify. Pushes to `main` deploy automatically.

## Layout

| Path | What it is | Edit here? |
|---|---|---|
| `docs.json` | Site config: products, navigation, theme, navbar, footer | Yes, except the Research Agent Skills product's navigation |
| `index.md`, `ai-tools.md` | Hub pages (Kalaris Labs product) | Yes |
| `skill-doctor/` | Skill Doctor docs, written by hand from the Skill-Doctor README | Yes |
| `research-agent-skills/` | Mirrored from `KalarisLabs/research-agent-skills/docs` | **No**, the sync overwrites it |
| `.mintlify/AGENTS.md` | Writing rules for the Mintlify agent and coding agents | Yes |
| `.mintlify/skills/` | Agent skills published at `/.well-known/skills/` | Yes |
| `.agents/skills/mintlify/` | Mintlify's own skill, for agents maintaining this repo | Update from https://mintlify.com/docs/.well-known/skills/mintlify/SKILL.md |
| `logo/`, `favicon.png` | Official marks from the Kalaris Labs brand kit (https://kalarislabs.com/brand) | Replace only with brand-kit files |
| `scripts/sync_research_agent_skills.py` | Sync and link validation | Yes |

## Rules

- Follow `.mintlify/AGENTS.md` for style, components and page structure.
- Use the Mintlify skill in `.agents/skills/mintlify/SKILL.md` for Mintlify features and `docs.json` options.
  Prefer current Mintlify docs over memory.
- The sync script replaces only the Research Agent Skills product's navigation in `docs.json`. Keep that
  product named exactly `Research Agent Skills`.
- Light mode uses the black wordmark (`logo/light.png`) and dark mode the white one (`logo/dark.png`).
  Never recolor or stretch the marks.

## Checks

Run before you push:

```bash
npx mint validate
npx mint broken-links
npx mint a11y
python3 -c "import json,sys; sys.path.insert(0,'scripts'); from pathlib import Path; import sync_research_agent_skills as s; h=Path('.').resolve(); s.validate_site(h, h/'research-agent-skills', json.load(open('docs.json')))"
```

CI runs the same checks on every pull request (`.github/workflows/docs-checks.yml`).
