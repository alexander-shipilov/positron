import type { FbGlobal } from "./types";

/**
 * The {@link global} constant represents global object.
 *
 * @public
 */
export const global = globalThis as unknown as FbGlobal;

Object.defineProperty(global, "global", {
  enumerable: true,
  value: global,
  writable: false,
});

/**
 * The {@link ActiveXObject} constant represents `ActiveXObject` constructor.
 *
 * @public
 */
export const ActiveXObject = global.ActiveXObject;

/**
 * @public
 */
export const clearInterval = global.clearInterval;

/**
 * @public
 */
export const clearTimeout = global.clearTimeout;

/**
 * The {@link console} constant represents a reference to the console object.
 *
 * @public
 */
export const console = global.console;

/**
 * The {@link fb} constant represents a reference to the foobar
 * object.
 *
 * @public
 */
export const fb = global.fb;

/**
 * The {@link FbProfiler} constant represents `FbProfiler` constructor.
 *
 * @public
 */
export const FbProfiler = global.FbProfiler;

/**
 * The {@link gdi} constant represents a reference to the GDI object.
 *
 * @public
 */
export const gdi = global.gdi;

/**
 * The {@link GdiBitmap} constant represents `GdiBitmap` constructor.
 *
 * @public
 */
export const GdiBitmap = global.GdiBitmap;

/**
 * The {@link GdiFont} constant represents `GdiFont` constructor.
 *
 * @public
 */
export const GdiFont = global.GdiFont;

/**
 * @public
 */
export const include = global.include;

/**
 * The {@link plman} constant represents a reference to the playlist manager
 * object.
 *
 * @public
 */
export const plman = global.plman;

/**
 * @public
 */
export const setInterval = global.setInterval;

/**
 * @public
 */
export const setTimeout = global.setTimeout;

/**
 * The {@link utils} constant represents a reference to the utils object.
 *
 * @public
 */
export const utils = global.utils;

/**
 * The {@link window} constant represents a reference to the window object.
 *
 * @public
 */
export const window = global.window;
