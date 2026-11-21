# `@positron/api-documenter`

Configuration-driven wrapper around `@microsoft/api-documenter` for
customizing Markdown API documentation generation without manual subclassing.

## Usage

```ts
import { MarkdownFeature } from "@positron/api-documenter";

const feature = MarkdownFeature.definition("custom-markdown", {
  onBeforeWritePage: (page) => `${page.content}\n`,
});

export const apiDocumenterPluginManifest = {
  features: [feature],
};
```
