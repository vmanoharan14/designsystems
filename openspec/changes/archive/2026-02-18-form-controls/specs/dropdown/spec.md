# Spec: Dropdown Component

## ADDED Requirements

### Requirement: Dropdown Rendering

The system SHALL render dropdown component using Figma token values.

#### Scenario: Default state

- **WHEN** a dropdown with class `.dropdown` is rendered
- **THEN** the component SHALL use typography tokens for font
- **AND** the component SHALL use appropriate tokens for styling

#### Scenario: Focus state

- **WHEN** a dropdown receives focus
- **THEN** the visual state SHALL change to indicate focus

#### Scenario: Disabled state

- **WHEN** a dropdown has disabled attribute
- **THEN** the component SHALL use disabled token values
