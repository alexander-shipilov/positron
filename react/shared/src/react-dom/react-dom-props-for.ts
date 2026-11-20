import type { ReactDom } from "./react-dom";
import type { ReactDomPropsForKey } from "./react-dom-props-for-key";
import type { ReactDomTag } from "./react-dom-tag";

/**
 * The {@link ReactDomPropsFor} type constructs a subset of {@link ReactDom}
 * filtered by the given `TProps`
 *
 * @example
 * ```ts
 *  type Input = ReactDomPropsFor<{ value: string; maxLength: number }\>
 *  // { input: { ... }, textarea: { ... } }
 * ```
 *
 * @public
 */
export type ReactDomPropsFor<TProps> = {
  [TTag in ReactDomTag as ReactDomPropsForKey<TTag, TProps>]: ReactDom[TTag];
};
