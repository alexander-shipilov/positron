import type { ReactProps } from "@positron/react-core";

import type { Descriptor } from "../descriptor";

import type { ElementDescriptorType } from "./element-descriptor-type";
import type { ElementDescriptorValue } from "./element-descriptor-value";

/**
 * The {@link ElementDescriptor} type represents a properties of the
 * {@link ElementDescriptor} descriptor.
 *
 * @typeParam TComponentProps - The properties of component that implements
 *   element.
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type ElementDescriptor<
  TValue extends ElementDescriptorValue = ElementDescriptorValue,
  TProps extends ReactProps = ReactProps,
> = Descriptor<
  ElementDescriptorType,
  {
    /**
     * The {@link props} property contains required properties to render
     * element.
     */
    readonly props: Partial<TProps>;

    /**
     * The {@link value} property contains element value
     */
    readonly value: TValue;
  }
>;
