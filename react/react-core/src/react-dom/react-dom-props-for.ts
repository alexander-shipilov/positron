import type { ReactDom } from "./react-dom";
import type { ReactDOMTag } from "./react-dom-tag";

/**
 * The {@link ReactDomPropsFor} type constructs a subset of {@link ReactDom}
 * filtered by the given `TProps`
 *
 * @example
 * ```ts
 *  type Input = ReactDOMFilter<{ value: string; maxLength: number }>>
 *  // { input: { ... }, textarea: { ... } }
 *s ```
 *
 * @public
 */
export type ReactDomPropsFor<TProps> = {
  [TTag in ReactDOMTag as ReactDomPropsForKey<TTag, TProps>]: ReactDom[TTag];
};

/**
 * @internal
 */
type ReactDomPropsForKey<
  TTag extends ReactDOMTag,
  TProps,
> = keyof TProps extends keyof ReactDom[TTag]
  ? TProps extends Pick<ReactDom[TTag], keyof TProps>
    ? TTag
    : never
  : never;
