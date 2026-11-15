---
title: "Gate CI with Skill Doctor: GitHub Actions, GitLab and SARIF"
sidebarTitle: "Use it in CI"
description: "Fail builds that add risky AI agent skills. Run Skill Doctor in GitHub Actions or GitLab CI, set severity and coverage thresholds, and upload SARIF to code scanning."
---

In CI, Skill Doctor fails the job when it finds a problem at or above your severity threshold (exit code
`2`) or when it cannot parse enough of a skill (exit code `3`).

<Tabs>
  <Tab title="GitHub Actions">
    ```yaml .github/workflows/skills.yml
    - name: Run Skill Doctor
      id: scan
      uses: KalarisLabs/Skill-Doctor@v0.1.0
      with:
        path: .
        mode: scan-all
        fail-on: HIGH
        fail-under-coverage: 0.8
        output: sarif
        sarif-file: skill-doctor.sarif

    - name: Upload SARIF report
      if: always()
      uses: github/codeql-action/upload-sarif@v3
      with:
        sarif_file: skill-doctor.sarif
    ```

    Findings then appear in the repository's **Security → Code scanning** view.
  </Tab>
  <Tab title="GitLab CI">
    ```yaml .gitlab-ci.yml
    scan-skills:
      image: ubuntu:latest
      before_script:
        - apt-get update && apt-get install -y curl
        - curl -sSfL https://github.com/KalarisLabs/Skill-Doctor/releases/download/v0.1.0/skill-doctor-v0.1.0-x86_64-unknown-linux-musl.tar.gz | tar -xz
        - mv skill-doctor /usr/local/bin/
      script:
        - skill-doctor scan-all . --fail-on HIGH --output sarif > skill-doctor.sarif
      artifacts:
        reports:
          sast: skill-doctor.sarif
    ```
  </Tab>
  <Tab title="Any CI">
    ```bash
    skill-doctor scan-all . \
      --output sarif \
      --fail-on HIGH \
      --fail-under-coverage 0.8 \
      --deterministic \
      --offline
    ```
  </Tab>
</Tabs>

## GitHub Action inputs

| Input | Default | Description |
|---|---|---|
| `path` | `.` | Skill folder, or a parent directory of skills |
| `mode` | `scan-all` | `scan` for one skill, `scan-all` for a directory of skills |
| `fail-on` | `HIGH` | Lowest severity that fails the job: `LOW`, `MEDIUM`, `HIGH`, `CRITICAL` |
| `fail-under-coverage` | `0.8` | Lowest structural coverage ratio (0.0 to 1.0) that passes |
| `output` | `sarif` | Report format: `text`, `json` or `sarif` |
| `sarif-file` | `skill-doctor.sarif` | Where to write SARIF output |
| `version` | `0.1.0` | Skill Doctor version to run |

The action exposes `sarif-file` and `exit-code` as outputs.

## Compare against a baseline

To see what changed since a known-good scan, save a JSON report and diff against it:

```bash
skill-doctor scan ./my-skill --output json > report.json
skill-doctor diff ./my-skill --baseline report.json
```
