# Spec: Search Component

## ADDED Requirements

### Requirement: Search Rendering

The system SHALL render search component using Figma token values.

#### Scenario: Default state

- **WHEN** a search with class `.search` is rendered
- **THEN** the component SHALL use typography tokens for font
- **AND** the component SHALL use appropriate tokens for styling

#### Scenario: Focus state

- **WHEN** a search receives focus
- **THEN** the visual state SHALL change to indicate focus

#### Scenario: Disabled state

- **WHEN** a search has disabled attribute
- **THEN** the component SHALL use disabled token values
