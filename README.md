# DocCreation_AI — AI-Driven Test Plan & Test Case Generator

## Overview

This project uses **CommandCode AI agent** to generate enterprise-grade **Test Plans** and **Test Cases** from source documents (PRDs, templates) using structured AI prompts. The workflow is fully prompt-driven, with no manual authoring.

## Directory Structure

```
├── InputDocuments/              # AI prompts fed to the agent
│   ├── Prompt_TestPlan.txt      # ICCEPO-framework prompt to generate a test plan
│   └── Prompt_TestCases.txt     # (placeholder) prompt for test case generation
│
├── ProvidedDocuments/           # Source/reference documents
│   ├── Product_Requirements_Document.pdf   # VWO DXO Platform PRD
│   └── Test_Plan_Template.pdf              # Test plan structure template
│
├── OutputDocuments/             # AI-generated artifacts
│   └── TestPlan/
│       ├── vwoapp_testplan.md   # Full test plan in Markdown (635 lines)
│       └── vwoapp_testplan.pdf  # Same test plan as PDF (client-ready)
│
├── extract_pdf.js               # Utility to inspect raw PDF contents
└── README.md                    # This file
```

## Workflow

1. **Place reference documents** in `ProvidedDocuments/` (PRD describing the product features + optional template for output structure).
2. **Write the prompt** in `InputDocuments/` following the ICCEPO framework — defining the AI's role, instructions, context, example, parameters, and desired output format.
3. **Let the AI agent run** — the agent reads the provided documents, follows the prompt, and generates the test plan (or test cases) as both Markdown and PDF.
4. **Review the output** in `OutputDocuments/`.

## Example Output

The `vwoapp_testplan.md` contains a complete enterprise test plan covering:

- **9 features** (A/B Testing, SmartStats Analytics, Visual/Code Editors, Heatmaps, Session Recordings, Audience Targeting, Dashboards, Personalization, Integrations)
- **90+ test scenarios** with TC IDs, data requirements, and expected results
- **12 testing types** (Smoke, Functional, UI/UX, Integration, Regression, Cross-browser, etc.)
- **Full test strategy**: Entry/Exit criteria, defect reporting (JIRA workflow), schedule (~27 days), roles, tools, risks & mitigations, and glossary

## Files

| File | Purpose |
|------|---------|
| `InputDocuments/Prompt_TestPlan.txt` | The AI prompt (ICCEPO framework) that drives generation |
| `ProvidedDocuments/Product_Requirements_Document.pdf` | PRD for VWO Digital Experience Optimization Platform |
| `ProvidedDocuments/Test_Plan_Template.pdf` | Structural reference used by the AI for layout |
| `OutputDocuments/TestPlan/vwoapp_testplan.md` | Generated test plan in Markdown |
| `OutputDocuments/TestPlan/vwoapp_testplan.pdf` | Generated test plan rendered as PDF |
| `extract_pdf.js` | Debug utility to dump raw text from PDF files |

## Requirements

- Node.js (for `extract_pdf.js`)
- CommandCode AI agent (for running the prompts and generating outputs)
