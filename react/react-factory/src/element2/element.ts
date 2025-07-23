import type { ReactComponent, ReactProps } from "@positron/react-core";
import { EMPTY_OBJECT } from "@positron/core";

import type { Described } from "../descriptor2";
import type { ElementDescriptor } from "../element/element-descriptor";
import type {
  ElementDescriptorValue
} from "../element/element-descriptor-value";
import { ELEMENT_TYPE } from "../element/element-descriptor-type";

import type { ElementConfig } from "./element-config";

/**
 * The {@link ElementDescriptor} type creates element descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TProps - The properties of component that implements element.
 *
 * @public
 */
export type Element<
  TValue extends ElementDescriptorValue,
  TProps extends ReactProps,
> = Described<TValue, Element<TValue, TProps>>;

/**
 * The {@link element} function creates block descriptor.
 *
 * @param value - The default value
 * @param Component - The default component to render block.
 */
export function element<
  TValue extends ElementDescriptorValue,
  TProps extends ReactProps,
>(
  value: TValue,
  Component: ReactComponent<TProps>,
): ElementConfig<TValue, TProps> {
  return {
    className: "",
    Component,
    data: value,
    props: EMPTY_OBJECT,
    type: ELEMENT_TYPE,
  } as const;
}
