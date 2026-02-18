# Design: Form Controls Components

## Context

Form controls are the primary means of user input in web applications. This change implements 6 form control components using CSS custom properties from Figma tokens, with theme switching support.

## Goals / Non-Goals

**Goals:**
- Implement inputs, dropdown, search, checkboxes, radio, toggle components
- Support all states (default, hover, focus, disabled, error)
- Support theme switching (horizon/braven)
- Follow Figma tokens strictly

**Non-Goals:**
- JavaScript form validation
- Custom dropdown with search
- Date picker (future phase)
- File upload (future phase)

## Decisions

### Decision 1: Native Form Elements

Use native HTML form elements (`<input>`, `<select>`, `<checkbox>`, `<radio>`) styled with CSS classes rather than custom implementations.

**Rationale:**
- Better accessibility (native keyboard navigation)
- Better form submission handling
- Smaller bundle size
- Easier to implement

### Decision 2: CSS Class Naming

Use component-prefixed class names to avoid conflicts:
- `.input-text`, `.input-text-error`
- `.dropdown`, `.dropdown-option`
- `.search-bar`
- `.checkbox`, `.checkbox-input`, `.checkbox-label`
- `.radio`, `.radio-input`, `.radio-label`
- `.toggle`, `.toggle-input`, `.toggle-slider`

### Decision 3: Toggle Implementation

Toggle uses checkbox input with CSS-only slider animation (no JavaScript).

**Rationale:**
- Accessible (uses native checkbox)
- Works without JavaScript
- Smooth CSS transitions

### Decision 4: Dependency Order

Components implemented in dependency order:
1. inputs (base styles)
2. dropdown (extends input border styles)
3. search (extends input styles with icon)
4. checkboxes (independent)
5. radio (independent)
6. toggle (independent)
