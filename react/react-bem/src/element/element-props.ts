import type { Nullish } from "@positron/core";
import type { UnknownObject } from "@positron/core";

import type { DescriptorProps } from "../descriptor";

import type { ElementComponent } from "./element-component";
import type { ElementType } from "./element-type";
import type { ElementValue } from "./element-value";

/**
 * The {@link ElementProps} type represents a properties of the {@link Element}
 * descriptor.
 *
 * @typeParam TComponentProps - The properties of component that implements
 *   element.
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export interface ElementProps<
  TValue extends ElementValue = ElementValue,
  TComponent extends Nullish<ElementComponent> = Nullish<ElementComponent>,
  TProps extends UnknownObject = UnknownObject,
> extends DescriptorProps<ElementType, TValue> {
  /**
   * Component to render element.
   */
  Component: TComponent;

  /**
   * Component props.
   */
  props: TProps;
}
