import type { ReactComponent, ReactProps } from "@positron/react-core";
import type { ReactAnyProps } from "@positron/react-core/src";

import type { Described } from "../descriptor";

import type { BlockConfig } from "./block-config";
import type { BlockDescriptor } from "./block-descriptor";
import type { BlockValue } from "./block-value";
import { BLOCK_TYPE } from "./block-type";

/**
 * The {@link Element} type creates element descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TProps - The properties of component that implements element.
 *
 * @public
 */
export type Block<
  TComponentProps extends ReactProps,
  TProps extends BlockValue,
> = Described<TProps, BlockDescriptor<TComponentProps>>;

/**
 * The {@link block} function creates block descriptor.
 *
 * @param Component - The default component to render block.
 */
export function block<TProps extends ReactAnyProps>(
  Component: ReactComponent<TProps>,
): BlockConfig<TProps> {
  return {
    Component,
    type: BLOCK_TYPE,
  };
}
