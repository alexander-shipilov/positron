import type { ReactDOMFilter } from "./react-dom-filter";

/**
 * The {@link ReactDOMTagFilter} type returns all tags that can be used with
 * the specified `TProps`
 *
 * @example
 * ```ts
 *  type Tags = ReactDOMTagFilter<{ value: string; maxLength: number }>>
 *  // "input" | "textarea"
 * ```
 *
 * @typeParam TProps - The set of properties
 *
 * @public
 */
export type ReactDOMTagFilter<TProps> = keyof ReactDOMFilter<TProps>;
