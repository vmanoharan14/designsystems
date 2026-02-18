# Design: Figma Tokens Generator

## Context

Figma exports design tokens as nested JSON with the following structure:
- Primitive tokens (typography, colors, spacing) at the root level
- Component tokens organized under `components.horizon` and `components.braven`
- Each token has a `$value` and `$type` property

## Goals / Non-Goals

**Goals:**
- Automated token-to-CSS pipeline requiring only Node.js
- Figma stays as the single source of truth
- Generated CSS supports runtime theme switching
- Simple, readable generated CSS output

**Non-Goals:**
- Watch mode for automatic regeneration (future enhancement)
- Validation of token values (trust Figma export)
- CSS minification (keep output readable for debugging)

## Decisions

### Decision 1: Flat CSS Variable Names

Convert nested token paths to flat CSS variable names using hyphens.

**Rationale:** CSS custom properties must be flat. Flattening preserves semantic meaning while being valid CSS.

**Example:**
```
components.horizon.btn.primary.main.$value
→ --btn-primary-main
```

### Decision 2: Separate Files for Primitives and Themes

Generate two CSS files:
- `tokens.css` - Primitives (colors, typography, spacing, shadows)
- `themes.css` - Component tokens organized by theme

**Rationale:** Separation allows importing primitives independently. Theme file can be loaded conditionally if needed.

### Decision 3: Default Theme in :root

Horizon theme tokens go in `:root` as defaults. Both themes also have explicit `[data-theme="..."]` selectors.

**Rationale:** Components work out of the box without setting data-theme. Switching themes is explicit.

**Example:**
```css
:root,
[data-theme="horizon"] {
  --btn-primary-main: #0054a8;
}

[data-theme="braven"] {
  --btn-primary-main: #333988;
}
```

### Decision 4: Simple Node.js Script

Use plain Node.js with fs module, no external dependencies.

**Rationale:** Minimizes dependencies, easy to understand and modify. Token format is stable, no need for build tooling.

## Output Structure

```
dist/
├── tokens.css     # ~200 primitive CSS variables
└── themes.css     # ~200 variables per theme (horizon default, braven override)
```

## Token Processing Logic

```
1. Read tokens-json-v1.1.json
2. Extract primitives:
   - typography-primitive → font-family, font-size, font-weight
   - colors-primitives → all color tokens
   - padding → spacing values
   - radius → border-radius values
   - elevation → shadow values
3. Extract components:
   - components.horizon → [data-theme="horizon"]
   - components.braven → [data-theme="braven"]
4. Flatten nested paths to CSS variable names
5. Generate CSS with proper selectors
6. Write to dist/tokens.css and dist/themes.css
```
