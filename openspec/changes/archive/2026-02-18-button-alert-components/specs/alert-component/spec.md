# Alert Component Specification

## ADDED Requirements

### Requirement: Alert Base Styles

All alerts MUST share common base styling for consistency.

#### Scenario: Render alert with base styles

- **WHEN** `<div class="alert">` is used
- **THEN** alert has correct padding from tokens
- **AND** alert has correct border-radius from tokens
- **AND** alert has correct typography from tokens

### Requirement: Alert Variants

Alerts SHALL support semantic variants for different message types.

#### Scenario: Error alert

- **WHEN** `<div class="alert alert-error">` is used
- **THEN** alert has error background color from `--alert-bg-error`
- **AND** alert text/icon color is from `--alert-icon-error`

#### Scenario: Warning alert

- **WHEN** `<div class="alert alert-warning">` is used
- **THEN** alert has warning background color from `--alert-bg-warning`
- **AND** alert text/icon color is from `--alert-icon-warning`

#### Scenario: Success alert

- **WHEN** `<div class="alert alert-success">` is used
- **THEN** alert has success background color from `--alert-bg-success`
- **AND** alert text/icon color is from `--alert-icon-success`

#### Scenario: Info alert

- **WHEN** `<div class="alert alert-info">` is used
- **THEN** alert has info background color from `--alert-bg-info`
- **AND** alert text/icon color is from `--alert-icon-info`

### Requirement: Alert Content Structure

Alerts SHALL support structured content.

#### Scenario: Alert with title and description

- **WHEN** alert contains title and body text
- **THEN** title uses `--alert-text-title` font size
- **AND** body uses `--alert-text-body` font size

### Requirement: Theme Support

Alert colors SHALL automatically adapt to current theme.

#### Scenario: Theme switching

- **WHEN** `data-theme` attribute changes
- **THEN** alert colors update instantly
- **AND** no page reload required
