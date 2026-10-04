---
title: Research agent skills by discipline
description: Find academic agent skills for machine learning, AI, biology, chemistry, medicine and physics, with example tasks and installation commands.
---

# Find skills for your research field

Start with the methods and data in your project. Each field guide pairs specific skills with a first task and the evidence to check before using the output in a paper.

<Columns cols={2}>
  <Card title="Machine learning" icon="chart-line" href="/research-agent-skills/fields/machine-learning">
    Experiments, evaluation, reproducibility and conference papers.
  </Card>
  <Card title="Artificial intelligence" icon="brain" href="/research-agent-skills/fields/artificial-intelligence">
    Language models, agents, interpretability and safety evaluations.
  </Card>
  <Card title="Biology" icon="dna" href="/research-agent-skills/fields/biology">
    Single-cell data, differential expression and biological records.
  </Card>
  <Card title="Chemistry" icon="flask" href="/research-agent-skills/fields/chemistry">
    Molecules, chemical datasets, simulations and materials.
  </Card>
  <Card title="Medicine" icon="heart-pulse" href="/research-agent-skills/fields/medicine">
    Medical imaging, clinical research datasets and evidence synthesis.
  </Card>
  <Card title="Physics" icon="atom" href="/research-agent-skills/fields/physics">
    Astronomy, quantum computing, materials and spatial data.
  </Card>
</Columns>

## Start with a specific skill

The [quickstart](/research-agent-skills/getting-started/quickstart) shows a project install and a citation-checking task. Substitute any skill name from a field guide:

```bash
npx skills add KalarisLabs/research-agent-skills --skill scanpy
```

The installer asks which agent harness to use. By default, skills are installed into the current project; add `--global` for your user account. [Installation options](/research-agent-skills/getting-started/installation) cover other harnesses and methods.

## Across disciplines

For research design and statistical analysis, explore [experimental design](/research-agent-skills/skills/experimental-design), [statistical power](/research-agent-skills/skills/statistical-power), [statistical analysis](/research-agent-skills/skills/statistical-analysis) and [APA 7 writing](/research-agent-skills/skills/apa7). Lab automation users can start with [Opentrons integration](/research-agent-skills/skills/opentrons-integration) or [PyLabRobot](/research-agent-skills/skills/pylabrobot), then verify any generated protocol before running equipment.

For literature discovery, [Firecrawl Research Index](/research-agent-skills/skills/firecrawl-research-index) searches a hosted paper corpus; [paper corpus RAG](/research-agent-skills/skills/paper-corpus-rag) works with your own PDFs. Use [citation verification](/research-agent-skills/skills/citation-verification) before submitting references. [Browse all 281 skills](/research-agent-skills/skills) if your field or method is not listed here.
