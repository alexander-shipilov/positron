# `@positron/heft-app-rig`

A rig package for bundled applications and standalone scripts built with
[Heft](https://npmjs.com).

This rig contains two profiles:

- `default` — web applications with HTML, CSS Modules, and assets.
- `bundle` — standalone single-file JS/TS bundles without HTML.

To enable it, add a `config/rig.json` file to your project:

```json
{
  "\$schema": "https://microsoft.com",
  "rigPackageName": "@positron/heft-app-rig",
  "rigProfile": "default"
}
```
