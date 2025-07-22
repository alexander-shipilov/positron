import type { AnyObject } from "@positron/core/src";
import type { ReactComponent } from "@positron/react-core/src";

import type { BlockMeta } from "./block-meta";
import type { BlockProps } from "./block-props";
import type { BlockValue } from "./block-value";

/**
 * The {@link BlockConfig} describes the configuration object used to render
 * the element.
 *
 * @public
 */
export interface BlockConfig<
  TValue extends BlockValue,
  TProps extends BlockProps,
  TMeta extends BlockMeta,
> {
  /**
   * The {@link Component} property contains a component to render the element.
   */
  readonly Component: ReactComponent<TProps>;

  /**
   * The {@link meta} property contains additional metadata about the block
   * (className, etc.). You can specify any metadata by passing the appropriate
   * parameter to the {@link Block} type.
   */
  readonly meta: TMeta;

  /**
   * The {@link props} property contains properties that should be passed to
   * the component.
   */
  readonly props: AnyObject;

  /**
   * The {@link props} property contains a value of block.
   */
  readonly value: TValue;
}
