import type { ReactProps } from "@positron/react-core";

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
  TProps extends ReactProps = ReactProps,
> extends Descriptor<ElementType> {
  /**
   * Element class name.
   */
  className?: string;

  /**
   * Properties required to render element
   */
  props: Partial<TProps>;

  /**
   * Element value.
   */
  value: TValue;
}
