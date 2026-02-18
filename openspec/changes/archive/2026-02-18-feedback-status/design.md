# Design: Feedback & Status Components

## Context

Feedback components communicate system status, progress, and contextual information to users. This change implements 6 feedback/status components using CSS custom properties from Figma tokens.

## Goals / Non-Goals

**Goals:**
- Implement badges, chip, progress, preloader, tooltips, disclaimers
- Support all states and variants
- Support theme switching (horizon/braven)
- Follow Figma tokens strictly

**Non-Goals:**
- JavaScript-based progress animations
- Toast notifications (future work)
- Modal-based tooltips (future work)

## Decisions

### Decision 1: CSS-only Animations

Preloader spinner and progress animations use CSS keyframes only (no JavaScript).

**Rationale:**
- Better performance
- Works without JavaScript
- Easier to implement

### Decision 2: Tooltip Hover Trigger

Tooltips use CSS :hover pseudo-class for show/hide (no JavaScript).

**Rationale:**
- Native browser behavior
- Accessible with keyboard focus
- Smaller bundle size

### Decision 3: Progress Indeterminate State

Progress bar supports indeterminate state via CSS animation class.

**Rationale:**
- Common UX pattern
- CSS-only implementation
- Easy to toggle via class

### Decision 4: Component Variants

Each component has semantic variants matching Figma tokens:
- badges: default, primary, success, warning, error
- chip: default, primary, selected, disabled
- progress: default, small, large, indeterminate
- preloader: small, default, large, with text
- tooltips: top, bottom, left, right
- disclaimers: info, warning, error, success
