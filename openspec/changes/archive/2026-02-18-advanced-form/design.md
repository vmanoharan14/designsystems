# Design: Advanced Form Components

## Context

Advanced form components handle specialized input types with complex interactions.

## Goals / Non-Goals

**Goals:**
- Implement date and password components
- Support all states and validation indicators
- Support theme switching

**Non-Goals:**
- JavaScript date validation
- Actual calendar popup (CSS-only styling)
- Password strength calculation

## Decisions

### Decision 1: CSS-only Styling

Components provide CSS styling only, JavaScript behavior added separately.

### Decision 2: Password Strength Visual

Password strength uses CSS classes for different states (weak, fair, strong).
