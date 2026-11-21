# `@positron/heft-react-app-rig`

A rig package for bundled React applications built with
[Heft](https://npmjs.com).

This rig extends `@positron/heft-app-rig` and provides two profiles:

- `default` — React web applications with HTML, CSS Modules, and assets.
- `bundle` — standalone single-file React/JS bundles without HTML.

To enable it, add a `config/rig.json` file to your project:

```json
{
  "\$schema": "https://microsoft.com",
  "rigPackageName": "@positron/heft-react-app-rig",
  "rigProfile": "default"
}
```
