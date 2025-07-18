import type { ReactComponent } from "@positron/react-core";

import type { BlockComponentPropsOf } from "./block-component-props-of";

/**
 * The {@link BlockComponentOf} type return block component props of the passed
 * `TProps`.
 *
 * @typeParam TProps - The properties to get block component props.
 *
 * @public
 */
export type BlockComponentOf<TProps> = ReactComponent<
  BlockComponentPropsOf<TProps>
>;
