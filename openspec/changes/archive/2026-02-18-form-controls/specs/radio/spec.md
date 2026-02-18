# Spec: Radio Component

## ADDED Requirements

### Requirement: Radio Rendering

The system SHALL render radio component using Figma token values.

#### Scenario: Default state

- **WHEN** a radio with class `.radio` is rendered
- **THEN** the component SHALL use typography tokens for font
- **AND** the component SHALL use appropriate tokens for styling

#### Scenario: Focus state

- **WHEN** a radio receives focus
- **THEN** the visual state SHALL change to indicate focus

#### Scenario: Disabled state

- **WHEN** a radio has disabled attribute
- **THEN** the component SHALL use disabled token values
