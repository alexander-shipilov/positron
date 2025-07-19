import type { UnknownObject } from "@positron/core";
import type { ReactComponent } from "@positron/react-core/src";

import type { Descriptor } from "../descriptor";

import type { ElementType } from "./element-type";
import type { ElementValue } from "./element-value";

/**
 * The {@link ElementDescriptor} type represents a properties of the
 * {@link Element} descriptor.
 *
 * @typeParam TComponentProps - The properties of component that implements
 *   element.
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export interface ElementDescriptor<
  TValue extends ElementValue = ElementValue,
  TComponent extends ReactComponent = ReactComponent,
  TProps extends UnknownObject = UnknownObject,
> extends Descriptor<ElementType, TValue> {
  /**
   * Element class name.
   */
  className?: string;

  /**
   * Component to render element.
   */
  Component: TComponent;

  /**
   * Component props.
   */
  props: TProps;
}
