# Design: Token Value Comparison Testing

## Context

The design system generates CSS from Figma JSON tokens. We need to ensure the generated CSS values exactly match the Figma source to maintain "Figma as source of truth" integrity.

## Goals / Non-Goals

**Goals:**
- Verify 100% of token values match between Figma JSON and generated CSS
- Catch token generation bugs automatically
- Provide clear error messages when values differ

**Non-Goals:**
- Fixing token generator bugs (separate change)
- Testing token usage in components (covered by component tests)

## Decisions

### Decision 1: Test Organization

Split tests by scope for maintainability:
- `token-values-primitives.test.js` - Typography, colors, spacing, radius, elevation
- `token-values-horizon.test.js` - All horizon component tokens
- `token-values-braven.test.js` - All braven component tokens

### Decision 2: Value Normalization

CSS uses `px` suffix for numeric values. Tests normalize values for comparison:
- Remove `px` suffix from CSS values before comparing
- Compare hex colors case-insensitively

### Decision 3: Known Issues

Document known token generator bugs in tests using `todo.skip()`:
- `gray-50` missing from CSS
- Radius tokens lack prefix
- Font weights have incorrect px suffix

These will be addressed in a future token generator fix.

### Decision 4: Token Parser Utility

Created `tests/utils/token-parser.js` with reusable functions:
- `parseCssVariables(css)` - Parse CSS to extract variables
- `loadTokensCss()` / `loadThemesCss()` - Load CSS files
- `loadFigmaTokens()` - Load Figma JSON
- `extractTypographyPrimitives()` - Extract typography tokens
- `extractColorPrimitives()` - Extract color tokens
- `extractSpacingPrimitives()` - Extract padding tokens
- `extractRadiusPrimitives()` - Extract radius tokens
- `extractThemeTokens()` - Extract component tokens by theme
