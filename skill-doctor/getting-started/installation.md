---
title: "Install Skill Doctor with npm, cargo or a prebuilt binary"
sidebarTitle: "Installation"
description: "Install the Skill Doctor CLI globally with npm or cargo, download a signed prebuilt binary, or build it from source."
---

Skill Doctor ships as one binary for Linux (musl), macOS and Windows, on `x86_64` and `aarch64`. Pick the
channel that fits your setup.

<Tabs>
  <Tab title="npm">
    ```bash
    npm install -g @security.kalarislabs/skill-doctor
    skill-doctor scan ./examples/hello-skill
    ```

    The package downloads the matching binary during `postinstall`. Set `SKILL_DOCTOR_SKIP_DOWNLOAD=1`
    to skip that step, for example when you build from source.
  </Tab>
  <Tab title="cargo">
    ```bash
    cargo install skill-doctor --locked --features mcp
    skill-doctor scan ./examples/hello-skill
    ```

    <Warning>
      Keep `--features mcp` if you want `skill-doctor mcp`. The crate's default feature set is empty, so a
      plain `cargo install skill-doctor` builds without the MCP server.
    </Warning>
  </Tab>
  <Tab title="Prebuilt binary">
    Download a stripped binary for your platform from
    [GitHub Releases](https://github.com/KalarisLabs/Skill-Doctor/releases/tag/v0.1.0), then
    [verify it](/skill-doctor/reference/verify-releases) before you put it on your `PATH`.

    On macOS, remove the Gatekeeper quarantine flag if the binary will not open:

    ```bash
    xattr -d com.apple.quarantine skill-doctor
    ```
  </Tab>
  <Tab title="From source">
    Requires Rust 1.93.0 or later.

    ```bash
    git clone https://github.com/KalarisLabs/Skill-Doctor && cd Skill-Doctor
    cargo install --path crates/skill-doctor-cli --locked --features mcp
    skill-doctor scan ./examples/hello-skill
    ```
  </Tab>
</Tabs>

## Supported versions

`0.1.x` is the supported release line.

<Note>
  crates.io versions 0.2.0, 0.2.2 and 0.2.3 are yanked pre-release prototypes. Do not use them; 0.1.0 is
  the first supported release.
</Note>
