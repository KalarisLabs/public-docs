---
title: "Verify Skill Doctor release binaries with Cosign and SHA-256"
sidebarTitle: "Verify releases"
description: "Check that a Skill Doctor binary came from the official release workflow: verify the Sigstore Cosign signature, the SHA-256 checksum, and inspect the CycloneDX SBOM."
---

Release binaries are built in isolated CI, hashed into `SHA256SUMS.txt` and signed with keyless Sigstore
Cosign (GitHub OIDC). Download `SHA256SUMS.txt`, `SHA256SUMS.txt.bundle` and your binary from the
[release page](https://github.com/KalarisLabs/Skill-Doctor/releases), then:

<Steps>
  <Step title="Verify the checksum signature">
    ```bash
    cosign verify-blob \
      --bundle SHA256SUMS.txt.bundle \
      --certificate-identity-regexp '^https://github\.com/KalarisLabs/Skill-Doctor/\.github/workflows/release\.yml@refs/tags/v.*$' \
      --certificate-oidc-issuer https://token.actions.githubusercontent.com \
      SHA256SUMS.txt
    ```

    This proves `SHA256SUMS.txt` was produced by Skill Doctor's release workflow on a version tag.
  </Step>
  <Step title="Verify the binary digest">
    ```bash
    sha256sum -c SHA256SUMS.txt --ignore-missing
    ```
  </Step>
  <Step title="Inspect the SBOM (optional)">
    List every bundled component and its license from the CycloneDX SBOM:

    ```bash
    jq -r '.components[] | "\(.name) \(.version) (\(.licenses[0].license.id // "unknown"))"' skill-doctor.cdx.json
    ```
  </Step>
</Steps>

## Report a vulnerability

Report security issues privately through
[GitHub Security Advisories](https://github.com/KalarisLabs/Skill-Doctor/security/advisories) or email
`security@kalarislabs.com`.
