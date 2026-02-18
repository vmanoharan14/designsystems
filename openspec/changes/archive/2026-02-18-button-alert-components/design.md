# Design: Button and Alert Components

## Context

The design system has token infrastructure (tokens.css with primitives, themes.css with component tokens). We need to create CSS components that consume these tokens, enabling theme-aware styling without JavaScript.

## Goals / Non-Goals

**Goals:**
- CSS-only components (no JavaScript required for styling)
- Theme-aware via CSS custom properties
- Framework-agnostic (works in HTML, React, Angular, Vue)
- **Strictly follow Figma tokens as source of truth**

**Non-Goals:**
- React/Angular wrapper components (future work)
- JavaScript behavior (onclick handlers, etc.)
- Animation beyond CSS transitions
- Derived variants not in Figma (no sm/lg sizes, no tertiary)

## Decisions

### Decision 1: Figma as Source of Truth (CRITICAL)

**Only implement what exists in Figma tokens.** No derived or assumed variants.

| Variant    | In Figma? | Status  |
| ---------- | --------- | ------- |
| Primary    | Yes       | ✓       |
| Secondary  | Yes       | ✓       |
| Tertiary   | No        | ✗       |
| sm size    | No        | ✗       |
| lg size    | No        | ✗       |
| Icon-only  | No        | ✗       |

### Decision 2: CSS Class Naming Convention

Use BEM-inspired but simplified naming:
- `.btn` - base class
- `.btn-primary` - variant modifier
- `.btn-secondary` - variant modifier

**Rationale:** Simple, clear, works everywhere.

### Decision 3: Token Usage

All colors, spacing, typography, and radii come from CSS custom properties defined in tokens.css and themes.css.

```css
/* Do this */
.btn-primary {
  background: var(--btn-primary-main);
}

/* Never this */
.btn-primary {
  background: #0054a8;
}
```

**Rationale:** Ensures theme switching works automatically. Figma stays source of truth.

### Decision 4: State Implementation

Use CSS pseudo-classes for states:
- `:hover` - hover state
- `:focus` / `:focus-visible` - focus state
- `:active` - pressed state
- `:disabled` - disabled state

**Rationale:** Native browser support, no JavaScript needed, accessible by default.

### Decision 5: Testing Strategy

| Test Type   | Tool       | Purpose                              |
| ----------- | ---------- | ------------------------------------ |
| Unit        | Vitest     | Verify CSS tokens exist, class names |
| E2E         | Playwright | Visual regression, theme switching   |
| Visual      | Playwright | Screenshot comparison                |
| A11y        | Playwright | Accessibility checks                 |

### Decision 6: File Organization

```
dist/
├── tokens.css          (primitives - from Phase 1)
├── themes.css          (component tokens - from Phase 1)
└── components/
    ├── button.css      (primary + secondary only)
    └── alert.css       (all variants)

tests/
├── unit/
│   ├── tokens.test.js
│   ├── button.test.js
│   └── alert.test.js
└── e2e/
    ├── button.spec.js
    └── alert.spec.js
```

## Component Structure

### Button CSS Structure

```
.btn                    Base styles (all buttons)
├── :hover              Base hover
├── :focus-visible      Base focus ring
├── :active             Base pressed
├── :disabled           Base disabled

.btn-primary            Primary variant
├── :hover              Primary hover
├── :focus-visible      Primary focus
├── :active             Primary pressed
└── :disabled           Primary disabled

.btn-secondary          Secondary variant (outlined)
├── :hover              Secondary hover
├── :focus-visible      Secondary focus
├── :active             Secondary pressed
└── :disabled           Secondary disabled
```

### Alert CSS Structure

```
.alert                  Base styles (all alerts)
├── .alert__title       Title element (optional)
└── .alert__body        Body text element

.alert-error            Error variant
.alert-warning          Warning variant
.alert-success          Success variant
.alert-info             Info variant
```
