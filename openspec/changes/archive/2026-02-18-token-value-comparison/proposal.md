# Proposal: Token Value Comparison Testing

## Why

The design system uses Figma as the single source of truth for design tokens. Currently, we only test that CSS variables exist, but we don't verify that the generated CSS values match the Figma JSON values. This creates risk of token drift where the CSS could contain incorrect values without detection.

## What Changes

- Add comprehensive token value comparison tests
- Verify all 716+ component tokens match between Figma JSON and generated CSS
- Verify all primitive tokens (typography, colors, spacing, radius, elevation) match
- Create reusable token parser utility for extracting and comparing tokens

## Capabilities

### New Capabilities

- `token-verification`: Automated verification that Figma tokens match generated CSS values

## Impact

- `tests/utils/token-parser.js`: NEW - Utility for parsing CSS variables and Figma tokens
- `tests/unit/token-values-primitives.test.js`: NEW - 170 tests for primitive tokens
- `tests/unit/token-values-horizon.test.js`: NEW - 282 tests for horizon theme
- `tests/unit/token-values-braven.test.js`: NEW - 283 tests for braven theme

## Bugs Discovered

During implementation, the tests identified these issues in the token generator:

1. **gray-50 color token**: Exists in Figma JSON but missing from generated CSS
2. **Radius token naming**: CSS uses `--regular` instead of `--radius-regular`
3. **Font weight units**: CSS has `400px` instead of `400` for font weights

These issues are documented in tests and will be addressed in a future fix.
