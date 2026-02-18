# Proposal: Feedback & Status Components

## Why

Feedback and status components communicate the state of the system and provide visual feedback to users. This change adds 6 components (badges, chip, progress, preloader, tooltips, disclaimers) using Figma tokens.

## What Changes

- Add badges component (status indicators)
- Add chip component (tags/removable items)
- Add progress component (progress bars)
- Add preloader component (loading spinners)
- Add tooltips component (hover information)
- Add disclaimers component (informational banners)

## Capabilities

### New Capabilities

- `badges`: Status badges with variants (default, primary, success, warning, error)
- `chip`: Tag chips with states (default, primary, selected, disabled)
- `progress`: Progress bars with sizes and labels
- `preloader`: Loading spinners with sizes and text
- `tooltips`: Hover tooltips with positions (top, bottom, left, right)
- `disclaimers`: Info banners with variants (info, warning, error, success)

## Impact

- `dist/components/badges.css`: Badge styles
- `dist/components/chip.css`: Chip styles
- `dist/components/progress.css`: Progress bar styles
- `dist/components/preloader.css`: Preloader styles
- `dist/components/tooltips.css`: Tooltip styles
- `dist/components/disclaimers.css`: Disclaimer styles
- `examples/`: HTML examples for each component
- `tests/`: Unit and E2E tests
