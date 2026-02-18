# Proposal: Advanced Form Components

## Why

Advanced form components provide specialized input handling for dates and passwords. This change adds 2 components (date, password) using Figma tokens.

## What Changes

- Add date picker component (date selection)
- Add password input component (password with strength indicator)

## Capabilities

### New Capabilities

- `date-picker`: Date selection with calendar and states
- `password-input`: Password input with visibility toggle and strength indicator

## Impact

- dist/components/date.css: Date picker styles
- dist/components/password.css: Password input styles
- examples/: HTML examples
- tests/: Unit and E2E tests
