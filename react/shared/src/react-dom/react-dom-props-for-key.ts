import type { ReactDom } from "./react-dom";
import type { ReactDomTag } from "./react-dom-tag";

/**
 * @public
 */
export type ReactDomPropsForKey<
  TTag extends ReactDomTag,
  TProps,
> = keyof TProps extends keyof ReactDom[TTag]
  ? TProps extends Pick<ReactDom[TTag], keyof TProps>
    ? TTag
    : never
  : never;
