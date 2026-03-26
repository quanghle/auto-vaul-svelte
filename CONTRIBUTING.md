# Contributing to autopilot-vaul-svelte

Thank you for your interest in contributing! This guide will help you get started.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/<your-username>/autopilot-vaul-svelte.git
   cd autopilot-vaul-svelte
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Create a feature branch:
   ```bash
   git checkout -b my-feature
   ```

## Development

Start the dev server to see your changes in the demo site:

```bash
pnpm run dev
```

### Useful Commands

| Command | Description |
| --- | --- |
| `pnpm run dev` | Start dev server |
| `pnpm run build` | Build the site and package |
| `pnpm run test` | Run unit tests (watch mode) |
| `pnpm run test --run` | Run unit tests once |
| `pnpm run test:e2e` | Run Playwright E2E tests |
| `pnpm run lint` | Check formatting and lint rules |
| `pnpm run format` | Auto-format code |
| `pnpm run check` | Run type checking |

## Project Structure

- `src/lib/` - The published library code
  - `src/lib/vaul/` - Public drawer components
  - `src/lib/internal/` - Internal utilities and core logic
- `src/routes/` - Demo site (SvelteKit pages)
- `tests/` - E2E test files

## Code Style

- **Svelte 5 runes** exclusively (`$state`, `$derived`, `$effect`, `$props`, `$bindable`). No legacy Svelte 4 patterns.
- **Tabs** for indentation, **double quotes** for strings.
- **Prettier** and **ESLint** are configured. Run `pnpm run format` and `pnpm run lint` before committing.
- Include the `.js` extension in all TypeScript import paths (NodeNext resolution).

## Submitting Changes

1. Ensure all checks pass:
   ```bash
   pnpm run lint && pnpm run check && pnpm run test --run
   ```
2. Add a changeset if your change affects the published package:
   ```bash
   pnpm changeset
   ```
3. Commit your changes with a clear, descriptive message.
4. Push to your fork and open a pull request against the `main` branch.

## Reporting Bugs

Use the [bug report template](https://github.com/quanghle/autopilot-vaul-svelte/issues/new?template=bug_report.yml) to file issues. Please include a reproduction link (StackBlitz or GitHub repo) when possible.

## Upstream

This project is a fork of [vaul-svelte](https://github.com/huntabyte/vaul-svelte) by [Hunter Johnston](https://github.com/huntabyte). When contributing, please be aware that some changes may be relevant to upstream as well.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
