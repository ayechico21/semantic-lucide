# Semantic Lucide

A monorepo containing the `semantic-lucide` npm package and a demo React app.

## Structure

- `packages/semantic-lucide` - The npm package
- `packages/demo-app` - Demo React app using Vite

## Setup

Install dependencies:

```bash
pnpm install
```

## Development

Build all packages:

```bash
pnpm build
```

Run development mode for all packages:

```bash
pnpm dev
```

### Package-specific commands

#### semantic-lucide

```bash
cd packages/semantic-lucide
pnpm build    # Build the package
pnpm dev      # Watch mode
pnpm clean    # Clean dist folder
```

#### demo-app

```bash
cd packages/demo-app
pnpm dev      # Start dev server
pnpm build    # Build for production
pnpm preview  # Preview production build
```

## Workspace

This project uses pnpm workspaces. The `semantic-lucide` package is linked to `demo-app` via `workspace:*` protocol.

