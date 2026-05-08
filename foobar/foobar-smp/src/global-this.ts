import type { PartialOptional } from "@positron/core";

import type { console, fb, gdi, plman, utils, window } from "./constants";
import type { Callbacks } from "./types";

/**
 * The {@link GlobalThis} interface represents global `this` object.
 *
 * @public
 */
export interface GlobalThis extends PartialOptional<Callbacks> {
  /**
   * @see console.
   */
  readonly console: typeof console;

  /**
   * @see fb
   */
  readonly fb: typeof fb;

  /**
   * @see gdi
   */
  readonly gdi: typeof gdi;

  /**
   * Link to global this.
   */
  readonly globalThis: GlobalThis;

  /**
   * @see plman
   */
  readonly plman: typeof plman;

  /**
   * @see utils
   */
  readonly utils: typeof utils;

  /**
   * @see window
   */
  readonly window: typeof window;
}

/**
 * The {@link globalThis} constant represents global this object.
 *
 * @public
 */
// eslint-disable-next-line no-shadow-restricted-names
export declare const globalThis: GlobalThis;
