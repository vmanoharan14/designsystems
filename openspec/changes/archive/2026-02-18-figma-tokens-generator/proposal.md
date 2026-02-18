# Proposal: Figma Tokens Generator

## Why

Figma serves as the source of truth for design tokens, but currently there's no automated way to convert these tokens into usable CSS. This creates a manual sync problem where code can drift from design.

## What Changes

- Node.js script that reads `tokens-json-v1.1.json` and generates CSS custom properties
- CSS output for primitive tokens (typography, colors, spacing, etc.)
- CSS output for theme-specific component tokens (horizon/braven)
- Build script in package.json to regenerate CSS from tokens

## Capabilities

### New Capabilities

- `token-generation`: Automated CSS custom property generation from Figma JSON export
- `theme-tokens`: CSS variables organized by theme (horizon/braven) for runtime switching

## Impact

- `package.json`: New file with build script
- `build/generate-tokens.js`: New token-to-CSS converter script
- `dist/tokens.css`: Generated primitive tokens
- `dist/themes.css`: Generated theme component tokens
