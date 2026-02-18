# Token Generation Specification

## ADDED Requirements

### Requirement: Primitive Token Generation

The system SHALL generate CSS custom properties from Figma primitive tokens.

#### Scenario: Generate typography primitives

- **WHEN** the build script is executed
- **THEN** typography-primitive tokens are converted to CSS custom properties in `dist/tokens.css`
- **AND** font-family values include both horizon (Roboto) and braven (Lato) fonts
- **AND** font-size tokens include xs through 4xl values with pixel units

#### Scenario: Generate color primitives

- **WHEN** the build script is executed
- **THEN** colors-primitives tokens are converted to CSS custom properties
- **AND** gray scale tokens (gray-0 through gray-100) are included
- **AND** alert colors (error, warning, success, info) are included

#### Scenario: Generate spacing primitives

- **WHEN** the build script is executed
- **THEN** padding tokens (0-80) are converted to CSS custom properties with pixel units
- **AND** radius tokens (xsmall through round) are converted with pixel units
- **AND** elevation tokens (shadows) are included

### Requirement: Theme Component Token Generation

The system SHALL generate CSS custom properties for component tokens organized by theme.

#### Scenario: Generate horizon theme tokens

- **WHEN** the build script is executed
- **THEN** component tokens for horizon theme are generated under `:root` and `[data-theme="horizon"]`
- **AND** button tokens (btn-primary, btn-secondary, btn-tertiary) are included
- **AND** alert tokens (error, warning, success, info) are included

#### Scenario: Generate braven theme tokens

- **WHEN** the build script is executed
- **THEN** component tokens for braven theme are generated under `[data-theme="braven"]`
- **AND** braven-specific color values override horizon defaults
- **AND** same token names are used for consistency

### Requirement: Token Naming Convention

The system SHALL preserve Figma token names as CSS variable names.

#### Scenario: Preserve token names

- **WHEN** tokens are converted to CSS
- **THEN** CSS variable names match Figma token names
- **AND** nested token paths are flattened with hyphens (e.g., `btn-primary-main` → `--btn-primary-main`)
- **AND** all variable names are lowercase with hyphens

### Requirement: Build Script

The system SHALL provide an npm script to regenerate CSS from tokens.

#### Scenario: Run build script

- **WHEN** `npm run build` is executed
- **THEN** `dist/tokens.css` is generated or updated
- **AND** `dist/themes.css` is generated or updated
- **AND** existing files are overwritten with fresh content
