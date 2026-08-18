import type { ReactDomPropsFor } from "./react-dom-props-for";

/**
 * The {@link ReactDomTagFor} type returns all tags that can be used with
 * the specified `TProps`
 *
 * @example
 * ```ts
 *  type Tags = ReactDomTagFor<{ value: string; maxLength: number }>>
 *  // "input" | "textarea"
 * ```
 *
 * @typeParam TProps - The set of properties
 *
 * @public
 */
export type ReactDomTagFor<TProps> = keyof ReactDomPropsFor<TProps>;
