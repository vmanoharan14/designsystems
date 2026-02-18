# Spec: Inputs Component

## ADDED Requirements

### Requirement: Input Text Rendering

The system SHALL render text input fields using Figma token values.

#### Scenario: Default state

- **WHEN** an input with class `.input-text` is rendered
- **THEN** the input SHALL use typography tokens for font
- **AND** the input SHALL use border tokens for border styling

#### Scenario: Focus state

- **WHEN** an input receives focus
- **THEN** the border color SHALL change to focus token value

#### Scenario: Error state

- **WHEN** an input has class `.input-text-error`
- **THEN** the border color SHALL use error token value
