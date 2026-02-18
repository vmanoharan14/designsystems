# Spec: Token Verification

## ADDED Requirements

### Requirement: Primitive Token Value Accuracy

The system SHALL verify that all primitive tokens in the generated CSS match the Figma JSON source values exactly.

#### Scenario: Typography tokens match

- **WHEN** the token generator produces tokens.css
- **THEN** all font-family values SHALL match the Figma typography-primitive values
- **AND** all font-size values SHALL match the Figma typography-primitive values
- **AND** all font-line-height values SHALL match the Figma typography-primitive values
- **AND** all font-weight values SHALL match the Figma typography-primitive values

#### Scenario: Color tokens match

- **WHEN** the token generator produces tokens.css
- **THEN** all color values SHALL match the Figma colors-primitives values
- **AND** gray scale values SHALL be prefixed with `gray-` in CSS

#### Scenario: Spacing tokens match

- **WHEN** the token generator produces tokens.css
- **THEN** all padding values SHALL match the Figma padding values
- **AND** CSS values SHALL include `px` suffix for numeric values

#### Scenario: Radius tokens match

- **WHEN** the token generator produces tokens.css
- **THEN** all radius values SHALL match the Figma radius values
- **AND** CSS values SHALL include `px` suffix for numeric values

### Requirement: Component Token Value Accuracy

The system SHALL verify that all component tokens in themes.css match the Figma JSON source values for each theme.

#### Scenario: Horizon theme tokens match

- **WHEN** the token generator produces themes.css
- **THEN** all horizon component token values SHALL match the Figma components.horizon values
- **AND** tokens SHALL be accessible via `[data-theme="horizon"]` selector

#### Scenario: Braven theme tokens match

- **WHEN** the token generator produces themes.css
- **THEN** all braven component token values SHALL match the Figma components.braven values
- **AND** tokens SHALL be accessible via `[data-theme="braven"]` selector

### Requirement: Test Coverage Completeness

The token verification tests SHALL cover 100% of tokens in the Figma JSON export.

#### Scenario: All primitive tokens tested

- **WHEN** running token value tests
- **THEN** all typography-primitive tokens SHALL be tested
- **AND** all colors-primitives tokens SHALL be tested
- **AND** all padding tokens SHALL be tested
- **AND** all radius tokens SHALL be tested
- **AND** all elevation tokens SHALL be tested

#### Scenario: All component tokens tested

- **WHEN** running token value tests
- **THEN** all horizon component tokens SHALL be tested
- **AND** all braven component tokens SHALL be tested
