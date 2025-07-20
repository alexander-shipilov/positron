import type { ReactComponent } from "@positron/react-core";
import type { ReactProps } from "@positron/react-core";
import { EMPTY_OBJECT } from "@positron/core";

import type { Described } from "../descriptor";

import type { ElementDescriptor } from "./element-descriptor";
import type { ElementValue } from "./element-value";
import { ELEMENT_TYPE } from "./element-type";

/**
 * The {@link Element} type creates element descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TProps - The properties of component that implements element.
 *
 * @public
 */
export type Element<
  TValue extends ElementValue,
  TProps extends ReactProps,
> = Described<
  TValue,
  ElementDescriptor<TValue, TProps, ReactComponent<TProps>>
>;

/**
 * The {@link element} function creates block descriptor.
 *
 * @param value - The default value
 * @param Component - The default component to render block.
 */
export function element<TValue extends ElementValue, TProps extends ReactProps>(
  value: TValue,
  Component: ReactComponent<TProps>,
): ElementDescriptor<TValue, TProps> {
  return {
    Component,
    props: EMPTY_OBJECT,
    type: ELEMENT_TYPE,
    value,
  };
}
