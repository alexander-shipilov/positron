import type { EmptyObject } from "@positron/core";

import type { Descriptor } from "../descriptor";
import type { DescriptorOwner } from "../descriptor";

import type { ElementData } from "./element-data";
import type { ElementType } from "./element-type";
import type { ElementValue } from "./element-value";

/**
 * The {@link Element} type creates element descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TComponentProps - The properties of component that implements
 *   element.
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type Element<
  TValue extends ElementValue,
  TComponentProps = EmptyObject,
  TDescriptorProps = EmptyObject,
> = DescriptorOwner<
  TValue,
  Descriptor<
    ElementType,
    ElementData<TValue, TComponentProps, TDescriptorProps>
  >
>;
