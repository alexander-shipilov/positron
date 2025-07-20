import type { ReactComponent, ReactProps } from "@positron/react-core";
import { EMPTY_OBJECT } from "@positron/core";

import type { Described } from "../descriptor";

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
> = Described<
  TProps,
  BlockDescriptor<TComponentProps, ReactComponent<TComponentProps>>
>;

/**
 * The {@link block} function creates block descriptor.
 *
 * @param Component - The default component to render block.
 */
export function block<TProps extends ReactProps>(
  Component: ReactComponent<TProps>,
): BlockDescriptor<TProps> {
  return {
    Component,
    props: EMPTY_OBJECT,
    type: BLOCK_TYPE,
  };
}
