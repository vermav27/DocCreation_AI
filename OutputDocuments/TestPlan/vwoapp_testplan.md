# Test Plan — VWO Digital Experience Optimization Platform

---

## Document Control

| Field | Details |
|---|---|
| **Document Title** | Test Plan — VWO Digital Experience Optimization Platform |
| **Application** | VWO (Visual Website Optimizer) — <https://app.vwo.com/> |
| **Test Environment** | **CPTEST** |
| **Document Version** | 1.0 |
| **Author** | Associate QA Lead |
| **Date** | July 06, 2026 |
| **Status** | Draft for Review |

### Revision History

| Version | Date | Description | Author |
|---|---|---|---|
| 1.0 | July 06, 2026 | Initial Test Plan creation | Associate QA Lead |

### Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Lead | | | |
| Project Manager | | | |
| Client Representative | | | |

---

## Table of Contents

1. [Objective](#1-objective)
2. [Scope](#2-scope)
3. [Test Environment](#3-test-environment)
4. [Features to Test](#4-features-to-test)
5. [Testing Types](#5-testing-types)
6. [Test Strategy](#6-test-strategy)
7. [Entry and Exit Criteria](#7-entry-and-exit-criteria)
8. [Defect Reporting Procedure](#8-defect-reporting-procedure)
9. [Test Schedule](#9-test-schedule)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Tools](#11-tools)
12. [Risks and Mitigations](#12-risks-and-mitigations)
13. [Glossary](#13-glossary)

---

## 1. Objective

The purpose of this test plan is to define the overall testing strategy, approach, resources, and schedule for validating the **VWO (Visual Website Optimizer) — Digital Experience Optimization (DXO) Platform** hosted at **https://app.vwo.com/**.

This test plan is created for the **CPTEST environment**, which will be shared with the client prior to the start of testing. The goal is to ensure the platform meets the functional and non-functional requirements defined in the Product Requirements Document (PRD) and delivers a high-quality, reliable, and secure experience to enterprise users.

The testing will focus on validating the core features such as:
- Experimentation & Testing (A/B, Split URL, Multivariate)
- Behavioral Insights (Heatmaps, Session Recordings, Surveys)
- Personalization Engine
- SmartStats Bayesian Analytics
- Visual & Code Editors
- Audience Targeting
- Real-time Reporting & Dashboards
- Integration Connectors
- Collaboration & Workflow Management

---

## 2. Scope

### 2.1 In Scope

The following features and capabilities from the PRD are within scope for testing on the **CPTEST environment**:

| # | Feature | PRD Reference |
|---|---|---|
| 1 | A/B Testing, Split URL Testing, Multivariate Testing | FR1 |
| 2 | SmartStats Bayesian Statistical Engine | FR2 |
| 3 | Visual Editor (WYSIWYG) & Code Editor | FR3 |
| 4 | Heatmaps & Session Recordings | FR4 |
| 5 | Audience Targeting (behavior & attribute-based) | FR5 |
| 6 | Real-time Reporting & Dashboards | FR6 |
| 7 | Personalization Engine (segment-based content delivery) | FR7 |
| 8 | Integration Connectors (GA, Mixpanel, Shopify, Salesforce, Segment, Snowflake, WordPress, Drupal) | FR8 |
| 9 | Collaboration & Workflow Management (Kanban, planning) | FR9 |

### 2.2 Out of Scope

| Item | Reason |
|---|---|
| Mobile native SDK experimentation | Listed as future enhancement in PRD |
| AI-driven suggestion engine | Listed as future enhancement in PRD |
| Predictive analytics & ROI forecasting | Listed as future enhancement in PRD |
| Third-party system internal testing | Only VWO-side integration validation will be performed |
| Performance/load testing on production | Scope limited to CPTEST environment |
| Security penetration testing | Will be covered under a separate security assessment plan |

### 2.3 User Flows Under Test

The following end-to-end user flows from the PRD will be tested:

1. **Setting Up an A/B Test Flow:**
   - Define hypothesis and target metrics
   - Select audience segment parameters
   - Configure test variations (via visual or code editor)
   - Launch test and monitor progress
   - Review SmartStats results and conclude winner

2. **Analyzing Behavioral Data Flow:**
   - Access VWO Insights dashboard
   - Generate heatmaps, record sessions, set funnels
   - Correlate behavior insights with test outcomes
   - Prioritize optimization ideas

---

## 3. Test Environment

### 3.1 Environment Details

| Parameter | Value |
|---|---|
| **Environment Name** | **CPTEST** |
| **Application URL** | https://app.vwo.com/ (CPTEST instance) |
| **Environment Type** | Staging / UAT |
| **Shared With Client** | Yes — prior to testing start |

### 3.2 Supported Platforms & Browsers

| Platform | Browser | Version(s) |
|---|---|---|
| Windows 10 / 11 | Google Chrome | Latest 2 stable versions |
| Windows 10 / 11 | Mozilla Firefox | Latest 2 stable versions |
| Windows 10 / 11 | Microsoft Edge | Latest 2 stable versions |
| macOS (Ventura / Sonoma) | Safari | Latest 2 stable versions |
| Android Mobile OS | Google Chrome | Latest stable version |
| iOS Mobile OS | Safari Mobile | Latest stable version |

### 3.3 Network Conditions

| Condition | Description |
|---|---|
| Standard Bandwidth | Broadband / Wi-Fi (10+ Mbps) |
| Low Bandwidth | Simulated 3G (1-2 Mbps) for performance checks |
| Mobile Network | 4G / 5G connectivity |

---

## 4. Features to Test

### 4.1 A/B, Split URL & Multivariate Testing (FR1 — Priority: Must)

#### Description
VWO Testing enables users to execute controlled experiments with multiple variations across web pages. This includes A/B Testing (comparing two or more page variants), Split URL Testing (comparing different URLs), and Multivariate Testing (testing multiple element combinations).

#### Test Scenarios

| TC ID | Scenario | Test Data Required | Expected Result |
|---|---|---|---|
| FR1_TC01 | Create a new A/B experiment with two variations | Campaign name, URL, variation content | Experiment created successfully with variations |
| FR1_TC02 | Create a Split URL test pointing variation to a different URL | Control URL, Variation URL | Split URL test created and variations mapped correctly |
| FR1_TC03 | Create a Multivariate test with 3+ element combinations | Page elements, combination matrix | All combinations generated and tracked |
| FR1_TC04 | Pause and resume a running experiment | Active experiment | Experiment pauses/resumes without data loss |
| FR1_TC05 | Stop an experiment manually and declare a winner | Running experiment with sufficient data | Winner declared, results frozen |
| FR1_TC06 | Schedule experiment start and end dates | Future start date, end date | Experiment auto-starts and auto-stops as scheduled |
| FR1_TC07 | QA preview of experiment variations across devices | Experiment with variations | Variations render correctly on desktop, tablet, mobile |
| FR1_TC08 | Delete a draft experiment | Draft experiment (not launched) | Experiment permanently removed |
| FR1_TC09 | Verify experiment cannot be created with empty/invalid URL | Invalid URL, empty fields | Validation error displayed |
| FR1_TC10 | Verify experiment count for free vs paid plan limits | Account with different plan tiers | Limits enforced correctly |

#### Data Requirements
- Valid experiment name (alphanumeric, special chars)
- Valid page URLs (HTTP/HTTPS)
- Variation content (text, images, HTML/CSS changes)
- Audience segment parameters
- Goal metrics (click, conversion, revenue, etc.)

---
 
### 4.2 SmartStats Engine (FR2 — Priority: Must)

#### Description
SmartStats is VWO's Bayesian-powered statistical engine that analyzes experiment results and provides actionable, statistically validated insights. It replaces traditional frequentist approaches with more intuitive probability-based reporting.

#### Test Scenarios

| TC ID | Scenario | Test Data Required | Expected Result |
|---|---|---|---|
| FR2_TC01 | Run an A/B test to completion and verify SmartStats output | Completed experiment with sufficient traffic | SmartStats shows winner with probability and uplift |
| FR2_TC02 | Verify Bayesian probability percentage displayed correctly | Experiment data with known outcome | Probability matches expected Bayesian calculation |
| FR2_TC03 | View confidence intervals and uplift range in report | Completed experiment | Uplift range and confidence interval displayed |
| FR2_TC04 | Verify SmartStats behavior with low-traffic experiment | Low visitor count experiment | Engine shows "Insufficient data" or low confidence warning |
| FR2_TC05 | Test SmartStats on a losing variation | Experiment where variation underperforms | Correctly identifies losing variation with low probability |

#### Data Requirements
- Experiment with sufficient visitor count (1000+ visitors recommended)
- Multiple goal types (click, conversion, revenue)
- Experiment duration of at least 7 days for statistical significance

---

### 4.3 Visual & Code Editor (FR3 — Priority: Must)

#### Description
VWO provides both a WYSIWYG Visual Editor for drag-and-drop experiment setup without coding, and a Code Editor for developer-level custom changes using JavaScript, CSS, and HTML.

#### Test Scenarios

| TC ID | Scenario | Test Data Required | Expected Result |
|---|---|---|---|
| FR3_TC01 | Edit page text using Visual Editor (WYSIWYG) | Target page URL | Text changed without affecting other page elements |
| FR3_TC02 | Change an element's CSS (color, font, position) via Visual Editor | Page element selector | CSS changes applied correctly in preview |
| FR3_TC03 | Hide/remove an element using Visual Editor | Target element | Element no longer visible in variation |
| FR3_TC04 | Insert new HTML element using Visual Editor | HTML content | New element renders correctly in variation |
| FR3_TC05 | Add custom JavaScript using Code Editor | JavaScript snippet | Code executes on variation page without errors |
| FR3_TC06 | Add custom CSS using Code Editor | CSS rules | Styles applied correctly to variation |
| FR3_TC07 | Validate editor changes render correctly on mobile viewport | Editor changes | Responsive rendering works on mobile |
| FR3_TC08 | Undo/redo editor changes | Multiple edits in session | Undo and redo work correctly |
| FR3_TC09 | Save a draft and reload editor with saved changes | Saved draft variation | All changes persist after page reload |
| FR3_TC10 | Preview variation before publishing | Experiment with editor changes | Preview loads with all changes applied |

#### Data Requirements
- Target page URL accessible from CPTEST environment
- Sample text, CSS properties, JavaScript code snippets
- HTML content for insertion

---

### 4.4 Heatmaps & Session Recordings (FR4 — Priority: Must)

#### Description
VWO Insights provides qualitative behavioral data through heatmaps (click, scroll, focus) and session recordings. These tools help teams visualize user interactions and identify UX bottlenecks.

#### Test Scenarios

| TC ID | Scenario | Test Data Required | Expected Result |
|---|---|---|---|
| FR4_TC01 | Generate a click heatmap for a target page | Page URL, minimum visitor threshold | Heatmap displays click density zones |
| FR4_TC02 | Generate a scroll heatmap | Page URL, scroll data | Heatmap shows scroll reach percentage |
| FR4_TC03 | Generate a focus/move heatmap | Page URL, mouse movement data | Focus areas correctly mapped |
| FR4_TC04 | Record and play back a user session | Visitor session data on CPTEST | Session recording plays without errors |
| FR4_TC05 | Filter session recordings by date range | Date range filter | Only sessions in date range displayed |
| FR4_TC06 | Filter session recordings by visitor attribute | Attribute filter (e.g., browser, location) | Filtered results match criteria |
| FR4_TC07 | Create and view a funnel analysis | Funnel steps (e.g., Home > Product > Cart > Checkout) | Funnel shows drop-off at each step |
| FR4_TC08 | Create an on-page survey | Survey question(s), target page | Survey displays correctly on target page |
| FR4_TC09 | View survey response data | Completed survey responses | Responses collected and displayed in dashboard |
| FR4_TC10 | Delete a heatmap or session recording | Existing heatmap/recording | Successfully removed from dashboard |

#### Data Requirements
- Target page URLs with sufficient visitor traffic
- Visitor session data for recording playback
- Funnel step URLs
- Survey questions (text, multiple choice, rating)

---

### 4.5 Audience Targeting (FR5 — Priority: High)

#### Description
VWO enables audience segmentation based on visitor behaviors, attributes, demographics, geography, and custom parameters. Target segments can be applied to experiments and personalized experiences.

#### Test Scenarios

| TC ID | Scenario | Test Data Required | Expected Result |
|---|---|---|---|
| FR5_TC01 | Create audience segment by geographic location | Country, city, region parameters | Segment created and filters correctly |
| FR5_TC02 | Create audience segment by device/browser type | Device type, browser name | Segment targets only matching visitors |
| FR5_TC03 | Create audience segment by behavioral attribute | Pages visited, past purchases | Segment includes only matching users |
| FR5_TC04 | Create audience segment by custom URL parameter | URL parameter key-value pair | Segment matches visitors with parameter |
| FR5_TC05 | Apply audience segment to an A/B test | Experiment + audience segment | Test only shows variation to targeted audience |
| FR5_TC06 | Apply audience segment to a personalization campaign | Campaign + audience segment | Content only delivered to target segment |
| FR5_TC07 | Combine multiple conditions (AND/OR logic) | 2+ segment conditions | Combined logic evaluated correctly |
| FR5_TC08 | Verify non-matching visitor sees control/default | Experiment with audience targeting | Visitor outside segment sees control version |
| FR5_TC09 | Edit an existing audience segment | Existing segment | Changes saved and applied to active experiments |
| FR5_TC10 | Delete an audience segment | Existing segment not in use | Segment removed from list |

#### Data Requirements
- Geographic test data (countries, cities)
- Device/browser user-agent strings
- Custom URL parameters
- Visitor behavioral data

---

### 4.6 Real-time Reporting & Dashboards (FR6 — Priority: Must)

#### Description
VWO delivers up-to-date experiment analytics through dashboards that show real-time metrics, conversion data, and experiment performance. Reports include both leading and lagging indicators.

#### Test Scenarios

| TC ID | Scenario | Test Data Required | Expected Result |
|---|---|---|---|
| FR6_TC01 | View real-time dashboard showing all active experiments | 2+ active experiments | Dashboard lists all experiments with live metrics |
| FR6_TC02 | Verify real-time conversion count updates | Active experiment with visitors | Conversion count updates as visitors convert |
| FR6_TC03 | View experiment-specific detailed report | Completed experiment | Report shows metrics, probability, uplift, visitors |
| FR6_TC04 | Filter dashboard by date range | Date range filter | Dashboard data filtered correctly |
| FR6_TC05 | Filter dashboard by experiment status (draft/running/completed) | Experiments in different states | Filter returns correct subset |
| FR6_TC06 | Export report as CSV/PDF | Report data | File downloads with correct data |
| FR6_TC07 | View guardrail metrics in dashboard | Experiment with guardrail metrics set | Guardrail metrics displayed and tracked |
| FR6_TC08 | Verify dashboard loads within acceptable time | Large dataset (50+ experiments) | Dashboard renders within 2 seconds |
| FR6_TC09 | Test dashboard when no experiments exist | Empty account | Dashboard shows empty state message |
| FR6_TC10 | Schedule automated report email | Email recipients, frequency | Report sent as scheduled |

#### Data Requirements
- Active, draft, and completed experiments
- Visitor traffic generating real-time metrics
- Email configuration for scheduled reports

---

### 4.7 Personalization Engine (FR7 — Priority: High)

#### Description
VWO Personalize enables delivery of tailored user experiences to specific audience segments in real-time, enhancing engagement and conversion rates through targeted content.

#### Test Scenarios

| TC ID | Scenario | Test Data Required | Expected Result |
|---|---|---|---|
| FR7_TC01 | Create a personalization campaign | Campaign name, target page, audience segment | Campaign created successfully |
| FR7_TC02 | Deliver personalized content to a geographic segment | Geo-targeted segment, localized content | User in target geo sees personalized content |
| FR7_TC03 | Deliver personalized content based on past behavior | Behavioral segment, relevant content | Matching user sees personalized content |
| FR7_TC04 | Deliver personalized content in real-time during a session | Visitor browsing session | Content changes without page reload |
| FR7_TC05 | Verify non-segment user sees default content | User outside segment | Default page content displayed |
| FR7_TC06 | Pause and resume a personalization campaign | Running campaign | Campaign pauses/resumes correctly |
| FR7_TC07 | Measure engagement metrics for personalized campaign | Campaign with analytics | Engagement data recorded in dashboard |
| FR7_TC08 | Set campaign end-date and verify auto-stop | Campaign with end date | Campaign auto-stops on scheduled date |
| FR7_TC09 | Duplicate an existing personalization campaign | Existing campaign | Duplicate created with same settings |
| FR7_TC10 | Delete a personalization campaign | Existing campaign (paused) | Campaign removed successfully |

#### Data Requirements
- Audience segments (geographic, behavioral, demographic)
- Personalized content (text, images, offers)
- Visitor behavioral data for real-time matching

---

### 4.8 Integration Connectors (FR8 — Priority: High)

#### Description
VWO integrates with a broad ecosystem of analytics, CRM, commerce, and data platforms including Google Analytics, Mixpanel, Shopify, Salesforce, Segment, Snowflake, WordPress, and Drupal for unified data workflows.

#### Test Scenarios

| TC ID | Scenario | Test Data Required | Expected Result |
|---|---|---|---|
| FR8_TC01 | Configure Google Analytics integration in VWO | GA tracking ID/property | Integration established successfully |
| FR8_TC02 | Verify experiment data sent to Google Analytics | Active experiment, GA configured | GA shows VWO experiment data |
| FR8_TC03 | Configure Mixpanel integration | Mixpanel project token | Integration established successfully |
| FR8_TC04 | Verify VWO data appears in Mixpanel dashboard | Experiment with data | Mixpanel receives and displays VWO events |
| FR8_TC05 | Configure Shopify integration | Shopify store URL, API credentials | Integration established successfully |
| FR8_TC06 | Verify experiment data synced to Shopify | Active experiment on Shopify | Data appears in Shopify dashboard |
| FR8_TC07 | Configure Salesforce integration | Salesforce instance, API credentials | Integration established successfully |
| FR8_TC08 | Configure Segment integration | Segment write key | Data routed through Segment correctly |
| FR8_TC09 | Configure Snowflake integration | Snowflake account details | Data export to Snowflake works |
| FR8_TC10 | Configure WordPress plugin integration | WordPress admin credentials | VWO plugin activates and connects |
| FR8_TC11 | Configure Drupal module integration | Drupal admin credentials | VWO module installs and connects |
| FR8_TC12 | Remove/disconnect an integration and verify data stops flowing | Active integration | Integration removed, no further data sync |
| FR8_TC13 | Verify error handling when integration credentials are invalid | Invalid API key/token | Clear error message displayed |

#### Data Requirements
- API keys, tokens, and credentials for each integration platform
- Test accounts on GA, Mixpanel, Shopify, Salesforce, Segment, Snowflake
- WordPress and Drupal admin access

---

### 4.9 Collaboration & Workflow Management (FR9 — Priority: Medium)

#### Description
VWO Plan / Program Management provides a central planning interface for optimization initiatives, Kanban-style workflows for experiment backlogs, and collaboration tools for distributed teams.

#### Test Scenarios

| TC ID | Scenario | Test Data Required | Expected Result |
|---|---|---|---|
| FR9_TC01 | Create a new experiment idea in the planning board | Experiment name, description, hypothesis | Idea created in backlog |
| FR9_TC02 | Move experiment through Kanban stages (Idea > Draft > Running > Completed) | Experiment in backlog | Experiment moves through workflow stages |
| FR9_TC03 | Add team member as collaborator to an experiment | Team member email/username | Collaborator added with appropriate permissions |
| FR9_TC04 | Add comments/notes to an experiment card | Comment text | Comment saved and visible to team |
| FR9_TC05 | Assign experiment owner to a team member | Team member name | Owner assigned and notified |
| FR9_TC06 | Set experiment priority (High/Medium/Low) | Priority level | Experiment sorted by priority in board |
| FR9_TC07 | Search/filter experiments in planning board | Keyword, status filter | Filtered results match criteria |
| FR9_TC08 | Archive an experiment from planning board | Completed/discarded experiment | Experiment moved to archived state |
| FR9_TC09 | View experiment history and activity log | Experiment with changes/modifications | Activity log shows all changes with timestamps |
| FR9_TC10 | Verify non-collaborator cannot modify someone else's experiment | Experiment owned by another user | Edit/view restrictions applied correctly |

#### Data Requirements
- Multiple team member accounts
- Experiment ideas with descriptions and hypotheses
- Comment and note content

---

## 5. Testing Types

| # | Testing Type | Description |
|---|---|---|
| 1 | **Smoke Testing** | Verify critical functionalities (login, dashboard load, experiment creation) are working after each build deployment |
| 2 | **Functional Testing** | Validate each feature (FR1-FR9) against requirements — verify inputs, outputs, and business logic |
| 3 | **UI/UX Testing** | Verify visual editor changes render correctly, dashboard layouts appear as designed, and cross-browser consistency |
| 4 | **Integration Testing** | Validate VWO's data flow with external platforms (GA, Mixpanel, Shopify, Salesforce, Segment, etc.) |
| 5 | **Regression Testing** | Re-run existing test cases after bug fixes or new deployments to ensure no side effects |
| 6 | **Cross-Browser Testing** | Verify features work on Chrome, Firefox, Edge, Safari (desktop + mobile) |
| 7 | **Usability Testing** | Ensure the platform is intuitive for CRO specialists, product managers, and marketers |
| 8 | **Performance Testing** | Verify page/dashboard load times stay within 2-second threshold for editing workflows |
| 9 | **Security Testing** | Validate 2FA, role-based access control (RBAC), and activity logging |
| 10 | **Data Validation Testing** | Verify SmartStats calculations, conversion tracking accuracy, and data consistency across reports |
| 11 | **Exploratory Testing** | Ad-hoc testing to uncover edge cases not covered by scripted test cases |
| 12 | **End-to-End Flow Testing** | Test complete user journeys (e.g., create experiment > launch > analyze results > report) |

---

## 6. Test Strategy

### 6.1 Approach

The testing will follow a **phased approach**:

1. **Requirement Analysis Phase**: Review PRD, identify testable requirements, and create traceability.
2. **Test Planning Phase**: Finalize scope, environment, resources, and schedule — this document.
3. **Test Design Phase**: Create detailed test scenarios and test cases using the following techniques:
   - **Equivalence Class Partitioning** — for input validation (e.g., experiment name length, URL formats)
   - **Boundary Value Analysis** — for numeric limits (e.g., visitor count, variation limits)
   - **Decision Table Testing** — for audience targeting logic (AND/OR conditions)
   - **State Transition Testing** — for experiment lifecycle (Draft > Running > Paused > Completed > Archived)
   - **Use Case Testing** — for end-to-end user flows
   - **Error Guessing** — for common edge cases and failure scenarios
   - **Exploratory Testing** — for uncovering unexpected issues
4. **Test Execution Phase**:
   - **Step 1**: Smoke testing on CPTEST build
   - **Step 2**: If smoke passes — proceed with in-depth functional testing
   - **Step 3**: Execute regression test suite
   - **Step 4**: Report defects in JIRA with severity and priority
   - **Step 5**: Daily status report to stakeholders
5. **Test Closure Phase**: Prepare test summary report, get sign-off

### 6.2 Test Prioritization

| Priority | Criteria | Features |
|---|---|---|
| **P0 — Critical** | Must-have; core platform functionality | FR1, FR2, FR3, FR4, FR6 |
| **P1 — High** | Important for business value; high impact | FR5, FR7, FR8 |
| **P2 — Medium** | Nice-to-have; lower business impact | FR9 |
| **P3 — Low** | Edge cases, UI polish, minor enhancements | Derived from exploratory testing |

### 6.3 Test Data Strategy

- Use synthetic visitor data generated on CPTEST environment
- Create dedicated test accounts for each user role (Admin, Editor, Viewer)
- Use sandbox/test instances of integrated platforms (GA test property, Mixpanel test project, Shopify dev store)
- Maintain a test data sheet with all credentials and test parameters

---

## 7. Entry and Exit Criteria

### 7.1 Test Execution Phase

| Criteria Type | Criteria |
|---|---|
| **Entry Criteria** | • CPTEST environment is ready and accessible<br>• Test data is seeded (experiments, visitors, sessions)<br>• Test cases are reviewed and approved<br>• Smoke tests pass on the build<br>• All team members have access to JIRA and CPTEST |
| **Exit Criteria** | • All P0 and P1 test cases are executed<br>• No open Critical (P0) defects<br>• All P0/P1 defects are triaged and assigned<br>• Test execution report is shared with stakeholders |

### 7.2 Test Closure Phase

| Criteria Type | Criteria |
|---|---|
| **Entry Criteria** | • Test execution is complete<br>• Defect reports are ready and shared |
| **Exit Criteria** | • Test Summary Report is prepared and approved<br>• All critical and high defects are resolved or deferred with client approval<br>• Lessons learned document is created<br>• Test artifacts are archived |

---

## 8. Defect Reporting Procedure

### 8.1 Defect Lifecycle

1. **New** — Tester logs the defect in JIRA
2. **Triaged** — QA Lead reviews and assigns severity/priority
3. **Assigned** — Developer assigned for fix
4. **In Progress** — Developer is working on fix
5. **Fixed** — Developer marks as fixed with resolution notes
6. **Ready for Retest** — Tester verifies fix on CPTEST
7. **Closed** — Fix verified and defect closed
8. **Reopened** — If the fix fails verification or issue reoccurs

### 8.2 Severity & Priority Matrix

| Severity | Priority | Description | Example |
|---|---|---|---|
| **Critical (S1)** | **P0** | System crash, data loss, core feature broken | Experiment cannot be created, login failure |
| **Major (S2)** | **P1** | Feature partially broken, workaround available | SmartStats not showing probability, report export fails |
| **Minor (S3)** | **P2** | Cosmetic issues, non-critical UI problems | Misaligned element in visual editor, typo in label |
| **Trivial (S4)** | **P3** | Low impact, enhancement suggestions | Tooltip text not descriptive, color contrast suggestion |

### 8.3 Defect Report Template

| Field | Description |
|---|---|
| **Summary** | Brief title of the defect (e.g., "A/B test variations not rendering on Safari") |
| **Environment** | CPTEST |
| **Feature** | FR1 / FR3 / etc. |
| **Steps to Reproduce** | 1. Go to... 2. Click on... 3. Observe... |
| **Actual Result** | What actually happened |
| **Expected Result** | What should have happened |
| **Severity** | Critical / Major / Minor / Trivial |
| **Priority** | P0 / P1 / P2 / P3 |
| **Attachment** | Screenshot, video, or logs |
| **Reported By** | Tester name |

### 8.4 Defect Point of Contact

| Area | Contact |
|---|---|
| Frontend | Dev Lead (Frontend) |
| Backend | Dev Lead (Backend) |
| DevOps / Environment | DevOps Lead |
| **Defect Tracking Tool** | **JIRA** |

---

## 9. Test Schedule

| Phase | Task | Duration | Start Date | End Date |
|---|---|---|---|---|
| **Planning** | Test Plan creation and review | 3 days | TBD | TBD |
| **Design** | Test Scenario & Test Case creation | 5 days | TBD | TBD |
| **Design** | Test Case review and sign-off | 2 days | TBD | TBD |
| **Execution — Cycle 1** | Smoke testing, functional testing, defect reporting | 10 days | TBD | TBD |
| **Execution — Cycle 2** | Regression testing, retesting fixes | 5 days | TBD | TBD |
| **Closure** | Test Summary Report, Lessons Learned | 2 days | TBD | TBD |
| **Total** | | **~27 working days** | | |

*Note: Exact dates to be finalized upon project kick-off.*

---

## 10. Roles and Responsibilities

| Role | Name | Responsibilities |
|---|---|---|
| **QA Lead** | Associate QA Lead | • Define test strategy and plan<br>• Review test cases<br>• Track defects and report status<br>• Liaise with client and management |
| **QA Engineers (3-4)** | TBD | • Create and execute test cases<br>• Report and verify defects<br>• Perform cross-browser and regression testing<br>• Provide daily status updates |
| **Development Lead** | TBD | • Coordinate defect fixes<br>• Provide build updates<br>• Support environment stability |
| **Project Manager** | TBD | • Approve test plan and schedule<br>• Resource management<br>• Escalation point |
| **Client / Stakeholder** | TBD | • Review and approve test plan<br>• Sign-off on test completion<br>• Provide feedback on strategy |

---

## 11. Tools

| Tool | Purpose |
|---|---|
| **JIRA** | Defect tracking, test case management, project tracking |
| **Google Chrome DevTools** | DOM inspection, console logs, network monitoring |
| **BrowserStack / Sauce Labs** | Cross-browser and cross-device testing |
| **Postman** | API integration testing (for integration connectors) |
| **Microsoft Excel / Google Sheets** | Test case documentation and traceability matrix |
| **Confluence / SharePoint** | Test plan and report repository |
| **Snipping Tool / Snagit** | Screenshot capture for defect reporting |
| **Lighthouse / GTmetrix** | Performance validation (load times) |
| **Clockify / Toggl** | Time tracking for testing activities |

---

## 12. Risks and Mitigations

| # | Risk | Impact | Probability | Mitigation |
|---|---|---|---|---|
| R1 | **CPTEST environment downtime / instability** | Blocks testing progress | Medium | • Maintain backup test scripts<br>• Have offline review tasks ready |
| R2 | **Resource unavailability (team member leave/attrition)** | Delays in test execution | Medium | • Cross-train team members<br>• Maintain resource backup plan |
| R3 | **Insufficient test data for SmartStats validation** | Inconclusive statistical results | High | • Use synthetic traffic generators<br>• Create data seeding scripts |
| R4 | **Integration connector test accounts not available** | Integration testing blocked | Medium | • Procure credentials early in planning phase<br>• Use sandbox/free tiers |
| R5 | **Tight timeline — reduced testing window** | Incomplete test coverage | Medium | • Prioritize P0/P1 test cases<br>• Ramp up resources if needed |
| R6 | **Cross-browser compatibility issues discovered late** | Rework and delays | Low | • Start cross-browser testing early in Cycle 1 |
| R7 | **Build quality issues (smoke test failures)** | Repeated cycle delays | Medium | • Define clear acceptance criteria for builds<br>• Communicate build quality expectations to dev team |

---

## 13. Glossary

This glossary explains technical terms used in this test plan in simple language for easy understanding by all team members and management.

| Term | Simple Definition |
|---|---|
| **A/B Testing** | A method where two versions of a web page (A and B) are shown to visitors to see which performs better on a goal |
| **Audience Targeting** | Showing specific content or experiments only to a selected group of visitors based on their characteristics |
| **Bayesian Statistics** | A statistical method that calculates the probability of one variation being better than another, updating as more data comes in |
| **BVA (Boundary Value Analysis)** | A testing technique that checks values at the edges of allowed input ranges (e.g., minimum and maximum) |
| **CCPA** | California Consumer Privacy Act — a US law that protects residents' personal data privacy |
| **CRO (Conversion Rate Optimization)** | The process of improving the percentage of website visitors who take a desired action (buy, sign up, etc.) |
| **Dashboard** | A visual screen that shows key metrics and data in charts, graphs, and tables at a glance |
| **Decision Table Testing** | A testing technique that maps different combinations of inputs to their expected outputs |
| **DXO (Digital Experience Optimization)** | The practice of improving how users interact with a digital product (website/app) to achieve better business outcomes |
| **ECP (Equivalence Class Partitioning)** | A testing technique that divides input data into groups where all values in a group behave the same way |
| **Funnel** | The step-by-step path a user follows on a website (e.g., Homepage → Product Page → Cart → Checkout) |
| **GDPR** | General Data Protection Regulation — a European law that protects personal data and privacy |
| **Guardrail Metrics** | Safety metrics monitored during experiments to ensure changes don't negatively impact other business areas |
| **Heatmap** | A visual map showing where users click, scroll, or focus most on a webpage — hot areas show high activity |
| **Kanban** | A visual workflow management method using cards and columns to track work stages (e.g., To Do → In Progress → Done) |
| **KPIs (Key Performance Indicators)** | Measurable values that show how well the platform or business is achieving its goals |
| **Lagging Indicators** | Metrics that show results after they happen (e.g., total conversions after an experiment ends) |
| **Leading Indicators** | Metrics that predict future outcomes (e.g., early engagement data during an experiment) |
| **Multivariate Testing** | Testing multiple combinations of page elements at once to find the best performing combination |
| **Personalization** | Delivering customized content, offers, or experiences to individual users based on their profile or behavior |
| **RBAC (Role-Based Access Control)** | A security approach where users get access permissions based on their role (Admin, Editor, Viewer) |
| **Regression Testing** | Re-running tests after code changes to make sure existing features still work correctly |
| **Session Recording** | A video-like recording of a visitor's browsing session showing mouse movements, clicks, and page interactions |
| **SLA (Service Level Agreement)** | A commitment about the expected uptime/performance of the system (e.g., 99.9% uptime = less than 9 hours downtime per year) |
| **SmartStats** | VWO's built-in statistics engine that uses Bayesian methods to analyze experiment results |
| **Smoke Testing** | A quick check of the most critical functions to decide if the build is stable enough for detailed testing |
| **Split URL Testing** | An experiment where different URLs are compared against each other (e.g., current page vs. a redesigned page) |
| **State Transition Testing** | A testing technique that checks if a system correctly moves between different states (e.g., Draft → Running → Completed) |
| **UAT (User Acceptance Testing)** | Testing done by end-users or clients to confirm the system meets their needs |
| **Variation** | A changed version of a webpage created for testing against the original (control) version |
| **WYSIWYG (What You See Is What You Get)** | An editor where changes made visually on screen match exactly what the end-user will see |
| **2FA (Two-Factor Authentication)** | An extra layer of security requiring a code from a phone/app in addition to a password |
| **99.9% Uptime** | The system is available 99.9% of the time — equals approximately 8.76 hours of downtime allowed per year |

---

## Document Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| QA Lead | | | |
| Project Manager | | | |
| Client Representative | | | |

---

*End of Test Plan — VWO Digital Experience Optimization Platform*
