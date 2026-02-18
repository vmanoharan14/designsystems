# Spec: Disclaimers Component

## ADDED Requirements

### Requirement: Disclaimers Rendering

The system SHALL render disclaimers component using Figma token values.

#### Scenario: Default state

- **WHEN** a disclaimers component is rendered
- **THEN** the component SHALL use typography tokens for font
- **AND** the component SHALL use appropriate tokens for styling

#### Scenario: Theme switching

- **WHEN** the data-theme attribute changes
- **THEN** the component SHALL update to use theme-specific token values
