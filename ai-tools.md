---
title: "Use Kalaris Labs docs with AI agents"
sidebarTitle: "Use with AI"
description: "Give your AI agent the Kalaris Labs documentation as context: install skills from this site, connect the docs MCP server, read llms.txt, or open any page in Claude, ChatGPT or Cursor."
---

This site is built to be read by agents as well as people. Pick the method that fits your tool.

## Install Kalaris skills from this site

The site publishes agent skills that teach your agent how to use each Kalaris Labs project. Install them
with the skills CLI:

```bash
npx skills add https://docs.kalarislabs.com
```

| Skill | What it teaches your agent |
|---|---|
| `research-agent-skills` | Choose and install the right research skills for a task, then verify their output |
| `skill-doctor` | Scan agent skills and MCP servers for security issues and read the findings |

Agents discover these skills at `https://docs.kalarislabs.com/.well-known/skills/index.json`.

<Note>
  These are short guides to each project. To install the research skills themselves, use
  `npx skills add KalarisLabs/research-agent-skills`. See [installation](/research-agent-skills/getting-started/installation).
</Note>

## Connect the docs MCP server

The docs MCP server lets your agent search these pages while it works.

<Tabs>
  <Tab title="Claude Code">
    ```bash
    claude mcp add --transport http kalaris-docs https://docs.kalarislabs.com/mcp
    ```
  </Tab>
  <Tab title="Cursor, Windsurf, VS Code">
    Add this to your MCP configuration:

    ```json mcp.json
    {
      "mcpServers": {
        "kalaris-docs": {
          "url": "https://docs.kalarislabs.com/mcp"
        }
      }
    }
    ```
  </Tab>
</Tabs>

You can also add the server from the menu at the top of any page: choose the **Cursor** or **VS Code**
option.

## Read the docs as plain text

| URL | Contents |
|---|---|
| [`/llms.txt`](https://docs.kalarislabs.com/llms.txt) | Index of every page with a one-line description |
| [`/llms-full.txt`](https://docs.kalarislabs.com/llms-full.txt) | Full text of every page in one file |
| Any page URL plus `.md` | That page as Markdown, for example [`/skill-doctor.md`](https://docs.kalarislabs.com/skill-doctor.md) |

## Open a page in an AI tool

Every page has a menu next to its title. Use it to copy the page as Markdown, or open it directly in
Claude, ChatGPT or Perplexity with the page attached.
