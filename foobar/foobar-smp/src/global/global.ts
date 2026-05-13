import type { FbGlobal } from "../types";

/**
 * The {@link global}: {@link FbGlobal} constant represents global object.
 *
 * @public
 */
export const global: FbGlobal = globalThis as unknown as FbGlobal;

Object.defineProperty(global, "global", {
  enumerable: true,
  value: global,
  writable: false,
});
