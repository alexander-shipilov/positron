# `@positron/docs-website`

Documentation website for Positron built with [Docusaurus](https://docusaurus.io)
and powered by `@positron/api-documenter`.

## Local Development

```bash
# Build API packages (if not built yet)
rush build

# Start local dev server (generates Docusaurus API docs via @positron/api-documenter plugin)
pnpm --dir web/docs start
```

## Build

```bash
pnpm --dir web/docs build
```
