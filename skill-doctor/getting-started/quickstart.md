---
title: "Quickstart: scan your first agent skill"
sidebarTitle: "Quickstart"
description: "Scan an AI agent skill with Skill Doctor in under a minute using npx, read the findings, and understand the exit codes."
---

You need Node.js for `npx`. Nothing else has to be installed.

<Steps>
  <Step title="Scan a skill">
    Point Skill Doctor at a skill folder, the directory that contains `SKILL.md`:

    ```bash
    npx @security.kalarislabs/skill-doctor scan ./my-skill
    ```

    To scan every skill under a directory, use `scan-all`:

    ```bash
    npx @security.kalarislabs/skill-doctor scan-all . --exclude "node_modules/*"
    ```
  </Step>
  <Step title="Read the findings">
    Each finding shows a severity, a threat class ID and what was found:

    ```text
    $ skill-doctor scan ./suspicious-skill
    HIGH [SD-01] Prompt Injection: ASCII smuggling detected in agent prompt
    HIGH [SD-10] Obfuscation: Mixed-script homoglyph "e" (U+0435) in function name
    MEDIUM [SD-03] Data Exfiltration: Environment variable $AWS_ACCESS_KEY referenced

    Coverage: 94% (comprehensive frontmatter parsed)
    Scan complete in 42ms
    ```

    Look up any ID in [threat classes](/skill-doctor/reference/threat-classes). **Coverage** is the share
    of the skill's structure that Skill Doctor could parse. Low coverage means part of the skill was not
    analyzed.
  </Step>
  <Step title="Check the exit code">
    Use the exit code in scripts and CI:

    | Code | Meaning |
    |---|---|
    | `0` | Clean: no findings at or above the threshold |
    | `1` | Usage or internal engine error |
    | `2` | Findings at or above `--fail-on` (default `HIGH`) |
    | `3` | Structural coverage below `--fail-under-coverage` |
  </Step>
  <Step title="Keep it running">
    While you write or edit skills, `watch` re-scans each time a file changes:

    ```bash
    npx @security.kalarislabs/skill-doctor watch ./skills
    ```
  </Step>
</Steps>

## Next steps

<CardGroup cols={3}>
  <Card title="Install" icon="download" href="/skill-doctor/getting-started/installation">
    npm, cargo or a prebuilt binary.
  </Card>
  <Card title="Add to your agent" icon="plug" href="/skill-doctor/guides/mcp-server">
    Let your agent audit skills itself.
  </Card>
  <Card title="Gate CI" icon="git-pull-request" href="/skill-doctor/guides/ci">
    Block risky skills in pull requests.
  </Card>
</CardGroup>
