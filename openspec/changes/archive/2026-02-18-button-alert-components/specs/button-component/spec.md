# Button Component Specification

## ADDED Requirements

### Requirement: Button Base Styles

All buttons MUST share common base styling for consistency.

#### Scenario: Render button with base styles

- **WHEN** `<button class="btn">` is used
- **THEN** button has correct font-family from tokens
- **AND** button has correct padding from tokens (16px x, 12px y)
- **AND** button has correct border-radius from tokens (8px)
- **AND** button has smooth transition on state changes

### Requirement: Button Variants

Buttons SHALL support multiple visual variants for different use cases.

#### Scenario: Render primary button

- **WHEN** `<button class="btn btn-primary">` is used
- **THEN** button has solid background color from `--btn-primary-main`
- **AND** button text color is from `--btn-primary-text-color`
- **AND** button border matches background

#### Scenario: Render secondary button

- **WHEN** `<button class="btn btn-secondary">` is used
- **THEN** button has background from `--btn-secondary-bg-main`
- **AND** button has border from `--btn-secondary-border-main`
- **AND** button text color is from `--btn-secondary-text-main`

### Requirement: Button States

All button variants SHALL respond to user interaction states.

#### Scenario: Hover state

- **WHEN** user hovers over button
- **THEN** button background changes to hover color
- **AND** cursor changes to pointer

#### Scenario: Focus state

- **WHEN** button receives focus
- **THEN** button shows focus ring from `--btn-primary-border-focus`
- **AND** focus ring has proper offset

#### Scenario: Pressed state

- **WHEN** button is actively pressed
- **THEN** button background changes to pressed color

#### Scenario: Disabled state

- **WHEN** `<button class="btn" disabled>` is used
- **THEN** button has disabled background color
- **AND** cursor changes to not-allowed

### Requirement: Theme Support

Button colors SHALL automatically adapt to current theme.

#### Scenario: Horizon theme

- **WHEN** `data-theme="horizon"` is set
- **THEN** button uses horizon color tokens
- **AND** primary button is blue (#0054a8)

#### Scenario: Braven theme

- **WHEN** `data-theme="braven"` is set
- **THEN** button uses braven color tokens
- **AND** primary button is purple (#333988)

## REMOVED Requirements

The following variants were removed because they are NOT in Figma tokens:

- ~~Tertiary button~~ - No btn-tertiary-* tokens exist
- ~~Small button (btn-sm)~~ - No btn-*-sm-* tokens exist
- ~~Large button (btn-lg)~~ - No btn-*-lg-* tokens exist
- ~~Icon button~~ - Only icon-color tokens exist, not full icon button
