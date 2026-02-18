# Tasks: Button and Alert Components

## 1. Button Component CSS (Figma Tokens Only)

- [x] 1.1 Create `dist/components/button.css`
- [x] 1.2 Define `.btn` base styles (reset, font, padding, radius, transition)
- [x] 1.3 Define `.btn-primary` with all states (hover, focus, active, disabled)
- [x] 1.4 Define `.btn-secondary` with all states
- [x] 1.5 ~~Define `.btn-tertiary`~~ REMOVED (not in Figma)
- [x] 1.6 ~~Define `.btn-sm`~~ REMOVED (not in Figma)
- [x] 1.7 ~~Define `.btn-lg`~~ REMOVED (not in Figma)

## 2. Alert Component CSS

- [x] 2.1 Create `dist/components/alert.css`
- [x] 2.2 Define `.alert` base styles (padding, radius, typography)
- [x] 2.3 Define `.alert__title` and `.alert__body` elements
- [x] 2.4 Define `.alert-error` variant
- [x] 2.5 Define `.alert-warning` variant
- [x] 2.6 Define `.alert-success` variant
- [x] 2.7 Define `.alert-info` variant

## 3. Examples

- [x] 3.1 Create `examples/button.html` (primary + secondary only)
- [x] 3.2 Add theme switcher to button.html
- [x] 3.3 Create `examples/alert.html` with all alert variants
- [x] 3.4 Add theme switcher to alert.html

## 4. Testing Infrastructure

- [x] 4.1 Install vitest, @vitest/ui
- [x] 4.2 Install @playwright/test, playwright
- [x] 4.3 Create `vitest.config.js`
- [x] 4.4 Create `playwright.config.js`
- [x] 4.5 Add test scripts to package.json

## 5. Unit Tests (Vitest)

- [x] 5.1 Create `tests/unit/tokens.test.js` - verify tokens exist
- [x] 5.2 Create `tests/unit/button.test.js` - verify button CSS
- [x] 5.3 Create `tests/unit/alert.test.js` - verify alert CSS

## 6. E2E Tests (Playwright)

- [x] 6.1 Create `tests/e2e/button.spec.js` - visual + interaction
- [x] 6.2 Create `tests/e2e/alert.spec.js` - visual + interaction
- [x] 6.3 Add theme switching tests
- [x] 6.4 Add visual screenshot tests

## 7. Verify & Archive

- [x] 7.1 Run `npm run test:unit` - all unit tests pass
- [x] 7.2 Run `npm run test:e2e` - all e2e tests pass
- [x] 7.3 Verify horizon theme renders correctly
- [x] 7.4 Verify braven theme renders correctly
- [x] 7.5 Archive `figma-tokens-generator` change
- [x] 7.6 Archive `button-alert-components` change
