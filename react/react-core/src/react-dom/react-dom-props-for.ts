import type { ReactDom } from "./react-dom";
import type { ReactDomTag } from "./react-dom-tag";

/**
 * The {@link ReactDomPropsFor} type constructs a subset of {@link ReactDom}
 * filtered by the given `TProps`
 *
 * @example
 * ```ts
 *  type Input = ReactDomFilter<{ value: string; maxLength: number }>>
 *  // { input: { ... }, textarea: { ... } }
 *s ```
 *
 * @public
 */
export type ReactDomPropsFor<TProps> = {
  [TTag in ReactDomTag as ReactDomPropsForKey<TTag, TProps>]: ReactDom[TTag];
};

/**
 * @internal
 */
type ReactDomPropsForKey<
  TTag extends ReactDomTag,
  TProps,
> = keyof TProps extends keyof ReactDom[TTag]
  ? TProps extends Pick<ReactDom[TTag], keyof TProps>
    ? TTag
    : never
  : never;
