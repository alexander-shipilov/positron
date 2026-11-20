import type { StringLike } from "../string/string-like";

/**
 * The {@link TemplateFunction} type represents the {@link template} function
 * return value.
 *
 * @public
 */
export type TemplateFunction = (...args: readonly StringLike[]) => string;
