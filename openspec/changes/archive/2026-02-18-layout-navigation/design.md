# Design: Layout & Navigation Components

## Context

Layout and navigation components define application structure and user flow. This change implements 6 layout/navigation components using CSS custom properties from Figma tokens.

## Goals / Non-Goals

**Goals:**
- Implement header, footer, sidebar, breadcrumb, pagination, modal
- Support all states and responsive behavior
- Support theme switching (horizon/braven)

**Non-Goals:**
- Responsive breakpoints (uses existing CSS)
- JavaScript routing
- Animation libraries

## Decisions

### Decision 1: CSS-only Modal

Modal uses CSS classes for open/close state (no JavaScript animation).

**Rationale:**
- Simpler implementation
- Works with any JavaScript framework
- CSS transitions for smooth animations

### Decision 2: Flexbox Layout

All layout components use flexbox for structure.

**Rationale:**
- Better browser support than grid for this use case
- Easier responsive adjustments
- Consistent with other components

### Decision 3: Semantic HTML

Components designed for semantic HTML elements (header, nav, aside, footer).

**Rationale:**
- Better accessibility
- Better SEO
- Standard HTML5 practices
