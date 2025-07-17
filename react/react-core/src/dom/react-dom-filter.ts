import type { ReactDOM } from "./react-dom";
import type { ReactDOMRequired } from "./react-dom-required";
import type { ReactDOMTag } from "./react-dom-tag";

/**
 * @public
 * Type {@link ReactDOMFilter} constructs a subset of {@link ReactDOM} filtered
 *   by the given `TProps`
 *
 * @example
 * ```ts
 *  type Input = ReactDOMFilter<{ value: string; maxLength: number }>>
 *  // { input: { ... }, textarea: { ... } }
 *s ```
 */
export type ReactDOMFilter<TProps> = {
  [TTag in ReactDOMTag as MatchTag<TTag, TProps>]: ReactDOM[TTag];
};

/**
 * @internal
 */
type MatchTag<
  TTag extends ReactDOMTag,
  TProps,
> = keyof TProps extends keyof ReactDOM[TTag]
  ? TProps extends Pick<ReactDOMRequired[TTag], keyof TProps>
    ? TTag
    : never
  : never;
