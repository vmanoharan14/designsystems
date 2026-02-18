# Spec: Preloader Component

## ADDED Requirements

### Requirement: Preloader Rendering

The system SHALL render preloader component using Figma token values.

#### Scenario: Default state

- **WHEN** a preloader component is rendered
- **THEN** the component SHALL use typography tokens for font
- **AND** the component SHALL use appropriate tokens for styling

#### Scenario: Theme switching

- **WHEN** the data-theme attribute changes
- **THEN** the component SHALL update to use theme-specific token values
