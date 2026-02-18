# Proposal: Form Controls Components

## Why

Form controls are essential UI elements for user input. This change adds 6 form control components (inputs, dropdown, search, checkboxes, radio, toggle) that use Figma tokens as the source of truth, ensuring visual consistency with the design system.

## What Changes

- Add inputs component (text input styling)
- Add dropdown component (select styling)
- Add search component (search bar styling)
- Add checkboxes component (checkbox styling)
- Add radio component (radio button styling)
- Add toggle component (toggle/switch styling)

## Capabilities

### New Capabilities

- `inputs`: Text input field with states (default, focus, disabled, error)
- `dropdown`: Select dropdown with states
- `search`: Search input with icon
- `checkboxes`: Checkbox controls with states
- `radio`: Radio button controls with states
- `toggle`: Toggle/switch controls with on/off states

## Impact

- `dist/components/inputs.css`: Input field styles
- `dist/components/dropdown.css`: Dropdown styles
- `dist/components/search.css`: Search bar styles
- `dist/components/checkboxes.css`: Checkbox styles
- `dist/components/radio.css`: Radio button styles
- `dist/components/toggle.css`: Toggle styles
- `examples/`: HTML examples for each component
- `tests/`: Unit and E2E tests for all components
