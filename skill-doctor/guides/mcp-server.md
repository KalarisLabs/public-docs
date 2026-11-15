---
title: "Use Skill Doctor as an MCP server in your AI agent"
sidebarTitle: "Add to your agent"
description: "Register Skill Doctor as a Model Context Protocol server in Claude Code, Claude Desktop, Cursor or Windsurf so your agent audits skills and tools before it loads or edits them."
---

Run as an MCP server, Skill Doctor lets your agent scan a skill before it loads, runs or modifies it.

<Tabs>
  <Tab title="Claude Code">
    ```bash
    claude mcp add skill-doctor -- npx -y @security.kalarislabs/skill-doctor mcp
    ```
  </Tab>
  <Tab title="Cursor, Windsurf, Claude Desktop">
    Add this entry to your `mcp.json` or the agent's MCP settings:

    ```json mcp.json
    {
      "mcpServers": {
        "skill-doctor": {
          "command": "npx",
          "args": ["-y", "@security.kalarislabs/skill-doctor", "mcp"]
        }
      }
    }
    ```
  </Tab>
  <Tab title="Ask your agent">
    Paste this into your coding agent:

    > Please install `@security.kalarislabs/skill-doctor` and register it as an MCP server with command
    > `npx -y @security.kalarislabs/skill-doctor mcp`. Use it to audit skill files and tools in this
    > workspace before executing or modifying them.
  </Tab>
</Tabs>

Restart the agent after you change its MCP configuration.

<Tip>
  If you installed with cargo, run `skill-doctor mcp` directly and make sure the binary was built with
  `--features mcp`. See [installation](/skill-doctor/getting-started/installation).
</Tip>

## Scanner hijacking protection

A malicious skill can try to instruct the agent that called the scanner. Skill Doctor fences scanned content
before it returns results, and tracks these attempts as threat class
[SD-11](/skill-doctor/reference/threat-classes).
