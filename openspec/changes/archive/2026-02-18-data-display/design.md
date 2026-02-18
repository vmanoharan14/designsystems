# Design: Data Display Components

## Context

Data display components present information in various structured formats.

## Goals / Non-Goals

**Goals:**
- Implement avatar, card, list, data, accordions, text components
- Support all states and variants
- Support theme switching

**Non-Goals:**
- JavaScript sorting/filtering
- Virtual scrolling
- Infinite scroll

## Decisions

### Decision 1: Table-based Data

Data tables use native HTML table elements for semantics.

### Decision 2: CSS-only Accordion

Accordions use CSS classes for open/close (JS toggles class only).

### Decision 3: Avatar Fallback

Avatars show initials when no image is provided.
