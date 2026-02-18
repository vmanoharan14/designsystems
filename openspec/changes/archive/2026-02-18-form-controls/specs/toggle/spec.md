# Spec: Toggle Component

## ADDED Requirements

### Requirement: Toggle Rendering

The system SHALL render toggle component using Figma token values.

#### Scenario: Default state

- **WHEN** a toggle with class `.toggle` is rendered
- **THEN** the component SHALL use typography tokens for font
- **AND** the component SHALL use appropriate tokens for styling

#### Scenario: Focus state

- **WHEN** a toggle receives focus
- **THEN** the visual state SHALL change to indicate focus

#### Scenario: Disabled state

- **WHEN** a toggle has disabled attribute
- **THEN** the component SHALL use disabled token values
