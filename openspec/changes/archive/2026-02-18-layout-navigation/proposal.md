# Proposal: Layout & Navigation Components

## Why

Layout and navigation components provide structure and wayfinding for applications. This change adds 6 components (header, footer, sidebar, breadcrumb, pagination, modal) using Figma tokens.

## What Changes

- Add header component (site header with nav)
- Add footer component (site footer with sections)
- Add sidebar component (side navigation)
- Add breadcrumb component (path navigation)
- Add pagination component (page navigation)
- Add modal component (dialog overlay)

## Capabilities

### New Capabilities

- `header`: Site header with logo, nav, and actions
- `footer`: Site footer with sections and links
- `sidebar`: Side navigation with active states
- `breadcrumb`: Path navigation with separators
- `pagination`: Page navigation with states
- `modal`: Dialog overlay with header/body/footer

## Impact

- `dist/components/header.css`: Header styles
- `dist/components/footer.css`: Footer styles
- `dist/components/sidebar.css`: Sidebar styles
- `dist/components/breadcrumb.css`: Breadcrumb styles
- `dist/components/pagination.css`: Pagination styles
- `dist/components/modal.css`: Modal styles
- `examples/`: HTML examples for each component
- `tests/`: Unit and E2E tests
