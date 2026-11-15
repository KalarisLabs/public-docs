---
title: Chemistry and molecular research skills
description: Agent skills for cheminformatics, molecular machine learning, simulation and materials research.
---

# Chemistry and molecular research

Choose tools by representation and experimental question: molecules, simulations or crystal structures. Record units, stereochemistry, parameter settings and data sources so results can be checked independently.

| Task | Skill | What to check |
|---|---|---|
| Clean and describe molecules | [`rdkit`](/research-agent-skills/skills/rdkit) | SMILES validity, stereochemistry and descriptor definitions |
| Prepare molecular datasets | [`datamol`](/research-agent-skills/skills/datamol) | Standardization, duplicates and train/test leakage |
| Fit molecular prediction models | [`deepchem`](/research-agent-skills/skills/deepchem) | Split strategy, target labels and external validation |
| Set up a simulation | [`molecular-dynamics`](/research-agent-skills/skills/molecular-dynamics) | Force field, units, equilibration and convergence |
| Analyze materials | [`pymatgen`](/research-agent-skills/skills/pymatgen) | Structure provenance and calculation settings |

```bash
npx skills add KalarisLabs/research-agent-skills --skill rdkit
```

Try: “Inspect `compounds.csv`, flag invalid or duplicate structures, and propose descriptors for a baseline model. Do not change the source file.” For reporting, add [scientific writing](/research-agent-skills/skills/scientific-writing) after the analysis is verified.
