# autopilot-vaul-svelte

> **Fork Notice:** This project is a fork of [vaul-svelte](https://github.com/huntabyte/vaul-svelte) by [Hunter Johnston](https://github.com/huntabyte), which itself is a Svelte port of [Vaul](https://github.com/emilkowalski/vaul) by [Emil Kowalski](https://github.com/emilkowalski).

An unstyled, gesture-driven drawer component for Svelte 5. Use as a Dialog replacement on tablet and mobile devices. Built on top of [Bits UI's Dialog primitive](https://www.bits-ui.com/docs/components/dialog).

## Installation

```bash
npm install autopilot-vaul-svelte
# or
pnpm add autopilot-vaul-svelte
```

### Prerequisites

- Svelte 5 (`^5.0.0`)

## Quick Start

```svelte
<script>
	import { Drawer } from "autopilot-vaul-svelte";
</script>

<Drawer.Root>
	<Drawer.Trigger>Open</Drawer.Trigger>
	<Drawer.Portal>
		<Drawer.Overlay class="fixed inset-0 bg-black/40" />
		<Drawer.Content>
			<Drawer.Title>Drawer Title</Drawer.Title>
			<Drawer.Description>Drawer description.</Drawer.Description>
			<p>Content</p>
			<Drawer.Close>Close</Drawer.Close>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>
```

> **Tip:** Add `data-vaul-drawer-wrapper` to your main content wrapper element to enable background scaling with the `shouldScaleBackground` prop.

## API Reference

### Root

Contains all parts of a dialog. Use `shouldScaleBackground` to enable background scaling, which requires an element with `[data-vaul-drawer-wrapper]` data attribute to scale its background. Can be controlled by binding to the `open` prop or using the `onOpenChange` prop.

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | `false` | Controlled open state. Use `bind:open` for two-way binding. |
| `onOpenChange` | `(open: boolean) => void` | — | Callback fired when the open state changes. |
| `shouldScaleBackground` | `boolean` | `false` | Scale the background when open. Requires `[data-vaul-drawer-wrapper]` on wrapper element. |
| `closeThreshold` | `number` | `0.25` | Number between 0 and 1 that determines when the drawer should be closed. Example: threshold of 0.5 would close the drawer if the user swiped for 50% of the height of the drawer or more. |
| `scrollLockTimeout` | `number` | `100` | Duration (ms) for which the drawer is not draggable after scrolling content inside the drawer. |
| `snapPoints` | `(number \| string)[]` | — | Array of snap points. Use numbers (0–1) for percentage of screen height or strings like `"148px"` for pixel values. Should go from least visible. Example: `[0.2, 0.5, 0.8]`. |
| `activeSnapPoint` | `number \| string \| null` | — | The currently active snap point. Supports `bind:activeSnapPoint`. |
| `fadeFromIndex` | `number` | last snap point | Index of a `snapPoint` from which the overlay fade should be applied. |
| `direction` | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Direction of the drawer. |
| `backgroundColor` | `string` | `"black"` | Background color of the body when the drawer is open and `shouldScaleBackground` is true. |

`[data-vaul-no-drag]`: When interacting with an element with this data attribute, the drawer won't be dragged.

### Trigger

The button that opens the dialog. [Props](https://www.bits-ui.com/docs/components/dialog#trigger).

### Content

Content that should be rendered in the drawer. [Props](https://www.bits-ui.com/docs/components/dialog#content).

### Overlay

A layer that covers the inert portion of the view when the dialog is open. [Props](https://www.bits-ui.com/docs/components/dialog#overlay).

### Title

An accessible title to be announced when the dialog is opened. [Props](https://www.bits-ui.com/docs/components/dialog#title).

### Description

An optional accessible description to be announced when the dialog is opened. [Props](https://www.bits-ui.com/docs/components/dialog#description).

### Close

The button that closes the dialog. [Props](https://www.bits-ui.com/docs/components/dialog#close).

### Portal

Portals your drawer into the body.

### NestedRoot

Use inside a `Drawer.Content` to create a nested drawer. The parent drawer automatically transitions when the nested drawer opens.

## Examples

See the [live demo site](https://quanghle.github.io/autopilot-vaul-svelte) for interactive examples including:

- Basic drawer with background scaling
- Snap points
- Nested drawers
- Scrollable content
- Direction control (top, bottom, left, right)
- Non-draggable areas

## Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Run tests
pnpm run test

# Run E2E tests
pnpm run test:e2e

# Lint and format
pnpm run lint
pnpm run format

# Type-check
pnpm run check

# Build
pnpm run build
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Acknowledgments

This project is a fork of [vaul-svelte](https://github.com/huntabyte/vaul-svelte) created by [Hunter Johnston](https://github.com/huntabyte). The original Vaul library was created by [Emil Kowalski](https://github.com/emilkowalski). We are grateful for their foundational work.

## License

Published under the [MIT](LICENSE) license. See [LICENSE](LICENSE) for details.
