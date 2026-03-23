import type { Nullable, Optional } from "@positron/core";
import type {
  ReactDomProps,
  ReactRef,
  ReactDomElement,
} from "@positron/react-core";

import type { GenericElementTag } from "./generic-element-tag";

/**
 * @public
 * Type {@link GenericElementProps} describes properties of
 *   {@link GenericElement} component
 */
export type GenericElementProps<TTag extends GenericElementTag> = Omit<
  ReactDomProps<TTag>,
  "key" | "ref"
> & {
  [key: `data-${string}`]: string;

  /**
   * Tag
   */
  element: TTag;

  /**
   * Reference object to store element
   */
  elementRef?: Optional<ReactRef<Nullable<ReactDomElement<TTag>>>>;
};
