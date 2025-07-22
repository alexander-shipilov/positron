import type { AnyObject } from "@positron/core/src";
import type { ReactComponent } from "@positron/react-core/src";

import type { ElementMeta } from "./element-meta";
import type { ElementProps } from "./element-props";
import type { ElementValue } from "./element-value";

/**
 * The {@link ElementConfig} describes the configuration object used to render
 * the element.
 *
 * @public
 */
export interface ElementConfig<
  TValue extends ElementValue,
  TProps extends ElementProps,
  TMeta extends ElementMeta,
> {
  /**
   * The {@link Component} property contains a component to render the element.
   */
  readonly Component: ReactComponent<TProps>;

  /**
   * The {@link meta} property contains additional metadata about the element
   * (className, etc.). You can specify any metadata by passing the appropriate
   * parameter to the {@link Element} type.
   */
  readonly meta: TMeta;

  /**
   * The {@link props} property contains properties that should be passed to
   * the component.
   */
  readonly props: AnyObject;

  /**
   * The {@link props} property contains a value of element.
   */
  readonly value: TValue;
}
