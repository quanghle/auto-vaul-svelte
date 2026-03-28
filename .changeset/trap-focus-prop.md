---
"autopilot-vaul-svelte": minor
---

Add `trapFocus` prop to `Drawer.Content` (default `true`)

Focus is now trapped within the drawer by default, matching WCAG modal dialog
guidelines. Set `trapFocus={false}` to opt out or to create non-modal
patterns like side navigation.
