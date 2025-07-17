import type { EmptyObject } from "@positron/core";

import type { Descriptor } from "../descriptor";
import type { DescriptorOwner } from "../descriptor";

import type { ComposedData } from "./composed-data";
import type { ComposedType } from "./composed-type";
import type { ComposedValue } from "./composed-value";

/**
 * The {@link Composed} type creates composed descriptor.
 *
 * @typeParam TValue - The value of descriptor
 * @typeParam TDescriptorProps - The props of descriptor
 *
 * @public
 */
export type Composed<
  TValue extends ComposedValue,
  TDescriptorProps = EmptyObject,
> = DescriptorOwner<
  TValue,
  Descriptor<
    ComposedType,
    ComposedData<TValue, TDescriptorProps> //
  >
>;
