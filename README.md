# QA-Automation-Case-Study


## Overview

This repository contains my solution for the **Bynry Inc. QA Automation Engineering Case Study**.

The objective of this assessment is to demonstrate automation testing skills by designing a scalable automation framework, identifying and fixing flaky tests, and implementing an API + UI integration testing workflow for a fictional B2B SaaS platform called **WorkFlow Pro**.

---

# Tech Stack

- Playwright
- TypeScript
- Node.js
- Axios
- JSON Test Data
- BrowserStack (Conceptual Integration)
- GitHub Actions (CI/CD Concept)

---

# Project Structure

```
QA-Automation-Case-Study
│
├── api
│   ├── authApi.ts
│   └── projectApi.ts
│
├── config
│   ├── browserConfig.ts
│   └── env.ts
│
├── pages
│   ├── BasePage.ts
│   ├── DashboardPage.ts
│   ├── LoginPage.ts
│   └── ProjectPage.ts
│
├── reports
│
├── screenshots
│
├── test-data
│   ├── projects.json
│   ├── tenants.json
│   └── users.json
│
├── tests
│   ├── login.spec.ts
│   ├── multiTenant.spec.ts
│   └── projectCreation.spec.ts
│
├── utils
│   ├── apiHelper.ts
│   ├── browserHelper.ts
│   ├── helper.ts
│   └── logger.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# Framework Design

The framework follows the **Page Object Model (POM)** design pattern.

```
                Test Scripts
                     │
                     ▼
             Page Object Model
                     │
      ┌──────────────┼──────────────┐
      ▼              ▼              ▼
 Utilities      API Layer     Configuration
      │              │              │
      └──────────────┼──────────────┘
                     ▼
                Playwright Engine
                     │
                     ▼
      Browser / BrowserStack / Mobile
```

---

# Features

- UI Automation using Playwright
- API Testing using Axios
- Page Object Model (POM)
- Multi-Tenant Testing
- Cross Browser Testing
- Mobile Testing Strategy
- BrowserStack Integration (Conceptual)
- CI/CD Ready Structure
- JSON Based Test Data
- Reusable Utility Classes
- Modular Framework

---

# Test Scenarios Covered

## Part 1

- Login Validation
- Multi Tenant Validation
- Flaky Test Improvements
- Synchronization
- Explicit Waits
- Reliable Assertions

---

## Part 2

- Framework Design
- Configuration Management
- Browser Configuration
- Environment Management
- Test Data Strategy
- BrowserStack Integration
- CI/CD Architecture

---

## Part 3

- API Project Creation
- UI Validation
- Cross Browser Validation
- Mobile Validation Strategy
- Tenant Isolation Validation

---

# Test Data

The framework uses external JSON files instead of hardcoded values.

Example:

- users.json
- projects.json
- tenants.json

This makes test data reusable and easier to maintain.

---

# Configuration

Configuration is maintained separately.

Example:

- Base URL
- Browser
- Timeout
- Tenant
- Credentials

This enables execution across multiple environments without modifying test scripts.

---

# Browser Support

Desktop Browsers

- Chromium
- Firefox
- Safari (WebKit)

Mobile (BrowserStack Concept)

- Android
- iPhone

---

# BrowserStack Integration

The framework is designed to support BrowserStack execution.

Typical execution flow:

```
Playwright Tests

↓

BrowserStack

↓

Chrome

↓

Firefox

↓

Safari

↓

Android

↓

iPhone
```

---

# CI/CD Integration

The framework is designed for CI/CD execution.

```
Developer Push

↓

GitHub

↓

GitHub Actions

↓

Install Dependencies

↓

Execute Playwright Tests

↓

Generate Reports

↓

Store Screenshots

↓

Publish Results
```

---

# Assumptions

Since WorkFlow Pro is a fictional application, the following assumptions were made:

- Test accounts are available.
- Authentication tokens are pre-generated.
- Test accounts bypass 2FA.
- BrowserStack credentials are configured through environment variables.
- Test data cleanup is performed after execution.
- Tenant isolation exists between Company1 and Company2.
- Dashboard loads asynchronously.

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Move inside the project

```bash
cd QA-Automation-Case-Study
```

Install dependencies

```bash
npm install
```

Install Axios

```bash
npm install axios
```

Install Dotenv

```bash
npm install dotenv
```

Install Playwright Browsers

```bash
npx playwright install
```

---

# Execute Tests

Run all tests

```bash
npx playwright test
```

Run Login Tests

```bash
npx playwright test tests/login.spec.ts
```

Run Multi Tenant Tests

```bash
npx playwright test tests/multiTenant.spec.ts
```

Run Project Integration Test

```bash
npx playwright test tests/projectCreation.spec.ts
```

---

# Reports

Playwright automatically generates execution reports.

To open the HTML report:

```bash
npx playwright show-report
```

Screenshots are captured on failures.

---

# Design Principles

This framework follows:

- Scalability
- Maintainability
- Reusability
- Modularity
- Separation of Concerns
- Cross Platform Compatibility
- CI/CD Readiness

---

# Future Enhancements

- Real BrowserStack Integration
- Allure Reporting
- Parallel Execution
- Docker Support
- Jenkins Pipeline
- Retry Mechanism
- Environment Variables (.env)
- Dynamic Test Data Generation
- API Mocking
- Database Validation

---

# Notes

The WorkFlow Pro application and API endpoints referenced in this repository are part of the case study and are fictional.

The implementation focuses on demonstrating framework design, automation strategy, code organization, and testing best practices rather than executing against a live application.

---

# Author

**Himanshu Chougule**

QA Automation Engineer Case Study Submission

Bynry Inc.