# Spec: Checkboxes Component

## ADDED Requirements

### Requirement: Checkboxes Rendering

The system SHALL render checkboxes component using Figma token values.

#### Scenario: Default state

- **WHEN** a checkboxes with class `.checkboxes` is rendered
- **THEN** the component SHALL use typography tokens for font
- **AND** the component SHALL use appropriate tokens for styling

#### Scenario: Focus state

- **WHEN** a checkboxes receives focus
- **THEN** the visual state SHALL change to indicate focus

#### Scenario: Disabled state

- **WHEN** a checkboxes has disabled attribute
- **THEN** the component SHALL use disabled token values
