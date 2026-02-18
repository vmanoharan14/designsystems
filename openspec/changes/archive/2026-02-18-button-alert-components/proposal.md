# Proposal: Button and Alert CSS Components

## Why

The design system has token infrastructure (tokens.css, themes.css) but no component implementations. Users need ready-to-use CSS components that leverage the design tokens for consistent styling across projects.

## What Changes

- Add button.css with primary and secondary variants (Figma tokens only)
- Add alert.css with error, warning, success, info variants
- Add HTML examples demonstrating usage with theme switching
- Add testing infrastructure (Vitest + Playwright)

## Capabilities

### New Capabilities

- `button-component`: CSS-based button with variants (primary, secondary) and states (hover, focus, pressed, disabled) - strictly following Figma tokens
- `alert-component`: CSS-based alert with semantic variants (error, warning, success, info)

## Impact

- `dist/components/button.css`: Button styles (primary, secondary only)
- `dist/components/alert.css`: Alert styles
- `examples/button.html`: Button demo
- `examples/alert.html`: Alert demo
- `tests/`: Unit and E2E tests
- `vitest.config.js`: Test configuration
- `playwright.config.js`: E2E test configuration
